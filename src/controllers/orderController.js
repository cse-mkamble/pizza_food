const order = require('../models/order')

class orderController {

    async createOrder(request, response) {
        const {
            subTotal, lattLngt, address, user, cartItems
        } = request.body
        try {
            const neworder = new order({
                name: user.name,
                phone: user.phone,
                user_id: user._id,
                orderItems: cartItems,
                orderAmount: subTotal,
                shippingAddress: address,
                lattLngt: lattLngt
            })
            neworder.save()
            response.send('Place Order Successfully.')
        } catch (error) {
            return response.status(400).json({ message: error })
        }
    }

    async getUserAllOrders(request, response) {
        const { user_id } = request.body
        try {
            const orders = await order.find({ user_id: user_id }).sort({ _id: -1 })
            response.send(orders)
        } catch (error) {
            return response.status(400).json({ message: error })
        }
    }

    async getAllOrders(request, response) {
        try {
            const orders = await order.find({}).sort({ _id: -1 })
            response.send(orders)
        } catch (error) {
            return response.status(400).json({ message: error })
        }
    }

    async deliverOrder(request, response) {
        const orderId = request.body.orderId
        try {
            const orders = await order.findOne({ _id: orderId })
            orders.isDelivered = true
            await orders.save()
            response.send('Order Delivered Successfully')
        } catch (error) {
            return response.status(400).json({ message: error })
        }
    }

}

module.exports = new orderController()