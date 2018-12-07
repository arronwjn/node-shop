'use strict';
const formidable = require('formidable');
// const AddressComponent = require('../../prototype/addressComponent');



class LoginHandle {
	constructor(){
		this.encryption = 1;
    }
    /**
     * 登录
     * 
     * @param {Object} req 
	 * @param {Object} res 
	 * @param {Function} next 
     * 
     */
    login(req,res,next){
		const form = new formidable.IncomingForm();
        
        form.parse(req,async (err,fields,files)=>{
            if(err) {
                res.send({
                    code:400,
                    msg:'表单信息错误'
                })
                return;
            }
            
            const {phone,password,code = 200} = fields;
            try {
                if(!phone){
					throw new Error('账号参数错误')
                }else if(!password){
					throw new Error('密码参数错误')
                }
            }catch(err){
                res.send({
                    name: 'ERROR_DATA',
                    message: err.message,
                });
                return;
            }

            try{
                
                res.send({
                    code:200,
                    msg:'登录成功'
                })
            }catch(err){
                res.send({
                    name: 'ERROR_DATA',
                    message: '登录失败',
                });
            }
        })
    }
    /**
     * 注册
     * 
     * @param {Object} req 
	 * @param {Object} res 
	 * @param {Function} next 
     * 
     */
    register(req,res,next){
		const form = new formidable.IncomingForm();
        
        form.parse(req,async (err,fields,files)=>{
            if(err){
                res.send({
                    code:400,
                    msg:'表单信息错误'
                })
                return;
            }

            const {phone,password,code = 200} = fields;
            
            try{
                if(!phone){
					throw new Error('账号参数错误')
                }else if(!password){
					throw new Error('密码参数错误')
                }
            }catch(err){
                res.send({
                    name:'GET_ERROR_PARAM',
                    msg:err.message
                })
            }

            try{
                
                res.send({
                    code:200,
                    msg:'注册成功'
                })
            }catch(err){

                res.send({
                    name:'ERROR_DATA',
                    msg:'注册失败'
                })
            }
            
        })
    }
    static aaa(){
        console.log('aa')
    }
}
module.exports  =  new LoginHandle();