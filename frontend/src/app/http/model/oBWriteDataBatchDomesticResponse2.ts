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
import { OBMultiAuthorisation1 } from './oBMultiAuthorisation1';
import { OBTransactionIndividualStatus1Code } from './oBTransactionIndividualStatus1Code';
import { OBWriteDataBatchDomesticConsentResponse2DomesticPayments } from './oBWriteDataBatchDomesticConsentResponse2DomesticPayments';
import { OBWriteDataBatchDomesticConsentResponse2DomesticScheduledPayments } from './oBWriteDataBatchDomesticConsentResponse2DomesticScheduledPayments';


export interface OBWriteDataBatchDomesticResponse2 {
    /**
     * OB: Unique identification as assigned by the ASPSP to uniquely identify the domestic payment resource.
     */
    DomesticPaymentId: string;
    /**
     * OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.
     */
    ConsentId: string;
    /**
     * Date and time at which the message was created. All dates in the JSON payloads are represented in ISO 8601 date-time format. All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00
     */
    CreationDateTime: Date;
    Status: OBTransactionIndividualStatus1Code;
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
    DomesticPayments?: Array<OBWriteDataBatchDomesticConsentResponse2DomesticPayments>;
    DomesticScheduledPayments?: Array<OBWriteDataBatchDomesticConsentResponse2DomesticScheduledPayments>;
    /**
     * Set of elements used to provide details of a charge for the payment initiation.
     */
    Charges?: Array<OBCharge2>;
    MultiAuthorisation?: OBMultiAuthorisation1;
}