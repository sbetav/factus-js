# Emitir Evento

Este contenido es para V1. Cambia a la [versión más reciente](https://developers.factus.com.co/) para ver la documentación actualizada.

#### **Endpoint**

[Sección titulada «Endpoint»](https://developers.factus.com.co/v1/recepcion-de-documentos/emitir-evento#endpoint)

```
https://api-sandbox.factus.com.co/v1/receptions/bills/:bill_id/radian/events/:event_type
```

* * *

### Descripción

[Sección titulada «Descripción»](https://developers.factus.com.co/v1/recepcion-de-documentos/emitir-evento#descripci%C3%B3n)

En este end point podrás emitir los siguientes eventos:

* * *

## Eventos de la Factura Electrónica

[Sección titulada «Eventos de la Factura Electrónica»](https://developers.factus.com.co/v1/recepcion-de-documentos/emitir-evento#eventos-de-la-factura-electr%C3%B3nica)

### 1\. Acuse de recibo de Factura Electrónica de Venta

[Sección titulada «1. Acuse de recibo de Factura Electrónica de Venta»](https://developers.factus.com.co/v1/recepcion-de-documentos/emitir-evento#1-acuse-de-recibo-de-factura-electr%C3%B3nica-de-venta)

Este evento se emite para confirmar que has recibido la factura electrónica, ya sea en físico o a través de un medio electrónico.

* * *

### 2\. Recibo del bien o prestación del servicio

[Sección titulada «2. Recibo del bien o prestación del servicio»](https://developers.factus.com.co/v1/recepcion-de-documentos/emitir-evento#2-recibo-del-bien-o-prestaci%C3%B3n-del-servicio)

Este evento se emite cuando has recibido los bienes (productos) o servicios que adquiriste y que están especificados en la factura.

* * *

### 3\. Reclamo de la Factura Electrónica de Venta

[Sección titulada «3. Reclamo de la Factura Electrónica de Venta»](https://developers.factus.com.co/v1/recepcion-de-documentos/emitir-evento#3-reclamo-de-la-factura-electr%C3%B3nica-de-venta)

Este evento se emite en caso de que la factura presente alguna inconsistencia, como la entrega parcial o total de los productos, o si el servicio no fue prestado.

* * *

### 4\. Aceptación expresa

[Sección titulada «4. Aceptación expresa»](https://developers.factus.com.co/v1/recepcion-de-documentos/emitir-evento#4-aceptaci%C3%B3n-expresa)

Este evento se emite para indicar que estás de acuerdo con la factura recibida, y que los productos han sido entregados o el servicio ha sido prestado satisfactoriamente.

* * *

### 5\. Aceptación tácita

[Sección titulada «5. Aceptación tácita»](https://developers.factus.com.co/v1/recepcion-de-documentos/emitir-evento#5-aceptaci%C3%B3n-t%C3%A1cita)

Este evento no puede ser emitido por ti. Será generado automáticamente por la persona o empresa (facturador/emisor) de la factura si, pasados tres (3) días hábiles desde la emisión del evento **Recibo del bien o prestación del servicio**, no has emitido un **Reclamo de la Factura Electrónica de Venta** o una **Aceptación expresa**.

* * *

## Tabla de Códigos de Eventos

[Sección titulada «Tabla de Códigos de Eventos»](https://developers.factus.com.co/v1/recepcion-de-documentos/emitir-evento#tabla-de-c%C3%B3digos-de-eventos)

| **Código** | **Nombre** |
| --- | --- |
| 030 | Acuse de recibo de Factura Electrónica de Venta |
| 031 | Reclamo de la Factura Electrónica de Venta |
| 032 | Recibo del bien y/o prestación del servicio |
| 033 | Aceptación expresa |
| 034 | Aceptación tácita |

* * *

### Descripción del body

[Sección titulada «Descripción del body»](https://developers.factus.com.co/v1/recepcion-de-documentos/emitir-evento#descripci%C3%B3n-del-body)

Se envían los datos de la persona del evento. Los datos de la persona pueden cambiar dependiendo del evento:

_**Acuse de recibo de Factura Electrónica de Venta:**_ debes agregar los datos de la persona que recibió la factura.
_**Reclamo de la Factura Electrónica de Venta:**_ debes agregar los datos de la persona que hizo el reclamo.
_**Recibo del bien y/o prestación del servicio:**_ debes agregar los datos de la persona que recibió los bienes (productos) o servicio.
_**Aceptación expresa:**_ debes agregar los datos de la persona que acepto expresamente la factura y los bienes (productos) y servicios.

* * *

## Tabla de Descripción de Campos

[Sección titulada «Tabla de Descripción de Campos»](https://developers.factus.com.co/v1/recepcion-de-documentos/emitir-evento#tabla-de-descripci%C3%B3n-de-campos)

| **ID** | **Descripción** |
| --- | --- |
| `claim_concept_code` | (Opcional) Requerido si se envía el evento de Reclamo de la Factura Electrónica de Venta. |
| | **Nota:** Para saber los códigos de los conceptos, consulta la tabla **Códigos conceptos de reclamo**. |
| `identification_document_code` | Código del tipo de identificación de la persona. |
| | **Nota:** Consulta la tabla **Códigos tipos de documentos de identidad** que se encuentra en la introducción de esta documentación. |
| `identification` | Número de identificación de la persona. |
| `dv` | (Opcional) Requerido si la persona se identifica con NIT (**identification\_document\_code=6**). |
| `first_name` | Nombre de la persona. |
| `last_name` | Apellidos de la persona. |
| `job_title` | (Opcional) Cargo que tiene la persona. |
| `organization_department` | (Opcional) Departamento al que pertenece el cargo que tiene la persona. |

* * *

### Autorización

[Sección titulada «Autorización»](https://developers.factus.com.co/v1/recepcion-de-documentos/emitir-evento#autorizaci%C3%B3n)

* `Authorization: Bearer Token`
Esta solicitud utiliza un _authorization helper_ de la colección [API Factus](https://developers.factus.com.co/v1/autenticacion/introduccion/).

* * *

### Encabezados de la Solicitud (Request Headers)

[Sección titulada «Encabezados de la Solicitud (Request Headers)»](https://developers.factus.com.co/v1/recepcion-de-documentos/emitir-evento#encabezados-de-la-solicitud-request-headers)

* `Accept: application/json`

* * *

### Variables de Ruta (Path Variables)

[Sección titulada «Variables de Ruta (Path Variables)»](https://developers.factus.com.co/v1/recepcion-de-documentos/emitir-evento#variables-de-ruta-path-variables)

* `bill_id` ID de la factura electrónica, al consultar la factura se hace referencia al campo id de la respuesta.
* `event_type` Código del evento a emitir

* * *
