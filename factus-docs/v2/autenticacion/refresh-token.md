# Refresh Token

Este endpoint permite actualizar el token de acceso mediante el uso de un **refresh token** previamente generado.

**Método:** POST

#### **Endpoint**

* [Sandbox](https://developers.factus.com.co/autenticacion/refresh-token#tab-panel-8)
* [Producción](https://developers.factus.com.co/autenticacion/refresh-token#tab-panel-9)

```
https://api-sandbox.factus.com.co/oauth/token
```

* * *

#### **Encabezados de Solicitud**

[Sección titulada «Encabezados de Solicitud»](https://developers.factus.com.co/autenticacion/refresh-token#encabezados-de-solicitud)

| |
| --- |
| `Authorization` : `Bearer Token`
Este debe ser proporcionado previamente al realizar el inicio de sesión o autenticar al usuario. |
| `Accept` : `application/json`
Indica que la respuesta debe estar en formato JSON. |

* * *

#### Cuerpo de la Solicitud (Body)

[Sección titulada «Cuerpo de la Solicitud (Body)»](https://developers.factus.com.co/autenticacion/refresh-token#cuerpo-de-la-solicitud-body)

La solicitud debe enviarse en formato `form-data`. A continuación se detallan los parámetros requeridos:

| **Parámetros** |
| --- |
| `grant_type` : `refresh_token`
Tipo de autenticación, el valor debe ser `refresh_token`, el resto de datos se deben reemplazar por los enviados al solicitar las credenciales y el token de refresco obtenido en el endpoint de autenticación. |
| `client_id` : `tu client id`
ID del cliente proporcionado por el servicio |
| `client_secret` : `tu client secret`
Secreto del cliente proporcionado por el servicio |
| `refresh_token` : `tu refresh token`
El refresh token previamente generado |

* * *

#### **Ejemplo de Solicitud**

[Sección titulada «Ejemplo de Solicitud»](https://developers.factus.com.co/autenticacion/refresh-token#ejemplo-de-solicitud)

A continuación, se muestra un ejemplo de cómo enviar una solicitud al endpoint:

* [Laravel php](https://developers.factus.com.co/autenticacion/refresh-token#tab-panel-5)
* [Node js](https://developers.factus.com.co/autenticacion/refresh-token#tab-panel-6)
* [Curl](https://developers.factus.com.co/autenticacion/refresh-token#tab-panel-7)

Ventana de terminal

```
composer require guzzlehttp/guzzle
```

```
use GuzzleHttp\Client; use GuzzleHttp\Exception\RequestException;
public function refreshToken() { // Crear una instancia del cliente Guzzle $client = new Client();
// Definir los parámetros para la solicitud $url = 'https://api-sandbox.factus.com.co/oauth/token'; $data = [ 'form_params' => [ 'grant_type' => 'refresh_token', 'client_id' => 'tu client id', 'client_secret' => 'tu client secret', 'refresh_token' => 'tu refresh token', ] ];
try { // Realizar la solicitud POST $response = $client->post($url, $data);
// Obtener el cuerpo de la respuesta $responseBody = json_decode($response->getBody()->getContents(), true);
// Verificar que la respuesta contenga el token if (isset($responseBody['access_token'])) { $accessToken = $responseBody['access_token']; $expiresIn = $responseBody['expires_in'];
// Aquí puedes hacer lo que necesites con el nuevo access token return response()->json([ 'access_token' => $accessToken, 'expires_in' => $expiresIn, ]); }
// Si no se encuentra el token, devolver error return response()->json([ 'error' => 'No se pudo obtener el token', ], 400);
} catch (RequestException $e) { // Manejar los errores de la solicitud (ej. conexión fallida) return response()->json([ 'error' => 'Error en la solicitud', 'message' => $e->getMessage(), ], 500); } }
```

#### Response Success

[Sección titulada «Response »](https://developers.factus.com.co/autenticacion/refresh-token#response)

_Status:_ 200 OK

```
{ "token_type": "Bearer", "expires_in": 3600, "access_token": "tu access token", "refresh_token": "tu refresh token"}
```
