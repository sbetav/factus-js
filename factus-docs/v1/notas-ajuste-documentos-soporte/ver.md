# Ver nota de ajuste

Este contenido es para V1. Cambia a la [versión más reciente](https://developers.factus.com.co/) para ver la documentación actualizada.

El endpoint devuelve una _**nota de ajuste a documento soporte**_ pasando el **número del soporte** como parámetro en la solicitud `GET`. Puede encontrar el número del documento soporte, debe ver la respuesta de la [creación del documento soporte](https://developers.factus.com.co/documentos-soporte/crear-validar#ejemplo-de-respuesta) o en [filtrar documento soporte](https://developers.factus.com.co/documentos-soporte/ver-y-filtrar) , data.support\_document.number .

**Método:** GET

#### **Endpoint**

* [Pruebas](https://developers.factus.com.co/v1/notas-ajuste-documentos-soporte/ver#tab-panel-232)
* [Producción](https://developers.factus.com.co/v1/notas-ajuste-documentos-soporte/ver#tab-panel-233)

```
https://api-sandbox.factus.com.co/v1/adjustment-notes/:number
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

[Sección titulada «Variables de Ruta (Path Variables)»](https://developers.factus.com.co/v1/notas-ajuste-documentos-soporte/ver#variables-de-ruta-path-variables)

* `number`: Número de la nota de ajuste.

* * *

### Ejemplo de respuesta

[Sección titulada «Ejemplo de respuesta»](https://developers.factus.com.co/v1/notas-ajuste-documentos-soporte/ver#ejemplo-de-respuesta)

* [status 200](https://developers.factus.com.co/v1/notas-ajuste-documentos-soporte/ver#tab-panel-234)

```
{ "status": "OK", "message": "Solicitud exitosa", "data": { "reference_code": "2fca4b6c-638c-4bd9-bbb2-7981f99a05ba", "number": "NA1", "payment_details": [ { "payment_form": { "code": "1", "name": "Pago de contado" }, "payment_method": { "code": "42", "name": "Consignación" }, "reference_code": "pago-002", "amount": "100000.00", "due_date": null } ], "correction_concept": { "code": "5", "name": "Otros" }, "is_validated": true, "validated_at": "06-05-2026 11:44:12 AM", "errors": [ "Regla: NSAX04, Notificación: No se encuentra el grupo TaxSubtotal", "Regla: NSAJ44b, Notificación: Nit o Documento de Identificación informado No corresponde al registrado en el RUT con respecto a la razón social o nombre comercial suministrado.", "Regla: NSAJ43b, Notificación: Nombre informado No corresponde al registrado en el RUT con respecto al Nit suminstrado." ], "observation": null, "created_at": "06-05-2026 11:44:11 AM", "company": { "url_logo": "https://api-sandbox.factus.com.co/storage/images/logos/T3RWMJn0HDi6Uy4UTIOpi2vqw4qbEumeFiB5kt21.png", "nit": "1000789002", "dv": "2", "economic_activity": "1084", "establishment": { "name": "FACTUS V2", "address": "calle 11 8 84", "phone_number": "3161331234", "email": "[email protected]", "municipality": { "code": "68679", "name": "San Gil", "department": { "code": "68", "name": "Santander" } } } }, "provider": { "identification_document": { "code": "31", "name": "NIT" }, "identification": "2343543", "dv": "7", "graphic_representation_name": "Pepito Perez", "trade_name": null, "names": "Pepito Perez", "address": "calle 4", "email": null, "phone": null, "legal_organization": { "code": "2", "name": "Persona Natural" }, "tribute": { "code": "ZZ", "name": "No aplica" }, "municipality": { "code": "68679", "name": "San Gil", "department": { "code": "68", "name": "Santander" } } }, "items": [ { "code_reference": "12345", "name": "producto de prueba", "quantity": "2.00", "unit_measure": { "code": "94", "name": "unidad" }, "standard_code": { "code": "999", "name": "Estándar de adopción del contribuyente" }, "discount_rate": "0.00", "discount": "0.00", "gross_value": "50000.00", "withholding_taxes": [ { "tribute_code": "06", "name": "ReteRenta", "value": "3500.00", "rates": [ { "code": "06", "name": "ReteRenta", "rate": "3.50" } ] } ], "price": "50000.00", "total": "100000.00" } ], "withholding_taxes": [ { "tribute_code": "06", "name": "ReteRenta", "value": "3500.00" } ], "totals": { "gross_amount": "100000.00", "total": "100000.00" }, "cuds": "8cd9bd7c00cbcb0c9cc9e4299eb605efc324a2748d12abc10201bc043ed5446465abe9c94e9bd4479bb7cd09c1fcc651", "support_document": { "reference_code": "0e3579fa-207b-4d23-8858-465022677321", "number": "SEDS984000004", "cuds": "174d8d1a07a4d03bfd5c4cc6ddfc7b8abd247f959530b0fb4b9906e6eb3ed77f0918b2ea944806018168d57a7740c046" }, "links": { "qr": "https://catalogo-vpfe-hab.dian.gov.co/document/searchqr?documentkey=8cd9bd7c00cbcb0c9cc9e4299eb605efc324a2748d12abc10201bc043ed5446465abe9c94e9bd4479bb7cd09c1fcc651" } }}
```
