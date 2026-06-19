import sys
import subprocess


def validar_ip():

    if len(sys.argv) != 2:
        print("Uso correcto: python ComprobadorConexion.py <ip>")
        sys.exit(1)

    ip = sys.argv[1].split(".")

    if len(ip) != 4 or not all(parte.isdigit() for parte in ip):
        print("Error: formato de IP incorrecto")
        sys.exit(1)

    for parte in ip:
        if not 0 <= int(parte) <= 255:
            print("Error: valores de IP entre 0 y 255")
            sys.exit(1)

    return ".".join(ip)


def comprobar_conexion(ip):

    if sys.platform.startswith("win"):
        comando = ["ping", "-n", "1", ip]

    elif sys.platform.startswith("linux") or sys.platform.startswith("darwin"):
        comando = ["ping", "-c", "1", ip]

    else:
        print("Sistema operativo no compatible")
        return


    try:

        resultado = subprocess.run(
            comando,
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL
        )


        if resultado.returncode == 0:
            print(f"La IP {ip} está conectada")

        else:
            print(f"La IP {ip} no responde")


    except Exception as error:
        print(f"Error ejecutando ping: {error}")



def main():

    ip = validar_ip()

    comprobar_conexion(ip)



if __name__ == "__main__":
    main()