# Descargar XML AttachedDocument

Este endpoint `devuelve` el xml AttachedDocument de la factura en formato **Base64** y el nombre del archivo asociado.
Para utilizar el archivo, deberás decodificar el contenido de la propiedad `xml_base_64_encoded`.

**Método:** GET

#### **Endpoint**

* [Sandbox](https://developers.factus.com.co/facturas/descargar-xml-attacheddocument#tab-panel-330)
* [Producción](https://developers.factus.com.co/facturas/descargar-xml-attacheddocument#tab-panel-331)

```
https://api-sandbox.factus.com.co/v2/bills/:number/download-attached-document-xml
```

### **Encabezados de la Solicitud**

Incluye los siguientes encabezados.

<table><tbody><tr><td><code>Content-Type</code> : <code>application/json</code><br>Indica que los datos se envían en formato JSON.</td></tr><tr><td><code>Authorization Bearer token_de_acceso</code><br>Token de autenticación necesario para acceder al recurso. Ver <a href="https://developers.factus.com.co/autenticacion/auth" target="_blank">Cómo generar token</a></td></tr><tr><td><code>Accept</code> : <code>application/json</code><br>Indica que la respuesta debe estar en formato JSON.</td></tr></tbody></table>

``**Nota:** Reemplaza `token_de_acceso` con el token proporcionado tras autenticarte.``

* * *

### Variables de Ruta, Path Variables

[Sección titulada «Variables de Ruta, Path Variables»](https://developers.factus.com.co/facturas/descargar-xml-attacheddocument#variables-de-ruta-path-variables)

| |
| --- |
| **`number`** `string`
Número de factura. Se recomienda guardar el numero de la factura una vez se haga la creación de la misma para poder hacer uso de este endpoint fácilmente. |
