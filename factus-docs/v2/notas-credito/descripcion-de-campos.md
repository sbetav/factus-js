# Campos de la nota crédito

Esta sección describe los campos que puede contener la nota crédito.

**Método:** POST

#### **Endpoint**

* [Sandbox](https://developers.factus.com.co/notas-credito/descripcion-de-campos#tab-panel-62)
* [Producción](https://developers.factus.com.co/notas-credito/descripcion-de-campos#tab-panel-63)

```
https://api-sandbox.factus.com.co/v2/credit-notes/validate
```

### **Encabezados de la Solicitud**

Incluye los siguientes encabezados.

<table><tbody><tr><td><code>Content-Type</code> : <code>application/json</code><br>Indica que los datos se envían en formato JSON.</td></tr><tr><td><code>Authorization Bearer token_de_acceso</code><br>Token de autenticación necesario para acceder al recurso. Ver <a href="https://developers.factus.com.co/autenticacion/auth" target="_blank">Cómo generar token</a></td></tr><tr><td><code>Accept</code> : <code>application/json</code><br>Indica que la respuesta debe estar en formato JSON.</td></tr></tbody></table>

``**Nota:** Reemplaza `token_de_acceso` con el token proporcionado tras autenticarte.``

* * *

### Estructura para crear la nota crédito

[Sección titulada «Estructura para crear la nota crédito»](https://developers.factus.com.co/notas-credito/descripcion-de-campos#estructura-para-crear-la-nota-cr%C3%A9dito)

Para crear una nota crédito debemos tener en cuenta los datos agrupados en 3 aspectos:

1. Datos generales de la nota crédito
2. Datos del cliente
3. Datos de los productos o servicios.

### Parámetros del Cuerpo (Body)

[Sección titulada «Parámetros del Cuerpo (Body)»](https://developers.factus.com.co/notas-credito/descripcion-de-campos#par%C3%A1metros-del-cuerpo-body)

El cuerpo (Body) de la solicitud debe enviarse en formato JSON y debe incluir los siguientes parámetros:

| Parámetros |
| --- |
| **`reference_code`** `string`
Código único que sirve para identificar cada nota crédito de manera unívoca en el sistema y garantizar que no haya duplicados. Esto nos ayuda a prevenir que se genere más de una nota crédito con la misma información. |
| **`correction_concept_code`** `string`
Código del concepto por el cual se genera la nota crédito. [Códigos de corrección disponibles.](https://developers.factus.com.co/tablas-de-referencia/tablas/#c%C3%B3digos-de-correcci%C3%B3n) |
| **`customization_id`** `string` `default:20` `opcional`
Código del tipo de operación de la nota crédito. Si no se envía, por defecto toma el valor de 20. [Códigos de tipos de operación disponibles.](https://developers.factus.com.co/tablas-de-referencia/tablas/#c%C3%B3digos-de-tipos-de-operaci%C3%B3n-notas-cr%C3%A9dito) |
| **`bill_id`** `integer`
ID de la factura a la que se le generará la nota crédito. Este campo es opcional únicamente cuando el campo \`customization\_id\` es 22 (Nota crédito sin referencia a una factura electrónica). |
| **`numbering_range_id`** `integer` `opcional`
ID del rango de numeración. Es obligatorio solo si tienes múltiples rangos activos. Si se omite, el sistema utilizará el único rango disponible por defecto. [Rangos de numeración.](https://developers.factus.com.co/rangos-de-numeracion/obtener-rangos) |
| **`observation`** `string` `opcional`
Agrega una observación a la nota crédito. No debe tener más de 250 caracteres. |
| **`payment_details`** `array`
Este es un array de objetos para los medios de pago. Se debe enviar un objeto por cada medio de pago utilizado para pagar la factura. |
| **`payment_details.*.payment_form`** `string`
Código de la forma de pago. [Formas de pago disponibles](https://developers.factus.com.co/tablas-de-referencia/tablas/#c%C3%B3digos-de-formas-de-pago) |
| **`payment_details.*.payment_method_code`** `string`
Código del método de pago. [Métodos de pago disponibles.](https://developers.factus.com.co/tablas-de-referencia/tablas/#c%C3%B3digos-de-m%C3%A9todos-de-pago) |
| **`payment_details.*.reference_code`** `string` `opcional`
Código de referencia del pago. |
| **`payment_details.*.amount`** `string`
Monto pagado por ese medio y metido de pago [Métodos de pago disponibles.](https://developers.factus.com.co/tablas-de-referencia/tablas/#c%C3%B3digos-de-m%C3%A9todos-de-pago) |
| **`payment_details.*due_date`** `string` `opcional`
Fecha de vencimiento de la factura en formato \`YYYY-MM-DD\`. Requerido solo cuando la forma de pago (\`payment\_form\`) contiene el valor de 2 (pago a crédito). |
| **`health`** `object` `opcional`
Objeto con los datos del sector salud. Obligatorio para SS-CUFE, SS-Reporte y SS-SinAporte. Si se envía, todos sus campos internos son obligatorios. |
| **`health.provider_code`** `string`
Código del prestador de servicios de salud (IPS/EPS). |
| **`health.payment_method_code`** `string`
Código del método de pago en salud. [Métodos de pago en salud disponibles.](https://developers.factus.com.co/tablas-de-referencia/tablas/#metodos-de-pago-en-salud) |
| **`health.coverage_code`** `string`
Código del plan de cobertura en salud. [Planes de cobertura disponibles.](https://developers.factus.com.co/tablas-de-referencia/tablas/#planes-de-cobertura-en-salud) |
| **`health.contract_number`** `string`
Número del contrato con la entidad pagadora. |
| **`health.policy_number`** `string` `opcional`
Número de póliza. Requerido cuando el plan de cobertura corresponde a una póliza (SOAT, ARL, etc.). |
| **`establishment`** `object` `opcional`
Este es un objeto que contendrá la información sobre el establecimiento. Úsalo cuando manejes más de un establecimiento y necesites que los datos correspondientes se reflejen en la nota crédito. Si envías el campo \`establishment\` los campos internos son obligatorios. |
| **`establishment.name`** `string`
Nombre del establecimiento. |
| **`establishment.email`** `string`
Correo electrónico del establecimiento. |
| **`establishment.address`** `string`
Dirección del establecimiento. |
| **`establishment.phone_number`** `string`
Número telefónico del establecimiento. |
| **`establishment.municipality_code`** `string`
Código que corresponda al municipio donde se encuentra el establecimiento. [Municipios disponibles.](https://developers.factus.com.co/tablas-de-referencia/municipios) |
| **`billing_period`** `object` `opcional`
Este es un objeto que contendrá la información del periodo de facturación. Es obligatorio cuando el campo \`customization\_id\` es 22 (Nota crédito sin referencia a una factura electrónica). Si envías el campo \`billing\_period\` los campos internos son obligatorios. |
| **`billing_period.start_date`** `string`
Fecha de inicio del periodo de facturación en formato \`YYYY-MM-DD\`. |
| **`billing_period.start_time`** `string`
Hora de inicio del periodo de facturación en formato \`HH:mm:ss\`. |
| **`billing_period.end_date`** `string`
Fecha de fin del periodo de facturación en formato \`YYYY-MM-DD\`. |
| **`billing_period.end_time`** `string`
Hora de fin del periodo de facturación en formato \`HH:mm:ss\`. |
| **`customer`** `object`
Este es un objeto que contendrá la información del cliente de la nota crédito. Si no se envían los datos del cliente, el API tomara los datos del cliente de la factura relacionada al campo \`bill\_id\` para generar la nota crédito. Si envías el campo \`customer\` los campos internos son obligatorios, excepto aquellos que se indican como opcionales. |
| **`customer.identification_document_code`** `string`
Código que corresponda al tipo de identificación. [Tipos de documentos disponibles.](https://developers.factus.com.co/tablas-de-referencia/tablas/#c%C3%B3digos-de-tipos-de-documentos-de-identidad) |
| **`customer.identification`** `string`
Número de identificación del cliente. |
| **`customer.dv`** `string` `opcional`
Dígito de verificación correspondiente al NIT del cliente.
El dígito de verificación se envía únicamente para clientes que se identifican con NIT.
Si el cliente se identifica con NIT y no se envía el dígito de verificación, el API lo calculará automáticamente. |
| **`customer.company`** `string` `opcional`
Razón social. Es obligatorio cuando el campo \`customer.legal\_organization\_code\` es 1 (persona jurídica). |
| **`customer.trade_name`** `string` `opcional`
Nombre comercial. |
| **`customer.names`** `string` `opcional`
Nombre del cliente. Es obligatorio cuando el campo \`customer.legal\_organization\_code\` es 2 (persona natural). |
| **`customer.address`** `string` `opcional`
Dirección del cliente. |
| **`customer.email`** `string` `opcional`
Correo electrónico del cliente. |
| **`customer.phone`** `string` `opcional`
Número de teléfono del cliente. |
| **`customer.legal_organization_code`** `string`
Código que corresponda al tipo de organización. [Tipos de organizaciones disponibles.](https://developers.factus.com.co/tablas-de-referencia/tablas/#c%C3%B3digo-de-tipos-de-organizaciones) |
| **`customer.tribute_code`** `string` `default:ZZ` `opcional`
Código del tributo. [Tipos de tributos disponibles.](https://developers.factus.com.co/tablas-de-referencia/tablas/#c%C3%B3digos-de-tributos-clientes) |
| **`customer.municipality_code`** `string` `opcional`
Código que corresponda al municipio donde vive el cliente. Se debe enviar el código del municipio únicamente si el municipio es de Colombia; si es extranjero, el valor del campo no aplica. [Municipios disponibles.](https://developers.factus.com.co/tablas-de-referencia/municipios) |
| **`items`** `array`
Este es un array de objetos (items) que corresponde a los productos o servicios de la nota crédito, se debe enviar un objeto por cada producto o servicio. |
| **`items.*.note`** `string`
Información adicional del producto o servicio. |
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
Código que corresponda a la unidad de medida del item. [Unidades de medida disponibles.](https://developers.factus.com.co/tablas-de-referencia/unit-measures/) |
| **`items.*.standard_code`** `string`
Código que corresponde al estándar que se adopta para los productos o servicios. [Códigos de estándar disponibles.](https://developers.factus.com.co/tablas-de-referencia/tablas/#c%C3%B3digos-de-est%C3%A1ndar-de-identificaci%C3%B3n-del-producto) |
| **`items.*.taxes`** `array`
Este es un array de objetos para los impuestos. |
| **`items.*.taxes.*.code`** `string`
Código del impuesto aplicado al producto o servicio. [Códigos de impuestos disponibles.](https://developers.factus.com.co/tablas-de-referencia/tablas/#c%C3%B3digos-de-impuestos) |
| **`items.*.taxes.*.rate`** `string`
Porcentaje del impuesto aplicado al producto o servicio (máximo dos decimales). |
| **`items.*.withholding_taxes`** `array` `opcional`
Este es un array de objetos (autorretenciones) para informar las retenciones en la fuente que se aplican al producto o servicio. Si envías el campo \`withholding\_taxes\` los campos internos son obligatorios. |
| **`items.*.withholding_taxes.*.code`** `string`
Código de la retención aplicada al producto o servicio. [Códigos retenciones disponibles.](https://developers.factus.com.co/tablas-de-referencia/tablas/#c%C3%B3digos-de-retenciones) |
| **`items.*.withholding_taxes.*.rate`** `string`
Porcentaje de la retención aplicada al producto o servicio (máximo dos decimales). |
| **`items.*.additional_properties`** `array` `opcional`
Este campo sirve para informar las operaciones efectuadas por el sector transporte de carga. Si envías el campo \`additional\_properties\` los campos internos son obligatorios. |
| **`items.*.additional_properties.*.code`** `string`
Código que identifica el tipo de operación efectuada por el sector transporte de carga. |
| **`items.*.additional_properties.*.value`** `string`
Valor de la característica que quiere informar del ítem. |
| **`items.*.additional_properties.*.quantity`** `string` `opcional`
Cantidad transportada. Este campo es obligatorio cuando el valor del campo \`items.additional\_properties.\*.code\` sea igual a 03. |
| **`items.*.additional_properties.*.unit_measure_code`** `string` `opcional`
Unidad de medida de la cantidad transportada. Este campo es obligatorio cuando el valor del campo \`items.additional\_properties.\*.code\` sea igual a 03. |
| **`allowance_charges`** `array` `opcional`
Este es un array de objetos que corresponden a los descuentos o recargos que se aplican a la nota crédito; se debe enviar un objeto por cada descuento o recargo. Si envías el campo \`allowance\_charges\` los campos internos son obligatorios. |
| **`allowance_charges.*.concept_type`** `string`
Código del tipo de descuento o recargo. [Códigos de conceptos disponibles.](https://developers.factus.com.co/tablas-de-referencia/tablas/#c%C3%B3digos-de-los-recargos-y-descuentos) |
| **`allowance_charges.*.is_surcharge`** `boolean`
Indica si es un descuento o un recargo. El valor \`true\` corresponde a un recargo y \`false\` a un descuento. |
| **`allowance_charges.*.reason`** `string`
Razón por la cual se está haciendo el descuento o recargo. |
| **`allowance_charges.*.base_amount`** `string`
Base sobre la cual se calcula el descuento o recargo (máximo dos decimales). |
| **`allowance_charges.*.amount`** `string`
Valor del descuento o recargo aplicado (máximo dos decimales). |

El (\*) al lado del nombre de un campo indica que se pueden enviar múltiples objetos con esa estructura dentro del array, por ejemplo, en el caso del campo `items`, se debe enviar un objeto por cada producto o servicio que se quiera incluir en la nota crédito.
