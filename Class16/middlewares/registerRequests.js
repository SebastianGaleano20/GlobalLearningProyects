import { response } from "express";

export const registerRequest = (request, response, next) => {
        const timeRequest = Date.now();
        const methodRequest = request.method;
        const statusRequest = response.status;
        const requestData = [
            {
              'Date request': timeRequest,
              'Method request': methodRequest,
              'Status request': statusRequest
            }
        ]
        console.log(requestData);   
    next();
}