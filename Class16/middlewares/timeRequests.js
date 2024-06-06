export const timeRequest = (_request, _response,next) =>{
    console.time('Time Request');
    console.timeEnd('Time Request');
    next();
};