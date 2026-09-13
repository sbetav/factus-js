# Crear y validar

**Método:** POST

#### **Endpoint**

**Sandbox**

```
https://api-sandbox.factus.com.co/v2/payrolls
```

**Producción**

```
https://api.factus.com.co/v2/payrolls
```

### **Encabezados de la Solicitud**

Incluye los siguientes encabezados.

<table><tbody><tr><td><code>Content-Type</code> : <code>application/json</code><br>Indica que los datos se envían en formato JSON.</td></tr><tr><td><code>Authorization Bearer token_de_acceso</code><br>Token de autenticación necesario para acceder al recurso. Ver <a href="https://developers.factus.com.co/autenticacion/auth" target="_blank">Cómo generar token</a></td></tr><tr><td><code>Accept</code> : <code>application/json</code><br>Indica que la respuesta debe estar en formato JSON.</td></tr></tbody></table>

``**Nota:** Reemplaza `token_de_acceso` con el token proporcionado tras autenticarte.``

* * *

Ver aquí la descripción de los campos.

| Parámetros Nómina Electrónica |
| --- |
| **`reference_code`** `string`
Código único que sirve para identificar cada nómina de manera unívoca en el sistema y garantizar que no haya duplicados. Esto nos ayuda a prevenir que se genere más de una nómina con la misma información. |
| **`observation`** `string` `opcional`
Observación sobre la nómina. Campo de texto libre. |
| **`numbering_range_id`** `integer` `opcional`
Identificador del rango de numeración. Requerido si el usuario tiene más de un rango de numeración activo. [Rangos de numeración.](https://developers.factus.com.co/rangos-de-numeracion/obtener-rangos) |
| **`settlement_period`** `object`
Objeto con la información sobre las fechas del periodo de liquidación de la nómina. |
| **`settlement_period.month`** `integer`
Número del mes en el que se hace la liquidación de la nómina (1–12). |
| **`settlement_period.year`** `integer`
Año en el cual se hace la liquidación de la nómina. |
| **`settlement_period.payroll_period_code`** `string`
Código del periodo de nómina. [Códigos de periodos de nómina.](https://developers.factus.com.co/tablas-de-referencia/tablas-referencia-nomina/#c%C3%B3digos-de-periodos-de-n%C3%B3mina) |
| **`settlement_period.pay_period_half`** `string` `opcional`
Indica si el periodo de liquidación se realizó en la primera o segunda quincena. Requerido solo si el `payroll_period_code` es `4` (quincenal). |
| **`payment`** `object`
Objeto con la información sobre el pago de la nómina. |
| **`payment.payment_method_code`** `string`
Código del método de pago. [Códigos de métodos de pago.](https://developers.factus.com.co/tablas-de-referencia/tablas/#c%C3%B3digos-de-m%C3%A9todos-de-pago) |
| **`payment.bank_name`** `string` `opcional`
Nombre de la entidad bancaria a la que se realizó la transferencia. Requerido solo si el `payment_method_code` es `42` (Consignación), `47` (Transferencia) o `98` (CATS – Nequi, Daviplata, etc.). |
| **`payment.account_type`** `string` `opcional`
Tipo de cuenta bancaria del empleado donde se realiza la consignación. Requerido solo si el `payment_method_code` es `42`, `47` o `98`. [Códigos de tipos de cuenta.](https://developers.factus.com.co/tablas-de-referencia/tablas-referencia-nomina/#c%C3%B3digos-de-tipos-de-cuenta) |
| **`payment.account_number`** `string` `opcional`
Número de cuenta a la que se hará la transferencia. Requerido solo si el `payment_method_code` es `42`, `47` o `98`. |
| **`payment.payment_date`** `date`
Fecha en la que se le pagó al trabajador en formato `AAAA-MM-DD`. |
| **`worker`** `object`
Objeto con la información del trabajador. |
| **`worker.identification_document_code`** `string`
Código del tipo de documento de identificación del trabajador. [Códigos de tipos de documentos de identidad.](https://developers.factus.com.co/tablas-de-referencia/tablas-referencia-nomina/#c%C3%B3digos-de-tipos-de-identificaci%C3%B3n-para-n%C3%B3mina) |
| **`worker.identification_number`** `string`
Número de identificación del documento del trabajador. |
| **`worker.first_name`** `string`
Primer nombre del trabajador. |
| **`worker.other_names`** `string` `opcional`
Otros nombres del trabajador. |
| **`worker.first_surname`** `string`
Primer apellido del trabajador. |
| **`worker.second_surname`** `string`
Segundo apellido del trabajador. |
| **`worker.address`** `string`
Dirección del trabajador donde se encontraba el trabajador en el mes reportado. |
| **`worker.country_code`** `string`
Código del país donde el trabajador estuvo en el periodo de la nómina. [Países disponibles.](https://developers.factus.com.co/tablas-de-referencia/countries) |
| **`worker.municipality_code`** `string` `opcional`
Código del municipio donde el trabajador estuvo en el periodo de la nómina. Requerido si el country\_code es `CO`. [Municipios disponibles.](https://developers.factus.com.co/tablas-de-referencia/municipios) |
| **`worker.has_integral_salary`** `boolean`
Indica si el trabajador tiene un salario integral. |
| **`worker.has_high_risk`** `boolean`
Indica si el trabajador laboró durante el presente periodo alguna actividad considerada de alto riesgo descritas en el Decreto 2090 de 2003, o la norma que lo modifique, adicione o sustituya. |
| **`worker.worker_type_code`** `string`
Código que indica el tipo de trabajador. [Códigos de tipos de trabajador.](https://developers.factus.com.co/tablas-de-referencia/tablas-referencia-nomina/#c%C3%B3digos-de-tipos-de-trabajador) |
| **`worker.worker_subtype`** `string`
Código del subtipo de trabajador. [Códigos de subtipos de trabajadores.](https://developers.factus.com.co/tablas-de-referencia/tablas-referencia-nomina/#c%C3%B3digos-de-subtipos-de-trabajadores) |
| **`worker.contract_type`** `string`
Indica el tipo de contrato del trabajador. [Códigos de tipos de contratos.](https://developers.factus.com.co/tablas-de-referencia/tablas-referencia-nomina/#c%C3%B3digos-de-tipos-de-contratos) |
| **`worker.employee_code`** `string` `opcional`
Código interno del trabajador en la empresa. |
| **`worker.salary`** `string`
Valor del sueldo base que se le paga al trabajador. |
| **`worker.entry_date`** `date`
Fecha de ingreso o vinculación del trabajador a la nómina del reportante en formato ⁠ `AAAA-MM-DD`. Si existen múltiples ingresos en el mismo mes, reporte la primera fecha en que ocurre la novedad. |
| **`worker.days_worked`** `string`
Cantidad de días laborados durante el periodo de pago. |
| **`worker.retirement_date`** `date` `opcional`
Fecha de retiro del trabajador de la nómina del reportante en formato ⁠ `AAAA-MM-DD`. Se reporta únicamente en el mes en que ocurre la novedad. Si hay múltiples retiros en el mismo mes, reporte la última fecha. |
| **`accruals`** `object`
Objeto con la información sobre los devengados realizados al trabajador. |
| **`accruals.suel`** `object`
Objeto con la información sobre el sueldo básico del trabajador. |
| **`accruals.suel.accrual_type_code`** `string` `opcional`
Código del tipo de sueldo. Por defecto es `1`. |
| **`accruals.suel.amount`** `string`
Valor que corresponde al sueldo del trabajador por los días laborados según lo estipulado en el contrato. |
| **`accruals.cesa`** `array` `opcional`
Array con la información sobre las cesantías del trabajador. Se puede enviar un objeto por cada cesantía. |
| **`accruals.cesa.*.amount`** `string`
Valor pagado de las cesantías o intereses de cesantías del trabajador. |
| **`accruals.cesa.*.percentage`** `string` `opcional`
Porcentaje de intereses de cesantías. Requerido si el código del tipo de cesantías es `2` (intereses de cesantías). |
| **`accruals.cesa.*.accrual_type_code`** `string`
Código del tipo de cesantía. [Códigos de tipos de cesantías.](https://developers.factus.com.co/tablas-de-referencia/tablas-referencia-nomina/#c%C3%B3digos-de-tipos-de-cesant%C3%ADas) |
| **`accruals.prim`** `object` `opcional`
Objeto con la información sobre el pago de primas del trabajador. |
| **`accruals.prim.quantity`** `integer` `opcional`
Cantidad de días trabajados a los cuales corresponde el pago de prima. Requerido si el `accrual_type_code` es `1` (Primas). |
| **`accruals.prim.amount`** `string`
Valor pagado por la prima al trabajador. |
| **`accruals.prim.accrual_type_code`** `string`
Código del tipo de prima. [Códigos de tipos de primas.](https://developers.factus.com.co/tablas-de-referencia/tablas-referencia-nomina/#c%C3%B3digos-de-tipos-de-primas) |
| **`accruals.boni`** `array` `opcional`
Array con la información de las bonificaciones al trabajador. Se puede enviar un objeto por cada bonificación. |
| **`accruals.boni.*.amount`** `string`
Valor pagado por la bonificación al trabajador. |
| **`accruals.boni.*.accrual_type_code`** `string`
Código del tipo de bonificación. [Códigos de tipos de bonificaciones.](https://developers.factus.com.co/tablas-de-referencia/tablas-referencia-nomina/#c%C3%B3digos-de-tipos-de-bonificaciones) |
| **`accruals.bono`** `array` `opcional`
Array con la información de los bonosEPCTV (electrónicos, cheques, vales, recargas). |
| **`accruals.bono.*.amount`** `string`
Valor que el trabajador recibe mediante bonos electrónicos, cheques, vales o recargas. |
| **`accruals.bono.*.accrual_type_code`** `string`
Código del tipo de bonoEPCTV. [Códigos de tipos de bonosEPCTV.](https://developers.factus.com.co/tablas-de-referencia/tablas-referencia-nomina/#c%C3%B3digos-de-tipos-de-bonosepctv) |
| **`accruals.tra`** `array` `opcional`
Array con la información sobre auxilios de transporte. |
| **`accruals.tra.*.amount`** `string`
Valor pagado al trabajador por el auxilio de transporte. |
| **`accruals.tra.*.accrual_type_code`** `string`
Código del tipo de auxilio de transporte. [Códigos de tipos de auxilios de transporte.](https://developers.factus.com.co/tablas-de-referencia/tablas-referencia-nomina/#c%C3%B3digos-de-tipos-de-auxilios-de-transporte) |
| **`accruals.comp`** `array` `opcional`
Array con la información sobre compensaciones al trabajador. |
| **`accruals.comp.*.amount`** `string`
Valor pagado al trabajador por compensaciones como retribución mensual. |
| **`accruals.comp.*.accrual_type_code`** `string`
Código del tipo de compensación. [Códigos de tipos de compensaciones.](https://developers.factus.com.co/tablas-de-referencia/tablas-referencia-nomina/#c%C3%B3digos-de-tipos-de-compensaciones) |
| **`accruals.otro`** `array` `opcional`
Array con otros conceptos de pago fijos o variables al trabajador en dinero o especie. |
| **`accruals.otro.*.amount`** `string`
Valor de los demás pagos realizados al trabajador. |
| **`accruals.otro.*.description`** `string`
Nombre del concepto para los demás pagos realizados al trabajador. |
| **`accruals.otro.*.accrual_type_code`** `string`
Código del tipo de concepto. [Códigos de tipos de conceptos.](https://developers.factus.com.co/tablas-de-referencia/tablas-referencia-nomina/#c%C3%B3digos-de-tipos-de-conceptos) |
| **`accruals.lice`** `array` `opcional`
Array con la información sobre las licencias del trabajador. |
| **`accruals.lice.*.amount`** `string` `opcional`
Valor pagado al trabajador por la licencia remunerada o de maternidad/paternidad. Requerido cuando el `accrual_type_code` es diferente a `3` (licencia no remunerada). |
| **`accruals.lice.*.quantity`** `integer`
Cantidad de días que el trabajador estuvo de licencia. |
| **`accruals.lice.*.start_date`** `date` `opcional`
Fecha de inicio de la licencia en formato `AAAA-MM-DD`. |
| **`accruals.lice.*.end_date`** `date` `opcional`
Fecha de fin de la licencia en formato `AAAA-MM-DD`. |
| **`accruals.lice.*.accrual_type_code`** `string`
Código del tipo de licencia. [Códigos de tipos de licencia.](https://developers.factus.com.co/tablas-de-referencia/tablas-referencia-nomina/#c%C3%B3digos-de-tipos-de-licencia) |
| **`accruals.vaca`** `array` `opcional`
Array con la información sobre las vacaciones del trabajador. |
| **`accruals.vaca.*.quantity`** `integer`
Cantidad de días que el trabajador estuvo en vacaciones. |
| **`accruals.vaca.*.amount`** `string`
Valor pagado al trabajador por sus vacaciones. |
| **`accruals.vaca.*.start_date`** `date` `opcional`
Fecha de inicio del periodo de vacaciones en formato `AAAA-MM-DD`. |
| **`accruals.vaca.*.end_date`** `date` `opcional`
Fecha de fin del periodo de vacaciones en formato `AAAA-MM-DD`. |
| **`accruals.vaca.*.accrual_type_code`** `string`
Código del tipo de vacaciones. [Códigos de tipos de vacaciones.](https://developers.factus.com.co/tablas-de-referencia/tablas-referencia-nomina/#c%C3%B3digos-de-tipos-de-vacaciones) |
| **`accruals.inca`** `array` `opcional`
Array con la información sobre las incapacidades del trabajador. |
| **`accruals.inca.*.start_date`** `date` `opcional`
Fecha de inicio de la incapacidad en formato `AAAA-MM-DD`. |
| **`accruals.inca.*.end_date`** `date` `opcional`
Fecha de fin de la incapacidad en formato `AAAA-MM-DD`. |
| **`accruals.inca.*.quantity`** `integer`
Cantidad de días que el trabajador estuvo incapacitado. |
| **`accruals.inca.*.amount`** `string`
Valor pagado al trabajador durante la incapacidad. |
| **`accruals.inca.*.accrual_type_code`** `string`
Código del tipo de incapacidad. [Códigos de tipos de incapacidades.](https://developers.factus.com.co/tablas-de-referencia/tablas-referencia-nomina/#c%C3%B3digos-de-tipos-de-incapacidades) |
| **`accruals.auxi`** `array` `opcional`
Array con la información sobre los auxilios del trabajador (ayudas o apoyos económicos). |
| **`accruals.auxi.*.amount`** `string`
Valor pagado al trabajador por el auxilio. |
| **`accruals.auxi.*.accrual_type_code`** `string`
Código del tipo de auxilio. [Códigos de tipos de auxilio.](https://developers.factus.com.co/tablas-de-referencia/tablas-referencia-nomina/#c%C3%B3digos-de-tipos-de-auxilio) |
| **`accruals.huel`** `array` `opcional`
Array con la información sobre huelgas legales del trabajador. |
| **`accruals.huel.*.start_date`** `date` `opcional`
Fecha de inicio del mes en que el trabajador inicia la huelga en formato `AAAA-MM-DD`. |
| **`accruals.huel.*.end_date`** `date` `opcional`
Fecha de fin del mes en que el trabajador termina la huelga en formato `AAAA-MM-DD`. |
| **`accruals.huel.*.quantity`** `integer`
Cantidad de días de duración de la huelga. |
| **`accruals.huel.*.accrual_type_code`** `string` `opcional`
Código del tipo de huelga. Por defecto es `1`. |
| **`accruals.comi`** `array` `opcional`
Array con la información sobre comisiones realizadas por el trabajador. |
| **`accruals.comi.*.amount`** `string`
Valor pagado al trabajador por las comisiones realizadas. |
| **`accruals.comi.*.accrual_type_code`** `string` `opcional`
Código del tipo de comisión. Por defecto es `1`. |
| **`accruals.terc`** `array` `opcional`
Array con la información sobre pagos de terceros al trabajador. |
| **`accruals.terc.*.amount`** `string`
Valor pagado al trabajador proveniente de un proveedor o tercero. |
| **`accruals.terc.*.accrual_type_code`** `string` `opcional`
Código del tipo de tercero. Por defecto es `1`. |
| **`accruals.dota`** `object` `opcional`
Objeto con la información sobre las dotaciones que el trabajador recibe. |
| **`accruals.dota.amount`** `string`
Valor pagado al trabajador por dotación. |
| **`accruals.dota.accrual_type_code`** `string` `opcional`
Código del tipo de dotación. Por defecto es `1`. |
| **`accruals.apoy`** `object` `opcional`
Objeto con la información del apoyo de sostenimiento no salarial que un patrocinador paga a un practicante durante su etapa lectiva y práctica. |
| **`accruals.apoy.amount`** `string`
Valor pagado por apoyo y sostenimiento. |
| **`accruals.apoy.accrual_type_code`** `string` `opcional`
Código del tipo de apoyo. Por defecto es `1`. |
| **`accruals.tele`** `object` `opcional`
Objeto con la información sobre el teletrabajo. |
| **`accruals.tele.amount`** `string`
Valor pagado al trabajador cuyo contrato indica que puede laborar mediante teletrabajo. |
| **`accruals.tele.accrual_type_code`** `string` `opcional`
Código del tipo de teletrabajo. Por defecto es `1`. |
| **`accruals.reti`** `object` `opcional`
Objeto con la información sobre el retiro del trabajador. |
| **`accruals.reti.amount`** `string`
Valor establecido por mutuo acuerdo por el retiro del trabajador. |
| **`accruals.reti.accrual_type_code`** `string` `opcional`
Código del tipo de retiro. Por defecto es `1`. |
| **`accruals.inde`** `object` `opcional`
Objeto con la información sobre la indemnización al trabajador. |
| **`accruals.inde.amount`** `string`
Valor pagado por la indemnización al trabajador. |
| **`accruals.inde.accrual_type_code`** `string` `opcional`
Código del tipo de indemnización. Por defecto es `1`. |
| **`accruals.rein`** `object` `opcional`
Objeto con la información sobre un reintegro al trabajador por una deducción mal realizada. |
| **`accruals.rein.amount`** `string`
Valor pagado al trabajador correspondiente a reintegro. |
| **`accruals.rein.accrual_type_code`** `string` `opcional`
Código del tipo de reintegro. Por defecto es `1`. |
| **`accruals.anti`** `array` `opcional`
Array con la información sobre los anticipos realizados al trabajador. |
| **`accruals.anti.*.amount`** `string`
Valor pagado al trabajador por el anticipo. |
| **`accruals.anti.*.accrual_type_code`** `string` `opcional`
Código del tipo de anticipo. Por defecto es `1`. |
| **`accruals.hora`** `array` `opcional`
Array con la información sobre recargos y horas extras realizadas por el trabajador. |
| **`accruals.hora.*.quantity`** `integer`
Cantidad de horas realizadas por el trabajador. |
| **`accruals.hora.*.percentage`** `string`
Porcentaje al cual corresponde el cálculo de la hora extra o recargo. |
| **`accruals.hora.*.amount`** `string`
Valor pagado por el tiempo de trabajo adicional. |
| **`accruals.hora.*.start_date`** `dateTime` `opcional`
Fecha y hora de inicio en formato `YYYY-MM-DDTHH:MM:SS`. |
| **`accruals.hora.*.end_date`** `dateTime` `opcional`
Fecha y hora de fin en formato `YYYY-MM-DDTHH:MM:SS`. |
| **`accruals.hora.*.accrual_type_code`** `string`
Código del tipo de hora extra o recargo. [Códigos de tipos de horas extra o recargos.](https://developers.factus.com.co/tablas-de-referencia/tablas-referencia-nomina/#c%C3%B3digos-de-tipos-de-horas-extra-o-recargos) |
| **`deductions`** `object`
Objeto con la información sobre las deducciones realizadas al trabajador. |
| **`deductions.salu`** `object`
Objeto con las deducciones de aportes a salud del trabajador. |
| **`deductions.salu.deduction_type_code`** `string` `opcional`
Código del tipo de deducción de salud. Por defecto es `1`. |
| **`deductions.salu.percentage`** `string`
Porcentaje de deducción de salud que paga el trabajador. |
| **`deductions.salu.amount`** `string`
Valor pagado correspondiente a salud por parte del trabajador. |
| **`deductions.pens`** `object`
Objeto con las deducciones del fondo de pensión del trabajador. |
| **`deductions.pens.percentage`** `string`
Porcentaje de la deducción del fondo de pensión que paga el trabajador. |
| **`deductions.pens.amount`** `string`
Valor de la deducción por pensión por parte del trabajador. |
| **`deductions.pens.deduction_type_code`** `string` `opcional`
Código del tipo de deducción de pensión. Por defecto es `1`. |
| **`deductions.dedu`** `object` `opcional`
Objeto con la información sobre el fondo de seguridad pensional. Requerido si el trabajador devenga un sueldo igual o superior a 4 salarios mínimos. |
| **`deductions.dedu.percentage`** `string`
Porcentaje de deducción del fondo de seguridad pensional. |
| **`deductions.dedu.amount`** `string`
Valor de la deducción del fondo de seguridad pensional. |
| **`deductions.dedu.deduction_type_code`** `string`
Código del tipo de fondo de seguridad pensional. [Códigos de tipos de fondos de seguridad pensional.](https://developers.factus.com.co/tablas-de-referencia/tablas-referencia-nomina/#c%C3%B3digos-de-tipos-de-fondos-de-seguridad-pensional) |
| **`deductions.sind`** `array` `opcional`
Array con la información sobre los sindicatos del trabajador. |
| **`deductions.sind.*.percentage`** `string`
Porcentaje establecido por ley o estatuto del sindicato. |
| **`deductions.sind.*.amount`** `string`
Valor de la deducción por sindicato por parte del trabajador. |
| **`deductions.sind.*.deduction_type_code`** `string` `opcional`
Código del tipo de deducción por sindicato. Por defecto es `1`. |
| **`deductions.sanc`** `array` `opcional`
Array con la información sobre sanciones impuestas al trabajador. |
| **`deductions.sanc.*.amount`** `string`
Valor de la sanción impuesta al trabajador. |
| **`deductions.sanc.*.deduction_type_code`** `string`
Código del tipo de sanción. [Códigos de tipos de sanciones.](https://developers.factus.com.co/tablas-de-referencia/tablas-referencia-nomina/#c%C3%B3digos-de-tipos-de-sanciones) |
| **`deductions.libr`** `array` `opcional`
Array con la información sobre libranzas (créditos otorgados mediante entidad financiera). |
| **`deductions.libr.*.amount`** `string`
Valor pagado por el trabajador hacia la entidad financiera. |
| **`deductions.libr.*.description`** `string`
Nombre de la libranza correspondiente a las cuotas que el empleado debe pagar. |
| **`deductions.libr.*.deduction_type_code`** `string` `opcional`
Código del tipo de libranza. Por defecto es `1`. |
| **`deductions.terc`** `array` `opcional`
Array con la información sobre pagos del trabajador a un tercero. |
| **`deductions.terc.amount`** `string`
Valor pagado por el trabajador a un tercero o proveedor. |
| **`deductions.terc.deduction_type_code`** `string` `opcional`
Código del tipo de pago a tercero. Por defecto es `1`. |
| **`deductions.anti`** `array` `opcional`
Array con la información sobre anticipos realizados al trabajador. |
| **`deductions.anti.*.amount`** `string`
Valor del anticipo a descontar. |
| **`deductions.anti.*.deduction_type_code`** `string` `opcional`
Código del tipo de anticipo. Por defecto es `1`. |
| **`deductions.otra`** `array` `opcional`
Array con la información sobre otras deducciones de la nómina. |
| **`deductions.otra.*.amount`** `string`
Valor de la otra deducción. |
| **`deductions.otra.*.deduction_type_code`** `string` `opcional`
Código del otro tipo de deducción. Por defecto es `1`. |
| **`deductions.pevo`** `object` `opcional`
Objeto con la información sobre la pensión voluntaria del trabajador. |
| **`deductions.pevo.amount`** `string`
Valor pagado por el trabajador para complementar su pensión obligatoria. |
| **`deductions.pevo.deduction_type_code`** `string` `opcional`
Código del tipo de pensión voluntaria. Por defecto es `1`. |
| **`deductions.rete`** `object` `opcional`
Objeto con la información sobre la retención en la fuente. |
| **`deductions.rete.amount`** `string`
Valor pagado por el trabajador correspondiente a la retención en la fuente. |
| **`deductions.rete.deduction_type_code`** `string` `opcional`
Código del tipo de retención en la fuente. Por defecto es `1`. |
| **`deductions.afco`** `object` `opcional`
Objeto con la información sobre el AFC (Ahorro para el Fomento a la Construcción). |
| **`deductions.afco.amount`** `string`
Valor pagado correspondiente al AFC. |
| **`deductions.afco.deduction_type_code`** `string` `opcional`
Código del tipo de AFC. Por defecto es `1`. |
| **`deductions.coop`** `object` `opcional`
Objeto con la información sobre cuotas o aportes del empleado a cooperativas legalmente constituidas. |
| **`deductions.coop.amount`** `string`
Valor pagado por el trabajador a las cooperativas. |
| **`deductions.coop.deduction_type_code`** `string` `opcional`
Código del tipo de pago a cooperativa. Por defecto es `1`. |
| **`deductions.emba`** `object` `opcional`
Objeto con la información sobre embargos fiscales. |
| **`deductions.emba.amount`** `string`
Valor que se descontará al trabajador de la nómina por embargo fiscal. |
| **`deductions.emba.deduction_type_code`** `string` `opcional`
Código del tipo de embargo fiscal. Por defecto es `1`. |
| **`deductions.plan`** `object` `opcional`
Objeto con la información sobre planes complementarios, siempre que medie autorización del empleado. |
| **`deductions.plan.amount`** `string`
Valor correspondiente a planes complementarios. |
| **`deductions.plan.deduction_type_code`** `string` `opcional`
Código del tipo de plan complementario. Por defecto es `1`. |
| **`deductions.educ`** `object` `opcional`
Objeto con la información sobre servicios educativos que el trabajador autorice descontar. |
| **`deductions.educ.amount`** `string`
Valor que se descontará al trabajador por servicios educativos. |
| **`deductions.educ.deduction_type_code`** `string` `opcional`
Código del tipo de servicio educativo. Por defecto es `1`. |
| **`deductions.rein`** `object` `opcional`
Objeto con la información sobre un reintegro por un devengo mal realizado en otro pago de nómina. |
| **`deductions.rein.amount`** `string`
Valor que el trabajador regresa a la empresa por un devengo mal realizado. |
| **`deductions.rein.deduction_type_code`** `string` `opcional`
Código del tipo de reintegro. Por defecto es `1`. |
| **`deductions.deud`** `object` `opcional`
Objeto con la información sobre una deuda del trabajador con la empresa (crédito o compensación). |
| **`deductions.deud.amount`** `string`
Valor pagado correspondiente a la deuda. |
| **`deductions.deud.deduction_type_code`** `string` `opcional`
Código del tipo de deuda. Por defecto es `1`. |

* * *

#### Ejemplo de Solicitud

[Sección titulada «Ejemplo de Solicitud»](https://developers.factus.com.co/nomina/crear-y-validar#ejemplo-de-solicitud)

**Nómina mensual**

```
{ "reference_code": "NO-2026-01234", "observation": "Nómina ordinaria mensual", "numbering_range_id": "01kpdv25zepw0vzn39th90h1a7", "settlement_period": { "month": "5", "year": "2026", "payroll_period_code": "5" }, "payment": { "payment_method_code": "42", "bank_name": "Bancolombia", "account_type": "1", "account_number": "123456789", "payment_date": "2026-06-05" }, "worker": { "identification_document_code": "13", "identification_number": "1234567890", "first_name": "Mateo", "first_surname": "Gonzales", "second_surname": "Forero", "address": "Cra100 39-100", "country_code": "CO", "municipality_code": "68679", "has_integral_salary": false, "has_high_risk": false, "worker_subtype": "00", "contract_type": "1", "employee_code": "001", "worker_type_code": "01", "salary": "2800000.00", "entry_date": "2023-03-15", "days_worked": "30.00" }, "accruals": { "suel": { "amount": "2800000.00" }, "tra": [ { "amount": "249095.00", "accrual_type_code": 1 } ], "comi": [ { "amount": "300000.00" } ], "hora": [ { "quantity": "5", "percentage": "25.00", "amount": "79545.45", "start_date": "2026-05-06 18:00:00", "end_date": "2026-05-06 23:00:00", "accrual_type_code": "1" }, { "quantity": "2", "percentage": "75.00", "amount": "44545.45", "start_date": "2026-05-11 22:00:00", "end_date": "2026-05-12 00:00:00", "accrual_type_code": "2" }, { "quantity": "3", "percentage": "35.00", "amount": "51545.45", "start_date": "2026-05-19 20:00:00", "end_date": "2026-05-19 23:00:00", "accrual_type_code": "3" } ] }, "deductions": { "salu": { "amount": "131025.45", "percentage": "4" }, "pens": { "amount": "131025.45", "percentage": "4" } }}
```

* * *

* * *

#### Respuesta

[Sección titulada «Respuesta»](https://developers.factus.com.co/nomina/crear-y-validar#respuesta)

Descripción de los campos en la respuesta data Campos generales

<table class="astro-ibjkzya5"><tbody class="astro-ibjkzya5"><tr><td><strong><code>data.reference_code</code> </strong><code>string</code><br>Código de referencia único asignado a la nómina.</td></tr><tr><td><strong><code>data.number</code> </strong><code>string</code><br>Número consecutivo de la nómina asignado por el sistema según el rango de numeración activo. Ejemplo: <code>NEF1</code>.</td></tr><tr><td><strong><code>data.observation</code> </strong><code>string | null</code><br>Observación de la nómina.</td></tr></tbody></table>

data.settlement\_period

<table class="astro-ibjkzya5"><tbody class="astro-ibjkzya5"><tr><td><strong><code>data.settlement_period</code> </strong><code>object</code><br>Objeto con la información del periodo en el que se hizo la nómina.</td></tr><tr><td><strong><code>data.settlement_period.pay_period_half</code> </strong><code>string | null</code><br>Código que indica si la liquidación se hizo durante la primera quincena o la segunda.</td></tr><tr><td><strong><code>data.settlement_period.settlement_start_date</code> </strong><code>string</code><br>Fecha en la que se inició el proceso de liquidación. Formato: <code>YYYY-MM-DD</code>.</td></tr><tr><td><strong><code>data.settlement_period.settlement_end_date</code> </strong><code>string</code><br>Fecha en la que se terminó el proceso de liquidación. Formato: <code>YYYY-MM-DD</code>.</td></tr><tr><td><strong><code>data.settlement_period.payroll_period</code> </strong><code>object</code><br>Objeto con el tipo de periodo utilizado en la nómina.</td></tr><tr><td><strong><code>data.settlement_period.payroll_period.code</code> </strong><code>string</code><br>Código del tipo de periodo.</td></tr><tr><td><strong><code>data.settlement_period.payroll_period.name</code> </strong><code>string</code><br>Nombre descriptivo del tipo de periodo.</td></tr></tbody></table>

data.payment

<table class="astro-ibjkzya5"><tbody class="astro-ibjkzya5"><tr><td><strong><code>data.payment</code> </strong><code>object</code><br>Objeto que contiene la información sobre el pago de nómina.</td></tr><tr><td><strong><code>data.payment.payment_method</code> </strong><code>object</code><br>Objeto que contiene la información sobre el método de pago.</td></tr><tr><td><strong><code>data.payment.payment_method.code</code> </strong><code>string</code><br>Código del tipo de método de pago.</td></tr><tr><td><strong><code>data.payment.payment_method.name</code> </strong><code>string</code><br>Nombre descriptivo del método de pago.</td></tr><tr><td><strong><code>data.payment.bank_name</code> </strong><code>string | null</code><br>Nombre del banco.</td></tr><tr><td><strong><code>data.payment.account_type</code> </strong><code>object</code><br>Objeto que contiene la información sobre el tipo de cuenta.</td></tr><tr><td><strong><code>data.payment.account_type.code</code> </strong><code>string</code><br>Código del tipo de cuenta.</td></tr><tr><td><strong><code>data.payment.account_type.name</code> </strong><code>string</code><br>Nombre descriptivo del tipo de cuenta.</td></tr><tr><td><strong><code>data.payment.account_number</code> </strong><code>string | null</code><br>Número de la cuenta.</td></tr><tr><td><strong><code>data.payment.payment_date</code> </strong><code>string</code><br>Fecha en la que se hizo el pago de nómina. Formato: <code>YYYY-MM-DD</code>.</td></tr></tbody></table>

data.numbering\_range

<table class="astro-ibjkzya5"><tbody class="astro-ibjkzya5"><tr><td><strong><code>data.numbering_range</code> </strong><code>object</code><br>Objeto que contiene la información sobre el rango de numeración de la nómina.</td></tr><tr><td><strong><code>data.numbering_range.prefix</code> </strong><code>string</code><br>Prefijo del rango de numeración.</td></tr><tr><td><strong><code>data.numbering_range.current</code> </strong><code>string</code><br>Consecutivo de la nómina.</td></tr></tbody></table>

data.worker

<table class="astro-ibjkzya5"><tbody class="astro-ibjkzya5"><tr><td><strong><code>data.worker</code> </strong><code>object</code><br>Objeto que contiene la información sobre el trabajador.</td></tr><tr><td><strong><code>data.worker.identification_document</code> </strong><code>object</code><br>Objeto que contiene la información sobre el documento de identidad.</td></tr><tr><td><strong><code>data.worker.identification_document.code</code> </strong><code>string</code><br>Código del tipo de identificación.</td></tr><tr><td><strong><code>data.worker.identification_document.name</code> </strong><code>string</code><br>Nombre descriptivo del tipo de identificación.</td></tr><tr><td><strong><code>data.worker.identification_number</code> </strong><code>string</code><br>Número de identificación del trabajador.</td></tr><tr><td><strong><code>data.worker.name</code> </strong><code>string</code><br>Nombre completo del trabajador.</td></tr><tr><td><strong><code>data.worker.address</code> </strong><code>string</code><br>Dirección de residencia del trabajador donde estuvo presente en el periodo de nómina.</td></tr><tr><td><strong><code>data.worker.country</code> </strong><code>object</code><br>Objeto que contiene la información sobre el país donde estuvo presente el trabajador en el periodo de nómina.</td></tr><tr><td><strong><code>data.worker.country.code</code> </strong><code>string</code><br>Código del país.</td></tr><tr><td><strong><code>data.worker.country.name</code> </strong><code>string</code><br>Nombre del país.</td></tr><tr><td><strong><code>data.worker.municipality</code> </strong><code>object | null</code><br>Objeto que contiene la información sobre el municipio donde el trabajador se encontraba en el periodo de nómina.</td></tr><tr><td><strong><code>data.worker.municipality.code</code> </strong><code>string</code><br>Código del municipio.</td></tr><tr><td><strong><code>data.worker.municipality.name</code> </strong><code>string</code><br>Nombre del municipio.</td></tr><tr><td><strong><code>data.worker.has_integral_salary</code> </strong><code>boolean</code><br>Indica si el trabajador tiene un salario integral.</td></tr><tr><td><strong><code>data.worker.has_high_risk</code> </strong><code>boolean</code><br>Indica si el trabajador está en un trabajo considerado de alto riesgo.</td></tr><tr><td><strong><code>data.worker.worker_subtype</code> </strong><code>object</code><br>Objeto que contiene información sobre el subtipo de trabajador.</td></tr><tr><td><strong><code>data.worker.worker_subtype.code</code> </strong><code>string</code><br>Código del subtipo de trabajador.</td></tr><tr><td><strong><code>data.worker.worker_subtype.name</code> </strong><code>string</code><br>Nombre descriptivo del subtipo de trabajador.</td></tr><tr><td><strong><code>data.worker.contract_type</code> </strong><code>object</code><br>Objeto que contiene la información sobre el tipo de contrato del trabajador.</td></tr><tr><td><strong><code>data.worker.contract_type.code</code> </strong><code>string</code><br>Código del tipo de contrato.</td></tr><tr><td><strong><code>data.worker.contract_type.name</code> </strong><code>string</code><br>Nombre descriptivo del tipo de contrato.</td></tr><tr><td><strong><code>data.worker.worker_type</code> </strong><code>object</code><br>Objeto que contiene la información sobre el tipo de trabajador.</td></tr><tr><td><strong><code>data.worker.worker_type.code</code> </strong><code>string</code><br>Código del tipo de trabajador.</td></tr><tr><td><strong><code>data.worker.worker_type.name</code> </strong><code>string</code><br>Nombre descriptivo del tipo de trabajador.</td></tr><tr><td><strong><code>data.worker.employee_code</code> </strong><code>string | null</code><br>Código de empleado en caso de que se haya especificado.</td></tr><tr><td><strong><code>data.worker.entry_date</code> </strong><code>string</code><br>Fecha en la que el trabajador ingresó a la nómina. Formato: <code>YYYY-MM-DD</code>.</td></tr><tr><td><strong><code>data.worker.retirement_date</code> </strong><code>string | null</code><br>Fecha en la que el trabajador presentó retiro de la nómina. Formato: <code>YYYY-MM-DD</code>.</td></tr><tr><td><strong><code>data.worker.days_worked</code> </strong><code>string</code><br>Cantidad de días laborados durante el periodo de pago.</td></tr><tr><td><strong><code>data.worker.worked_time</code> </strong><code>string</code><br>Cantidad de tiempo que lleva laborando el trabajador en la empresa.</td></tr><tr><td><strong><code>data.worker.salary</code> </strong><code>string</code><br>Cantidad de sueldo base que se le paga al trabajador.</td></tr></tbody></table>

data.company

<table class="astro-ibjkzya5"><tbody class="astro-ibjkzya5"><tr><td><strong><code>data.company</code> </strong><code>object</code><br>Objeto que contiene la información sobre la empresa.</td></tr><tr><td><strong><code>data.company.url_logo</code> </strong><code>string</code><br>URL de la imagen del logotipo de la empresa.</td></tr><tr><td><strong><code>data.company.nit</code> </strong><code>string</code><br>NIT de la empresa emisora (sin dígito de verificación).</td></tr><tr><td><strong><code>data.company.dv</code> </strong><code>string</code><br>Dígito de verificación del NIT de la empresa.</td></tr><tr><td><strong><code>data.company.economic_activity</code> </strong><code>string</code><br>Código CIIU de la actividad económica principal de la empresa.</td></tr><tr><td><strong><code>data.company.name</code> </strong><code>string</code><br>Nombre o la razón social de la empresa.</td></tr><tr><td><strong><code>data.company.address</code> </strong><code>string</code><br>Dirección física de la empresa.</td></tr><tr><td><strong><code>data.company.phone_number</code> </strong><code>string</code><br>Número de teléfono del establecimiento.</td></tr><tr><td><strong><code>data.company.email</code> </strong><code>string</code><br>Correo electrónico del establecimiento.</td></tr><tr><td><strong><code>data.company.municipality</code> </strong><code>object</code><br>Objeto que contiene la información donde está ubicada la empresa.</td></tr><tr><td><strong><code>data.company.municipality.code</code> </strong><code>string</code><br>Código del municipio.</td></tr><tr><td><strong><code>data.company.municipality.name</code> </strong><code>string</code><br>Nombre del municipio.</td></tr><tr><td><strong><code>data.company.municipality.department</code> </strong><code>object</code><br>Objeto con el departamento al que pertenece el municipio.</td></tr><tr><td><strong><code>data.company.municipality.department.code</code> </strong><code>string</code><br>Código del departamento.</td></tr><tr><td><strong><code>data.company.municipality.department.name</code> </strong><code>string</code><br>Nombre del departamento.</td></tr></tbody></table>

data.accruals

<table class="astro-ibjkzya5"><tbody class="astro-ibjkzya5"><tr><td><strong><code>data.accruals</code> </strong><code>object</code><br>Objeto que contiene la información sobre los devengos de la nómina.</td></tr><tr><td><strong><code>data.accruals.suel</code> </strong><code>object</code><br>Objeto que contiene la información sobre el sueldo.</td></tr><tr><td><strong><code>data.accruals.suel.code</code> </strong><code>string</code><br>Código.</td></tr><tr><td><strong><code>data.accruals.suel.name</code> </strong><code>string</code><br>Nombre.</td></tr><tr><td><strong><code>data.accruals.suel.amount</code> </strong><code>string</code><br>Valor del devengo del sueldo.</td></tr><tr><td><strong><code>data.accruals.prim</code> </strong><code>object</code><br>Objeto que contiene la información sobre el pago de prima.</td></tr><tr><td><strong><code>data.accruals.prim.code</code> </strong><code>string</code><br>Código.</td></tr><tr><td><strong><code>data.accruals.prim.name</code> </strong><code>string</code><br>Nombre.</td></tr><tr><td><strong><code>data.accruals.prim.quantity</code> </strong><code>string</code><br>Días trabajados correspondientes al pago de prima.</td></tr><tr><td><strong><code>data.accruals.prim.amount</code> </strong><code>string</code><br>Valor del devengo de prima.</td></tr><tr><td><strong><code>data.accruals.dota</code> </strong><code>object</code><br>Objeto que contiene la información sobre las dotaciones.</td></tr><tr><td><strong><code>data.accruals.dota.code</code> </strong><code>string</code><br>Código.</td></tr><tr><td><strong><code>data.accruals.dota.name</code> </strong><code>string</code><br>Nombre.</td></tr><tr><td><strong><code>data.accruals.dota.amount</code> </strong><code>string</code><br>Valor del devengado de dotación.</td></tr><tr><td><strong><code>data.accruals.tele</code> </strong><code>object</code><br>Objeto que contiene información sobre el teletrabajo.</td></tr><tr><td><strong><code>data.accruals.tele.code</code> </strong><code>string</code><br>Código.</td></tr><tr><td><strong><code>data.accruals.tele.name</code> </strong><code>string</code><br>Nombre.</td></tr><tr><td><strong><code>data.accruals.tele.amount</code> </strong><code>string</code><br>Valor del devengado del teletrabajo.</td></tr><tr><td><strong><code>data.accruals.reti</code> </strong><code>object</code><br>Objeto que contiene información sobre el retiro.</td></tr><tr><td><strong><code>data.accruals.reti.code</code> </strong><code>string</code><br>Código.</td></tr><tr><td><strong><code>data.accruals.reti.name</code> </strong><code>string</code><br>Nombre.</td></tr><tr><td><strong><code>data.accruals.reti.amount</code> </strong><code>string</code><br>Valor del devengado de retiro.</td></tr><tr><td><strong><code>data.accruals.inde</code> </strong><code>object</code><br>Objeto que contiene información sobre las indemnizaciones.</td></tr><tr><td><strong><code>data.accruals.inde.code</code> </strong><code>string</code><br>Código.</td></tr><tr><td><strong><code>data.accruals.inde.name</code> </strong><code>string</code><br>Nombre.</td></tr><tr><td><strong><code>data.accruals.inde.amount</code> </strong><code>string</code><br>Valor del devengado de indemnización.</td></tr><tr><td><strong><code>data.accruals.rein</code> </strong><code>object</code><br>Objeto que contiene información sobre el reintegro.</td></tr><tr><td><strong><code>data.accruals.rein.code</code> </strong><code>string</code><br>Código.</td></tr><tr><td><strong><code>data.accruals.rein.name</code> </strong><code>string</code><br>Nombre.</td></tr><tr><td><strong><code>data.accruals.rein.amount</code> </strong><code>string</code><br>Valor del devengado de reintegro.</td></tr><tr><td><strong><code>data.accruals.apoy</code> </strong><code>object</code><br>Objeto que contiene información sobre el apoyo a sostenimiento.</td></tr><tr><td><strong><code>data.accruals.apoy.code</code> </strong><code>string</code><br>Código.</td></tr><tr><td><strong><code>data.accruals.apoy.name</code> </strong><code>string</code><br>Nombre.</td></tr><tr><td><strong><code>data.accruals.apoy.amount</code> </strong><code>string</code><br>Valor del devengado de apoyo a sostenimiento.</td></tr><tr><td><strong><code>data.accruals.cesa</code> </strong><code>array</code><br>Array que contiene información sobre las cesantías.</td></tr><tr><td><strong><code>data.accruals.cesa.*.code</code> </strong><code>string</code><br>Código.</td></tr><tr><td><strong><code>data.accruals.cesa.*.name</code> </strong><code>string</code><br>Nombre.</td></tr><tr><td><strong><code>data.accruals.cesa.*.percentage</code> </strong><code>string | null</code><br>Porcentaje de los intereses de las cesantías.</td></tr><tr><td><strong><code>data.accruals.cesa.*.amount</code> </strong><code>string</code><br>Valor del devengado de cesantías.</td></tr><tr><td><strong><code>data.accruals.boni</code> </strong><code>array</code><br>Array que contiene información sobre las bonificaciones.</td></tr><tr><td><strong><code>data.accruals.boni.*.code</code> </strong><code>string</code><br>Código.</td></tr><tr><td><strong><code>data.accruals.boni.*.name</code> </strong><code>string</code><br>Nombre.</td></tr><tr><td><strong><code>data.accruals.boni.*.amount</code> </strong><code>string</code><br>Valor del devengado de bonificaciones.</td></tr><tr><td><strong><code>data.accruals.bono</code> </strong><code>array</code><br>Array que contiene información sobre los bonos.</td></tr><tr><td><strong><code>data.accruals.bono.*.code</code> </strong><code>string</code><br>Código.</td></tr><tr><td><strong><code>data.accruals.bono.*.name</code> </strong><code>string</code><br>Nombre.</td></tr><tr><td><strong><code>data.accruals.bono.*.amount</code> </strong><code>string</code><br>Valor del devengado de bono.</td></tr><tr><td><strong><code>data.accruals.tra</code> </strong><code>array</code><br>Array que contiene información sobre el devengado de transporte.</td></tr><tr><td><strong><code>data.accruals.tra.*.code</code> </strong><code>string</code><br>Código.</td></tr><tr><td><strong><code>data.accruals.tra.*.name</code> </strong><code>string</code><br>Nombre.</td></tr><tr><td><strong><code>data.accruals.tra.*.amount</code> </strong><code>string</code><br>Valor del devengado de transporte.</td></tr><tr><td><strong><code>data.accruals.comp</code> </strong><code>array</code><br>Array que contiene información sobre el devengado de Compensaciones.</td></tr><tr><td><strong><code>data.accruals.comp.*.code</code> </strong><code>string</code><br>Código.</td></tr><tr><td><strong><code>data.accruals.comp.*.name</code> </strong><code>string</code><br>Nombre.</td></tr><tr><td><strong><code>data.accruals.comp.*.amount</code> </strong><code>string</code><br>Valor del tipo de compensación.</td></tr><tr><td><strong><code>data.accruals.otro</code> </strong><code>array</code><br>Array que contiene información sobre otros conceptos.</td></tr><tr><td><strong><code>data.accruals.otro.*.code</code> </strong><code>string</code><br>Código.</td></tr><tr><td><strong><code>data.accruals.otro.*.name</code> </strong><code>string</code><br>Nombre.</td></tr><tr><td><strong><code>data.accruals.otro.*.amount</code> </strong><code>string</code><br>Valor del tipo de concepto.</td></tr><tr><td><strong><code>data.accruals.otro.*.description</code> </strong><code>string</code><br>Descripción del concepto.</td></tr><tr><td><strong><code>data.accruals.lice</code> </strong><code>array</code><br>Array que contiene información sobre las licencias.</td></tr><tr><td><strong><code>data.accruals.lice.*.code</code> </strong><code>string</code><br>Código.</td></tr><tr><td><strong><code>data.accruals.lice.*.name</code> </strong><code>string</code><br>Nombre.</td></tr><tr><td><strong><code>data.accruals.lice.*.quantity</code> </strong><code>string</code><br>Cantidad de días que duró la licencia.</td></tr><tr><td><strong><code>data.accruals.lice.*.amount</code> </strong><code>string</code><br>Valor de la licencia.</td></tr><tr><td><strong><code>data.accruals.lice.*.start_date</code> </strong><code>string | null</code><br>Fecha en la que se inició la licencia. Formato: <code>YYYY-MM-DD</code>.</td></tr><tr><td><strong><code>data.accruals.lice.*.end_date</code> </strong><code>string | null</code><br>Fecha en la que se terminó la licencia. Formato: <code>YYYY-MM-DD</code>.</td></tr><tr><td><strong><code>data.accruals.vaca</code> </strong><code>array</code><br>Array que contiene información sobre las vacaciones.</td></tr><tr><td><strong><code>data.accruals.vaca.*.code</code> </strong><code>string</code><br>Código.</td></tr><tr><td><strong><code>data.accruals.vaca.*.name</code> </strong><code>string</code><br>Nombre.</td></tr><tr><td><strong><code>data.accruals.vaca.*.quantity</code> </strong><code>string</code><br>Cantidad de días que duraron las vacaciones.</td></tr><tr><td><strong><code>data.accruals.vaca.*.amount</code> </strong><code>string</code><br>Valor de las vacaciones.</td></tr><tr><td><strong><code>data.accruals.vaca.*.start_date</code> </strong><code>string | null</code><br>Fecha en la que se inició las vacaciones. Formato: <code>YYYY-MM-DD</code>.</td></tr><tr><td><strong><code>data.accruals.vaca.*.end_date</code> </strong><code>string | null</code><br>Fecha en la que se terminó las vacaciones. Formato: <code>YYYY-MM-DD</code>.</td></tr><tr><td><strong><code>data.accruals.inca</code> </strong><code>array</code><br>Array que contiene información sobre las incapacidades.</td></tr><tr><td><strong><code>data.accruals.inca.*.code</code> </strong><code>string</code><br>Código.</td></tr><tr><td><strong><code>data.accruals.inca.*.name</code> </strong><code>string</code><br>Nombre.</td></tr><tr><td><strong><code>data.accruals.inca.*.quantity</code> </strong><code>string</code><br>Cantidad de días que duró la incapacidad.</td></tr><tr><td><strong><code>data.accruals.inca.*.amount</code> </strong><code>string</code><br>Valor de la incapacidad.</td></tr><tr><td><strong><code>data.accruals.inca.*.start_date</code> </strong><code>string | null</code><br>Fecha en la que se inició la incapacidad. Formato: <code>YYYY-MM-DD</code>.</td></tr><tr><td><strong><code>data.accruals.inca.*.end_date</code> </strong><code>string | null</code><br>Fecha en la que terminó la incapacidad. Formato: <code>YYYY-MM-DD</code>.</td></tr><tr><td><strong><code>data.accruals.auxi</code> </strong><code>array</code><br>Array que contiene información sobre los auxilios.</td></tr><tr><td><strong><code>data.accruals.auxi.*.code</code> </strong><code>string</code><br>Código.</td></tr><tr><td><strong><code>data.accruals.auxi.*.name</code> </strong><code>string</code><br>Nombre.</td></tr><tr><td><strong><code>data.accruals.auxi.*.amount</code> </strong><code>string</code><br>Valor del auxilio.</td></tr><tr><td><strong><code>data.accruals.huel</code> </strong><code>array</code><br>Array que contiene información sobre las huelgas.</td></tr><tr><td><strong><code>data.accruals.huel.*.code</code> </strong><code>string</code><br>Código.</td></tr><tr><td><strong><code>data.accruals.huel.*.name</code> </strong><code>string</code><br>Nombre.</td></tr><tr><td><strong><code>data.accruals.huel.*.quantity</code> </strong><code>string</code><br>Cantidad de días que duró la huelga.</td></tr><tr><td><strong><code>data.accruals.huel.*.amount</code> </strong><code>string</code><br>Valor de la huelga.</td></tr><tr><td><strong><code>data.accruals.huel.*.start_date</code> </strong><code>string | null</code><br>Fecha en la que se inició la huelga. Formato: <code>YYYY-MM-DD</code>.</td></tr><tr><td><strong><code>data.accruals.huel.*.end_date</code> </strong><code>string | null</code><br>Fecha en la que terminó la huelga. Formato: <code>YYYY-MM-DD</code>.</td></tr><tr><td><strong><code>data.accruals.comi</code> </strong><code>array</code><br>Array que contiene información sobre las comisiones.</td></tr><tr><td><strong><code>data.accruals.comi.*.code</code> </strong><code>string</code><br>Código.</td></tr><tr><td><strong><code>data.accruals.comi.*.name</code> </strong><code>string</code><br>Nombre.</td></tr><tr><td><strong><code>data.accruals.comi.*.amount</code> </strong><code>string</code><br>Valor de la comisión.</td></tr><tr><td><strong><code>data.accruals.terc</code> </strong><code>array</code><br>Array que contiene información sobre el pago a terceros.</td></tr><tr><td><strong><code>data.accruals.terc.*.code</code> </strong><code>string</code><br>Código.</td></tr><tr><td><strong><code>data.accruals.terc.*.name</code> </strong><code>string</code><br>Nombre.</td></tr><tr><td><strong><code>data.accruals.terc.*.amount</code> </strong><code>string</code><br>Valor sobre el pago a terceros.</td></tr><tr><td><strong><code>data.accruals.anti</code> </strong><code>array</code><br>Array que contiene información sobre los anticipos.</td></tr><tr><td><strong><code>data.accruals.anti.*.code</code> </strong><code>string</code><br>Código.</td></tr><tr><td><strong><code>data.accruals.anti.*.name</code> </strong><code>string</code><br>Nombre.</td></tr><tr><td><strong><code>data.accruals.anti.*.amount</code> </strong><code>string</code><br>Valor sobre el anticipo.</td></tr><tr><td><strong><code>data.accruals.hora</code> </strong><code>array</code><br>Array que contiene información sobre las horas extras o recargos.</td></tr><tr><td><strong><code>data.accruals.hora.*.code</code> </strong><code>string</code><br>Código.</td></tr><tr><td><strong><code>data.accruals.hora.*.name</code> </strong><code>string</code><br>Nombre.</td></tr><tr><td><strong><code>data.accruals.hora.*.quantity</code> </strong><code>string</code><br>Cantidad de horas que se realizaron.</td></tr><tr><td><strong><code>data.accruals.hora.*.percentage</code> </strong><code>string</code><br>Porcentaje al cual corresponde el cálculo de la hora o recargo extra.</td></tr><tr><td><strong><code>data.accruals.hora.*.amount</code> </strong><code>string</code><br>Valor de las horas extras o recargo.</td></tr><tr><td><strong><code>data.accruals.hora.*.start_date</code> </strong><code>string | null</code><br>Fecha inicio de la hora o recargo. Formato: <code>DD-MM-YYYY HH:mm:ss AM-PM</code>.</td></tr><tr><td><strong><code>data.accruals.hora.*.end_date</code> </strong><code>string | null</code><br>Fecha fin de la hora o recargo. Formato: <code>DD-MM-YYYY HH:mm:ss AM-PM</code>.</td></tr></tbody></table>

data.deductions

<table class="astro-ibjkzya5"><tbody class="astro-ibjkzya5"><tr><td><strong><code>data.deductions</code> </strong><code>object</code><br>Objeto que contiene información sobre las deducciones de la nómina.</td></tr><tr><td><strong><code>data.deductions.salu</code> </strong><code>object</code><br>Objeto que contiene información sobre el aporte a salud.</td></tr><tr><td><strong><code>data.deductions.salu.code</code> </strong><code>string</code><br>Código.</td></tr><tr><td><strong><code>data.deductions.salu.name</code> </strong><code>string</code><br>Nombre.</td></tr><tr><td><strong><code>data.deductions.salu.amount</code> </strong><code>string</code><br>Valor del aporte a salud.</td></tr><tr><td><strong><code>data.deductions.salu.percentage</code> </strong><code>string</code><br>Porcentaje correspondiente al aporte a salud que paga el trabajador.</td></tr><tr><td><strong><code>data.deductions.pens</code> </strong><code>object</code><br>Objeto que contiene información sobre el aporte a pensión.</td></tr><tr><td><strong><code>data.deductions.pens.code</code> </strong><code>string</code><br>Código.</td></tr><tr><td><strong><code>data.deductions.pens.name</code> </strong><code>string</code><br>Nombre.</td></tr><tr><td><strong><code>data.deductions.pens.amount</code> </strong><code>string</code><br>Valor del aporte de pensión.</td></tr><tr><td><strong><code>data.deductions.pens.percentage</code> </strong><code>string</code><br>Porcentaje correspondiente a la pensión que paga el trabajador.</td></tr><tr><td><strong><code>data.deductions.dedu</code> </strong><code>object</code><br>Objeto que contiene información sobre las deducciones del fondoSP (seguridad pensional).</td></tr><tr><td><strong><code>data.deductions.dedu.code</code> </strong><code>string</code><br>Código.</td></tr><tr><td><strong><code>data.deductions.dedu.name</code> </strong><code>string</code><br>Nombre.</td></tr><tr><td><strong><code>data.deductions.dedu.amount</code> </strong><code>string</code><br>Valor del aporte del fondoSP.</td></tr><tr><td><strong><code>data.deductions.dedu.percentage</code> </strong><code>string</code><br>Porcentaje de la deducción del fondoSP.</td></tr><tr><td><strong><code>data.deductions.pevo</code> </strong><code>object</code><br>Objeto que contiene información sobre las pensiones voluntarias.</td></tr><tr><td><strong><code>data.deductions.pevo.code</code> </strong><code>string</code><br>Código.</td></tr><tr><td><strong><code>data.deductions.pevo.name</code> </strong><code>string</code><br>Nombre.</td></tr><tr><td><strong><code>data.deductions.pevo.amount</code> </strong><code>string</code><br>Valor del aporte de pensión voluntaria.</td></tr><tr><td><strong><code>data.deductions.rete</code> </strong><code>object</code><br>Objeto que contiene información de la retención.</td></tr><tr><td><strong><code>data.deductions.rete.code</code> </strong><code>string</code><br>Código.</td></tr><tr><td><strong><code>data.deductions.rete.name</code> </strong><code>string</code><br>Nombre.</td></tr><tr><td><strong><code>data.deductions.rete.amount</code> </strong><code>string</code><br>Valor del aporte a la retención.</td></tr><tr><td><strong><code>data.deductions.afco</code> </strong><code>object</code><br>Objeto que contiene información sobre el ahorro fomento a la construcción.</td></tr><tr><td><strong><code>data.deductions.afco.code</code> </strong><code>string</code><br>Código.</td></tr><tr><td><strong><code>data.deductions.afco.name</code> </strong><code>string</code><br>Nombre.</td></tr><tr><td><strong><code>data.deductions.afco.amount</code> </strong><code>string</code><br>Valor del aporte al fomento a la construcción.</td></tr><tr><td><strong><code>data.deductions.coop</code> </strong><code>object</code><br>Objeto que contiene información sobre el aporte a cooperativas.</td></tr><tr><td><strong><code>data.deductions.coop.code</code> </strong><code>string</code><br>Código.</td></tr><tr><td><strong><code>data.deductions.coop.name</code> </strong><code>string</code><br>Nombre.</td></tr><tr><td><strong><code>data.deductions.coop.amount</code> </strong><code>string</code><br>Valor del aporte a las cooperativas.</td></tr><tr><td><strong><code>data.deductions.emba</code> </strong><code>object</code><br>Objeto que contiene información sobre los embargos fiscales.</td></tr><tr><td><strong><code>data.deductions.emba.code</code> </strong><code>string</code><br>Código.</td></tr><tr><td><strong><code>data.deductions.emba.name</code> </strong><code>string</code><br>Nombre.</td></tr><tr><td><strong><code>data.deductions.emba.amount</code> </strong><code>string</code><br>Valor del aporte a los embargos fiscales.</td></tr><tr><td><strong><code>data.deductions.plan</code> </strong><code>object</code><br>Objeto que contiene información sobre los planes complementarios.</td></tr><tr><td><strong><code>data.deductions.plan.code</code> </strong><code>string</code><br>Código.</td></tr><tr><td><strong><code>data.deductions.plan.name</code> </strong><code>string</code><br>Nombre.</td></tr><tr><td><strong><code>data.deductions.plan.amount</code> </strong><code>string</code><br>Valor del aporte a los planes complementarios.</td></tr><tr><td><strong><code>data.deductions.educ</code> </strong><code>object</code><br>Objeto que contiene información sobre el servicio educativo.</td></tr><tr><td><strong><code>data.deductions.educ.code</code> </strong><code>string</code><br>Código.</td></tr><tr><td><strong><code>data.deductions.educ.name</code> </strong><code>string</code><br>Nombre.</td></tr><tr><td><strong><code>data.deductions.educ.amount</code> </strong><code>string</code><br>Valor del aporte a los servicios educativos.</td></tr><tr><td><strong><code>data.deductions.rein</code> </strong><code>object</code><br>Objeto que contiene información sobre el reintegro.</td></tr><tr><td><strong><code>data.deductions.rein.code</code> </strong><code>string</code><br>Código.</td></tr><tr><td><strong><code>data.deductions.rein.name</code> </strong><code>string</code><br>Nombre.</td></tr><tr><td><strong><code>data.deductions.rein.amount</code> </strong><code>string</code><br>Valor del aporte al reintegro.</td></tr><tr><td><strong><code>data.deductions.deud</code> </strong><code>object</code><br>Objeto que contiene información sobre las deudas.</td></tr><tr><td><strong><code>data.deductions.deud.code</code> </strong><code>string</code><br>Código.</td></tr><tr><td><strong><code>data.deductions.deud.name</code> </strong><code>string</code><br>Nombre.</td></tr><tr><td><strong><code>data.deductions.deud.amount</code> </strong><code>string</code><br>Valor del aporte a la deuda.</td></tr><tr><td><strong><code>data.deductions.sind</code> </strong><code>array</code><br>Array que contiene información sobre los sindicatos.</td></tr><tr><td><strong><code>data.deductions.sind.*.code</code> </strong><code>string</code><br>Código.</td></tr><tr><td><strong><code>data.deductions.sind.*.name</code> </strong><code>string</code><br>Nombre.</td></tr><tr><td><strong><code>data.deductions.sind.*.amount</code> </strong><code>string</code><br>Valor del aporte a los sindicatos.</td></tr><tr><td><strong><code>data.deductions.sanc</code> </strong><code>array</code><br>Array que contiene información sobre las sanciones.</td></tr><tr><td><strong><code>data.deductions.sanc.*.code</code> </strong><code>string</code><br>Código.</td></tr><tr><td><strong><code>data.deductions.sanc.*.name</code> </strong><code>string</code><br>Nombre.</td></tr><tr><td><strong><code>data.deductions.sanc.*.amount</code> </strong><code>string</code><br>Valor del aporte a las sanciones.</td></tr><tr><td><strong><code>data.deductions.libr</code> </strong><code>array</code><br>Array que contiene información sobre las libranzas.</td></tr><tr><td><strong><code>data.deductions.libr.*.code</code> </strong><code>string</code><br>Código.</td></tr><tr><td><strong><code>data.deductions.libr.*.name</code> </strong><code>string</code><br>Nombre.</td></tr><tr><td><strong><code>data.deductions.libr.*.amount</code> </strong><code>string</code><br>Valor del aporte a las libranzas.</td></tr><tr><td><strong><code>data.deductions.libr.*.description</code> </strong><code>string</code><br>Descripción.</td></tr><tr><td><strong><code>data.deductions.terc</code> </strong><code>array</code><br>Array que contiene información sobre el pago a terceros.</td></tr><tr><td><strong><code>data.deductions.terc.*.code</code> </strong><code>string</code><br>Código.</td></tr><tr><td><strong><code>data.deductions.terc.*.name</code> </strong><code>string</code><br>Nombre.</td></tr><tr><td><strong><code>data.deductions.terc.*.amount</code> </strong><code>string</code><br>Valor del aporte del pago de terceros.</td></tr><tr><td><strong><code>data.deductions.anti</code> </strong><code>array</code><br>Array que contiene información sobre los anticipos.</td></tr><tr><td><strong><code>data.deductions.anti.*.code</code> </strong><code>string</code><br>Código.</td></tr><tr><td><strong><code>data.deductions.anti.*.name</code> </strong><code>string</code><br>Nombre.</td></tr><tr><td><strong><code>data.deductions.anti.*.amount</code> </strong><code>string</code><br>Valor del aporte de los anticipos.</td></tr><tr><td><strong><code>data.deductions.otra</code> </strong><code>array</code><br>Array que contiene información sobre otras deducciones.</td></tr><tr><td><strong><code>data.deductions.otra.*.code</code> </strong><code>string</code><br>Código.</td></tr><tr><td><strong><code>data.deductions.otra.*.name</code> </strong><code>string</code><br>Nombre.</td></tr><tr><td><strong><code>data.deductions.otra.*.amount</code> </strong><code>string</code><br>Valor del aporte a otras deducciones.</td></tr></tbody></table>

data Totales y validación

<table class="astro-ibjkzya5"><tbody class="astro-ibjkzya5"><tr><td><strong><code>data.total_accruals</code> </strong><code>string</code><br>Total devengados.</td></tr><tr><td><strong><code>data.total_deductions</code> </strong><code>string</code><br>Total deducciones.</td></tr><tr><td><strong><code>data.net_balance</code> </strong><code>string</code><br>Total de la nómina.</td></tr><tr><td><strong><code>data.cune</code> </strong><code>string | null</code><br>Código único de la nómina. Es el identificador oficial y único del documento ante la DIAN.</td></tr><tr><td><strong><code>data.qr</code> </strong><code>string</code><br>URL del código QR que apunta al portal de la DIAN para consultar el documento.</td></tr><tr><td><strong><code>data.errors</code> </strong><code>array | null</code><br>Array con las notificaciones o advertencias retornadas por la DIAN durante la validación.</td></tr><tr><td><strong><code>data.is_validated</code> </strong><code>boolean</code><br>Indica si la nómina fue validada exitosamente ante la DIAN. <code>true</code>: validada, <code>false</code>: pendiente de validación.</td></tr><tr><td><strong><code>data.validated_at</code> </strong><code>string | null</code><br>Fecha y hora en la que la DIAN validó el documento. Formato: <code>DD-MM-YYYY HH:mm:ss AM/PM</code>. Retorna <code>null</code> si aún no está validada.</td></tr><tr><td><strong><code>data.created_at</code> </strong><code>string</code><br>Fecha de creación del documento en el sistema. Formato: <code>DD-MM-YYYY HH:mm:ss AM-PM</code>.</td></tr></tbody></table>

data.related\_documents

<table class="astro-ibjkzya5"><tbody class="astro-ibjkzya5"><tr><td><strong><code>data.related_documents</code> </strong><code>object</code><br>Objeto con las notas relacionadas.</td></tr><tr><td><strong><code>data.related_documents.*.adjustment_payroll</code> </strong><code>object | null</code><br>Objeto con la información sobre las nóminas de eliminación.</td></tr><tr><td><strong><code>data.related_documents.*.adjustment_payroll.reference_code</code> </strong><code>string</code><br>Código de referencia de la nota de ajuste para la nómina.</td></tr><tr><td><strong><code>data.related_documents.*.adjustment_payroll.number</code> </strong><code>string</code><br>Número de la nómina de eliminación.</td></tr><tr><td><strong><code>data.related_documents.*.adjustment_payroll.validated_at</code> </strong><code>string</code><br>Fecha de validación de la nómina de eliminación. Formato: <code>DD-MM-YYYY HH:mm:ss AM-PM</code>.</td></tr></tbody></table>

* * *
