'use strict';
const formidable = require('formidable');

const handleCity = ()=>{
	console.log('aaa')
}

class CityHandle {
	constructor(props){
	}
	/**
	 * 获取城市
	 * 
	 * @param {Object} req 
	 * @param {Object} res 
	 * @param {Function} next 
	 * 
	 */
	getCity(req, res, next){
		const from = new formidable.IncomingForm();

		from.parse(req, async ()=>{

		})
		handleCity()
		try{
			const queryId = req.query.id;
			if(queryId){
				
				res.send({
					code:200,
					data:[
						{
							id:1,
							city:'北京'
						},
						{
							id:2,
							city:'天津'
						},
						{
							id:3,
							city:'上海'
						},
						{
							id:4,
							city:'深圳'
						},
						{
							id:5,
							city:'廣州'
						}
					],
					msg:'成功'
				});

			}else{
				res.send({
					code:500,
					msg:'缺少参数id'
				})
			}
		}catch(err){
			res.send({
				name: 'ERROR_DATA',
				message: '获取数据失败',
			});
		}
	}
	/**
	 * 获取用户
	 * 
	 * @param {Object} req 
	 * @param {Object} res 
	 * @param {Function} next 
	 * 
	 */
	getPeople(req,res,next){
		try{
			res.send({
				code:200,
				data:[
					{
						id:1,
						name:'王明'
					},
					{
						id:2,
						name:'小李'
					},
					{
						id:3,
						name:'小张'
					},
					{
						id:4,
						name:'张珊'
					},
					{
						id:5,
						name:'李四'
					}
				],
				msg:'成功'
			});
		}catch(err){
			res.send({
				name: 'ERROR_DATA',
				message: '获取数据失败',
			});
		}
	}

}
module.exports  =  new CityHandle();