const  express = require ('express');
const  router = require ('./routes/index.js');
const Config = require('./config/index.js');
const chalk = require('chalk')

const app = express();

router(app)

app.listen(Config.port,()=>{
    console.log(
        chalk.green(`成功监听端口：${Config.port}`)
    )
})