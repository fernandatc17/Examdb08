# 📦 Proyecto Fullstack Dockerizado – Login, Registro, Productos y Usuarios

Este proyecto implementa una aplicación completa con:

- ✅ Backend: Node.js + Express + Sequelize
- ✅ Frontend: React + Vite
- ✅ Base de Datos: MySQL 8

Todo el sistema se ejecuta en **3 contenedores Docker** usando `docker-compose`.

---

## 🚀 Instrucciones para clonar y ejecutar

### 1. Clonar el repositorio

```bash
git clone https://github.com/fernandatc17/Examdb08.git
cd Examdb08
```

## 2. Crear archivo .env en la raíz del proyecto
```bash
nano .env
```
# CONTENIDO DEL ARCHIVO .ENV
```bash
MYSQL_ROOT_PASSWORD=rootpass
MYSQL_DATABASE=examen_db
MYSQL_USER=admin
MYSQL_PASSWORD=adminpass

# Variables para el backend (servicio express_api)
DB_HOST=db
DB_PORT=3306
DB_NAME=examen_db
DB_USER=admin
DB_PASSWORD=adminpass
PORT=8000
```

## 3. Ejecutar Docker Compose
```bash
sudo docker compose up --build
```

## 4 🌐 Acceso desde el navegador

```bash
http://18.223.170.173:4000/ 

```