# Introducción a Factus API

#### **Control de Tasa (Rate Limiting)**

[Sección titulada «Control de Tasa (Rate Limiting)»](https://developers.factus.com.co/limite-de-request#control-de-tasa-rate-limiting)

Para garantizar la estabilidad del servicio, la API implementa un límite de **80 solicitudes por minuto por usuario**.

##### Consideraciones clave:

[Sección titulada «Consideraciones clave:»](https://developers.factus.com.co/limite-de-request#consideraciones-clave)

* **Excedente de límite:** Si se supera esta cuota, la aplicación rechazará las peticiones adicionales devolviendo el código de estado **HTTP 429 (“Too Many Requests”)**.
* **Restablecimiento:** Una vez alcanzado el límite, el usuario deberá esperar a que finalice el ciclo de un minuto para que su cuota se reinicie y pueda realizar llamadas nuevamente.

En las respuestas del API se incluyen los siguientes headers como información adicional:

| Parámetros |
| --- |
| **`X-RateLimit-Limit`**
El número máximo de peticiones permitidas en el periodo.

|
| **`X-RateLimit-Remaining`**

La cantidad de solicitudes restantes dentro del minuto actual.

|
| **`X-RateLimit-Reset`**

El tiempo restante (en segundos o timestamp) para que el contador se reinicie.

|
| **`Retry-After`**

El tiempo (en segundos) que el cliente debe esperar antes de realizar otra solicitud.

|
