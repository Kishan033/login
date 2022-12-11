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

app.get('/zendesk/auth', function (req, res) {
    console.log(req.query);
    // {
    //     brand_id: '11159328735505',
    //     locale_id: '1',
    //     return_to: 'https://boomio.zendesk.com',
    //     timestamp: '1670741157'
    // }

    console.log("🚀 ~ file: server.js:52 ~ process.env.HELP_DESK_SECRET", process.env.HELP_DESK_SECRET)
    const token = JWT.sign({
        "name": "Kishan",
        "email": "kishandobariya03@gmail.com",
        "iat": parseInt(((+(new Date())) / 1000).toString()),
    }, process.env.HELP_DESK_SECRET, jwtOptions);
    console.log("🚀 ~ file: server.js:28 ~ app.get ~ token", token);

    // var verifyResult = JWT.verify(token, publicKey, jwtOptions);
    // console.log("Verification has passed : " + JSON.stringify(verifyResult));
    const aa = `https://boomio.zendesk.com/access/jwt?jwt=${token}`;

    console.log("🚀 ~ file: server.js:52 ~ aa", aa)
    return res.redirect(`https://boomio.zendesk.com/access/jwt?jwt=${token}&return_to=${req.query.return_to}`);
});

app.listen(process.env.PORT, function () {
    console.log("Working on port 4001");
});