# Eliminar Documento soporte No Validado

Este contenido es para V1. Cambia a la [versión más reciente](https://developers.factus.com.co/) para ver la documentación actualizada.

Elimina un documento soporte usando el código de referencia con el cual se creó. Los documentos soporte se pueden eliminar siempre y cuando no se encuentren validados por la DIAN. Se suele eliminar un documento soporte cuando contiene errores de validación notificados por la DIAN para crearla nuevamente corregida.

**Nota:** Esta petición es síncrona, eso quiere decir que en la misma solicitud recibe el mensaje de si se ha eliminado el documento soporte.

**Método:** DELETE

#### **Endpoint**

* [Pruebas](https://developers.factus.com.co/v1/documentos-soporte/eliminar#tab-panel-166)
* [Producción](https://developers.factus.com.co/v1/documentos-soporte/eliminar#tab-panel-167)

```
https://api-sandbox.factus.com.co/v1/support-documents/reference/:reference_code
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

[Sección titulada «Variables de Ruta (Path Variables)»](https://developers.factus.com.co/v1/documentos-soporte/eliminar#variables-de-ruta-path-variables)

* `reference_code`: Código de referencia del documento soporte.

* * *

### Ejemplo de respuesta

[Sección titulada «Ejemplo de respuesta»](https://developers.factus.com.co/v1/documentos-soporte/eliminar#ejemplo-de-respuesta)

* [status 200](https://developers.factus.com.co/v1/documentos-soporte/eliminar#tab-panel-168)

```
{ "status": "OK", "message": "Documento con código de referencia <reference_code> eliminado con éxito"}
```
