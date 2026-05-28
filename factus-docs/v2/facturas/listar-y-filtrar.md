# Listar facturas

Este endpoint `devuelve` una lista de facturas que cumplen con los criterios de búsqueda especificados en los [filtros de búsqueda](https://developers.factus.com.co/facturas/listar-y-filtrar/#filtros-de-b%C3%BAsqueda) descritos abajo.

**Método:** GET

#### **Endpoint**

* [Sandbox](https://developers.factus.com.co/facturas/listar-y-filtrar#tab-panel-43)
* [Producción](https://developers.factus.com.co/facturas/listar-y-filtrar#tab-panel-44)

```
https://api-sandbox.factus.com.co/v2/bills
```

### **Encabezados de la Solicitud**

Incluye los siguientes encabezados.

<table><tbody><tr><td><code>Content-Type</code> : <code>application/json</code><br>Indica que los datos se envían en formato JSON.</td></tr><tr><td><code>Authorization Bearer token_de_acceso</code><br>Token de autenticación necesario para acceder al recurso. Ver <a href="https://developers.factus.com.co/autenticacion/auth" target="_blank">Cómo generar token</a></td></tr><tr><td><code>Accept</code> : <code>application/json</code><br>Indica que la respuesta debe estar en formato JSON.</td></tr></tbody></table>

``**Nota:** Reemplaza `token_de_acceso` con el token proporcionado tras autenticarte.``

* * *

### Filtros de Búsqueda

[Sección titulada «Filtros de Búsqueda»](https://developers.factus.com.co/facturas/listar-y-filtrar#filtros-de-b%C3%BAsqueda)

| |
| --- |
| **`filter[identification]`**
Filtra por el número de identificación del cliente. |
| **`filter[names]`**
Filtra por el nombre del cliente. |
| **`filter[number]`**
Filtra por el número de factura. |
| **`filter[prefix]`**
Filtra por el prefijo de factura. |
| **`filter[reference_code]`**
Filtra por código de referencia. |
| **`filter[status]`**
Filtra por el estado del la factura (1=validada, 0= pendiente por validar). |
| **`filter[per_page]`**
Cantidad de registros por pagina. Por defecto tiene el valor de 10. |
| **`filter[created_at][start_date]`**
Fecha de inicio (usando para buscar por un rango de fechas). |
| **`filter[created_at][end_date]`**
Fecha de fin (usado para buscar por un rango de fechas). |
| **`page`**
Filtrar por página. |

##### El endpoint devuelve información paginada de las facturas, incluyendo:

[Sección titulada «El endpoint devuelve información paginada de las facturas, incluyendo:»](https://developers.factus.com.co/facturas/listar-y-filtrar#el-endpoint-devuelve-informaci%C3%B3n-paginada-de-las-facturas-incluyendo)

* **Total**: Total de las facturas.
* **Por página**: 10 resultados por página.
* **Página actual**: Página en la que se encuentra.
* **Última página**: Última página disponible.
* **Desde**: Índice inicial de los resultados.
* **Hasta**: Índice final de los resultados.
* **Links**: Navegación entre las páginas del endpoint.

Para navegar entre las páginas, utilice el parámetro de consulta `page` y especifique el número de página deseado.
Si el número de página no existe, el objeto `data` estará vacío.

* * *
