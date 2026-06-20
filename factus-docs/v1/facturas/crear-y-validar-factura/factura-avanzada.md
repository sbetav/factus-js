# Factura avanzada

Este contenido es para V1. Cambia a la [versión más reciente](https://developers.factus.com.co/) para ver la documentación actualizada.

Esta sección describe cómo utilizar el endpoint para crear y validar una factura, junto con la información necesaria para garantizar su correcto uso.

**Método:** POST

#### **Endpoint**

* [Pruebas](https://developers.factus.com.co/v1/facturas/crear-y-validar-factura/factura-avanzada#tab-panel-305)
* [Producción](https://developers.factus.com.co/v1/facturas/crear-y-validar-factura/factura-avanzada#tab-panel-306)

```
https://api-sandbox.factus.com.co/v1/bills/validate
```

### **Encabezados de la Solicitud**

Para realizar la solicitud es necesario incluir los siguientes encabezados:

| **Encabezado** | **Valor** | **Descripción** |
| --- | --- | --- |
| `Content-Type` | `application/json` | Indica que los datos se envían en formato JSON. |
| `Authorization` | `Bearer <token_de_acceso>` | Token de autenticación necesario para acceder al recurso. Ver [Cómo generar token](https://developers.factus.com.co/autenticacion/auth) |
| `Accept` | `application/json` | Indica que la respuesta debe estar en formato JSON. |

``**Nota:** Reemplaza `token_de_acceso` con el token proporcionado tras autenticarte.``

* * *

* * *

### Endpoints para Datos de Facturación

[Sección titulada «Endpoints para Datos de Facturación»](https://developers.factus.com.co/v1/facturas/crear-y-validar-factura/factura-avanzada#endpoints-para-datos-de-facturaci%C3%B3n)

Factus ofrece una serie de endpoints de apoyo diseñados para simplificar el proceso de creación de facturas. Estos datos son de uso recurrente y, dado que rara vez se actualizan, se recomienda almacenarlos de manera persistente en su sistema. Esto no solo evita consultas repetitivas, sino que también mejora significativamente los tiempos de respuesta. Sin embargo, si opta por consultarlos dinámicamente, es importante evaluar el impacto en el rendimiento del sistema.

* **[Rangos de numeración](https://developers.factus.com.co/v1/rangos-de-numeracion/obtener-rangos)**
* **[Municipios](https://developers.factus.com.co/v1/municipios/obtener-municipios)**
* **[Tributos](https://developers.factus.com.co/v1/tributos/tributos-de-productos)**
* **[Unidades de medida](https://developers.factus.com.co/v1/unidades-de-medida/obtener-unidades)**

* * *

### Estructura para crear la factura

[Sección titulada «Estructura para crear la factura»](https://developers.factus.com.co/v1/facturas/crear-y-validar-factura/factura-avanzada#estructura-para-crear-la-factura)

Para crear una factura debemos tener en cuenta los datos agrupados en 3 aspectos:

1. Datos generales de la factura
2. Datos del cliente
3. Datos de los productos o servicios.

### Parámetros del Cuerpo (Body)

[Sección titulada «Parámetros del Cuerpo (Body)»](https://developers.factus.com.co/v1/facturas/crear-y-validar-factura/factura-avanzada#par%C3%A1metros-del-cuerpo-body)

El cuerpo (Body) de la solicitud debe enviarse en formato JSON y debe incluir los siguientes parámetros:

| **Descripción de los campos** |
| --- |
| `numbering_range_id` `integer`
ID del rango de numeración. Para saber cuál es el ID de cada rango de numeración consulte el siguiente endpoint [rangos de numeración](https://developers.factus.com.co/v1/rangos-de-numeracion/obtener-rangos) . Si tienes en la API un solo un rango de numeración activo para la facturación electrónica, este campo puede ser opcional. Si no envías el rango de numeración, la API tomará el único rango de numeración que esté activo. Si hay más de un rango de numeración para la facturación, este campo es obligatorio. |
| `document` `string` `Opcional`
Código del tipo de documento. Para saber el código que pertenece a un documento consulte la tabla [códigos de tipos de documentos](https://developers.factus.com.co/v1/tablas-de-referencia/tablas/#c%C3%B3digos-de-tipos-de-documentos-para-la-factura) |
| `reference_code` `string`
Código único que sirve para identificar cada factura de manera unívoca en el sistema y garantizar que no haya duplicados. Esto nos ayuda a prevenir que se genere más de una factura con la misma información. |
| `observation` `string`
Agrega una observación a la factura. No debe tener más de 250 caracteres. |
| `payment_form` `string` `Opcional`
Código de la forma de pago. Si la forma de pago no se agrega, por defecto la API agrega el código 1 (pago de contado). Consulte la tabla [Formas de pago](https://developers.factus.com.co/v1/tablas-de-referencia/tablas/#c%C3%B3digos-de-formas-de-pago) para ver las formas de pago disponibles. |
| `payment_due_date` `date` `Opcional`
Fecha de vencimiento de la factura en formato YYYY-MM-DD. Requerido solo cuando la forma de pago (`payment_form`) contiene el valor de 2 (pago a crédito). |
| `payment_method_code` `integer` `Opcional`
Código del método de pago. Si el medio de pago no se agrega, por defecto la API agrega el código 10 (efectivo). Para saber cuál es el código de cada método de pago consulte la tabla [Métodos de pago](https://developers.factus.com.co/v1/tablas-de-referencia/tablas/#c%C3%B3digos-de-m%C3%A9todos-de-pago) . |
| `operation_type` `string` `Opcional`
Código del tipo de operación. Si el tipo de operación no se agrega, por defecto la API agrega el código 10 (estándar). Consulte la tabla [Tipos de operación](https://developers.factus.com.co/v1/tablas-de-referencia/tablas/#c%C3%B3digos-de-tipos-de-operaci%C3%B3n) para ver los tipos de operación disponibles. |
| `order_reference` `Object` `Opcional`
Este es un objeto que contendrá la información que describen una orden de pedido |
| `order_reference.reference_code`
Número del documento de la orden. |
| `order_reference.issue_date` `Opcional`
Fecha de emisión de la orden. |
| `send_email` `Opcional`
Booleano que indica si el sistema debe enviar el correo electrónico al cliente. Útil cuando el envío del correo se gestiona de forma externa o personalizada por el integrador. Por defecto, este campo tiene un valor de true, lo que implica que el correo electrónico será enviado al cliente. Si se establece en false, el correo no será enviado.. |
| `related_documents` `array` `Opcional`
Array de objetos (documentos), debe haber un objeto por cada documento. Obligatorio cuando el campo (document) contenga el valor 03. |
| `related_documents.code` `array`
Identificador del tipo de documento de referencia. (Corresponde a una codificación propia de la empresa). |
| `related_documents.issue_date` `array`
Fecha de emisión del documento referenciado en formato YYYY-MM-DD. |
| `related_documents.number` `array`
Prefijo y Número del documento referenciado. |
| `billing_period` `Object*` `Opcional`
Este es un objeto que contendrá la información del periodo de facturación. Para utilizar en los servicios públicos, contratos de arrendamiento, matriculas en educación, etc. Ver el ejemplo en el body. |
| `billing_period.start_date`
Fecha de inicio del periodo de facturación en formato YYYY-MM-DD. |
| `billing_period.start_time` `Opcional`
Hora de inicio del periodo de facturación en formato HH:mm:ss. |
| `billing_period.end_date`
Fecha de fin del periodo de facturación en formato YYYY-MM-DD. |
| `billing_period.end_time`
Hora de fin del periodo de facturación en formato HH:mm:ss. |
| `establishment` `object` `Opcional`
Objeto que contendrá la información sobre el establecimiento. Úsalo cuando manejes más de un establecimiento y necesites que los datos correspondientes se reflejen en la factura. |
| `establishment.name` `string`
Nombre del establecimiento. |
| `establishment.address` `string`
Dirección del establecimiento. |
| `establishment.phone_number` `string`
Número telefónico del establecimiento. |
| `establishment.email` `string`
Correo electrónico del establecimiento. |
| `establishment.municipality_id` `integer`
ID que corresponda al Municipio donde se encuentra el establecimiento. Para saber cual ID corresponde al municipio consulte el endpoint de [Municipios](https://developers.factus.com.co/v1/municipios/obtener-municipios/) |
| `customer` `object`
Este es un objeto que contendrá la información del cliente de la factura. |
| `customer.identification_document_id` `integer`
ID que corresponda al tipo de identificación. Para saber cual ID corresponde al tipo de identificación consulte la siguiente tabla [IDs tipos de documentos.](https://developers.factus.com.co/v1/tablas-de-referencia/tablas/#ids-de-tipos-de-documentos-de-identidad) |
| `customer.identification` `string`
Número de identificación del cliente. Si el numero de identificación corresponde a un NIT no se debe enviar el dígito de verificación ni el guion que lo separa, el dígito de verificación tiene un campo exclusivo para el, aquí se debe enviar únicamente el numero de identificación. |
| `customer.dv` `integer` `Opcional`
Dígito de verificación del cliente. Requerido si el cliente se identifica con NIT. Si el cliente se identifica con NIT y no se envía el dígito de verificación, el API lo calculará automáticamente. |
| `customer.company` `string` `Opcional`
Razón social. Obligatorio si el cliente es persona jurídica. |
| `customer.trade_name` `string` `Opcional`
Nombre comercial |
| `customer.names` `string` `Opcional`
Nombre del cliente. Solo aplica para los clientes que son personas naturales. |
| `customer.address` `string` `Opcional`
Dirección del cliente. |
| `customer.email` `string` `Opcional`
Correo electrónico del cliente. |
| `customer.phone` `string` `Opcional`
Número de teléfono del cliente. |
| `customer.legal_organization_id` `integer`
ID que corresponda al tipo de organización. Para saber cual ID corresponde al tipo de organización consulte la tabla [IDs tipos de organizaciones.](https://developers.factus.com.co/v1/tablas-de-referencia/tablas/#ids-de-tipos-de-organizaciones) |
| `customer.tribute_id` `integer`
ID del tributo. Para saber cual ID corresponde al tributo consulte la tabla [IDs tipos de tributos.](https://developers.factus.com.co/v1/tablas-de-referencia/tablas/#ids-de-tributos-clientes) |
| `customer.municipality_id` `integer` `Opcional`
ID que corresponda al municipio donde vive el cliente. Para saber cual ID corresponde al municipio consulte el endpoint de [Municipios](https://developers.factus.com.co/v1/municipios/obtener-municipios/) .
**Nota:** Se debe enviar ID del municipio únicamente si el municipio es de Colombia, si es extranjero el campo es opcional. |
| `items` `array`
El array de objetos (items), corresponde a los productos de la factura, se debe enviar un objeto por cada producto o servicio. |
| `items.scheme_id` `string` `Opcional`
Este campo es requerido si el campo `operation_type` contiene el valor de 11 (mandatos). Agregue el valor de 0 cuando sea ingreso propio y 1 ingresos recibidos para terceros. |
| `items.note` `string` `Opcional`
Añade información adicional del producto o servicio. |
| `items.code_reference` `string`
Código de referencia del producto o servicio. |
| `items.name` `string`
Nombre del producto o servicio. |
| `items.quantity` `integer`
Cantidad del producto o servicio. Debe ser un número entero. |
| `items.discount_rate` `float`
Porcentaje del descuento del producto o servicio (máximo dos decimales). |
| `items.price` `float`
Precio por unidad del producto o servicio con impuestos incluidos (máximo dos decimales). |
| `items.tax_rate` `string`
Porcentaje del impuesto aplicado al producto o servicio. |
| `items.unit_measure_id` `integer`
ID que corresponda a la unidad de medida del item. Para saber que ID corresponde a cada unidad de medida consulte el endpoint [Unidades de medida.](https://developers.factus.com.co/v1/unidades-de-medida/obtener-unidades) |
| `items.standard_code_id` `nteger`
ID que corresponde al código de estándar que se adopto para los productos o servicios. Para saber que ID corresponde al código de estándar consulte la tabla [IDs de códigos de estándar.](https://developers.factus.com.co/v1/tablas-de-referencia/tablas/#ids-de-est%C3%A1ndar-de-identificaci%C3%B3n-del-producto) |
| `items.is_excluded` `integer`
Si el producto está excluido de IVA (0: no, 1: sí). |
| `items.tribute_id` `integer`
Tipo de tributo aplicado. Se consume del endpoint de [tributos de productos.](https://developers.factus.com.co/v1/tributos/tributos-de-productos) |
| `items.withholding_taxes` `array` `Opcional`
Array de objetos (autorretenciones) Este campo sirve para informar las retenciones en la fuente que se aplican al producto o servicio.
No son retenciones que otra persona o empresa te hace a ti, sino retenciones que tú mismo te aplicas como contribuyente.
Por cada retención que te apliques a ti mismo, debes enviar un objeto. |
| `items.withholding_taxes.code` `string`
Código relacionado con la retención aplicada al producto o servicio. Para saber los códigos de las retenciones consulte la tabla [tributos.](https://developers.factus.com.co/v1/tributos/tributos-de-productos) |
| `items.withholding_taxes.withholding_tax_rate` `float`
Porcentaje de la retención aplicada al producto o servicio. El valor se maneja con máximos 2 decimales |
| `items.mandate` `object` `Opcional`
Este campo es requerido si el campo `items.scheme_id` contiene el valor 1 (Ingresos recibidos para terceros). Este es un objeto que contendrá la información del mandante. |
| `items.mandate.identification_document_id` `integer`
ID que corresponda al tipo de identificación. Para saber cual ID corresponde al tipo de identificación consulte la siguiente tabla [IDs tipos de documentos.](https://developers.factus.com.co/v1/tablas-de-referencia/tablas/#ids-de-tipos-de-documentos-de-identidad) |
| `items.mandate.identification` `string`
Número de identificación del mandante. |
| `allowance_charges` `array` `Opcional`
Array de objetos que corresponden a los descuentos o recargos que se aplican a la factura, se debe enviar un objeto por cada descuento o recargo. |
| `allowance_charges.concept_type` `string`
Código del tipo de descuento o recargo. Para saber el código que pertenece a un descuento o recargo consulte la tabla [Códigos de los conceptos](https://developers.factus.com.co/v1/tablas-de-referencia/tablas/#c%C3%B3digos-de-los-recargos-y-descuentos) |
| `allowance_charges.is_surcharge` `boolean`
Indica si es un descuento o un recargo. El valor `true` corresponde a un recargo y `false` a un descuento. |
| `allowance_charges.reason` `string`
Razón por la cual se esta haciendo el descuento o recargo. |
| `allowance_charges.base_amount` `float`
Base sobre la cual se calcula el descuento o recargo (Máximo dos decimales). |
| `allowance_charges.amount` `float`
Valor monetario del descuento o recargo aplicado, (Máximo dos decimales). |

### Ejemplo de Solicitud

[Sección titulada «Ejemplo de Solicitud»](https://developers.factus.com.co/v1/facturas/crear-y-validar-factura/factura-avanzada#ejemplo-de-solicitud)

Aquí tienes un ejemplo de cómo debería quedar el cuerpo de la solicitud en formato JSON:

* [201 - Factura de venta](https://developers.factus.com.co/v1/facturas/crear-y-validar-factura/factura-avanzada#tab-panel-307)
* [201 - Instrumento electrónico de transmisión](https://developers.factus.com.co/v1/facturas/crear-y-validar-factura/factura-avanzada#tab-panel-308)

```
{ "document": "01", "numbering_range_id": 4, "reference_code": "fact0022025", "observation": "", "payment_method_code": "10", "establishment": { "name": "SuperMarket", "address": "calle 10 # 3-13", "phone_number": "0987654321", "email": "supermarket@gmail.com", "municipality_id": 980 }, "customer": { "identification": "123456789", "dv": "3", "company": "", "trade_name": "", "names": "Alan Turing", "address": "calle 1 # 2-68", "email": "alanturing@enigmasas.com", "phone": "1234567890", "legal_organization_id": "2", "tribute_id": "21", "identification_document_id": 3, "municipality_id": "980" }, "items": [ { "code_reference": "12345", "name": "producto de prueba", "quantity": 1, "discount_rate": 20, "price": 50000, "tax_rate": "19.00", "unit_measure_id": 70, "standard_code_id": 1, "is_excluded": 0, "tribute_id": 1, "withholding_taxes": [ { "code": "06", "withholding_tax_rate": "4.0" }, { "code": "05", "withholding_tax_rate": "2.0" } ] }, { "code_reference": "54321", "name": "producto de prueba 2", "quantity": 1, "discount_rate": 0, "price": 50000, "tax_rate": "5.00", "unit_measure_id": 70, "standard_code_id": 1, "is_excluded": 0, "tribute_id": 1, "withholding_taxes": [] } ], "allowance_charges": [ { "concept_type": "03", "is_surcharge": true, "reason": "Propina", "base_amount": "90000.00", "amount": "9000.00" } ]}
```

### Ejemplo de respuesta

[Sección titulada «Ejemplo de respuesta»](https://developers.factus.com.co/v1/facturas/crear-y-validar-factura/factura-avanzada#ejemplo-de-respuesta)

* [201 - Factura de venta](https://developers.factus.com.co/v1/facturas/crear-y-validar-factura/factura-avanzada#tab-panel-309)
* [201 - Instrumento electrónico de transmisión](https://developers.factus.com.co/v1/facturas/crear-y-validar-factura/factura-avanzada#tab-panel-310)
* [Status 409](https://developers.factus.com.co/v1/facturas/crear-y-validar-factura/factura-avanzada#tab-panel-311)
* [Status 422](https://developers.factus.com.co/v1/facturas/crear-y-validar-factura/factura-avanzada#tab-panel-312)

```
{ "status": "Created", "message": "Documento con el código de referencia fact0022025 registrado y validado con éxito", "data": { "company": { "url_logo": "http://api.test/storage/images/logos/2wkU627FUczVkr8U5P8yrYowQ44eYQG0Y9ymXhtP.png", "nit": "900825759", "dv": "7", "company": "HALLTEC S.A.S.", "name": "HALLTEC S.A.S.", "graphic_representation_name": "HALLTEC S.A.S.", "registration_code": "3FJ3253427", "economic_activity": "6311", "phone": "3165584659", "email": "yocahe5@gmail.com", "direction": "cra 10 # 9 - 04", "municipality": "San Gil" }, "establishment": { "name": "SuperMarket", "address": "calle 10 # 3-13", "phone_number": "0987654321", "email": "supermarket@gmail.com", "municipality_id": { "id": 996, "code": "68872", "name": "Villanueva", "department": { "id": 28, "code": "68", "name": "Santander" } } }, "customer": { "identification": "123456789", "dv": null, "graphic_representation_name": "Alan Turing", "trade_name": "", "company": "", "names": "Alan Turing", "address": "calle 1 # 2-68", "email": "alanturing@enigmasas.com", "phone": "1234567890", "legal_organization": { "id": 2, "code": "2", "name": "Persona Natural" }, "tribute": { "id": 21, "code": "ZZ", "name": "No aplica" }, "municipality": { "id": 980, "code": "68679", "name": "San Gil" } }, "numbering_range": { "prefix": "SETP", "from": 990000000, "to": 995000000, "resolution_number": "18760000001", "start_date": "19-01-2019", "end_date": "19-01-2030", "months": 132 }, "billing_period": [], "bill": { "id": 820, "document": { "code": "01", "name": "Factura electrónica de Venta" }, "operation_type": { "code": "10", "name": "Estándar" }, "order_reference": null, "number": "SETP990000493", "reference_code": "fact0022025", "status": 1, "send_email": 0, "qr": "https://catalogo-vpfe-hab.dian.gov.co/document/searchqr?documentkey=44e260a76e092e46fd5d8344a03146d5c8863ab68b18bde38a53318a33bf6805bac75f0bd71b0b75b3bd9c747a629470", "cufe": "44e260a76e092e46fd5d8344a03146d5c8863ab68b18bde38a53318a33bf6805bac75f0bd71b0b75b3bd9c747a629470", "validated": "09-01-2025 01:56:16 PM", "gross_value": "81232.50", "taxable_amount": "81232.50", "tax_amount": "8767.50", "discount_amount": "0.00", "surcharge_amount": "9000.00", "total": "99000.00", "observation": null, "errors": [], "created_at": "09-01-2025 01:56:13 PM", "payment_due_date": null, "qr_image": "data:image/png;base64, [TRIMMED_BASE64_12712_CHARS]", "has_claim": 0, "is_negotiable_instrument": 0, "payment_form": { "code": "1", "name": "Pago de contado" }, "payment_method": { "code": "10", "name": "Efectivo" } }, "related_documents": [], "items": [ { "scheme_id": null, "note": null, "code_reference": "12345", "name": "producto de prueba", "quantity": 1, "discount_rate": "20.00", "discount": "8403.36", "gross_value": "33613.45", "tax_rate": "19.00", "taxable_amount": "33613.45", "tax_amount": "6386.55", "price": "50000.00", "is_excluded": 0, "unit_measure": { "id": 70, "code": "94", "name": "unidad" }, "standard_code": { "id": 1, "code": "999", "name": "Estándar de adopción del contribuyente" }, "tribute": { "id": 1, "code": "01", "name": "IVA" }, "total": 40000, "withholding_taxes": [ { "tribute_code": "05", "name": "ReteIVA", "value": "957.98", "rates": [ { "code": "05", "name": "ReteIVA", "rate": "15.00" } ] }, { "tribute_code": "06", "name": "ReteRenta", "value": "2352.94", "rates": [ { "code": "06", "name": "ReteRenta", "rate": "7.00" } ] } ], "mandate": null }, { "scheme_id": null, "note": null, "code_reference": "54321", "name": "producto de prueba 2", "quantity": 1, "discount_rate": "0.00", "discount": "0.00", "gross_value": "47619.05", "tax_rate": "5.00", "taxable_amount": "47619.05", "tax_amount": "2380.95", "price": "50000.00", "is_excluded": 0, "unit_measure": { "id": 70, "code": "94", "name": "unidad" }, "standard_code": { "id": 1, "code": "999", "name": "Estándar de adopción del contribuyente" }, "tribute": { "id": 1, "code": "01", "name": "IVA" }, "total": 50000, "withholding_taxes": [] } ], "allowance_charges": [ { "concept_type": { "code": "03", "name": "Recargo Condicionado" }, "is_surcharge": true, "reason": "Propina", "base_amount": "90000.00", "percentage": "10.00", "amount": "9000.00" } ], "withholding_taxes": [ { "tribute_code": "05", "name": "ReteIVA", "value": "957.98" }, { "tribute_code": "06", "name": "ReteRenta", "value": "2352.94" } ], "mandate": null, "credit_notes": [], "debit_notes": [] }}
```
