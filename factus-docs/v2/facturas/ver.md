# Ver factura

Este endpoint `devuelve` una factura específica pasando el **número de la factura** como parámetro en la solicitud `GET`. Puede encontrar el número de la factura, debe ver la respuesta de la [creación de la factura](https://developers.factus.com.co/facturas/crear-y-validar/#response) o en [filtrar factura](https://developers.factus.com.co/facturas/listar-y-filtrar#respuesta-del-endpoint) data.data.\*.number.

**Método:** GET

#### **Endpoint**

* [Sandbox](https://developers.factus.com.co/facturas/ver#tab-panel-47)
* [Producción](https://developers.factus.com.co/facturas/ver#tab-panel-48)

```
https://api-sandbox.factus.com.co/v2/bills/:number
```

### **Encabezados de la Solicitud**

Incluye los siguientes encabezados.

<table><tbody><tr><td><code>Content-Type</code> : <code>application/json</code><br>Indica que los datos se envían en formato JSON.</td></tr><tr><td><code>Authorization Bearer token_de_acceso</code><br>Token de autenticación necesario para acceder al recurso. Ver <a href="https://developers.factus.com.co/autenticacion/auth" target="_blank">Cómo generar token</a></td></tr><tr><td><code>Accept</code> : <code>application/json</code><br>Indica que la respuesta debe estar en formato JSON.</td></tr></tbody></table>

``**Nota:** Reemplaza `token_de_acceso` con el token proporcionado tras autenticarte.``

* * *

### Variables de Ruta, Path Variables

[Sección titulada «Variables de Ruta, Path Variables»](https://developers.factus.com.co/facturas/ver#variables-de-ruta-path-variables)

| |
| --- |
| **`number`** `string`
Número de factura. Se recomienda guardar el numero de la factura una vez se haga la creación de la misma para poder hacer uso de este endpoint fácilmente. |
