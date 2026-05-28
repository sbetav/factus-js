# Descargar XML

El endpoint devuelve el xml de la nota de ajuste a documento soporte en formato **Base64** y el nombre del archivo asociado.
Para utilizar el archivo, deberás decodificar el contenido de la propiedad `pdf_base_64_encoded`.

**Método:** GET

#### **Endpoint**

* [Sandbox](https://developers.factus.com.co/notas-ajuste-documentos-soporte/descargar-xml#tab-panel-338)
* [Producción](https://developers.factus.com.co/notas-ajuste-documentos-soporte/descargar-xml#tab-panel-339)

```
https://api-sandbox.factus.com.co/v2/adjustment-notes/:number/download-xml
```

### **Encabezados de la Solicitud**

Incluye los siguientes encabezados.

<table><tbody><tr><td><code>Content-Type</code> : <code>application/json</code><br>Indica que los datos se envían en formato JSON.</td></tr><tr><td><code>Authorization Bearer token_de_acceso</code><br>Token de autenticación necesario para acceder al recurso. Ver <a href="https://developers.factus.com.co/autenticacion/auth" target="_blank">Cómo generar token</a></td></tr><tr><td><code>Accept</code> : <code>application/json</code><br>Indica que la respuesta debe estar en formato JSON.</td></tr></tbody></table>

``**Nota:** Reemplaza `token_de_acceso` con el token proporcionado tras autenticarte.``

* * *

### Variables de Ruta, Path Variables

[Sección titulada «Variables de Ruta, Path Variables»](https://developers.factus.com.co/notas-ajuste-documentos-soporte/descargar-xml#variables-de-ruta-path-variables)

| |
| --- |
| **`number`** `string`
Número de nota de ajuste a documento soporte. Se recomienda guardar el número de la nota de ajuste a documento soporte una vez se haga la creación del mismo para poder hacer uso de este endpoint fácilmente. |

Puede encontrar el número de la nota de ajuste a documento soporte en la respuesta de la [creación de nota de ajuste](https://developers.factus.com.co/notas-ajuste-documentos-soporte/crear-validar/#ejemplo-de-respuesta) o en [listar notas de ajuste](https://developers.factus.com.co/notas-ajuste-documentos-soporte/ver-y-filtrar/) data.data.\*.number .

* * *

* [status 200](https://developers.factus.com.co/notas-ajuste-documentos-soporte/descargar-xml#tab-panel-340)

```
{ "status": "OK", "message": "Solicitud exitosa", "data": { "file_name": "nas09008257590002500000017", "xml_base_64_encoded": "[TRIMMED_BASE64_18400_CHARS]" }}
```
