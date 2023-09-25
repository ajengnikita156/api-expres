const router = require('express').Router();
const { biodata } = require('../controllers');

//GET localhost:8080/Biodata => Ambil data semua Biodata
router.get('/',biodata.getDatabiodata);

//GET localhost:8080/biodata2 => Ambil data semua biodata berdasarkan id=2
// router.get('/:id', biodata.getDetailbiodata);

// // // POST localhost:8080/biodata/add => Tambah data biodata ke database
router.post('/add',biodata.addDatabiodata);

// // // POST localhost:8080/biodata/2 => Edit data biodata
router.put('/edit/:id',biodata.editDatabiodata);

// // // POST localhost:8080/biodata/delete => Delete data biodata
router.delete('/delete/:id', biodata.deleteDatabiodata);

module.exports = router;