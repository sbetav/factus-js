# Eliminar Rango

Este contenido es para V1. Cambia a la [versión más reciente](https://developers.factus.com.co/) para ver la documentación actualizada.

Este endpoint permite eliminar un rango de numeración en específico. Es útil para eliminar un rango de numeración en particular.

**Método:** DELETE

#### **Endpoint**

* [Pruebas](https://developers.factus.com.co/v1/rangos-de-numeracion/eliminar-rango#tab-panel-281)
* [Producción](https://developers.factus.com.co/v1/rangos-de-numeracion/eliminar-rango#tab-panel-282)

```
https://api-sandbox.factus.com.co/v1/numbering-ranges/:numbering_range_id
```

### **Encabezados de la Solicitud**

Para realizar la solicitud es necesario incluir los siguientes encabezados:

| **Encabezado** | **Valor** | **Descripción** |
| --- | --- | --- |
| `Content-Type` | `application/json` | Indica que los datos se envían en formato JSON. |
| `Authorization` | `Bearer <token_de_acceso>` | Token de autenticación necesario para acceder al recurso. Ver [Cómo generar token](https://developers.factus.com.co/autenticacion/auth) |
| `Accept` | `application/json` | Indica que la respuesta debe estar en formato JSON. |

``**Nota:** Reemplaza `token_de_acceso` con el token proporcionado tras autenticarte.``

* * *

### Variables de Ruta (Path Variables)

[Sección titulada «Variables de Ruta (Path Variables)»](https://developers.factus.com.co/v1/rangos-de-numeracion/eliminar-rango#variables-de-ruta-path-variables)

* `numbering_range_id` ID del rango de numeración

* * *

### Ejemplo de respuesta

[Sección titulada «Ejemplo de respuesta»](https://developers.factus.com.co/v1/rangos-de-numeracion/eliminar-rango#ejemplo-de-respuesta)

* [status 200](https://developers.factus.com.co/v1/rangos-de-numeracion/eliminar-rango#tab-panel-283)

```
{ "status": "OK", "message": "Rango de numeración eliminado con éxito"}
```
