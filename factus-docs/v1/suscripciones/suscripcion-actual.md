# Suscripción actual

Este contenido es para V1. Cambia a la [versión más reciente](https://developers.factus.com.co/) para ver la documentación actualizada.

Este endpoint permite obtener información detallada sobre la suscripción actual del usuario en la API de Factus. Es útil para conocer el estado de la suscripción, la cantidad de documentos disponibles y la fecha de vencimiento.

**Método:** GET

#### **Endpoint**

* [Pruebas](https://developers.factus.com.co/v1/suscripciones/suscripcion-actual#tab-panel-293)
* [Producción](https://developers.factus.com.co/v1/suscripciones/suscripcion-actual#tab-panel-294)

```
https://api-sandbox.factus.com.co/v1/subscriptions/current
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

[Sección titulada «Response»](https://developers.factus.com.co/v1/suscripciones/suscripcion-actual#response)

| Campo | tipo | Descripción |
| --- | --- | --- |
| `total_documents` | int | Cantidad total de documentos adquiridos en la suscripción. |
| `documents_used` | int | Número de documentos que ya han sido utilizados. |
| `documents_remaining` | int | Cantidad de documentos aún disponibles para su uso. |
| `subscription_start_date` | string (ISO 8601) | Fecha de inicio de la suscripción (YYYY-MM-DDTHH:MM:SSZ). |
| `subscription_expiration_date` | string (ISO 8601) | Fecha de vencimiento de la suscripción (YYYY-MM-DDTHH:MM:SSZ). |
| `subscription_is_expired` | boolean | Indica si la suscripción ha expirado (true o false). |

* * *

### Ejemplo de respuesta

[Sección titulada «Ejemplo de respuesta»](https://developers.factus.com.co/v1/suscripciones/suscripcion-actual#ejemplo-de-respuesta)

* [status 200](https://developers.factus.com.co/v1/suscripciones/suscripcion-actual#tab-panel-295)

```
{ "status": "OK", "message": "Solicitud exitosa", "data": { "total_documents": 3000, "documents_used": 0, "documents_remaining": 3000, "subscription_days_to_expires": 349, "subscription_start_date": "2025-03-01T00:00:00Z", "subscription_expiration_date": "2026-03-01T00:00:00Z", "subscription_is_expired": false }}
```
