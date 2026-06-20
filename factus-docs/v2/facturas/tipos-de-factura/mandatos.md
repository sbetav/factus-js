# 11 - Mandatos

Esta sección describe los compos que podría contener la factura.

**Método:** POST

#### **Endpoint**

* [Sandbox](https://developers.factus.com.co/facturas/tipos-de-factura/mandatos#tab-panel-116)
* [Producción](https://developers.factus.com.co/facturas/tipos-de-factura/mandatos#tab-panel-117)

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

| Parámetros Factura Mandatos |
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
| **`currency`** `object` `opcional`
Objeto utilizado para mostrar los totales de la factura en una moneda extranjera dentro de su representación gráfica. Si se envía el campo `currency`, los campos internos son obligatorios. |
| **`currency.code`** `string`
Código internacional de la moneda extranjera que se desea mostrar en la factura. Debe ser una moneda distinta a la moneda local de emisión. [Códigos de monedas disponibles.](https://developers.factus.com.co/tablas-de-referencia/currency) |
| **`currency.exchange_rate`** `string`
Tasa de cambio utilizada para convertir los montos de la moneda local a la moneda extranjera especificada. |
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
| **`items.*.scheme_id`** `string`
Este campo es requerido si el campo operation\_type contiene el valor de 11 (mandatos) o 12 (transporte) o SS-Recaudo (Salud). Agregue el valor de 0 cuando sea ingreso propio y 1 para ingresos recibidos para terceros. |
| **`items.*.note`** `string` `opcional`
Añade información adicional del producto o servicio. |
| **`items.*.code_reference`** `string`
Código de referencia del producto o servicio. |
| **`items.*.name`** `string`
Nombre del producto o servicio. |
| **`items.*.quantity`** `string`
Cantidad del producto o servicio (máximo dos decimales). |
| **`items.*.discount_rate`** `string` `opcional`
Porcentaje del descuento del producto o servicio (máximo dos decimales).
Para aplicar descuentos use alguno de los dos campos, en porcentaje `discount_rate` o monto `discount_amount`, no es necesario enviar ambos campos para informar un descuento. |
| **`items.*.discount_amount`** `string` `opcional`
Monto del descuento del producto o servicio (máximo dos decimales).
Para aplicar descuentos use alguno de los dos campos, en porcentaje `discount_rate` o monto `discount_amount`, no es necesario enviar ambos campos para informar un descuento. |
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
| **`items.*.mandate`** `object` `opcional`
Este es un objeto que contendrá la información del mandante. Este campo es requerido si `items.*.scheme_id` = 1 (ingresos recibidos para terceros) y `operation_type` = 11 (mandatos) o `operation_type` = SS-Recaudo (Salud). |
| **`items.*.mandate.identification_document_code`** `string`
Código que corresponda al tipo de identificación del mandante. [Tipos de documentos disponibles](https://developers.factus.com.co/tablas-de-referencia/tablas/#c%C3%B3digos-de-tipos-de-documentos-de-identidad) |
| **`items.*.mandate.identification`** `string`
Número de identificación del mandante. |
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

#### Ejemplo de Solicitud

[Sección titulada «Ejemplo de Solicitud»](https://developers.factus.com.co/facturas/tipos-de-factura/mandatos#ejemplo-de-solicitud)

* [Factura de venta](https://developers.factus.com.co/facturas/tipos-de-factura/mandatos#tab-panel-118)

```
{ "reference_code": "FACT-2026-1233", "document": "01", "numbering_range_id": 389, "operation_type": "11", "payment_details": [ { "payment_form": "1", "payment_method_code": "10", "reference_code": "pago-001", "amount": "12000" }, { "payment_form": "1", "payment_method_code": "42", "reference_code": "pago-002", "amount": "5850" } ], "cash_rounding_amount": "0.00", "observation": "Observación de prueba", "customer": { "identification_document_code": "31", "identification": "123456789", "company": "Alan company name", "trade_name": "Alan trade name", "address": "calle 1 # 1-1", "email": "[email protected]", "phone": "1234567890", "legal_organization_code": "1", "tribute_code": "ZZ", "municipality_code": "68679" }, "items": [ { "scheme_id": "1", "code_reference": "PROD-000A", "name": "Producto A", "quantity": "1.00", "discount_rate": "0.00", "price": "10000.00", "unit_measure_code": "94", "standard_code": "999", "taxes": [ { "code": "01", "rate": "19.00" } ], "mandate": { "identification_document_code": "13", "identification": "23434" } }, { "scheme_id": "0", "code_reference": "PROD-000B", "name": "Producto B", "quantity": "1.00", "discount_rate": "0.00", "price": "5000.00", "unit_measure_code": "94", "standard_code": "999", "taxes": [ { "code": "01", "rate": "19.00" } ] } ]}
```

* * *

### Respuesta

[Sección titulada «Respuesta»](https://developers.factus.com.co/facturas/tipos-de-factura/mandatos#respuesta)

Descripción respuesta Factura Mandatos Campos Base

<table class="astro-ibjkzya5"><tbody class="astro-ibjkzya5"><tr><td><strong><code>status</code> </strong><code>string</code><br>Estado HTTP de la respuesta. Ejemplo: <code>Created</code>.</td></tr><tr><td><strong><code>message</code> </strong><code>string</code><br>Mensaje descriptivo del resultado de la operación. Ejemplo: <em>Documento con el código de referencia xxx registrado y validado con éxito</em>.</td></tr><tr><td><strong><code>data</code> </strong><code>object</code><br>Objeto principal que contiene toda la información del documento generado.</td></tr></tbody></table>

data Campos generales

<table class="astro-ibjkzya5"><tbody class="astro-ibjkzya5"><tr><td><strong><code>data.reference_code</code> </strong><code>string</code><br>Código de referencia único asignado a la factura. Corresponde al <code>reference_code</code> enviado en la solicitud.</td></tr><tr><td><strong><code>data.number</code> </strong><code>string</code><br>Número consecutivo de la factura asignado por el sistema según el rango de numeración activo.</td></tr><tr><td><strong><code>data.order_reference</code> </strong><code>string | null</code><br>Referencia a la orden de compra asociada. Retorna <code>null</code> si no aplica.</td></tr><tr><td><strong><code>data.send_email</code> </strong><code>boolean</code><br>Indica si el correo electrónico fue enviado al cliente al momento de la validación.</td></tr><tr><td><strong><code>data.has_claim</code> </strong><code>boolean</code><br>Indica si la factura tiene alguna reclamación registrada.</td></tr><tr><td><strong><code>data.is_negotiable_instrument</code> </strong><code>boolean</code><br>Indica si la factura es un título valor (instrumento negociable).</td></tr><tr><td><strong><code>data.is_validated</code> </strong><code>boolean</code><br>Indica si la factura fue validada exitosamente ante la DIAN. <code>true</code>: validada, <code>false</code>: pendiente de validación.</td></tr><tr><td><strong><code>data.validated_at</code> </strong><code>string | null</code><br>Fecha y hora en que la DIAN validó el documento. Formato: <code>DD-MM-YYYY HH:mm:ss AM/PM</code>. Retorna <code>null</code> si aún no está validada.</td></tr><tr><td><strong><code>data.errors</code> </strong><code>object</code><br>Objeto con las notificaciones o advertencias retornadas por la DIAN durante la validación. Las claves son los códigos de regla (ej. <code>FAJ44b</code>) y los valores son el mensaje descriptivo. Este campo puede estar vacío si no hay notificaciones.</td></tr><tr><td><strong><code>data.observation</code> </strong><code>string | null</code><br>Observación adicional incluida en la factura. Retorna <code>null</code> si no se especificó.</td></tr><tr><td><strong><code>data.created_at</code> </strong><code>string</code><br>Fecha y hora de creación del documento en el sistema. Formato: <code>DD-MM-YYYY HH:mm:ss AM/PM</code>.</td></tr><tr><td><strong><code>data.cufe</code> </strong><code>string</code><br>Código Único de Factura Electrónica (CUFE) generado por la DIAN. Es el identificador oficial y único del documento ante la DIAN.</td></tr></tbody></table>

data.document\_type

<table class="astro-ibjkzya5"><tbody class="astro-ibjkzya5"><tr><td><strong><code>data.document_type</code> </strong><code>object</code><br>Objeto con la información del tipo de documento electrónico generado.</td></tr><tr><td><strong><code>data.document_type.code</code> </strong><code>string</code><br>Código del tipo de documento. Ejemplo: <code>01</code> para Factura electrónica de Venta.</td></tr><tr><td><strong><code>data.document_type.name</code> </strong><code>string</code><br>Nombre descriptivo del tipo de documento. Ejemplo: <em>Factura electrónica de Venta</em>.</td></tr></tbody></table>

data.operation\_type

<table class="astro-ibjkzya5"><tbody class="astro-ibjkzya5"><tr><td><strong><code>data.operation_type</code> </strong><code>object</code><br>Objeto con el tipo de operación utilizado en la factura.</td></tr><tr><td><strong><code>data.operation_type.code</code> </strong><code>string</code><br>Código del tipo de operación. Para facturas de mandato el valor es <code>11</code>.</td></tr><tr><td><strong><code>data.operation_type.name</code> </strong><code>string</code><br>Nombre descriptivo del tipo de operación. Para facturas de mandato: <em>Mandato</em>.</td></tr></tbody></table>

data.billing\_period

<table class="astro-ibjkzya5"><tbody class="astro-ibjkzya5"><tr><td><strong><code>data.billing_period</code> </strong><code>object | null</code><br>Objeto con el período de facturación. Retorna <code>null</code> si no se especificó.</td></tr><tr><td><strong><code>data.billing_period.start_date</code> </strong><code>string</code><br>Fecha de inicio del período de facturación en formato <code>DD-MM-YYYY</code>.</td></tr><tr><td><strong><code>data.billing_period.start_time</code> </strong><code>string</code><br>Hora de inicio del período en formato <code>HH:mm:ss</code>.</td></tr><tr><td><strong><code>data.billing_period.end_date</code> </strong><code>string</code><br>Fecha de fin del período de facturación en formato <code>DD-MM-YYYY</code>.</td></tr><tr><td><strong><code>data.billing_period.end_time</code> </strong><code>string</code><br>Hora de fin del período en formato <code>HH:mm:ss</code>.</td></tr></tbody></table>

data.payment\_details

<table class="astro-ibjkzya5"><tbody class="astro-ibjkzya5"><tr><td><strong><code>data.payment_details</code> </strong><code>array</code><br>Array de objetos con los detalles de cada medio de pago utilizado en la factura.</td></tr><tr><td><strong><code>data.payment_details.*.payment_form</code> </strong><code>object</code><br>Objeto con la forma de pago (contado o crédito).</td></tr><tr><td><strong><code>data.payment_details.*.payment_form.code</code> </strong><code>string</code><br>Código de la forma de pago. Ejemplo: <code>1</code> (Pago de contado).</td></tr><tr><td><strong><code>data.payment_details.*.payment_form.name</code> </strong><code>string</code><br>Nombre descriptivo de la forma de pago. Ejemplo: <em>Pago de contado</em>.</td></tr><tr><td><strong><code>data.payment_details.*.payment_method</code> </strong><code>object</code><br>Objeto con el método de pago utilizado.</td></tr><tr><td><strong><code>data.payment_details.*.payment_method.code</code> </strong><code>string</code><br>Código del método de pago. Ejemplo: <code>10</code> (Efectivo), <code>42</code> (Consignación).</td></tr><tr><td><strong><code>data.payment_details.*.payment_method.name</code> </strong><code>string</code><br>Nombre descriptivo del método de pago. Ejemplo: <em>Efectivo</em>.</td></tr><tr><td><strong><code>data.payment_details.*.reference_code</code> </strong><code>string | null</code><br>Código de referencia del pago. Retorna <code>null</code> si no aplica.</td></tr><tr><td><strong><code>data.payment_details.*.amount</code> </strong><code>string</code><br>Monto correspondiente a este medio de pago.</td></tr><tr><td><strong><code>data.payment_details.*.due_date</code> </strong><code>string | null</code><br>Fecha de vencimiento del pago en formato <code>DD-MM-YYYY</code>. Retorna <code>null</code> para pagos de contado.</td></tr></tbody></table>

data.numbering\_range

<table class="astro-ibjkzya5"><tbody class="astro-ibjkzya5"><tr><td><strong><code>data.numbering_range</code> </strong><code>object</code><br>Objeto con la información del rango de numeración utilizado para generar el consecutivo de la factura.</td></tr><tr><td><strong><code>data.numbering_range.prefix</code> </strong><code>string</code><br>Prefijo del rango de numeración. Ejemplo: <code>SETP</code>.</td></tr><tr><td><strong><code>data.numbering_range.from</code> </strong><code>integer</code><br>Número inicial del rango de numeración autorizado.</td></tr><tr><td><strong><code>data.numbering_range.to</code> </strong><code>integer</code><br>Número final del rango de numeración autorizado.</td></tr><tr><td><strong><code>data.numbering_range.resolution_number</code> </strong><code>string</code><br>Número de resolución emitida por la DIAN para este rango.</td></tr><tr><td><strong><code>data.numbering_range.start_date</code> </strong><code>string</code><br>Fecha de inicio de vigencia del rango en formato <code>DD-MM-YYYY</code>.</td></tr><tr><td><strong><code>data.numbering_range.end_date</code> </strong><code>string</code><br>Fecha de fin de vigencia del rango en formato <code>DD-MM-YYYY</code>.</td></tr><tr><td><strong><code>data.numbering_range.months</code> </strong><code>integer</code><br>Duración total del rango de numeración en meses.</td></tr></tbody></table>

data.health

<table class="astro-ibjkzya5"><tbody class="astro-ibjkzya5"><tr><td><strong><code>data.health</code> </strong><code>null</code><br>Siempre retorna <code>null</code> en facturas de mandato. Este campo aplica únicamente para facturas del sector salud (tipo de operación <code>SS-CUFE</code>).</td></tr></tbody></table>

data.beneficiary

<table class="astro-ibjkzya5"><tbody class="astro-ibjkzya5"><tr><td><strong><code>data.beneficiary</code> </strong><code>object | null</code><br>Objeto con los datos del beneficiario. Retorna <code>null</code> si no aplica.</td></tr></tbody></table>

data.company

<table class="astro-ibjkzya5"><tbody class="astro-ibjkzya5"><tr><td><strong><code>data.company</code> </strong><code>object</code><br>Objeto con la información de la empresa emisora de la factura.</td></tr><tr><td><strong><code>data.company.url_logo</code> </strong><code>string</code><br>URL de la imagen del logotipo de la empresa.</td></tr><tr><td><strong><code>data.company.nit</code> </strong><code>string</code><br>NIT de la empresa emisora (sin dígito de verificación).</td></tr><tr><td><strong><code>data.company.dv</code> </strong><code>string</code><br>Dígito de verificación del NIT de la empresa.</td></tr><tr><td><strong><code>data.company.economic_activity</code> </strong><code>string</code><br>Código CIIU de la actividad económica principal de la empresa.</td></tr><tr><td><strong><code>data.company.establishment</code> </strong><code>object</code><br>Objeto con los datos del establecimiento comercial de la empresa.</td></tr><tr><td><strong><code>data.company.establishment.name</code> </strong><code>string</code><br>Nombre o razón social del establecimiento.</td></tr><tr><td><strong><code>data.company.establishment.address</code> </strong><code>string</code><br>Dirección física del establecimiento.</td></tr><tr><td><strong><code>data.company.establishment.phone_number</code> </strong><code>string</code><br>Número de teléfono del establecimiento.</td></tr><tr><td><strong><code>data.company.establishment.email</code> </strong><code>string</code><br>Correo electrónico del establecimiento.</td></tr><tr><td><strong><code>data.company.establishment.municipality</code> </strong><code>object</code><br>Objeto con el municipio donde está ubicado el establecimiento.</td></tr><tr><td><strong><code>data.company.establishment.municipality.code</code> </strong><code>string</code><br>Código DIVIPOLA del municipio.</td></tr><tr><td><strong><code>data.company.establishment.municipality.name</code> </strong><code>string</code><br>Nombre del municipio.</td></tr><tr><td><strong><code>data.company.establishment.municipality.department</code> </strong><code>object</code><br>Objeto con el departamento al que pertenece el municipio.</td></tr><tr><td><strong><code>data.company.establishment.municipality.department.code</code> </strong><code>string</code><br>Código DIVIPOLA del departamento.</td></tr><tr><td><strong><code>data.company.establishment.municipality.department.name</code> </strong><code>string</code><br>Nombre del departamento.</td></tr></tbody></table>

data.customer

<table class="astro-ibjkzya5"><tbody class="astro-ibjkzya5"><tr><td><strong><code>data.customer</code> </strong><code>object</code><br>Objeto con la información completa del cliente receptor de la factura.</td></tr><tr><td><strong><code>data.customer.identification_document</code> </strong><code>object</code><br>Objeto con el tipo de documento de identidad del cliente.</td></tr><tr><td><strong><code>data.customer.identification_document.code</code> </strong><code>string</code><br>Código del tipo de documento. Ejemplo: <code>31</code> (NIT).</td></tr><tr><td><strong><code>data.customer.identification_document.name</code> </strong><code>string</code><br>Nombre descriptivo del tipo de documento. Ejemplo: <em>NIT</em>.</td></tr><tr><td><strong><code>data.customer.identification</code> </strong><code>string</code><br>Número del documento de identidad del cliente.</td></tr><tr><td><strong><code>data.customer.dv</code> </strong><code>string | null</code><br>Dígito de verificación del documento. Retorna <code>null</code> para personas naturales con cédula.</td></tr><tr><td><strong><code>data.customer.graphic_representation_name</code> </strong><code>string</code><br>Nombre que aparece en la representación gráfica (PDF) de la factura.</td></tr><tr><td><strong><code>data.customer.trade_name</code> </strong><code>string | null</code><br>Nombre comercial del cliente. Retorna <code>null</code> si no aplica.</td></tr><tr><td><strong><code>data.customer.company</code> </strong><code>string | null</code><br>Razón social si el cliente es una empresa. Retorna <code>null</code> para personas naturales.</td></tr><tr><td><strong><code>data.customer.names</code> </strong><code>string | null</code><br>Nombre completo del cliente persona natural. Retorna <code>null</code> para personas jurídicas.</td></tr><tr><td><strong><code>data.customer.address</code> </strong><code>string</code><br>Dirección del cliente.</td></tr><tr><td><strong><code>data.customer.email</code> </strong><code>string</code><br>Correo electrónico del cliente al que se envía la factura.</td></tr><tr><td><strong><code>data.customer.phone</code> </strong><code>string</code><br>Número de teléfono del cliente.</td></tr><tr><td><strong><code>data.customer.legal_organization</code> </strong><code>object</code><br>Objeto con el tipo de organización legal del cliente.</td></tr><tr><td><strong><code>data.customer.legal_organization.code</code> </strong><code>string</code><br>Código de la organización legal. Ejemplo: <code>1</code> (Persona Jurídica).</td></tr><tr><td><strong><code>data.customer.legal_organization.name</code> </strong><code>string</code><br>Nombre de la organización legal. Ejemplo: <em>Persona Jurídica</em>.</td></tr><tr><td><strong><code>data.customer.tribute</code> </strong><code>object</code><br>Objeto con el tipo de tributo o responsabilidad fiscal del cliente.</td></tr><tr><td><strong><code>data.customer.tribute.code</code> </strong><code>string</code><br>Código del tributo. Ejemplo: <code>ZZ</code> (No aplica).</td></tr><tr><td><strong><code>data.customer.tribute.name</code> </strong><code>string</code><br>Nombre del tributo. Ejemplo: <em>No aplica</em>.</td></tr><tr><td><strong><code>data.customer.municipality</code> </strong><code>object</code><br>Objeto con el municipio del cliente.</td></tr><tr><td><strong><code>data.customer.municipality.code</code> </strong><code>string</code><br>Código DIVIPOLA del municipio del cliente.</td></tr><tr><td><strong><code>data.customer.municipality.name</code> </strong><code>string</code><br>Nombre del municipio del cliente.</td></tr><tr><td><strong><code>data.customer.municipality.department</code> </strong><code>object</code><br>Objeto con el departamento del municipio del cliente.</td></tr><tr><td><strong><code>data.customer.municipality.department.code</code> </strong><code>string</code><br>Código DIVIPOLA del departamento.</td></tr><tr><td><strong><code>data.customer.municipality.department.name</code> </strong><code>string</code><br>Nombre del departamento.</td></tr></tbody></table>

data.items

<table class="astro-ibjkzya5"><tbody class="astro-ibjkzya5"><tr><td><strong><code>data.items</code> </strong><code>array</code><br>Array de objetos con el detalle de cada producto o servicio incluido en la factura de mandato.</td></tr><tr><td><strong><code>data.items.*.scheme_id</code> </strong><code>object</code><br>Objeto que identifica el esquema de ingreso del ítem. Determina si el ingreso pertenece a un tercero (mandante) o es propio del facturador.</td></tr><tr><td><strong><code>data.items.*.scheme_id.code</code> </strong><code>string</code><br>Código del esquema de ingreso. Ejemplo: <code>0</code> (Ingreso propio), <code>1</code> (Ingresos recibidos para terceros).</td></tr><tr><td><strong><code>data.items.*.scheme_id.name</code> </strong><code>string</code><br>Nombre del esquema de ingreso. Ejemplo: <em>Ingresos recibidos para terceros</em>.</td></tr><tr><td><strong><code>data.items.*.collection_concept</code> </strong><code>string | null</code><br>Concepto de recaudo asociado al ítem. Retorna <code>null</code> si no aplica.</td></tr><tr><td><strong><code>data.items.*.note</code> </strong><code>string</code><br>Nota o descripción adicional del ítem.</td></tr><tr><td><strong><code>data.items.*.mandate</code> </strong><code>object | null</code><br>Objeto con la información del mandante (tercero) al que corresponde el ingreso del ítem. Solo presente cuando <code>scheme_id.code</code> es <code>1</code> (Ingresos recibidos para terceros). Retorna <code>null</code> para ítems de ingreso propio.</td></tr><tr><td><strong><code>data.items.*.mandate.identification_document</code> </strong><code>object</code><br>Objeto con el tipo de documento de identidad del mandante.</td></tr><tr><td><strong><code>data.items.*.mandate.identification_document.code</code> </strong><code>string</code><br>Código del tipo de documento del mandante. Ejemplo: <code>13</code> (Cédula ciudadanía).</td></tr><tr><td><strong><code>data.items.*.mandate.identification_document.name</code> </strong><code>string</code><br>Nombre descriptivo del tipo de documento del mandante. Ejemplo: <em>Cédula ciudadanía</em>.</td></tr><tr><td><strong><code>data.items.*.mandate.document</code> </strong><code>string</code><br>Número del documento de identidad del mandante.</td></tr><tr><td><strong><code>data.items.*.mandate.dv</code> </strong><code>string | null</code><br>Dígito de verificación del documento del mandante. Retorna <code>null</code> para personas naturales con cédula.</td></tr><tr><td><strong><code>data.items.*.additional_properties</code> </strong><code>array</code><br>Array de propiedades adicionales del ítem. Vacío si no se especificaron propiedades adicionales.</td></tr><tr><td><strong><code>data.items.*.code_reference</code> </strong><code>string</code><br>Código interno de referencia del producto o servicio.</td></tr><tr><td><strong><code>data.items.*.name</code> </strong><code>string</code><br>Nombre o descripción del producto o servicio.</td></tr><tr><td><strong><code>data.items.*.quantity</code> </strong><code>string</code><br>Cantidad del producto o servicio facturado.</td></tr><tr><td><strong><code>data.items.*.unit_measure</code> </strong><code>object</code><br>Objeto con la unidad de medida del producto.</td></tr><tr><td><strong><code>data.items.*.unit_measure.code</code> </strong><code>string</code><br>Código de la unidad de medida. Ejemplo: <code>94</code> (unidad).</td></tr><tr><td><strong><code>data.items.*.unit_measure.name</code> </strong><code>string</code><br>Nombre de la unidad de medida. Ejemplo: <em>unidad</em>.</td></tr><tr><td><strong><code>data.items.*.standard_code</code> </strong><code>object</code><br>Objeto con el estándar de codificación del producto.</td></tr><tr><td><strong><code>data.items.*.standard_code.code</code> </strong><code>string</code><br>Código del estándar. Ejemplo: <code>999</code> (Estándar de adopción del contribuyente).</td></tr><tr><td><strong><code>data.items.*.standard_code.name</code> </strong><code>string</code><br>Nombre del estándar de codificación.</td></tr><tr><td><strong><code>data.items.*.discount_rate</code> </strong><code>string</code><br>Porcentaje de descuento aplicado al ítem.</td></tr><tr><td><strong><code>data.items.*.discount</code> </strong><code>string</code><br>Valor absoluto del descuento aplicado al ítem.</td></tr><tr><td><strong><code>data.items.*.gross_value</code> </strong><code>string</code><br>Valor bruto del ítem antes de impuestos.</td></tr><tr><td><strong><code>data.items.*.price</code> </strong><code>string</code><br>Precio unitario del producto o servicio.</td></tr><tr><td><strong><code>data.items.*.total</code> </strong><code>string</code><br>Valor total del ítem (precio × cantidad - descuento).</td></tr><tr><td><strong><code>data.items.*.taxes</code> </strong><code>array</code><br>Array de objetos con los impuestos (IVA, INC, etc.) aplicados al ítem.</td></tr><tr><td><strong><code>data.items.*.taxes.*.tribute</code> </strong><code>object</code><br>Objeto con el tipo de tributo del impuesto.</td></tr><tr><td><strong><code>data.items.*.taxes.*.tribute.code</code> </strong><code>string</code><br>Código del tributo. Ejemplo: <code>01</code> (IVA), <code>04</code> (INC).</td></tr><tr><td><strong><code>data.items.*.taxes.*.tribute.name</code> </strong><code>string</code><br>Nombre del tributo. Ejemplo: <em>IVA</em>.</td></tr><tr><td><strong><code>data.items.*.taxes.*.is_excluded</code> </strong><code>boolean</code><br>Indica si el ítem está excluido de este impuesto. <code>true</code>: excluido, <code>false</code>: no excluido.</td></tr><tr><td><strong><code>data.items.*.taxes.*.rates</code> </strong><code>array</code><br>Array de objetos con las tarifas del impuesto aplicadas al ítem.</td></tr><tr><td><strong><code>data.items.*.taxes.*.rates.*.taxable_amount</code> </strong><code>string</code><br>Base gravable sobre la cual se calcula el impuesto.</td></tr><tr><td><strong><code>data.items.*.taxes.*.rates.*.tax_amount</code> </strong><code>string</code><br>Valor calculado del impuesto.</td></tr><tr><td><strong><code>data.items.*.taxes.*.rates.*.rate</code> </strong><code>string</code><br>Porcentaje de la tarifa del impuesto.</td></tr><tr><td><strong><code>data.items.*.withholding_taxes</code> </strong><code>array</code><br>Array de retenciones aplicadas al ítem. Vacío si no aplican retenciones.</td></tr></tbody></table>

data.prepayment\_details

<table class="astro-ibjkzya5"><tbody class="astro-ibjkzya5"><tr><td><strong><code>data.prepayment_details</code> </strong><code>array</code><br>Array de objetos con los anticipos asociados a la factura. Vacío si no hay anticipos.</td></tr><tr><td><strong><code>data.prepayment_details.*.reference_code</code> </strong><code>string</code><br>Código de referencia del anticipo.</td></tr><tr><td><strong><code>data.prepayment_details.*.received_date</code> </strong><code>string</code><br>Fecha en que se recibió el anticipo en formato <code>YYYY-MM-DD</code>.</td></tr><tr><td><strong><code>data.prepayment_details.*.amount</code> </strong><code>string</code><br>Monto del anticipo registrado.</td></tr><tr><td><strong><code>data.prepayment_details.*.note</code> </strong><code>string</code><br>Nota o descripción adicional del anticipo.</td></tr></tbody></table>

data.allowance\_charges

<table class="astro-ibjkzya5"><tbody class="astro-ibjkzya5"><tr><td><strong><code>data.allowance_charges</code> </strong><code>array</code><br>Array de cargos o descuentos a nivel de factura (no a nivel de ítem). Vacío si no aplican.</td></tr></tbody></table>

data.taxes

<table class="astro-ibjkzya5"><tbody class="astro-ibjkzya5"><tr><td><strong><code>data.taxes</code> </strong><code>array</code><br>Array de objetos con el resumen de impuestos a nivel de factura (totalizados por tipo de tributo).</td></tr><tr><td><strong><code>data.taxes.*.tribute</code> </strong><code>object</code><br>Objeto con el tipo de tributo resumido.</td></tr><tr><td><strong><code>data.taxes.*.tribute.code</code> </strong><code>string</code><br>Código del tributo. Ejemplo: <code>01</code> (IVA).</td></tr><tr><td><strong><code>data.taxes.*.tribute.name</code> </strong><code>string</code><br>Nombre del tributo.</td></tr><tr><td><strong><code>data.taxes.*.is_excluded</code> </strong><code>boolean</code><br>Indica si el tributo está excluido a nivel global de la factura.</td></tr><tr><td><strong><code>data.taxes.*.rates</code> </strong><code>array</code><br>Array de objetos con las tarifas del tributo resumidas a nivel de factura.</td></tr><tr><td><strong><code>data.taxes.*.rates.*.taxable_amount</code> </strong><code>string</code><br>Base gravable total para esta tarifa de impuesto.</td></tr><tr><td><strong><code>data.taxes.*.rates.*.tax_amount</code> </strong><code>string</code><br>Valor total del impuesto para esta tarifa.</td></tr><tr><td><strong><code>data.taxes.*.rates.*.rate</code> </strong><code>string</code><br>Porcentaje de la tarifa del impuesto.</td></tr></tbody></table>

data.withholding\_taxes

<table class="astro-ibjkzya5"><tbody class="astro-ibjkzya5"><tr><td><strong><code>data.withholding_taxes</code> </strong><code>array</code><br>Array de retenciones a nivel de factura. Vacío si no aplican retenciones globales.</td></tr></tbody></table>

data.totals

<table class="astro-ibjkzya5"><tbody class="astro-ibjkzya5"><tr><td><strong><code>data.totals</code> </strong><code>object</code><br>Objeto con los totales calculados de la factura.</td></tr><tr><td><strong><code>data.totals.prepayment_amount</code> </strong><code>string</code><br>Suma total de los anticipos registrados en la factura.</td></tr><tr><td><strong><code>data.totals.gross_amount</code> </strong><code>string</code><br>Valor bruto total de la factura antes de impuestos y descuentos.</td></tr><tr><td><strong><code>data.totals.taxable_amount</code> </strong><code>string</code><br>Base gravable total sobre la cual se calculan los impuestos.</td></tr><tr><td><strong><code>data.totals.tax_amount</code> </strong><code>string</code><br>Valor total de los impuestos calculados en la factura.</td></tr><tr><td><strong><code>data.totals.surcharge_amount</code> </strong><code>string</code><br>Valor total de cargos adicionales (recargos) aplicados a la factura.</td></tr><tr><td><strong><code>data.totals.total</code> </strong><code>string</code><br>Valor total a pagar de la factura (después de anticipos, impuestos y descuentos).</td></tr></tbody></table>

data.related\_documents

<table class="astro-ibjkzya5"><tbody class="astro-ibjkzya5"><tr><td><strong><code>data.related_documents</code> </strong><code>array</code><br>Array de documentos relacionados con la factura (órdenes de compra, etc.). Vacío si no hay documentos relacionados.</td></tr></tbody></table>

data.related\_notes

<table class="astro-ibjkzya5"><tbody class="astro-ibjkzya5"><tr><td><strong><code>data.related_notes</code> </strong><code>object</code><br>Objeto con las notas crédito y débito relacionadas con esta factura.</td></tr><tr><td><strong><code>data.related_notes.credit_notes</code> </strong><code>array</code><br>Array de notas crédito asociadas a esta factura. Vacío si no hay notas crédito.</td></tr><tr><td><strong><code>data.related_notes.debit_notes</code> </strong><code>array</code><br>Array de notas débito asociadas a esta factura. Vacío si no hay notas débito.</td></tr></tbody></table>

data.links

<table class="astro-ibjkzya5"><tbody class="astro-ibjkzya5"><tr><td><strong><code>data.links</code> </strong><code>object</code><br>Objeto con los enlaces generados para acceder al documento.</td></tr><tr><td><strong><code>data.links.qr</code> </strong><code>string</code><br>URL del código QR que apunta al portal de la DIAN para consultar el documento.</td></tr><tr><td><strong><code>data.links.public_url</code> </strong><code>string</code><br>URL pública para visualizar la representación gráfica del documento en el portal de Factus.</td></tr></tbody></table>

* * *
