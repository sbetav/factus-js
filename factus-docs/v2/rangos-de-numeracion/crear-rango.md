# Crear Rango

Este endpoint permite crear un rango de numeración en específico. Es útil para crear un rango de numeración en particular.

**Método:** POST

#### **Endpoint**

* [Sandbox](https://developers.factus.com.co/rangos-de-numeracion/crear-rango#tab-panel-76)
* [Producción](https://developers.factus.com.co/rangos-de-numeracion/crear-rango#tab-panel-77)

```
https://api-sandbox.factus.com.co/v2/numbering-ranges
```

### **Encabezados de la Solicitud**

Incluye los siguientes encabezados.

<table><tbody><tr><td><code>Content-Type</code> : <code>application/json</code><br>Indica que los datos se envían en formato JSON.</td></tr><tr><td><code>Authorization Bearer token_de_acceso</code><br>Token de autenticación necesario para acceder al recurso. Ver <a href="https://developers.factus.com.co/autenticacion/auth" target="_blank">Cómo generar token</a></td></tr><tr><td><code>Accept</code> : <code>application/json</code><br>Indica que la respuesta debe estar en formato JSON.</td></tr></tbody></table>

``**Nota:** Reemplaza `token_de_acceso` con el token proporcionado tras autenticarte.``

### Parámetros del Cuerpo (Body)

[Sección titulada «Parámetros del Cuerpo (Body)»](https://developers.factus.com.co/rangos-de-numeracion/crear-rango#par%C3%A1metros-del-cuerpo-body)

| Parámetros |
| --- |
| **`document`** `string`
Código de documento, para ver los códigos de documento que se pueden usar vea la siguiente tabla.

[Códigos de documentos](https://developers.factus.com.co/tablas-de-referencia/tablas/#c%C3%B3digos-de-tipos-de-documento-para-los-rangos-de-numeraci%C3%B3n) |
| **`prefix`** `Máx.4 caracteres`

Prefijo alfanumérico del rango de numeración.

|
| **`current`** `Máx.4 caracteres`

Número actual del consecutivo. El número del siguiente documento que se generará.
**NOTA**: Si el consecutivo se ha usado, debe agregar el número del último consecutivo usado.

|

### Response

[Sección titulada «Response»](https://developers.factus.com.co/rangos-de-numeracion/crear-rango#response)

| |
| --- |
| **`id`**
ID del rango de numeración. |
| **`document`**
Código del documento. |
| **`document_name`**
Nombre del documento. |
| **`prefix`**
Prefijo del rango de numeración. |
| **`from`**
Número de inicio del rango de numeración. |
| **`to`**
Número final del rango de numeración. |
| **`current`**
Siguiente número del rango de numeración. |
| **`resolution_number`**
Número de resolución. |
| **`start_date`**
Fecha en la que se expidió el rango de numeración. |
| **`end_date`**
Fecha de vencimiento del rango de numeración. |
| **`technical_key`**
Clave técnica. |
| **`is_expired`**
El valor es `1` cuando el rango de numeración está vencido y `0` cuando está vigente. |
| **`is_active`**
El valor es `1` cuando el rango de numeración está activo y `0` cuando no está activo. |
| **`created_at`**
Fecha de creación. |
| **`updated_at`**
Fecha de actualización. |
