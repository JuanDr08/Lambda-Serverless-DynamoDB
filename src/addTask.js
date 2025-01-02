const { v4 } = require('uuid')
const AWS = require('aws-sdk')

const addTask = async (event) => {

    const dynamoDB = new AWS.DynamoDB.DocumentClient() // De esta manera creamos una conexion a dynamoDB a traves
    // de la AWS CLI y la configuracion de access key que hicimos

    const { title, description } = JSON.parse(event.body)
    const createdAt = new Date()
    const id = v4()

    const newTask = {
        id,
        title,
        description,
        createdAt,
        done: false
    }

    await dynamoDB.put({ // Aunque podamos confundir put con la funcion del metodo HTTP, realmente en este caso 
    // es para crear o insertar datos en la tabla
        TableName: 'TaskTable', // Nombre de la tabla
        Item: newTask // Datos a insertar
    }).promise()

    return {
        status: 200,
        body: JSON.stringify(newTask)
    }

}

module.exports = {
    addTask
}