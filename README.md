# 🚀 Prueba Técnica: Laravel + Inertia.js (React + Vite)

Este proyecto utiliza **Laravel** en el backend e **Inertia.js con React** en el frontend, administrado con **Vite**.

---

## 📋 Requisitos

-   PHP
-   Composer
-   Node.js 18+
-   pnpm / npm / yarn
-   SQLite (o MySQL/PostgreSQL)
-   Git

---

## 🎥 Demo

la aplicación en local:

👉 [Ver demostración en YouTube](https://youtu.be/YLPCGZnQIMQ)

---

## ⚙️ Instalación local

### 1. Clonar el repositorio

```bash
git clone https://github.com/watercubz/prueba-tecnica.git
cd prueba-tecnica
```

### 2. Instalar dependencias

```bash
composer install
pnpm install  # o npm install
```

### 3. Configurar entorno

```bash
cp .env.example .env
```

Edita el archivo `.env` con tus variables (base de datos, `APP_KEY`, etc.).

### 4. Generar clave de aplicación

```bash
php artisan key:generate
```

### 5. Configurar la base de datos

#### SQLite (recomendado para pruebas)

```bash
touch database/database.sqlite
```

Y en `.env`:

```
DB_CONNECTION=sqlite
DB_DATABASE=/ruta/completa/a/database/database.sqlite
```

#### MySQL/PostgreSQL

Edita las variables correspondientes en `.env`.

### 6. Ejecutar migraciones y seeders

```bash
php artisan migrate --seed
```

### 7. Iniciar el frontend con Vite

Para desarrollo:

```bash
pnpm run dev  # o npm run dev
```

Para producción:

```bash
pnpm run build
```

### 8. Levantar el servidor Laravel

```bash
php artisan serve
```

Accede en tu navegador a: [http://localhost:8000](http://localhost:8000)

---

## 👤 Acceso de prueba

-   **Email:** `admin@admin.com`
-   **Contraseña:** `sosasosa`
