# Descargar XML

El endpoint devuelve el xml del documento en formato **Base64** y el nombre del archivo asociado. Para utilizar el archivo, deberás decodificar el contenido de la propiedad `pdf_base_64_encoded`.

**Método:** GET

#### **Endpoint**

* [Sandbox](https://developers.factus.com.co/documentos-soporte/descargar-xml#tab-panel-320)
* [Producción](https://developers.factus.com.co/documentos-soporte/descargar-xml#tab-panel-321)

```
https://api-sandbox.factus.com.co/v2/support-documents/:number/download-xml
```

### **Encabezados de la Solicitud**

Incluye los siguientes encabezados.

<table><tbody><tr><td><code>Content-Type</code> : <code>application/json</code><br>Indica que los datos se envían en formato JSON.</td></tr><tr><td><code>Authorization Bearer token_de_acceso</code><br>Token de autenticación necesario para acceder al recurso. Ver <a href="https://developers.factus.com.co/autenticacion/auth" target="_blank">Cómo generar token</a></td></tr><tr><td><code>Accept</code> : <code>application/json</code><br>Indica que la respuesta debe estar en formato JSON.</td></tr></tbody></table>

``**Nota:** Reemplaza `token_de_acceso` con el token proporcionado tras autenticarte.``

* * *

### Variables de Ruta (Path Variables)

[Sección titulada «Variables de Ruta (Path Variables)»](https://developers.factus.com.co/documentos-soporte/descargar-xml#variables-de-ruta-path-variables)

| |
| --- |
| **`number`** `string`
Número de documento soporte. Se recomienda guardar el número del documento soporte una vez se haga la creación del mismo para poder hacer uso de este endpoint fácilmente. |

Puede encontrar el número del documento soporte en la respuesta de la [creación del documento soporte](https://developers.factus.com.co/documentos-soporte/crear-validar/#ejemplo-de-respuesta) o en [filtrar documento soporte](https://developers.factus.com.co/documentos-soporte/ver-y-filtrar#respuesta-del-endpoint) data.data.\*.number .
