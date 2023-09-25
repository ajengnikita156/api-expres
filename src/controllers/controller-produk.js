const config = require('../configs/database');
const mysql = require('mysql');
const connection = mysql.createConnection(config);
connection.connect();

//menampilkan semua data //GET
const getDataProduk =async (req, res) => {
    const data = await new Promise((resolve,reject) => {
                     connection.query('SELECT * FROM produk', function (error,rows) {
                        if (rows) {
                            resolve(rows);
                        } else {
                            reject({});
                        }
              });
    });
    if (data) {
        res.send({
            success: true,
            message: 'Berhasil ambil data!',
            data: data
        });
    }else  {
        res.send({
            success: false,
            message: 'Gagal ambil data!',
        });
    }
}

//menambahkan data //ADD //POST
const addDataProduk = async(req, res) => {
    let data = {
        // id: req.body.id,
        nama: req.body.nama,
        harga: req.body.harga,
        stok: req.body.stok,
    }
    const result = await new Promise((resolve,reject) => {
        connection.query('INSERT INTO produk SET ?;',[data], function(error,rows){
           if (rows) {
            resolve(true)
           }else {
            reject(false)
           }
        });
    });

    if (result) {
        res.send({
            success: true,
            message: 'Berhasil menambahkan data!'
        });
    }else {
        res.send({
            success: false,
            message: 'gagal menambahkan data!'
        });
    }
}

//mengubah data //EDIT //PUT
const editDataProduk = async(req, res) => {
    let id = req.params.id;
    let dataEdit = {
        nama: req.body.nama,
        harga: req.body.harga,
        stok: req.body.stok,
    }

    const result = await new Promise((resolve,reject) => {
        connection.query('UPDATE produk SET ? WHERE ID = ?;', [dataEdit, id], function(error,rows){
            if (rows) {
                resolve(true);
            }else {
                reject(false);
            }
        });
    });

    if (result) {
        res.send({
            success: true,
            message: 'Berhasil edit data!'
        });
    }else {
        res.send({
            success: false,
            message: 'gagal edit data!'
        });
    }
}

//menghapus data //DELETE //DELETE
const deleteDataProduk = async(req, res) => {
    let id = req.params.id

    const result = await new Promise((resolve, reject) => {
        connection.query('DELETE FROM produk WHERE id = ?;', [id], function(error,rows) {
            if (rows) {
                resolve(true);
            }else {
                reject(false);
            }
        });
    });

    if (result) {
        res.send({
             success: true,
            message: 'Berhasil hapus data!'
        });
    }else {
        res.send({
            success: false,
            message: 'gagal hapus data!'
        });
    }
}

module.exports = {
    getDataProduk,
    addDataProduk,
    editDataProduk,
    deleteDataProduk
    
}