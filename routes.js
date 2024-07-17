// routes/userRoutes.js
import express from "express"
const router = express.Router();

import controller from "./controller.js"

router.post('/users', controller.createUser);
router.get('/users', controller.getUsers);
router.put('/users/:id', controller.updateUser);
router.delete('/users/:id', controller.deleteUser);

module.exports = router;
