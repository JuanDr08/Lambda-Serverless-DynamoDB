const AWS = require('aws-sdk')

const getTask = async (event) => {

    const dynamoDB = new AWS.DynamoDB.DocumentClient()

    const { id } = event.pathParameters

    const query = await dynamoDB.get({ //La operación get se utiliza para obtener un único elemento
    // de una tabla de DynamoDB, proporcionando su clave primaria
        TableName: 'TaskTable',
        Key: {
            id
        }
    }).promise()

    const task = query.Item

    return {
        status: 200,
        body: task
    }

}

module.exports = {
    getTask
}