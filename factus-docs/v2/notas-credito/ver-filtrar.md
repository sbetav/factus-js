# Listar Notas Crédito

Este endpoint `devuelve` una lista de notas crédito que cumple con los criterios de búsqueda especificados en los [filtros de búsqueda](https://developers.factus.com.co/notas-credito/ver-filtrar/#filtros-de-b%C3%BAsqueda) descritos abajo.

**Método:** GET

#### **Endpoint**

* [Sandbox](https://developers.factus.com.co/notas-credito/ver-filtrar#tab-panel-68)
* [Producción](https://developers.factus.com.co/notas-credito/ver-filtrar#tab-panel-69)

```
https://api-sandbox.factus.com.co/v2/credit-notes?filter[identification]&filter[names]&filter[number]&filter[prefix]&filter[reference_code]&filter[status]
```

### **Encabezados de la Solicitud**

Incluye los siguientes encabezados.

<table><tbody><tr><td><code>Content-Type</code> : <code>application/json</code><br>Indica que los datos se envían en formato JSON.</td></tr><tr><td><code>Authorization Bearer token_de_acceso</code><br>Token de autenticación necesario para acceder al recurso. Ver <a href="https://developers.factus.com.co/autenticacion/auth" target="_blank">Cómo generar token</a></td></tr><tr><td><code>Accept</code> : <code>application/json</code><br>Indica que la respuesta debe estar en formato JSON.</td></tr></tbody></table>

``**Nota:** Reemplaza `token_de_acceso` con el token proporcionado tras autenticarte.``

* * *

### Filtros de Búsqueda

[Sección titulada «Filtros de Búsqueda»](https://developers.factus.com.co/notas-credito/ver-filtrar#filtros-de-b%C3%BAsqueda)

| |
| --- |
| **`filter[identification]`**
Filtra por el número de identificación del cliente. |
| **`filter[names]`**
Filtra por el nombre del cliente. |
| **`filter[number]`**
Filtra por el número de nota crédito. |
| **`filter[prefix]`**
Filtra por el prefijo de nota crédito. |
| **`filter[reference_code]`**
Filtra por código de referencia. |
| **`filter[status]`**
Filtra por el estado del la nota crédito (1=validada, 0= pendiente por validar). |
| **`filter[per_page]`**
Cantidad de registros por pagina. Por defecto tiene el valor de 10. |
| **`filter[created_at][start_date]`**
Fecha de inicio (usando para buscar por un rango de fechas). |
| **`filter[created_at][end_date]`**
Fecha de fin (usado para buscar por un rango de fechas). |
| **`page`**
Filtrar por página. |

El endpoint devuelve información paginada de las notas crédito, incluyendo:

* **total**: Total de las notas crédito.
* **por página**: 10 resultados por página.
* **página actual**: Página en la que se encuentra.
* **última página**: Última página disponible.
* **desde**: Índice inicial de los resultados.
* **hasta**: Índice final de los resultados.
* **links**: Navegación entre las páginas del endpoint.

Para navegar entre las páginas, utilice el parámetro de consulta `page` y especifique el número de página deseado.
