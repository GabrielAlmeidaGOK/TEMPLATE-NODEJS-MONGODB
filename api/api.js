const express = require('express');
const router = express.Router();

const { getTest, getTestById, addTest, updateTest, deleteTest } = require('../controllers/test-controller');

router
    .route('/test/')
    .get(getTest)
    .post(addTest)

route
    .route('/test/:id')
    .get(getTestById)
    .delete(deleteTest)
    .put(updateTest)

module.exports = router;