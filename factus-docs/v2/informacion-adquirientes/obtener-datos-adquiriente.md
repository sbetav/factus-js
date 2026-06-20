# Obtener datos de adquirientes

El endpoint permite consultar el nombre o razón social y la dirección de correo electrónico asociada a un adquiriente, utilizando como criterios de búsqueda el tipo y número de documento.

La DIAN ha implementado un nuevo servicio de consulta para completar la información de adquirientes con el objetivo de facilitar y agilizar la generación de facturas electrónicas.

**Método:** GET

#### **Endpoint**

* [Sandbox](https://developers.factus.com.co/informacion-adquirientes/obtener-datos-adquiriente#tab-panel-49)
* [Producción](https://developers.factus.com.co/informacion-adquirientes/obtener-datos-adquiriente#tab-panel-50)

```
https://api-sandbox.factus.com.co/v2/dian/acquirer?identification_document_code=&identification_number=
```

### **Encabezados de la Solicitud**

Incluye los siguientes encabezados.

<table><tbody><tr><td><code>Content-Type</code> : <code>application/json</code><br>Indica que los datos se envían en formato JSON.</td></tr><tr><td><code>Authorization Bearer token_de_acceso</code><br>Token de autenticación necesario para acceder al recurso. Ver <a href="https://developers.factus.com.co/autenticacion/auth" target="_blank">Cómo generar token</a></td></tr><tr><td><code>Accept</code> : <code>application/json</code><br>Indica que la respuesta debe estar en formato JSON.</td></tr></tbody></table>

``**Nota:** Reemplaza `token_de_acceso` con el token proporcionado tras autenticarte.``

### Variables de Ruta, Path Variables

[Sección titulada «Variables de Ruta, Path Variables»](https://developers.factus.com.co/informacion-adquirientes/obtener-datos-adquiriente#variables-de-ruta-path-variables)

| |
| --- |
| **`identification_document_code`** `string`
Código que corresponda al tipo de identificación. Para saber cual código corresponde al tipo de identificación consulte la siguiente tabla.

[Códigos de tipos de documentos.](https://developers.factus.com.co/tablas-de-referencia/tablas/#c%C3%B3digos-de-tipos-de-documentos-de-identidad) |
| **`identification_number`** `string`

Número de documento del adquiriente.

|

### Response

[Sección titulada «Response»](https://developers.factus.com.co/informacion-adquirientes/obtener-datos-adquiriente#response)

La consulta devuelve un objecto con el nombre y correo del adquiriente.

* * *

| Campo | Descripción |
| --- | --- |
| `name` | Nombre del adquiriente. |
| `email` | Email del adquiriente. |

### Ejemplo de respuesta

[Sección titulada «Ejemplo de respuesta»](https://developers.factus.com.co/informacion-adquirientes/obtener-datos-adquiriente#ejemplo-de-respuesta)

* [status 200](https://developers.factus.com.co/informacion-adquirientes/obtener-datos-adquiriente#tab-panel-51)

```
{ "status": "OK", "message": "Solicitud exitosa", "data": { "name": "Nombre Cédula de ciudadanía 5", "email": "Mail_Cédula de ciudadaní[email protected]" }}
```

### Datos de prueba

[Sección titulada «Datos de prueba»](https://developers.factus.com.co/informacion-adquirientes/obtener-datos-adquiriente#datos-de-prueba)

Estos son los datos de ejemplo proporcionados por la DIAN, destinados exclusivamente para realizar consultas y pruebas en entornos de prueba.

| ID de documento | Número de documento | Nombre o Razón Social | Correo de recepción de factura electrónica |
| --- | --- | --- | --- |
| 1 | 1199991 | Nombre Registro civil 1 | Mail\_Registro [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#b0d3d9c6d9dcef81f0ddd1d9dc9ed3dfdd) |
| 1 | 1199992 | Nombre Registro civil 2 | Mail\_Registro [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#5a39332c333605681a373b333674393537) |
| 1 | 1199993 | Nombre Registro civil 3 | Mail\_Registro [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#5c3f352a3530036f1c313d3530723f3331) |
| 1 | 1199994 | Nombre Registro civil 4 | Mail\_Registro [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#17747e617e7b4823577a767e7b3974787a) |
| 1 | 1199995 | Nombre Registro civil 5 | Mail\_Registro [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#36555f405f5a6903765b575f5a1855595b) |
| 1 | 1199996 | Nombre Registro civil 6 | Mail\_Registro [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#9ffcf6e9f6f3c0a9dff2fef6f3b1fcf0f2) |
| 1 | 1199997 | Nombre Registro civil 7 | Mail\_Registro [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#eb88829d8287b4dcab868a8287c5888486) |
| 1 | 1199998 | Nombre Registro civil 8 | Mail\_Registro [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#7f1c1609161320473f121e1613511c1012) |
| 1 | 1199999 | Nombre Registro civil 9 | Mail\_Registro [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#1b78726d727744225b767a727735787476) |
| 1 | 11999910 | Nombre Registro civil 10 | Mail\_Registro [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#30535946595c6f0100705d51595c1e535f5d) |
| 2 | 1299991 | Nombre Tarjeta de identidad 1 | Mail\_Tarjeta de [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#fb929f9e958f929f9a9fa4cabb969a9297d5989496) |
| 2 | 1299992 | Nombre Tarjeta de identidad 2 | Mail\_Tarjeta de [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#68010c0d061c010c090c375a2805090104460b0705) |
| 2 | 1299993 | Nombre Tarjeta de identidad 3 | Mail\_Tarjeta de [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#d9b0bdbcb7adb0bdb8bd86ea99b4b8b0b5f7bab6b4) |
| 2 | 1299994 | Nombre Tarjeta de identidad 4 | Mail\_Tarjeta de [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#b6dfd2d3d8c2dfd2d7d2e982f6dbd7dfda98d5d9db) |
| 2 | 1299995 | Nombre Tarjeta de identidad 5 | Mail\_Tarjeta de [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#7d141918130914191c1922483d101c1411531e1210) |
| 2 | 1299996 | Nombre Tarjeta de identidad 6 | Mail\_Tarjeta de [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#fe979a9b908a979a9f9aa1c8be939f9792d09d9193) |
| 2 | 1299997 | Nombre Tarjeta de identidad 7 | Mail\_Tarjeta de [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#355c51505b415c5154516a027558545c591b565a58) |
| 2 | 1299998 | Nombre Tarjeta de identidad 8 | Mail\_Tarjeta de [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#87eee3e2e9f3eee3e6e3d8bfc7eae6eeeba9e4e8ea) |
| 2 | 1299999 | Nombre Tarjeta de identidad 9 | Mail\_Tarjeta de [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#731a17161d071a1712172c4a331e121a1f5d101c1e) |
| 2 | 12999910 | Nombre Tarjeta de identidad 10 | Mail\_Tarjeta de [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#78111c1d160c111c191c2749483815191114561b1715) |
| 3 | 1399991 | Nombre Cédula de ciudadanía 1 | Mail\_Cédula de ciudadaní[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#6a0b355b2a070b030644090507) |
| 3 | 1399992 | Nombre Cédula de ciudadanía 2 | Mail\_Cédula de ciudadaní[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#97f6c8a5d7faf6fefbb9f4f8fa) |
| 3 | 1399993 | Nombre Cédula de ciudadanía 3 | Mail\_Cédula de ciudadaní[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#61003e52210c00080d4f020e0c) |
| 3 | 1399994 | Nombre Cédula de ciudadanía 4 | Mail\_Cédula de ciudadaní[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#b8d9e78cf8d5d9d1d496dbd7d5) |
| 3 | 1399995 | Nombre Cédula de ciudadanía 5 | Mail\_Cédula de ciudadaní[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#85e4dab0c5e8e4ece9abe6eae8) |
| 3 | 1399996 | Nombre Cédula de ciudadanía 6 | Mail\_Cédula de ciudadaní[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#a0c1ff96e0cdc1c9cc8ec3cfcd) |
| 3 | 1399997 | Nombre Cédula de ciudadanía 7 | Mail\_Cédula de ciudadaní[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#40211f77002d21292c6e232f2d) |
| 3 | 1399998 | Nombre Cédula de ciudadanía 8 | Mail\_Cédula de ciudadaní[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#fa9ba5c2ba979b9396d4999597) |
| 3 | 1399999 | Nombre Cédula de ciudadanía 9 | Mail\_Cédula de ciudadaní[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#fb9aa4c2bb969a9297d5989496) |
| 3 | 13999910 | Nombre Cédula de ciudadanía 10 | Mail\_Cédula de ciudadaní[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#2d4c721c1d6d404c4441034e4240) |
| 4 | 2199991 | Nombre Tarjeta de extranjería 1 | Mail\_Tarjeta de extranjerí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#16774927567b777f7a3875797b) |
| 4 | 2199992 | Nombre Tarjeta de extranjería 2 | Mail\_Tarjeta de extranjerí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#3b5a64097b565a525715585456) |
| 4 | 2199993 | Nombre Tarjeta de extranjería 3 | Mail\_Tarjeta de extranjerí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#20417f13604d41494c0e434f4d) |
| 4 | 2199994 | Nombre Tarjeta de extranjería 4 | Mail\_Tarjeta de extranjerí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#aacbf59eeac7cbc3c684c9c5c7) |
| 4 | 2199995 | Nombre Tarjeta de extranjería 5 | Mail\_Tarjeta de extranjerí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#64053b512409050d084a070b09) |
| 4 | 2199996 | Nombre Tarjeta de extranjería 6 | Mail\_Tarjeta de extranjerí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#47261871072a262e2b6924282a) |
| 4 | 2199997 | Nombre Tarjeta de extranjería 7 | Mail\_Tarjeta de extranjerí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#7a1b254d3a171b131654191517) |
| 4 | 2199998 | Nombre Tarjeta de extranjería 8 | Mail\_Tarjeta de extranjerí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#ef8eb0d7af828e8683c18c8082) |
| 4 | 2199999 | Nombre Tarjeta de extranjería 9 | Mail\_Tarjeta de extranjerí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#6c0d33552c010d0500420f0301) |
| 4 | 21999910 | Nombre Tarjeta de extranjería 10 | Mail\_Tarjeta de extranjerí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#ddbc82eced9db0bcb4b1f3beb2b0) |
| 5 | 2299991 | Nombre Cédula de extranjería 1 | Mail\_Cédula de extranjerí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#d0b18fe190bdb1b9bcfeb3bfbd) |
| 5 | 2299992 | Nombre Cédula de extranjería 2 | Mail\_Cédula de extranjerí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#32536d00725f535b5e1c515d5f) |
| 5 | 2299993 | Nombre Cédula de extranjería 3 | Mail\_Cédula de extranjerí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#7d1c224e3d101c1411531e1210) |
| 5 | 2299994 | Nombre Cédula de extranjería 4 | Mail\_Cédula de extranjerí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#0e6f513a4e636f6762206d6163) |
| 5 | 2299995 | Nombre Cédula de extranjería 5 | Mail\_Cédula de extranjerí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#e786b8d2a78a868e8bc984888a) |
| 5 | 2299996 | Nombre Cédula de extranjería 6 | Mail\_Cédula de extranjerí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#93f2cca5d3fef2faffbdf0fcfe) |
| 5 | 2299997 | Nombre Cédula de extranjería 7 | Mail\_Cédula de extranjerí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#a4c5fb93e4c9c5cdc88ac7cbc9) |
| 5 | 2299998 | Nombre Cédula de extranjería 8 | Mail\_Cédula de extranjerí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#75142a4d3518141c195b161a18) |
| 5 | 2299999 | Nombre Cédula de extranjería 9 | Mail\_Cédula de extranjerí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#31506e08715c50585d1f525e5c) |
| 5 | 22999910 | Nombre Cédula de extranjería 10 | Mail\_Cédula de extranjerí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#ccad93fdfc8ca1ada5a0e2afa3a1) |
| 6 | 3199991 | Nombre NIT 1 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#e4a9858d88bbaaadb0bbd5a489858d88ca878b89) |
| 6 | 3199992 | Nombre NIT 2 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#4409252d281b0a0d101b760429252d286a272b29) |
| 6 | 3199993 | Nombre NIT 3 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#39745850556677706d660a7954585055175a5654) |
| 6 | 3199994 | Nombre NIT 4 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#18557971744756514c472c5875797174367b7775) |
| 6 | 3199995 | Nombre NIT 5 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#662b070f0a39282f323953260b070f0a4805090b) |
| 6 | 3199996 | Nombre NIT 6 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#1459757d784b5a5d404b225479757d783a777b79) |
| 6 | 3199997 | Nombre NIT 7 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#df92beb6b38091968b80e89fb2beb6b3f1bcb0b2) |
| 6 | 3199998 | Nombre NIT 8 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#99d4f8f0f5c6d7d0cdc6a1d9f4f8f0f5b7faf6f4) |
| 6 | 3199999 | Nombre NIT 9 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#c885a9a1a49786819c97f188a5a9a1a4e6aba7a5) |
| 6 | 31999910 | Nombre NIT 10 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#3e735f57526170776a610f0e7e535f5752105d5153) |
| 7 | 4199991 | Nombre Pasaporte 1 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#e7aa868e8bb8b78694869788959382b8d6a78a868e8bc984888a) |
| 7 | 4199992 | Nombre Pasaporte 2 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#8cc1ede5e0d3dcedffedfce3fef8e9d3becce1ede5e0a2efe3e1) |
| 7 | 4199993 | Nombre Pasaporte 3 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#d69bb7bfba8986b7a5b7a6b9a4a2b389e596bbb7bfbaf8b5b9bb) |
| 7 | 4199994 | Nombre Pasaporte 4 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#317c50585d6e61504250415e4345546e05715c50585d1f525e5c) |
| 7 | 4199995 | Nombre Pasaporte 5 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#a4e9c5cdc8fbf4c5d7c5d4cbd6d0c1fb91e4c9c5cdc88ac7cbc9) |
| 7 | 4199996 | Nombre Pasaporte 6 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#80cde1e9ecdfd0e1f3e1f0eff2f4e5dfb6c0ede1e9ecaee3efed) |
| 7 | 4199997 | Nombre Pasaporte 7 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#377a565e5b686756445647584543526800775a565e5b1954585a) |
| 7 | 4199998 | Nombre Pasaporte 8 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#7e331f1712212e1f0d1f0e110c0a1b21463e131f1712501d1113) |
| 7 | 4199999 | Nombre Pasaporte 9 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#eda08c8481b2bd8c9e8c9d829f9988b2d4ad808c8481c38e8280) |
| 7 | 41999910 | Nombre Pasaporte 10 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#97daf6fefbc8c7f6e4f6e7f8e5e3f2c8a6a7d7faf6fefbb9f4f8fa) |
| 8 | 4299991 | Nombre Documento de identificación extranjero 1 | Mail\_Documento de identificación [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#0f6a777b7d6e61656a7d60503e4f626e6663216c6062) |
| 8 | 4299992 | Nombre Documento de identificación extranjero 2 | Mail\_Documento de identificación [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#fa9f828e889b94909f8895a5c8ba979b9396d4999597) |
| 8 | 4299993 | Nombre Documento de identificación extranjero 3 | Mail\_Documento de identificación [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#7d1805090f1c1317180f12224e3d101c1411531e1210) |
| 8 | 4299994 | Nombre Documento de identificación extranjero 4 | Mail\_Documento de identificación [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#3055484442515e5a55425f6f04705d51595c1e535f5d) |
| 8 | 4299995 | Nombre Documento de identificación extranjero 5 | Mail\_Documento de identificación [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#5134292523303f3b34233e0e64113c30383d7f323e3c) |
| 8 | 4299996 | Nombre Documento de identificación extranjero 6 | Mail\_Documento de identificación [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#6a0f121e180b04000f1805355c2a070b030644090507) |
| 8 | 4299997 | Nombre Documento de identificación extranjero 7 | Mail\_Documento de identificación [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#93f6ebe7e1f2fdf9f6e1fccca4d3fef2faffbdf0fcfe) |
| 8 | 4299998 | Nombre Documento de identificación extranjero 8 | Mail\_Documento de identificación [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#ddb8a5a9afbcb3b7b8afb282e59db0bcb4b1f3beb2b0) |
| 8 | 4299999 | Nombre Documento de identificación extranjero 9 | Mail\_Documento de identificación [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#1d7865696f7c7377786f7242245d707c7471337e7270) |
| 8 | 42999910 | Nombre Documento de identificación extranjero 10 | Mail\_Documento de identificación [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#791c010d0b1817131c0b162648493914181015571a1614) |
| 10 | 5099991 | Nombre NIT de otro país 1 | Mail\_NIT de otro paí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#71022e40311c10181d5f121e1c) |
| 10 | 5099992 | Nombre NIT de otro país 2 | Mail\_NIT de otro paí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#ccbf93fe8ca1ada5a0e2afa3a1) |
| 10 | 5099993 | Nombre NIT de otro país 3 | Mail\_NIT de otro paí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#74072b473419151d185a171b19) |
| 10 | 5099994 | Nombre NIT de otro país 4 | Mail\_NIT de otro paí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#e794b8d3a78a868e8bc984888a) |
| 10 | 5099995 | Nombre NIT de otro país 5 | Mail\_NIT de otro paí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#85f6dab0c5e8e4ece9abe6eae8) |
| 10 | 5099996 | Nombre NIT de otro país 6 | Mail\_NIT de otro paí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#1a69452c5a777b737634797577) |
| 10 | 5099997 | Nombre NIT de otro país 7 | Mail\_NIT de otro paí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#8bf8d4bccbe6eae2e7a5e8e4e6) |
| 10 | 5099998 | Nombre NIT de otro país 8 | Mail\_NIT de otro paí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#41321e79012c20282d6f222e2c) |
| 10 | 5099999 | Nombre NIT de otro país 9 | Mail\_NIT de otro paí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#94e7cbadd4f9f5fdf8baf7fbf9) |
| 10 | 50999910 | Nombre NIT de otro país 10 | Mail\_NIT de otro paí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#c8bb97f9f888a5a9a1a4e6aba7a5) |
| 11 | 9199991 | Nombre NUIP \* 1 | Mail\_NUIP \*[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#500f61103d31393c7e333f3d) |
| 11 | 9199992 | Nombre NUIP \* 2 | Mail\_NUIP \*[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#b7e885f7dad6dedb99d4d8da) |
| 11 | 9199993 | Nombre NUIP \* 3 | Mail\_NUIP \*[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#eeb1ddae838f8782c08d8183) |
| 11 | 9199994 | Nombre NUIP \* 4 | Mail\_NUIP \*[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#4c13780c212d2520622f2321) |
| 11 | 9199995 | Nombre NUIP \* 5 | Mail\_NUIP \*[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#86d9b3c6ebe7efeaa8e5e9eb) |
| 11 | 9199996 | Nombre NUIP \* 6 | Mail\_NUIP \*[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#bde28bfdd0dcd4d193ded2d0) |
| 11 | 9199997 | Nombre NUIP \* 7 | Mail\_NUIP \*[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#065931466b676f6a2865696b) |
| 11 | 9199998 | Nombre NUIP \* 8 | Mail\_NUIP \*[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#0956314964686065276a6664) |
| 11 | 9199999 | Nombre NUIP \* 9 | Mail\_NUIP \*[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#b3ec8af3ded2dadf9dd0dcde) |
| 11 | 91999910 | Nombre NUIP \* 10 | Mail\_NUIP \*[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#1d422c2d5d707c7471337e7270) |
