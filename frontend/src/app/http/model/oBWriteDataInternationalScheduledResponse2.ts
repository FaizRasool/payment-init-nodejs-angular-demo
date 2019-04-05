/**
 * Payment Initiation API
 * Swagger for Payment Initiation API Specification
 *
 * OpenAPI spec version: v3.1.0
 * Contact: ServiceDesk@openbanking.org.uk
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { OBCharge2 } from './oBCharge2';
import { OBExchangeRate2 } from './oBExchangeRate2';
import { OBExternalStatus1Code } from './oBExternalStatus1Code';
import { OBInternationalScheduled2 } from './oBInternationalScheduled2';
import { OBMultiAuthorisation1 } from './oBMultiAuthorisation1';


export interface OBWriteDataInternationalScheduledResponse2 {
    /**
     * OB: Unique identification as assigned by the ASPSP to uniquely identify the international scheduled payment resource.
     */
    InternationalScheduledPaymentId: string;
    /**
     * OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.
     */
    ConsentId: string;
    /**
     * Date and time at which the message was created. All dates in the JSON payloads are represented in ISO 8601 date-time format. All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00
     */
    CreationDateTime: Date;
    Status: OBExternalStatus1Code;
    /**
     * Date and time at which the resource status was updated. All dates in the JSON payloads are represented in ISO 8601 date-time format. All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00
     */
    StatusUpdateDateTime: Date;
    /**
     * Expected execution date and time for the payment resource. All dates in the JSON payloads are represented in ISO 8601 date-time format. All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00
     */
    ExpectedExecutionDateTime?: Date;
    /**
     * Expected settlement date and time for the payment resource. All dates in the JSON payloads are represented in ISO 8601 date-time format. All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00
     */
    ExpectedSettlementDateTime?: Date;
    /**
     * Set of elements used to provide details of a charge for the payment initiation.
     */
    Charges?: Array<OBCharge2>;
    ExchangeRateInformation?: OBExchangeRate2;
    Initiation: OBInternationalScheduled2;
    MultiAuthorisation?: OBMultiAuthorisation1;
}
