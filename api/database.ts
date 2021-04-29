const { DynamoDBClient, GetItemCommand } = require("@aws-sdk/client-dynamodb");

class database {
    databaseName: string;
    client: typeof DynamoDBClient;
    
    constructor(databaseName: string, region: string){
        this.databaseName = databaseName;
        this.client = new DynamoDBClient({region: region})
    }

}