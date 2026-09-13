# Crear

Este endpoint permite crear un rango de numeración en específico. Es útil para crear un rango de numeración en particular.

**Método:** POST

#### **Endpoint**

**Sandbox**

```
https://api-sandbox.factus.com.co/v2/numbering-ranges/payrolls
```

**Producción**

```
https://api.factus.com.co/v2/numbering-ranges/payrolls
```

### **Encabezados de la Solicitud**

Incluye los siguientes encabezados.

<table><tbody><tr><td><code>Content-Type</code> : <code>application/json</code><br>Indica que los datos se envían en formato JSON.</td></tr><tr><td><code>Authorization Bearer token_de_acceso</code><br>Token de autenticación necesario para acceder al recurso. Ver <a href="https://developers.factus.com.co/autenticacion/auth" target="_blank">Cómo generar token</a></td></tr><tr><td><code>Accept</code> : <code>application/json</code><br>Indica que la respuesta debe estar en formato JSON.</td></tr></tbody></table>

``**Nota:** Reemplaza `token_de_acceso` con el token proporcionado tras autenticarte.``

### Parámetros del Cuerpo (Body)

[Sección titulada «Parámetros del Cuerpo (Body)»](https://developers.factus.com.co/rangos-de-numeracion/nomina/crear-rango#par%C3%A1metros-del-cuerpo-body)

| Parámetros |
| --- |
| **`document`** `string`
Código de documento, para ver los códigos de documento que se pueden usar vea la siguiente tabla.

[Códigos de documentos](https://developers.factus.com.co/tablas-de-referencia/tablas/#c%C3%B3digos-de-tipos-de-documento-para-los-rangos-de-numeraci%C3%B3n-n%C3%B3mina) |
| **`prefix`** `Máx.4 caracteres`

Prefijo alfanumérico del rango de numeración.

|
| **`current`** `Máx.4 caracteres`

Número actual del consecutivo. El número del siguiente documento que se generará.
**NOTA**: Si el consecutivo se ha usado, debe agregar el número del último consecutivo usado.

|

### Response

[Sección titulada «Response»](https://developers.factus.com.co/rangos-de-numeracion/nomina/crear-rango#response)

| |
| --- |
| **`id`**
ID del rango de numeración |
| **`document`**
Número del documento |
| **`document_name`**
Nombre del documento |
| **`prefix`**
Prefijo del rango de numeración |
| **`current`**
Siguiente número dentro del rango de numeración |
| **`is_active`**
El valor es `1` cuando el rango está activo y `0` cuando está inactivo |
| **`deleted_at`**
Fecha en la que el rango de numeración fue eliminado, `null` si no ha sido eliminado |
| **`created_at`**
Fecha de creación. |
| **`updated_at`**
Fecha de actualización. |
