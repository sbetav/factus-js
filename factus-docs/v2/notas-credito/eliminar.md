# Eliminar Nota Crédito

Este endpoint `elimina` una nota crédito usando el código de referencia `reference_code` con el cual se creó.
Las notas crédito se pueden eliminar siempre y cuando no se encuentren validadas por la DIAN.
Se suele eliminar una nota crédito cuando contiene errores de validación notificados por la DIAN para crearla nuevamente corregida.

**Método:** DELETE

#### **Endpoint**

* [Sandbox](https://developers.factus.com.co/notas-credito/eliminar#tab-panel-64)
* [Producción](https://developers.factus.com.co/notas-credito/eliminar#tab-panel-65)

```
https://api-sandbox.factus.com.co/v2/credit-notes/reference/:reference_code
```

### **Encabezados de la Solicitud**

Incluye los siguientes encabezados.

<table><tbody><tr><td><code>Content-Type</code> : <code>application/json</code><br>Indica que los datos se envían en formato JSON.</td></tr><tr><td><code>Authorization Bearer token_de_acceso</code><br>Token de autenticación necesario para acceder al recurso. Ver <a href="https://developers.factus.com.co/autenticacion/auth" target="_blank">Cómo generar token</a></td></tr><tr><td><code>Accept</code> : <code>application/json</code><br>Indica que la respuesta debe estar en formato JSON.</td></tr></tbody></table>

``**Nota:** Reemplaza `token_de_acceso` con el token proporcionado tras autenticarte.``

* * *

### Variables de Ruta, Path Variables

[Sección titulada «Variables de Ruta, Path Variables»](https://developers.factus.com.co/notas-credito/eliminar#variables-de-ruta-path-variables)

| |
| --- |
| **`reference_code`** `string`
Código de referencia de la nota crédito. El `reference_code` se utiliza para identificar de manera única la nota crédito que se desea eliminar, es el que usas para identificarla al momento de crearla. |
