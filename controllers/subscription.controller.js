import subscriptionModel from '../models/subscription.model.js';
import { workflowClient } from '../config/upstash.js';
import { SERVER_URL } from '../config/env.js';
export const createSubscription = async (req, res, next) => {
    try {
        const subscription = await subscriptionModel.create({
            ...req.body,
            user: req.user._id
        })
        const { workflowRunId } = await workflowClient.trigger({
            url: `${SERVER_URL}/api/v1/workflows/subscription/reminder`,
            body: {
                subscriptionId: subscription.id,
            },
            headers: {
                'content-type': 'application/json',
            },
            retries: 0,
        })

        res.status(201).json({ success: true, data: { subscription, workflowRunId } });
    } catch (error) {
        next(error);

    }
}
export const getAllSubscriptions = async (req, res, next) => {
    try {
        const getAllSubscription = await subscriptionModel.find();
        if (req.user.id !== req.params.id) {
            const error = new Error('You are not authorized to view the subscriptions');
            error.statusCode = 401;
            throw error;
        }

        if (!getAllSubscription) {
            const error = new Error('No subscriptions found');
            error.statusCode = 404;
            throw error;
        }
        res.status(202).json({
            success: true,
            data: {
                getAllSubscription
            }
        })
    } catch (error) {
        next(error);

    }
}
export const getSubscriptionDetails = async (req, res, next) => {
    try {
        const getSubscriptionDetails = await subscriptionModel.findById(req.params.id);
        if (!getSubscriptionDetails) {
            const error = new Error('Subscription not found');
            error.statusCode = 404;
            throw error;
        }
        res.status(202).json({
            success: true,
            data: {
                getSubscriptionDetails
            }
        })
    } catch (error) {
        next(error);

    }
}
export const getUserSubscriptions = async (req, res, next) => {
    try {
        const userSubscriptions = await subscriptionModel.find({ user: req.params.id });
        // check if user is authorised
        if (req.user.id !== req.params.id) {
            const error = new Error('You are not authorized to view this subscription');
            error.statusCode = 401;
            throw error;
        }
        if (!userSubscriptions) {
            const error = new Error('No subscriptions found');
            error.statusCode = 404;
            throw error;
        }
        res.status(202).json({
            success: true,
            data: {
                userSubscriptions
            }
        })
    } catch (error) {
        next(error);

    }
}