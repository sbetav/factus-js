# Campos documentos soporte

Esta sección describe los campos que puede contener el documento soporte.

**Método:** POST

#### **Endpoint**

* [Sandbox](https://developers.factus.com.co/documentos-soporte/descripcion-de-campos#tab-panel-322)
* [Producción](https://developers.factus.com.co/documentos-soporte/descripcion-de-campos#tab-panel-323)

```
https://api-sandbox.factus.com.co/v2/support-documents/validate
```

### **Encabezados de la Solicitud**

Incluye los siguientes encabezados.

<table><tbody><tr><td><code>Content-Type</code> : <code>application/json</code><br>Indica que los datos se envían en formato JSON.</td></tr><tr><td><code>Authorization Bearer token_de_acceso</code><br>Token de autenticación necesario para acceder al recurso. Ver <a href="https://developers.factus.com.co/autenticacion/auth" target="_blank">Cómo generar token</a></td></tr><tr><td><code>Accept</code> : <code>application/json</code><br>Indica que la respuesta debe estar en formato JSON.</td></tr></tbody></table>

``**Nota:** Reemplaza `token_de_acceso` con el token proporcionado tras autenticarte.``

* * *

### Estructura para crear el documento soporte

[Sección titulada «Estructura para crear el documento soporte»](https://developers.factus.com.co/documentos-soporte/descripcion-de-campos#estructura-para-crear-el-documento-soporte)

Para crear un documento soporte debemos tener en cuenta los datos agrupados en 3 aspectos:

1. Datos generales del documento soporte
2. Datos del proveedor
3. Datos de los productos o servicios.

### Parámetros del Cuerpo (Body)

[Sección titulada «Parámetros del Cuerpo (Body)»](https://developers.factus.com.co/documentos-soporte/descripcion-de-campos#par%C3%A1metros-del-cuerpo-body)

El cuerpo (Body) de la solicitud debe enviarse en formato JSON y debe incluir los siguientes parámetros:

| Parámetros para creación de documento soporte |
| --- |
| **`reference_code`** `string`
Código único que sirve para identificar cada documento soporte de manera unívoca en el sistema y garantizar que no haya duplicados. Esto nos ayuda a prevenir que se genere más de un documento soporte con la misma información. |
| **`numbering_range_id`** `integer` `opcional`
ID del rango de numeración. Es obligatorio solo si tienes múltiples rangos activos. Si se omite, el sistema utilizará el único rango disponible por defecto. [Rangos de numeración para documento soporte](https://developers.factus.com.co/rangos-de-numeracion/obtener-rangos) , filtar por filter\[document\] = 24 para obtener solo los rangos de numeración para documentos soporte. |
| **`created_time`** `string` `opcional`
Fecha y hora de creación del documento soporte en formato `HH:mm:ss`. |
| **`observation`** `string` `opcional`
Agrega una observación del documento soporte. No debe tener más de 250 caracteres. |
| **`payment_details`** `array`
Este es un array de objetos para los medios de pago. Se debe enviar un objeto por cada medio de pago utilizado para pagar el documento soporte. |
| **`payment_details.*.payment_form`** `string`
Código de la forma de pago. [Formas de pago disponibles](https://developers.factus.com.co/tablas-de-referencia/tablas/#c%C3%B3digos-de-formas-de-pago) |
| **`payment_details.*.payment_method_code`** `string`
Código del método de pago. [Métodos de pago disponibles.](https://developers.factus.com.co/tablas-de-referencia/tablas/#c%C3%B3digos-de-m%C3%A9todos-de-pago) |
| **`payment_details.*.reference_code`** `string` `opcional`
Código de referencia del pago. |
| **`payment_details.*.amount`** `string`
Monto pagado por ese medio y método de pago. |
| **`payment_details.*.due_date`** `string` `opcional`
Fecha de vencimiento del documento soporte, en formato `YYYY-MM-DD`. Requerido solo cuando la forma de pago (`payment_form`) contiene el valor de 2 (pago a crédito). |
| **`cash_rounding_amount`** `string` `opcional`
Ajuste opcional que reconcilia la diferencia entre la suma de los montos en `⁠payment_details` y el `total` del documento soporte, causada por las limitaciones de denominación de la moneda local. Acepta valores negativos (redondeo hacia abajo) o positivos (redondeo hacia arriba). El valor máximo permitido es ±500.00. |
| **`establishment`** `object` `opcional`
Este es un objeto que contendrá la información sobre el establecimiento. Úsalo cuando manejes más de un establecimiento y necesites que los datos correspondientes se reflejen en el documento soporte. Si envías el campo `establishment` los campos internos son obligatorios. |
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
| **`provider`** `object`
Este es un objeto que contendrá la información del proveedor del documento soporte. |
| **`provider.identification_document_code`** `string`
Código que corresponde al tipo de identificación. [Tipos de documentos de identidad disponibles](https://developers.factus.com.co/tablas-de-referencia/tablas/#c%C3%B3digos-de-tipos-de-documentos-de-identidad-para-documentos-soporte-y-notas-de-ajuste) |
| **`provider.identification`** `string`
Número de identificación del proveedor. |
| **`provider.dv`** `string` `opcional`
Dígito de verificación del proveedor. Requerido ya que el proveedor debe identificarse con NIT, sin embargo, si no se envía el API lo calcula automáticamente. |
| **`provider.trade_name`** `string` `opcional`
Nombre comercial del proveedor. |
| **`provider.names`** `string`
Nombre del proveedor. |
| **`provider.address`** `string`
Dirección del proveedor. |
| **`provider.country_code`** `string`
Código del país del proveedor. [Países disponibles](https://developers.factus.com.co/tablas-de-referencia/countries) |
| **`provider.municipality_code`** `string`
Código del municipio del proveedor. [Municipios disponibles](https://developers.factus.com.co/tablas-de-referencia/municipios) |
| **`provider.email`** `string` `opcional`
Dirección del correo electrónico del proveedor. |
| **`provider.phone`** `string` `opcional`
Número de teléfono del proveedor. |
| **`items`** `array`
Este es un array de objetos (items) que corresponde a los productos o servicios del documento soporte, se debe enviar un objeto por cada producto o servicio. |
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
| **`items.*.withholding_taxes`** `array` `opcional`
Este es un array de objetos para informar las retenciones que se aplican al producto o servicio. Por cada retención que apliques al proveedor, debes enviar un objeto. |
| **`items.*.withholding_taxes.*.code`** `string`
Código de la retención aplicada al producto o servicio. [Códigos retenciones disponibles.](https://developers.factus.com.co/tablas-de-referencia/tablas/#c%C3%B3digos-de-retenciones) |
| **`items.*.withholding_taxes.*.rate`** `string`
Porcentaje de la retención aplicada al producto o servicio (máximo dos decimales). |
| **`items.*.taxes`** `array`
Este es un array de objetos para los impuestos. |
| **`items.*.taxes.*.code`** `string`
Código del impuesto aplicado al producto o servicio, para documento soporte debe ser `01` correspondiente al impuesto sobre la ventas - IVA. |
| **`items.*.taxes.*.rate`** `string`
Porcentaje del impuesto aplicado al producto o servicio (máximo dos decimales). |
| **`items.*.taxes.*.is_excluded`** `boolean` `opcional`
Indica si el ítem está excluido de impuestos. Valor: `true` o `false`. |

El (\*) al lado del nombre de un campo indica que se pueden enviar múltiples objetos con esa estructura dentro del array, por ejemplo, en el caso del campo `items`, se debe enviar un objeto por cada producto o servicio que se quiera incluir en la nota crédito.
