const express = require("express")
const route = express.Router()
const jwt = require("jsonwebtoken")
const conn = require("../database/db.js")
var mysql = require('mysql');
const bcrypt = require("bcrypt")
const saltRounds = 10;


route.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

route.get("/users", function (req, res) {
    try{
    var sql= `SELECT id,name FROM users`;
    conn.query(sql, function (err, results){
        if (err) throw err;
        res.status(200).send(results);
    });
}catch (error){
    console.log(error);
}
});

route.post("/users/sign-up", async function (req, res) {
    try {
        console.log(req.body)
        const password = req.body.password;
        const encryptedPassword = await bcrypt.hash(password, saltRounds);
        var id = req.body.id;
        var name = req.body.name;
        var email = req.body.email;
        var picture = req.body.picture;
        var sql = `INSERT INTO users (id, name, email, password, picture) VALUES ('${id}', '${name}', '${email}', '${encryptedPassword}', '${picture}')`;
        conn.query(sql, function (err, results) {
            console.log("1 ligne insérée");

            if (err) throw err;
      res.status(200).send(results);
            
        });
    } catch (error) {
        console.log(error);
    }
});


route.post("/users/sign-in", async function (req, res) {
    console.log("bjr");
    var email = req.body.email;
    var password = req.body.password;
    const encryptedPassword = await bcrypt.hash(password, saltRounds);
    conn.query('SELECT * FROM users WHERE email = ?', [email], async function (error, results, fields) {
        if (error) {
            res.json({
                code: 400,
                failed: "error ocurred"
            })
        } else {
            if (results.length > 0) {
                const comparision = await bcrypt.compare(password, results[0].password)


                if (comparision) {
                    var token = jwt.sign({ id: results[0].id, email: results[0].email }, 'shhhhh');
                    res.status(200).json({
                        code: 200,
                        success: "login sucessfull",
                        token: token
                    })
                }
                else {
                    res.status(206).json({
                        code: 206,
                        success: "Email and password does not match",
                        token: null
                    });
                }
            }
            else {
                res.status(206).json({
                    code: 206,
                    success: "Email does not exist",
                    token: null
                });
            }
        }
    });

});

route.get("/products", function (req, res) {
    try{
    var sql= `SELECT * FROM products`;
    conn.query(sql, function (err, results){
        if (err) throw err;
        res.status(200).send(results);
    });
}catch (error){
    console.log(error);
}
});

route.use('/products', (req, res, next) => {
    var token = jwt.verify(token, 'shhhhh');
res.status(200).json({
    
})
;next();

});

route.post("/products", async function (req, res) {
    try {
        console.log(req.body)
        
        var id = req.body.id;
        var name = req.body.name;
        var price = req.body.price;
        var picture = req.body.picture;
        var description = req.body.description;
        var category = req.body.category;
        var user_affiliate = req.body.user_affiliate;
        var sql = `INSERT INTO products (id, name, price, picture, description, category, user_affiliate) VALUES ('${id}', '${name}', '${price}', '${picture}', '${description}', '${category}', '${user_affiliate}')`;
        conn.query(sql, function (err, results) {
            console.log("1 ligne insérée");

            if (err) throw err;
      res.status(200).send(results);
            
        });
    } catch (error) {
        console.log(error);
    }
});



console.log("route connected");

module.exports = route
