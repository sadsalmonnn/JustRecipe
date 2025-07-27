# 🍽️ JustRecipe - Fullstack Setup Instructions

Welcome to **JustRecipe**, a fullstack recipe sharing app built with Angular (frontend), Django (backend), PostgreSQL (database), and Tailwind CSS (styling).  
This document will guide you through setting up the project locally as a developer.

---

## 🚧 Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS recommended)
- [Angular CLI](https://angular.io/cli)
- [Python 3.12](https://www.python.org/downloads/release/python-3120)
- [PostgreSQL](https://www.postgresql.org/) Don't install this yet
- [Git](https://git-scm.com/)

---

## 📁 Step 1: Clone the Repository

```bash
git clone https://github.com/sadsalmonnn/JustRecipe.git
cd JustRecipe
```

---

## 🖥️ Step 2: Frontend (Angular) Setup

```bash
cd frontend

# Install all dependencies
npm install

# Run the Angular app
ng serve
```

Access the app at: [http://localhost:4200](http://localhost:4200)

### ✨ Tailwind Support

Tailwind is already configured with Angular. You can use Tailwind utility classes directly in your component templates and stylesheets.

---

## 🐍 Step 3: Backend (Django) Setup

```bash
cd backend

# Create and activate a virtual environment
Open the Command Palette (Ctrl+Shift+P), search for the Python: Create Environment command, and select it.
Or you can do the following

python -m venv .venv

# Activate virtual environment
# macOS/Linux:
source ../.venv/bin/activate
# Windows:
../.venv/Scripts/activate

# Once venv is actived, install Python dependencies
pip install -r requirements.txt

# You can now run the backend server
python manage.py runserver

Backend will run at: [http://127.0.0.1:8000](http://127.0.0.1:8000)
```

---

## 🔐 Step 4: Environment Variables

Create a `.env` file in the `backend/` folder and paste the following (change the key):

```env
SECRET_KEY='your_secret_key_here'
DEBUG=True
```

---

## 🔁 Git Best Practices

- Do **not** commit:
  - `.env` files
  - `.venv/`
  - `node_modules/`

These should be listed in `.gitignore`.

- Use feature branches and submit pull requests
- Keep `requirements.txt` updated using:

```bash
pip freeze > requirements.txt
```

---

## 🛠 Optional Tools

| Tool     | Use                      |
| -------- | ------------------------ |
| Prettier | Auto-format Angular code |

---

## 👥 Contributing Workflow

1. Create a branch: `git checkout -b nameLastinitials/your-feature (e.g. solomonAD/feature1)`
2. Make your changes
3. Commit: `git commit -m "Add your message"`
4. Push: `git push origin feature/your-feature`
5. Open a pull request on GitHub

---

## ✅ You're All Set!

Once the backend is running on `localhost:8000` and the frontend is on `localhost:4200`, your app will be connected and ready for development.

Happy cooking 🧑‍🍳💻!
