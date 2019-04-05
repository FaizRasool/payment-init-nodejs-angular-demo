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
import { OBAuthorisation1 } from './oBAuthorisation1';
import { OBCharge2 } from './oBCharge2';
import { OBDomesticStandingOrder2 } from './oBDomesticStandingOrder2';
import { OBExternalConsentStatus1Code } from './oBExternalConsentStatus1Code';
import { OBExternalPermissions2Code } from './oBExternalPermissions2Code';


export interface OBWriteDataDomesticStandingOrderConsentResponse2 {
    /**
     * OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.
     */
    ConsentId: string;
    /**
     * Date and time at which the resource was created. All dates in the JSON payloads are represented in ISO 8601 date-time format. All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00
     */
    CreationDateTime: Date;
    Status: OBExternalConsentStatus1Code;
    /**
     * Date and time at which the resource status was updated. All dates in the JSON payloads are represented in ISO 8601 date-time format. All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00
     */
    StatusUpdateDateTime: Date;
    Permission: OBExternalPermissions2Code;
    /**
     * Specified cut-off date and time for the payment consent. All dates in the JSON payloads are represented in ISO 8601 date-time format. All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00
     */
    CutOffDateTime?: Date;
    /**
     * Set of elements used to provide details of a charge for the payment initiation.
     */
    Charges?: Array<OBCharge2>;
    Initiation: OBDomesticStandingOrder2;
    Authorisation?: OBAuthorisation1;
}
