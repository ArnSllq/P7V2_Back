const exports = require('exports');
const router = express.Router();
const auth = require('../middleware/auth');

const userCtrl = require('../controllers/user');

router.get('/:id', userCtrl.getOneUser);
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.put('/:id', auth, userCtrl.modifyPwd);
router.delete('/:id', userCtrl.deleteAccount);

module.exports = router;
