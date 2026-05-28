# Ver Facturas

Este endpoint se utiliza para obtener y filtrar las facturas electrónicas.

**Método:** GET

#### **Endpoint**

* [Sandbox](https://developers.factus.com.co/recepcion-de-documentos/ver-facturas#tab-panel-91)
* [Producción](https://developers.factus.com.co/recepcion-de-documentos/ver-facturas#tab-panel-92)

```
https://api-sandbox.factus.com.co/v2/receptions/bills?filter[id]=&filter[number]=&filter[issue_date]&filter[cufe]&filter[company_nit]&filter[company_name]&filter[completed_events]=
```

### **Encabezados de la Solicitud**

Incluye los siguientes encabezados.

<table><tbody><tr><td><code>Content-Type</code> : <code>application/json</code><br>Indica que los datos se envían en formato JSON.</td></tr><tr><td><code>Authorization Bearer token_de_acceso</code><br>Token de autenticación necesario para acceder al recurso. Ver <a href="https://developers.factus.com.co/autenticacion/auth" target="_blank">Cómo generar token</a></td></tr><tr><td><code>Accept</code> : <code>application/json</code><br>Indica que la respuesta debe estar en formato JSON.</td></tr></tbody></table>

``**Nota:** Reemplaza `token_de_acceso` con el token proporcionado tras autenticarte.``

### Filtros de Búsqueda

[Sección titulada «Filtros de Búsqueda»](https://developers.factus.com.co/recepcion-de-documentos/ver-facturas#filtros-de-b%C3%BAsqueda)

| Parámetros |
| --- |
| **`filter[id]`**
ID de la factura electrónica.

|
| **`filter[number]`**

Número de la factura electrónica.

|
| **`filter[issue_date]`**

Fecha de emisión de la factura electrónica.

|
| **`filter[cufe]`**

CUFE de la factura electrónica.

|
| **`filter[company_nit]`**

NIT de la empresa o persona que te emitió la factura electrónica.

|
| **`filter[company_name]`**

Nombre de la empresa o persona que te emitió la factura electrónica.

|
| **`filter[completed_events]`**

Usa 1 para listar las facturas que no tienen eventos pendientes por emitir y 0 para mostrar las facturas que tienen eventos pendientes por emitir.

|
