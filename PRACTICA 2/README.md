# Comprobador de Conexión IP

**Alumno/a:** Sara Romero Peralta  
**Curso:** 1º DAW A

## Descripción del programa

El programa consiste en un comprobador de conexión de direcciones IP.

Primero valida que la dirección IP introducida tenga un formato correcto y que sus valores estén dentro del rango permitido. Después realiza un comando `ping` para comprobar si dicha dirección responde.

El programa está preparado para ejecutarse en diferentes sistemas operativos, adaptando automáticamente el comando `ping` utilizado según la plataforma.

El resultado final mostrará si la IP está conectada o si no responde.

---

## Funcionamiento

El programa recibe una dirección IP mediante la línea de comandos.

La ejecución debe realizarse de la siguiente forma:

```bash
python ComprobadorConexion.py <ip>