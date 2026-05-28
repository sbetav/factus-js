# Enviar correo

Este endpoint `envía` por correo electrónico la nota crédito en un archivo ZIP que incluye un PDF y un archivo XML (AttachedDocument). El PDF puede ser generado y enviado en formato **Base64**. En caso de no proporcionarse, se utilizará por defecto la representación gráfica generada por el sistema.

**Método:** POST

#### **Endpoint**

* [Sandbox](https://developers.factus.com.co/notas-credito/enviar-correo#tab-panel-52)
* [Producción](https://developers.factus.com.co/notas-credito/enviar-correo#tab-panel-53)

```
https://api-sandbox.factus.com.co/v2/credit-notes/:number/send-email
```

### **Encabezados de la Solicitud**

Incluye los siguientes encabezados.

<table><tbody><tr><td><code>Content-Type</code> : <code>application/json</code><br>Indica que los datos se envían en formato JSON.</td></tr><tr><td><code>Authorization Bearer token_de_acceso</code><br>Token de autenticación necesario para acceder al recurso. Ver <a href="https://developers.factus.com.co/autenticacion/auth" target="_blank">Cómo generar token</a></td></tr><tr><td><code>Accept</code> : <code>application/json</code><br>Indica que la respuesta debe estar en formato JSON.</td></tr></tbody></table>

``**Nota:** Reemplaza `token_de_acceso` con el token proporcionado tras autenticarte.``

* * *

### Variables de Ruta, Path Variables

[Sección titulada «Variables de Ruta, Path Variables»](https://developers.factus.com.co/notas-credito/enviar-correo#variables-de-ruta-path-variables)

| |
| --- |
| **`number`** `string`
Número de nota crédito. Se recomienda guardar el número de la nota crédito una vez se haga la creación de la misma para poder hacer uso de este endpoint fácilmente. |

### Parámetros del Cuerpo (Body)

[Sección titulada «Parámetros del Cuerpo (Body)»](https://developers.factus.com.co/notas-credito/enviar-correo#par%C3%A1metros-del-cuerpo-body)

El cuerpo (Body) de la solicitud debe enviarse en formato JSON y debe incluir los siguientes parámetros:

| **Parámetro y Tipo** | **Descripción** |
| --- | --- |
| `email (string)` | Correo electrónico al cual se desea enviar la nota crédito |
| `pdf_base_64_encoded (string)` | (Opcional) PDF, enviado como cadena codificada en Base64 |

* * *

### Ejemplo de Solicitud

[Sección titulada «Ejemplo de Solicitud»](https://developers.factus.com.co/notas-credito/enviar-correo#ejemplo-de-solicitud)

Aquí tienes un ejemplo de cómo debería quedar el cuerpo de la solicitud en formato JSON:

* [200 - Envío de correo](https://developers.factus.com.co/notas-credito/enviar-correo#tab-panel-54)

```
{ "email": "[email protected]", "pdf_base_64_encoded": "[TRIMMED_BASE64_60784_CHARS]"}
```
