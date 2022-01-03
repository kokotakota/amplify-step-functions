export type AmplifyDependentResourcesAttributes = {
    "function": {
        "sample": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "stepFunction": {
        "sampleStep": {
            "Arn": "string",
            "Region": "string",
            "RoleName": "string"
        }
    }
}