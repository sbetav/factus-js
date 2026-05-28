# Ver Nota Crédito

Este endpoint `devuelve` una nota crédito específica pasando el **número de la nota crédito** como parámetro en la solicitud `GET`. Puede encontrar el número de la nota crédito en la respuesta de la [creación de la nota crédito](https://developers.factus.com.co/notas-credito/crear-y-validar-nota-credito/) o en [ver y filtrar notas crédito](https://developers.factus.com.co/notas-credito/ver-filtrar-notas-credito/) , data.credit\_note.number.

**Método:** GET

#### **Endpoint**

* [Sandbox](https://developers.factus.com.co/notas-credito/ver#tab-panel-70)
* [Producción](https://developers.factus.com.co/notas-credito/ver#tab-panel-71)

```
https://api-sandbox.factus.com.co/v2/credit-notes/:number
```

### **Encabezados de la Solicitud**

Incluye los siguientes encabezados.

<table><tbody><tr><td><code>Content-Type</code> : <code>application/json</code><br>Indica que los datos se envían en formato JSON.</td></tr><tr><td><code>Authorization Bearer token_de_acceso</code><br>Token de autenticación necesario para acceder al recurso. Ver <a href="https://developers.factus.com.co/autenticacion/auth" target="_blank">Cómo generar token</a></td></tr><tr><td><code>Accept</code> : <code>application/json</code><br>Indica que la respuesta debe estar en formato JSON.</td></tr></tbody></table>

``**Nota:** Reemplaza `token_de_acceso` con el token proporcionado tras autenticarte.``

* * *

### Variables de Ruta, Path Variables

[Sección titulada «Variables de Ruta, Path Variables»](https://developers.factus.com.co/notas-credito/ver#variables-de-ruta-path-variables)

| |
| --- |
| **`number`** `string`
Número de nota crédito. Se recomienda guardar el número de la nota crédito una vez se haga la creación de la misma para poder hacer uso de este endpoint fácilmente. |
