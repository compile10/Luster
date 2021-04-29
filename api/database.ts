const { DynamoDBClient, GetItemCommand } = require("@aws-sdk/client-dynamodb");

class database {
    databaseName: string;
    region: string;

    constructor(databaseName: string, region: string){
        this.databaseName = databaseName;
        this.region = region;
    }
    
}