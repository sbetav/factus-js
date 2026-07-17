# Refresh Token

Este contenido es para V1. Cambia a la [versión más reciente](https://developers.factus.com.co/) para ver la documentación actualizada.

**Método:** `POST`

#### **Endpoint**

[Sección titulada «Endpoint»](https://developers.factus.com.co/v1/autenticacion/refresh-token#endpoint)

**Pruebas**

`https://api-sandbox.factus.com.co/oauth/token`

**Producción**

`https://api.factus.com.co/oauth/token`

#### **Descripción**

[Sección titulada «Descripción»](https://developers.factus.com.co/v1/autenticacion/refresh-token#descripci%C3%B3n)

Este endpoint permite actualizar el token de acceso mediante el uso de un **refresh token** previamente generado.

* * *

#### Encabezados (Headers)

[Sección titulada «Encabezados (Headers)»](https://developers.factus.com.co/v1/autenticacion/refresh-token#encabezados-headers)

A continuación se describen los encabezados necesarios para realizar la solicitud:

| **Encabezado** | **Valor** | **Descripción** |
| --- | --- | --- |
| `Authorization` | Bearer Token | Este debe ser proporcionado previamente al realizar el inicio de sesión o autenticar al usuario. |
| `Accept` | application/json | Indica que la respuesta debe estar en formato JSON. |

* * *

#### Cuerpo de la Solicitud (Body)

[Sección titulada «Cuerpo de la Solicitud (Body)»](https://developers.factus.com.co/v1/autenticacion/refresh-token#cuerpo-de-la-solicitud-body)

La solicitud debe enviarse en formato `form-data`. A continuación se detallan los parámetros requeridos:

| **Parámetro** | **Descripción** | **Valor Ejemplo** |
| --- | --- | --- |
| `grant_type` | Tipo de concesión, debe ser `refresh_token` | `refresh_token` |
| `client_id` | ID del cliente proporcionado por el servicio | `tu client id` |
| `client_secret` | Secreto del cliente proporcionado por el servicio | `tu client secret` |
| `refresh_token` | El refresh token previamente generado | `tu refresh token` |

* * *

#### **Ejemplo de Solicitud**

[Sección titulada «Ejemplo de Solicitud»](https://developers.factus.com.co/v1/autenticacion/refresh-token#ejemplo-de-solicitud)

A continuación, se muestra un ejemplo de cómo enviar una solicitud al endpoint:

**Laravel php**

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

**Node js**

```
const axios = require('axios');
async function refreshToken() { const url = 'https://api-sandbox.factus.com.co/oauth/token';
// Parámetros necesarios para la solicitud const data = new URLSearchParams(); data.append('grant_type', 'refresh_token'); data.append('client_id', 'tu client id'); data.append('client_secret', 'tu client secret'); data.append('refresh_token', 'tu refresh token');
try { // Realizar la solicitud POST const response = await axios.post(url, data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded', }, });
// Verificar que la respuesta contiene el access_token const { access_token, expires_in } = response.data;
if (access_token) { // Mostrar los tokens (o devolverlos como respuesta) console.log('Access Token:', access_token); console.log('Expires In:', expires_in); return { access_token: access_token, expires_in: expires_in }; } else { throw new Error('No se pudo obtener el access_token'); } } catch (error) { // Manejo de errores en caso de que falle la solicitud console.error('Error al obtener el token:', error.response ? error.response.data : error.message); return { error: 'Error al obtener el token', message: error.response ? error.response.data : error.message, }; } }
// Llamar a la función refreshToken();
```

**Curl**

Ventana de terminal

```
curl -X POST https://api-sandbox.factus.com.co/oauth/token \ -H "Accept: application/json" \ -d "grant_type=refresh_token" \ -d "client_id=tu client id" \ -d "client_secret=tu client secret" \ -d "refresh_token=tu refresh token"
```

#### Response Success

[Sección titulada «Response »](https://developers.factus.com.co/v1/autenticacion/refresh-token#response)

_Status:_ 200 OK

```
{ "token_type": "Bearer", "expires_in": 3600, "access_token": "tu access token", "refresh_token": "tu refresh token"}
```
