const AWS = require('aws-sdk')

const updateTask = async (event) => {

    const dynamoDB = new AWS.DynamoDB.DocumentClient()

    const { id } = event.pathParameters // Extraemos el parametro del id
    const { title, description, done } = JSON.parse(event.body) // Extaemos el json de la peticion

    const update = await dynamoDB.update({ // La operación update se utiliza para actualizar un elemento
    // de una tabla de DynamoDB, proporcionando su clave primaria y los atributos a actualizar
        TableName: 'TaskTable',
        Key: {
            id
        },
        UpdateExpression: 'set title = :title, description = :description, done = :done', // Expresion de actualizacion
        // set 'x' basicamente decimos como que modifique el campo 'x' por el valor :x, el cual refiere a una variable
        // que se le asignara en el ExpressionAttributeValues
        ExpressionAttributeValues: {
            ':title': title, // llamamos la variable :title designada anteriormente y le asignamos el valor de 'title'
            ':description': description,
            ':done': done
        },
        ReturnValues: 'ALL_NEW' // Establecemos que nos de como retorno los valores nuevos
    }).promise()

    return {
        status: 200,
        body: JSON.stringify({
            message: "Tarea actualizada satisfactoriamente"
        })
    }

}

module.exports = {
    updateTask
}