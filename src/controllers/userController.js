const User = require('../models/userModel')

class userController {
  
  async register(request, response) {
    const { name, phone, password } = request.body.user
    const newUser = new User({ name, phone, password })
    try {
      const data = await User.findOne({ phone })
      if (data) return response.status(400).json({ message: 'Already Registered.' })
      newUser.save()
      response.send('Registration Successful.')
    } catch (error) {
      return response.status(400).json({ message: error })
    }
  }

  async login(request, response) {
    const { phone, password } = request.body.user
    try {
      const data = await User.findOne({ phone, password })
      if (!data) return response.status(400).json({ message: 'Login failed!' })
      response.json({ success: 'User Login Successfully.', user: data })
    } catch (error) {
      return response.status(400).json({ message: 'Something went wrong!' })
    }
  }

  async getAllUser(request, response) {
    try {
      const data = await User.find({})
      response.send(data)
    } catch (error) {
      return response.status(400).json({ message: error })
    }
  }

  async deleteUser(request, response) {
    const userId = request.body.userId
    try {
      const data = await User.findOneAndDelete({ _id: userId })
      response.send('User Deleted Successfully.')
    } catch (error) {
      return response.status(400).json({ message: 'Something went wrong!' })
    }
  }

}

module.exports = new userController()