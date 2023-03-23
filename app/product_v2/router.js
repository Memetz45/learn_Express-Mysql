const router = require('express').Router();
const multer = require ('multer');
const upload = multer({dest: 'uploads'});
const productV2Controller = require ('./controler');

router.post('/product',upload.single('image'), productV2Controller.store );

module.exports = router;