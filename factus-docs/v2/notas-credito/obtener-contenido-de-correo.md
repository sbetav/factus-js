# Obtener contenido de correo

Este endpoint `devuelve` el asunto y el zip adjunto en formato **Base64** que normalmente se envían al cliente por correo electrónico.
Está diseñado para escenarios en los que el envío automático del correo ha sido deshabilitado `send_email = false` permitiendo así que el integrador gestione manualmente el envío del correo al cliente final.
El archivo adjunto corresponde al archivo zip que contiene el pdf de la nota crédito y el attached document que se enviaría en el correo oficial.

**Método:** GET

#### **Endpoint**

* [Sandbox](https://developers.factus.com.co/notas-credito/obtener-contenido-de-correo#tab-panel-66)
* [Producción](https://developers.factus.com.co/notas-credito/obtener-contenido-de-correo#tab-panel-67)

```
https://api-sandbox.factus.com.co/v2/credit-notes/:number/email-content
```

### **Encabezados de la Solicitud**

Incluye los siguientes encabezados.

<table><tbody><tr><td><code>Content-Type</code> : <code>application/json</code><br>Indica que los datos se envían en formato JSON.</td></tr><tr><td><code>Authorization Bearer token_de_acceso</code><br>Token de autenticación necesario para acceder al recurso. Ver <a href="https://developers.factus.com.co/autenticacion/auth" target="_blank">Cómo generar token</a></td></tr><tr><td><code>Accept</code> : <code>application/json</code><br>Indica que la respuesta debe estar en formato JSON.</td></tr></tbody></table>

``**Nota:** Reemplaza `token_de_acceso` con el token proporcionado tras autenticarte.``

* * *

### Variables de Ruta, Path Variables

[Sección titulada «Variables de Ruta, Path Variables»](https://developers.factus.com.co/notas-credito/obtener-contenido-de-correo#variables-de-ruta-path-variables)

| |
| --- |
| **`number`** `string`
Número de nota crédito. Se recomienda guardar el número de la nota crédito una vez se haga la creación de la misma para poder hacer uso de este endpoint fácilmente. |
