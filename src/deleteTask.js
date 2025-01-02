const AWS = require('aws-sdk')

const deleteTask = async (event) => {

    const dynamoDB = new AWS.DynamoDB.DocumentClient()

    const { id } = event.pathParameters

    const deleteItem = await dynamoDB.delete({ // La operación delete se utiliza para eliminar un elemento
    // de una tabla de DynamoDB, proporcionando su clave primaria
        TableName: 'TaskTable',
        Key: {
            id
        }
    }).promise()

    return {
        status: 200,
        body: {
            message: "Tarea eliminada satisfactoriamente"
        }
    }

}

module.exports = {
    deleteTask
}