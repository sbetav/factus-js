# Eliminar nota de ajuste

Este contenido es para V1. Cambia a la [versión más reciente](https://developers.factus.com.co/) para ver la documentación actualizada.

Elimina una nota de ajuste a documento soporte usando el código de referencia con el cual se creó. Las notas de ajuste se pueden eliminar siempre y cuando no se encuentren validados por la DIAN. Se suele eliminar una nota de ajuste cuando contiene errores de validación notificados por la DIAN para crearla nuevamente corregida.

**Nota:** Esta petición es síncrona, eso quiere decir que en la misma solicitud recibe el mensaje de si se ha eliminado la nota de ajuste documento soporte.

**Método:** DELETE

#### **Endpoint**

* [Pruebas](https://developers.factus.com.co/v1/notas-ajuste-documentos-soporte/eliminar#tab-panel-226)
* [Producción](https://developers.factus.com.co/v1/notas-ajuste-documentos-soporte/eliminar#tab-panel-227)

```
https://api-sandbox.factus.com.co/v1/adjustment-notes/reference/:reference_code
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

[Sección titulada «Variables de Ruta (Path Variables)»](https://developers.factus.com.co/v1/notas-ajuste-documentos-soporte/eliminar#variables-de-ruta-path-variables)

* `reference_code`: Código de referencia de la nota de ajuste a documento soporte.

* * *

### Ejemplo de respuesta

[Sección titulada «Ejemplo de respuesta»](https://developers.factus.com.co/v1/notas-ajuste-documentos-soporte/eliminar#ejemplo-de-respuesta)

* [status 200](https://developers.factus.com.co/v1/notas-ajuste-documentos-soporte/eliminar#tab-panel-228)

```
{ "status": "OK", "message": "Documento con código de referencia REF007 eliminado con éxito"}
```
