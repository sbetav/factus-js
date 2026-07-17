# Ver

Este endpoint `devuelve` una nota débito específica pasando el **número de la nota débito** como parámetro en la solicitud `GET`. Puede encontrar el número de la nota débito en la respuesta de la creación de la nota débito, `data.number`.

**Método:** GET

#### **Endpoint**

**Sandbox**

```
https://api-sandbox.factus.com.co/v2/debit-notes/:number
```

**Producción**

```
https://api.factus.com.co/v2/debit-notes/:number
```

### **Encabezados de la Solicitud**

Incluye los siguientes encabezados.

<table><tbody><tr><td><code>Content-Type</code> : <code>application/json</code><br>Indica que los datos se envían en formato JSON.</td></tr><tr><td><code>Authorization Bearer token_de_acceso</code><br>Token de autenticación necesario para acceder al recurso. Ver <a href="https://developers.factus.com.co/autenticacion/auth" target="_blank">Cómo generar token</a></td></tr><tr><td><code>Accept</code> : <code>application/json</code><br>Indica que la respuesta debe estar en formato JSON.</td></tr></tbody></table>

``**Nota:** Reemplaza `token_de_acceso` con el token proporcionado tras autenticarte.``

* * *

### Variables de Ruta, Path Variables

[Sección titulada «Variables de Ruta, Path Variables»](https://developers.factus.com.co/notas-debito/ver#variables-de-ruta-path-variables)

| |
| --- |
| **`number`** `string`
Número de nota débito. Se recomienda guardar el número de la nota débito una vez se haga la creación de la misma para poder hacer uso de este endpoint fácilmente. |
