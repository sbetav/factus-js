# Actualizar consecutivo

Este contenido es para V1. Cambia a la [versión más reciente](https://developers.factus.com.co/) para ver la documentación actualizada.

Este endpoint permite actualizar el consecutivo de un rango de numeración en específico.

**Método:** PATCH

#### **Endpoint**

* [Pruebas](https://developers.factus.com.co/v1/rangos-de-numeracion/actualizar-consecutivo#tab-panel-275)
* [Producción](https://developers.factus.com.co/v1/rangos-de-numeracion/actualizar-consecutivo#tab-panel-276)

```
https://api-sandbox.factus.com.co/v1/numbering-ranges/:numbering_range_id/current
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

### Request

[Sección titulada «Request»](https://developers.factus.com.co/v1/rangos-de-numeracion/actualizar-consecutivo#request)

| Campo | Descripción |
| --- | --- |
| `current` | Número actual del consecutivo. |

### Response

[Sección titulada «Response»](https://developers.factus.com.co/v1/rangos-de-numeracion/actualizar-consecutivo#response)

| Campo | Descripción |
| --- | --- |
| `id` | ID del rango de numeración. |
| `document` | Código del documento. |
| `document_name` | Nombre del documento. |
| `prefix` | Prefijo del rango de numeración. |
| `from` | Número de inicio del rango de numeración. |
| `to` | Número final del rango de numeración. |
| `current` | Siguiente número del rango de numeración. |
| `resolution_number` | Número de resolución. |
| `start_date` | Fecha en la que se expidió el rango de numeración. |
| `end_date` | Fecha de vencimiento del rango de numeración. |
| `technical_key` | Clave técnica. |
| `is_expired` | El valor es `1` cuando el rango de numeración está vencido y `0` cuando está vigente. |
| `is_active` | El valor es `1` cuando el rango de numeración está activo y `0` cuando no está activo. |
| `created_at` | Fecha de creación. |
| `updated_at` | Fecha de actualización. |

### Variables de Ruta (Path Variables)

[Sección titulada «Variables de Ruta (Path Variables)»](https://developers.factus.com.co/v1/rangos-de-numeracion/actualizar-consecutivo#variables-de-ruta-path-variables)

* `numbering_range_id` ID del rango de numeración

### Ejemplo de respuesta

[Sección titulada «Ejemplo de respuesta»](https://developers.factus.com.co/v1/rangos-de-numeracion/actualizar-consecutivo#ejemplo-de-respuesta)

* [status 200](https://developers.factus.com.co/v1/rangos-de-numeracion/actualizar-consecutivo#tab-panel-277)

```
{ "status": "OK", "message": "Rango de numeración actualizado con éxito", "data": { "id": 59, "document": "21", "document_name": "Factura de Venta", "prefix": "FV", "from": 1, "to": 1000, "current": 1, "resolution_number": "d3kd93kd39jd92", "start_date": "01-10-2024", "end_date": "01-04-2025", "technical_key": "dfs3dfs334d8d8s96s8d", "is_expired": true, "is_active": 1, "created_at": "2024-09-10T15:56:22Z", "updated_at": "2024-09-10T17:35:56Z" }}
```
