# Obtener contenido de correo

Este contenido es para V1. Cambia a la [versión más reciente](https://developers.factus.com.co/) para ver la documentación actualizada.

Este endpoint permite obtener el asunto y el zip adjunto (en formato Base64) que normalmente se envían al cliente por correo electrónico. Está diseñado para escenarios en los que el envío automático del correo ha sido deshabilitado (send\_email = false), permitiendo así que el integrador gestione manualmente el envío del correo al cliente final. El archivo adjunto corresponde al archivo zip que contiene el pdf de la factura y el attached document que se enviaría en el correo oficial.

**Método:** GET

#### **Endpoint**

* [Pruebas](https://developers.factus.com.co/v1/facturas/obtener-contenido-de-correo#tab-panel-199)
* [Producción](https://developers.factus.com.co/v1/facturas/obtener-contenido-de-correo#tab-panel-200)

```
https://api-sandbox.factus.com.co/v1/bills/:number/email-content
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

### Variables de Ruta (Path Variables)

[Sección titulada «Variables de Ruta (Path Variables)»](https://developers.factus.com.co/v1/facturas/obtener-contenido-de-correo#variables-de-ruta-path-variables)

* `number`: Número de factura.

* * *

### Ejemplo de respuesta

[Sección titulada «Ejemplo de respuesta»](https://developers.factus.com.co/v1/facturas/obtener-contenido-de-correo#ejemplo-de-respuesta)

* [status 200](https://developers.factus.com.co/v1/facturas/obtener-contenido-de-correo#tab-panel-201)

```
{ "status": "OK", "message": "Solicitud exitosa", "data": { "subject": "901724254;FACTUS SAS;SETP990000748;01;FACTUS SAS", "attached_document": "[TRIMMED_BASE64_69784_CHARS]" }}
```
