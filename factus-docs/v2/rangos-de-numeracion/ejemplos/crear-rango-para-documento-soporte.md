# Crear Rango documento soporte

Esta sección describe cómo crear un rango de numeración para documento soporte.

**Método:** POST

#### **Endpoint**

* [Sandbox](https://developers.factus.com.co/rangos-de-numeracion/ejemplos/crear-rango-para-documento-soporte#tab-panel-135)
* [Producción](https://developers.factus.com.co/rangos-de-numeracion/ejemplos/crear-rango-para-documento-soporte#tab-panel-136)

```
https://api-sandbox.factus.com.co/v2/numbering-ranges
```

### **Encabezados de la Solicitud**

Incluye los siguientes encabezados.

<table><tbody><tr><td><code>Content-Type</code> : <code>application/json</code><br>Indica que los datos se envían en formato JSON.</td></tr><tr><td><code>Authorization Bearer token_de_acceso</code><br>Token de autenticación necesario para acceder al recurso. Ver <a href="https://developers.factus.com.co/autenticacion/auth" target="_blank">Cómo generar token</a></td></tr><tr><td><code>Accept</code> : <code>application/json</code><br>Indica que la respuesta debe estar en formato JSON.</td></tr></tbody></table>

``**Nota:** Reemplaza `token_de_acceso` con el token proporcionado tras autenticarte.``

* * *

### Parámetros del Cuerpo (Body)

[Sección titulada «Parámetros del Cuerpo (Body)»](https://developers.factus.com.co/rangos-de-numeracion/ejemplos/crear-rango-para-documento-soporte#par%C3%A1metros-del-cuerpo-body)

El cuerpo (Body) de la solicitud debe enviarse en formato JSON y debe incluir los siguientes parámetros:

| Parámetros |
| --- |
| **`document`** `string`
Código de documento, para ver los códigos de documento que se pueden usar vea la siguiente tabla. 24 para crear un rango de documento soporte.

[Códigos de documentos](https://developers.factus.com.co/tablas-de-referencia/tablas/#c%C3%B3digos-de-tipos-de-documento-para-los-rangos-de-numeraci%C3%B3n) |
| **`prefix`** `Máx.4 caracteres`

Prefijo alfanumérico del rango de numeración.

|
| **`resolution_number`** `string`

Número de resolución.

|
| **`current`** `string`

Número actual del consecutivo. El número del siguiente documento que se generará.
**NOTA**: Si el consecutivo se ha usado, debe agregar el número del último consecutivo usado.

|

### Ejemplo de Solicitud

[Sección titulada «Ejemplo de Solicitud»](https://developers.factus.com.co/rangos-de-numeracion/ejemplos/crear-rango-para-documento-soporte#ejemplo-de-solicitud)

* [Factura de venta](https://developers.factus.com.co/rangos-de-numeracion/ejemplos/crear-rango-para-documento-soporte#tab-panel-137)

```
{ "document": "24", "prefix": "DS", "resolution_number": "18760000009", "current": 1}
```
