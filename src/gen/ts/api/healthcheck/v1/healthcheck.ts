/* eslint-disable */
// @generated by protobuf-ts 2.7.0 with parameter generate_dependencies,server_none,optimize_code_size,client_generic,output_typescript,long_type_string,eslint_disable
// @generated from protobuf file "api/healthcheck/v1/healthcheck.proto" (package "api.healthcheck.v1", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message api.healthcheck.v1.StatusRequest
 */
export interface StatusRequest {
}
/**
 * @generated from protobuf message api.healthcheck.v1.StatusResponse
 */
export interface StatusResponse {
    /**
     * @generated from protobuf field: api.healthcheck.v1.Version version = 1;
     */
    version?: Version;
}
/**
 * @generated from protobuf message api.healthcheck.v1.Version
 */
export interface Version {
    /**
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * @generated from protobuf field: string version = 2;
     */
    version: string;
    /**
     * @generated from protobuf field: string version_strategy = 3;
     */
    versionStrategy: string;
    /**
     * @generated from protobuf field: string commit_hash = 6;
     */
    commitHash: string;
    /**
     * @generated from protobuf field: string git_branch = 7;
     */
    gitBranch: string;
    /**
     * @generated from protobuf field: string git_tag = 8;
     */
    gitTag: string;
    /**
     * @generated from protobuf field: string commit_timestamp = 9;
     */
    commitTimestamp: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class StatusRequest$Type extends MessageType<StatusRequest> {
    constructor() {
        super("api.healthcheck.v1.StatusRequest", []);
    }
}
/**
 * @generated MessageType for protobuf message api.healthcheck.v1.StatusRequest
 */
export const StatusRequest = new StatusRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class StatusResponse$Type extends MessageType<StatusResponse> {
    constructor() {
        super("api.healthcheck.v1.StatusResponse", [
            { no: 1, name: "version", kind: "message", T: () => Version }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message api.healthcheck.v1.StatusResponse
 */
export const StatusResponse = new StatusResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Version$Type extends MessageType<Version> {
    constructor() {
        super("api.healthcheck.v1.Version", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "version", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "version_strategy", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "commit_hash", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "git_branch", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 8, name: "git_tag", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 9, name: "commit_timestamp", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message api.healthcheck.v1.Version
 */
export const Version = new Version$Type();
/**
 * @generated ServiceType for protobuf service api.healthcheck.v1.StatusService
 */
export const StatusService = new ServiceType("api.healthcheck.v1.StatusService", [
    { name: "Status", options: {}, I: StatusRequest, O: StatusResponse }
]);
