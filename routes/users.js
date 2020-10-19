var express = require('express');
var router = express.Router();
var redis = require('../utils/redis');

/* GET users listing. */
router.get('/', function(req, res, next) {
    redis.get('user-uuids',function (err,uuids) {
        console.error(err);
        var uuid = req.query.uuid;
        //var uuid = req_url.split("=")[1]
        var myUuids = [];
        var data = uuids.split(',');
        for (i=0;i<data.length;i++){
            uid = data[i].replace("[","").replace("]","").replace("\"","").replace("\"","");
            var uidMix = uid.split(":");
            if (uidMix[1] == uuid){
                myUuids.push(uidMix[0]);
            }
        }
        return res.send({code:200,msg:'获取成功',data:myUuids});
    });
});

module.exports = router;
