# Preguntas frecuentes

Estas son las preguntas más frecuentes de nuestros clientes y aliados sobre la operación de Factus.

Preguntas frecuentes para asistentes de IA

Descarga estas preguntas frecuentes, agrégalas a tu asistente de IA y hazle preguntas sobre Factus.

[Descargar](https://developers.factus.com.co/skills/preguntas-frecuentes-factus.md)

#### Preguntas Rápidas

[Sección titulada «Preguntas Rápidas»](https://developers.factus.com.co/buenas-practicas/preguntas-frecuentes#preguntas-r%C3%A1pidas)

¿Se puede hacer un PDF personalizado en la factura?

Sí, es posible realizar una representación gráfica personalizada. Con la respuesta del endpoint, puedes generar una nueva representación gráfica.

¿Se puede enviar un PDF diferente por correo?

Sí. Al enviar la factura, el campo `send_email` debe ir en `false` para que no enviemos la versión por defecto. Utilizando la respuesta del endpoint, generas la nueva representación gráfica y haces uso del endpoint de enviar correo, junto con la factura en base64, para que nosotros la enviemos, o puedes encargarte personalmente del envío.

¿Las pruebas se descuentan del paquete que se compra?

No. En el ambiente de sandbox, tanto el público como el privado, no se descuenta. Para obtener un sandbox privado debes adquirir un plan de facturación; de igual forma, en este ambiente tampoco se consume. Únicamente en producción se empieza a descontar del paquete adquirido.

¿Cuándo debo pagar Factus: cuando esté integrando o después?

Debes pagar una suscripción de Factus cuando estés listo para pasar a producción; para usar el ambiente de sandbox no necesitas hacer ningún pago.

¿Qué pasa cuando se envía una factura con una referencia que ya se había usado anteriormente?

Para una factura ya validada, la API responde con idempotencia, es decir, devuelve la información referente a la factura asociada a la referencia enviada.

¿Desde qué sistema se puede consumir Factus?

Desde cualquier sistema que pueda tener conexión HTTP a través de sus protocolos. No hay distinción de software ni lenguaje de programación, siempre y cuando pueda hacer peticiones HTTP.

¿Qué tiempos de respuesta da la API?

Para una factura que contiene pocos ítems, es decir, pocos productos o servicios, el tiempo de respuesta es de 2.5 segundos; todo depende de la cantidad de ítems que maneje. Por ejemplo, 500 productos tienen un tiempo de respuesta diferente a uno de 30.

¿Cuánto se demoran en activarme y pasar a producción?

El tiempo de activación es de 3 días hábiles, pero en la mayoría de los casos se activa en 24 horas, una vez se haya realizado el pago de la suscripción y el envío de los documentos requeridos.

¿Qué tipos de documentos maneja Factus?

Factura electrónica, notas crédito, documentos soporte, nota de ajuste, recepción de documentos para eventos RADIAN y consulta de documentos.

Factus envía la representación gráfica junto con el XML y el correo, ¿no tiene costo adicional?

Sí. Factus envía el correo con la representación gráfica y el XML; el servicio no tiene costo adicional, está incluido.

¿Qué pasa si se acaba el paquete de facturas?

Si se te acaba el paquete de facturas, puedes comprar otro paquete de igual o mayor cantidad; el tiempo de vigencia cambia al día de activación del nuevo paquete.

¿Cómo es el pago de los paquetes de facturas? ¿Se paga anual vencido, mes vencido?

El pago de la suscripción es anual y se debe cancelar para poder activarla.

¿A nombre de quién salen las facturas?

Las facturas no salen a nombre de cada aliado ni a nombre de Factus; salen a nombre de cada facturador (al NIT de cada empresa), es decir, de cada empresa que esté bajo un aliado.

Para el tema de desarrollo, ¿debo comprar algo? ¿Debo pagar alguna licencia?

No. Para desarrollo basta con solicitar las credenciales de acceso al sandbox para empezar a hacer pruebas; este proceso no tiene costo.

¿El entorno de sandbox es público?

Sí, es decir, todos los integradores que tengan credenciales pueden ver la información que envíes. Si quieres un entorno de sandbox privado, debes adquirir una suscripción; en funcionalidad no cambia nada, son exactamente iguales. La diferencia es la privacidad de los datos y la realización de pruebas a nombre del facturador.

¿Qué pasa si en el año no consumo la cantidad contratada?

Los documentos no son acumulables; al adquirir un nuevo plan, los documentos se reinician con la cantidad del nuevo.

¿La cantidad de facturas tiene alguna relación con el rango de numeración?

No, el rango de numeración es independiente; nos garantiza la trazabilidad del consecutivo de una factura y no depende de la cantidad de documentos adquiridos.

#### Administrativas

[Sección titulada «Administrativas»](https://developers.factus.com.co/buenas-practicas/preguntas-frecuentes#administrativas)

El pago de los paquetes, ¿tiene que ser de contado o se puede adquirir algún tipo de crédito para pagar en cuotas?

El pago se realiza por adelantado; una vez recibida la documentación, procedemos con la activación. Puedes realizar el pago a:

**FACTUS S.A.S.** — NIT: 901724254 Cuenta de Ahorros Bancolombia: 322-000053-83 Llave Bancolombia Negocios: 0090582804

Somos una plataforma SaaS y queremos ofrecer facturación electrónica con ustedes como intermediarios. ¿Crean una cuenta única por cada cliente o se maneja una sola cuenta para nosotros donde se consoliden todas las facturas?

Se crea una cuenta única para cada cliente. La activación se realiza tanto en la DIAN como en nuestros sistemas, utilizando el NIT del cliente como identificador.

Cuando necesitemos registrar un nuevo cliente que requiera facturar electrónicamente, ¿cómo debemos proceder?

Para la activación de un cliente se necesitan los siguientes documentos:

* Cámara de Comercio con fecha de emisión no mayor a 30 días.
* Cédula del representante legal.
* RUT (Registro Único Tributario).
* Rango de numeración autorizado por la DIAN.

Al crear una factura en Factus vía API, ¿se envía automáticamente a la DIAN o hay que confirmar el envío de alguna forma?

Al crear una factura a través de la API de Factus, esta se envía automáticamente a la DIAN para su validación, sin necesidad de pasos adicionales para confirmar el envío. Una vez que la DIAN valida la factura, la API entrega una respuesta de confirmación indicando el estado del documento.

¿A qué se refieren con que la factura de venta de cada paquete se generará a nombre del aliado?

Cuando el aliado solicita un paquete para uno de sus clientes, se emite una factura de venta correspondiente a dicho paquete o a nombre del que el aliado desee. Esta factura se genera a nombre del aliado, quien asume la gestión del paquete adquirido para su cliente.

¿Cómo funciona el proceso de solicitud y asignación de rangos de numeración? ¿Tiene algún costo?

Los rangos de numeración deben ser solicitados por el aliado directamente desde la cuenta de usuario de cada cliente en la plataforma de la DIAN.

Si se requieren rangos adicionales (por ejemplo, por múltiples sucursales o puntos de venta), estos pueden consultarse y asociarse a través del endpoint correspondiente de la API.

El trámite de solicitud de rangos ante la DIAN no tiene costo, y el aliado puede crear rangos ilimitados sin costo adicional para cada paquete en Factus.

¿Cada paquete se paga de forma anual?

Sí, cada paquete tiene una duración anual. Si la cantidad de documentos incluidos se consume antes de finalizar el año, se puede adquirir un nuevo paquete, lo cual renueva automáticamente el periodo por un año adicional a partir de la nueva activación.

Si tengo una bolsa con, por ejemplo, dos NITs, ¿puedo dividir la cantidad de documentos entre facturas y documentos soporte dentro de cada NIT?

Sí. Una vez se le asigna una cantidad a un paquete de un facturador, el aliado tiene la libertad de asignar la cantidad que desee entre los documentos disponibles; Factus no discrimina el consumo dentro de los paquetes.

¿Existe la posibilidad de realizar pruebas con una empresa real pero en el ambiente de habilitación de la DIAN?

El ambiente de pruebas actual utiliza una empresa real en un espacio compartido. Es posible habilitar un ambiente privado de pruebas para una empresa o cliente específico adquiriendo uno de los paquetes disponibles.

Cuando termine mi periodo de prueba y quiera comprar un paquete, ¿cómo lo solicitaría?

Con las credenciales que te enviamos puedes realizar todas las pruebas que desees. Cuando quieras pasar a producción, adquieres un paquete y nosotros te entregamos las credenciales de acceso a producción, además del acceso al sandbox privado para tu facturador.

Al probar la búsqueda de adquiriente por número de RUT, solo me permite usar los números de documento de la documentación. ¿Qué debo hacer para probar con números reales?

Con las credenciales de producción puedes probar ese endpoint con datos de identificación reales de adquirientes.

En pruebas, ¿hay un límite de consecutivos o se pueden hacer pruebas de facturación masiva?

No hay límite de consecutivos para las pruebas, pero sí existe un rate limit de 80 solicitudes por minuto.

Para el paquete de nómina, ¿se puede probar el API sin tener el paquete contratado?

No, es necesario tener un paquete activo para poder realizar pruebas de nómina.

¿Existen endpoints para la generación de notas débito?

Actualmente no tenemos publicado un endpoint específico para la generación de notas débito. Sin embargo, contamos con endpoints para realizar ajustes o anulaciones de facturas a través de notas crédito. Podemos evaluar habilitar un endpoint de notas débito según las necesidades específicas de los usuarios.

¿Hay algún tipo de conexión con la DIAN donde se puedan ver las facturas emitidas a un facturador?

Desde la versión 2, Factus cuenta con un endpoint llamado **Documentos** que permite consultar los documentos que se le han emitido a los facturadores, siempre y cuando tengas el `track_uid` correspondiente (CUFE, CUDE, CUDS o CUNE). Consulta la [documentación de descarga de XML](https://developers.factus.com.co/documentos/descargar-xml/).

El endpoint de envío de correo, ¿envía el PDF de la factura?

Sí. Se debe enviar en base64 el PDF de la factura, incluso con una representación gráfica diferente a la nuestra, usando el [endpoint de envío de factura](https://developers.factus.com.co/facturas/enviar-correo/).

Veo que desde Factus se pueden emitir eventos. ¿Tengo algún endpoint para listar mis facturas de venta con los eventos emitidos por mis clientes? ¿También puedo emitir eventos para facturas de compras?

Puedes emitir eventos sobre las facturas que te hayan hecho a crédito, y Factus cuenta con un endpoint para listar las facturas que hayas recepcionado.

La secretaría de salud me exige los RIPS y estos también deben ir asociados a la facturación electrónica. ¿Factus tiene una forma de hacer esto?

Nosotros te ayudamos generando el XML de factura electrónica que necesitas para generar los RIPS. La parte de RIPS la debes realizar tú mismo con ese XML que te brindamos.

¿Cuándo sé que debo usar las facturas del sector salud?

Cuando las facturas se deban emitir a RIPS (Registros Individuales de Prestación de Servicios de Salud).

¿Cómo se gestionan y dónde se almacenan los backups en Factus?

Los documentos se almacenan durante 5 años, tal como lo exige la DIAN. Los backups se gestionan mediante Amazon S3, garantizando alta disponibilidad y seguridad, y se realizan de manera diaria para asegurar la protección y recuperación de la información en caso de ser necesario.

¿Cuál es el costo por documento emitido, o el esquema de planes mensuales?

Manejamos paquetes y bolsas por cantidad de documentos; te los podemos enviar a tu correo con toda la información. No tenemos planes gratuitos, pero sí manejamos un sandbox gratuito para realizar el proceso de integración.

¿Factus emite el documento equivalente electrónico POS o factura POS (tiquete de máquina registradora) por API?

Para sistemas POS tenemos habilitadas facturas electrónicas, que son válidas ante la DIAN para sistemas POS y se pueden emitir para consumidor final sin problema. La factura de venta funciona tanto para ventas a persona natural como para empresas que solicitan factura electrónica.

Si un mismo NIT tiene varios locales, ¿lo correcto es una sola cuenta usando el objeto \`establishment\` en cada factura, o hay que abrir una empresa por local?

Bajo un mismo NIT puedes crear todos los rangos de numeración que necesiten para asignarle a las sucursales, y por cada sucursal solo deben enviar qué rango usan y los datos del establecimiento.

¿Para abrir una cuenta de empresa en Factus, esa empresa necesita tener su propio certificado digital, o Factus firma con el suyo?

Cada empresa debe tener su propio certificado digital; nosotros nos encargamos de todo el proceso de habilitación. El NIT que se activa solo necesita asociar el rango o los rangos una vez Factus realiza la activación.

¿Manejan una bolsa global de documentos compartida entre múltiples NIT, o debemos comprar un plan independiente por cada empresa?

Para sistemas SaaS tenemos ambas modalidades: paquetes para 1 NIT o bolsas para dividir. Puedes usar cualquiera de las modalidades o usar ambas.

¿Existe algún costo adicional por registrar cada NIT/empresa?

Para paquetes individuales solo se paga el valor del paquete, y estos ya vienen con el certificado incluido. Para las bolsas que se pueden dividir, pagas el valor de la bolsa y por cada NIT compras el certificado por aparte.

¿El certificado/firma digital está incluido? Si tiene costo, ¿cuánto cuesta por NIT y por cuánto tiempo?

El certificado tiene un costo de $130.000 anual.

¿La bolsa sirve conjuntamente para factura electrónica, notas crédito/débito, documento soporte, nómina electrónica y eventos RADIAN?

Las bolsas para dividir tienen incluidas facturas, notas débito y crédito, documentos soporte, nómina y RADIAN. Cada documento emitido y validado consume un documento.

¿Los documentos que no se consuman se acumulan al siguiente mes/año?

Las bolsas o paquetes no son acumulables.

¿Existe permanencia mínima, consumo mínimo mensual o contrato anual?

La compra de los paquetes o bolsas: todos tienen vigencia de 1 año.

¿Tienen sandbox/API de pruebas gratuito, documentación y colección de Postman?

Sí, tenemos sandbox gratuito de pruebas y colección de Postman.

¿Tienen webhooks para consultar automáticamente estados de documentos, empresas, certificados y eventos DIAN?

No tenemos webhooks.

¿La solución tiene cobertura en otros países de Latinoamérica? ¿Cuáles actualmente?

Por el momento solo estamos en Colombia.

¿Tienen precios especiales para casas de software/SaaS/white-label?

Los valores que manejamos son para casas de software.

¿Quién crea los rangos de numeración? ¿Cómo se asocia?

El facturador, es decir, la persona que tenga acceso al usuario de la DIAN de la empresa.

¿Se pueden emitir notas crédito por la misma vía de la API (para el caso de un pago que se anula o reembolsa), o requiere otro flujo?

Sí, tenemos por API notas débito y crédito.

¿El certificado digital lo gestiona cada facturador por su cuenta con una entidad certificadora aparte, o ustedes ofrecen algo para simplificar ese paso?

Los paquetes individuales vienen con el certificado digital incluido; nosotros lo proporcionamos.

Puedo consultar todas las facturas emitidas o recibidas?

Para consulta de documentos manejamos paquetes individuales por NIT. Puedes consultar el XML de todas las facturas emitidas y recibidas del NIT activado para el paquete. Es el endpoint oficial de la DIAN y solo necesitas tener el CUFE de las facturas electrónicas. Las consultas son ilimitadas.

#### Integración

[Sección titulada «Integración»](https://developers.factus.com.co/buenas-practicas/preguntas-frecuentes#integraci%C3%B3n)

Cuales son los endpoints disponibles para la integración?

Los endpoints disponibles para la integración se encuentran en la documentación de Factus, donde se detallan los diferentes servicios y funcionalidades que ofrece la API. [Ver documentación de endpoints](https://developers.factus.com.co/endpoints)

¿Cuáles son los pasos para hacer una factura electrónica?

Tanto en sandbox como en producción necesitas credenciales de acceso.

1. Solicitar el token de acceso. Caduca cada 60 minutos; para solicitar otro debes usar el token de refresco.
2. Obtener rango de numeración. Para esto debes hacer uso del endpoint de rangos de numeración, el cual te devuelve los rangos disponibles para tu facturador. [Ver documentación rangos de numeración](https://developers.factus.com.co/rangos-de-numeracion/facturaci%C3%B3n/crear-rango/)
3. Asignar un reference\_code para la facturación. Este campo es obligatorio y debe ser único para cada factura que se genere.
4. Medios de pago: una factura puede hacerse por uno o varios medios de pago. [Ver documentación medios de pago](https://developers.factus.com.co/tablas-de-referencia/tablas/#c%C3%B3digos-de-m%C3%A9todos-de-pago)
5. Datos del cliente o adquiriente.
6. Datos de los ítems (productos o servicios).
7. Hacer uso del endpoint de crear factura. [Ver documentación de crear factura](https://developers.factus.com.co/facturas/crear-y-validar/)

¿Cuáles documentos necesitan gestionar rango de numeración?

Necesitan rango de numeración los siguientes documentos: factura electrónica, nota crédito, notas débito, documento soporte, nota de ajuste, nómina electrónica y nota de ajuste a nómina. [Ver documentación rangos de numeración](https://developers.factus.com.co/rangos-de-numeracion/facturaci%C3%B3n/obtener-rangos/).

Solo factura y documento soporte se autorizan en la DIAN, los demas se crean de forma manual en el api. [Ver documentacion crear Rangos de numeración](https://developers.factus.com.co/rangos-de-numeracion/facturaci%C3%B3n/crear-rango/)

Si una factura no se paga en efectivo sino por transferencia, Nequi, cheque, etc., ¿qué código debo enviar en \`payment\_method\_code\`?

Es fundamental especificar correctamente el código del método de pago en el campo `payment_method_code` para reflejar con precisión la forma de pago utilizada. Algunos ejemplos:

* **Transferencia bancaria:** código `47`.
* **Nequi (y otras billeteras digitales como Daviplata):** no tienen un código específico, por lo que se recomienda usar el código `47` de transferencias, ya que operan de forma similar.
* **Cheque:** código `20`.

Consulta el listado completo de [códigos de métodos de pago](https://developers.factus.com.co/tablas-de-referencia/tablas/#c%C3%B3digos-de-m%C3%A9todos-de-pago). Si el método que usas no está en la lista, puedes usar el código `ZZZ` (“Otro”), aunque siempre es preferible usar un código específico para mayor precisión.

En la v2 contamos con un array de objetos para el envío de múltiples formas y medios de pago en un mismo documento.

El impuesto a las bolsas plásticas no se maneja con un porcentaje sino con un valor fijo. ¿Cómo debo enviarlo a través de la API?

Este impuesto debe enviarse como un concepto (ítem o producto) con el valor correspondiente a cada bolsa plástica. El valor de este ítem lo define cada cliente según su consideración.

Para el cálculo de múltiples impuestos sobre un mismo producto, ¿cómo se debe calcular?

Cada impuesto se debe tratar por separado aplicando el redondeo bancario. Es decir, si un producto tiene IVA y, por ejemplo, impuesto a productos ultraprocesados, se calcula uno después del otro aplicando el redondeo bancario en cada paso.

¿Cómo funcionan los productos excluidos o exentos de IVA?

* Si la empresa **no es responsable de IVA**, los productos deben ir excluidos, aunque tengan IVA.
* Si la empresa **es responsable de IVA** y el producto es exento, se debe enviar con el impuesto `01` en `0`. En este caso también puede usarse `is_exclude`.

¿En el ambiente productivo se encuentra el listado completo de municipios?

Sí. Tanto en sandbox como en producción se encuentran todos los municipios consultando el endpoint `{{url_api}}/v1/municipalities`.

Para la v2 también tenemos disponible el JSON para descargarlo y evitar hacer la solicitud al endpoint: puedes incluirlo directamente en tu proyecto y usarlo desde ahí.

¿Dónde puedo consultar el listado de valores permitidos para \`identification\_document\_id\`?

Puedes consultarlos en el listado de [IDs de tipos de documentos de identidad](https://developers.factus.com.co/tablas-de-referencia/tablas/#ids-de-tipos-de-documentos-de-identidad).

Para \`legal\_organization\_id\`, ¿es correcto que 1 = Jurídica y 2 = Natural?

Sí, es correcto. Consulta el detalle en [IDs de tipos de organizaciones](https://developers.factus.com.co/tablas-de-referencia/tablas/#ids-de-tipos-de-organizaciones).

¿Dónde puedo obtener el listado de valores para \`payment\_form\`?

En el listado de [códigos de formas de pago](https://developers.factus.com.co/tablas-de-referencia/tablas/#c%C3%B3digos-de-formas-de-pago).

¿Para qué se utiliza el campo \`standard\_code\_id\` y qué valores puede tomar?

Se utiliza como el estándar de referencia que adopta la empresa para clasificar sus productos o servicios. Lo más común es usar el estándar “Estándar de adopción del contribuyente”, que corresponde al ID `1`.

Consulta los valores disponibles en [IDs de estándar de identificación del producto](https://developers.factus.com.co/tablas-de-referencia/tablas/#ids-de-est%C3%A1ndar-de-identificaci%C3%B3n-del-producto).

¿El token de acceso vence cada hora? ¿Hay algún límite de tasa (rate limit) para renovarlo o para las llamadas a la API que debamos tener en cuenta si vamos a automatizar esto para muchos comercios en paralelo?

Sí, el token de acceso vence cada hora y se debe generar de nuevo con el token de refresco. Tenemos un rate limit por usuario de 80 peticiones por minuto.

El límite es de 80 peticiones por minuto por usuario. ¿Se puede ampliar para cuentas con alto volumen (hora pico)? ¿Ese límite es por usuario o por empresa?

El límite es por usuario (NIT), teniendo en cuenta que el promedio de validación de factura es de 2.5 segundos. Se puede ampliar según el volumen de emisión de la empresa.

La documentación dice que el \`dv\` es opcional y que el sistema lo calcula solo, pero en sandbox nos rechazó una factura con cliente tipo NIT sin \`dv\` (regla FAK24). ¿Es obligatorio siempre o la documentación está desactualizada?

Siempre que sea NIT lo pueden enviar o dejarlo vacío y la API lo calcula; cuando es cédula, no se envía.

¿Nos pueden habilitar una empresa de pruebas con dos o más rangos activos de factura? Queremos probar la lógica de selección de rango, porque hasta ahora solo hemos probado con un rango único.

En pruebas, la DIAN solo permite 1 rango de facturación. Cuando se tienen varios rangos, solo deben crearlos en la API y consultar los ID; ese ID es el que se envía según el que se vaya a usar en la factura.

¿Qué pasa si Factus no tiene los campos que yo necesito para el funcionamiento de mi negocio?

La operación de tu negocio y los datos deben manejarse directamente en tu software; los datos necesarios para hacer la factura son los que solicitamos en la documentación, todo dependiendo del tipo de factura. Ejemplo: estándar, transporte, mandato o sector salud.
