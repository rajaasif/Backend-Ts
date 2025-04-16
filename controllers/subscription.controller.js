import subscriptionModel from '../models/subscription.model.js';
export const createSubscription = async (req, res, next) => {
    try {
        const subscription = await subscriptionModel.create({
            ...req.body,
            user: req.user._id
        })
        res.status(201).json({
            status: 'success',
            data: {
                subscription
            }
        })
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