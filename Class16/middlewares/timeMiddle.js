export const timeRequest = (request,response,next) =>{
    console.time('Time Request');
    console.timeEnd('Time Request');
    next();
};

