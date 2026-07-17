# Listar

Este endpoint `devuelve` una lista de nóminas que cumplen con los criterios de búsqueda especificados en los [filtros de búsqueda](https://developers.factus.com.co/nomina/listar/#filtros-de-b%C3%BAsqueda) descritos abajo.

**Método:** GET

#### **Endpoint**

**Sandbox**

```
https://api-sandbox.factus.com.co/v2/payrolls
```

**Producción**

```
https://api.factus.com.co/v2/payrolls
```

### **Encabezados de la Solicitud**

Incluye los siguientes encabezados.

<table><tbody><tr><td><code>Content-Type</code> : <code>application/json</code><br>Indica que los datos se envían en formato JSON.</td></tr><tr><td><code>Authorization Bearer token_de_acceso</code><br>Token de autenticación necesario para acceder al recurso. Ver <a href="https://developers.factus.com.co/autenticacion/auth" target="_blank">Cómo generar token</a></td></tr><tr><td><code>Accept</code> : <code>application/json</code><br>Indica que la respuesta debe estar en formato JSON.</td></tr></tbody></table>

``**Nota:** Reemplaza `token_de_acceso` con el token proporcionado tras autenticarte.``

* * *

### Filtros de Búsqueda

[Sección titulada «Filtros de Búsqueda»](https://developers.factus.com.co/nomina/listar#filtros-de-b%C3%BAsqueda)

| |
| --- |
| **`filter[identification_number]`** `string`
Filtra por el número de identificación del trabajador. |
| **`filter[number]`** `string`
Filtra por el número de la nómina. |
| **`filter[names]`** `string`
Filtra por el nombre del trabajador. |
| **`page`** `integer`
Filtra por la página de resultados. |

##### El endpoint devuelve información paginada de las nóminas, incluyendo:

[Sección titulada «El endpoint devuelve información paginada de las nóminas, incluyendo:»](https://developers.factus.com.co/nomina/listar#el-endpoint-devuelve-informaci%C3%B3n-paginada-de-las-n%C3%B3minas-incluyendo)

* **Total**: Total de nóminas encontradas.
* **Por página**: 10 resultados por página.
* **Página actual**: Página en la que se encuentra.
* **Última página**: Última página disponible.
* **Desde**: Índice inicial de los resultados.
* **Hasta**: Índice final de los resultados.
* **Links**: Navegación entre las páginas del endpoint.

Para navegar entre las páginas, utilice el parámetro de consulta `page` y especifique el número de página deseado. Si el número de página no existe, el objeto `data` estará vacío.

* * *
