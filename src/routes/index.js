const router = require('express').Router();
const routeProduk = require('./produk');
const routebiodata = require('./biodata');


//GET localhost:8080/produk => Ambil data semua produk
router.use('/produk', routeProduk);
router.use('/biodata', routebiodata);


module.exports = router;