import mongoose from 'mongoose';
const subscriptionScheme = mongoose.Schema({
    name:
    {
        type: String,
        required: [true, 'Name is required']
    },
    price:
    {
        type: Number,
        required: [true, 'Price is required']
    },
    duration:
    {
        type: Number,
        required: [true, 'Duration is required']
    },
    description:
    {
        type: String,
        required: [true, 'Description is required']
    },
    currency: {
        type: String,
        enum: ['USD', 'INR', 'PKR'],
        default: 'USD'
    },
    status: {
        type: String,
        enum: ['active', 'cancelled', 'expired'],
    },
    frequency: {
        type: String,
        enum: ['daily', 'weekly', 'monthly', 'yearly'],
    },
    category: {
        type: String,
        enum: ['food', 'entertainment', 'education', 'health', 'travel', 'other'],
    },
    paymentMethod: {
        type: String,
        enum: ['credit card', 'debit card', 'paypal', 'bank transfer'],
        required: true
    },
    startDate: {
        type: String,
        reqquired: true,
        validate: {
            validator: function (value) {
                return value <= new Date().toISOString().slice(0, 10);
            },
            message: 'Start date must be in the past'
        }
    },
    renewalDate: {
        type: String,
        validate: {
            validator: function (value) {
                return value > this.startDate.toISOString().slice(0, 10);
            },
            message: 'Renewal date must be in the future'
        }
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    }
}, { timestamps: true });

subscriptionScheme.pre('save', function (next) {
    if (!this.renewalDate) {
        const renewalPeriod = {
            daily: 1,
            weekly: 7,
            monthly: 30,
            yearly: 365
        };
        this.renewalDate = new Date(this.startDate);
        this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriod[this.frequency]);
    }
    if (this.renewalDate < new Date()) {
        this.status = 'expired';
    }
    next();
})

export default mongoose.model('Subscription', subscriptionScheme);