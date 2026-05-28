# Actualizar Logo

Este endpoint permite actualizar el logo de la empresa del usuario correspondiente

**Método:** POST

#### **Endpoint**

* [Sandbox](https://developers.factus.com.co/empresas/actualizar-imagen#tab-panel-10)
* [Producción](https://developers.factus.com.co/empresas/actualizar-imagen#tab-panel-11)

```
https://api-sandbox.factus.com.co/v2/companies/logo
```

### **Encabezados de la Solicitud**

Incluye los siguientes encabezados.

<table><tbody><tr><td><code>Content-Type</code> : <code>multipart/form-data</code><br>Indica que los datos se envían en formato JSON.</td></tr><tr><td><code>Authorization Bearer token_de_acceso</code><br>Token de autenticación necesario para acceder al recurso. Ver <a href="https://developers.factus.com.co/autenticacion/auth" target="_blank">Cómo generar token</a></td></tr><tr><td><code>Accept</code> : <code>application/json</code><br>Indica que la respuesta debe estar en formato JSON.</td></tr></tbody></table>

``**Nota:** Reemplaza `token_de_acceso` con el token proporcionado tras autenticarte.``

* * *

### Parámetros del Cuerpo (Body)

[Sección titulada «Parámetros del Cuerpo (Body)»](https://developers.factus.com.co/empresas/actualizar-imagen#par%C3%A1metros-del-cuerpo-body)

| |
| --- |
| **`image`**
Archivo de tipo png, jpg o jpeg por el cual desee actualizar el logo

|
