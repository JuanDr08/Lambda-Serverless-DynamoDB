const AWS = require('aws-sdk')

const getAllTasks = async (event) => {

    const dynamoDB = new AWS.DynamoDB.DocumentClient()

    const query = await dynamoDB.scan({ // La operación scan examina toda la tabla (o un índice) 
    // en busca de elementos que coincidan con los filtros proporcionados (si los hay), 
    // en este caso no hay, asi que devuelve todos los elementos de la tabla
        TableName: 'TaskTable'
    }).promise()

    const tasks = query.Items

    return {
        status: 200,
        body: tasks
    }

}

module.exports = {
    getAllTasks
}