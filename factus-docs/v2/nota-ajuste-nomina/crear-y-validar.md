# Crear y validar

Este endpoint permite crear y validar una nota de ajuste a nómina (eliminación), la cual se utiliza para eliminar ante la DIAN una nómina electrónica previamente validada.

**Método:** POST

#### **Endpoint**

**Sandbox**

```
https://api-sandbox.factus.com.co/v2/adjustment-payrolls
```

**Producción**

```
https://api.factus.com.co/v2/adjustment-payrolls
```

### **Encabezados de la Solicitud**

Incluye los siguientes encabezados.

<table><tbody><tr><td><code>Content-Type</code> : <code>application/json</code><br>Indica que los datos se envían en formato JSON.</td></tr><tr><td><code>Authorization Bearer token_de_acceso</code><br>Token de autenticación necesario para acceder al recurso. Ver <a href="https://developers.factus.com.co/autenticacion/auth" target="_blank">Cómo generar token</a></td></tr><tr><td><code>Accept</code> : <code>application/json</code><br>Indica que la respuesta debe estar en formato JSON.</td></tr></tbody></table>

``**Nota:** Reemplaza `token_de_acceso` con el token proporcionado tras autenticarte.``

* * *

### Parámetros del Cuerpo (Body)

[Sección titulada «Parámetros del Cuerpo (Body)»](https://developers.factus.com.co/nota-ajuste-nomina/crear-y-validar#par%C3%A1metros-del-cuerpo-body)

| |
| --- |
| **`payroll_number`** `string`
Número de la nómina electrónica que se desea eliminar. |
| **`reference_code`** `string`
Código de referencia único de la nómina de eliminación. Se recomienda guardarlo una vez se cree para poder ver o eliminar la nómina de eliminación fácilmente. |
| **`numbering_range_id`** `string` `opcional`
ID del rango de numeración para la nómina de eliminación. Es obligatorio solo si tienes múltiples rangos activos. Si se omite, el sistema utilizará el único rango disponible por defecto. |

#### Ejemplo de Solicitud

[Sección titulada «Ejemplo de Solicitud»](https://developers.factus.com.co/nota-ajuste-nomina/crear-y-validar#ejemplo-de-solicitud)

**Nómina de eliminación**

```
{ "payroll_number": "NEF110", "reference_code": "990000001", "numbering_range_id": "01kpdv25zj3f7sd5sedemgbnx9"}
```

* * *
