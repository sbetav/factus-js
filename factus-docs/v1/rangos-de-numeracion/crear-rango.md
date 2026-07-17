# Crear Rango

Este contenido es para V1. Cambia a la [versión más reciente](https://developers.factus.com.co/) para ver la documentación actualizada.

Este endpoint permite crear un rango de numeración en específico. Es útil para crear un rango de numeración en particular.

**Método:** POST

#### **Endpoint**

* Pruebas
* Producción

```
https://api-sandbox.factus.com.co/v1/numbering-ranges
```

### **Encabezados de la Solicitud**

Para realizar la solicitud es necesario incluir los siguientes encabezados:

| **Encabezado** | **Valor** | **Descripción** |
| --- | --- | --- |
| `Content-Type` | `application/json` | Indica que los datos se envían en formato JSON. |
| `Authorization` | `Bearer <token_de_acceso>` | Token de autenticación necesario para acceder al recurso. Ver [Cómo generar token](https://developers.factus.com.co/autenticacion/auth) |
| `Accept` | `application/json` | Indica que la respuesta debe estar en formato JSON. |

``**Nota:** Reemplaza `token_de_acceso` con el token proporcionado tras autenticarte.``

### Request

[Sección titulada «Request»](https://developers.factus.com.co/v1/rangos-de-numeracion/crear-rango#request)

| ID | Value |
| --- | --- |
| `document` | Código de documento, para ver los códigos de documento que se pueden usar vea la siguiente tabla [códigos de documentos](https://developers.factus.com.co/v1/tablas-de-referencia/tablas/#c%C3%B3digos-de-tipos-de-documento-para-los-rangos-de-numeraci%C3%B3n) |
| `prefix` | Prefijo del rango de numeración. |
| `current` | Número actual del consecutivo.
**NOTA**:
\- Si el consecutivo se ha usado, debe agregar el número del último consecutivo usado. |
| `resolution_number` | Número de resolución del rango.
Solo es requerido si el campo `document` contiene el código `21`, `24` o `30`. |

### Response

[Sección titulada «Response»](https://developers.factus.com.co/v1/rangos-de-numeracion/crear-rango#response)

| ID | Description |
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

### Ejemplo de respuesta

[Sección titulada «Ejemplo de respuesta»](https://developers.factus.com.co/v1/rangos-de-numeracion/crear-rango#ejemplo-de-respuesta)

* status 200

```
{ "status": "Created", "message": "Rango de numeración creado con éxito", "data": { "id": 51, "document": "21", "document_name": "Factura de Venta", "prefix": "FV", "from": 1, "to": 1000, "current": 1, "resolution_number": "d3kd93kd39jd92", "start_date": "01-10-2024", "end_date": "01-04-2025", "technical_key": "dfs3dfs334d8d8s96s8d", "is_expired": true, "is_active": 0, "created_at": "2024-09-10T15:30:26Z", "updated_at": "2024-09-10T15:30:26Z" }}
```
