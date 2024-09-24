// const express = require('express');
// const router = express.Router();
// const userController = require('../Controllers/UserControllers');

// // Define routes
// router.post('/', userController.createUser);
// router.get('/', userController.getAllUsers);
// router.get('/:id', userController.getUserById);
// router.put('/:id', userController.updateUser);
// router.delete('/:id', userController.deleteUser);

// module.exports = router;
const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

// Define routes
router.post('/', userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;

