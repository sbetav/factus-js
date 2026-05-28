# Obtener rangos de numeración

Este contenido es para V1. Cambia a la [versión más reciente](https://developers.factus.com.co/) para ver la documentación actualizada.

El endpoint **Rangos de Numeración** permite obtener los rangos de numeración disponibles en la API de Factus. Este recurso es útil para obtener información precisa sobre los rangos de numeración de documentos específicos, incluyendo su prefijo, rango de numeración, resolución, fecha de inicio y fin, entre otros.

* * *

**Método:** GET

#### **Endpoint**

* [Pruebas](https://developers.factus.com.co/v1/rangos-de-numeracion/obtener-rangos#tab-panel-284)
* [Producción](https://developers.factus.com.co/v1/rangos-de-numeracion/obtener-rangos#tab-panel-285)

```
https://api-sandbox.factus.com.co/v1/numbering-ranges?filter[id]&filter[document]&filter[resolution_number]&filter[technical_key]&filter[is_active]
```

### **Encabezados de la Solicitud**

Para realizar la solicitud es necesario incluir los siguientes encabezados:

| **Encabezado** | **Valor** | **Descripción** |
| --- | --- | --- |
| `Content-Type` | `application/json` | Indica que los datos se envían en formato JSON. |
| `Authorization` | `Bearer <token_de_acceso>` | Token de autenticación necesario para acceder al recurso. Ver [Cómo generar token](https://developers.factus.com.co/autenticacion/auth) |
| `Accept` | `application/json` | Indica que la respuesta debe estar en formato JSON. |

``**Nota:** Reemplaza `token_de_acceso` con el token proporcionado tras autenticarte.``

* * *

#### Query Params: Parámetros de Consulta

[Sección titulada «Query Params: Parámetros de Consulta»](https://developers.factus.com.co/v1/rangos-de-numeracion/obtener-rangos#query-params-par%C3%A1metros-de-consulta)

| **Parámetro** | **Descripción** |
| --- | --- |
| `filter[id]` | ID del registro |
| `filter[document]` | Código de documento. Para ver los códigos de documento disponibles vea la tabla [códigos de documentos](https://developers.factus.com.co/v1/tablas-de-referencia/tablas/#c%C3%B3digos-de-tipos-de-documento-para-los-rangos-de-numeraci%C3%B3n) |
| `filter[resolution_number]` | Número de resolución (solo para facturas y documentos soporte) |
| `filter[technical_key]` | Clave técnica (solo para facturas) |
| `filter[is_active]` | Estado del registro: `1` para activo, `0` para inactivo |

* * *

#### Respuesta del Endpoint

[Sección titulada «Respuesta del Endpoint»](https://developers.factus.com.co/v1/rangos-de-numeracion/obtener-rangos#respuesta-del-endpoint)

| **Campo** | **Descripción** |
| --- | --- |
| `id` | ID del rango de numeración |
| `document` | Nombre del documento |
| `prefix` | Prefijo del rango de numeración |
| `from` | Número de inicio del rango de numeración |
| `to` | Número del final del rango de numeración |
| `current` | Siguiente número dentro del rango de numeración |
| `resolution_number` | Número de resolución |
| `start_date` | Fecha en la que se expidió el rango de numeración |
| `end_date` | Fecha de vencimiento del rango de numeración |
| `technical_key` | Clave técnica |
| `is_expired` | El valor es `1` cuando el rango está vencido y `0` cuando está vigente |
| `is_active` | El valor es `1` cuando el rango está activo y `0` cuando está inactivo |

* * *

### Ejemplo de respuesta

[Sección titulada «Ejemplo de respuesta»](https://developers.factus.com.co/v1/rangos-de-numeracion/obtener-rangos#ejemplo-de-respuesta)

* [status 200](https://developers.factus.com.co/v1/rangos-de-numeracion/obtener-rangos#tab-panel-286)

```
{ "status": "OK", "message": "Solicitud exitosa", "data": { "data": [ { "id": 5, "document": "Nota Crédito", "prefix": "NC", "from": 1, "to": 16000000, "current": 163, "resolution_number": null, "start_date": "2030-01-19", "end_date": "2030-01-19", "technical_key": null, "is_expired": false, "is_active": 1, "deleted_at": null, "created_at": "2023-06-01T08:00:38Z", "updated_at": "2025-07-15T09:20:04Z" }, { "id": 62, "document": "Nota Crédito", "prefix": "NCC", "from": 1, "to": 10000, "current": 2, "resolution_number": null, "start_date": "2050-12-31", "end_date": "2050-12-31", "technical_key": null, "is_expired": false, "is_active": 1, "deleted_at": null, "created_at": "2024-11-14T09:56:39Z", "updated_at": "2025-08-08T13:36:03Z" }, { "id": 6, "document": "Nota Débito", "prefix": "ND", "from": 1, "to": 16000000, "current": 59, "resolution_number": null, "start_date": "2030-01-19", "end_date": "2030-01-19", "technical_key": null, "is_expired": false, "is_active": 1, "deleted_at": null, "created_at": "2023-06-01T08:00:38Z", "updated_at": "2025-07-03T21:36:09Z" }, { "id": 63, "document": "Nota Débito", "prefix": "NDD", "from": 1, "to": 10000, "current": 2, "resolution_number": null, "start_date": "2050-12-31", "end_date": "2050-12-31", "technical_key": null, "is_expired": false, "is_active": 1, "deleted_at": null, "created_at": "2024-11-14T10:08:07Z", "updated_at": "2024-11-14T10:08:43Z" }, { "id": 9, "document": "Nota de Ajuste Documento Soporte", "prefix": "NDA", "from": 1, "to": 16000000, "current": 53, "resolution_number": null, "start_date": "2030-01-19", "end_date": "2030-01-19", "technical_key": null, "is_expired": false, "is_active": 1, "deleted_at": null, "created_at": "2023-06-07T14:07:06Z", "updated_at": "2025-07-03T21:46:49Z" }, { "id": 12, "document": "Nómina", "prefix": "NEF", "from": 1, "to": 1000000, "current": 72, "resolution_number": null, "start_date": "2050-12-31", "end_date": "2050-12-31", "technical_key": null, "is_expired": false, "is_active": 1, "deleted_at": null, "created_at": "2023-09-04T21:38:20Z", "updated_at": "2025-07-31T10:21:03Z" }, { "id": 61, "document": "Nota de eliminación de nómina", "prefix": "NEN", "from": 1, "to": 16000000, "current": 14, "resolution_number": null, "start_date": "2050-12-31", "end_date": "2050-12-31", "technical_key": null, "is_expired": false, "is_active": 1, "deleted_at": null, "created_at": "2024-10-02T16:12:12Z", "updated_at": "2025-06-13T15:34:51Z" }, { "id": 4, "document": "Factura de Venta", "prefix": "SETP", "from": 990000000, "to": 995000000, "current": 990000875, "resolution_number": "18760000001", "start_date": "2030-01-19", "end_date": "2030-01-19", "technical_key": "fc8eac422eba16e22ffd8c6f94b3f40a6e38162c", "is_expired": false, "is_active": 1, "deleted_at": null, "created_at": "2023-06-01T08:00:38Z", "updated_at": "2025-08-01T11:26:26Z" }, { "id": 67, "document": "Factura de talonario o de papel", "prefix": "FTP", "from": 990000000, "to": 995000000, "current": 990000017, "resolution_number": "18760000001", "start_date": "2030-01-19", "end_date": "2030-01-19", "technical_key": "fc8eac422eba16e22ffd8c6f94b3f40a6e38162c", "is_expired": false, "is_active": 1, "deleted_at": null, "created_at": "2024-02-09T16:12:05Z", "updated_at": "2025-01-14T21:43:04Z" }, { "id": 8, "document": "Documento Soporte", "prefix": "SEDS", "from": 984000000, "to": 985000000, "current": 984000103, "resolution_number": "18760000009", "start_date": "2025-12-31", "end_date": "2025-12-31", "technical_key": null, "is_expired": false, "is_active": 1, "deleted_at": null, "created_at": "2023-06-05T09:34:11Z", "updated_at": "2025-07-03T21:39:44Z" } ], "pagination": { "total": 10, "per_page": 10, "current_page": 1, "last_page": 1, "from": 1, "to": 10, "links": [ { "url": null, "label": "&laquo; Anterior", "active": false }, { "url": "http://api.test/v1/numbering-ranges?page=1", "label": 1, "active": true, "page": 1 }, { "url": null, "label": "Siguiente &raquo;", "active": false, "page": 2 } ] } }}
```
