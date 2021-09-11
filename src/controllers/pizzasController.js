const Pizzas = require('../models/pizzasModel')

class pizzasController {
  async index(request, response) {
    try {
      const data = await Pizzas.find({})
      response.send(data)
    } catch (error) {
      return response.status(400).json({ message: error })
    }
  }

  async show(request, response) {
    const pizzaid = request.body.pizzaid
    try {
      const pizza = await Pizzas.findOne({ _id: pizzaid })
      response.send(pizza)
    } catch (error) {
      return response.status(400).json({ message: error })
    }
  }

  async store(request, response) {
    const pizza = request.body.pizza
    try {
      const newpizza = new Pizzas({
        name: pizza.name,
        image: pizza.image,
        varients: ['small', 'medium', 'large'],
        description: pizza.description,
        category: pizza.category,
        prices: [pizza.prices]
      })
      await newpizza.save()
      response.send('New Pizza Added Successfully.')
    } catch (error) {
      return response.status(400).json({ message: error })
    }
  }

  async update(request, response) {
    const editedpizza = request.body.editedpizza
    try {
      const pizza = await Pizzas.findOne({ _id: editedpizza._id })
      pizza.name = editedpizza.name
      pizza.description = editedpizza.description
      pizza.image = editedpizza.image
      pizza.category = editedpizza.category
      pizza.prices = [editedpizza.prices]
      await pizza.save()
      response.send('Pizza Details Edited Successfully.')
    } catch (error) {
      return response.status(400).json({ message: error })
    }
  }

  async delete(request, response) {
    const pizzaid = request.body.pizzaid
    try {
      await Pizzas.findOneAndDelete({ _id: pizzaid })
      response.send('Pizza Deleted Successfully.')
    } catch (error) {
      return response.status(400).json({ message: error })
    }
  }
}

module.exports = new pizzasController()