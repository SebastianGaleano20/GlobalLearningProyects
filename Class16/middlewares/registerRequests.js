export const registerRequest = (request, response, next) => {
    const timeRequest = new Date (Date.now());
    const methodRequest = request.method;
    const statusResponse = response.statusCode;

    const requestData =
    {
        'Date request': timeRequest,
        'Method request': methodRequest,
        'Status request': statusResponse
    }
    console.log(requestData);
    next();
}