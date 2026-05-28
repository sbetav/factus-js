# Enviar correo

Este contenido es para V1. Cambia a la [versión más reciente](https://developers.factus.com.co/) para ver la documentación actualizada.

Este endpoint envía por correo electrónico la nota crédito en un archivo ZIP que incluye un PDF y un archivo XML (AttachedDocument). El PDF puede ser generado y enviado en formato Base64. En caso de no proporcionarse, se utilizará por defecto la representación gráfica generada por el sistema.

**Método:** POST

#### **Endpoint**

* [Pruebas](https://developers.factus.com.co/v1/notas-credito/enviar-correo#tab-panel-235)
* [Producción](https://developers.factus.com.co/v1/notas-credito/enviar-correo#tab-panel-236)

```
https://api-sandbox.factus.com.co/v1/credit-notes/send-email/:number
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

[Sección titulada «Variables de Ruta (Path Variables)»](https://developers.factus.com.co/v1/notas-credito/enviar-correo#variables-de-ruta-path-variables)

* `number`: Número de la nota crédito.

* * *

* * *

### Parámetros del Cuerpo (Body)

[Sección titulada «Parámetros del Cuerpo (Body)»](https://developers.factus.com.co/v1/notas-credito/enviar-correo#par%C3%A1metros-del-cuerpo-body)

El cuerpo (Body) de la solicitud debe enviarse en formato JSON y debe incluir los siguientes parámetros:

| **Parámetro y Tipo** | **Descripción** |
| --- | --- |
| `email (string)` | Correo electrónico al cual se desea enviar la nota crédito |
| `pdf_base_64_encoded (string)` | (Opcional) PDF, enviado como cadena codificada en Base64 |

* * *

### Ejemplo de Solicitud

[Sección titulada «Ejemplo de Solicitud»](https://developers.factus.com.co/v1/notas-credito/enviar-correo#ejemplo-de-solicitud)

Aquí tienes un ejemplo de cómo debería quedar el cuerpo de la solicitud en formato JSON:

* [200 - Envío de correo](https://developers.factus.com.co/v1/notas-credito/enviar-correo#tab-panel-237)

```
{ "email": "[email protected]", "pdf_base_64_encoded": "[TRIMMED_BASE64_60784_CHARS]"}
```

### Ejemplo de respuesta

[Sección titulada «Ejemplo de respuesta»](https://developers.factus.com.co/v1/notas-credito/enviar-correo#ejemplo-de-respuesta)

* [status 200](https://developers.factus.com.co/v1/notas-credito/enviar-correo#tab-panel-238)

```
{ "status": "OK", "message": "Nota crédito enviada al cliente con éxito"}
```
