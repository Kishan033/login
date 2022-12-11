var fs = require("fs");
var express = require("express");
var bodyParser = require("body-parser");
var JWT = require('jsonwebtoken');
var app = express();

app.use(bodyParser.json());

// var privateKey = fs.readFileSync('./jwtRS256.key', 'utf8');
// var publicKey = fs.readFileSync('./jwtRS256.key.pub', 'utf8');

var jwtOptions = {
    expiresIn: '5h',
    algorithm: "RS256"
};

// app.get('/auth',function(req,res){
//     console.log(req.query);

//     const token = JWT.sign({
//         "sub": "88003020643",
//         "email": "kishandobariya03@gmail.com",
//         "iat": parseInt(((+(new Date())) / 1000).toString()),
//         "nonce": req.query.nonce,
//         "given_name": "Messi",
//         "family_name": "Messsi",
//     }, privateKey, jwtOptions);
//     console.log("🚀 ~ file: server.js:28 ~ app.get ~ token", token);

//     // var verifyResult = JWT.verify(token, publicKey, jwtOptions);
//     // console.log("Verification has passed : " + JSON.stringify(verifyResult));
//     const aa = `https://kishandobariya03.myfreshworks.com/sp/OIDC/518721214559527022/implicit?state=${req.query.state}&token=${token}`

//     console.log("🚀 ~ file: server.js:36 ~ app.get ~ aa", aa)
//     return res.redirect(`https://kishandobariya03.myfreshworks.com/sp/OIDC/518721214559527022/implicit?state=${req.query.state}&token=${token}`);
// });

console.log(process.env)

app.get('/zendesk/auth',function(req,res){
    console.log(req.query);
    return res.send("OKK");

    // const token = JWT.sign({
    //     "sub": "88003020643",
    //     "email": "kishandobariya03@gmail.com",
    //     "iat": parseInt(((+(new Date())) / 1000).toString()),
    //     "nonce": req.query.nonce,
    //     "given_name": "Messi",
    //     "family_name": "Messsi",
    // }, privateKey, jwtOptions);
    // console.log("🚀 ~ file: server.js:28 ~ app.get ~ token", token);

    // // var verifyResult = JWT.verify(token, publicKey, jwtOptions);
    // // console.log("Verification has passed : " + JSON.stringify(verifyResult));
    // const aa = `https://kishandobariya03.myfreshworks.com/sp/OIDC/518721214559527022/implicit?state=${req.query.state}&token=${token}`

    // console.log("🚀 ~ file: server.js:36 ~ app.get ~ aa", aa)
    // return res.redirect(`https://kishandobariya03.myfreshworks.com/sp/OIDC/518721214559527022/implicit?state=${req.query.state}&token=${token}`);
});

app.listen(4001,function(){
    console.log("Working on port 4001");
});