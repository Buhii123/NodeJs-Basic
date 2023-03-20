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

let postCreateNewUser = async (req, res) => {

    let { NameUser, Age, Email, Address, Phone } = req.body;
    let img = "";
    if (req.fileValidationError) {

        return res.send(req.fileValidationError);
    }
    else if (req.file) {
        img = req.file.filename;
        //return res.send('Please select an image to upload');
    }

    // // Display uploaded image for user validation
    // res.send(`${req.file.filename}`);
    // // });



    await pool.execute('insert into nodejsbasicdb(NameUser, Age, Email, Address,Phone,img) values (?, ?, ?,?,?,?)',
        [NameUser, Age, Email, Address, Phone, img]);

    return res.redirect('/testpage')
}

let postUdateUser = async (req, res) => {

    let { NameUser, Age, Email, Address, Phone, id } = req.body;
    const [rows, fields] = await pool.execute(`UPDATE nodejsbasicdb SET NameUser = ?, Age=?, Email=?, Address=?, Phone=? WHERE id=?`, [NameUser, Age, Email, Address, Phone, id]);
    return res.redirect('/testpage')
}
let postDeleteUser = async (req, res) => {
    let id = req.body.id;
    await pool.execute(`DELETE FROM nodejsbasicdb WHERE id=?`, [id]);
    return res.redirect('/testpage');
}
let handleUploadFile = async (req, res) => {
    console.log("Co vo day")
    if (req.fileValidationError) {

        return res.send(req.fileValidationError);
    }
    else if (!req.file) {
        return res.send('Please select an image to upload');
    }
    // Display uploaded image for user validation
    res.send(`${req.file.filename}`);
    // });
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
    postCreateNewUser,
    postUdateUser,
    postDeleteUser,
    handleUploadFile,
}