#Djnago + React fullstack app in monorepo

**recomended working tree**

my-learning-app/
├─ backend/
│  ├─ manage.py
│  ├─ requirements.txt
│  ├─ .env.example
│  ├─ .env                      # not committed
│  ├─ config/                   # Django project (settings/urls/asgi/wsgi)
│  │  ├─ __init__.py
│  │  ├─ settings.py
│  │  ├─ urls.py
│  │  ├─ asgi.py
│  │  └─ wsgi.py
│  └─ api/                      # Django app (your API endpoints)
│     ├─ __init__.py
│     ├─ admin.py
│     ├─ apps.py
│     ├─ models.py
│     ├─ tests.py
│     ├─ urls.py
│     └─ views.py
│
├─ frontend/
│  ├─ index.html
│  ├─ package.json
│  ├─ vite.config.js
│  ├─ .env.example
│  ├─ .env                      # not committed
│  └─ src/
│     ├─ main.jsx
│     ├─ App.jsx
│     └─ api/
│        └─ client.js
│
├─ .gitignore
├─ README.md
└─ (optional) docker-compose.yml


## ToDo

1. figure out conection between django and Vite app
2. make agreement on auth, AI recomened JWT token auth, not buil in in django