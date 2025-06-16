# prueba tecnica Laravel + Inertia.js (React + Vite)

Este proyecto usa Laravel con Inertia.js y React para el frontend, gestionado con Vite.

---

## Requisitos

- PHP
- Composer
- Node.js 18+
- pnpm / npm / yarn
- SQLite
- Git

---

## Pasos para correr el proyecto en local

### 1. Clonar el repositorio

```bash
git clone https://github.com/watercubz/prueba-tecnica.git
cd prueba-tecnica
````

### 2. Instalar dependencias PHP y Node.js

```bash
composer install
pnpm install          # o npm install
```

### 3. Crear archivo de entorno

Copia el `.env.example` a `.env` y configura tus variables (base de datos, APP\_KEY, etc).

```bash
cp .env.example .env
```

### 4. Generar la clave de la aplicación

```bash
php artisan key:generate
```

### 5. Configurar base de datos

Si usas SQLite:

```bash
touch database/database.sqlite
```

Luego ajusta en `.env`:

```
DB_CONNECTION=sqlite
DB_DATABASE=/ruta/completa/a/database/database.sqlite
```

Si usas MySQL o PostgreSQL, configura sus variables.

### 6. Ejecutar migraciones y seeders (si hay)

```bash
php artisan migrate --seed
```

### 7. Construir los assets frontend (React + Vite)

Para desarrollo:

```bash
pnpm run dev         # o npm run dev 
```

Para producción:

```bash
pnpm run build
```

### 8. Levantar el servidor Laravel

```bash
php artisan serve
```

Por defecto estará en [http://localhost:8000](http://localhost:8000)

---

## Uso

* Visita `http://localhost:8000` para ver la aplicación.
* usuario de pruebas `gmail: admin@amdmin.com, password: sosasosa`

