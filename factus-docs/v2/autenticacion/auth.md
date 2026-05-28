# Autenticación

Este endpoint permite obtener un token de acceso para autenticar solicitudes a la API mediante las credenciales del sistema.

* **Propósito:** Autenticar usuarios y generar un token de acceso válido.
* **Duración del token:** 1 hora. Tras este periodo, será necesario renovarlo solicitando un nuevo token.
* **Credenciales:** Para obtener credenciales, contacta al administrador de la API.

**Nota:** El token es obligatorio para realizar cualquier solicitud a los endpoints protegidos de la API.

**Método:** POST

#### **Endpoint**

* [Sandbox](https://developers.factus.com.co/autenticacion/auth#tab-panel-3)
* [Producción](https://developers.factus.com.co/autenticacion/auth#tab-panel-4)

```
https://api-sandbox.factus.com.co/oauth/token
```

* * *

#### **Encabezados de Solicitud**

[Sección titulada «Encabezados de Solicitud»](https://developers.factus.com.co/autenticacion/auth#encabezados-de-solicitud)

| |
| --- |
| `Accept` : `application/json`
Indica que la respuesta debe estar en formato JSON. |

#### **Parámetros del Cuerpo de Solicitud**

[Sección titulada «Parámetros del Cuerpo de Solicitud»](https://developers.factus.com.co/autenticacion/auth#par%C3%A1metros-del-cuerpo-de-solicitud)

El cuerpo de la solicitud debe enviarse como **form-data** e incluir los siguientes parámetros obligatorios:

| **Parámetros** |
| --- |
| `grant_type` : `password`
Tipo de autenticación, el valor debe ser `password`, el resto de datos se deben reemplazar por los enviados al solicitar las credenciales. |
| `client_id` : `tu client id`
Identificador único del cliente |
| `client_secret` : `tu client secret`
Secreto asociado al cliente |
| `username` : `tu username`
Correo electrónico del usuario |
| `password` : `tu password`
Contraseña del usuario |

#### **Ejemplo de Solicitud**

[Sección titulada «Ejemplo de Solicitud»](https://developers.factus.com.co/autenticacion/auth#ejemplo-de-solicitud)

A continuación, se muestra un ejemplo de cómo enviar una solicitud al endpoint:

* [Laravel php](https://developers.factus.com.co/autenticacion/auth#tab-panel-0)
* [Node js](https://developers.factus.com.co/autenticacion/auth#tab-panel-1)
* [Curl](https://developers.factus.com.co/autenticacion/auth#tab-panel-2)

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

#### Response Success

[Sección titulada «Response »](https://developers.factus.com.co/autenticacion/auth#response)

_Status:_ 200 OK

```
{ "token_type": "Bearer", "expires_in": 600, "access_token": "tu access token", "refresh_token": "tu refresh token"}
```
