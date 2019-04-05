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


/**
 * Result of a funds availability check.
 */
export interface OBFundsAvailableResult1 {
    /**
     * Date and time at which the funds availability check was generated. All dates in the JSON payloads are represented in ISO 8601 date-time format. All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00
     */
    FundsAvailableDateTime: Date;
    /**
     * Flag to indicate the availability of funds given the Amount in the consent request.
     */
    FundsAvailable: boolean;
}
