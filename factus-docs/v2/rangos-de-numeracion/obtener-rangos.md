# Listar rangos

El endpoint **Rangos de Numeración** permite obtener los rangos de numeración disponibles en la API de Factus. Este recurso es útil para obtener información precisa sobre los rangos de numeración de documentos específicos, incluyendo su prefijo, rango de numeración, resolución, fecha de inicio y fin, entre otros.

* * *

**Método:** GET

#### **Endpoint**

* [Sandbox](https://developers.factus.com.co/rangos-de-numeracion/obtener-rangos#tab-panel-81)
* [Producción](https://developers.factus.com.co/rangos-de-numeracion/obtener-rangos#tab-panel-82)

```
https://api-sandbox.factus.com.co/v2/numbering-ranges?filter[id]&filter[document]&filter[resolution_number]&filter[technical_key]&filter[is_active]
```

### **Encabezados de la Solicitud**

Incluye los siguientes encabezados.

<table><tbody><tr><td><code>Content-Type</code> : <code>application/json</code><br>Indica que los datos se envían en formato JSON.</td></tr><tr><td><code>Authorization Bearer token_de_acceso</code><br>Token de autenticación necesario para acceder al recurso. Ver <a href="https://developers.factus.com.co/autenticacion/auth" target="_blank">Cómo generar token</a></td></tr><tr><td><code>Accept</code> : <code>application/json</code><br>Indica que la respuesta debe estar en formato JSON.</td></tr></tbody></table>

``**Nota:** Reemplaza `token_de_acceso` con el token proporcionado tras autenticarte.``

* * *

### Variables de Ruta, Path Variables

[Sección titulada «Variables de Ruta, Path Variables»](https://developers.factus.com.co/rangos-de-numeracion/obtener-rangos#variables-de-ruta-path-variables)

| |
| --- |
| **`filter[id]`**
ID del registro |
| **`filter[document]`**
Código de documento. Para ver los códigos de documento disponibles vea la tabla [códigos de documentos](https://developers.factus.com.co/tablas-de-referencia/tablas/#c%C3%B3digos-de-tipos-de-documento-para-los-rangos-de-numeraci%C3%B3n) |
| **`filter[resolution_number]`**
Número de resolución (solo para facturas y documentos soporte) |
| **`filter[technical_key]`**
Clave técnica (solo para facturas) |
| **`filter[is_active]`**
Estado del registro: `1` para activo, `0` para inactivo |

#### Respuesta del Endpoint

[Sección titulada «Respuesta del Endpoint»](https://developers.factus.com.co/rangos-de-numeracion/obtener-rangos#respuesta-del-endpoint)

| |
| --- |
| **`id`**
ID del rango de numeración |
| **`document`**
Nombre del documento |
| **`prefix`**
Prefijo del rango de numeración |
| **`from`**
Número de inicio del rango de numeración |
| **`to`**
Número del final del rango de numeración |
| **`current`**
Siguiente número dentro del rango de numeración |
| **`resolution_number`**
Número de resolución |
| **`start_date`**
Fecha en la que se expidió el rango de numeración |
| **`end_date`**
Fecha de vencimiento del rango de numeración |
| **`technical_key`**
Clave técnica |
| **`is_expired`**
El valor es `1` cuando el rango está vencido y `0` cuando está vigente |
| **`is_active`**
El valor es `1` cuando el rango está activo y `0` cuando está inactivo |
