# Manejo de respuestas API FACTUS

#### Confirmar o resolver problemas con facturas emitidas

[Sección titulada «Confirmar o resolver problemas con facturas emitidas»](https://developers.factus.com.co/manejo-errores#confirmar-o-resolver-problemas-con-facturas-emitidas)

##### Versión 1:

[Sección titulada «Versión 1:»](https://developers.factus.com.co/manejo-errores#versi%C3%B3n-1)

* **Para confirmar que una factura se validó correctamente:**
En la respuesta del API viene un Campo `status`, cuando esté campo es **“1”** la factura está validada por la DIAN.
* **Cuando la factura no ha sido validada:**
En la respuesta del API viene un Campo `status`, cuando esté campo es **“0”** la factura fue rechazada.
* **El documento es rechazado cuando:**
Se verifica el campo `status` \[si no es 1\] -> se verifica el campo `errors` y viene con **“rechazo”**.

##### Versión 2:

[Sección titulada «Versión 2:»](https://developers.factus.com.co/manejo-errores#versi%C3%B3n-2)

* **Para confirmar que la factura se validó correctamente por la DIAN:**
El API regresa en el campo `status: "created"` y el campo `validated_at: "true"`.
* **El documento es rechazado cuando:**
Se verifica el campo `is_validated` \[si no esta en true\] -> se verifica el campo `errors` y viene con **“rechazo”**.

* * *

### Algunos ejemplos de respuesta

[Sección titulada «Algunos ejemplos de respuesta»](https://developers.factus.com.co/manejo-errores#algunos-ejemplos-de-respuesta)

Es muy importante distinguir entre un error de rechazo y una notificación informativa. A veces verás textos en el campo de “errors” que no significan que la factura haya sido rechazada, sino que son avisos de la DIAN (consultar los campos indicados anteriormente).

##### 1) Notificaciones

[Sección titulada «1) Notificaciones»](https://developers.factus.com.co/manejo-errores#1-notificaciones)

Si tu factura aparece como Aprobada según las consideraciones anteriores, pero ves estos códigos, no te preocupes, tu factura es 100% válida, algunos ejemplos pueden ser:

* **“FAJ44b”: “Regla: FAJ44b, Notificación”**
Este error de “Notificacion” se da por que el NIT de la empresa con el que se hace el envío no tiene el mismo nombre letra por letra que el que esta en el RUT.
* **“RUT01”: “Regla: RUT01, Notificación: ”**
Este error es muy normal que aparezca en todos los documentos, lo que quiere decir es que la DIAN mas adelante va a validar el estado del RUT a través de NIT que se envía.

##### 2) Rechazo

[Sección titulada «2) Rechazo»](https://developers.factus.com.co/manejo-errores#2-rechazo)

Cuando el documento ha sido rechazado (consultar los campos indicados anteriormente) encontraras en el campo “errors” un mensaje con la palabra rechazo:

* **“FAJ43b”: “Regla: FAJ43b, Rechazo: “razon del rechazo”**

* * *

### Resolución de Problemas

[Sección titulada «Resolución de Problemas»](https://developers.factus.com.co/manejo-errores#resoluci%C3%B3n-de-problemas)

Para mantener el flujo de facturación sin interrupciones, ten en cuenta estas dos situaciones:

##### 1) Si la factura es rechazada por error de datos:

[Sección titulada «1) Si la factura es rechazada por error de datos:»](https://developers.factus.com.co/manejo-errores#1-si-la-factura-es-rechazada-por-error-de-datos)

Si el API confirma un rechazo, el sistema se “bloqueará” para nuevos:

* **Acción:** Debes eliminar el registro fallido del API, corregir los datos (en tu sistema o en el JSON) y reenviarla. Si no eliminas la factura rechazada, el API no permitirá procesar los siguientes envíos.

##### 2) Si hay demora en la respuesta de la DIAN:

[Sección titulada «2) Si hay demora en la respuesta de la DIAN:»](https://developers.factus.com.co/manejo-errores#2-si-hay-demora-en-la-respuesta-de-la-dian)

A veces la DIAN tarda más de lo normal en responder. En estos casos, recibirás un `status: 0` (v1) o `is_validated: false` (v2), pero no verás un mensaje de rechazo en el campo de `errors`.

* **Acción:** No elimines la factura. Simplemente haz un reintento de envío con los mismos datos originales. El API detectará que es un reintento, consultará el estado actual en la DIAN y actualizará el status automáticamente sin generar duplicados.

#### Cómo reportar errores

[Sección titulada «Cómo reportar errores»](https://developers.factus.com.co/manejo-errores#c%C3%B3mo-reportar-errores)

En **Factus**, el soporte a nuestros integradores es primordial. Para ayudarte a resolver cualquier inconveniente con la mayor rapidez posible, ten en cuenta las siguientes recomendaciones antes de solicitar soporte técnico.

* * *

1. **Captura la respuesta de Factus:**
El mensaje o código de error devuelto por la API es nuestra fuente de verdad. Con esta información, el equipo de soporte puede diagnosticar y solucionar el problema directamente.

2. **Identifica el ambiente:**
Especifica si estás trabajando en **Sandbox** (pruebas) o **Producción**, ya que el flujo de revisión varía según el entorno.

3. **Indica el NIT de la empresa:**
Si gestionas múltiples cuentas o empresas activas, incluye el NIT de la empresa afectada al solicitar asistencia.

4. **Proporciona el endpoint completo:**
Indica la ruta completa de la petición donde ocurre la falla (no solo la URL base del ambiente).

5. **Verifica la petición:**
Asegúrate de estar enviando las cabeceras (_headers_), tokens de autenticación y datos necesarios para la generación del documento electrónico.

6. **Adjunta el _payload_:**
Guarda y comparte el cuerpo (_payload_) de las solicitudes de creación. Enviárnoslo nos permite replicar el escenario en nuestro ambiente de soporte.

* * *

#### Requisitos mínimos para solicitar soporte

[Sección titulada «Requisitos mínimos para solicitar soporte»](https://developers.factus.com.co/manejo-errores#requisitos-m%C3%ADnimos-para-solicitar-soporte)

Para procesar tu solicitud de manera eficiente, asegúrate de incluir los siguientes datos:

* **NIT del facturador**
* **Ambiente de trabajo** (Sandbox o Producción)
* **Endpoint completo de la petición**
* **Mensaje de error devuelto por la API**
* **Payload (JSON)** enviado en la solicitud
