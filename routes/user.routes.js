import { Router } from 'express';
const userRouter = Router();
userRouter.get('/',(req,res)=>{res.send({'title':'GET all users'})});
userRouter.get('/users:id',(req,res)=>{res.send({'title':'GET user details'})});
userRouter.post('/users',(req,res)=>{res.send({'title':'CREATE a user'})});
userRouter.post('/users:id',(req,res)=>{res.send({'title':'UPDATE a user'})});
userRouter.delete('/users:id',(req,res)=>{res.send({'title':'DELETE a user'})});
export default userRouter;