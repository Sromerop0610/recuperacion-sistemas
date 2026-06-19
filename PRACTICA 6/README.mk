# Recuperador de Contraseñas por Fuerza Bruta (SHA‑256)

**Alumno/a:** Sara Romero Peralta
**Curso:** 1ºDAW A

## Descripción del programa

El programa **ProgramaHash.py** realiza un ataque de fuerza bruta para encontrar una contraseña a partir de su **hash SHA‑256**.
El usuario introduce:

* Un hash SHA‑256 (64 caracteres hexadecimales)
* Una longitud fija para la contraseña buscada

El programa genera todas las combinaciones posibles de caracteres permitidos y compara su hash SHA‑256 con el hash objetivo.
Si encuentra una coincidencia, devuelve:

✔ La contraseña original
✔ El tiempo que tardó en encontrarla

Si no se encuentra ninguna coincidencia, lo indica al usuario.

---

## A tener en cuenta al ejecutar el programa

* Debes ejecutar el programa desde la terminal con esta estructura:

```bash
python ProgramaHash.py <hash_SHA256> <longitud>
```

Ejemplo:

```bash
python ProgramaHash.py 51890809c3dc6adef82a7d1cfd8ded8e3f7664911b019e6529ebe94ed0c548a8 4
```

### Reglas importantes:

* **El hash debe tener exactamente 64 caracteres** (formato SHA‑256 en hexadecimal).
* **La longitud debe ser un entero positivo.**
* La contraseña buscada solo puede estar formada por:

  * Letras minúsculas (incluye ñ)
  * Letras mayúsculas (incluye Ñ)
  * Dígitos 0–9
  * Caracteres especiales: `!@#$%&/()=`
* El programa genera *todas* las combinaciones posibles para la longitud indicada, por lo que:

  * Longitudes mayores generan tiempos de búsqueda muy altos.
  * No usa técnicas avanzadas como generadores ni `itertools.product`, ya que no se han dado aún.

---

## Consideraciones del funcionamiento

* Si algún parámetro es incorrecto, el programa mostrará un mensaje indicando el **uso correcto** y no continuará.
* La búsqueda es estrictamente por **fuerza bruta**, por lo que el tiempo crece exponencialmente según la longitud.
* El tiempo total de búsqueda se muestra con dos decimales.
* Si no existe una contraseña que genere ese hash con la longitud indicada, se mostrará un mensaje informándolo.

---

## Requisitos

* **Python 3.10 o superior**
* **Terminal de línea de comandos**
* No requiere ninguna librería externa.

---

## Cómo instalar Python

### Para Windows

1. Accede a: [https://www.python.org/downloads/](https://www.python.org/downloads/)
2. Haz clic en **Download Python 3.x.x**
3. Ejecuta el `.exe`
4. **IMPORTANTE:** activa la casilla *Add Python 3.x to PATH*
5. Pulsa **Install Now**
6. Comprueba la instalación:

```bash
py --version
py -m pip --version
```

o:

```bash
python --version
python -m pip --version
```

#### Para ejecutar el programa en Windows:

```bash
python ProgramaHash.py <hash> <longitud>
```

---

### Para Linux

En Linux normalmente se usa `python3` y `pip3`.

1. **Debian/Ubuntu**

```bash
sudo apt update
sudo apt install -y python3 python3-pip
```

Verificar:

```bash
python3 --version
pip3 --version
```

2. **Fedora**

```bash
sudo dnf install -y python3 python3-pip
```

3. **Arch Linux / Manjaro**

```bash
sudo pacman -Syu python python-pip
```

4. **openSUSE**

```bash
sudo zypper install python3 python3-pip
```

#### Para ejecutar el programa en Linux:

```bash
python3 ProgramaHash.py <hash> <longitud>
```
