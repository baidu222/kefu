var mysqlsrv = require("mysql");
var connection = mysqlsrv.createConnection({
    host     : '47.93.8.191',
    user     : 'root',
    password : 'shishi123',
    database : 'kefu'
});


connection.connect(function (err) {
    /**
     * 连接异常
     */
    if (err) {
        console.error('error connecting:' + err.stack)
    }
    /**
     * 连接成功
     */
    console.log('connected as id ' + connection.threadId);
})


connection.end();

exports.mysqlsrv = mysqlsrv;