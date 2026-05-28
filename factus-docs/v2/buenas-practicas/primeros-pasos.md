# Conceptos para la creación de facturas

¿Estás listo para empezar a facturar con nuestra API? Antes de lanzar tu primera petición `POST`, vale la pena entender las piezas del rompecabezas. Esta guía no es solo una referencia técnica, es un recorrido para que tu integración sea sólida desde el primer día.

##### Antes de empezar: Tu pase de acceso

[Sección titulada «Antes de empezar: Tu pase de acceso»](https://developers.factus.com.co/buenas-practicas/primeros-pasos#antes-de-empezar-tu-pase-de-acceso)

Para que nuestra API reciba tus datos y te devuelva una respuesta exitosa, necesitas configurar tu “llave de acceso”. No importa qué lenguaje de programación uses (Python, JS, PHP…), todas tus peticiones deben dirigirse al siguiente destino y llevar consigo tres credenciales fundamentales.

##### El endpoint de pruebas:

[Sección titulada «El endpoint de pruebas:»](https://developers.factus.com.co/buenas-practicas/primeros-pasos#el-endpoint-de-pruebas)

Todas las pruebas de creación de facturas las realizaremos en nuestro entorno de pruebas (Sandbox):

URL del Endpoint

`https://api-sandbox.factus.com.co/v2/bills/validate`

* * *

##### Configurando los Encabezados (Headers)

[Sección titulada «Configurando los Encabezados (Headers)»](https://developers.factus.com.co/buenas-practicas/primeros-pasos#configurando-los-encabezados-headers)

Imagina que los encabezados son la etiqueta del sobre que envías; dicen quién eres y qué hay dentro. Debes configurar estos tres parámetros en tu cliente HTTP:

1. **Content-Type:** `application/json`
Le avisa a la API que le estás enviando un paquete de datos en formato JSON.
2. **Accept:** `application/json`
Le dice a la API que esperas que su respuesta también llegue en formato JSON.
3. **Authorization:** `Bearer token_de_acceso`
Esta es tu firma digital. Sin ella, la API rechazará la conexión por seguridad.

* * *

##### Descripción de los campos clave en la creación de facturas

[Sección titulada «Descripción de los campos clave en la creación de facturas»](https://developers.factus.com.co/buenas-practicas/primeros-pasos#descripci%C3%B3n-de-los-campos-clave-en-la-creaci%C3%B3n-de-facturas)

**Código de referencia:** `reference_code` campo obligatorio. Es la forma en como podemos identificar la factura dentro de nuestro sistema para garantizar que la factura sea única y evitar procesamientos repetidos.

**Tipo de documento que estamos procesando:** `document` campo opcional, por defecto tomará 01 Factura electrónica de venta.

**Rango de numeración:** `numbering_range_id` este campo se obtiene de la consulta del endpoint rangos de numeración. Este campo es opcional siempre y cuando la empresa solamente cuente con un campo de numeración activo, si tiene más de uno debe enviarse el id correspondiente al rango de numeración.

**Código del tipo de operación:** `operation_type` si este campo no se envía tomará por defecto el código 10 tipo de factura estándar.

**Metodos de pago:** `payment_details` Este campo es un array de objetos con la información de los medios de pago con los que se pagó la factura. Importante: La suma del valor d los métodos de pago debe ser igual al total del valor de la factura incluyendo los impuestos. Este campo se debe usar para cuando la factura se pague y/o en efectivo, consignación , transferencia, cheque etc. _Importante:_ Cuando el método de pago sea a crédito (2) se debe especificar el campo `due_date` que corresponde a la fecha de vencimiento de la factura.

**Observación:** `observation` En este campo puedes agregar información complementaria de la factura.

**Cliente:** `Customer` Este campo es obligatorio, un objeto que contiene la información del cliente al cual se le está realizando la factura.

**Código del tipo de identificación:** `customer.identification_document_code` Este campo corresponde al código del tipo de identificación del cliente (Cédula, Nit. Tarjeta de identidad), en este campo se registra como tal el código, no el nombre del tipo de documento, es decir 13 para Cédula, 31 para nit etc.

**Número de identificación:** `customer.identification` dependiendo del tipo de identificación se debe colocar el número de la identificación del cliente al que le estamos realizando la factura. Si el número de identificación corresponde a un nit no se debe enviar el dígito de verificación ni el guion que lo separa, el dígito de verificación tiene un campo exclusivo para él, aquí se debe enviar únicamente el número de identificación.

**Dígito de verificación:** `customer.dv` el dígito de verificación es un campo el cual se registra siempre y cuando el tipo de identificación sea NIT (código 31), si el campo dv no se envía, el api lo calcula automáticamente, si se envía errado el api retorna un error, no se debe enviar guiones.

**Tipo de Organización:** `customer.legal_organization_code` en este campo se identifica si el cliente es persona natural o personan jurídica.

**Responsable de iva:** `customer.tribute_code` Esta campo identifica si el cliente es responsable o no de iva, se puede ver en la tabla de tributos, por defecto el api lo maneja como no responsable (código ZZ).

**Municipio:** `municipality_code` municipio donde se encuentra el cliente, se debe usar el código correspondiente el cual se puede encontrar en tabla de referencias > municipios.

**Productos:** `items` array de objetos que contiene la información de cada uno de los productos a facturar.

**Código de referencia:** `items.code_reference` código único de referencia que se deben manejar por parte del integrador para identificar el producto.

**Descuento:** `item.discount_rate` cantidad en porcentaje del descuento que se aplica a la factura.

**Precio:** `item.price` precio base del producto a facturar, sin aplicar impuestos.

**Unidad de medida:** `item.unit_measure_code` es la unidad de medida para el producto que se está facturando, si es como tal una unidad se maneja el código 94, pero si es una unidad de masa como gramos o kilogramos se debe ver la tabla unidades de medida. Tabla de referencia > unidades de medida.

**Código de identificación de producto:** `item.standard_code` código de identificación de producto puedes ver las opciones en la sección de tablas de referencia > tablas e identificar tu producto, por ejemplo el código 999 estándar del contribuyente equivale a un código interno de identificación de producto en la empresa.

**Impuestos:** `item.taxes` es un array de objetos con los impuestos aplicados al producto, se gestiona el código del impuesto que se encuentra en tablas de referencia > tablas > códigos de impuestos y el porcentaje del impuesto aplicado.

* * *

Recuerda que esta guía es un acompañamiento para que entiendas el **porqué** de cada campo. Si logras que tu primera petición pase las validaciones del Sandbox, ¡ya tienes el 90% del camino hecho para pasar a producción!

Si ya tienes claros los conceptos y lo que necesitas ahora es “ensuciarte las manos” con la estructura técnica, puedes saltar directamente a nuestra documentación técnica. Allí encontrarás el **ejemplo completo del JSON** con todos los campos que vimos hoy y algunos extras para casos avanzados.

[

Ver ejemplo JSON completo

](https://developers.factus.com.co/facturas/crear-y-validar/)
