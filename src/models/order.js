const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({

    name: {
        type: String,
        require
    },
    phone: {
        type: String,
        require
    },
    user_id: {
        type: String,
        require
    },
    orderItems: [],
    shippingAddress: {
        type: String
    },
    lattLngt: {
        type: String
    },
    orderAmount: {
        type: Number,
        require
    },
    isDelivered: {
        type: Boolean,
        require,
        default: false
    }

}, {
    timestamps: true,
})

module.exports = mongoose.model('orders', orderSchema)