import { transformFromAstSync } from '@babel/core';
import pool from '../configs/connectDB';


let getUser = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `nodejsbasicdb`');
    return res.status(200).json({
        messages: 'ok',
        data: rows,
    })
}

let postCreateUser = async (req, res) => {
    let { NameUser, Age, Email, Address, Phone, img } = req.body;
    const [rows, fields] = await pool.execute('insert into nodejsbasicdb(NameUser, Age, Email, Address,Phone,img ) values (?, ?, ?, ?,?,?)',
        [NameUser, Age, Email, Address, Phone, img]);
    const [rowsdata, fieldsdata] = await pool.execute('SELECT * FROM `nodejsbasicdb`');
    return res.status(200).json({
        messages: 'ok',
        data: rowsdata,

    })
}

let putUpdateUser = async (req, res) => {
    let { NameUser, Age, Email, Address, Phone, id } = req.body;
    const [rows, fields] = await pool.execute(`UPDATE nodejsbasicdb SET NameUser = ?, Age=?, Email=?, Address=?, Phone=? WHERE id=?`, [NameUser, Age, Email, Address, Phone, id]);
    const [rowsdata, fieldsdata] = await pool.execute('SELECT * FROM `nodejsbasicdb`');
    return res.status(200).json({
        messages: 'ok',
        data: rowsdata,
    })
}

let deleteUser = async (req, res) => {
    let userId = req.body.id;
    const [rows, fields] = await pool.execute(`DELETE FROM nodejsbasicdb WHERE id=?`, [userId]);
    const [rowsdata, fieldsdata] = await pool.execute('SELECT * FROM `nodejsbasicdb`');
    return res.status(200).json({
        messages: 'ok',
        data: rowsdata,
    })
}

module.exports = {
    getUser, postCreateUser, putUpdateUser, deleteUser
}