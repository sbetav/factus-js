# Ver Documento soporte

Este contenido es para V1. Cambia a la [versión más reciente](https://developers.factus.com.co/) para ver la documentación actualizada.

El endpoint devuelve un documento soporte pasando el **número del soporte** como parámetro en la solicitud `GET`. Puede encontrar el número del documento soporte, debe ver la respuesta de la [creación del documento soporte](https://developers.factus.com.co/v1/documentos-soporte/crear-validar#ejemplo-de-respuesta) o en [filtrar documento soporte](https://developers.factus.com.co/v1/documentos-soporte/ver-y-filtrar) , data.support\_document.number .

**Método:** GET

#### **Endpoint**

* [Pruebas](https://developers.factus.com.co/v1/documentos-soporte/ver#tab-panel-172)
* [Producción](https://developers.factus.com.co/v1/documentos-soporte/ver#tab-panel-173)

```
https://api-sandbox.factus.com.co/v1/support-documents/show/:number
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

[Sección titulada «Variables de Ruta (Path Variables)»](https://developers.factus.com.co/v1/documentos-soporte/ver#variables-de-ruta-path-variables)

* `number`: Número del documento soporte.

* * *

### Ejemplo de respuesta

[Sección titulada «Ejemplo de respuesta»](https://developers.factus.com.co/v1/documentos-soporte/ver#ejemplo-de-respuesta)

* [status 200](https://developers.factus.com.co/v1/documentos-soporte/ver#tab-panel-174)

```
{ "status": "OK", "message": "Solicitud exitosa", "data": { "company": { "url_logo": "http://api-sandbox.factus.com.co/storage/images/logos/lC5CLGXHgwlv8slaoiKC6dHkVLIXQVaDkL9C1Yqc.png", "nit": "901724254", "dv": "1", "company": "FACTUS S.A.S.", "name": "FACTUS S.A.S.", "graphic_representation_name": "FACTUS S.A.S.", "registration_code": "bnnmbvncv", "economic_activity": "6201", "phone": "3133045345", "email": "FACTUSFACTURACION@GMAIL.COM", "direction": "CARRERA 10 # 9 - 04", "municipality": "San Gil" }, "provider": { "identification": "123456789", "dv": "6", "graphic_representation_name": "Alan Turing", "trade_name": null, "names": "Alan Turing", "address": "calle 1 # 2-68", "email": "alanturing@enigmasas.com", "phone": "1234567890", "identification_document": { "id": 6, "code": "31", "name": "NIT" }, "legal_organization": { "id": 2, "code": "2", "name": "Persona Natural" }, "tribute": { "id": 21, "code": "ZZ", "name": "No aplica" }, "country": { "id": 46, "code": "CO", "name": "Colombia" }, "municipality": { "id": 980, "code": "68679", "name": "San Gil" } }, "support_document": { "id": 6, "number": "SEDS984000021", "reference_code": "REF0017", "status": 1, "qr": "https://catalogo-vpfe-hab.dian.gov.co/document/searchqr?documentkey=69f218c3601e279d9d47d091fe1c2d85e2b727a9576811d7a561d16313860799f26e8b0c8ae9f68db7a61a7234329f06", "cuds": "69f218c3601e279d9d47d091fe1c2d85e2b727a9576811d7a561d16313860799f26e8b0c8ae9f68db7a61a7234329f06", "validated": "11-02-2025 10:16:23 PM", "discount_rate": "0.00", "discount": "0.00", "gross_value": "90000.00", "taxable_amount": "0.00", "tax_amount": "0.00", "total": "90000.00", "observation": null, "errors": [ "Regla: DSAB19b, Notificación: NIT del Prestador de Servicios no está autorizado por la DIAN" ], "created_at": "11-02-2025 10:16:18 PM", "qr_image": "data:image/png;base64, [TRIMMED_BASE64_12816_CHARS]", "payment_method": { "code": "10", "name": "Efectivo" } }, "items": [ { "code_reference": "12345", "name": "producto de prueba", "quantity": 1, "discount_rate": "20.00", "discount": "10000.00", "gross_value": "40000.00", "tax_rate": "0.00", "taxable_amount": "0.00", "tax_amount": "0.00", "price": "50000.00", "is_excluded": 1, "unit_measure": { "id": 70, "code": "94", "name": "unidad" }, "standard_code": { "id": 1, "code": "999", "name": "Estándar de adopción del contribuyente" }, "total": 40000, "withholding_taxes": [ { "tribute_code": "06", "name": "ReteRenta", "value": "1400.00", "rates": [ { "code": "06", "name": "ReteRenta", "rate": "3.50" } ] } ] }, { "code_reference": "54321", "name": "producto de prueba 2", "quantity": 1, "discount_rate": "0.00", "discount": "0.00", "gross_value": "50000.00", "tax_rate": "0.00", "taxable_amount": "0.00", "tax_amount": "0.00", "price": "50000.00", "is_excluded": 1, "unit_measure": { "id": 70, "code": "94", "name": "unidad" }, "standard_code": { "id": 1, "code": "999", "name": "Estándar de adopción del contribuyente" }, "total": 50000, "withholding_taxes": [] } ], "withholding_taxes": [ { "tribute_code": "06", "name": "ReteRenta", "value": "1400.00" } ], "adjustment_notes": [], "numbering_range": { "prefix": "SEDS", "from": 984000000, "to": 985000000, "resolution_number": "18760000003", "start_date": "01-01-2025", "end_date": "31-12-2025", "months": 11 } }}
```
