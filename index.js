const AWS = require("aws-sdk");

const lambda = new AWS.Lambda();

exports.handler = async (event) => {
    let number = event.number;
    let payload = JSON.stringify({
        operation: "multiply",
        input : {
            operand1: number,
            operand2: number
        }
    })
    
    let params = {
        FunctionName: "randomMessages",
        InvocationType: "RequestResponse",
        Payload: payload
    }
    
    let data = await lambda.invoke(params).promise();
    console.log(data);
    //return data;
    let result = JSON.parse(data.Payload);
    return result.body
};
