# Proyecto: Números Primos Interactivos

Este es un proyecto simple de una página web interactiva que muestra el siguiente o el anterior número primo según el botón del ratón que se presione:

- **Click izquierdo**: Muestra el siguiente número primo.
- **Click derecho**: Muestra el número primo anterior (siempre y cuando no se intente retroceder más allá de `2`).

## Estructura del Proyecto

El proyecto consta de tres archivos:

1. **index.html**: Archivo HTML principal que contiene el contenedor donde se muestra el número primo.
2. **styles.css**: Archivo CSS que define los estilos de la página, centrándolo todo y aplicando los colores negro para el fondo y dorado para los números.
3. **script.js**: Archivo JavaScript que contiene la lógica de la aplicación, con las funciones para detectar números primos y los eventos que manejan los clicks del ratón.

## Cómo funciona

- **El fondo de la pantalla** es negro, y el número mostrado es dorado, grande y centrado.
- Al hacer click con el botón izquierdo, el número mostrado cambiará al siguiente número primo.
- Al hacer click con el botón derecho, se retrocede al número primo anterior (siempre que no sea menor que 2).

### Ejecución

Para ejecutar este proyecto, simplemente sigue los siguientes pasos:

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/numeros-primos-interactivos.git
