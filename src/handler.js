// Funcion que sera subida a la nube como lambda en el caso de aws
exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello World!",
    }),
  };
};
