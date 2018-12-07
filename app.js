const  express = require ('express');
const  router = require ('./routes/index.js');
const Config = require('./config/index.js');
const chalk = require('chalk')

const app = express();


//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
 });


router(app)

app.listen(Config.port,()=>{
    console.log(
        chalk.green(`成功监听端口：${Config.port}`)
    )
})