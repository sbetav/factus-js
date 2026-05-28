# Descargar XML

Este contenido es para V1. Cambia a la [versión más reciente](https://developers.factus.com.co/) para ver la documentación actualizada.

El endpoint devuelve el xml de la factura en formato **Base64** y el nombre del archivo asociado.
Para utilizar el archivo, deberás decodificar el contenido de la propiedad `pdf_base_64_encoded`.

**Método:** GET

#### **Endpoint**

* [Pruebas](https://developers.factus.com.co/v1/facturas/descargar-xml#tab-panel-189)
* [Producción](https://developers.factus.com.co/v1/facturas/descargar-xml#tab-panel-190)

```
https://api-sandbox.factus.com.co/v1/bills/download-xml/:number
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

[Sección titulada «Variables de Ruta (Path Variables)»](https://developers.factus.com.co/v1/facturas/descargar-xml#variables-de-ruta-path-variables)

* `number`: Número de factura.

* * *

* [status 200](https://developers.factus.com.co/v1/facturas/descargar-xml#tab-panel-191)

```
{ "status": "OK", "message": "Solicitud exitosa", "data": { "file_name": "fv09008257590002400000241", "xml_base_64_encoded": "[TRIMMED_BASE64_20808_CHARS]" }}
```
