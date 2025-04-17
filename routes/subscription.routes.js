import {Router } from 'express'; 
import { authorise } from '../middlewares/auth.middleware.js';
import { createSubscription, getSubscriptionDetails, getAllSubscriptions, getUserSubscriptions } from '../controllers/subscription.controller.js';

const subscriptionRouter = Router();   
subscriptionRouter.get('/',authorise,getAllSubscriptions); // Get all subscriptions
subscriptionRouter.get('/:id',getSubscriptionDetails);
subscriptionRouter.get('/user/:id',authorise,getUserSubscriptions);
subscriptionRouter.get('/upcoming-renewals',(req,res)=>{res.send({'title':'GET upcoming renewals'})});
subscriptionRouter.post('/',authorise,createSubscription);
subscriptionRouter.post('/:id',(req,res)=>{res.send({'title':'UPDATE a subscription'})});
subscriptionRouter.delete('/:id',(req,res)=>{res.send({'title':'DELETE a subscription'})});
subscriptionRouter.put('/:id/cancel',(req,res)=>{res.send({'title':'CANCEL subscription'})});
export default subscriptionRouter;