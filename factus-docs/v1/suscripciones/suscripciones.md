# Suscripciones

Este contenido es para V1. Cambia a la [versión más reciente](https://developers.factus.com.co/) para ver la documentación actualizada.

Este endpoint permite consultar todas las suscripciones activas. Devuelve información detallada sobre cada suscripción incluyendo:

* **Información del grupo de documentos:** Nombre y tipos de documentos soportados
* **Cuota de documentos:** Total asignado, consumidos y disponibles
* **Estado de la suscripción:** Fechas de activación y expiración, días restantes
* **Configuración:** Si está activa y si tiene cuota ilimitada

**Método:** GET

#### **Endpoint**

* [Pruebas](https://developers.factus.com.co/v1/suscripciones/suscripciones#tab-panel-296)
* [Producción](https://developers.factus.com.co/v1/suscripciones/suscripciones#tab-panel-297)

```
https://api-sandbox.factus.com.co/v1/subscriptions
```

### **Encabezados de la Solicitud**

Para realizar la solicitud es necesario incluir los siguientes encabezados:

| **Encabezado** | **Valor** | **Descripción** |
| --- | --- | --- |
| `Content-Type` | `application/json` | Indica que los datos se envían en formato JSON. |
| `Authorization` | `Bearer <token_de_acceso>` | Token de autenticación necesario para acceder al recurso. Ver [Cómo generar token](https://developers.factus.com.co/autenticacion/auth) |
| `Accept` | `application/json` | Indica que la respuesta debe estar en formato JSON. |

``**Nota:** Reemplaza `token_de_acceso` con el token proporcionado tras autenticarte.``

### Response

[Sección titulada «Response»](https://developers.factus.com.co/v1/suscripciones/suscripciones#response)

| Campo | tipo | Descripción |
| --- | --- | --- |
| `name` | string | Nombre de la suscripción. |
| `supported_document_types` | object | Es un array/lista de tipos de documentos soportados por esta suscripción. |
| `documents_quota` | int | Cuota total de documentos disponibles en la suscripción. |
| `documents_consumed` | int | Número de documentos ya utilizados/consumidos. |
| `documents_available` | int | Cantidad de documentos restantes disponibles. |
| `days_until_expiration` | int | Días restantes hasta que expire la suscripción. |
| `activated_at` | date | Fecha y hora de activación de la suscripción (UTC). |
| `expires_at` | date | Fecha y hora de expiración de la suscripción (UTC). |
| `has_expired` | boolean | Indica si la suscripción ha expirado (true) o no (false). |
| `is_active` | boolean | Indica si la suscripción está activa (true) o inactiva (false). |
| `has_unlimited_quota` | boolean | Indica si la suscripción tiene cuota ilimitada (true) o limitada (false). |

* * *

### Ejemplo de respuesta

[Sección titulada «Ejemplo de respuesta»](https://developers.factus.com.co/v1/suscripciones/suscripciones#ejemplo-de-respuesta)

* [status 200](https://developers.factus.com.co/v1/suscripciones/suscripciones#tab-panel-298)

```
{ "status": "OK", "message": "Solicitud exitosa", "data": [ { "name": "Facturación", "supported_document_types": [ "Factura de Venta", "Nota Crédito", "Nota Débito", "Documento Soporte", "Nota de Ajuste Documento Soporte" ], "documents_quota": 0, "documents_consumed": 0, "documents_available": "Ilimitado", "days_until_expiration": 365, "activated_at": "2025-12-10T00:00:00Z", "expires_at": "2026-12-10T00:00:00Z", "has_expired": false, "is_active": true, "has_unlimited_quota": true }, { "name": "Nómina", "supported_document_types": [ "Nómina", "Nota de Ajuste Nómina", "Nota de eliminación de nómina" ], "documents_quota": 100, "documents_consumed": 0, "documents_available": 100, "days_until_expiration": 365, "activated_at": "2025-12-10T00:00:00Z", "expires_at": "2026-12-10T00:00:00Z", "has_expired": false, "is_active": true, "has_unlimited_quota": false } ]}
```
