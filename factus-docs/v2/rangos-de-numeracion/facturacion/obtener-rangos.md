# Listar

El endpoint **Rangos de Numeración** permite obtener los rangos de numeración disponibles en la API de Factus. Este recurso es útil para obtener información precisa sobre los rangos de numeración de documentos específicos, incluyendo su prefijo, rango de numeración, resolución, fecha de inicio y fin, entre otros.

* * *

**Método:** GET

#### **Endpoint**

**Sandbox**

```
https://api-sandbox.factus.com.co/v2/numbering-ranges?filter[id]&filter[document]&filter[resolution_number]&filter[technical_key]&filter[is_active]&filter[trashed]
```

**Producción**

```
https://api.factus.com.co/v2/numbering-ranges?filter[id]&filter[document]&filter[resolution_number]&filter[technical_key]&filter[is_active]&filter[trashed]
```

### **Encabezados de la Solicitud**

Incluye los siguientes encabezados.

<table><tbody><tr><td><code>Content-Type</code> : <code>application/json</code><br>Indica que los datos se envían en formato JSON.</td></tr><tr><td><code>Authorization Bearer token_de_acceso</code><br>Token de autenticación necesario para acceder al recurso. Ver <a href="https://developers.factus.com.co/autenticacion/auth" target="_blank">Cómo generar token</a></td></tr><tr><td><code>Accept</code> : <code>application/json</code><br>Indica que la respuesta debe estar en formato JSON.</td></tr></tbody></table>

``**Nota:** Reemplaza `token_de_acceso` con el token proporcionado tras autenticarte.``

* * *

### Variables de Ruta, Path Variables

[Sección titulada «Variables de Ruta, Path Variables»](https://developers.factus.com.co/rangos-de-numeracion/facturacion/obtener-rangos#variables-de-ruta-path-variables)

| |
| --- |
| **`filter[id]`**
ID del registro |
| **`filter[document]`**
Código de documento. Para ver los códigos de documento disponibles vea la tabla [códigos de documentos](https://developers.factus.com.co/tablas-de-referencia/tablas/#c%C3%B3digos-de-tipos-de-documento-para-los-rangos-de-numeraci%C3%B3n) |
| **`filter[resolution_number]`**
Número de resolución (solo para facturas y documentos soporte) |
| **`filter[technical_key]`**
Clave técnica (solo para facturas) |
| **`filter[is_active]`**
Estado del registro: `1` para activo, `0` para inactivo |
| **`filter[trashed]`**
**Sin Filtro**: Comportamieno por defecto: solo se listan los rangos **activos** (no eliminados)
`with`: Incluye **tanto** los rangos activos como los eliminados.
`only`: Muestra **únicamente** los rangos eliminados. |

Cualquier otro valor distinto de `with` u `only` se ignora y se aplica el comportamiento por defecto.

```
GET /v2/numbering-ranges # solo activosGET /v2/numbering-ranges?filter[trashed]=with # activos + eliminadosGET /v2/numbering-ranges?filter[trashed]=only # solo eliminados
```

Cada rango en la respuesta incluye el campo `deleted_at`, que permite identificar si está eliminado (`deleted_at` no nulo) o activo (`deleted_at` nulo):

```
{ "data": [ { "id": 12, "document": "Factura electrónica de venta", "prefix": "SETP", "resolution_number": "18760000001", "from": 1, "to": 5000000, "current": 358, "start_date": "2024-01-01", "end_date": "2026-01-01", "technical_key": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", "is_expired": false, "is_active": true, "is_external": false, "deleted_at": null, "created_at": "2024-01-01T10:00:00.000000Z", "updated_at": "2024-01-01T10:00:00.000000Z" } ], "pagination": { "total": 1, "per_page": 10, "current_page": 1, "last_page": 1, "from": 1, "to": 1, "links": ["..."] }}
```

Un rango eliminado se puede restaurar con `PUT /v2/numbering-ranges/{numbering_range}/restore`.

[Ver Documentación, restaurar un rango de numeración](https://developers.factus.com.co/rangos-de-numeracion/facturaci%C3%B3n/restaurar-rango)

* * *

#### Respuesta del Endpoint

[Sección titulada «Respuesta del Endpoint»](https://developers.factus.com.co/rangos-de-numeracion/facturacion/obtener-rangos#respuesta-del-endpoint)

| |
| --- |
| **`id`**
ID del rango de numeración |
| **`document`**
Nombre del documento |
| **`prefix`**
Prefijo del rango de numeración |
| **`from`**
Número de inicio del rango de numeración |
| **`to`**
Número del final del rango de numeración |
| **`current`**
Siguiente número dentro del rango de numeración |
| **`resolution_number`**
Número de resolución |
| **`start_date`**
Fecha en la que se expidió el rango de numeración |
| **`end_date`**
Fecha de vencimiento del rango de numeración |
| **`technical_key`**
Clave técnica |
| **`is_expired`**
El valor es `1` cuando el rango está vencido y `0` cuando está vigente |
| **`is_active`**
El valor es `1` cuando el rango está activo y `0` cuando está inactivo |
