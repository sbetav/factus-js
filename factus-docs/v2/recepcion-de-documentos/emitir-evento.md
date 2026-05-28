# Emitir Evento

En este end point podrás emitir los siguientes eventos de la facura electrónica:

### 1\. Acuse de recibo de Factura Electrónica de Venta

[Sección titulada «1. Acuse de recibo de Factura Electrónica de Venta»](https://developers.factus.com.co/recepcion-de-documentos/emitir-evento#1-acuse-de-recibo-de-factura-electr%C3%B3nica-de-venta)

Este evento se emite para confirmar que has recibido la factura electrónica, ya sea en físico o a través de un medio electrónico.

* * *

### 2\. Recibo del bien o prestación del servicio

[Sección titulada «2. Recibo del bien o prestación del servicio»](https://developers.factus.com.co/recepcion-de-documentos/emitir-evento#2-recibo-del-bien-o-prestaci%C3%B3n-del-servicio)

Este evento se emite cuando has recibido los bienes (productos) o servicios que adquiriste y que están especificados en la factura.

* * *

### 3\. Reclamo de la Factura Electrónica de Venta

[Sección titulada «3. Reclamo de la Factura Electrónica de Venta»](https://developers.factus.com.co/recepcion-de-documentos/emitir-evento#3-reclamo-de-la-factura-electr%C3%B3nica-de-venta)

Este evento se emite en caso de que la factura presente alguna inconsistencia, como la entrega parcial o total de los productos, o si el servicio no fue prestado.

* * *

### 4\. Aceptación expresa

[Sección titulada «4. Aceptación expresa»](https://developers.factus.com.co/recepcion-de-documentos/emitir-evento#4-aceptaci%C3%B3n-expresa)

Este evento se emite para indicar que estás de acuerdo con la factura recibida, y que los productos han sido entregados o el servicio ha sido prestado satisfactoriamente.

* * *

### 5\. Aceptación tácita

[Sección titulada «5. Aceptación tácita»](https://developers.factus.com.co/recepcion-de-documentos/emitir-evento#5-aceptaci%C3%B3n-t%C3%A1cita)

Este evento no puede ser emitido por ti. Será generado automáticamente por la persona o empresa (facturador/emisor) de la factura si, pasados tres (3) días hábiles desde la emisión del evento **Recibo del bien o prestación del servicio**, no has emitido un **Reclamo de la Factura Electrónica de Venta** o una **Aceptación expresa**.

**Método:** PATCH

#### **Endpoint**

* [Sandbox](https://developers.factus.com.co/recepcion-de-documentos/emitir-evento#tab-panel-89)
* [Producción](https://developers.factus.com.co/recepcion-de-documentos/emitir-evento#tab-panel-90)

```
https://api-sandbox.factus.com.co/v2/receptions/bills/:bill_id/radian/events/:event_type
```

### **Encabezados de la Solicitud**

Incluye los siguientes encabezados.

<table><tbody><tr><td><code>Content-Type</code> : <code>application/json</code><br>Indica que los datos se envían en formato JSON.</td></tr><tr><td><code>Authorization Bearer token_de_acceso</code><br>Token de autenticación necesario para acceder al recurso. Ver <a href="https://developers.factus.com.co/autenticacion/auth" target="_blank">Cómo generar token</a></td></tr><tr><td><code>Accept</code> : <code>application/json</code><br>Indica que la respuesta debe estar en formato JSON.</td></tr></tbody></table>

``**Nota:** Reemplaza `token_de_acceso` con el token proporcionado tras autenticarte.``

## Tabla de Códigos de Eventos

[Sección titulada «Tabla de Códigos de Eventos»](https://developers.factus.com.co/recepcion-de-documentos/emitir-evento#tabla-de-c%C3%B3digos-de-eventos)

| **Código** | **Nombre** |
| --- | --- |
| 030 | Acuse de recibo de Factura Electrónica de Venta |
| 031 | Reclamo de la Factura Electrónica de Venta |
| 032 | Recibo del bien y/o prestación del servicio |
| 033 | Aceptación expresa |
| 034 | Aceptación tácita |

### Descripción del body

[Sección titulada «Descripción del body»](https://developers.factus.com.co/recepcion-de-documentos/emitir-evento#descripci%C3%B3n-del-body)

Se envían los datos de la persona del evento. Los datos de la persona pueden cambiar dependiendo del evento:

**_Acuse de recibo de Factura Electrónica de Venta:_** debes agregar los datos de la persona que recibió la factura.
**_Reclamo de la Factura Electrónica de Venta:_** debes agregar los datos de la persona que hizo el reclamo.
**_Recibo del bien y/o prestación del servicio:_** debes agregar los datos de la persona que recibió los bienes (productos) o servicio.
**_Aceptación expresa:_** debes agregar los datos de la persona que acepto expresamente la factura y los bienes (productos) y servicios.

* * *

### Parametros del cuerpo (Body)

[Sección titulada «Parametros del cuerpo (Body)»](https://developers.factus.com.co/recepcion-de-documentos/emitir-evento#parametros-del-cuerpo-body)

| Parámetros |
| --- |
| **`claim_concept_code`** `string` `opcional`
Requerido si se envía el evento de Reclamo de la Factura Electrónica de Venta.
**Nota:** Para saber los códigos de los conceptos, consulta la tabla

[Códigos conceptos de reclamo.](https://developers.factus.com.co/tablas-de-referencia/tablas/#c%C3%B3digos-de-conceptos-de-reclamo) |
| **`identification_document_code`** `integer`

Código del tipo de identificación de la persona.
**Nota:** Consulta la tabla [Códigos tipos de documentos de identidad.](https://developers.factus.com.co/tablas-de-referencia/tablas/#c%C3%B3digos-de-tipos-de-documentos-de-identidad)

|
| **`identification`** `string`

Número de identificación de la persona.

|
| **`dv`** `string`

Requerido si la persona se identifica con NIT (**identification\_document\_code=6**).

|
| **`first_name`** `string`

Nombre de la persona.

|
| **`last_name`** `string`

Apellidos de la persona.

|
| **`job_title`** `string`

Cargo que tiene la persona.

|
| **`organization_department`** `string`

Departamento al que pertenece el cargo que tiene la persona.

|

### Variables de Ruta, Path Variables

[Sección titulada «Variables de Ruta, Path Variables»](https://developers.factus.com.co/recepcion-de-documentos/emitir-evento#variables-de-ruta-path-variables)

| |
| --- |
| **`bill_id`** `string`
ID de la factura electrónica. |
| **`event_type`** `string`
Código del evento a emitir. |
