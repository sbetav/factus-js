# Ver

Este endpoint `devuelve` una factura electrónica recibida pasando su **ID** como parámetro en la solicitud `GET`. Puede encontrar el ID de la factura en la respuesta de [listar facturas](https://developers.factus.com.co/recepcion-de-documentos/ver-facturas/) data.data.\*.id .

**Método:** GET

#### **Endpoint**

**Sandbox**

```
https://api-sandbox.factus.com.co/v2/receptions/bills/:id
```

**Producción**

```
https://api.factus.com.co/v2/receptions/bills/:id
```

### **Encabezados de la Solicitud**

Incluye los siguientes encabezados.

<table><tbody><tr><td><code>Content-Type</code> : <code>application/json</code><br>Indica que los datos se envían en formato JSON.</td></tr><tr><td><code>Authorization Bearer token_de_acceso</code><br>Token de autenticación necesario para acceder al recurso. Ver <a href="https://developers.factus.com.co/autenticacion/auth" target="_blank">Cómo generar token</a></td></tr><tr><td><code>Accept</code> : <code>application/json</code><br>Indica que la respuesta debe estar en formato JSON.</td></tr></tbody></table>

``**Nota:** Reemplaza `token_de_acceso` con el token proporcionado tras autenticarte.``

* * *

### Variables de Ruta, Path Variables

[Sección titulada «Variables de Ruta, Path Variables»](https://developers.factus.com.co/recepcion-de-documentos/ver-factura#variables-de-ruta-path-variables)

| |
| --- |
| **`id`** `integer`
ID de la factura electrónica recibida. |
