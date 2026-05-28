# Ver Facturas

Este contenido es para V1. Cambia a la [versión más reciente](https://developers.factus.com.co/) para ver la documentación actualizada.

#### **Endpoint**

[Sección titulada «Endpoint»](https://developers.factus.com.co/v1/recepcion-de-documentos/ver-facturas#endpoint)

```
https://api-sandbox.factus.com.co/v1/receptions/bills?filter[id]=&filter[number]=&filter[issue_date]&filter[cufe]&filter[company_nit]&filter[company_name]&filter[completed_events]=
```

* * *

### Descripción

[Sección titulada «Descripción»](https://developers.factus.com.co/v1/recepcion-de-documentos/ver-facturas#descripci%C3%B3n)

Obtiene y filtra las facturas electrónicas.

* * *

| Campo | Descripción |
| --- | --- |
| `ID` | ID del registro. |
| `number` | Número de la factura. |
| `issue_date` | Fecha en la que se emitió la factura. |
| `issue_time` | Hora en la que se emitió la factura. |
| `cufe` | CUFE de la factura. |
| `company_nit` | NIT de la persona o empresa (emisor/facturador). |
| `company_name` | Nombre o razón social de la persona o empresa (emisor/facturador). |
| `payment_form[code]` | Código de la forma de pago. |
| `payment_form[name]` | Nombre de la forma de pago. |
| `claim_concept` | Array que contiene la información del motivo del reclamo, en caso de que se haya generado uno. |
| `claim_concept[code]` | Código del motivo del reclamo. |
| `claim_concept[name]` | Nombre del motivo del reclamo. |
| `payment_due_date` | Fecha de vencimiento de la factura. |
| `is_negotiable_instrument` | Booleano que indica si la factura se encuentra como título valor o no. |
| `has_claim` | Booleano que indica si se ha generado un evento de reclamo a la factura. |
| `total` | Total de la factura. |
| `created_at` | Fecha en la que se cargó el documento a la API de Factus. |

* * *

### Autorización

[Sección titulada «Autorización»](https://developers.factus.com.co/v1/recepcion-de-documentos/ver-facturas#autorizaci%C3%B3n)

* `Authorization: Bearer Token`
Esta solicitud utiliza un _authorization helper_ de la colección [API Factus](https://developers.factus.com.co/v1/autenticacion/introduccion/).

* * *

### Encabezados de la Solicitud (Request Headers)

[Sección titulada «Encabezados de la Solicitud (Request Headers)»](https://developers.factus.com.co/v1/recepcion-de-documentos/ver-facturas#encabezados-de-la-solicitud-request-headers)

* `Accept: application/json`

* * *

### Parámetros de Consulta (Query Params)

[Sección titulada «Parámetros de Consulta (Query Params)»](https://developers.factus.com.co/v1/recepcion-de-documentos/ver-facturas#par%C3%A1metros-de-consulta-query-params)

* `filter[id]`: ID de la factura
* `filter[number]`: Número de la factura
* `filter[issue_date]`: Fecha de emisión de la factura
* `filter[cufe]`: CUFE de la factura
* `filter[company_nit]`: NIT de la empresa o persona que te emitió la factura
* `filter[company_name]`: Nombre de la persona o empresa que te emitió la factura
* `filter[completed_events]`: Usa 1 para listar las facturas que no tienen eventos pendientes por emitir y 0 para mostrar las facturas que tienen eventos pendientes por emitir.
