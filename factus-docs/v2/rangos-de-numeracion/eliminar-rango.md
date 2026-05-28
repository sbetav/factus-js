# Eliminar Rango

Este endpoint permite eliminar un rango de numeración en específico. Es útil para eliminar un rango de numeración en particular.

**Método:** DELETE

#### **Endpoint**

* [Sandbox](https://developers.factus.com.co/rangos-de-numeracion/eliminar-rango#tab-panel-78)
* [Producción](https://developers.factus.com.co/rangos-de-numeracion/eliminar-rango#tab-panel-79)

```
https://api-sandbox.factus.com.co/v2/numbering-ranges/:numbering_range_id
```

### **Encabezados de la Solicitud**

Incluye los siguientes encabezados.

<table><tbody><tr><td><code>Content-Type</code> : <code>application/json</code><br>Indica que los datos se envían en formato JSON.</td></tr><tr><td><code>Authorization Bearer token_de_acceso</code><br>Token de autenticación necesario para acceder al recurso. Ver <a href="https://developers.factus.com.co/autenticacion/auth" target="_blank">Cómo generar token</a></td></tr><tr><td><code>Accept</code> : <code>application/json</code><br>Indica que la respuesta debe estar en formato JSON.</td></tr></tbody></table>

``**Nota:** Reemplaza `token_de_acceso` con el token proporcionado tras autenticarte.``

* * *

### Variables de Ruta, Path Variables

[Sección titulada «Variables de Ruta, Path Variables»](https://developers.factus.com.co/rangos-de-numeracion/eliminar-rango#variables-de-ruta-path-variables)

| |
| --- |
| **`numbering_range_id`** `string`
ID del rango de numeración. Se recomienda guardar el ID del rango de numeración para no hacer múltiples llamadas al endpoint al momento de realizar los documentos electrónicos. |

### Ejemplo de respuesta

[Sección titulada «Ejemplo de respuesta»](https://developers.factus.com.co/rangos-de-numeracion/eliminar-rango#ejemplo-de-respuesta)

* [status 200](https://developers.factus.com.co/rangos-de-numeracion/eliminar-rango#tab-panel-80)

```
{ "status": "OK", "message": "Rango de numeración eliminado con éxito"}
```
