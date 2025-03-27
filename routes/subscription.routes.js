import {Router } from 'express'; 
const subscriptionRouter = Router();   
subscriptionRouter.get('/',(req,res)=>{res.send({'title':'GET all subscriptions'})});
subscriptionRouter.get('/:id',(req,res)=>{res.send({'title':'GET subscription Details'})});
subscriptionRouter.get('/user/:id',(req,res)=>{res.send({'title':'GET subscription of a user'})});
subscriptionRouter.get('/upcoming-renewals',(req,res)=>{res.send({'title':'GET upcoming renewals'})});
subscriptionRouter.post('/',(req,res)=>{res.send({'title':'CREATE a subscription'})});
subscriptionRouter.post('/:id',(req,res)=>{res.send({'title':'UPDATE a subscription'})});
subscriptionRouter.delete('/:id',(req,res)=>{res.send({'title':'DELETE a subscription'})});
subscriptionRouter.put('/:id/cancel',(req,res)=>{res.send({'title':'CANCEL subscription'})});
export default subscriptionRouter;