const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
var favicon = require('serve-favicon');

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
})
app.use('/',router);
app.use(express.static(path.join(__dirname+'/public')));
app.use(favicon(path.join(__dirname,'public','favicon.ico')));
app.listen(process.env.PORT || 3000);
console.log("Running at port 3000");
