const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth.js');

const commentCtrl = require('../controllers/comment');

// nombre de commentaires et modification du commentaire ?
router.get('/:postId', auth, commentCtrl.getAllComments);
router.post('/', auth, commentCtrl.createComment);
router.delete('/:id', auth, commentCtrl.deleteComment);

module.exports = router;