# Glosario

Este glosario reúne los términos más importantes que aparecen en la documentación de la API de Factus, tanto los propios de la facturación electrónica colombiana como los técnicos del API. Está organizado alfabéticamente para facilitar su consulta.

* * *

## A

[Sección titulada «A»](https://developers.factus.com.co/glosario#a)

**Access Token (Token de acceso)**
Credencial temporal generada por el servidor OAuth2 de Factus que autoriza las peticiones a los endpoints protegidos de la API. Tiene una duración de 1 hora; al vencerse debe renovarse con un [Refresh Token](https://developers.factus.com.co/glosario#refresh-token). Se envía en el encabezado `Authorization: Bearer <token>`.

**Acuse de recibo** _(evento código `030`)_
Evento electrónico emitido por el adquiriente para confirmar la recepción formal de una factura electrónica de venta ante el [DIAN](https://developers.factus.com.co/glosario#dian). Es el primer evento del ciclo de vida de la factura dentro del sistema [RADIAN](https://developers.factus.com.co/glosario#radian).

**Aceptación expresa** _(evento código `033`)_
Evento mediante el cual el adquiriente confirma expresamente que acepta la factura electrónica de venta. Implica conformidad con la obligación de pago. Se registra ante la DIAN a través de RADIAN.

**Aceptación tácita** _(evento código `034`)_
Aceptación de la factura electrónica que opera de manera automática transcurrido el plazo legal sin que el adquiriente haya presentado un reclamo. Factus provee un endpoint dedicado para registrar este evento.

**Adquiriente**
Persona natural o jurídica que recibe los bienes o servicios y a quien se dirige la factura electrónica. En la API se identifica con el objeto `customer` dentro del cuerpo de la solicitud. Sus datos obligatorios incluyen tipo y número de identificación, nombre, municipio y responsabilidad tributaria.

**Agente de retención de IVA** _(responsabilidad fiscal `0-23`)_
Contribuyente designado por la DIAN para retener una parte del IVA causado en sus compras y consignarlo directamente al fisco.

**API (Application Programming Interface)**
Interfaz de programación que permite a sistemas externos integrarse con la plataforma Factus para crear, validar, consultar y gestionar documentos electrónicos (facturas, notas crédito, documentos soporte, etc.). Usa el protocolo HTTP y el formato JSON.

**Autenticación OAuth2**
Protocolo estándar de autorización utilizado por Factus para controlar el acceso a la API. El flujo es `password grant`: se envían las credenciales (`client_id`, `client_secret`, `username`, `password`) y se obtiene un par de tokens (`access_token` / `refresh_token`). Ver .

**Autorretenedor** _(responsabilidad fiscal `0-15`)_
Contribuyente al que la DIAN ha habilitado para practicarse a sí mismo la retención en la fuente sobre sus ingresos, en lugar de que el pagador la efectúe.

* * *

## B

[Sección titulada «B»](https://developers.factus.com.co/glosario#b)

**Bearer Token**
Esquema de autenticación HTTP donde el token de acceso se incluye en el encabezado de la petición como `Authorization: Bearer <access_token>`. Toda solicitud a los endpoints protegidos de Factus requiere este encabezado.

* * *

## C

[Sección titulada «C»](https://developers.factus.com.co/glosario#c)

**Client ID / Client Secret**
Par de credenciales asignado por Factus al momento de registrar una integración. El `client_id` identifica al cliente y el `client_secret` es su contraseña de aplicación. Nunca deben exponerse en código público.

**Código de referencia** _(campo `reference_code`)_
Identificador único que el integrador asigna a cada documento electrónico en su propio sistema. Garantiza la idempotencia: si se reintenta una solicitud con el mismo `reference_code`, la API detecta el duplicado y no genera un nuevo documento.

**Consecutivo**
Número secuencial dentro de un [rango de numeración](https://developers.factus.com.co/glosario#rango-de-numeracion) autorizado por la DIAN. Junto con el prefijo forma el número oficial de la factura (ej. `FACT-001`). Factus lo asigna y controla automáticamente.

**CUDE (Código Único de Documento Electrónico)**
Huella digital que identifica de forma única a un evento electrónico registrado en RADIAN (acuse de recibo, reclamo, aceptación, etc.). Es el equivalente al [CUFE](https://developers.factus.com.co/glosario#cufe) para eventos del ciclo de vida de la factura.

**CUDS (Código Único de Documento Soporte)**
Identificador único generado por la DIAN para cada [documento soporte](https://developers.factus.com.co/glosario#documento-soporte) validado. Cumple la misma función que el CUFE para las facturas de venta, pero aplica exclusivamente a los documentos soporte y sus notas de ajuste.

**CUFE (Código Único de Factura Electrónica)**
Identificador único generado por la DIAN para cada factura electrónica de venta validada. Permite verificar la autenticidad e integridad del documento en el portal de la DIAN. La API lo retorna en la respuesta de validación.

**CUNE (Código Único de Nómina Electrónica)**
Identificador único generado por la DIAN para cada documento de nómina electrónica validado. Es el equivalente al CUFE para los comprobantes de pago de nómina que los empleadores deben transmitir a la DIAN. (Funcionalidad **próximamente** disponible en Factus.)

* * *

## D

[Sección titulada «D»](https://developers.factus.com.co/glosario#d)

**DIAN (Dirección de Impuestos y Aduanas Nacionales)**
Entidad del gobierno colombiano responsable de administrar y controlar el cumplimiento de las obligaciones tributarias y aduaneras. Es el ente ante el que se transmiten, validan y consultan todos los documentos electrónicos gestionados a través de Factus.

**Descuento** _(campo `discount_rate`)_
Porcentaje o valor fijo de reducción aplicado al precio de un producto o servicio dentro de la factura. Se registra a nivel de ítem. Factus también soporta descuentos y recargos globales mediante el objeto `allowance_charges`.

**Dígito de verificación (DV)** _(campo `dv`)_
Cifra de control calculada a partir del NIT para verificar su validez. En Factus solo aplica cuando el tipo de identificación del adquiriente es NIT (código `31`). Si no se envía, la API lo calcula automáticamente; si se envía errado, retorna un error.

**Documento electrónico**
Término genérico que engloba todos los comprobantes fiscales que Factus gestiona: facturas electrónicas de venta, notas crédito, documentos soporte, notas de ajuste, entre otros. Cada tipo tiene su propio endpoint de validación y sus campos específicos.

**Documento soporte**
Documento electrónico que un adquiriente de bienes o servicios emite para soportar costos y deducciones ante la DIAN cuando el proveedor no está obligado a expedir factura. Su endpoint es `POST v2/support-documents/validate`. Ver .

* * *

## E

[Sección titulada «E»](https://developers.factus.com.co/glosario#e)

**Emisor**
Persona natural o jurídica que genera y transmite el documento electrónico. En Factus corresponde a la empresa registrada en la plataforma. Su información proviene del perfil de empresa configurado en el sistema.

**Endpoint**
URL específica de la API que expone una operación concreta (ej. `POST /v2/bills/validate` para crear una factura). Cada recurso de Factus (facturas, notas crédito, etc.) tiene un conjunto de endpoints para crear, consultar, descargar y eliminar documentos.

**Entorno Sandbox**
Ambiente de pruebas de Factus cuya URL base es `https://api-sandbox.factus.com.co`. Permite probar integraciones sin generar documentos reales ante la DIAN. Los documentos creados aquí no tienen validez fiscal.

**Entorno Producción**
Ambiente real de Factus cuya URL base es `https://api.factus.com.co`. Los documentos transmitidos aquí son validados por la DIAN y tienen plena validez fiscal.

**Eventos de factura**
Acciones que el adquiriente registra ante la DIAN sobre una factura electrónica a través del sistema RADIAN. Los eventos disponibles son: acuse de recibo (`030`), reclamo (`031`), recibo del bien/servicio (`032`), aceptación expresa (`033`) y aceptación tácita (`034`).

* * *

## F

[Sección titulada «F»](https://developers.factus.com.co/glosario#f)

**Factura electrónica de venta** _(código de documento `01`)_
Documento tributario principal que soporta operaciones de venta de bienes y/o servicios. Es el tipo de documento más común en Factus. Debe ser validada por la DIAN antes de ser entregada al adquiriente.

**Factura de mandatos** _(tipo de operación `11`)_
Factura emitida por un mandatario (agente, comisionista) en nombre de un mandante. Incluye campos adicionales para identificar al mandante y al factor (agente de comercio).

**Factura de transporte** _(tipo de operación `12`)_
Factura electrónica especializada para el sector de transporte. Incluye objetos adicionales para registrar información del trayecto, vehículo y conductor.

**Factura sector salud**
Factura electrónica con campos adicionales requeridos por el Ministerio de Salud: plan de cobertura, información de pacientes, servicios de salud y métodos de pago especializados. Tiene cuatro sub-tipos: `SS-CUFE`, `SS-Reporte`, `SS-SinAporte` y `SS-Recaudo`.

**form-data**
Formato de codificación HTTP utilizado exclusivamente en el endpoint de autenticación (`oauth/token`) para enviar las credenciales. El resto de endpoints de Factus utilizan `application/json`.

**Forma de pago** _(campo `payment_form_code`)_
Indica si la factura se paga de contado (`1`) o a crédito (`2`). Cuando es a crédito, se debe especificar la fecha de vencimiento (`due_date`) dentro del objeto `payment_method`.

* * *

## G

[Sección titulada «G»](https://developers.factus.com.co/glosario#g)

**Gran contribuyente** _(responsabilidad fiscal `O-13`)_
Categoría especial de contribuyente designada por la DIAN, que por su importancia recaudatoria recibe un tratamiento tributario diferenciado y mayores obligaciones de control fiscal.

**grant\_type**
Parámetro OAuth2 que indica el flujo de autenticación. Factus soporta dos valores: `password` (para obtener el token inicial) y `refresh_token` (para renovarlo sin reingresar credenciales).

**GTIN (Global Trade Item Number)** _(código de identificación de producto `010`)_
Estándar internacional de la organización GS1 para identificar productos comerciales de forma única a nivel global. Se usa en el campo `standard_code` del ítem cuando el producto tiene código de barras.

* * *

## H

[Sección titulada «H»](https://developers.factus.com.co/glosario#h)

**Header (Encabezado HTTP)**
Metadato enviado junto con cada petición HTTP. Factus requiere tres encabezados en casi todos sus endpoints: `Authorization` (Bearer Token), `Content-Type: application/json` y `Accept: application/json`.

**HTTP 200 / 201 / 204**
Códigos de éxito: `200` para consultas exitosas, `201` para recursos creados (ej. factura validada), `204` para operaciones sin cuerpo de respuesta (ej. eliminación exitosa).

**HTTP 401 / 403**
Códigos de error de autenticación/autorización: `401` indica que el token no fue enviado o es inválido; `403` indica que el token es válido pero no tiene permisos para el recurso solicitado.

**HTTP 422**
Código de error de validación de datos. La API retorna este código cuando el JSON enviado contiene campos con valores incorrectos o incumple las reglas de negocio (ej. totales que no coinciden, campos requeridos vacíos).

**HTTP 429**
Código de error por exceso de solicitudes. Factus limita a **80 peticiones por minuto por usuario**. Al superar este límite, la API retorna `429 Too Many Requests` e incluye el encabezado `Retry-After` con los segundos de espera. Ver .

* * *

## I

[Sección titulada «I»](https://developers.factus.com.co/glosario#i)

**ICA (Impuesto de Industria, Comercio y Avisos)** _(código `03`)_
Tributo municipal que grava las actividades industriales, comerciales y de servicios realizadas en un municipio. Se puede registrar como retención o como impuesto en los ítems de la factura.

**IVA (Impuesto sobre las Ventas)** _(código `01`)_
Principal impuesto indirecto en Colombia. La tarifa general es del 19%. Se registra en el array `taxes` de cada ítem de la factura. Para los clientes, la responsabilidad frente al IVA se indica con el campo `tribute_code` (`01` = responsable de IVA, `ZZ` = no responsable).

**Ítems** _(campo `items`)_
Array de objetos que representa cada producto o servicio incluido en el documento electrónico. Cada ítem contiene, entre otros: `code_reference`, `name`, `quantity`, `price`, `unit_measure_code`, `standard_code` y el array `taxes`.

* * *

## J

[Sección titulada «J»](https://developers.factus.com.co/glosario#j)

**JSON (JavaScript Object Notation)**
Formato estándar de intercambio de datos utilizado en todos los endpoints de Factus (excepto en la autenticación, que usa form-data). El cuerpo de las solicitudes de creación de documentos y todas las respuestas de la API se envían en JSON.

* * *

## M

[Sección titulada «M»](https://developers.factus.com.co/glosario#m)

**Mandante**
En una factura de mandatos, es la persona natural o jurídica en cuyo nombre actúa el mandatario (agente). Se identifica dentro del objeto `mandate` de la factura.

**Medios de pago** _(campo `payment_details`)_
Array que lista las formas en que se recibió el pago de la factura (efectivo, transferencia, tarjeta, etc.). La suma de los valores de todos los medios de pago debe ser igual al total de la factura incluyendo impuestos. Ver tabla de códigos en .

**Municipio** _(campo `municipality_code`)_
Código del municipio o ciudad en Colombia donde se encuentra el adquiriente o el lugar de entrega. Los códigos se consultan en .

* * *

## N

[Sección titulada «N»](https://developers.factus.com.co/glosario#n)

**NIT (Número de Identificación Tributaria)** _(código `31`)_
Identificación fiscal asignada por la DIAN a personas jurídicas, empresas y algunos tipos de personas naturales en Colombia. En Factus se envía sin dígito de verificación ni guión en el campo `identification`; el DV va en un campo separado.

**Nómina electrónica**
Documento electrónico con el que los empleadores reportan a la DIAN los pagos de salarios y prestaciones sociales. Actualmente en desarrollo (**próximamente** en Factus).

**Nota crédito**
Documento electrónico que modifica o anula una factura electrónica de venta previamente emitida. Puede usarse para devoluciones, descuentos, anulaciones y ajustes de precio. Su endpoint es `POST v2/credit-notes/validate`. Ver .

**Nota de ajuste a documento soporte**
Documento electrónico que corrige o anula un [documento soporte](https://developers.factus.com.co/glosario#documento-soporte) emitido previamente. Su endpoint es `POST v2/support-documents-notes/validate`. Ver .

**Numbering Range ID** _(campo `numbering_range_id`)_
ID numérico del rango de numeración autorizado por la DIAN que se desea usar para el documento. Es opcional si la empresa solo tiene un rango activo; obligatorio cuando hay más de uno. Se obtiene del endpoint .

**NUIP** _(código `91`)_
Número Único de Identificación Personal, usado como documento de identidad en Colombia en casos especiales (ej. menores de edad sin otro documento).

* * *

## O

[Sección titulada «O»](https://developers.factus.com.co/glosario#o)

**OAuth2**
Estándar abierto de autorización utilizado por Factus. Permite a las aplicaciones obtener acceso limitado a la API en nombre de un usuario sin exponer sus credenciales directamente. Ver .

**Observación** _(campo `observation`)_
Campo de texto libre disponible en todos los documentos electrónicos para incluir información complementaria que no encaja en los campos estructurados (instrucciones de pago, referencias internas, etc.).

**Operación (tipo de)** _(campo `operation_type`)_
Código que clasifica la naturaleza del documento: `10` estándar, `11` mandatos, `12` transporte, `SS-CUFE/Reporte/SinAporte/Recaudo` sector salud; para notas crédito: `20` (con referencia) y `22` (sin referencia). Ver tabla completa en .

* * *

## P

[Sección titulada «P»](https://developers.factus.com.co/glosario#p)

**Partida arancelaria** _(código de identificación de producto `020`)_
Clasificación numérica del sistema armonizado de la Organización Mundial de Aduanas (OMA) que identifica mercancías en el comercio internacional. Se usa en `standard_code` cuando el producto tiene clasificación arancelaria.

**PDF**
Representación gráfica del documento electrónico lista para imprimir o compartir con el cliente. Factus genera el PDF de facturas, notas crédito y documentos soporte a través de endpoints dedicados de descarga.

**PEP (Permiso Especial de Permanencia)** _(código `47`)_
Documento de identidad emitido por Migración Colombia a ciudadanos venezolanos en Colombia. Disponible como tipo de identificación para adquirientes en Factus.

**Persona jurídica** _(código `1`)_
Entidad con personería jurídica: sociedades, empresas, fundaciones, etc. Se identifica en el campo `legal_organization_code` del adquiriente o del emisor.

**Persona natural** _(código `2`)_
Individuo que actúa como contribuyente a título personal, sin personería jurídica. Se identifica en `legal_organization_code`.

**PPT (Permiso de Protección Temporal)** _(código `48`)_
Documento de identidad temporal para ciudadanos venezolanos en Colombia. Disponible como tipo de identificación en Factus.

**Prefijo**
Código alfanumérico que junto con el consecutivo forma el número del documento (ej. `FACT` en `FACT-001`). Está definido dentro del rango de numeración aprobado por la DIAN.

**Precio base** _(campo `price`)_
Valor unitario del producto o servicio antes de aplicar impuestos y descuentos. Todos los cálculos de impuestos en Factus parten de este valor.

* * *

## R

[Sección titulada «R»](https://developers.factus.com.co/glosario#r)

**RADIAN**
Sistema de la DIAN para la gestión de los eventos del ciclo de vida de la factura electrónica (acuse de recibo, reclamo, recibo del bien, aceptación expresa/tácita). Factus expone endpoints para consultar y emitir estos eventos.

**Rango de numeración** _(campo `numbering_range_id`)_
Autorización emitida por la DIAN que define el prefijo, el rango de consecutivos (desde / hasta), la fecha de vigencia y la resolución asociada a un tipo de documento electrónico. Es el punto de partida para numerar facturas, notas crédito, documentos soporte, etc. Ver .

**Rate Limiting (Límite de solicitudes)**
Mecanismo de control que limita el número de peticiones que un usuario puede realizar a la API en un intervalo de tiempo. Factus permite **80 solicitudes por minuto**; al superar ese límite retorna `HTTP 429`. Ver .

**Recargo condicionado** _(código `03`)_
Cargo adicional al precio base de la factura sujeto a una condición (ej. recargo por pago tardío). Se registra en el objeto `allowance_charges`.

**Reclamo de factura** _(evento código `031`)_
Evento registrado ante la DIAN mediante el cual el adquiriente expresa inconformidad con una factura recibida. El motivo del reclamo se codifica con los códigos de concepto de reclamo (`01` al `04`).

**Refresh Token**
Token de larga duración que permite obtener un nuevo `access_token` sin que el usuario tenga que volver a ingresar sus credenciales. Se obtiene junto con el `access_token` en la autenticación inicial y se usa en el endpoint `POST oauth/token` con `grant_type=refresh_token`. Ver .

**Régimen simple de tributación** _(responsabilidad fiscal `0-47`)_
Régimen tributario simplificado opcional en Colombia que integra varios impuestos en una sola declaración. Los contribuyentes de este régimen lo informan en su responsabilidad fiscal.

**Resolución DIAN**
Acto administrativo mediante el cual la DIAN autoriza al contribuyente el uso de un rango de numeración específico para emitir documentos electrónicos. Cada rango de numeración en Factus tiene asociado un número de resolución y fechas de vigencia.

**Responsabilidad fiscal**
Código que describe el rol tributario de una empresa o persona frente al sistema impositivo colombiano (gran contribuyente, autorretenedor, agente de retención de IVA, régimen simple, no responsable). Se registra en el campo `fiscal_responsibility_code`.

**Retención** _(retenciones en la fuente)_
Mecanismo de recaudo anticipado de impuestos. En Factus se pueden registrar retenciones sobre renta (`06`), IVA (`05`) e ICA (`07`) a nivel de ítem dentro del array `taxes` o `withholding_taxes`.

**RUT (Registro Único Tributario)**
Documento oficial que formaliza la inscripción ante la DIAN de personas y entidades con obligaciones tributarias en Colombia. El nombre del contribuyente en las facturas debe coincidir exactamente con el registrado en el RUT para evitar notificaciones DIAN.

* * *

## S

[Sección titulada «S»](https://developers.factus.com.co/glosario#s)

**Sandbox**
Ver [Entorno Sandbox](https://developers.factus.com.co/glosario#entorno-sandbox).

**Status de validación**
Campo de la respuesta de la API que indica si la DIAN validó el documento. En V2: `status: "created"` con `validated_at` en `true` indica validación exitosa. Si `is_validated` es `false` y el campo `errors` contiene la palabra _“rechazo”_, el documento fue rechazado. Ver .

**Suscripción / Webhook**
Mecanismo que permite a Factus notificar a un sistema externo en tiempo real cuando ocurre un evento (ej. factura validada, nota crédito emitida). Se configura en el módulo de suscripciones del API. Ver .

* * *

## T

[Sección titulada «T»](https://developers.factus.com.co/glosario#t)

**Tablas de referencia**
Conjunto de catálogos con los códigos oficiales requeridos para emitir documentos electrónicos: tipos de documento, tipos de operación, impuestos, retenciones, métodos de pago, municipios, unidades de medida, entre otros. Ver .

**Token**
Ver [Access Token](https://developers.factus.com.co/glosario#access-token-token-de-acceso) o [Refresh Token](https://developers.factus.com.co/glosario#refresh-token) según el contexto.

**Transmisión tipo 03** _(código de documento `03`)_
Instrumento electrónico de transmisión de tipo 03. Modalidad especial de documento electrónico para ciertos casos de facturación que no requieren CUFE individual sino un mecanismo de transmisión masiva.

**Tributo** _(campo `tribute_code` en el adquiriente)_
Indica si el adquiriente es responsable del IVA (`01`) o no responsable (`ZZ`). Este dato afecta la forma en que la DIAN procesa el documento.

* * *

## U

[Sección titulada «U»](https://developers.factus.com.co/glosario#u)

**Unidad de medida** _(campo `unit_measure_code`)_
Código numérico que identifica la unidad en la que se mide el producto o servicio facturado (unidad = `94`, kilogramo = `57`, litro = `30`, hora = `60`, etc.). Los códigos completos están en .

**UNSPSC (United Nations Standard Products and Services Code)** _(código `001`)_
Clasificación internacional de productos y servicios utilizada en la facturación electrónica colombiana. Se registra en el campo `standard_code` del ítem. Permite a la DIAN identificar el tipo de bien o servicio transado.

* * *

## V

[Sección titulada «V»](https://developers.factus.com.co/glosario#v)

**Validación DIAN**
Proceso mediante el cual la DIAN verifica que el documento electrónico cumple con todas las reglas técnicas y normativas antes de otorgarle validez fiscal. En Factus se realiza mediante los endpoints `*/validate`. El resultado se indica en el campo `status` / `validated_at` de la respuesta.

* * *

## X

[Sección titulada «X»](https://developers.factus.com.co/glosario#x)

**XML**
Formato técnico en el que se genera el documento electrónico para su transmisión a la DIAN. Factus permite descargar el XML estándar de cualquier documento electrónico validado a través de sus endpoints de descarga.

**XML AttachedDocument**
Variante del XML que incluye tanto el documento electrónico principal como los eventos y representaciones gráficas asociadas en un único archivo. Factus expone un endpoint específico para descargarlo en facturas y notas crédito.

* * *
