# Rangos asociados al software

El endpoint **Rangos Asociados al Software** permite obtener los rangos de numeración asociados al software.

**Método:** GET

#### **Endpoint**

* [Sandbox](https://developers.factus.com.co/rangos-de-numeracion/rangos-asociados-al-software#tab-panel-83)
* [Producción](https://developers.factus.com.co/rangos-de-numeracion/rangos-asociados-al-software#tab-panel-84)

```
https://api-sandbox.factus.com.co/v2/numbering-ranges/dian
```

### **Encabezados de la Solicitud**

Incluye los siguientes encabezados.

<table><tbody><tr><td><code>Content-Type</code> : <code>application/json</code><br>Indica que los datos se envían en formato JSON.</td></tr><tr><td><code>Authorization Bearer token_de_acceso</code><br>Token de autenticación necesario para acceder al recurso. Ver <a href="https://developers.factus.com.co/autenticacion/auth" target="_blank">Cómo generar token</a></td></tr><tr><td><code>Accept</code> : <code>application/json</code><br>Indica que la respuesta debe estar en formato JSON.</td></tr></tbody></table>

``**Nota:** Reemplaza `token_de_acceso` con el token proporcionado tras autenticarte.``

* * *

### Response

[Sección titulada «Response»](https://developers.factus.com.co/rangos-de-numeracion/rangos-asociados-al-software#response)

La consulta devuelve un array con los rangos de numeración asociados al software.

* * *

## Tabla de Valores del Consecutivo

[Sección titulada «Tabla de Valores del Consecutivo»](https://developers.factus.com.co/rangos-de-numeracion/rangos-asociados-al-software#tabla-de-valores-del-consecutivo)

| |
| --- |
| **`prefix`**
Prefijo. |
| **`from`**
Número de inicio del consecutivo. |
| **`to`**
Número del final del consecutivo. |
| **`resolution_number`**
Número de resolución. |
| **`start_date`**
Fecha de expedición. |
| **`end_date`**
Fecha de vencimiento. |
| **`technical_key`**
Clave técnica. |
