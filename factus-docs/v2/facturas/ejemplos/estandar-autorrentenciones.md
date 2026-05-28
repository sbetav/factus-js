# Informar autorretenciones

Esta sección describe los compos que podría contener la factura.

**Método:** POST

#### **Endpoint**

* [Sandbox](https://developers.factus.com.co/facturas/ejemplos/estandar-autorrentenciones#tab-panel-98)
* [Producción](https://developers.factus.com.co/facturas/ejemplos/estandar-autorrentenciones#tab-panel-99)

```
https://api-sandbox.factus.com.co/v2/bills/validate
```

### **Encabezados de la Solicitud**

Incluye los siguientes encabezados.

<table><tbody><tr><td><code>Content-Type</code> : <code>application/json</code><br>Indica que los datos se envían en formato JSON.</td></tr><tr><td><code>Authorization Bearer token_de_acceso</code><br>Token de autenticación necesario para acceder al recurso. Ver <a href="https://developers.factus.com.co/autenticacion/auth" target="_blank">Cómo generar token</a></td></tr><tr><td><code>Accept</code> : <code>application/json</code><br>Indica que la respuesta debe estar en formato JSON.</td></tr></tbody></table>

``**Nota:** Reemplaza `token_de_acceso` con el token proporcionado tras autenticarte.``

* * *

* * *

Ver aquí la descripción de los campos.

| Parámetros Factura Estándar |
| --- |
| **`reference_code`** `string`
Código único que sirve para identificar cada factura de manera unívoca en el sistema y garantizar que no haya duplicados. Esto nos ayuda a prevenir que se genere más de una factura con la misma información. |
| **`created_time`** `string` `opcional`
Fecha y hora de creación del documento soporte en formato `HH:mm:ss`. |
| **`document`** `string` `default:01` `opcional`
Código del tipo de documento. [Tipos de documentos disponibles.](https://developers.factus.com.co/tablas-de-referencia/tablas/#c%C3%B3digos-de-tipos-de-documentos-para-la-factura) |
| **`numbering_range_id`** `integer` `opcional`
ID del rango de numeración. Es obligatorio solo si tienes múltiples rangos activos. Si se omite, el sistema utilizará el único rango disponible por defecto. [Rangos de numeración.](https://developers.factus.com.co/rangos-de-numeracion/obtener-rangos) |
| **`operation_type`** `string` `default:10` `opcional`
Código del tipo de operación. Si el tipo de operación no se agrega, por defecto el API agrega el código 10 (estándar). [Tipos de operación disponibles.](https://developers.factus.com.co/tablas-de-referencia/tablas/#c%C3%B3digos-de-tipos-de-operaci%C3%B3n) |
| **`send_email`** `boolean` `default:true` `opcional`
Indica si el sistema debe enviar el correo electrónico al cliente. Útil cuando el envío del correo se gestiona de forma externa o personalizada por el integrador. Por defecto, este campo tiene un valor de true, lo que implica que el correo electrónico será enviado al cliente. Si se establece en false, el correo no será enviado. |
| **`observation`** `string` `opcional`
Agrega una observación a la factura. No debe tener más de 250 caracteres. |
| **`prepayment_details`** `array` `opcional`
Este es un array de objetos para los detalles de anticipos. Se debe enviar un objeto por cada anticipo realizado. |
| **`prepayment_details.*.reference_code`** `string`
Código de referencia del anticipo. |
| **`prepayment_details.*.received_date`** `string`
Fecha en que se recibió el anticipo en formato `YYYY-MM-DD`. |
| **`prepayment_details.*.amount`** `string`
Monto del anticipo. |
| **`prepayment_details.*.note`** `string` `opcional`
Nota adicional sobre el anticipo. No debe exceder los 5000 caracteres. |
| **`payment_details`** `array`
Este es un array de objetos para los medios de pago. Se debe enviar un objeto por cada medio de pago utilizado para pagar la factura. |
| **`payment_details.*.payment_form`** `string`
Código de la forma de pago. [Formas de pago disponibles](https://developers.factus.com.co/tablas-de-referencia/tablas/#c%C3%B3digos-de-formas-de-pago) |
| **`payment_details.*.payment_method_code`** `string`
Código del método de pago. [Métodos de pago disponibles.](https://developers.factus.com.co/tablas-de-referencia/tablas/#c%C3%B3digos-de-m%C3%A9todos-de-pago) |
| **`payment_details.*.reference_code`** `string` `opcional`
Código de referencia del pago. |
| **`payment_details.*.amount`** `string`
Monto pagado por ese medio y método de pago. |
| **`payment_details.*.due_date`** `string` `opcional`
Fecha de vencimiento de la factura en formato `YYYY-MM-DD`. Requerido solo cuando la forma de pago (`payment_form`) contiene el valor de 2 (pago a crédito). |
| **`cash_rounding_amount`** `string` `opcional`
Ajuste opcional que reconcilia la diferencia entre la suma de los montos en `⁠payment_details` y el `total` de la factura, causada por las limitaciones de denominación de la moneda local. Acepta valores negativos (redondeo hacia abajo) o positivos (redondeo hacia arriba). El valor máximo permitido es ±500.00. |
| **`establishment`** `object` `opcional`
Este es un objeto que contendrá la información sobre el establecimiento. Úsalo cuando manejes más de un establecimiento y necesites que los datos correspondientes se reflejen en la factura. Si envías el campo `establishment` los campos internos son obligatorios. |
| **`establishment.name`** `string`
Nombre del establecimiento. |
| **`establishment.address`** `string`
Dirección del establecimiento. |
| **`establishment.phone_number`** `string`
Número telefónico del establecimiento. |
| **`establishment.email`** `string`
Correo electrónico del establecimiento. |
| **`establishment.municipality_code`** `string`
Código que corresponda al municipio donde se encuentra el establecimiento. [Municipios disponibles.](https://developers.factus.com.co/tablas-de-referencia/municipios) |
| **`billing_period`** `object` `opcional`
Este es un objeto que contendrá la información del periodo de facturación. Para utilizar en los servicios públicos, contratos de arrendamiento, matrículas en educación, etc. Si envías el campo `billing_period` los campos internos son obligatorios. |
| **`billing_period.start_date`** `string`
Fecha de inicio del periodo de facturación en formato `YYYY-MM-DD`. |
| **`billing_period.start_time`** `string` `opcional`
Hora de inicio del periodo de facturación en formato `HH:mm:ss`. |
| **`billing_period.end_date`** `string`
Fecha de fin del periodo de facturación en formato `YYYY-MM-DD`. |
| **`billing_period.end_time`** `string` `opcional`
Hora de fin del periodo de facturación en formato `HH:mm:ss`. |
| **`order_reference`** `object` `opcional`
Este es un objeto que contendrá la información que describe una orden de pedido. Si envías el campo `order_reference` los campos internos son obligatorios. |
| **`order_reference.reference_code`** `string`
Número del documento de la orden. |
| **`order_reference.issue_date`** `string` `opcional`
Fecha de emisión de la orden. |
| **`related_documents.*`** `array` `opcional`
Este es un array de objetos (documentos), debe haber un objeto por cada documento. Obligatorio cuando el campo `document` contenga el valor 03. Si envías el campo `related_documents` los campos internos son obligatorios. |
| **`related_documents.*.code`** `string`
Identificador del tipo de documento de referencia (corresponde a una codificación propia de la empresa). |
| **`related_documents.*.issue_date`** `string`
Fecha de emisión del documento referenciado en formato `YYYY-MM-DD`. |
| **`related_documents.*.number`** `string`
Prefijo y número del documento referenciado. |
| **`customer`** `object`
Este es un objeto que contendrá la información del cliente de la factura. |
| **`customer.identification_document_code`** `string`
Código que corresponda al tipo de identificación. [Tipos de documentos disponibles.](https://developers.factus.com.co/tablas-de-referencia/tablas/#c%C3%B3digos-de-tipos-de-documentos-de-identidad) |
| **`customer.identification`** `string`
Número de identificación del cliente. Si el numero de identificación corresponde a un NIT no se debe enviar el dígito de verificación ni el guion que lo separa, el dígito de verificación tiene un campo exclusivo para él, aquí se debe enviar únicamente el numero de identificación. |
| **`customer.dv`** `string` `opcional`
Dígito de verificación correspondiente al NIT del cliente.
El dígito de verificación se envía únicamente para clientes que se identifican con NIT.
Si el cliente se identifica con NIT y no se envía el dígito de verificación, el API lo calculará automáticamente. |
| **`customer.legal_organization_code`** `string`
Código que corresponda al tipo de organización. [Tipos de organizaciones disponibles.](https://developers.factus.com.co/tablas-de-referencia/tablas/#c%C3%B3digo-de-tipos-de-organizaciones) |
| **`customer.tribute_code`** `string` `default:ZZ` `opcional`
Código del tributo. [Tipos de tributos disponibles.](https://developers.factus.com.co/tablas-de-referencia/tablas/#c%C3%B3digos-de-tributos-clientes) |
| **`customer.company`** `string` `opcional`
Razón social. Es obligatorio cuando el campo `customer.legal_organization_code` es 1 (persona jurídica). |
| **`customer.trade_name`** `string` `opcional`
Nombre comercial. |
| **`customer.names`** `string` `opcional`
Nombre del cliente. Es obligatorio cuando el campo `customer.legal_organization_code` es 2 (persona natural). |
| **`customer.address`** `string` `opcional`
Dirección del cliente. |
| **`customer.email`** `string` `opcional`
Correo electrónico del cliente. |
| **`customer.phone`** `string` `opcional`
Número de teléfono del cliente. |
| **`customer.municipality_code`** `string` `opcional`
Código que corresponda al municipio donde vive el cliente. Se debe enviar el código del municipio únicamente si el municipio es de Colombia; si es extranjero, el valor del campo no aplica. [Municipios disponibles.](https://developers.factus.com.co/tablas-de-referencia/municipios) |
| **`items`** `array`
Este es un array de objetos (items) que corresponde a los productos o servicios de la factura, se debe enviar un objeto por cada producto o servicio. |
| **`items.*.note`** `string` `opcional`
Añade información adicional del producto o servicio. |
| **`items.*.code_reference`** `string`
Código de referencia del producto o servicio. |
| **`items.*.name`** `string`
Nombre del producto o servicio. |
| **`items.*.quantity`** `string`
Cantidad del producto o servicio (máximo dos decimales). |
| **`items.*.discount_rate`** `string`
Porcentaje del descuento del producto o servicio (máximo dos decimales). |
| **`items.*.price`** `string`
Precio por unidad del producto o servicio sin impuestos incluidos ni descuentos, valor neto (máximo dos decimales). |
| **`items.*.unit_measure_code`** `string`
Código que corresponda a la unidad de medida del item. [Unidades de medida disponibles](https://developers.factus.com.co/tablas-de-referencia/unit-measures/) |
| **`items.*.standard_code`** `string`
Código que corresponde al estándar que se adopta para los productos o servicios. [Códigos de estándar disponibles.](https://developers.factus.com.co/tablas-de-referencia/tablas/#c%C3%B3digos-de-est%C3%A1ndar-de-identificaci%C3%B3n-del-producto) |
| **`items.*.taxes`** `array`
Este es un array de objetos para los impuestos. |
| **`items.*.taxes.*.code`** `string`
Código del impuesto aplicado al producto o servicio. [Códigos de impuestos disponibles.](https://developers.factus.com.co/tablas-de-referencia/tablas/#c%C3%B3digos-de-impuestos) |
| **`items.*.taxes.*.rate`** `string`
Porcentaje del impuesto aplicado al producto o servicio (máximo dos decimales). |
| **`items.*.taxes.*.is_excluded`** `boolean` `opcional`
Indica si el ítem está excluido de impuestos. Valor: `true` o `false`. |
| **`items.*.withholding_taxes`** `array` `opcional`
Este es un array de objetos (autorretenciones) para informar las retenciones que se aplican al producto o servicio. No son retenciones que otra persona o empresa te hace a ti, sino retenciones que tú mismo te aplicas como contribuyente. Por cada retención que te apliques a ti mismo, debes enviar un objeto. |
| **`items.*.withholding_taxes.*.code`** `string`
Código de la retención aplicada al producto o servicio. [Códigos retenciones disponibles.](https://developers.factus.com.co/tablas-de-referencia/tablas/#c%C3%B3digos-de-retenciones) |
| **`items.*.withholding_taxes.*.rate`** `string`
Porcentaje de la retención aplicada al producto o servicio (máximo dos decimales). |
| **`allowance_charges`** `array` `opcional`
Este es un array de objetos que corresponden a los descuentos o recargos que se aplican a la factura; se debe enviar un objeto por cada descuento o recargo. |
| **`allowance_charges.*.concept_type`** `string`
Código del tipo de descuento o recargo. Para saber el código que corresponde, consulte la tabla. [Códigos de conceptos disponibles.](https://developers.factus.com.co/tablas-de-referencia/tablas/#c%C3%B3digos-de-los-recargos-y-descuentos) |
| **`allowance_charges.*.is_surcharge`** `boolean`
Indica si es un descuento o un recargo. El valor `true` corresponde a un recargo y `false` a un descuento. |
| **`allowance_charges.*.reason`** `string`
Razón por la cual se está haciendo el descuento o recargo. |
| **`allowance_charges.*.base_amount`** `string`
Base sobre la cual se calcula el descuento o recargo (máximo dos decimales). |
| **`allowance_charges.*.amount`** `string`
Valor del descuento o recargo aplicado (máximo dos decimales). |

* * *

### Ejemplo de Solicitud

[Sección titulada «Ejemplo de Solicitud»](https://developers.factus.com.co/facturas/ejemplos/estandar-autorrentenciones#ejemplo-de-solicitud)

* [Factura de venta](https://developers.factus.com.co/facturas/ejemplos/estandar-autorrentenciones#tab-panel-100)

```
{ "reference_code": "FACT-2026-0131", "document": "01", "numbering_range_id": 389, "operation_type": "10", "observation": "Observación de factura con autorretenciones", "payment_details": [ { "payment_form": "1", "payment_method_code": "47", "reference_code": "pago-001", "amount": "1190000" } ], "cash_rounding_amount": "0.00", "customer": { "identification_document_code": "31", "identification": "123456789", "company": "Alan company name", "trade_name": "Alan trade name", "address": "calle 1 # 1-1", "email": "[email protected]", "phone": "1234567890", "legal_organization_code": "1", "tribute_code": "ZZ", "municipality_code": "68679" }, "items": [ { "code_reference": "PROD-000A", "name": "Producto A", "quantity": "1.00", "discount_rate": "0.00", "price": "1000000.00", "unit_measure_code": "94", "standard_code": "999", "taxes": [ { "code": "01", "rate": "19.00" } ], "withholding_taxes": [ { "code": "05", "rate": "2.00" }, { "code": "06", "rate": "4.00" } ] } ]}
```

* * *

* * *
