const router = require('express').Router();
const multer = require('multer');
const upload = multer({dest: 'uploads'});
const fs = require('fs');
const path = require('path');

router.get('/', (req, res) => {
    res.send(
        `<div style= "text-align: center;">
        <h1>Tugas Express JS Eduwork</h1>
        <form action="http://localhost:3001/product" method="post">
        <label for="fname">Name:</label><br>
        <input type="text" name="name" placeholder="Masukan nama produk"><br>
        <label for="lname">Price:</label><br>
        <input type="text"  name="price" placeholder="Masukan harga produk"><br>
        <label for="fname">Stock:</label><br>
        <input type="text"  name="stock" placeholder="Masukan stock produk"><br>
        <label for="lname">Image:</label><br>
        <input type="file"  name="image"><br><br>
        <button type="submit">Submit</button>
        </form>
        </div>`
    )
});

router.post('/product', upload.single('image'), (req, res) => {
    const {name, price, stock} = req.body;
    console.log(req.body);
    const image = req.file;
    console.log(req.file);
    if(image) {
        const target = path.join(__dirname, 'uploads', image.originalname);
        fs.renameSync(image.path, target)
        res.send("recieved your request!");
        // res.json({
        //     name,
        //     price,
        //     stock,
        //     image
        // });
    }
});

module.exports = router;