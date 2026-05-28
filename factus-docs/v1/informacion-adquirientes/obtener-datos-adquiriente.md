# Obtener datos de adquirientes

Este contenido es para V1. Cambia a la [versión más reciente](https://developers.factus.com.co/) para ver la documentación actualizada.

El endpoint **Obtener datos de adquirientes** permite consultar el nombre o razón social y la dirección de correo electrónico asociada a un adquiriente, utilizando como criterios de búsqueda el tipo y número de documento.

La DIAN ha implementado un nuevo servicio de consulta para completar la información de adquirientes con el objetivo de facilitar y agilizar la generación de facturas electrónicas.

Un comprador solo tendrá que indicar su tipo y número de documento y, con esta información, el servicio completará automáticamente los datos necesarios para generar la factura, como su nombre y correo electrónico, sin necesidad de ingresarlos manualmente.

**Método:** GET

#### **Endpoint**

* [Pruebas](https://developers.factus.com.co/v1/informacion-adquirientes/obtener-datos-adquiriente#tab-panel-208)
* [Producción](https://developers.factus.com.co/v1/informacion-adquirientes/obtener-datos-adquiriente#tab-panel-209)

```
https://api-sandbox.factus.com.co/v1/dian/acquirer?identification_document_id=&identification_number=
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

### Request

[Sección titulada «Request»](https://developers.factus.com.co/v1/informacion-adquirientes/obtener-datos-adquiriente#request)

`https://api-sandbox.factus.com.co/v1/dian/acquirer?identification_document_id=3&identification_number=1399995`

| Parámetro | Descripción |
| --- | --- |
| `identification_document_id` | ID que corresponda al tipo de identificación. Para saber cual ID corresponde al tipo de identificación consulte la siguiente tabla [IDs tipos de documentos.](https://developers.factus.com.co/v1/tablas-de-referencia/tablas/#ids-de-tipos-de-documentos-de-identidad) |
| `identification_number` | Número de documento del adquiriente. |

### Response

[Sección titulada «Response»](https://developers.factus.com.co/v1/informacion-adquirientes/obtener-datos-adquiriente#response)

La consulta devuelve un objecto con el nombre y correo del adquiriente.

* * *

| Campo | Descripción |
| --- | --- |
| `name` | Nombre del adquiriente. |
| `email` | Email del adquiriente. |

* * *

### Ejemplo de respuesta

[Sección titulada «Ejemplo de respuesta»](https://developers.factus.com.co/v1/informacion-adquirientes/obtener-datos-adquiriente#ejemplo-de-respuesta)

* [status 200](https://developers.factus.com.co/v1/informacion-adquirientes/obtener-datos-adquiriente#tab-panel-210)

```
{ "status": "OK", "message": "Solicitud exitosa", "data": { "name": "Nombre Cédula de ciudadanía 5", "email": "Mail_Cédula de ciudadaní[email protected]" }}
```

### Datos de prueba

[Sección titulada «Datos de prueba»](https://developers.factus.com.co/v1/informacion-adquirientes/obtener-datos-adquiriente#datos-de-prueba)

Estos son los datos de ejemplo proporcionados por la DIAN, destinados exclusivamente para realizar consultas y pruebas en entornos de prueba.

| ID de documento | Número de documento | Nombre o Razón Social | Correo de recepción de factura electrónica |
| --- | --- | --- | --- |
| 1 | 1199991 | Nombre Registro civil 1 | Mail\_Registro [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#42212b342b2e1d73022f232b2e6c212d2f) |
| 1 | 1199992 | Nombre Registro civil 2 | Mail\_Registro [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#c7a4aeb1aeab98f587aaa6aeabe9a4a8aa) |
| 1 | 1199993 | Nombre Registro civil 3 | Mail\_Registro [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#197a706f7075462a5974787075377a7674) |
| 1 | 1199994 | Nombre Registro civil 4 | Mail\_Registro [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#6e0d07180702315a2e030f0702400d0103) |
| 1 | 1199995 | Nombre Registro civil 5 | Mail\_Registro [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#aecdc7d8c7c2f19beec3cfc7c280cdc1c3) |
| 1 | 1199996 | Nombre Registro civil 6 | Mail\_Registro [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#a8cbc1dec1c4f79ee8c5c9c1c486cbc7c5) |
| 1 | 1199997 | Nombre Registro civil 7 | Mail\_Registro [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#482b213e2124177f0825292124662b2725) |
| 1 | 1199998 | Nombre Registro civil 8 | Mail\_Registro [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#4e2d2738272211760e232f2722602d2123) |
| 1 | 1199999 | Nombre Registro civil 9 | Mail\_Registro [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#ff9c96899693a0c6bf929e9693d19c9092) |
| 1 | 11999910 | Nombre Registro civil 10 | Mail\_Registro [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#2c4f455a4540731d1c6c414d4540024f4341) |
| 2 | 1299991 | Nombre Tarjeta de identidad 1 | Mail\_Tarjeta de [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#503934353e24393431340f61103d31393c7e333f3d) |
| 2 | 1299992 | Nombre Tarjeta de identidad 2 | Mail\_Tarjeta de [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#90f9f4f5fee4f9f4f1f4cfa2d0fdf1f9fcbef3fffd) |
| 2 | 1299993 | Nombre Tarjeta de identidad 3 | Mail\_Tarjeta de [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#dab3bebfb4aeb3bebbbe85e99ab7bbb3b6f4b9b5b7) |
| 2 | 1299994 | Nombre Tarjeta de identidad 4 | Mail\_Tarjeta de [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#254c41404b514c4144417a116548444c490b464a48) |
| 2 | 1299995 | Nombre Tarjeta de identidad 5 | Mail\_Tarjeta de [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#e48d80818a908d808580bbd1a489858d88ca878b89) |
| 2 | 1299996 | Nombre Tarjeta de identidad 6 | Mail\_Tarjeta de [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#ee878a8b809a878a8f8ab1d8ae838f8782c08d8183) |
| 2 | 1299997 | Nombre Tarjeta de identidad 7 | Mail\_Tarjeta de [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#4f262b2a213b262b2e2b10780f222e2623612c2022) |
| 2 | 1299998 | Nombre Tarjeta de identidad 8 | Mail\_Tarjeta de [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#bcd5d8d9d2c8d5d8ddd8e384fcd1ddd5d092dfd3d1) |
| 2 | 1299999 | Nombre Tarjeta de identidad 9 | Mail\_Tarjeta de [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#e78e838289938e838683b8dea78a868e8bc984888a) |
| 2 | 12999910 | Nombre Tarjeta de identidad 10 | Mail\_Tarjeta de [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#08616c6d667c616c696c5739384865696164266b6765) |
| 3 | 1399991 | Nombre Cédula de ciudadanía 1 | Mail\_Cédula de ciudadanía\_[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#5667163b373f3a7835393b) |
| 3 | 1399992 | Nombre Cédula de ciudadanía 2 | Mail\_Cédula de ciudadanía\_[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#182a5875797174367b7775) |
| 3 | 1399993 | Nombre Cédula de ciudadanía 3 | Mail\_Cédula de ciudadanía\_[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#25166548444c490b464a48) |
| 3 | 1399994 | Nombre Cédula de ciudadanía 4 | Mail\_Cédula de ciudadanía\_[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#af9befc2cec6c381ccc0c2) |
| 3 | 1399995 | Nombre Cédula de ciudadanía 5 | Mail\_Cédula de ciudadanía\_[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#d2e792bfb3bbbefcb1bdbf) |
| 3 | 1399996 | Nombre Cédula de ciudadanía 6 | Mail\_Cédula de ciudadanía\_[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#4e780e232f2722602d2123) |
| 3 | 1399997 | Nombre Cédula de ciudadanía 7 | Mail\_Cédula de ciudadanía\_[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#487f0825292124662b2725) |
| 3 | 1399998 | Nombre Cédula de ciudadanía 8 | Mail\_Cédula de ciudadanía\_[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#2e166e434f4742004d4143) |
| 3 | 1399999 | Nombre Cédula de ciudadanía 9 | Mail\_Cédula de ciudadanía\_[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#6c552c010d0500420f0301) |
| 3 | 13999910 | Nombre Cédula de ciudadanía 10 | Mail\_Cédula de ciudadanía\_[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#d4e5e494b9b5bdb8fab7bbb9) |
| 4 | 2199991 | Nombre Tarjeta de extranjería 1 | Mail\_Tarjeta de extranjería\_[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#a594e5c8c4ccc98bc6cac8) |
| 4 | 2199992 | Nombre Tarjeta de extranjería 2 | Mail\_Tarjeta de extranjería\_[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#4f7d0f222e2623612c2022) |
| 4 | 2199993 | Nombre Tarjeta de extranjería 3 | Mail\_Tarjeta de extranjería\_[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#05364568646c692b666a68) |
| 4 | 2199994 | Nombre Tarjeta de extranjería 4 | Mail\_Tarjeta de extranjería\_[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#3105715c50585d1f525e5c) |
| 4 | 2199995 | Nombre Tarjeta de extranjería 5 | Mail\_Tarjeta de extranjería\_[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#1d285d707c7471337e7270) |
| 4 | 2199996 | Nombre Tarjeta de extranjería 6 | Mail\_Tarjeta de extranjería\_[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#3c0a7c515d5550125f5351) |
| 4 | 2199997 | Nombre Tarjeta de extranjería 7 | Mail\_Tarjeta de extranjería\_[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#c4f384a9a5ada8eaa7aba9) |
| 4 | 2199998 | Nombre Tarjeta de extranjería 8 | Mail\_Tarjeta de extranjería\_[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#023a426f636b6e2c616d6f) |
| 4 | 2199999 | Nombre Tarjeta de extranjería 9 | Mail\_Tarjeta de extranjería\_[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#e9d0a984888085c78a8684) |
| 4 | 21999910 | Nombre Tarjeta de extranjería 10 | Mail\_Tarjeta de extranjería\_[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#ccfdfc8ca1ada5a0e2afa3a1) |
| 5 | 2299991 | Nombre Cédula de extranjería 1 | Mail\_Cédula de extranjería\_[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#3b0a7b565a525715585456) |
| 5 | 2299992 | Nombre Cédula de extranjería 2 | Mail\_Cédula de extranjería\_[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#e6d4a68b878f8ac885898b) |
| 5 | 2299993 | Nombre Cédula de extranjería 3 | Mail\_Cédula de extranjería\_[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#9cafdcf1fdf5f0b2fff3f1) |
| 5 | 2299994 | Nombre Cédula de extranjería 4 | Mail\_Cédula de extranjería\_[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#390d7954585055175a5654) |
| 5 | 2299995 | Nombre Cédula de extranjería 5 | Mail\_Cédula de extranjería\_[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#c2f782afa3abaeeca1adaf) |
| 5 | 2299996 | Nombre Cédula de extranjería 6 | Mail\_Cédula de extranjería\_[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#bb8dfbd6dad2d795d8d4d6) |
| 5 | 2299997 | Nombre Cédula de extranjería 7 | Mail\_Cédula de extranjería\_[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#34037459555d581a575b59) |
| 5 | 2299998 | Nombre Cédula de extranjería 8 | Mail\_Cédula de extranjería\_[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#efd7af828e8683c18c8082) |
| 5 | 2299999 | Nombre Cédula de extranjería 9 | Mail\_Cédula de extranjería\_[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#132a537e727a7f3d707c7e) |
| 5 | 22999910 | Nombre Cédula de extranjería 10 | Mail\_Cédula de extranjería\_[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#102120507d71797c3e737f7d) |
| 6 | 3199991 | Nombre NIT 1 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#773a161e1b28393e232846371a161e1b5914181a) |
| 6 | 3199992 | Nombre NIT 2 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#38755951546776716c670a7855595154165b5755) |
| 6 | 3199993 | Nombre NIT 3 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#2a674b43467564637e75196a474b434604494547) |
| 6 | 3199994 | Nombre NIT 4 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#8ac7ebe3e6d5c4c3ded5becae7ebe3e6a4e9e5e7) |
| 6 | 3199995 | Nombre NIT 5 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#7c311d15102332352823493c111d1510521f1311) |
| 6 | 3199996 | Nombre NIT 6 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#4c012d252013020518137a0c212d2520622f2321) |
| 6 | 3199997 | Nombre NIT 7 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#5c113d353003121508036b1c313d3530723f3331) |
| 6 | 3199998 | Nombre NIT 8 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#b7fad6dedbe8f9fee3e88ff7dad6dedb99d4d8da) |
| 6 | 3199999 | Nombre NIT 9 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#88c5e9e1e4d7c6c1dcd7b1c8e5e9e1e4a6ebe7e5) |
| 6 | 31999910 | Nombre NIT 10 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#d09db1b9bc8f9e99848fe1e090bdb1b9bcfeb3bfbd) |
| 7 | 4199991 | Nombre Pasaporte 1 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#ca87aba3a6959aabb9abbaa5b8beaf95fb8aa7aba3a6e4a9a5a7) |
| 7 | 4199992 | Nombre Pasaporte 2 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#5a173b3336050a3b293b2a35282e3f05681a373b333674393537) |
| 7 | 4199993 | Nombre Pasaporte 3 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#e2af838b8ebdb2839183928d909687bdd1a28f838b8ecc818d8f) |
| 7 | 4199994 | Nombre Pasaporte 4 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#571a363e3b080736243627382523320863173a363e3b7934383a) |
| 7 | 4199995 | Nombre Pasaporte 5 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#135e727a7f4c43726072637c6167764c26537e727a7f3d707c7e) |
| 7 | 4199996 | Nombre Pasaporte 6 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#5518343c390a05342634253a2721300a631538343c397b363a38) |
| 7 | 4199997 | Nombre Pasaporte 7 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#4508242c291a15243624352a3731201a720528242c296b262a28) |
| 7 | 4199998 | Nombre Pasaporte 8 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#7a371b1316252a1b091b0a15080e1f25423a171b131654191517) |
| 7 | 4199999 | Nombre Pasaporte 9 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#6b260a0207343b0a180a1b04191f0e34522b060a020745080406) |
| 7 | 41999910 | Nombre Pasaporte 10 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#fcb19d9590a3ac9d8f9d8c938e8899a3cdccbc919d9590d29f9391) |
| 8 | 4299991 | Nombre Documento de identificación extranjero 1 | Mail\_Documento de identificación [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#d0b5a8a4a2b1bebab5a2bf8fe190bdb1b9bcfeb3bfbd) |
| 8 | 4299992 | Nombre Documento de identificación extranjero 2 | Mail\_Documento de identificación [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#f2978a8680939c9897809dadc0b29f939b9edc919d9f) |
| 8 | 4299993 | Nombre Documento de identificación extranjero 3 | Mail\_Documento de identificación [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#73160b0701121d1916011c2c40331e121a1f5d101c1e) |
| 8 | 4299994 | Nombre Documento de identificación extranjero 4 | Mail\_Documento de identificación [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#2c4954585e4d4246495e4373186c414d4540024f4341) |
| 8 | 4299995 | Nombre Documento de identificación extranjero 5 | Mail\_Documento de identificación [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#2c4954585e4d4246495e4373196c414d4540024f4341) |
| 8 | 4299996 | Nombre Documento de identificación extranjero 6 | Mail\_Documento de identificación [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#b4d1ccc0c6d5daded1c6dbeb82f4d9d5ddd89ad7dbd9) |
| 8 | 4299997 | Nombre Documento de identificación extranjero 7 | Mail\_Documento de identificación [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#fa9f828e889b94909f8895a5cdba979b9396d4999597) |
| 8 | 4299998 | Nombre Documento de identificación extranjero 8 | Mail\_Documento de identificación [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#05607d7177646b6f60776a5a3d4568646c692b666a68) |
| 8 | 4299999 | Nombre Documento de identificación extranjero 9 | Mail\_Documento de identificación [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#1b7e636f697a75717e697444225b767a727735787476) |
| 8 | 42999910 | Nombre Documento de identificación extranjero 10 | Mail\_Documento de identificación [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#37524f434556595d524558680607775a565e5b1954585a) |
| 10 | 5099991 | Nombre NIT de otro país 1 | Mail\_NIT de otro país\_[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#a495e4c9c5cdc88ac7cbc9) |
| 10 | 5099992 | Nombre NIT de otro país 2 | Mail\_NIT de otro país\_[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#d4e694b9b5bdb8fab7bbb9) |
| 10 | 5099993 | Nombre NIT de otro país 3 | Mail\_NIT de otro país\_[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#f9cab994989095d79a9694) |
| 10 | 5099994 | Nombre NIT de otro país 4 | Mail\_NIT de otro país\_[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#e3d7a38e828a8fcd808c8e) |
| 10 | 5099995 | Nombre NIT de otro país 5 | Mail\_NIT de otro país\_[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#586d1835393134763b3735) |
| 10 | 5099996 | Nombre NIT de otro país 6 | Mail\_NIT de otro país\_[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#be88fed3dfd7d290ddd1d3) |
| 10 | 5099997 | Nombre NIT de otro país 7 | Mail\_NIT de otro país\_[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#04334469656d682a676b69) |
| 10 | 5099998 | Nombre NIT de otro país 8 | Mail\_NIT de otro país\_[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#221a624f434b4e0c414d4f) |
| 10 | 5099999 | Nombre NIT de otro país 9 | Mail\_NIT de otro país\_[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#ab92ebc6cac2c785c8c4c6) |
| 10 | 50999910 | Nombre NIT de otro país 10 | Mail\_NIT de otro país\_[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#cdfcfd8da0aca4a1e3aea2a0) |
| 11 | 9199991 | Nombre NUIP \* 1 | Mail\_NUIP \*[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#712e40311c10181d5f121e1c) |
| 11 | 9199992 | Nombre NUIP \* 2 | Mail\_NUIP \*[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#49167b0924282025672a2624) |
| 11 | 9199993 | Nombre NUIP \* 3 | Mail\_NUIP \*[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#93cca0d3fef2faffbdf0fcfe) |
| 11 | 9199994 | Nombre NUIP \* 4 | Mail\_NUIP \*[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#207f14604d41494c0e434f4d) |
| 11 | 9199995 | Nombre NUIP \* 5 | Mail\_NUIP \*[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#f4abc1b499959d98da979b99) |
| 11 | 9199996 | Nombre NUIP \* 6 | Mail\_NUIP \*[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#5b046d1b363a323775383436) |
| 11 | 9199997 | Nombre NUIP \* 7 | Mail\_NUIP \*[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#9bc4acdbf6faf2f7b5f8f4f6) |
| 11 | 9199998 | Nombre NUIP \* 8 | Mail\_NUIP \*[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#b5ea8df5d8d4dcd99bd6dad8) |
| 11 | 9199999 | Nombre NUIP \* 9 | Mail\_NUIP \*[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#c09ff980ada1a9aceea3afad) |
| 11 | 91999910 | Nombre NUIP \* 10 | Mail\_NUIP \*[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#76294746361b171f1a5815191b) |
