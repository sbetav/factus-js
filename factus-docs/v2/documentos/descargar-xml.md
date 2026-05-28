# Descargar XML

Este endpoint permite `descargar` el archivo XML de un documento electrónico asociado a la empresa.

El documento puede haber sido emitido por la empresa o recibido por la misma (es decir, donde la empresa figure como emisor o como cliente dentro del XML).

El identificador `:trackId` corresponde al código único del documento, el cual puede variar según el tipo:

`CUFE`: Facturas electrónicas
`CUDE`: Notas crédito o débito
`CUDS`: Documentos soporte
`CUNE`: Nómina electrónica

Entre otros identificadores equivalentes definidos por la DIAN

A través de este endpoint, es posible recuperar el XML original del documento utilizando cualquiera de estos identificadores.

**Método:** GET

#### **Endpoint**

* [Sandbox](https://developers.factus.com.co/documentos/descargar-xml#tab-panel-313)
* [Producción](https://developers.factus.com.co/documentos/descargar-xml#tab-panel-314)

```
https://api-sandbox.factus.com.co/v2/documents/:trackId/download-xml
```

### **Encabezados de la Solicitud**

Incluye los siguientes encabezados.

<table><tbody><tr><td><code>Content-Type</code> : <code>application/json</code><br>Indica que los datos se envían en formato JSON.</td></tr><tr><td><code>Authorization Bearer token_de_acceso</code><br>Token de autenticación necesario para acceder al recurso. Ver <a href="https://developers.factus.com.co/autenticacion/auth" target="_blank">Cómo generar token</a></td></tr><tr><td><code>Accept</code> : <code>application/json</code><br>Indica que la respuesta debe estar en formato JSON.</td></tr></tbody></table>

``**Nota:** Reemplaza `token_de_acceso` con el token proporcionado tras autenticarte.``

* * *

### Variables de Ruta, Path Variables

[Sección titulada «Variables de Ruta, Path Variables»](https://developers.factus.com.co/documentos/descargar-xml#variables-de-ruta-path-variables)

| |
| --- |
| **`trackId`** `string`
Identificador único del documento. Puede ser CUFE, CUDE, CUDS, CUNE u otros identificadores definidos por la DIAN. |
