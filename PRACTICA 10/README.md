# PRÁCTICA 10 - DESPLIEGUE DE APLICACIÓN WEB CON DOCKER Y BASE DE DATOS

## Descripción

Esta práctica consiste en el desarrollo y despliegue de una aplicación web completa con autenticación de usuarios, conectada a una base de datos MySQL, utilizando Docker y comunicación segura mediante HTTPS.

---

## Tecnologías utilizadas

* Node.js + Express (backend)
* MySQL (base de datos)
* Docker y Docker Compose
* HTML, CSS y JavaScript (frontend)
* HTTPS con certificado autofirmado

---

## Estructura del proyecto

```
PRACTICA 10/
│
├── backend/
│   ├── server.js
│   ├── db.js
│   ├── certs/
│   └── package.json
│
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
│
├── index.html
├── login.html
├── register.html
└── libro.html
```

---

## Docker

El proyecto utiliza Docker para ejecutar los siguientes servicios:

* Base de datos MySQL
* Backend en Node.js

### Comando para iniciar los contenedores

```bash
docker-compose up -d
```

---

## Base de datos

Se utiliza una base de datos MySQL con una tabla de usuarios.

### Estructura de la tabla

```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50),
    password VARCHAR(50)
);
```

### Datos de prueba

```sql
INSERT INTO users (username, password)
VALUES ('usuario1', 'contrasena'),
       ('admin', 'admin123');
```

---

## Funcionalidades

### Registro de usuarios

* Endpoint: /api/register
* Permite crear nuevos usuarios
* Evita duplicados en la base de datos

### Inicio de sesión

* Endpoint: /api/login
* Validación de credenciales contra la base de datos

### Persistencia de datos

* Los datos se almacenan en MySQL dentro de Docker
* La información se mantiene tras reiniciar los contenedores

---

## HTTPS

La aplicación se ejecuta mediante HTTPS en:

```
https://localhost:3443
```

Se utiliza un certificado autofirmado generado localmente.

El navegador puede mostrar una advertencia de seguridad, lo cual es normal en entornos de desarrollo.

---

## Ejecución del proyecto

### 1. Levantar Docker

```bash
docker-compose up -d
```

### 2. Iniciar el backend

```bash
cd backend
npm start
```

### 3. Acceder a la aplicación

Abrir en el navegador:

```
https://localhost:3443
```

---

## Credenciales de prueba

```
usuario: usuario1
password: contrasena
```

```
usuario: admin
password: admin123
```

---

## Autor

Sara Romero
Práctica de Sistemas Digitales
------------------------------
