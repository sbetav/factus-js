# Descargar PDF

Este contenido es para V1. Cambia a la [versión más reciente](https://developers.factus.com.co/) para ver la documentación actualizada.

El endpoint devuelve un pdf del documento soporte en formato **Base64** y el nombre del archivo asociado.
Para utilizar el archivo, deberás decodificar el contenido de la propiedad `pdf_base_64_encoded`.

**Método:** GET

#### **Endpoint**

* [Pruebas](https://developers.factus.com.co/v1/documentos-soporte/descargar-documento-soporte#tab-panel-160)
* [Producción](https://developers.factus.com.co/v1/documentos-soporte/descargar-documento-soporte#tab-panel-161)

```
https://api-sandbox.factus.com.co/v1/support-documents/download-pdf/:number
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

[Sección titulada «Variables de Ruta (Path Variables)»](https://developers.factus.com.co/v1/documentos-soporte/descargar-documento-soporte#variables-de-ruta-path-variables)

* `number`: Número de documento soporte.

Puede encontrar el número del documento soporte, debe ver la respuesta de la [creación del documento soporte](https://developers.factus.com.co/v1/documentos-soporte/crear-validar#ejemplo-de-respuesta) o en [filtrar documento soporte](https://developers.factus.com.co/v1/documentos-soporte/ver-y-filtrar) , data.data.number .

* * *

### Ejemplo de respuesta

[Sección titulada «Ejemplo de respuesta»](https://developers.factus.com.co/v1/documentos-soporte/descargar-documento-soporte#ejemplo-de-respuesta)

* [status 200](https://developers.factus.com.co/v1/documentos-soporte/descargar-documento-soporte#tab-panel-162)

```
{ "status": "OK", "message": "Solicitud exitosa", "data": { "file_name": "ds09017242540002500000006", "pdf_base_64_encoded": "[TRIMMED_BASE64_60832_CHARS]" }}
```
