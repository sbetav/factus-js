# Ver Empresa

Este contenido es para V1. Cambia a la [versión más reciente](https://developers.factus.com.co/) para ver la documentación actualizada.

Este endpoint permite ver la Información de la empresa del usuario correspondiente

**Método:** GET

#### **Endpoint**

* [Pruebas](https://developers.factus.com.co/v1/empresas/ver#tab-panel-175)
* [Producción](https://developers.factus.com.co/v1/empresas/ver#tab-panel-176)

```
https://api-sandbox.factus.com.co/v1/company
```

### **Encabezados de la Solicitud**

Para realizar la solicitud es necesario incluir los siguientes encabezados:

| **Encabezado** | **Valor** | **Descripción** |
| --- | --- | --- |
| `Content-Type` | `application/json` | Indica que los datos se envían en formato JSON. |
| `Authorization` | `Bearer <token_de_acceso>` | Token de autenticación necesario para acceder al recurso. Ver [Cómo generar token](https://developers.factus.com.co/autenticacion/auth) |
| `Accept` | `application/json` | Indica que la respuesta debe estar en formato JSON. |

``**Nota:** Reemplaza `token_de_acceso` con el token proporcionado tras autenticarte.``

* [status 200](https://developers.factus.com.co/v1/empresas/ver#tab-panel-177)

```
{ "status": "OK", "message": "Solicitud exitosa", "data": { "url_logo": "http://api.test/storage/images/logos/IURT3at1baB4a7YHgmDPDCoaLJAPxsmJ3eQQeVBq.png", "nit": "900825759", "dv": "7", "company": "", "trade_name": "", "names": "ALAN", "surnames": "TURING", "graphic_representation_name": "ALAN TURING", "registration_code": "", "economic_activity": 6920, "phone": "0987654321", "email": "[email protected]", "address": "calle 100 #50-80", "tribute": { "code": "ZZ", "name": "No aplica" }, "legal_organization": { "code": "2", "name": "Persona Natural" }, "municipality": { "code": "68872", "name": "Villanueva", "department": { "code": "68", "name": "Santander" } }, "responsibilities": [ { "code": "R-99-PN", "name": "No responsable" } ], "created_at": "2025-07-23T12:33:22Z", "updated_at": "2025-09-22T10:58:07Z" }}
```
