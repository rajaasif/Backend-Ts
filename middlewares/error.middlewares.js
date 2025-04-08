const errorMiddleware = (err,req,res,next)=> {
    try {
        let error = {...err};
        error.message = err.message;
        console.error(err);
        // mongoose bad object id
        if(err.name === 'CastError'){
            error = new Error('Resource not found');
            error.status = 404;
        }
        // mongoose duplicate key
        if(err.code === 11000){
            error = new Error('Duplicate key error');
            error.status = 400;
        }
        // mongoose validation error
        if(err.name === 'ValidationError'){
            const message = Object.values(err.errors).map(val => val.message);
            error = new Error(message.join(', '));
            error.status = 400;
        }
        res.status(error.status || 500).json({
            success: false,
            message: error.message || 'Internal Server Error'
        });
    } catch (error) {
        next(error);
    }
}
export default errorMiddleware;