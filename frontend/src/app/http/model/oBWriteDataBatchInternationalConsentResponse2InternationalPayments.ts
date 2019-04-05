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
import { OBInternational2 } from './oBInternational2';
import { OBTransactionIndividualStatus1Code } from './oBTransactionIndividualStatus1Code';


export interface OBWriteDataBatchInternationalConsentResponse2InternationalPayments {
    Status?: OBTransactionIndividualStatus1Code;
    Initiation?: OBInternational2;
}
