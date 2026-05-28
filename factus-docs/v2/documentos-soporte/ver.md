# Ver Doc. soporte

Este endpoint `devuelve` un documento soporte pasando el **número del mismo** como parámetro en la solicitud `GET`. Puede encontrar el número del documento soporte, debe ver la respuesta de la [creación del documento soporte](https://developers.factus.com.co/documentos-soporte/crear-validar/#ejemplo-de-respuesta) o en [filtrar documento soporte](https://developers.factus.com.co/documentos-soporte/ver-y-filtrar#respuesta-del-endpoint) data.data.\*.number .

**Método:** GET

#### **Endpoint**

* [Sandbox](https://developers.factus.com.co/documentos-soporte/ver#tab-panel-328)
* [Producción](https://developers.factus.com.co/documentos-soporte/ver#tab-panel-329)

```
https://api-sandbox.factus.com.co/v2/support-documents/:number
```

### **Encabezados de la Solicitud**

Incluye los siguientes encabezados.

<table><tbody><tr><td><code>Content-Type</code> : <code>application/json</code><br>Indica que los datos se envían en formato JSON.</td></tr><tr><td><code>Authorization Bearer token_de_acceso</code><br>Token de autenticación necesario para acceder al recurso. Ver <a href="https://developers.factus.com.co/autenticacion/auth" target="_blank">Cómo generar token</a></td></tr><tr><td><code>Accept</code> : <code>application/json</code><br>Indica que la respuesta debe estar en formato JSON.</td></tr></tbody></table>

``**Nota:** Reemplaza `token_de_acceso` con el token proporcionado tras autenticarte.``

* * *

### Variables de Ruta, Path Variables

[Sección titulada «Variables de Ruta, Path Variables»](https://developers.factus.com.co/documentos-soporte/ver#variables-de-ruta-path-variables)

| |
| --- |
| **`number`** `string`
Número de documento soporte. Se recomienda guardar el número del documento soporte una vez se haga la creación del mismo para poder hacer uso de este endpoint fácilmente. |
