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
import { OBDomesticScheduled2 } from './oBDomesticScheduled2';


export interface OBWriteDataDomesticScheduled2 {
    /**
     * OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.
     */
    ConsentId: string;
    Initiation: OBDomesticScheduled2;
}
