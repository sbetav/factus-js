# Cambiar Estado

Este endpoint permite cambiar el estado de un rango de numeración en específico.

**Método:** PATCH

#### **Endpoint**

* [Sandbox](https://developers.factus.com.co/rangos-de-numeracion/cambiar-estado#tab-panel-74)
* [Producción](https://developers.factus.com.co/rangos-de-numeracion/cambiar-estado#tab-panel-75)

```
https://api-sandbox.factus.com.co/v2/numbering-ranges/:numbering_range_id/toggle-status
```

### **Encabezados de la Solicitud**

Incluye los siguientes encabezados.

<table><tbody><tr><td><code>Content-Type</code> : <code>application/json</code><br>Indica que los datos se envían en formato JSON.</td></tr><tr><td><code>Authorization Bearer token_de_acceso</code><br>Token de autenticación necesario para acceder al recurso. Ver <a href="https://developers.factus.com.co/autenticacion/auth" target="_blank">Cómo generar token</a></td></tr><tr><td><code>Accept</code> : <code>application/json</code><br>Indica que la respuesta debe estar en formato JSON.</td></tr></tbody></table>

``**Nota:** Reemplaza `token_de_acceso` con el token proporcionado tras autenticarte.``

* * *

### Response

[Sección titulada «Response»](https://developers.factus.com.co/rangos-de-numeracion/cambiar-estado#response)

| |
| --- |
| **`id`**
ID del rango de numeración. |
| **`document`**
Código del documento electrónico. |
| **`document_name`**
Nombre del documento electrónico. |
| **`prefix`**
Prefijo del rango de numeración. |
| **`from`**
Número inicial del rango de numeración. |
| **`to`**
Número final del rango de numeración. |
| **`current`**
Número actual del rango de numeración. |
| **`resolution_number`**
Número de resolución del rango de numeración. |
| **`start_date`**
Fecha de inicio del rango de numeración. |
| **`end_date`**
Fecha de fin del rango de numeración. |
| **`technical_key`**
Clave técnica del rango de numeración. |
| **`is_expired`**
Indica si el rango de numeración ha expirado. |
| **`is_active`**
Indica si el rango de numeración está activo. |
| **`created_at`**
Fecha de creación del rango de numeración. |
| **`updated_at`**
Fecha de última actualización del rango de numeración. |

### Variables de Ruta, Path Variables

[Sección titulada «Variables de Ruta, Path Variables»](https://developers.factus.com.co/rangos-de-numeracion/cambiar-estado#variables-de-ruta-path-variables)

| |
| --- |
| **`numbering_range_id`** `string`
ID del rango de numeración. Se recomienda guardar el ID del rango de numeración para no hacer múltiples llamadas al endpoint al momento de realizar los documentos electrónicos. |
