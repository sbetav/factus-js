# Ver

**Método:** GET

#### **Endpoint**

**Sandbox**

```
https://api-sandbox.factus.com.co/v2/numbering-ranges/payrolls/:numbering_range_id
```

**Producción**

```
https://api.factus.com.co/v2/numbering-ranges/payrolls/:numbering_range_id
```

Este endpoint permite ver un rango de numeración en específico. Es útil para obtener información detallada sobre un rango de numeración en particular, incluyendo su prefijo, rango de numeración, resolución, fecha de inicio y fin, entre otros.

### **Encabezados de la Solicitud**

Incluye los siguientes encabezados.

<table><tbody><tr><td><code>Content-Type</code> : <code>application/json</code><br>Indica que los datos se envían en formato JSON.</td></tr><tr><td><code>Authorization Bearer token_de_acceso</code><br>Token de autenticación necesario para acceder al recurso. Ver <a href="https://developers.factus.com.co/autenticacion/auth" target="_blank">Cómo generar token</a></td></tr><tr><td><code>Accept</code> : <code>application/json</code><br>Indica que la respuesta debe estar en formato JSON.</td></tr></tbody></table>

``**Nota:** Reemplaza `token_de_acceso` con el token proporcionado tras autenticarte.``

* * *

### Variables de Ruta, Path Variables

[Sección titulada «Variables de Ruta, Path Variables»](https://developers.factus.com.co/rangos-de-numeracion/nomina/ver-rango#variables-de-ruta-path-variables)

| |
| --- |
| **`numbering_range_id`** `string`
ID del rango de numeración. Se recomienda guardar el ID del rango de numeración para no hacer múltiples llamadas al endpoint al momento de realizar los documentos electrónicos. |

#### Respuesta del Endpoint

[Sección titulada «Respuesta del Endpoint»](https://developers.factus.com.co/rangos-de-numeracion/nomina/ver-rango#respuesta-del-endpoint)

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
