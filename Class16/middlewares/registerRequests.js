export const registerRequest = (request, response, next) => {
    const Request = (time, method, status) => {
        const timeRequest = Date.now();
        const methodRequest = request.method;
        const statusRequest = request.status;

        const requestData = [
            {
              'Date request': timeRequest,
              'Method request': methodRequest,
              'Status request': statusRequest
            }
        ]
    }
}