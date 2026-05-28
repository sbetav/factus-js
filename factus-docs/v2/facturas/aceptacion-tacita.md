# Aceptación tacita

Este endpoint permite `emitir` el evento de aceptación tacita. Este evento solo es valido para las facturas generadas con la forma de pago a crédito.

**Método:** POST

#### **Endpoint**

* [Sandbox](https://developers.factus.com.co/facturas/aceptacion-tacita#tab-panel-20)
* [Producción](https://developers.factus.com.co/facturas/aceptacion-tacita#tab-panel-21)

```
https://api-sandbox.factus.com.co/v2/bills/:number/radian/events/:event_type
```

### **Encabezados de la Solicitud**

Incluye los siguientes encabezados.

<table><tbody><tr><td><code>Content-Type</code> : <code>application/json</code><br>Indica que los datos se envían en formato JSON.</td></tr><tr><td><code>Authorization Bearer token_de_acceso</code><br>Token de autenticación necesario para acceder al recurso. Ver <a href="https://developers.factus.com.co/autenticacion/auth" target="_blank">Cómo generar token</a></td></tr><tr><td><code>Accept</code> : <code>application/json</code><br>Indica que la respuesta debe estar en formato JSON.</td></tr></tbody></table>

``**Nota:** Reemplaza `token_de_acceso` con el token proporcionado tras autenticarte.``

* * *

### Parámetros del Cuerpo (Body)

[Sección titulada «Parámetros del Cuerpo (Body)»](https://developers.factus.com.co/facturas/aceptacion-tacita#par%C3%A1metros-del-cuerpo-body)

El cuerpo (Body) de la solicitud debe enviarse en formato JSON y debe incluir los siguientes parámetros:

| **Parámetros** |
| --- |
| **`identification_document_code`** `int`
ID de tipo de identificación |
| **`identification`** `string`
Número de identificación |
| **`dv`** `string` `opcional`
Solo es requerido cuando la persona se identifica por RUT |
| **`first_name`** `string`
Nombres de la persona |
| **`last_name`** `string`
Apellidos de la persona |
| **`job_title`** `string` `opcional`
Cargo en la empresa |
| **`organization_department`** `string` `opcional`
Área o departamento de la persona en la empresa |

### Variables de Ruta, Path Variables

[Sección titulada «Variables de Ruta, Path Variables»](https://developers.factus.com.co/facturas/aceptacion-tacita#variables-de-ruta-path-variables)

| **Parámetros** |
| --- |
| **`number`**
Número de factura. Se recomienda guardar el numero de la factura una vez se haga la creación de la misma para poder hacer uso de este endpoint fácilmente. |
| **`event_type`**
código del evento. Para ver el código que pertenece a la aceptación tacita, puede consultar la tabla [eventos](https://developers.factus.com.co/tablas-de-referencia/tablas/#c%C3%B3digos-de-eventos) |

* * *

### Ejemplo de solicitud

[Sección titulada «Ejemplo de solicitud»](https://developers.factus.com.co/facturas/aceptacion-tacita#ejemplo-de-solicitud)

* [example](https://developers.factus.com.co/facturas/aceptacion-tacita#tab-panel-22)

```
{ "identification_document_code": "13", "identification": "12345667", "dv": "", "first_name": "Pepito", "last_name": "Perez", "job_title": "Desarrollador de software", "organization_department": "Sistemas"}
```
