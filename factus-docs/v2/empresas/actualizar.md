# Actualizar Empresa

Este endpoint permite actualizar la Información de la empresa del usuario correspondiente

**Método:** PUT

#### **Endpoint**

* [Sandbox](https://developers.factus.com.co/empresas/actualizar#tab-panel-12)
* [Producción](https://developers.factus.com.co/empresas/actualizar#tab-panel-13)

```
https://api-sandbox.factus.com.co/v2/companies
```

### **Encabezados de la Solicitud**

Incluye los siguientes encabezados.

<table><tbody><tr><td><code>Content-Type</code> : <code>application/json</code><br>Indica que los datos se envían en formato JSON.</td></tr><tr><td><code>Authorization Bearer token_de_acceso</code><br>Token de autenticación necesario para acceder al recurso. Ver <a href="https://developers.factus.com.co/autenticacion/auth" target="_blank">Cómo generar token</a></td></tr><tr><td><code>Accept</code> : <code>application/json</code><br>Indica que la respuesta debe estar en formato JSON.</td></tr></tbody></table>

``**Nota:** Reemplaza `token_de_acceso` con el token proporcionado tras autenticarte.``

### Parámetros del cuerpo (Body)

[Sección titulada «Parámetros del cuerpo (Body)»](https://developers.factus.com.co/empresas/actualizar#par%C3%A1metros-del-cuerpo-body)

El cuerpo (Body) de la solicitud debe incluir los siguientes parámetros:

| Parámetros |
| --- |
| **`legal_organization_code`** `string`
Código que corresponda al tipo de organización. Para saber el código correspondiente consulte la tabla.

[Código de los tipos de organizaciones.](https://developers.factus.com.co/tablas-de-referencia/tablas/#c%C3%B3digo-de-tipos-de-organizaciones) |
| **`company`** `string` `opcional`

Nombre de la empresa. Este campo es requerido si el campo `legal_organization_code` contiene el valor de 1 (Persona jurídica).

|
| **`trade_name`** `string` `opcional`

Nombre comercial.

|
| **`names`** `string` `opcional`

Nombres de la persona. Este campo es requerido si el campo `legal_organization_code` contiene el valor de 2 (Persona natural).

|
| **`surnames`** `string` `opcional`

Apellidos de la persona. Este campo es requerido si el campo `legal_organization_code` contiene el valor de 2 (Persona natural).

|
| **`registration_code`** `string` `opcional`

Código de registro mercantil.

|
| **`economic_activity`** `string` `opcional`

Código de la actividad economica principal.

|
| **`phone`** `string` `opcional`

Numero de teléfono.

|
| **`email`** `string` `opcional`

Correo electrónico.

|
| **`address`** `string` `opcional`

Dirección.

|
| **`tribute_code`** `string` `opcional`

Código del tributo. Para saber el código corresponde al tributo consulte la tabla de

[códigos de tributos clientes.](https://developers.factus.com.co/tablas-de-referencia/tablas/#c%C3%B3digos-de-tributos-clientes) |
| **`municipality_code`** `string`

Código del municipio. Para saber el código corresponde al municipio consulte el endpoint de Municipios.

[Municipios disponibles.](https://developers.factus.com.co/tablas-de-referencia/municipios) |
| **`responsibilities`** `string` `opcional`

Código de los tipos de responsabilidad fiscal. Para saber los tipos de responsabilidades consulte la tabla

[Responsabilidades fiscales.](https://developers.factus.com.co/tablas-de-referencia/tablas/#responsabilidades-fiscales) |

### Ejemplo de solicitud

[Sección titulada «Ejemplo de solicitud»](https://developers.factus.com.co/empresas/actualizar#ejemplo-de-solicitud)

* [200 -Empresa](https://developers.factus.com.co/empresas/actualizar#tab-panel-14)

```
{ "legal_organization_code": "2", "company": null, "names": "Alan", "surnames": "Turing", "responsibilities": "5", "economic_activity": "6920", "email": "[email protected]", "address": "calle 100 #50-80", "trade_name": null, "registration_code": null, "phone": "0987654321", "municipality_code": "68872", "tribute_code": "ZZ"}
```
