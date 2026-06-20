# Crear y Validar Nota Crédito

Este contenido es para V1. Cambia a la [versión más reciente](https://developers.factus.com.co/) para ver la documentación actualizada.

Este endpoint permite crear una nota crédito y validarla.

**Método:** POST

#### **Endpoint**

* [Pruebas](https://developers.factus.com.co/v1/notas-credito/crear-y-validar#tab-panel-239)
* [Producción](https://developers.factus.com.co/v1/notas-credito/crear-y-validar#tab-panel-240)

```
https://api-sandbox.factus.com.co/v1/credit-notes/validate
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

### Descripción de campos

[Sección titulada «Descripción de campos»](https://developers.factus.com.co/v1/notas-credito/crear-y-validar#descripci%C3%B3n-de-campos)

| **Campo** | **Descripción** |
| --- | --- |
| `numbering_range_id` | ID del rango de numeración. Para saber cual es el ID de cada rango de numeración consulte el siguiente endpoint: [Rangos de numeración](https://developers.factus.com.co/v1/rangos-de-numeracion/obtener-rangos) Si tienes en la API solo un rango de numeración activo para la notas crédito, este campo puede ser opcional. Si no envías el rango de numeración la API tomara el único rango de numeración que este activo. Si hay más de un rango de numeración para las notas crédito, este campo es obligatorio. |
| `correction_concept_code` | Código de corrección. Código del concepto por el cual se genera la nota crédito. Para saber los códigos aceptados revisa la tabla [codigos de correción](https://developers.factus.com.co/v1/tablas-de-referencia/tablas/#c%C3%B3digos-de-correcci%C3%B3n) . |
| `customization_id` | Código del tipo de operación. Para saber los códigos aceptados revisar la tabla [Códigos de tipos de operación](https://developers.factus.com.co/v1/tablas-de-referencia/tablas/#c%C3%B3digos-de-tipos-de-operaci%C3%B3n-notas-cr%C3%A9dito) . |
| `bill_id` | ID de la factura a la que se le generará la nota crédito. Este campo es opcional si el campo `customization_id` = 22 (Nota crédito sin referencia a una factura electrónica). |
| `reference_code` | Código único que sirve para identificar cada nota crédito de manera unívoca en el sistema y garantizar que no haya duplicados. Esto nos ayuda a prevenir que se genere más de una nota crédito con la misma información. |
| `payment_method_code` | Código del método de pago. Para ver los método de pago disponibles revisa la tabla [método de pago](https://developers.factus.com.co/v1/tablas-de-referencia/tablas/#c%C3%B3digos-de-m%C3%A9todos-de-pago) |
| `send_email` | (Opcional) Booleano que indica si el sistema debe enviar el correo electrónico al cliente. Útil cuando el envío del correo se gestiona de forma externa o personalizada por el integrador. Por defecto, este campo tiene un valor de true, lo que implica que el correo electrónico será enviado al cliente. Si se establece en false, el correo no será enviado. |
| `observation` | (Opcional) Agrega una observación en caso de requerirlo (máximo 250 caracteres). |
| `billing_period (Object)*` | (Opcional) Este es un objeto que contendrá la información del periodo de facturación. Para utilizar en los servicios públicos, contratos de arrendamiento, matriculas en educación, etc. Ver el ejemplo en el body. Este campo es requerido si el campo `customization_id` = 22 (Nota crédito sin referencia a una factura electrónica). |
| `billing_period.start_date` | Fecha de inicio del periodo de facturación en formato YYYY-MM-DD. |
| `billing_period.start_time` | (Opcional) Hora de inicio del periodo de facturación en formato HH:mm:ss. |
| `billing_period.end_date` | Fecha de fin del periodo de facturación en formato YYYY-MM-DD. |
| `billing_period.end_time` | (Opcional) Hora de fin del periodo de facturación en formato HH:mm:ss. |
| `establishment (object)` | (Opcional) Objeto que contendrá la información sobre el establecimiento. Úsalo cuando manejes más de un establecimiento y necesites que los datos correspondientes se reflejen en la nota crédito. |
| `establishment.name (string)` | Nombre del establecimiento. |
| `establishment.address (string)` | Dirección del establecimiento. |
| `establishment.phone_number (string)` | Número telefónico del establecimiento. |
| `establishment.email (string)` | Correo electrónico del establecimiento. |
| `establishment.municipality_id (integer)` | ID que corresponda al Municipio donde se encuentra el establecimiento. Para saber cual ID corresponde al municipio consulte el endpoint de [Municipios](https://developers.factus.com.co/v1/municipios/obtener-municipios/) |
| `customer (object)` | (Opcional) Este es un objeto que contendrá la información del cliente de la nota crédito. Si no se envían los datos del cliente, la API tomara los datos del cliente de la factura relacionada al campo `bill_id`. |
| `customer.identification_document_id (integer)` | ID que corresponda al tipo de identificación. Para saber cual ID corresponde al tipo de identificación consulte la siguiente tabla [IDs tipos de documentos.](https://developers.factus.com.co/v1/tablas-de-referencia/tablas/#ids-de-tipos-de-documentos-de-identidad) |
| `customer.identification (string)` | Número de identificación del cliente. |
| `customer.dv (integer)` | (Opcional) Dígito de verificación del cliente. Requerido si el cliente se identifica con NIT. |
| `customer.company (string)` | (Opcional) Razón social. Obligatorio si el cliente es persona jurídica. |
| `customer.trade_name (string)` | (Opcional) Nombre comercial |
| `customer.names (string)` | (Opcional) Nombre del cliente. Solo aplica para los clientes que son personas naturales. |
| `customer.address (string)` | (Opcional) Dirección del cliente. |
| `customer.email (string)` | (Opcional) Correo electrónico del cliente. |
| `customer.phone (string)` | (Opcional) Número de teléfono del cliente. |
| `customer.legal_organization_id (integer)` | ID que corresponda al tipo de organización. Para saber cual ID corresponde al tipo de organización consulte la tabla [IDs tipos de organizaciones.](https://developers.factus.com.co/v1/tablas-de-referencia/tablas/#ids-de-tipos-de-organizaciones) |
| `customer.tribute_id (integer)` | ID del tributo. Para saber cual ID corresponde al tributo consulte la tabla [IDs tipos de tributos.](https://developers.factus.com.co/v1/tablas-de-referencia/tablas/#ids-de-tributos-clientes) |
| `customer.municipality_id (integer)` | (Opcional) ID que corresponda al municipio donde vive el cliente. Para saber cual ID corresponde al municipio consulte el endpoint de [Municipios](https://developers.factus.com.co/v1/municipios/obtener-municipios/) .
**Nota:** Se debe enviar ID del municipio únicamente si el municipio es de Colombia, si es extranjero el campo es opcional. |
| `items` | El array de objetos (items), corresponde a los productos de la nota crédito, se debe enviar un objeto por cada producto o servicio. |
| `items.note (string)` | (opcional) Añade información adicional del producto o servicio. |
| `items.code_reference (string)` | Código de referencia del producto o servicio. |
| `items.name (string)` | Nombre del producto o servicio. |
| `items.quantity (integer)` | Cantidad del producto o servicio. Debe ser un número entero. |
| `items.discount_rate (float)` | Porcentaje del descuento del producto o servicio (máximo dos decimales). |
| `items.price (float)` | Precio del producto o servicio con impuestos incluidos (máximo dos decimales). |
| `items.tax_rate (string)` | Porcentaje del impuesto aplicado al producto o servicio. |
| `items.unit_measure_id (integer)` | ID que corresponda a la unidad de medida del item. Para saber que ID corresponde a cada unidad de medida consulte el endpoint [Unidades de medida.](https://developers.factus.com.co/v1/unidades-de-medida/obtener-unidades) |
| `items.standard_code_id (integer)` | ID que corresponde al código de estándar que se adopto para los productos o servicios. Para saber que ID corresponde al código de estándar consulte la tabla [IDs de códigos de estándar.](https://developers.factus.com.co/v1/tablas-de-referencia/tablas/#ids-de-est%C3%A1ndar-de-identificaci%C3%B3n-del-producto) |
| `items.is_excluded (integer)` | Si el producto está excluido de IVA (0: no, 1: sí). |
| `items.tribute_id (integer)` | Tipo de tributo aplicado. Se consume del endpoint de [tributos de productos.](https://developers.factus.com.co/v1/tributos/tributos-de-productos) . |
| `items.withholding_taxes (array)` | (Opcional) Array de objetos (autorretenciones) Este campo sirve para informar las retenciones en la fuente que se aplican al producto o servicio.
No son retenciones que otra persona o empresa te hace a ti, sino retenciones que tú mismo te aplicas como contribuyente.
Por cada retención que te apliques a ti mismo, debes enviar un objeto. |
| `items.withholding_taxes.code (integer)` | Código relacionado con la retención aplicada al producto o servicio. Para saber los códigos de las retenciones consulte la tabla [tributos.](https://developers.factus.com.co/v1/tributos/tributos-de-productos) |
| `items.withholding_taxes.withholding_tax_rate (float)` | Porcentaje de la retención aplicada al producto o servicio. |
| `allowance_charges (array)` | (Opcional) Array de objetos que corresponden a los descuentos o recargos que se aplican a la nota crédito, se debe enviar un objeto por cada descuento o recargo. |
| `allowance_charges.concept_type (string)` | Código del tipo de descuento o recargo. Para saber el código que pertenece a un descuento o recargo consulte la tabla [Códigos de los conceptos](https://developers.factus.com.co/v1/tablas-de-referencia/tablas/#c%C3%B3digos-de-los-recargos-y-descuentos) |
| `allowance_charges.is_surcharge (boolean)` | Indica si es un descuento o un recargo. El valor `true` corresponde a un recargo y `false` a un descuento. |
| `allowance_charges.reason (string)` | Razón por la cual se esta haciendo el descuento o recargo. |
| `allowance_charges.base_amount (float)` | Base sobre la cual se calcula el descuento o recargo (Máximo dos decimales). |
| `allowance_charges.amount (float)` | Valor monetario del descuento o recargo aplicado, (Máximo dos decimales). |

* * *

### Ejemplo de Solicitud

[Sección titulada «Ejemplo de Solicitud»](https://developers.factus.com.co/v1/notas-credito/crear-y-validar#ejemplo-de-solicitud)

Aquí tienes un ejemplo de cómo debería quedar el cuerpo de la solicitud en formato JSON:

* [status 201](https://developers.factus.com.co/v1/notas-credito/crear-y-validar#tab-panel-241)
* [status 409](https://developers.factus.com.co/v1/notas-credito/crear-y-validar#tab-panel-242)
* [status 422](https://developers.factus.com.co/v1/notas-credito/crear-y-validar#tab-panel-243)

```
{ "numbering_range_id": 5, "correction_concept_code": 2, "customization_id": 20, "bill_id": 514, "reference_code": "5", "observation": "", "payment_method_code": "10", "establishment": { "name": "SuperMarket", "address": "calle 10 # 3-13", "phone_number": "0987654321", "email": "supermarket@gmail.com", "municipality_id": 980 }, "customer": { "identification": "123456789", "dv": "3", "company": "", "trade_name": "", "names": "Alan Turing", "address": "calle 1 # 2-68", "email": "alanturing@enigmasas.com", "phone": "1234567890", "legal_organization_id": "2", "tribute_id": "21", "identification_document_id": 3, "municipality_id": "980" }, "items": [ { "code_reference": "123456", "name": "Aspirina", "quantity": 1, "discount_rate": 0, "price": 80000, "tax_rate": "19.00", "unit_measure_id": 70, "standard_code_id": 1, "is_excluded": 0, "tribute_id": 1, "withholding_taxes": [] } ]}
```

### Ejemplo de respuesta

[Sección titulada «Ejemplo de respuesta»](https://developers.factus.com.co/v1/notas-credito/crear-y-validar#ejemplo-de-respuesta)

* [status 201](https://developers.factus.com.co/v1/notas-credito/crear-y-validar#tab-panel-244)
* [status 409](https://developers.factus.com.co/v1/notas-credito/crear-y-validar#tab-panel-245)
* [status 422](https://developers.factus.com.co/v1/notas-credito/crear-y-validar#tab-panel-246)

```
{ "status": "Created", "message": "Documento con el código de referencia 5 registrado y validado con éxito", "data": { "company": { "url_logo": "http://api.test/storage/images/logos/uKWIKmmwxeELNzmrxyKoGgbCtimDV1zInzQqgNin.png", "nit": "900825759", "dv": "7", "company": "HALLTEC S.A.S.", "name": "HALLTEC", "registration_code": "3FJ3253427", "economic_activity": "6311", "phone": "3165584659", "email": "yocahe5@gmail.com", "direction": "cra 10 # 9 - 04", "municipality": "San Gil" }, "establishment": { "name": "SuperMarket", "address": "calle 10 # 3-13", "phone_number": "0987654321", "email": "supermarket@gmail.com", "municipality_id": { "id": 996, "code": "68872", "name": "Villanueva", "department": { "id": 28, "code": "68", "name": "Santander" } } }, "customer": { "identification": "123456789", "dv": null, "graphic_representation_name": "Alan Turing", "trade_name": "", "company": "", "names": "Alan Turing", "address": "calle 1 # 2-68", "email": "alanturing@enigmasas.com", "phone": "1234567890", "legal_organization": { "id": 2, "code": "2", "name": "Persona Natural" }, "tribute": { "id": 21, "code": "ZZ", "name": "No aplica" }, "municipality": { "id": 980, "code": "68679", "name": "San Gil" } }, "credit_note": { "id": 132, "number": "NC76", "reference_code": "5", "status": 1, "send_email": 0, "qr": "https://catalogo-vpfe-hab.dian.gov.co/document/searchqr?documentkey=eee1fc09684c19aaa7cee1b97d3923e286b1ccf12bdd0d185b4ddcbbab87bcbe9d589a9daf9eee9f55132c782c1b8bc0", "cude": "eee1fc09684c19aaa7cee1b97d3923e286b1ccf12bdd0d185b4ddcbbab87bcbe9d589a9daf9eee9f55132c782c1b8bc0", "validated": "20-09-2024 09:13:43 AM", "gross_value": "67226.89", "taxable_amount": "67226.89", "tax_amount": "12773.11", "discount_amount": "0.00", "surcharge_amount": "0.00", "total": "80000.00", "observation": null, "errors": [ "Regla: CBF02, Notificación: No se informo el numero de la factura referenciada", "Regla: CAK55, Notificación: Correo electrónico no informado" ], "created_at": "20-09-2024 09:13:42 AM", "qr_image": "data:image/png;base64, [TRIMMED_BASE64_13356_CHARS]", "bill_id": 514, "cufe": "025972ce686eb5fc89a78ab8e9de34c3dea87d23982694ff25843b7f3046b0ac42815f9bb7a1f7469062ef0c11f2eac0", "number_bill": "SETP990000302", "payment_method": { "name": "Efectivo", "code": "10" }, "customization_id": { "code": "20", "name": "Nota Crédito que referencia una factura electrónica." }, "correction_concept": { "code": "2", "name": "Anulación de factura electrónica" } }, "items": [ { "note": null, "code_reference": "123456", "name": "Aspirina", "quantity": 1, "discount_rate": "0.00", "discount": "0.00", "gross_value": "67226.89", "tax_rate": "19.00", "taxable_amount": "67226.89", "tax_amount": "12773.11", "price": "80000.00", "is_excluded": 0, "unit_measure": { "id": 70, "code": "94", "name": "unidad" }, "standard_code": { "id": 1, "code": "999", "name": "Estándar de adopción del contribuyente" }, "tribute": { "id": 1, "code": "01", "name": "IVA" }, "total": 80000, "withholding_taxes": [] } ], "withholding_taxes": [] }}
```
