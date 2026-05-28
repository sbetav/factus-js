# Crear Documento Soporte

Este contenido es para V1. Cambia a la [versión más reciente](https://developers.factus.com.co/) para ver la documentación actualizada.

**Método:** POST

#### **Endpoint**

* [Pruebas](https://developers.factus.com.co/v1/documentos-soporte/crear-validar#tab-panel-154)
* [Producción](https://developers.factus.com.co/v1/documentos-soporte/crear-validar#tab-panel-155)

```
https://api-sandbox.factus.com.co/v1/support-documents/validate
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

### Endpoints para Datos de documentos soporte

[Sección titulada «Endpoints para Datos de documentos soporte»](https://developers.factus.com.co/v1/documentos-soporte/crear-validar#endpoints-para-datos-de-documentos-soporte)

Factus ofrece una serie de endpoints de apoyo diseñados para simplificar el proceso de creación de documentos soporte. Estos datos son de uso recurrente y, dado que rara vez se actualizan, se recomienda almacenarlos de manera persistente en su sistema. Esto no solo evita consultas repetitivas, sino que también mejora significativamente los tiempos de respuesta. Sin embargo, si opta por consultarlos dinámicamente, es importante evaluar el impacto en el rendimiento del sistema.

* **[Rangos de numeración](https://developers.factus.com.co/v1/rangos-de-numeracion/obtener-rangos)**
* **[Municipios](https://developers.factus.com.co/v1/municipios/obtener-municipios)**
* **[Tributos](https://developers.factus.com.co/v1/tributos/tributos-de-productos)**
* **[Unidades de medida](https://developers.factus.com.co/v1/unidades-de-medida/obtener-unidades)**
* **[Paises](https://developers.factus.com.co/v1/paises/obtener-paises/)**

**Nota:** Para el rango de numeración es necesario seleccionar el id del rango correspondiente a documentos soporte y que el campo is\_active sea 1 (activo)

* * *

### Estructura para crear el documento soporte

[Sección titulada «Estructura para crear el documento soporte»](https://developers.factus.com.co/v1/documentos-soporte/crear-validar#estructura-para-crear-el-documento-soporte)

Para crear un documento soporte en Factus API debemos tener en cuenta los datos agrupados en 3 aspectos:

1. Datos generales del documento soporte
2. Datos del proveedor
3. Datos de los productos o servicios.

### Parámetros del Cuerpo (Body)

[Sección titulada «Parámetros del Cuerpo (Body)»](https://developers.factus.com.co/v1/documentos-soporte/crear-validar#par%C3%A1metros-del-cuerpo-body)

El cuerpo (Body) de la solicitud debe enviarse en formato JSON y debe incluir los siguientes parámetros:

# Descripción del body

[Sección titulada «Descripción del body»](https://developers.factus.com.co/v1/documentos-soporte/crear-validar#descripci%C3%B3n-del-body)

| ID/Valor Descripción |
| --- |
| `reference_code`
Código único que sirve para identificar cada documento soporte de manera unívoca en el sistema y garantizar que no haya duplicados. Esto nos ayuda a prevenir que se genere más de un documento soporte con la misma información. |
| `numbering_range_id`
ID del rango de numeración. Para conocer el ID de cada rango de numeración, consulta el siguiente endpoint: [rangos de numeración](https://developers.factus.com.co/v1/rangos-de-numeracion/obtener-rangos) . Si en la API solo hay un rango de numeración activo para los documentos soporte, este campo es opcional. En caso de no enviarlo, la API utilizará automáticamente el único rango activo. Si existen múltiples rangos de numeración para los documentos soporte, este campo es obligatorio. |
| `payment_method_code`
_(Opcional)_ Código del método de pago. Si el medio de pago no se agrega, por defecto la API agrega el código `10` (efectivo). Para saber cuál es el código de cada método de pago, consulte la siguiente tabla: [Métodos de pago](https://developers.factus.com.co/v1/tablas-de-referencia/tablas/#c%C3%B3digos-de-m%C3%A9todos-de-pago) . |
| `observation`
Agrega una observación. No debe tener más de 250 caracteres. |
| `provider{}`
Este es un objeto que contendrá la información del proveedor del bien o servicio del documento soporte. |
| `provider.identification_document_id`
ID que corresponda al tipo de identificación. Para saber cuál ID corresponde al tipo de identificación, consulte la siguiente tabla: [IDs tipos de documentos](https://developers.factus.com.co/v1/tablas-de-referencia/tablas/#ids-de-tipos-de-documentos-de-identidad) . |
| `provider.identification`
Número de identificación del proveedor. |
| `provider.dv`
_(Opcional)_ Dígito de verificación del proveedor. Requerido si el proveedor se identifica con NIT. |
| `provider.trade_name`
_(Opcional)_ Nombre comercial. |
| `provider.names`
Nombre del proveedor. |
| `provider.address`
Dirección del proveedor. |
| `provider.email`
Dirección del correo electrónico del proveedor. |
| `provider.phone`
_(Opcional)_ Número de teléfono del proveedor. |
| `is_resident`
Indica si el proveedor es residente en Colombia. |
| `provider.country_code`
Código del país donde reside el proveedor. Para saber cuál código corresponde a cada país, consulte el siguiente endpoint: [Países](https://developers.factus.com.co/v1/paises/obtener-paises/) . |
| `provider.municipality_id`
_(Opcional)_ ID que corresponda al municipio donde reside el proveedor. Para saber cuál ID corresponde al municipio, consulte el siguiente endpoint: [Municipios](https://developers.factus.com.co/v1/municipios/obtener-municipios) . **Nota:** Se debe enviar ID del municipio únicamente si el campo `provider.country_code` es igual a `CO`, de lo contrario, este campo es opcional. |
| `items{}`
_(Array)_ Corresponde a los productos o servicios del documento soporte. Se debe enviar un objeto por cada producto o servicio. |
| `item.*.code_reference`
Código de referencia del producto o servicio. |
| `item.*.name`
Nombre del producto o servicio. |
| `item.*.quantity`
Cantidad del producto o servicio. Debe ser un número entero. |
| `item.*.discount_rate`
Porcentaje del descuento del producto o servicio. |
| `item.*.price`
Precio del producto o servicio. |
| `item.*.unit_measure_id`
ID que corresponda a la unidad de medida del item. Para saber qué ID corresponde a cada unidad de medida, consulte el siguiente endpoint: [Unidades de medida](https://developers.factus.com.co/v1/unidades-de-medida/obtener-unidades) . |
| `item.*.standard_code_id`
ID que corresponde al código de estándar adoptado para los productos o servicios. Para saber qué ID corresponde al código de estándar, consulte la siguiente tabla: [IDs de códigos de estándar](https://developers.factus.com.co/v1/tablas-de-referencia/tablas/#ids-de-est%C3%A1ndar-de-identificaci%C3%B3n-del-producto) . |
| `items.*withholding_taxes[]`
_\`(Opcional)_ Array de objetos (autorretenciones) Este campo sirve para informar las retenciones en la fuente que se aplican al producto o servicio.
No son retenciones que otra persona o empresa te hace a ti, sino retenciones que tú mismo te aplicas como contribuyente.
Por cada retención que te apliques a ti mismo, debes enviar un objeto. |
| `items.*.withholding_taxes.*.code`
Código de la retención aplicada al producto o servicio. Para saber el código de la retención, consulte el siguiente endpoint: [Tributos de productos](https://developers.factus.com.co/v1/tributos/tributos-de-productos/) . |
| `items.*.withholding_taxes.*.withhoding_tax_rate`
Porcentaje de la retención aplicada al item. |

### Ejemplo de Solicitud

[Sección titulada «Ejemplo de Solicitud»](https://developers.factus.com.co/v1/documentos-soporte/crear-validar#ejemplo-de-solicitud)

Aquí tienes un ejemplo de cómo debería quedar el cuerpo de la solicitud en formato JSON:

* [201 - Documento Soporte](https://developers.factus.com.co/v1/documentos-soporte/crear-validar#tab-panel-156)

```
{ "reference_code": "REF0017", "numbering_range_id": 148, "payment_method_code": "10", "observation": "", "provider": { "identification_document_id": 6, "identification": "123456789", "dv": 6, "trade_name": "", "names": "Alan Turing", "address": "calle 1 # 2-68", "email": "[email protected]", "phone": "1234567890", "is_resident": 1, "country_code": "CO", "municipality_id": 980 }, "items": [ { "code_reference": "12345", "name": "producto de prueba", "quantity": 1, "discount_rate": 20, "price": 50000, "unit_measure_id": 70, "standard_code_id": 1, "withholding_taxes": [ { "code": "06", "withholding_tax_rate": "3.50" } ] }, { "code_reference": "54321", "name": "producto de prueba 2", "quantity": 1, "discount_rate": 0, "price": 50000, "unit_measure_id": 70, "standard_code_id": 1 } ]}
```

### Ejemplo de respuesta

[Sección titulada «Ejemplo de respuesta»](https://developers.factus.com.co/v1/documentos-soporte/crear-validar#ejemplo-de-respuesta)

* [status 201 - Documento Soporte](https://developers.factus.com.co/v1/documentos-soporte/crear-validar#tab-panel-157)
* [Status 409](https://developers.factus.com.co/v1/documentos-soporte/crear-validar#tab-panel-158)
* [Status 422](https://developers.factus.com.co/v1/documentos-soporte/crear-validar#tab-panel-159)

```
{ "status": "Created", "message": "Documento con el código de referencia REF0017 registrado y validado con éxito", "data": { "company": { "url_logo": "http://api-sandbox.factus.com.co/storage/images/logos/lC5CLGXHgwlv8slaoiKC6dHkVLIXQVaDkL9C1Yqc.png", "nit": "901724254", "dv": "1", "company": "FACTUS S.A.S.", "name": "FACTUS S.A.S.", "graphic_representation_name": "FACTUS S.A.S.", "registration_code": "bnnmbvncv", "economic_activity": "6201", "phone": "3133045345", "email": "[email protected]", "direction": "CARRERA 10 # 9 - 04", "municipality": "San Gil" }, "provider": { "identification": "123456789", "dv": "6", "graphic_representation_name": "Alan Turing", "trade_name": null, "names": "Alan Turing", "address": "calle 1 # 2-68", "email": "[email protected]", "phone": "1234567890", "identification_document": { "id": 6, "code": "31", "name": "NIT" }, "legal_organization": { "id": 2, "code": "2", "name": "Persona Natural" }, "tribute": { "id": 21, "code": "ZZ", "name": "No aplica" }, "country": { "id": 46, "code": "CO", "name": "Colombia" }, "municipality": { "id": 980, "code": "68679", "name": "San Gil" } }, "support_document": { "id": 6, "number": "SEDS984000021", "reference_code": "REF0017", "status": 1, "qr": "https://catalogo-vpfe-hab.dian.gov.co/document/searchqr?documentkey=69f218c3601e279d9d47d091fe1c2d85e2b727a9576811d7a561d16313860799f26e8b0c8ae9f68db7a61a7234329f06", "cuds": "69f218c3601e279d9d47d091fe1c2d85e2b727a9576811d7a561d16313860799f26e8b0c8ae9f68db7a61a7234329f06", "validated": "11-02-2025 10:16:23 PM", "gross_value": "90000.00", "taxable_amount": "0.00", "tax_amount": "0.00", "total": "90000.00", "observation": null, "errors": [ "Regla: DSAB19b, Notificación: NIT del Prestador de Servicios no está autorizado por la DIAN" ], "created_at": "11-02-2025 10:16:18 PM", "qr_image": "data:image/png;base64, [TRIMMED_BASE64_12816_CHARS]", "payment_method": { "code": "10", "name": "Efectivo" } }, "items": [ { "code_reference": "12345", "name": "producto de prueba", "quantity": 1, "discount_rate": "20.00", "discount": "10000.00", "gross_value": "40000.00", "tax_rate": "0.00", "taxable_amount": "0.00", "tax_amount": "0.00", "price": "50000.00", "is_excluded": 1, "unit_measure": { "id": 70, "code": "94", "name": "unidad" }, "standard_code": { "id": 1, "code": "999", "name": "Estándar de adopción del contribuyente" }, "total": 40000, "withholding_taxes": [ { "tribute_code": "06", "name": "ReteRenta", "value": "1400.00", "rates": [ { "code": "06", "name": "ReteRenta", "rate": "3.50" } ] } ] }, { "code_reference": "54321", "name": "producto de prueba 2", "quantity": 1, "discount_rate": "0.00", "discount": "0.00", "gross_value": "50000.00", "tax_rate": "0.00", "taxable_amount": "0.00", "tax_amount": "0.00", "price": "50000.00", "is_excluded": 1, "unit_measure": { "id": 70, "code": "94", "name": "unidad" }, "standard_code": { "id": 1, "code": "999", "name": "Estándar de adopción del contribuyente" }, "total": 50000, "withholding_taxes": [] } ], "withholding_taxes": [ { "tribute_code": "06", "name": "ReteRenta", "value": "1400.00" } ], "adjustment_notes": [], "numbering_range": { "prefix": "SEDS", "from": 984000000, "to": 985000000, "resolution_number": "18760000003", "start_date": "01-01-2025", "end_date": "31-12-2025", "months": 11 } }}
```
