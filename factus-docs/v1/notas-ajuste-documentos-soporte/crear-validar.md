# Crear y validar

Este contenido es para V1. Cambia a la [versión más reciente](https://developers.factus.com.co/) para ver la documentación actualizada.

**Método:** POST

#### **Endpoint**

* [Pruebas](https://developers.factus.com.co/v1/notas-ajuste-documentos-soporte/crear-validar#tab-panel-214)
* [Producción](https://developers.factus.com.co/v1/notas-ajuste-documentos-soporte/crear-validar#tab-panel-215)

```
https://api-sandbox.factus.com.co/v1/adjustment-notes/validate
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

### Endpoints para datos de nota de ajuste a documentos soporte

[Sección titulada «Endpoints para datos de nota de ajuste a documentos soporte»](https://developers.factus.com.co/v1/notas-ajuste-documentos-soporte/crear-validar#endpoints-para-datos-de-nota-de-ajuste-a-documentos-soporte)

Factus ofrece una serie de endpoints de apoyo diseñados para simplificar el proceso de creación de la nota de ajuste a documentos soporte. Estos datos son de uso recurrente y, dado que rara vez se actualizan, se recomienda almacenarlos de manera persistente en su sistema. Esto no solo evita consultas repetitivas, sino que también mejora significativamente los tiempos de respuesta. Sin embargo, si opta por consultarlos dinámicamente, es importante evaluar el impacto en el rendimiento del sistema.

* **[Rangos de numeración](https://developers.factus.com.co/v1/rangos-de-numeracion/obtener-rangos)**
* **[Tributos](https://developers.factus.com.co/v1/tributos/tributos-de-productos)**
* **[Unidades de medida](https://developers.factus.com.co/v1/unidades-de-medida/obtener-unidades)**

**Nota:** Para el rango de numeración es necesario seleccionar el id del rango correspondiente a notas de ajuste a documentos soporte y que el campo is\_active sea 1 (activo)

* * *

### Estructura para crear la nota de ajuste a documento soporte

[Sección titulada «Estructura para crear la nota de ajuste a documento soporte»](https://developers.factus.com.co/v1/notas-ajuste-documentos-soporte/crear-validar#estructura-para-crear-la-nota-de-ajuste-a-documento-soporte)

Para crear una nota de ajuste a documento soporte en Factus API debemos tener en cuenta los siguientes datos:

1. Datos generales del documento soporte.
2. Datos del documento que al cual se le hará la nota de ajuste.
3. Datos de los productos o servicios.

### Parámetros del Cuerpo (Body)

[Sección titulada «Parámetros del Cuerpo (Body)»](https://developers.factus.com.co/v1/notas-ajuste-documentos-soporte/crear-validar#par%C3%A1metros-del-cuerpo-body)

El cuerpo (Body) de la solicitud debe enviarse en formato JSON y debe incluir los siguientes parámetros:

# Descripción del body

[Sección titulada «Descripción del body»](https://developers.factus.com.co/v1/notas-ajuste-documentos-soporte/crear-validar#descripci%C3%B3n-del-body)

| ID | Descripción |
| --- | --- |
| `reference_code` | Código único que sirve para identificar cada documento soporte de manera unívoca en el sistema y garantizar que no haya duplicados. Esto nos ayuda a prevenir que se genere más de un documento soporte con la misma información. |
| `numbering_range_id` | ID del rango de numeración. Para conocer el ID de cada rango de numeración, consulta el siguiente endpoint: [rangos de numeración](https://developers.factus.com.co/v1/rangos-de-numeracion/obtener-rangos) . Si en la API solo hay un rango de numeración activo para los documentos soporte, este campo es opcional. En caso de no enviarlo, la API utilizará automáticamente el único rango activo. Si existen múltiples rangos de numeración para los documentos soporte, este campo es obligatorio. |
| `payment_method_code` | _(Opcional)_ Código del método de pago. Si el medio de pago no se agrega, por defecto la API agrega el código `10` (efectivo). Para saber cuál es el código de cada método de pago, consulte la siguiente tabla: [Métodos de pago](https://developers.factus.com.co/v1/tablas-de-referencia/tablas/#c%C3%B3digos-de-m%C3%A9todos-de-pago) . |
| `support_document_id` | ID del documento soporte al que se le hará la nota de ajuste. |
| `correction_concept_code` | Código del motivo por el cual se genera la nota de ajuste. Para conocer el código de cada motivo, consulte el siguiente endpoint: [Motivos para la generación de las notas de ajuste](https://developers.factus.com.co/v1/tablas-de-referencia/tablas/#motivos-para-la-generaci%C3%B3n-de-notas-de-ajuste) . |
| `observation` | Agrega una observación. No debe tener más de 250 caracteres. |
| `items{}` | _(Array)_ Corresponde a los productos o servicios del documento soporte. Se debe enviar un objeto por cada producto o servicio. |
| `item.*.code_reference` | Código de referencia del producto o servicio. |
| `item.*.name` | Nombre del producto o servicio. |
| `item.*.quantity` | Cantidad del producto o servicio. Debe ser un número entero. |
| `item.*.discount_rate` | Porcentaje del descuento del producto o servicio. |
| `item.*.price` | Precio del producto o servicio. |
| `item.*.unit_measure_id` | ID que corresponda a la unidad de medida del item. Para saber qué ID corresponde a cada unidad de medida, consulte el siguiente endpoint: [Unidades de medida](https://developers.factus.com.co/v1/unidades-de-medida/obtener-unidades) . |
| `item.*.standard_code_id` | ID que corresponde al código de estándar adoptado para los productos o servicios. Para saber qué ID corresponde al código de estándar, consulte la siguiente tabla: [IDs de códigos de estándar](https://developers.factus.com.co/v1/tablas-de-referencia/tablas/#ids-de-est%C3%A1ndar-de-identificaci%C3%B3n-del-producto) . |
| `items.*withholding_taxes[]` | _(Opcional)_ Array de objetos (autorretenciones) Este campo sirve para informar las retenciones en la fuente que se aplican al producto o servicio.
No son retenciones que otra persona o empresa te hace a ti, sino retenciones que tú mismo te aplicas como contribuyente.
Por cada retención que te apliques a ti mismo, debes enviar un objeto. |
| `items.*.withholding_taxes.*.code` | Código de la retención aplicada al producto o servicio. Para saber el código de la retención, consulte el siguiente endpoint: [Tributos de productos](https://developers.factus.com.co/v1/tributos/tributos-de-productos/) . |
| `items.*.withholding_taxes.*.withhoding_tax_rate` | Porcentaje de la retención aplicada al item. |

### Ejemplo de Solicitud

[Sección titulada «Ejemplo de Solicitud»](https://developers.factus.com.co/v1/notas-ajuste-documentos-soporte/crear-validar#ejemplo-de-solicitud)

Aquí tienes un ejemplo de cómo debería quedar el cuerpo de la solicitud en formato JSON:

* [201 - Nota de ajuste a documento Soporte](https://developers.factus.com.co/v1/notas-ajuste-documentos-soporte/crear-validar#tab-panel-216)

```
{ "reference_code": "AN-2026-v2-0005", "support_document_number": "SEDS984000129", "correction_concept_code": "2", "created_time": "15:26:00", "payment_details": [ { "payment_form": "1", "payment_method_code": "42", "reference_code": "pago-001", "amount": "60000.00" }, { "payment_form": "1", "payment_method_code": "10", "reference_code": "pago-002", "amount": "59000.00" } ], "provider": { "identification_document_code": "31", "identification": "2343543", "dv": "7", "names": "Pepito Perez", "address": "calle 4", "country_code": "CO", "municipality_code": "68679" }, "items": [ { "code_reference": "12345", "name": "producto de prueba", "quantity": "2.00", "discount_rate": "0.00", "price": "50000.00", "unit_measure_code": "94", "standard_code": "999", "withholding_taxes": [ { "code": "06", "rate": "3.50" } ], "taxes": [ { "code": "01", "rate": "19.00" } ] } ]}
```

### Ejemplo de respuesta

[Sección titulada «Ejemplo de respuesta»](https://developers.factus.com.co/v1/notas-ajuste-documentos-soporte/crear-validar#ejemplo-de-respuesta)

* [201 - Nota de ajuste a documento Soporte](https://developers.factus.com.co/v1/notas-ajuste-documentos-soporte/crear-validar#tab-panel-217)
* [Status 409](https://developers.factus.com.co/v1/notas-ajuste-documentos-soporte/crear-validar#tab-panel-218)
* [Status 422](https://developers.factus.com.co/v1/notas-ajuste-documentos-soporte/crear-validar#tab-panel-219)

```
{ "status": "Created", "message": "Documento con el código de referencia 2fca4b6c-638c-4bd9-bbb2-7981f99a05ba registrado y validado con éxito", "data": { "reference_code": "2fca4b6c-638c-4bd9-bbb2-7981f99a05ba", "number": "NA1", "payment_details": [ { "payment_form": { "code": "1", "name": "Pago de contado" }, "payment_method": { "code": "42", "name": "Consignación" }, "reference_code": "pago-002", "amount": "100000.00", "due_date": null } ], "correction_concept": { "code": "5", "name": "Otros" }, "is_validated": true, "validated_at": "06-05-2026 11:44:12 AM", "errors": [ "Regla: NSAX04, Notificación: No se encuentra el grupo TaxSubtotal", "Regla: NSAJ44b, Notificación: Nit o Documento de Identificación informado No corresponde al registrado en el RUT con respecto a la razón social o nombre comercial suministrado.", "Regla: NSAJ43b, Notificación: Nombre informado No corresponde al registrado en el RUT con respecto al Nit suminstrado." ], "observation": null, "created_at": "06-05-2026 11:44:11 AM", "company": { "url_logo": "https://api-sandbox.factus.com.co/storage/images/logos/T3RWMJn0HDi6Uy4UTIOpi2vqw4qbEumeFiB5kt21.png", "nit": "1000789002", "dv": "2", "economic_activity": "1084", "establishment": { "name": "FACTUS V2", "address": "calle 11 8 84", "phone_number": "3161331234", "email": "[email protected]", "municipality": { "code": "68679", "name": "San Gil", "department": { "code": "68", "name": "Santander" } } } }, "provider": { "identification_document": { "code": "31", "name": "NIT" }, "identification": "2343543", "dv": "7", "graphic_representation_name": "Pepito Perez", "trade_name": null, "names": "Pepito Perez", "address": "calle 4", "email": null, "phone": null, "legal_organization": { "code": "2", "name": "Persona Natural" }, "tribute": { "code": "ZZ", "name": "No aplica" }, "municipality": { "code": "68679", "name": "San Gil", "department": { "code": "68", "name": "Santander" } } }, "items": [ { "code_reference": "12345", "name": "producto de prueba", "quantity": "2.00", "unit_measure": { "code": "94", "name": "unidad" }, "standard_code": { "code": "999", "name": "Estándar de adopción del contribuyente" }, "discount_rate": "0.00", "discount": "0.00", "gross_value": "50000.00", "withholding_taxes": [ { "tribute_code": "06", "name": "ReteRenta", "value": "3500.00", "rates": [ { "code": "06", "name": "ReteRenta", "rate": "3.50" } ] } ], "price": "50000.00", "total": "100000.00" } ], "withholding_taxes": [ { "tribute_code": "06", "name": "ReteRenta", "value": "3500.00" } ], "totals": { "gross_amount": "100000.00", "total": "100000.00" }, "cuds": "8cd9bd7c00cbcb0c9cc9e4299eb605efc324a2748d12abc10201bc043ed5446465abe9c94e9bd4479bb7cd09c1fcc651", "support_document": { "reference_code": "0e3579fa-207b-4d23-8858-465022677321", "number": "SEDS984000004", "cuds": "174d8d1a07a4d03bfd5c4cc6ddfc7b8abd247f959530b0fb4b9906e6eb3ed77f0918b2ea944806018168d57a7740c046" }, "links": { "qr": "https://catalogo-vpfe-hab.dian.gov.co/document/searchqr?documentkey=8cd9bd7c00cbcb0c9cc9e4299eb605efc324a2748d12abc10201bc043ed5446465abe9c94e9bd4479bb7cd09c1fcc651" } }}
```
