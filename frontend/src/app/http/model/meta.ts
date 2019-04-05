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
import { ISODateTime } from './iSODateTime';


/**
 * Meta Data relevant to the payload
 */
export interface Meta {
    TotalPages?: number;
    FirstAvailableDateTime?: ISODateTime;
    LastAvailableDateTime?: ISODateTime;
}
