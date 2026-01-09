#Djnago + React fullstack app in monorepo

**recomended working tree**

```
our-learning-app/
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
```


## ToDo

1. figure out conection between django and Vite app
2. make agreement on auth, AI recomened JWT token auth, not buil in in django

### Github workflow

Rule of thumb:

main is always “working”
every change goes into a feature branch
merge via Pull Request (PR)

1. Always start by syncing main
   ```
    git checkout main
    git pull
   ```
2. Create a feature branch for each task
 - feature/login-jwt
 - feature/todos-api
 - fix/cors-railway
   
   ```
   git checkout -b feature/login-jwt
   ```
3. Push your branch
   ```
   git push -u origin feature/login-jwt
   ```
4. Open a Pull Request (PR) on GitHub

- Compare feature/login-jwt → main
- Your teammate reviews (even quick “LGTM” is fine)
- Merge PR into main

5. After merge: clean up branch locally

    ```
    git checkout main
    git pull
    git branch -d feature/login-jwt
    ```
