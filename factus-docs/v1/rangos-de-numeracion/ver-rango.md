# Ver Rango

Este contenido es para V1. Cambia a la [versión más reciente](https://developers.factus.com.co/) para ver la documentación actualizada.

**Método:** GET

#### **Endpoint**

* [Pruebas](https://developers.factus.com.co/v1/rangos-de-numeracion/ver-rango#tab-panel-290)
* [Producción](https://developers.factus.com.co/v1/rangos-de-numeracion/ver-rango#tab-panel-291)

```
https://api-sandbox.factus.com.co/v1/numbering-ranges/:numbering_range_id
```

Este endpoint permite ver un rango de numeración en específico. Es útil para obtener información detallada sobre un rango de numeración en particular, incluyendo su prefijo, rango de numeración, resolución, fecha de inicio y fin, entre otros.

### **Encabezados de la Solicitud**

Para realizar la solicitud es necesario incluir los siguientes encabezados:

| **Encabezado** | **Valor** | **Descripción** |
| --- | --- | --- |
| `Content-Type` | `application/json` | Indica que los datos se envían en formato JSON. |
| `Authorization` | `Bearer <token_de_acceso>` | Token de autenticación necesario para acceder al recurso. Ver [Cómo generar token](https://developers.factus.com.co/autenticacion/auth) |
| `Accept` | `application/json` | Indica que la respuesta debe estar en formato JSON. |

``**Nota:** Reemplaza `token_de_acceso` con el token proporcionado tras autenticarte.``

* * *

#### Respuesta del Endpoint

[Sección titulada «Respuesta del Endpoint»](https://developers.factus.com.co/v1/rangos-de-numeracion/ver-rango#respuesta-del-endpoint)

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

### Variables de Ruta (Path Variables)

[Sección titulada «Variables de Ruta (Path Variables)»](https://developers.factus.com.co/v1/rangos-de-numeracion/ver-rango#variables-de-ruta-path-variables)

* `numbering_range_id` ID del rango de numeración

* * *

### Ejemplo de respuesta

[Sección titulada «Ejemplo de respuesta»](https://developers.factus.com.co/v1/rangos-de-numeracion/ver-rango#ejemplo-de-respuesta)

* [status 200](https://developers.factus.com.co/v1/rangos-de-numeracion/ver-rango#tab-panel-292)

```
{ "status": "OK", "message": "Solicitud exitosa", "data": { "id": 4, "document": "21", "document_name": "Factura de Venta", "prefix": "SEPT", "from": 990000000, "to": 995000000, "current": 990000295, "resolution_number": "18760000001", "start_date": "19-01-2019", "end_date": "19-01-2030", "technical_key": "fc8eac422eba16e22ffd8c6f94b3f40a6e38162c", "is_expired": false, "is_active": 1, "created_at": "2023-06-01T08:00:38Z", "updated_at": "2024-09-10T10:31:50Z" }}
```
