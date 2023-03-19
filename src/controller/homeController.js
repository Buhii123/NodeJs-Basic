import pool from '../configs/connectDB';
let getAboutpage = (req, res) => {
    return res.render('about.ejs');
}
let getContactpage = (req, res) => {
    return res.render('contact.ejs');
}
let getHomepage = (req, res) => {
    return res.render('home.ejs');
}
let getTourspage = (req, res) => {
    return res.render('tours.ejs');
}
let getDestinationspage = (req, res) => {
    return res.render('destinations.ejs');
}



let getTestspage = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `nodejsbasicdb`');
    return res.render('testpage.ejs', { dataUser: rows });
}

let getDetailPage = async (req, res) => {
    let userId = req.params.id;
    const [rows, fields] = await pool.execute(`select * from nodejsbasicdb where id = ?`, [userId]);
    // return res.send(JSON.stringify(user))
    return res.render('DetailPage.ejs', { dataUser: rows });
}




module.exports =
{
    getTestspage,
    getAboutpage,
    getContactpage,
    getHomepage,
    getTourspage,
    getDestinationspage,
    getDetailPage,

}