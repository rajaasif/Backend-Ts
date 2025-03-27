const errorMiddleware = (err,req,res,next)=> {
    try {
        
    } catch (error) {
        next(error);
    }
}