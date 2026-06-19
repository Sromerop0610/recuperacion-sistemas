import hashlib
import itertools
import sys
import time
import re


def validar_argumentos():
    if len(sys.argv) != 3:
        print("Uso: python modulo_python.py <hash> <longitud>")
        return None, None

    hash_input = sys.argv[1]
    longitud_input = sys.argv[2]

    # validar hash SHA-256 real (hexadecimal)
    if len(hash_input) != 64 or not re.fullmatch(r"[0-9a-fA-F]{64}", hash_input):
        print("Error: hash inválido (debe ser SHA-256 hexadecimal)")
        return None, None

    try:
        longitud = int(longitud_input)
        if longitud <= 0:
            print("Error: longitud debe ser positiva")
            return None, None
    except ValueError:
        print("Error: longitud debe ser un número")
        return None, None

    return hash_input.lower(), longitud


def obtener_caracteres():
    return "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"


def generar_hash(texto):
    return hashlib.sha256(texto.encode()).hexdigest()


def buscar_hash(hash_objetivo, caracteres, longitud):
    inicio = time.time()

    for combinacion in itertools.product(caracteres, repeat=longitud):
        intento = ''.join(combinacion)

        if generar_hash(intento) == hash_objetivo:
            fin = time.time()
            return intento, fin - inicio

    return None, None


def main():
    hash_objetivo, longitud = validar_argumentos()
    if hash_objetivo is None:
        return

    caracteres = obtener_caracteres()

    resultado, tiempo = buscar_hash(hash_objetivo, caracteres, longitud)

    if resultado:
        print(f"Encontrado: {resultado}")
        print(f"Tiempo: {tiempo:.2f} segundos")
    else:
        print("No encontrado")


if __name__ == "__main__":
    main()