const router = require('express').Router();
const multer = require('multer');
const upload = multer({dest: 'uploads'});
const fs = require('fs');
const path = require('path');

router.get('/', (req, res) => {
    res.send(
        `<h1 style= "text-align: center;">Tugas Express JS Eduwork</h1>
        <form>
        <label for="fname">First name:</label><br>
        <input type="text" id="fname" name="fname"><br>
        <label for="lname">Last name:</label><br>
        <input type="text" id="lname" name="lname">
      </form>`
    )
});

router.post('/product/', upload.single('image'), (req, res) => {
    const {name, price, stock, status} = req.body;
    const image = req.file;
    if(image) {
        const target = path.join(__dirname, 'uploads', image.originalname);
        fs.renameSync(image.path, target)
        res.json({
            name,
            price,
            stock,
            status,
            image
        });
    }
});

module.exports = router;