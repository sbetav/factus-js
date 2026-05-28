# Actualizar consecutivo

Este endpoint permite actualizar el consecutivo de un rango de numeración en específico.

**Método:** PATCH

#### **Endpoint**

* [Sandbox](https://developers.factus.com.co/rangos-de-numeracion/actualizar-consecutivo#tab-panel-72)
* [Producción](https://developers.factus.com.co/rangos-de-numeracion/actualizar-consecutivo#tab-panel-73)

```
https://api-sandbox.factus.com.co/v2/numbering-ranges/:numbering_range_id/current
```

### **Encabezados de la Solicitud**

Incluye los siguientes encabezados.

<table><tbody><tr><td><code>Content-Type</code> : <code>application/json</code><br>Indica que los datos se envían en formato JSON.</td></tr><tr><td><code>Authorization Bearer token_de_acceso</code><br>Token de autenticación necesario para acceder al recurso. Ver <a href="https://developers.factus.com.co/autenticacion/auth" target="_blank">Cómo generar token</a></td></tr><tr><td><code>Accept</code> : <code>application/json</code><br>Indica que la respuesta debe estar en formato JSON.</td></tr></tbody></table>

``**Nota:** Reemplaza `token_de_acceso` con el token proporcionado tras autenticarte.``

* * *

### Request

[Sección titulada «Request»](https://developers.factus.com.co/rangos-de-numeracion/actualizar-consecutivo#request)

| |
| --- |
| **`current`**
Número actual del consecutivo. Se recomienda guardar el ID del rango de numeración para no hacer múltiples llamadas al endpoint al momento de realizar los documentos electrónicos. |

### Response

[Sección titulada «Response»](https://developers.factus.com.co/rangos-de-numeracion/actualizar-consecutivo#response)

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

### Variables de Ruta, Path Variables

[Sección titulada «Variables de Ruta, Path Variables»](https://developers.factus.com.co/rangos-de-numeracion/actualizar-consecutivo#variables-de-ruta-path-variables)

| |
| --- |
| **`numbering_range_id`** `string`
ID del rango de numeración. Se recomienda guardar el ID del rango de numeración para no hacer múltiples llamadas al endpoint al momento de realizar los documentos electrónicos. |
