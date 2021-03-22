const router = require('express').Router()
const Item = require('../models/Menu')

router.get('/', async (req, res) => {
  try {
    const items = await Item.find()
    if (items.length < 1) {
      return res.status(201).json({ items: 'empty' })
    }
    return res.status(201).json(items)
  } catch (error) {
    console.error(error)
    return next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const { name, description, price, image } = req.body
    const item = await Item.create({  name, description, price, image })
    return res.status(201).json(item)
  } catch (error) {
    console.error(error)
    return next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const removedItem = await Item.remove({ _id: id })
    return res.status(201).json(removedItem)
  } catch (error) {
    console.error(error)
    return next(error)
  }
})

module.exports = router
