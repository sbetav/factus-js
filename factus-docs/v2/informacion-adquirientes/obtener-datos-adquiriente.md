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
{ "status": "OK", "message": "Solicitud exitosa", "data": { "name": "Nombre Cédula de ciudadanía 5", "email": "Mail_Cédula de ciudadanía_5@mail.com" }}
```

### Datos de prueba

[Sección titulada «Datos de prueba»](https://developers.factus.com.co/informacion-adquirientes/obtener-datos-adquiriente#datos-de-prueba)

Estos son los datos de ejemplo proporcionados por la DIAN, destinados exclusivamente para realizar consultas y pruebas en entornos de prueba.

| ID de documento | Número de documento | Nombre o Razón Social | Correo de recepción de factura electrónica |
| --- | --- | --- | --- |
| 1 | 1199991 | Nombre Registro civil 1 | Mail\_Registrocivil\_1@mail.com |
| 1 | 1199992 | Nombre Registro civil 2 | Mail\_Registrocivil\_2@mail.com |
| 1 | 1199993 | Nombre Registro civil 3 | Mail\_Registrocivil\_3@mail.com |
| 1 | 1199994 | Nombre Registro civil 4 | Mail\_Registrocivil\_4@mail.com |
| 1 | 1199995 | Nombre Registro civil 5 | Mail\_Registrocivil\_5@mail.com |
| 1 | 1199996 | Nombre Registro civil 6 | Mail\_Registrocivil\_6@mail.com |
| 1 | 1199997 | Nombre Registro civil 7 | Mail\_Registrocivil\_7@mail.com |
| 1 | 1199998 | Nombre Registro civil 8 | Mail\_Registrocivil\_8@mail.com |
| 1 | 1199999 | Nombre Registro civil 9 | Mail\_Registrocivil\_9@mail.com |
| 1 | 11999910 | Nombre Registro civil 10 | Mail\_Registrocivil\_10@mail.com |
| 2 | 1299991 | Nombre Tarjeta de identidad 1 | Mail\_Tarjeta deidentidad\_1@mail.com |
| 2 | 1299992 | Nombre Tarjeta de identidad 2 | Mail\_Tarjeta deidentidad\_2@mail.com |
| 2 | 1299993 | Nombre Tarjeta de identidad 3 | Mail\_Tarjeta deidentidad\_3@mail.com |
| 2 | 1299994 | Nombre Tarjeta de identidad 4 | Mail\_Tarjeta deidentidad\_4@mail.com |
| 2 | 1299995 | Nombre Tarjeta de identidad 5 | Mail\_Tarjeta deidentidad\_5@mail.com |
| 2 | 1299996 | Nombre Tarjeta de identidad 6 | Mail\_Tarjeta deidentidad\_6@mail.com |
| 2 | 1299997 | Nombre Tarjeta de identidad 7 | Mail\_Tarjeta deidentidad\_7@mail.com |
| 2 | 1299998 | Nombre Tarjeta de identidad 8 | Mail\_Tarjeta deidentidad\_8@mail.com |
| 2 | 1299999 | Nombre Tarjeta de identidad 9 | Mail\_Tarjeta deidentidad\_9@mail.com |
| 2 | 12999910 | Nombre Tarjeta de identidad 10 | Mail\_Tarjeta deidentidad\_10@mail.com |
| 3 | 1399991 | Nombre Cédula de ciudadanía 1 | Mail\_Cédula de ciudadanía\_1@mail.com |
| 3 | 1399992 | Nombre Cédula de ciudadanía 2 | Mail\_Cédula de ciudadanía\_2@mail.com |
| 3 | 1399993 | Nombre Cédula de ciudadanía 3 | Mail\_Cédula de ciudadanía\_3@mail.com |
| 3 | 1399994 | Nombre Cédula de ciudadanía 4 | Mail\_Cédula de ciudadanía\_4@mail.com |
| 3 | 1399995 | Nombre Cédula de ciudadanía 5 | Mail\_Cédula de ciudadanía\_5@mail.com |
| 3 | 1399996 | Nombre Cédula de ciudadanía 6 | Mail\_Cédula de ciudadanía\_6@mail.com |
| 3 | 1399997 | Nombre Cédula de ciudadanía 7 | Mail\_Cédula de ciudadanía\_7@mail.com |
| 3 | 1399998 | Nombre Cédula de ciudadanía 8 | Mail\_Cédula de ciudadanía\_8@mail.com |
| 3 | 1399999 | Nombre Cédula de ciudadanía 9 | Mail\_Cédula de ciudadanía\_9@mail.com |
| 3 | 13999910 | Nombre Cédula de ciudadanía 10 | Mail\_Cédula de ciudadanía\_10@mail.com |
| 4 | 2199991 | Nombre Tarjeta de extranjería 1 | Mail\_Tarjeta de extranjería\_1@mail.com |
| 4 | 2199992 | Nombre Tarjeta de extranjería 2 | Mail\_Tarjeta de extranjería\_2@mail.com |
| 4 | 2199993 | Nombre Tarjeta de extranjería 3 | Mail\_Tarjeta de extranjería\_3@mail.com |
| 4 | 2199994 | Nombre Tarjeta de extranjería 4 | Mail\_Tarjeta de extranjería\_4@mail.com |
| 4 | 2199995 | Nombre Tarjeta de extranjería 5 | Mail\_Tarjeta de extranjería\_5@mail.com |
| 4 | 2199996 | Nombre Tarjeta de extranjería 6 | Mail\_Tarjeta de extranjería\_6@mail.com |
| 4 | 2199997 | Nombre Tarjeta de extranjería 7 | Mail\_Tarjeta de extranjería\_7@mail.com |
| 4 | 2199998 | Nombre Tarjeta de extranjería 8 | Mail\_Tarjeta de extranjería\_8@mail.com |
| 4 | 2199999 | Nombre Tarjeta de extranjería 9 | Mail\_Tarjeta de extranjería\_9@mail.com |
| 4 | 21999910 | Nombre Tarjeta de extranjería 10 | Mail\_Tarjeta de extranjería\_10@mail.com |
| 5 | 2299991 | Nombre Cédula de extranjería 1 | Mail\_Cédula de extranjería\_1@mail.com |
| 5 | 2299992 | Nombre Cédula de extranjería 2 | Mail\_Cédula de extranjería\_2@mail.com |
| 5 | 2299993 | Nombre Cédula de extranjería 3 | Mail\_Cédula de extranjería\_3@mail.com |
| 5 | 2299994 | Nombre Cédula de extranjería 4 | Mail\_Cédula de extranjería\_4@mail.com |
| 5 | 2299995 | Nombre Cédula de extranjería 5 | Mail\_Cédula de extranjería\_5@mail.com |
| 5 | 2299996 | Nombre Cédula de extranjería 6 | Mail\_Cédula de extranjería\_6@mail.com |
| 5 | 2299997 | Nombre Cédula de extranjería 7 | Mail\_Cédula de extranjería\_7@mail.com |
| 5 | 2299998 | Nombre Cédula de extranjería 8 | Mail\_Cédula de extranjería\_8@mail.com |
| 5 | 2299999 | Nombre Cédula de extranjería 9 | Mail\_Cédula de extranjería\_9@mail.com |
| 5 | 22999910 | Nombre Cédula de extranjería 10 | Mail\_Cédula de extranjería\_10@mail.com |
| 6 | 3199991 | Nombre NIT 1 | Mail\_NIT\_1@mail.com |
| 6 | 3199992 | Nombre NIT 2 | Mail\_NIT\_2@mail.com |
| 6 | 3199993 | Nombre NIT 3 | Mail\_NIT\_3@mail.com |
| 6 | 3199994 | Nombre NIT 4 | Mail\_NIT\_4@mail.com |
| 6 | 3199995 | Nombre NIT 5 | Mail\_NIT\_5@mail.com |
| 6 | 3199996 | Nombre NIT 6 | Mail\_NIT\_6@mail.com |
| 6 | 3199997 | Nombre NIT 7 | Mail\_NIT\_7@mail.com |
| 6 | 3199998 | Nombre NIT 8 | Mail\_NIT\_8@mail.com |
| 6 | 3199999 | Nombre NIT 9 | Mail\_NIT\_9@mail.com |
| 6 | 31999910 | Nombre NIT 10 | Mail\_NIT\_10@mail.com |
| 7 | 4199991 | Nombre Pasaporte 1 | Mail\_Pasaporte\_1@mail.com |
| 7 | 4199992 | Nombre Pasaporte 2 | Mail\_Pasaporte\_2@mail.com |
| 7 | 4199993 | Nombre Pasaporte 3 | Mail\_Pasaporte\_3@mail.com |
| 7 | 4199994 | Nombre Pasaporte 4 | Mail\_Pasaporte\_4@mail.com |
| 7 | 4199995 | Nombre Pasaporte 5 | Mail\_Pasaporte\_5@mail.com |
| 7 | 4199996 | Nombre Pasaporte 6 | Mail\_Pasaporte\_6@mail.com |
| 7 | 4199997 | Nombre Pasaporte 7 | Mail\_Pasaporte\_7@mail.com |
| 7 | 4199998 | Nombre Pasaporte 8 | Mail\_Pasaporte\_8@mail.com |
| 7 | 4199999 | Nombre Pasaporte 9 | Mail\_Pasaporte\_9@mail.com |
| 7 | 41999910 | Nombre Pasaporte 10 | Mail\_Pasaporte\_10@mail.com |
| 8 | 4299991 | Nombre Documento de identificación extranjero 1 | Mail\_Documento de identificaciónextranjero\_1@mail.com |
| 8 | 4299992 | Nombre Documento de identificación extranjero 2 | Mail\_Documento de identificaciónextranjero\_2@mail.com |
| 8 | 4299993 | Nombre Documento de identificación extranjero 3 | Mail\_Documento de identificaciónextranjero\_3@mail.com |
| 8 | 4299994 | Nombre Documento de identificación extranjero 4 | Mail\_Documento de identificaciónextranjero\_4@mail.com |
| 8 | 4299995 | Nombre Documento de identificación extranjero 5 | Mail\_Documento de identificaciónextranjero\_5@mail.com |
| 8 | 4299996 | Nombre Documento de identificación extranjero 6 | Mail\_Documento de identificaciónextranjero\_6@mail.com |
| 8 | 4299997 | Nombre Documento de identificación extranjero 7 | Mail\_Documento de identificaciónextranjero\_7@mail.com |
| 8 | 4299998 | Nombre Documento de identificación extranjero 8 | Mail\_Documento de identificaciónextranjero\_8@mail.com |
| 8 | 4299999 | Nombre Documento de identificación extranjero 9 | Mail\_Documento de identificaciónextranjero\_9@mail.com |
| 8 | 42999910 | Nombre Documento de identificación extranjero 10 | Mail\_Documento de identificaciónextranjero\_10@mail.com |
| 10 | 5099991 | Nombre NIT de otro país 1 | Mail\_NIT de otro país\_1@mail.com |
| 10 | 5099992 | Nombre NIT de otro país 2 | Mail\_NIT de otro país\_2@mail.com |
| 10 | 5099993 | Nombre NIT de otro país 3 | Mail\_NIT de otro país\_3@mail.com |
| 10 | 5099994 | Nombre NIT de otro país 4 | Mail\_NIT de otro país\_4@mail.com |
| 10 | 5099995 | Nombre NIT de otro país 5 | Mail\_NIT de otro país\_5@mail.com |
| 10 | 5099996 | Nombre NIT de otro país 6 | Mail\_NIT de otro país\_6@mail.com |
| 10 | 5099997 | Nombre NIT de otro país 7 | Mail\_NIT de otro país\_7@mail.com |
| 10 | 5099998 | Nombre NIT de otro país 8 | Mail\_NIT de otro país\_8@mail.com |
| 10 | 5099999 | Nombre NIT de otro país 9 | Mail\_NIT de otro país\_9@mail.com |
| 10 | 50999910 | Nombre NIT de otro país 10 | Mail\_NIT de otro país\_10@mail.com |
| 11 | 9199991 | Nombre NUIP \* 1 | Mail\_NUIP \*\_1@mail.com |
| 11 | 9199992 | Nombre NUIP \* 2 | Mail\_NUIP \*\_2@mail.com |
| 11 | 9199993 | Nombre NUIP \* 3 | Mail\_NUIP \*\_3@mail.com |
| 11 | 9199994 | Nombre NUIP \* 4 | Mail\_NUIP \*\_4@mail.com |
| 11 | 9199995 | Nombre NUIP \* 5 | Mail\_NUIP \*\_5@mail.com |
| 11 | 9199996 | Nombre NUIP \* 6 | Mail\_NUIP \*\_6@mail.com |
| 11 | 9199997 | Nombre NUIP \* 7 | Mail\_NUIP \*\_7@mail.com |
| 11 | 9199998 | Nombre NUIP \* 8 | Mail\_NUIP \*\_8@mail.com |
| 11 | 9199999 | Nombre NUIP \* 9 | Mail\_NUIP \*\_9@mail.com |
| 11 | 91999910 | Nombre NUIP \* 10 | Mail\_NUIP \*\_10@mail.com |
