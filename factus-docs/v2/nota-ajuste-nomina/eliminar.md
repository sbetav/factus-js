# Eliminar no validada

Este endpoint `elimina` una nómina de ajuste usando el código de referencia `reference_code` con el cual se creó.

**Método:** DELETE

#### **Endpoint**

**Sandbox**

```
https://api-sandbox.factus.com.co/v2/adjustment-payrolls/reference/:reference_code
```

**Producción**

```
https://api.factus.com.co/v2/adjustment-payrolls/reference/:reference_code
```

### **Encabezados de la Solicitud**

Incluye los siguientes encabezados.

<table><tbody><tr><td><code>Content-Type</code> : <code>application/json</code><br>Indica que los datos se envían en formato JSON.</td></tr><tr><td><code>Authorization Bearer token_de_acceso</code><br>Token de autenticación necesario para acceder al recurso. Ver <a href="https://developers.factus.com.co/autenticacion/auth" target="_blank">Cómo generar token</a></td></tr><tr><td><code>Accept</code> : <code>application/json</code><br>Indica que la respuesta debe estar en formato JSON.</td></tr></tbody></table>

``**Nota:** Reemplaza `token_de_acceso` con el token proporcionado tras autenticarte.``

* * *

### Variables de Ruta, Path Variables

[Sección titulada «Variables de Ruta, Path Variables»](https://developers.factus.com.co/nota-ajuste-nomina/eliminar#variables-de-ruta-path-variables)

| |
| --- |
| **`reference_code`** `string`
Código de referencia de la nómina de eliminación. El `reference_code` se utiliza para identificar de manera única la nómina de eliminación que se desea eliminar; es el mismo que usas para identificarla al momento de crearla. |
