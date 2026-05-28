# Suscripciones

Este endpoint permite consultar todas las suscripciones activas. Devuelve información detallada sobre cada suscripción incluyendo:

* **Información del grupo de documentos:** Nombre y tipos de documentos soportados
* **Cuota de documentos:** Total asignado, consumidos y disponibles
* **Estado de la suscripción:** Fechas de activación y expiración, días restantes
* **Configuración:** Si está activa y si tiene cuota ilimitada

**Método:** GET

#### **Endpoint**

* [Sandbox](https://developers.factus.com.co/suscripciones/suscripciones#tab-panel-93)
* [Producción](https://developers.factus.com.co/suscripciones/suscripciones#tab-panel-94)

```
https://api-sandbox.factus.com.co/v2/subscriptions
```

### **Encabezados de la Solicitud**

Incluye los siguientes encabezados.

<table><tbody><tr><td><code>Content-Type</code> : <code>application/json</code><br>Indica que los datos se envían en formato JSON.</td></tr><tr><td><code>Authorization Bearer token_de_acceso</code><br>Token de autenticación necesario para acceder al recurso. Ver <a href="https://developers.factus.com.co/autenticacion/auth" target="_blank">Cómo generar token</a></td></tr><tr><td><code>Accept</code> : <code>application/json</code><br>Indica que la respuesta debe estar en formato JSON.</td></tr></tbody></table>

``**Nota:** Reemplaza `token_de_acceso` con el token proporcionado tras autenticarte.``
