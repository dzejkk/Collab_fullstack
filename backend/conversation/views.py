from django.contrib.auth.decorators import login_required
from django.shortcuts import render, get_object_or_404, redirect

from item.models import Item
from .forms import ConversationMessageForm
from .models import Conversation


@login_required
def new_conversation(request, item_pk):
    item = get_object_or_404(Item, pk=item_pk)

    # Autor položky si sám so sebou konverzáciu vytvárať nebude – pošli ho na dashboard.
    if item.created_by == request.user:
        return redirect('dashboard:index')

    # Skús nájsť existujúcu konverzáciu k tomuto itemu, kde je user členom.
    existing_conversation = (
        Conversation.objects
        .filter(item=item, members=request.user)  # members__in=[request.user.id] -> members=request.user je čistejšie
        .first()
    )

    if existing_conversation is not None:
        return redirect('conversation:detail', pk=existing_conversation.pk)

    if request.method == 'POST':
        form = ConversationMessageForm(request.POST)
        if form.is_valid():
            # Vytvor konverzáciu a pridaj oboch členov
            conversation = Conversation.objects.create(item=item)
            conversation.members.add(request.user, item.created_by)
            conversation.save()

            # Ulož prvú správu
            conversation_message = form.save(commit=False)
            conversation_message.conversation = conversation
            conversation_message.created_by = request.user
            conversation_message.save()

            return redirect('item:detail', pk=item_pk)
    else:
        form = ConversationMessageForm()

    return render(request, 'conversation/new.html', {
        'form': form
    })


@login_required
def inbox(request):
    conversations = (
        Conversation.objects
        .filter(members=request.user)
        .prefetch_related('members')
        # .select_related('item')  # odkomentuj, ak potrebuješ priamo údaje z itemu v šablóne
    )

    return render(request, 'conversation/inbox.html', {
        'conversations': conversations
    })


@login_required
def detail(request, pk):
    """
    Detail konverzácie dostupný len pre jej členov.
    Umožňuje poslať novú správu do konverzácie.
    """
    # Len konverzácia, ktorej je user členom
    conversation = get_object_or_404(
        Conversation.objects.prefetch_related('members'),
        pk=pk,
        members=request.user
    )

    if request.method == 'POST':
        form = ConversationMessageForm(request.POST)
        if form.is_valid():
            conversation_message = form.save(commit=False)
            conversation_message.conversation = conversation
            conversation_message.created_by = request.user
            conversation_message.save()

            # Aktualizácia konverzácie (napr. updated_at, ak máš), inak nie je nutné
            conversation.save(update_fields=[])  # alebo úplne odstráň, ak to nič nerobí

            return redirect('conversation:detail', pk=pk)
    else:
        form = ConversationMessageForm()

    return render(request, 'conversation/detail.html', {
        'conversation': conversation,
        'form': form
    })
