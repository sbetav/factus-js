# Eventos de una factura

Este endpoint permite `consultar` los eventos generados a una factura por su número de factura.

**Método:** GET

#### **Endpoint**

* [Sandbox](https://developers.factus.com.co/facturas/eventos-de-facturas#tab-panel-41)
* [Producción](https://developers.factus.com.co/facturas/eventos-de-facturas#tab-panel-42)

```
https://api-sandbox.factus.com.co/v2/bills/:number/radian/events
```

### **Encabezados de la Solicitud**

Incluye los siguientes encabezados.

<table><tbody><tr><td><code>Content-Type</code> : <code>application/json</code><br>Indica que los datos se envían en formato JSON.</td></tr><tr><td><code>Authorization Bearer token_de_acceso</code><br>Token de autenticación necesario para acceder al recurso. Ver <a href="https://developers.factus.com.co/autenticacion/auth" target="_blank">Cómo generar token</a></td></tr><tr><td><code>Accept</code> : <code>application/json</code><br>Indica que la respuesta debe estar en formato JSON.</td></tr></tbody></table>

``**Nota:** Reemplaza `token_de_acceso` con el token proporcionado tras autenticarte.``

* * *

### Variables de Ruta, Path Variables

[Sección titulada «Variables de Ruta, Path Variables»](https://developers.factus.com.co/facturas/eventos-de-facturas#variables-de-ruta-path-variables)

| |
| --- |
| **`number`** `string`
Número de factura. Se recomienda guardar el numero de la factura una vez se haga la creación de la misma para poder hacer uso de este endpoint fácilmente. |

### Descripción de la respuesta

[Sección titulada «Descripción de la respuesta»](https://developers.factus.com.co/facturas/eventos-de-facturas#descripci%C3%B3n-de-la-respuesta)

La respuesta devuelve un array de objetos que contiene la información de cada evento.

| **ID** | **Descripción** |
| --- | --- |
| `number` | Número del evento. |
| `cude` | CUDE del evento. |
| `event_code` | Código del evento. |
| `event_name` | Nombre del evento. |
| `effective_date` | Fecha de emisión del evento. |
| `effective_time` | Hora de emisión del evento. |
