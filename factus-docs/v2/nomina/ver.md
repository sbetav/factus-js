# Ver

Este endpoint `devuelve` una nómina específica pasando el **código de referencia de la nómina** como parámetro en la solicitud `GET`. Puede encontrar el código de referencia de la nómina en la respuesta de la [creación de la nómina](https://developers.factus.com.co/nomina/crear-y-validar) o en [listar nóminas](https://developers.factus.com.co/nomina/listar#respuesta-del-endpoint) data.data.\*.reference\_code.

**Método:** GET

#### **Endpoint**

**Sandbox**

```
https://api-sandbox.factus.com.co/v2/payrolls/reference/:reference_code
```

**Producción**

```
https://api.factus.com.co/v2/payrolls/reference/:reference_code
```

### **Encabezados de la Solicitud**

Incluye los siguientes encabezados.

<table><tbody><tr><td><code>Content-Type</code> : <code>application/json</code><br>Indica que los datos se envían en formato JSON.</td></tr><tr><td><code>Authorization Bearer token_de_acceso</code><br>Token de autenticación necesario para acceder al recurso. Ver <a href="https://developers.factus.com.co/autenticacion/auth" target="_blank">Cómo generar token</a></td></tr><tr><td><code>Accept</code> : <code>application/json</code><br>Indica que la respuesta debe estar en formato JSON.</td></tr></tbody></table>

``**Nota:** Reemplaza `token_de_acceso` con el token proporcionado tras autenticarte.``

* * *

### Variables de Ruta, Path Variables

[Sección titulada «Variables de Ruta, Path Variables»](https://developers.factus.com.co/nomina/ver#variables-de-ruta-path-variables)

| |
| --- |
| **`reference_code`** `string`
Código de referencia de la nómina. Se recomienda guardar el código de referencia de la nómina una vez se haga la creación de la misma para poder hacer uso de este endpoint fácilmente. |
