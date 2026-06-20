# Ver Factura

Este contenido es para V1. Cambia a la [versión más reciente](https://developers.factus.com.co/) para ver la documentación actualizada.

El endpoint devuelve una factura específica pasando el **número de la factura** como parámetro en la solicitud `GET`. Puede encontrar el número de la factura, debe revisar la respuesta de la [creación de la factura](https://developers.factus.com.co/v1/facturas/crear-y-validar-factura/factura-avanzada/#ejemplo-de-respuesta) o en [filtrar facturas](https://developers.factus.com.co/v1/facturas/ver-y-filtrar) , data.bill.number .

**Método:** GET

#### **Endpoint**

* [Pruebas](https://developers.factus.com.co/v1/facturas/ver#tab-panel-205)
* [Producción](https://developers.factus.com.co/v1/facturas/ver#tab-panel-206)

```
https://api-sandbox.factus.com.co/v1/bills/show/:number
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

[Sección titulada «Variables de Ruta (Path Variables)»](https://developers.factus.com.co/v1/facturas/ver#variables-de-ruta-path-variables)

* `number`: Número de factura.

* * *

### Ejemplo de respuesta

[Sección titulada «Ejemplo de respuesta»](https://developers.factus.com.co/v1/facturas/ver#ejemplo-de-respuesta)

* [status 200](https://developers.factus.com.co/v1/facturas/ver#tab-panel-207)

```
{ "status": "Created", "message": "Documento con el código de referencia fact0022025 registrado y validado con éxito", "data": { "company": { "url_logo": "http://api.test/storage/images/logos/2wkU627FUczVkr8U5P8yrYowQ44eYQG0Y9ymXhtP.png", "nit": "900825759", "dv": "7", "company": "HALLTEC S.A.S.", "name": "HALLTEC S.A.S.", "graphic_representation_name": "HALLTEC S.A.S.", "registration_code": "3FJ3253427", "economic_activity": "6311", "phone": "3165584659", "email": "yocahe5@gmail.com", "direction": "cra 10 # 9 - 04", "municipality": "San Gil" }, "establishment": { "name": "SuperMarket", "address": "calle 10 # 3-13", "phone_number": "0987654321", "email": "supermarket@gmail.com", "municipality_id": { "id": 996, "code": 68872, "name": "Villanueva", "department": { "id": 28, "code": "68", "name": "Santander" } } }, "customer": { "identification": "123456789", "dv": null, "graphic_representation_name": "Alan Turing", "trade_name": "", "company": "", "names": "Alan Turing", "address": "calle 1 # 2-68", "email": "alanturing@enigmasas.com", "phone": "1234567890", "legal_organization": { "id": 2, "code": "2", "name": "Persona Natural" }, "tribute": { "id": 21, "code": "ZZ", "name": "No aplica" }, "municipality": { "id": 980, "code": "68679", "name": "San Gil" } }, "numbering_range": { "prefix": "SETP", "from": 990000000, "to": 995000000, "resolution_number": "18760000001", "start_date": "19-01-2019", "end_date": "19-01-2030", "months": 132 }, "billing_period": [], "bill": { "id": 820, "document": { "code": "01", "name": "Factura electrónica de Venta" }, "operation_type": { "code": "10", "name": "Estándar" }, "number": "SETP990000493", "reference_code": "fact0022025", "order_reference": null, "status": 1, "send_email": 0, "qr": "https://catalogo-vpfe-hab.dian.gov.co/document/searchqr?documentkey=44e260a76e092e46fd5d8344a03146d5c8863ab68b18bde38a53318a33bf6805bac75f0bd71b0b75b3bd9c747a629470", "cufe": "44e260a76e092e46fd5d8344a03146d5c8863ab68b18bde38a53318a33bf6805bac75f0bd71b0b75b3bd9c747a629470", "validated": "09-01-2025 01:56:16 PM", "gross_value": "81232.50", "taxable_amount": "81232.50", "tax_amount": "8767.50", "discount_amount": "0.00", "surcharge_amount": "0.00", "total": "90000.00", "observation": null, "errors": [], "created_at": "09-01-2025 01:56:13 PM", "payment_due_date": null, "qr_image": "data:image/png;base64, [TRIMMED_BASE64_12712_CHARS]", "has_claim": 0, "is_negotiable_instrument": 0, "payment_form": { "code": "1", "name": "Pago de contado" }, "payment_method": { "code": "10", "name": "Efectivo" } }, "related_documents": [], "items": [ { "scheme_id": null, "note": null, "code_reference": "12345", "name": "producto de prueba", "quantity": 1, "discount_rate": "20.00", "discount": "8403.36", "gross_value": "33613.45", "tax_rate": "19.00", "taxable_amount": "33613.45", "tax_amount": "6386.55", "price": "50000.00", "is_excluded": 0, "unit_measure": { "id": 70, "code": "94", "name": "unidad" }, "standard_code": { "id": 1, "code": "999", "name": "Estándar de adopción del contribuyente" }, "tribute": { "id": 1, "code": "01", "name": "IVA" }, "total": 40000, "withholding_taxes": [ { "tribute_code": "05", "name": "ReteIVA", "value": "957.98", "rates": [ { "code": "05", "name": "ReteIVA", "rate": "15.00" } ] }, { "tribute_code": "06", "name": "ReteRenta", "value": "2352.94", "rates": [ { "code": "06", "name": "ReteRenta", "rate": "7.00" } ] } ], "mandate": null }, { "scheme_id": null, "note": null, "code_reference": "54321", "name": "producto de prueba 2", "quantity": 1, "discount_rate": "0.00", "discount": "0.00", "gross_value": "47619.05", "tax_rate": "5.00", "taxable_amount": "47619.05", "tax_amount": "2380.95", "price": "50000.00", "is_excluded": 0, "unit_measure": { "id": 70, "code": "94", "name": "unidad" }, "standard_code": { "id": 1, "code": "999", "name": "Estándar de adopción del contribuyente" }, "tribute": { "id": 1, "code": "01", "name": "IVA" }, "total": 50000, "withholding_taxes": [], "mandate": null } ], "allowance_charges": [], "withholding_taxes": [ { "tribute_code": "05", "name": "ReteIVA", "value": "957.98" }, { "tribute_code": "06", "name": "ReteRenta", "value": "2352.94" } ], "credit_notes": [], "debit_notes": [] }}
```
