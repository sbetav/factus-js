# Cargar Factura

Este contenido es para V1. Cambia a la [versión más reciente](https://developers.factus.com.co/) para ver la documentación actualizada.

#### **Endpoint**

[Sección titulada «Endpoint»](https://developers.factus.com.co/v1/recepcion-de-documentos/cargar-factura#endpoint)

```
https://api-sandbox.factus.com.co/v1/receptions/upload
```

* * *

### Descripción

[Sección titulada «Descripción»](https://developers.factus.com.co/v1/recepcion-de-documentos/cargar-factura#descripci%C3%B3n)

Este endpoint se utiliza para cargar las facturas electrónicas que hayan sido generadas por una persona o empresa (emisor/facturador).

* * *

| ID | Descripción |
| --- | --- |
| `track_id` | CUFE de la factura electrónica |

* * *

### Descripción de la response cuando el código de estado es 201

[Sección titulada «Descripción de la response cuando el código de estado es 201»](https://developers.factus.com.co/v1/recepcion-de-documentos/cargar-factura#descripci%C3%B3n-de-la-response-cuando-el-c%C3%B3digo-de-estado-es-201)

| Campo | Descripción |
| --- | --- |
| `ID` | ID del registro. |
| `issue_date` | Fecha en la que se emitió la factura. |
| `issue_time` | Hora en la que se emitió la factura. |
| `payment_due_date` | Fecha de vencimiento de la factura. |
| `number` | Número de la factura. |
| `cufe` | CUFE de la factura. |
| `company_identification_type_code` | Código de tipo de identificación de la persona o empresa (emisor/facturador). |
| `company_nit` | NIT de la persona o empresa (emisor/facturador). |
| `dv` | Dígito de verificación de la persona o empresa (emisor/facturador). |
| `company_name` | Nombre o razón social de la persona o empresa (emisor/facturador). |
| `payment_form[code]` | Código de la forma de pago. |
| `payment_form[name]` | Nombre de la forma de pago. |
| `payment_method[code]` | Código del método de pago. |
| `payment_method[name]` | Nombre del método de pago. |
| `total` | Total de la factura. |
| `has_claim` | Booleano que indica si la factura tiene el evento de reclamo. |
| `is_negotiable_instrument` | Booleano que indica si la factura se encuentra como título valor. |
| `events` | Array que contiene los eventos generados a la factura. |
| `events.*.[number]` | Número del evento. |
| `events.*.[cude]` | CUDE del evento. |
| `events.*.[code]` | Código del evento. |
| `events.*.[name]` | Nombre del evento. |
| `events.*.[effective_date]` | Fecha en la que se emitió el evento. |
| `events.*.[effective_time]` | Hora en la que se emitió el evento. |
| `events.*.[person_identification]` | Número de identificación de la persona del evento. |
| `events.*.[person_names]` | Nombre de la persona del evento. |
| `created_at` | Fecha en la que se cargó el documento a la API de Factus. |

* * *

### Autorización

[Sección titulada «Autorización»](https://developers.factus.com.co/v1/recepcion-de-documentos/cargar-factura#autorizaci%C3%B3n)

* `Authorization: Bearer Token`
Esta solicitud utiliza un _authorization helper_ de la colección [API Factus](https://developers.factus.com.co/v1/autenticacion/introduccion/).

* * *

### Encabezados de la Solicitud (Request Headers)

[Sección titulada «Encabezados de la Solicitud (Request Headers)»](https://developers.factus.com.co/v1/recepcion-de-documentos/cargar-factura#encabezados-de-la-solicitud-request-headers)

* `Accept: application/json`

* * *
