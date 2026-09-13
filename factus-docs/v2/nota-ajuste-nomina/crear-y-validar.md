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

#### Respuesta

[Sección titulada «Respuesta»](https://developers.factus.com.co/nota-ajuste-nomina/crear-y-validar#respuesta)

Descripción de los campos en la respuesta data Campos generales

<table class="astro-ibjkzya5"><tbody class="astro-ibjkzya5"><tr><td><strong><code>data.number</code> </strong><code>string</code><br>Número de la nómina de eliminación.</td></tr><tr><td><strong><code>data.reference_code</code> </strong><code>string</code><br>Código de referencia único asignado a la nómina de eliminación.</td></tr></tbody></table>

data.company

<table class="astro-ibjkzya5"><tbody class="astro-ibjkzya5"><tr><td><strong><code>data.company</code> </strong><code>object</code><br>Objeto que contiene la información sobre la empresa.</td></tr><tr><td><strong><code>data.company.url_logo</code> </strong><code>string</code><br>URL de la imagen del logotipo de la empresa.</td></tr><tr><td><strong><code>data.company.nit</code> </strong><code>string</code><br>NIT de la empresa emisora (sin dígito de verificación).</td></tr><tr><td><strong><code>data.company.dv</code> </strong><code>string</code><br>Dígito de verificación del NIT de la empresa.</td></tr><tr><td><strong><code>data.company.economic_activity</code> </strong><code>string</code><br>Código CIIU de la actividad económica principal de la empresa.</td></tr><tr><td><strong><code>data.company.name</code> </strong><code>string</code><br>Nombre o razón social de la empresa.</td></tr><tr><td><strong><code>data.company.address</code> </strong><code>string</code><br>Dirección física de la empresa.</td></tr><tr><td><strong><code>data.company.phone_number</code> </strong><code>string</code><br>Número de teléfono de la empresa.</td></tr><tr><td><strong><code>data.company.email</code> </strong><code>string</code><br>Correo electrónico de la empresa.</td></tr><tr><td><strong><code>data.company.municipality</code> </strong><code>object</code><br>Objeto que contiene información sobre el municipio donde está ubicada la empresa.</td></tr><tr><td><strong><code>data.company.municipality.code</code> </strong><code>string</code><br>Código del municipio.</td></tr><tr><td><strong><code>data.company.municipality.name</code> </strong><code>string</code><br>Nombre del municipio.</td></tr><tr><td><strong><code>data.company.municipality.department</code> </strong><code>object</code><br>Objeto que contiene la información sobre el departamento.</td></tr><tr><td><strong><code>data.company.municipality.department.code</code> </strong><code>string</code><br>Código del departamento.</td></tr><tr><td><strong><code>data.company.municipality.department.name</code> </strong><code>string</code><br>Nombre del departamento.</td></tr></tbody></table>

data.payroll

<table class="astro-ibjkzya5"><tbody class="astro-ibjkzya5"><tr><td><strong><code>data.payroll</code> </strong><code>object | null</code><br>Objeto que contendrá información sobre la nómina a la cual se hace referencia.</td></tr><tr><td><strong><code>data.payroll.reference_code</code> </strong><code>string</code><br>Código de referencia de la nómina a la que se aplicó la nómina de eliminación.</td></tr><tr><td><strong><code>data.payroll.number</code> </strong><code>string</code><br>Número de la nómina a la que se le aplicó la nómina de eliminación.</td></tr><tr><td><strong><code>data.payroll.worker</code> </strong><code>object</code><br>Objeto que contiene información sobre el trabajador.</td></tr><tr><td><strong><code>data.payroll.worker.name</code> </strong><code>string</code><br>Nombre completo del trabajador.</td></tr><tr><td><strong><code>data.payroll.worker.identification_number</code> </strong><code>string</code><br>Número de identificación del trabajador.</td></tr><tr><td><strong><code>data.payroll.worker.municipality</code> </strong><code>object</code><br>Objeto que contiene información sobre el municipio.</td></tr><tr><td><strong><code>data.payroll.worker.municipality.code</code> </strong><code>string</code><br>Código del municipio.</td></tr><tr><td><strong><code>data.payroll.worker.municipality.name</code> </strong><code>string</code><br>Nombre del municipio.</td></tr><tr><td><strong><code>data.payroll.cune</code> </strong><code>string</code><br>Código único de la nómina. Es el identificador oficial y único del documento ante la DIAN.</td></tr></tbody></table>

data Totales y validación

<table class="astro-ibjkzya5"><tbody class="astro-ibjkzya5"><tr><td><strong><code>data.errors</code> </strong><code>array | null</code><br>Array con las notificaciones o advertencias retornadas por la DIAN durante la validación. Las claves son los códigos de regla (ej. <code>FAJ44b</code>) y los valores son el mensaje descriptivo. Este campo puede estar vacío si no hay notificaciones.</td></tr><tr><td><strong><code>data.is_validated</code> </strong><code>boolean</code><br>Indica si la nota de ajuste fue validada por la DIAN.</td></tr><tr><td><strong><code>data.validated_at</code> </strong><code>string | null</code><br>Fecha en la que la nota fue validada por la DIAN en formato <code>DD-MM-YYYY HH:mm:ss AM/PM</code>. Retorna <code>null</code> en caso de que no haya sido validada.</td></tr><tr><td><strong><code>data.created_at</code> </strong><code>string</code><br>Fecha en la que se creó el documento en formato: <code>DD-MM-YYYY HH:mm:ss AM/PM</code>.</td></tr><tr><td><strong><code>data.cune</code> </strong><code>string</code><br>Código único de la nota de ajuste. Es el identificador oficial y único del documento ante la DIAN.</td></tr><tr><td><strong><code>data.qr</code> </strong><code>string</code><br>URL del código QR que apunta al portal de la DIAN para consultar el documento.</td></tr></tbody></table>

* * *
