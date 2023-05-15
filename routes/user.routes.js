const router = require('express').Router()
const authController = require('../controllers/auth.controller')
const userController = require('../controllers/user.controller')


//auth
router.post('/register', authController.signUp)
router.post('/login', authController.signIn)
router.get('/logout', authController.logout)


//user
router.get('/', userController.getAllUsers)
router.delete('/:id', userController.deleteUser)
router.put('/:id', userController.updateUser)
router.get('/:id', userController.userInfo)


module.exports = router