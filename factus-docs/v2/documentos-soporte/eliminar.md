# Eliminar Doc. Soporte

Este endpoint **elimina** un documento soporte usando el código de referencia con el cual se creó. Los documentos soporte se pueden eliminar siempre y cuando no se encuentren validados por la DIAN. Se suele eliminar un documento soporte cuando contiene errores de validación notificados por la DIAN para crearla nuevamente corregida.

**Nota:** Esta petición es síncrona, eso quiere decir que en la misma solicitud recibe el mensaje de si se ha eliminado el documento soporte.

**Método:** DELETE

#### **Endpoint**

* [Sandbox](https://developers.factus.com.co/documentos-soporte/eliminar#tab-panel-324)
* [Producción](https://developers.factus.com.co/documentos-soporte/eliminar#tab-panel-325)

```
https://api-sandbox.factus.com.co/v2/support-documents/reference/:reference_code
```

### **Encabezados de la Solicitud**

Incluye los siguientes encabezados.

<table><tbody><tr><td><code>Content-Type</code> : <code>application/json</code><br>Indica que los datos se envían en formato JSON.</td></tr><tr><td><code>Authorization Bearer token_de_acceso</code><br>Token de autenticación necesario para acceder al recurso. Ver <a href="https://developers.factus.com.co/autenticacion/auth" target="_blank">Cómo generar token</a></td></tr><tr><td><code>Accept</code> : <code>application/json</code><br>Indica que la respuesta debe estar en formato JSON.</td></tr></tbody></table>

``**Nota:** Reemplaza `token_de_acceso` con el token proporcionado tras autenticarte.``

* * *

### Variables de Ruta, Path Variables

[Sección titulada «Variables de Ruta, Path Variables»](https://developers.factus.com.co/documentos-soporte/eliminar#variables-de-ruta-path-variables)

| |
| --- |
| **`reference_code`** `string`
Código de referencia del documento soporte. El `reference_code` se utiliza para identificar de manera única el documento soporte que se desea eliminar, es el que usas para identificarlo al momento de crearlo. |
