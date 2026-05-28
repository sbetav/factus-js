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
* **“RUT01”: “Regla: RUT01, Notificación:”**
Este error de “Notificacion” se da por que el NIT del cliente no conincide con el nombre en el RUT, en el objeto “customer” el NIT que se envía no corresponde con el nombre en el RUT.
* **“RUT01”: “Regla: RUT01, Notificación: ”**
Este error es muy normal que aparezca en todos los documentos, lo que quiere decir es que la DIAN mas adelante va a validar el estado del RUT a través de NIT que se envía.

##### 2) Rechazo

[Sección titulada «2) Rechazo»](https://developers.factus.com.co/manejo-errores#2-rechazo)

Cuando el documento ha sido rechazado (consultar los campos indicados anteriormente) encontraras en el campo “errors” un mensaje con la palabra rechazo:

* **“FAJ43b”: “Regla: FAJ43b, Rechazo: “razon del rechazo”**

* * *

### Información Importante resolución de Problemas

[Sección titulada «Información Importante resolución de Problemas»](https://developers.factus.com.co/manejo-errores#informaci%C3%B3n-importante-resoluci%C3%B3n-de-problemas)

Para mantener el flujo de facturación sin interrupciones, ten en cuenta estas dos situaciones:

##### 1) Si la factura es rechazada por error de datos:

[Sección titulada «1) Si la factura es rechazada por error de datos:»](https://developers.factus.com.co/manejo-errores#1-si-la-factura-es-rechazada-por-error-de-datos)

Si el API confirma un rechazo, el sistema se “bloqueará” para nuevos:

* **Acción:** Debes eliminar el registro fallido del API, corregir los datos (en tu sistema o en el JSON) y reenviarla. Si no eliminas la factura rechazada, el API no permitirá procesar los siguientes envíos.

##### 2) Si hay demora en la respuesta de la DIAN:

[Sección titulada «2) Si hay demora en la respuesta de la DIAN:»](https://developers.factus.com.co/manejo-errores#2-si-hay-demora-en-la-respuesta-de-la-dian)

A veces la DIAN tarda más de lo normal en responder. En estos casos, recibirás un `status: 0` (v1) o `is_validated: false` (v2), pero no verás un mensaje de rechazo en el campo de `errors`.

* **Acción:** No elimines la factura. Simplemente haz un reintento de envío con los mismos datos originales. El API detectará que es un reintento, consultará el estado actual en la DIAN y actualizará el status automáticamente sin generar duplicados.
