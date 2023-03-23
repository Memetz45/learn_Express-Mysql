const express = require ('express');
const path = require ('path');
const app = express();
const router = require('./routes');
const productRouter = require ('./app/product/routes');
const productRouterV2 = require ('./app/product_v2/router');
const logger = require ('morgan')


app.use(logger('dev'));
app.use(express.urlencoded({extended: true})); 
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'iploads')));
app.use('/api/v1', productRouter);
app.use(router);
app.use((req, res) => {
    res.status(404);
    res.send({
        status: 'failed',
        message: 'Resource ' + req.originalUrl + ' Not Found'
    })
})

app.listen(3001, () => console.log('Server: http://localhost:3001'));