# Ver Nota Crédito

Este contenido es para V1. Cambia a la [versión más reciente](https://developers.factus.com.co/) para ver la documentación actualizada.

El endpoint devuelve una nota crédito específica pasando el **número de la nota crédito** como parámetro en la solicitud `GET`. Puede encontrar el número de la nota crédito en la respuesta de la [creación de la nota crédito](https://developers.factus.com.co/v1/notas-credito/crear-y-validar/) o en [ver y filtrar notas crédito](https://developers.factus.com.co/v1/notas-credito/ver-filtrar/) , data.credit\_note.number.

**Método:** GET

#### **Endpoint**

* [Pruebas](https://developers.factus.com.co/v1/notas-credito/ver#tab-panel-268)
* [Producción](https://developers.factus.com.co/v1/notas-credito/ver#tab-panel-269)

```
https://api-sandbox.factus.com.co/v1/credit-notes/:number
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

[Sección titulada «Variables de Ruta (Path Variables)»](https://developers.factus.com.co/v1/notas-credito/ver#variables-de-ruta-path-variables)

* `number`: Número de nota crédito.

* * *

### Ejemplo de respuesta

[Sección titulada «Ejemplo de respuesta»](https://developers.factus.com.co/v1/notas-credito/ver#ejemplo-de-respuesta)

* [status 200](https://developers.factus.com.co/v1/notas-credito/ver#tab-panel-270)
* [status 404](https://developers.factus.com.co/v1/notas-credito/ver#tab-panel-271)

```
{ "status": "OK", "message": "Solicitud exitosa", "data": { "company": { "url_logo": "http://api.test/storage/images/logos/uKWIKmmwxeELNzmrxyKoGgbCtimDV1zInzQqgNin.png", "nit": "900825759", "dv": "7", "company": "HALLTEC S.A.S.", "name": "HALLTEC", "registration_code": "3FJ3253427", "economic_activity": "6311", "phone": "3165584659", "email": "yocahe5@gmail.com", "direction": "cra 10 # 9 - 04", "municipality": "San Gil" }, "establishment": { "name": "SuperMarket", "address": "calle 10 # 3-13", "phone_number": "0987654321", "email": "supermarket@gmail.com", "municipality_id": { "id": 996, "code": "68872", "name": "Villanueva", "department": { "id": 28, "code": "68", "name": "Santander" } } }, "billing_period": [], "customer": { "identification": "123456789", "dv": null, "graphic_representation_name": "Alan Turing", "trade_name": "", "company": "", "names": "Alan Turing", "address": "calle 1 # 2-68", "email": "alanturing@enigmasas.com", "phone": "1234567890", "legal_organization": { "id": 2, "code": "2", "name": "Persona Natural" }, "tribute": { "id": 21, "code": "ZZ", "name": "No aplica" }, "municipality": { "id": 980, "code": "68679", "name": "San Gil" } }, "credit_note": { "id": 122, "number": "NC72", "reference_code": "2", "status": 1, "send_email": 1, "qr": "https://catalogo-vpfe-hab.dian.gov.co/document/searchqr?documentkey=d77b2ee086eca4c89cbb731c22b478f08444420ece789d73231229f2dc8db14c884b21bec0b80a4e7e1dbb9e3f53657b", "cude": "d77b2ee086eca4c89cbb731c22b478f08444420ece789d73231229f2dc8db14c884b21bec0b80a4e7e1dbb9e3f53657b", "validated": "18-09-2024 04:14:47 PM", "gross_value": "81232.50", "taxable_amount": "81232.50", "tax_amount": "8767.50", "discount_amount": "0.00", "surcharge_amount": "0.00", "total": "90000.00", "observation": null, "errors": [ "Regla: CBF02, Notificación: No se informo el numero de la factura referenciada" ], "created_at": "18-09-2024 04:14:45 PM", "qr_image": "data:image/png;base64, [TRIMMED_BASE64_13032_CHARS]", "bill_id": 510, "cufe": "1814771d90c31ef33532e3260f6fd1a4e96ab18c098757b4cfc2ea4d6a7bcd210fbe2a3ad8a9f563b0d79e51a332b8d8", "number_bill": "SETP990000299", "payment_method": { "name": "Efectivo", "code": "10" }, "customization_id": { "code": "20", "name": "Nota Crédito que referencia una factura electrónica." }, "correction_concept": { "code": "2", "name": "Anulación de factura electrónica" } }, "items": [ { "note": null, "code_reference": "12345", "name": "producto de prueba", "quantity": 1, "discount_rate": "20.00", "discount": "8403.36", "gross_value": "33613.45", "tax_rate": "19.00", "taxable_amount": "33613.45", "tax_amount": "6386.55", "price": "50000.00", "is_excluded": 0, "unit_measure": { "id": 70, "code": "94", "name": "unidad" }, "standard_code": { "id": 1, "code": "999", "name": "Estándar de adopción del contribuyente" }, "tribute": { "id": 1, "code": "01", "name": "IVA" }, "total": 40000, "withholding_taxes": [ { "tribute_code": "05", "name": "ReteIVA", "value": "957.98", "rates": [ { "code": "05", "name": "ReteIVA", "rate": "15.00" } ] }, { "tribute_code": "06", "name": "ReteRenta", "value": "2352.94", "rates": [ { "code": "06", "name": "ReteRenta", "rate": "7.00" } ] } ] }, { "note": null, "code_reference": "54321", "name": "producto de prueba 2", "quantity": 1, "discount_rate": "0.00", "discount": "0.00", "gross_value": "47619.05", "tax_rate": "5.00", "taxable_amount": "47619.05", "tax_amount": "2380.95", "price": "50000.00", "is_excluded": 0, "unit_measure": { "id": 70, "code": "94", "name": "unidad" }, "standard_code": { "id": 1, "code": "999", "name": "Estándar de adopción del contribuyente" }, "tribute": { "id": 1, "code": "01", "name": "IVA" }, "total": 50000, "withholding_taxes": [] } ], "allowance_charges": [], "withholding_taxes": [ { "tribute_code": "05", "name": "ReteIVA", "value": "957.98" }, { "tribute_code": "06", "name": "ReteRenta", "value": "2352.94" } ] }}
```
