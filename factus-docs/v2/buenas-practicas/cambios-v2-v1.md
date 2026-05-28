# Cambios de V1 a V2

Este documento proporciona una guía detallada para los desarrolladores que están migrando de la versión 1 a la versión 2 o estén integrando la versión 2 de nuestra API Factus. A continuación, se destacan los cambios clave tanto en campos como en endpoints y nuevas tablas de referencia.

* * *

##### Métodos de pago:

[Sección titulada «Métodos de pago:»](https://developers.factus.com.co/buenas-practicas/cambios-v2-v1#m%C3%A9todos-de-pago)

`payment_details` Hemos actualizado el campo de métodos de pago, pasamos de manejar un id indicando un solo metodo de pago y forma de pago `payment_method_code` - `payment_form` a manejar un array de objetos con los detalles de cada método de pago `payment_details`, en el cual incluimos los dos campos, permitiendo así múltiples métodos de pago en una sola factura. Ver todos los métodos de pago disponibles: [Métodos de pago disponibles.](https://developers.factus.com.co/tablas-de-referencia/tablas/#c%C3%B3digos-de-m%C3%A9todos-de-pago)

payment\_details

```
{ "payment_form": "2", "payment_method_code" : "10", "payment_details": [ { "payment_form": "2", "payment_method_code": "10", "reference_code": "pago-001", "amount": "50000", "due_date": "2026-03-25" } ]}
```

* * *

##### Redondeo de valores para medio de pago:

[Sección titulada «Redondeo de valores para medio de pago:»](https://developers.factus.com.co/buenas-practicas/cambios-v2-v1#redondeo-de-valores-para-medio-de-pago)

`cash_rounding_amount` Agregamos un nuevo campo para el ajuste opcional que reconcilia la diferencia entre la suma de los montos en `⁠payment_details` y el `total` de la factura, causada por las limitaciones de denominación de la moneda local. Acepta valores negativos (redondeo hacia abajo) o positivos (redondeo hacia arriba). El valor máximo permitido es ±500.00.

* * *

cash\_rounding\_amount

```
{ "cash_rounding_amount" : "0.00",}
```

* * *

##### Anticipos:

[Sección titulada «Anticipos:»](https://developers.factus.com.co/buenas-practicas/cambios-v2-v1#anticipos)

`prepayment_details` Agregamos este nuevo campo para manejar los anticipos de manera estructurada, permitiendo múltiples anticipos en una sola factura.

prepayment\_details

```
{ "prepayment_details": [ { "prepayment_form": "2", "prepayment_method_code": "10", "reference_code": "anticipo-001", "amount": "50000", "due_date": "2026-03-25" } ]}
```

* * *

##### Clientes:

[Sección titulada «Clientes:»](https://developers.factus.com.co/buenas-practicas/cambios-v2-v1#clientes)

`customer.identification_document_code` En el objeto de clientes hemos modificado el nombre del campo de tipo de identificación, en la v1 se manejaba con el nombre `identification_document_id` y ahora en la v2 se maneja con el nombre `identification_document_code`, el valor se ha modificado de id por código, que representa el tipo de identificación del cliente. Puede ver los tipos de identificación en [Tipos de documentos disponibles.](https://developers.factus.com.co/tablas-de-referencia/tablas/#c%C3%B3digos-de-tipos-de-documentos-de-identidad)

customer.identification\_document\_code

```
{ "customer": { "identification_document_id": 3, "identification_document_code": "13", }}
```

* * *

`customer.legal_organization_code` En el objeto de clientes hemos modificado el nombre del campo de tipo de organización del cliente, en la v1 se manejaba con el nombre `legal_organization_id` y ahora en la v2 se maneja con el nombre `legal_organization_code`, el valor se ha modificado de id por código, que representa el tipo de organización del cliente. Puede ver los tipos de organización en [Tipos de organizaciones disponibles.](https://developers.factus.com.co/tablas-de-referencia/tablas/#c%C3%B3digo-de-tipos-de-organizaciones)

customer.legal\_organization\_code

```
{ "customer": { "legal_organization_id": "01", "legal_organization_code": "1", }}
```

* * *

`customer.tribute_code` En el objeto de clientes hemos modificado el nombre del campo de tipo de tributo para clientes, en la v1 se manejaba con el nombre `tribute_id` y ahora en la v2 se maneja con el nombre `tribute_code`. Puede ver los tipos de tributos en [Tipos de tributos disponibles.](https://developers.factus.com.co/tablas-de-referencia/tablas/#c%C3%B3digos-de-tributos-clientes)

customer.tribute\_code

```
{ "customer": { "tribute_id": 3, "tribute_code": "01", }}
```

* * *

`customer.municipality_code` En el objeto de clientes hemos modificado el nombre del campo de código de municipio del cliente, pasamos de usar el nombre `municipality_id` a `municipality_code`, el valor se ha modificado de id por código, que representa el municipio del cliente.

Novedad Anteriormente en la v1 se consumía un endpoint para obtener el id del municipio, ahora en la v2 damos acceso al json con el listado completo de municipios para que el integrador pueda hacer la relación directamente entre el código del municipio y su nombre, sin necesidad de consumir un endpoint adicional. [Municipios disponibles.](https://developers.factus.com.co/tablas-de-referencia/municipios)

customer.municipality\_code

```
{ "customer": { "municipality_id": "980", "municipality_code": "1", }}
```

##### Productos (items):

[Sección titulada «Productos (items):»](https://developers.factus.com.co/buenas-practicas/cambios-v2-v1#productos-items)

* Uno de los cambios más significativos en la v2, tenemos modificaciones en varios campos como lo son el precio, unidad de medida, standar code, impuestos y autoretenciones.

* * *

`items.price` En la v2 el campo de precio se maneja como un valor neto, es decir, sin impuestos incluidos. En la v1 se manejaba como un valor bruto con impuestos incluidos.

items.price

```
{ "items": [ { "price": 100000,// V2: precio neto sin impuestos incluidos } ]}
```

* * *

`items.unit_measure_code` En el objeto de items hemos modificado el nombre del campo de unidad de medida, en la v1 se manejaba con el nombre `unit_measure_id` y ahora en la v2 se maneja con el nombre `unit_measure_code`.

Novedad Anteriormente en la v1 se consumía un endpoint para obtener el id de la unidad de medida, ahora en la v2 damos acceso al json con el listado completo de unidades de medida para que el integrador pueda hacer la relación directamente entre el código de la unidad de medida y su descripción, sin necesidad de consumir un endpoint adicional. [Unidades de medida disponibles](https://developers.factus.com.co/tablas-de-referencia/unit-measures/)

items.unit\_measure\_code

```
{ "items": [ { "unit_measure_id": "01", "unit_measure_code": "1", } ]}
```

* * *

`items.standard_code` En el objeto de items hemos modificado el nombre del campo de código estándar, en la v1 se manejaba con el nombre `standard_id` y ahora en la v2 se maneja con el nombre `standard_code`, puede ver los códigos estándar en [Códigos de estándar disponibles.](https://developers.factus.com.co/tablas-de-referencia/tablas/#c%C3%B3digos-de-est%C3%A1ndar-de-identificaci%C3%B3n-del-producto)

items.standard\_code

```
{ "items": [ { "standard_id": "01", "standard_code": "999", } ]}
```

* * *

`items.taxes` En el objeto de items hemos modificado el campo tax\_rate, en la v1 se manejaba como un valor numérico representando el porcentaje del impuesto, ahora en la v2 se maneja como un array de objetos para el manejo de múltiples impuestos por item, cada objeto contiene el código del impuesto y su respectiva tarifa.

Novedad Anteriormente en la v1 se consumía un endpoint para obtener el id del tributo, ahora en la v2 damos acceso a una tabla con el listado completo de tributos para que el integrador pueda hacer la relación directamente entre el código del tributo y su descripción, sin necesidad de consumir un endpoint adicional. Puede ver los tipos de impuestos en [Códigos de impuestos disponibles.](https://developers.factus.com.co/tablas-de-referencia/tablas/#c%C3%B3digos-de-impuestos)

items.taxes

```
{ "items": [ { "tax_rate": 19, "tribute_id": 1, "taxes": [ { "code": "01", "rate": 19 } ] } ]}
```

Si un item es excluido de impuestos, se debe enviar is\_excluded = true en el objeto taxes del item.

items.taxes.is\_excluded

```
{ "items": [ { "taxes": [ { "is_excluded": true, } ] } ]}
```

* * *

`items.withholding_taxes` En el objeto de items hemos modificado la forma de consumir las autoretenciones, en la v1 se manejaba consumiendo un endpoint para obtener el código correspondiente a la autoretención, ahora en la v2 damos acceso a una tabla con el listado completo de autoretenciones para que el integrador pueda hacer la relación directamente entre el código de la autoretención y su descripción, sin necesidad de consumir un endpoint adicional.

Novedad Puede ver los tipos de autoretenciones en [Códigos de retenciones disponibles.](https://developers.factus.com.co/tablas-de-referencia/tablas/#c%C3%B3digos-de-retenciones)

Además se modificó el campo `withholding_tax_rate` por `rate`.

withholding\_taxes.rate

```
{ "withholding_taxes": [ { "code": "05", "withholding_tax_rate": "15.00", "rate": "15.00" } ]}
```
