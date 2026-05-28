# Cargar Factura

Este endpoint se utiliza para cargar las facturas electrónicas que hayan sido generadas por una persona o empresa (emisor/facturador).

**Método:** POST

#### **Endpoint**

* [Sandbox](https://developers.factus.com.co/recepcion-de-documentos/cargar-factura#tab-panel-87)
* [Producción](https://developers.factus.com.co/recepcion-de-documentos/cargar-factura#tab-panel-88)

```
https://api-sandbox.factus.com.co/v2/receptions/upload
```

### **Encabezados de la Solicitud**

Incluye los siguientes encabezados.

<table><tbody><tr><td><code>Content-Type</code> : <code>application/json</code><br>Indica que los datos se envían en formato JSON.</td></tr><tr><td><code>Authorization Bearer token_de_acceso</code><br>Token de autenticación necesario para acceder al recurso. Ver <a href="https://developers.factus.com.co/autenticacion/auth" target="_blank">Cómo generar token</a></td></tr><tr><td><code>Accept</code> : <code>application/json</code><br>Indica que la respuesta debe estar en formato JSON.</td></tr></tbody></table>

``**Nota:** Reemplaza `token_de_acceso` con el token proporcionado tras autenticarte.``

* * *

| Parámetros |
| --- |
| **`track_id`** `string`
CUFE de la factura electrónica.

|
