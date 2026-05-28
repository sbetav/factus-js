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
| 1 | 1199991 | Nombre Registro civil 1 | Mail\_Registro [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#fd9e948b9491a2ccbd909c9491d39e9290) |
| 1 | 1199992 | Nombre Registro civil 2 | Mail\_Registro [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#3a59534c535665087a575b535614595557) |
| 1 | 1199993 | Nombre Registro civil 3 | Mail\_Registro [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#a9cac0dfc0c5f69ae9c4c8c0c587cac6c4) |
| 1 | 1199994 | Nombre Registro civil 4 | Mail\_Registro [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#01626877686d5e35416c60686d2f626e6c) |
| 1 | 1199995 | Nombre Registro civil 5 | Mail\_Registro [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#99faf0eff0f5c6acd9f4f8f0f5b7faf6f4) |
| 1 | 1199996 | Nombre Registro civil 6 | Mail\_Registro [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#5a39332c3336056c1a373b333674393537) |
| 1 | 1199997 | Nombre Registro civil 7 | Mail\_Registro [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#41222837282d1e76012c20282d6f222e2c) |
| 1 | 1199998 | Nombre Registro civil 8 | Mail\_Registro [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#fb98928d9297a4c3bb969a9297d5989496) |
| 1 | 1199999 | Nombre Registro civil 9 | Mail\_Registro [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#83e0eaf5eaefdcbac3eee2eaefade0ecee) |
| 1 | 11999910 | Nombre Registro civil 10 | Mail\_Registro [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#55363c233c390a64651538343c397b363a38) |
| 2 | 1299991 | Nombre Tarjeta de identidad 1 | Mail\_Tarjeta de [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#bcd5d8d9d2c8d5d8ddd8e38dfcd1ddd5d092dfd3d1) |
| 2 | 1299992 | Nombre Tarjeta de identidad 2 | Mail\_Tarjeta de [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#375e535259435e5356536805775a565e5b1954585a) |
| 2 | 1299993 | Nombre Tarjeta de identidad 3 | Mail\_Tarjeta de [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#d9b0bdbcb7adb0bdb8bd86ea99b4b8b0b5f7bab6b4) |
| 2 | 1299994 | Nombre Tarjeta de identidad 4 | Mail\_Tarjeta de [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#48212c2d263c212c292c177c0825292124662b2725) |
| 2 | 1299995 | Nombre Tarjeta de identidad 5 | Mail\_Tarjeta de [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#0f666b6a617b666b6e6b503a4f626e6663216c6062) |
| 2 | 1299996 | Nombre Tarjeta de identidad 6 | Mail\_Tarjeta de [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#117875747f65787570754e27517c70787d3f727e7c) |
| 2 | 1299997 | Nombre Tarjeta de identidad 7 | Mail\_Tarjeta de [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#a6cfc2c3c8d2cfc2c7c2f991e6cbc7cfca88c5c9cb) |
| 2 | 1299998 | Nombre Tarjeta de identidad 8 | Mail\_Tarjeta de [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#38515c5d564c515c595c67007855595154165b5755) |
| 2 | 1299999 | Nombre Tarjeta de identidad 9 | Mail\_Tarjeta de [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#f29b96979c869b969396adcbb29f939b9edc919d9f) |
| 2 | 12999910 | Nombre Tarjeta de identidad 10 | Mail\_Tarjeta de [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#d8b1bcbdb6acb1bcb9bc87e9e898b5b9b1b4f6bbb7b5) |
| 3 | 1399991 | Nombre Cédula de ciudadanía 1 | Mail\_Cédula de ciudadaní[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#1b7a442a5b767a727735787476) |
| 3 | 1399992 | Nombre Cédula de ciudadanía 2 | Mail\_Cédula de ciudadaní[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#4c2d137e0c212d2520622f2321) |
| 3 | 1399993 | Nombre Cédula de ciudadanía 3 | Mail\_Cédula de ciudadaní[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#87e6d8b4c7eae6eeeba9e4e8ea) |
| 3 | 1399994 | Nombre Cédula de ciudadanía 4 | Mail\_Cédula de ciudadaní[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#0a6b553e4a676b636624696567) |
| 3 | 1399995 | Nombre Cédula de ciudadanía 5 | Mail\_Cédula de ciudadaní[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#e283bdd7a28f838b8ecc818d8f) |
| 3 | 1399996 | Nombre Cédula de ciudadanía 6 | Mail\_Cédula de ciudadaní[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#5c3d036a1c313d3530723f3331) |
| 3 | 1399997 | Nombre Cédula de ciudadanía 7 | Mail\_Cédula de ciudadaní[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#71102e46311c10181d5f121e1c) |
| 3 | 1399998 | Nombre Cédula de ciudadanía 8 | Mail\_Cédula de ciudadaní[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#5c3d03641c313d3530723f3331) |
| 3 | 1399999 | Nombre Cédula de ciudadanía 9 | Mail\_Cédula de ciudadaní[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#086957314865696164266b6765) |
| 3 | 13999910 | Nombre Cédula de ciudadanía 10 | Mail\_Cédula de ciudadaní[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#accdf39d9cecc1cdc5c082cfc3c1) |
| 4 | 2199991 | Nombre Tarjeta de extranjería 1 | Mail\_Tarjeta de extranjerí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#492816780924282025672a2624) |
| 4 | 2199992 | Nombre Tarjeta de extranjería 2 | Mail\_Tarjeta de extranjerí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#ccad93fe8ca1ada5a0e2afa3a1) |
| 4 | 2199993 | Nombre Tarjeta de extranjería 3 | Mail\_Tarjeta de extranjerí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#a4c5fb97e4c9c5cdc88ac7cbc9) |
| 4 | 2199994 | Nombre Tarjeta de extranjería 4 | Mail\_Tarjeta de extranjerí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#96f7c9a2d6fbf7fffab8f5f9fb) |
| 4 | 2199995 | Nombre Tarjeta de extranjería 5 | Mail\_Tarjeta de extranjerí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#d8b987ed98b5b9b1b4f6bbb7b5) |
| 4 | 2199996 | Nombre Tarjeta de extranjería 6 | Mail\_Tarjeta de extranjerí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#43221c75032e222a2f6d202c2e) |
| 4 | 2199997 | Nombre Tarjeta de extranjería 7 | Mail\_Tarjeta de extranjerí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#0f6e50384f626e6663216c6062) |
| 4 | 2199998 | Nombre Tarjeta de extranjería 8 | Mail\_Tarjeta de extranjerí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#0667593e466b676f6a2865696b) |
| 4 | 2199999 | Nombre Tarjeta de extranjería 9 | Mail\_Tarjeta de extranjerí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#6d0c32542d000c0401430e0200) |
| 4 | 21999910 | Nombre Tarjeta de extranjería 10 | Mail\_Tarjeta de extranjerí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#95f4caa4a5d5f8f4fcf9bbf6faf8) |
| 5 | 2299991 | Nombre Cédula de extranjería 1 | Mail\_Cédula de extranjerí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#fb9aa4cabb969a9297d5989496) |
| 5 | 2299992 | Nombre Cédula de extranjería 2 | Mail\_Cédula de extranjerí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#24457b166449454d480a474b49) |
| 5 | 2299993 | Nombre Cédula de extranjería 3 | Mail\_Cédula de extranjerí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#e485bbd7a489858d88ca878b89) |
| 5 | 2299994 | Nombre Cédula de extranjería 4 | Mail\_Cédula de extranjerí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#c7a698f387aaa6aeabe9a4a8aa) |
| 5 | 2299995 | Nombre Cédula de extranjería 5 | Mail\_Cédula de extranjerí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#cfae90fa8fa2aea6a3e1aca0a2) |
| 5 | 2299996 | Nombre Cédula de extranjería 6 | Mail\_Cédula de extranjerí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#d9b886ef99b4b8b0b5f7bab6b4) |
| 5 | 2299997 | Nombre Cédula de extranjería 7 | Mail\_Cédula de extranjerí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#e180bed6a18c80888dcf828e8c) |
| 5 | 2299998 | Nombre Cédula de extranjería 8 | Mail\_Cédula de extranjerí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#9cfdc3a4dcf1fdf5f0b2fff3f1) |
| 5 | 2299999 | Nombre Cédula de extranjería 9 | Mail\_Cédula de extranjerí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#51300e68113c30383d7f323e3c) |
| 5 | 22999910 | Nombre Cédula de extranjería 10 | Mail\_Cédula de extranjerí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#84e5dbb5b4c4e9e5ede8aae7ebe9) |
| 6 | 3199991 | Nombre NIT 1 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#135e727a7f4c5d5a474c22537e727a7f3d707c7e) |
| 6 | 3199992 | Nombre NIT 2 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#18557971744756514c472a5875797174367b7775) |
| 6 | 3199993 | Nombre NIT 3 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#662b070f0a39282f323955260b070f0a4805090b) |
| 6 | 3199994 | Nombre NIT 4 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#bff2ded6d3e0f1f6ebe08bffd2ded6d391dcd0d2) |
| 6 | 3199995 | Nombre NIT 5 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#236e424a4f7c6d6a777c16634e424a4f0d404c4e) |
| 6 | 3199996 | Nombre NIT 6 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#29644840457667607d761f6944484045074a4644) |
| 6 | 3199997 | Nombre NIT 7 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#5a173b33360514130e056d1a373b333674393537) |
| 6 | 3199998 | Nombre NIT 8 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#1d507c74714253544942255d707c7471337e7270) |
| 6 | 3199999 | Nombre NIT 9 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#064b676f6a59484f52593f466b676f6a2865696b) |
| 6 | 31999910 | Nombre NIT 10 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#ca87aba3a69584839e95fbfa8aa7aba3a6e4a9a5a7) |
| 7 | 4199991 | Nombre Pasaporte 1 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#e3ae828a8fbcb3829082938c919786bcd2a38e828a8fcd808c8e) |
| 7 | 4199992 | Nombre Pasaporte 2 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#034e626a6f5c53627062736c7177665c31436e626a6f2d606c6e) |
| 7 | 4199993 | Nombre Pasaporte 3 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#df92beb6b3808fbeacbeafb0adabba80ec9fb2beb6b3f1bcb0b2) |
| 7 | 4199994 | Nombre Pasaporte 4 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#e2af838b8ebdb2839183928d909687bdd6a28f838b8ecc818d8f) |
| 7 | 4199995 | Nombre Pasaporte 5 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#94d9f5fdf8cbc4f5e7f5e4fbe6e0f1cba1d4f9f5fdf8baf7fbf9) |
| 7 | 4199996 | Nombre Pasaporte 6 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#3479555d586b64554755445b4640516b027459555d581a575b59) |
| 7 | 4199997 | Nombre Pasaporte 7 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#92dff3fbfecdc2f3e1f3e2fde0e6f7cda5d2fff3fbfebcf1fdff) |
| 7 | 4199998 | Nombre Pasaporte 8 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#135e727a7f4c43726072637c6167764c2b537e727a7f3d707c7e) |
| 7 | 4199999 | Nombre Pasaporte 9 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#400d21292c1f10213321302f3234251f79002d21292c6e232f2d) |
| 7 | 41999910 | Nombre Pasaporte 10 | [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#b5f8d4dcd9eae5d4c6d4c5dac7c1d0ea8485f5d8d4dcd99bd6dad8) |
| 8 | 4299991 | Nombre Documento de identificación extranjero 1 | Mail\_Documento de identificación [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#9efbe6eaecfff0f4fbecf1c1afdef3fff7f2b0fdf1f3) |
| 8 | 4299992 | Nombre Documento de identificación extranjero 2 | Mail\_Documento de identificación [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#1b7e636f697a75717e697444295b767a727735787476) |
| 8 | 4299993 | Nombre Documento de identificación extranjero 3 | Mail\_Documento de identificación [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#e88d909c9a8986828d9a87b7dba885898184c68b8785) |
| 8 | 4299994 | Nombre Documento de identificación extranjero 4 | Mail\_Documento de identificación [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#c5a0bdb1b7a4abafa0b7aa9af185a8a4aca9eba6aaa8) |
| 8 | 4299995 | Nombre Documento de identificación extranjero 5 | Mail\_Documento de identificación [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#b2d7cac6c0d3dcd8d7c0dded87f2dfd3dbde9cd1dddf) |
| 8 | 4299996 | Nombre Documento de identificación extranjero 6 | Mail\_Documento de identificación [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#a2c7dad6d0c3ccc8c7d0cdfd94e2cfc3cbce8cc1cdcf) |
| 8 | 4299997 | Nombre Documento de identificación extranjero 7 | Mail\_Documento de identificación [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#f89d808c8a9996929d8a97a7cfb895999194d69b9795) |
| 8 | 4299998 | Nombre Documento de identificación extranjero 8 | Mail\_Documento de identificación [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#47223f333526292d223528187f072a262e2b6924282a) |
| 8 | 4299999 | Nombre Documento de identificación extranjero 9 | Mail\_Documento de identificación [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#9efbe6eaecfff0f4fbecf1c1a7def3fff7f2b0fdf1f3) |
| 8 | 42999910 | Nombre Documento de identificación extranjero 10 | Mail\_Documento de identificación [\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#3f5a474b4d5e51555a4d50600e0f7f525e5653115c5052) |
| 10 | 5099991 | Nombre NIT de otro país 1 | Mail\_NIT de otro paí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#f685a9c7b69b979f9ad895999b) |
| 10 | 5099992 | Nombre NIT de otro país 2 | Mail\_NIT de otro paí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#0c7f533e4c616d6560226f6361) |
| 10 | 5099993 | Nombre NIT de otro país 3 | Mail\_NIT de otro paí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#3f4c600c7f525e5653115c5052) |
| 10 | 5099994 | Nombre NIT de otro país 4 | Mail\_NIT de otro paí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#25567a116548444c490b464a48) |
| 10 | 5099995 | Nombre NIT de otro país 5 | Mail\_NIT de otro paí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#d8ab87ed98b5b9b1b4f6bbb7b5) |
| 10 | 5099996 | Nombre NIT de otro país 6 | Mail\_NIT de otro paí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#9cefc3aadcf1fdf5f0b2fff3f1) |
| 10 | 5099997 | Nombre NIT de otro país 7 | Mail\_NIT de otro paí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#e99ab6dea984888085c78a8684) |
| 10 | 5099998 | Nombre NIT de otro país 8 | Mail\_NIT de otro paí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#7e0d21463e131f1712501d1113) |
| 10 | 5099999 | Nombre NIT de otro país 9 | Mail\_NIT de otro paí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#1764482e577a767e7b3974787a) |
| 10 | 50999910 | Nombre NIT de otro país 10 | Mail\_NIT de otro paí[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#42311d7372022f232b2e6c212d2f) |
| 11 | 9199991 | Nombre NUIP \* 1 | Mail\_NUIP \*[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#6936582904080005470a0604) |
| 11 | 9199992 | Nombre NUIP \* 2 | Mail\_NUIP \*[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#b8e78af8d5d9d1d496dbd7d5) |
| 11 | 9199993 | Nombre NUIP \* 3 | Mail\_NUIP \*[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#8dd2becde0ece4e1a3eee2e0) |
| 11 | 9199994 | Nombre NUIP \* 4 | Mail\_NUIP \*[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#3d62097d505c5451135e5250) |
| 11 | 9199995 | Nombre NUIP \* 5 | Mail\_NUIP \*[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#aaf59feac7cbc3c684c9c5c7) |
| 11 | 9199996 | Nombre NUIP \* 6 | Mail\_NUIP \*[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#eab5dcaa878b8386c4898587) |
| 11 | 9199997 | Nombre NUIP \* 7 | Mail\_NUIP \*[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#d48be394b9b5bdb8fab7bbb9) |
| 11 | 9199998 | Nombre NUIP \* 8 | Mail\_NUIP \*[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#88d7b0c8e5e9e1e4a6ebe7e5) |
| 11 | 9199999 | Nombre NUIP \* 9 | Mail\_NUIP \*[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#227d1b624f434b4e0c414d4f) |
| 11 | 91999910 | Nombre NUIP \* 10 | Mail\_NUIP \*[\[email protected\]](https://developers.factus.com.co/cdn-cgi/l/email-protection#742b45443419151d185a171b19) |
