# Autenticación

Este contenido es para V1. Cambia a la [versión más reciente](https://developers.factus.com.co/) para ver la documentación actualizada.

**Método:** `POST`

#### **Endpoint**

[Sección titulada «Endpoint»](https://developers.factus.com.co/v1/autenticacion/auth#endpoint)

**Pruebas**

`https://api-sandbox.factus.com.co/oauth/token`

**Producción**

`https://api.factus.com.co/oauth/token`

* * *

#### **Descripción**

[Sección titulada «Descripción»](https://developers.factus.com.co/v1/autenticacion/auth#descripci%C3%B3n)

Este endpoint permite obtener un token de acceso para autenticar solicitudes a la API mediante las credenciales del sistema.

* **Propósito:** Autenticar usuarios y generar un token de acceso válido.
* **Duración del token:** 1 hora. Tras este periodo, será necesario renovarlo solicitando un nuevo token.
* **Credenciales:** Para obtener credenciales, contacta al administrador de la API.

**Nota:** El token es obligatorio para realizar cualquier solicitud a los endpoints protegidos de la API.

* * *

#### **Encabezados de Solicitud**

[Sección titulada «Encabezados de Solicitud»](https://developers.factus.com.co/v1/autenticacion/auth#encabezados-de-solicitud)

Incluye los siguientes encabezados en la solicitud:

| **Encabezado** | **Valor** | **Descripción** |
| --- | --- | --- |
| Accept | `application/json` | Indica que la respuesta debe estar en formato JSON. |

* * *

#### **Parámetros del Cuerpo de Solicitud**

[Sección titulada «Parámetros del Cuerpo de Solicitud»](https://developers.factus.com.co/v1/autenticacion/auth#par%C3%A1metros-del-cuerpo-de-solicitud)

El cuerpo de la solicitud debe enviarse como **form-data** e incluir los siguientes parámetros obligatorios:

| **Parámetro** | **Descripción** | **Ejemplo** |
| --- | --- | --- |
| grant\_type | Tipo de autenticación | `password` |
| client\_id | Identificador único del cliente | `tu client id` |
| client\_secret | Secreto asociado al cliente | `tu client secret` |
| username | Correo electrónico del usuario | `tu username` |
| password | Contraseña del usuario | `tu password` |

* * *

#### **Ejemplo de Solicitud**

[Sección titulada «Ejemplo de Solicitud»](https://developers.factus.com.co/v1/autenticacion/auth#ejemplo-de-solicitud)

A continuación, se muestra un ejemplo de cómo enviar una solicitud al endpoint:

**Laravel php**

Ventana de terminal

```
composer require guzzlehttp/guzzle
```

```
use Illuminate\Support\Facades\Http;
class AuthController extends Controller { public function getToken() { // Parámetros necesarios para la solicitud $response = Http::asForm()->post('https://api-sandbox.factus.com.co/oauth/token', [ 'grant_type' => 'password', 'client_id' => 'tu client id', 'client_secret' => 'tu client secret', 'username' => 'tu username', 'password' => 'tu password', ]);
// Verificamos si la respuesta es exitosa if ($response->successful()) { // Acceder a los datos del token $data = $response->json(); $accessToken = $data['access_token']; $refreshToken = $data['refresh_token'];
// Mostrar los tokens (o devolverlos en la respuesta de la API) return response()->json([ 'access_token' => $accessToken, 'refresh_token' => $refreshToken, ]); } else { // En caso de error, devolver el mensaje de error return response()->json([ 'error' => 'No se pudo obtener el token', 'message' => $response->body(), ], 400); } } }
```

**Node js**

```
const axios = require('axios'); const qs = require('qs'); // Para enviar datos en formato `application/x-www-form-urlencoded`
// Datos de la solicitud const data = qs.stringify({ grant_type: 'password', client_id: 'tu client id', client_secret: 'tu client secret', username: 'tu username', password: 'tu password' });
// Configuración de la solicitud const config = { method: 'post', url: 'https://api-sandbox.factus.com.co/oauth/token', headers: { 'Accept': 'application/json', 'Content-Type': 'application/x-www-form-urlencoded' }, data: data };
// Realizando la solicitud POST axios(config) .then((response) => { console.log('Token de acceso:', response.data.access_token); console.log('Token de actualización:', response.data.refresh_token); }) .catch((error) => { console.error('Error en la solicitud:', error.response ? error.response.data : error.message); });
```

**Curl**

Ventana de terminal

```
curl -X POST https://api-sandbox.factus.com.co/oauth/token \ -H "Accept: application/json" \ -d "grant_type=password" \ -d "client_id=tu client id" \ -d "client_secret=tu client secret" \ -d "username=tu username" \ -d "password=tu password"
```

#### Response Success

[Sección titulada «Response »](https://developers.factus.com.co/v1/autenticacion/auth#response)

_Status:_ 200 OK

```
{ "token_type": "Bearer", "expires_in": 600, "access_token": "tu access token", "refresh_token": "tu refresh token"}
```
