# Descargar XML

Este contenido es para V1. Cambia a la [versión más reciente](https://developers.factus.com.co/) para ver la documentación actualizada.

El endpoint devuelve el xml de la nota crédito en formato **Base64** y el nombre del archivo asociado.
Para utilizar el archivo, deberás decodificar el contenido de la propiedad `xml_base_64_encoded`.

**Método:** GET

#### **Endpoint**

* [Pruebas](https://developers.factus.com.co/v1/notas-credito/descargar-xml#tab-panel-252)
* [Producción](https://developers.factus.com.co/v1/notas-credito/descargar-xml#tab-panel-253)

```
https://api-sandbox.factus.com.co/v1/credit-notes/download-xml/:number
```

### **Encabezados de la Solicitud**

Para realizar la solicitud es necesario incluir los siguientes encabezados:

| **Encabezado** | **Valor** | **Descripción** |
| --- | --- | --- |
| `Content-Type` | `application/json` | Indica que los datos se envían en formato JSON. |
| `Authorization` | `Bearer <token_de_acceso>` | Token de autenticación necesario para acceder al recurso. Ver [Cómo generar token](https://developers.factus.com.co/autenticacion/auth) |
| `Accept` | `application/json` | Indica que la respuesta debe estar en formato JSON. |

``**Nota:** Reemplaza `token_de_acceso` con el token proporcionado tras autenticarte.``

### Variables de Ruta (Path Variables)

[Sección titulada «Variables de Ruta (Path Variables)»](https://developers.factus.com.co/v1/notas-credito/descargar-xml#variables-de-ruta-path-variables)

* `number`: Número de nota crédito.

* * *

### Ejemplo de respuesta

[Sección titulada «Ejemplo de respuesta»](https://developers.factus.com.co/v1/notas-credito/descargar-xml#ejemplo-de-respuesta)

* [status 200](https://developers.factus.com.co/v1/notas-credito/descargar-xml#tab-panel-254)
* [status 404](https://developers.factus.com.co/v1/notas-credito/descargar-xml#tab-panel-255)
* [status 409](https://developers.factus.com.co/v1/notas-credito/descargar-xml#tab-panel-256)

```
{ "status": "OK", "message": "Solicitud exitosa", "data": { "file_name": "nc09008257590002400000072", "xml_base_64_encoded": "[TRIMMED_BASE64_25240_CHARS]" }}
```
