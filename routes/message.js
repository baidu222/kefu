var express = require('express');
var router = express.Router();
var msgModel = require('../model/message');

router.get('/', function(req, res, next) {
    var page = req.query.page || 1;
    var size = req.query.size || 10;
    var from_id = req.query.from_id;
    var to_id = req.query.to_id;

    if(!uid){
        return res.send({code:500,msg:"参数不全"});
    }

    msgModel.query(page,size,from_id, to_id,function (err,data) {
        if(err){
            console.error(err);
            return res.send({code:400,msg:"系统错误"});
        }
        return res.send({code:200,msg:"获取成功",data:data});
    });
});

module.exports = router;