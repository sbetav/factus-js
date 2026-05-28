# Eliminar Factura No Validada

Este contenido es para V1. Cambia a la [versión más reciente](https://developers.factus.com.co/) para ver la documentación actualizada.

Elimina una factura usando el código de referencia con el cual se creó. Las facturas se pueden eliminar siempre y cuando no se encuentren validadas por la DIAN. Se suele eliminar una factura cuando contiene errores de validación notificados por la DIAN para crearla nuevamente corregida.

**Método:** DELETE

#### **Endpoint**

* [Pruebas](https://developers.factus.com.co/v1/facturas/eliminar#tab-panel-192)
* [Producción](https://developers.factus.com.co/v1/facturas/eliminar#tab-panel-193)

```
https://api-sandbox.factus.com.co/v1/bills/destroy/reference/:reference_code
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

[Sección titulada «Variables de Ruta (Path Variables)»](https://developers.factus.com.co/v1/facturas/eliminar#variables-de-ruta-path-variables)

* `reference_code`: Código de referencia de la factura.

* * *

### Ejemplo de respuesta

[Sección titulada «Ejemplo de respuesta»](https://developers.factus.com.co/v1/facturas/eliminar#ejemplo-de-respuesta)

* [status 200](https://developers.factus.com.co/v1/facturas/eliminar#tab-panel-194)

```
{ "status": "OK", "message": "Documento con código de referencia <reference_code> eliminado con éxito"}
```
