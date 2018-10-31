'use strict';

class CityHandle {
	constructor(props){

	}
	 getCity(req, res, next){
		try{
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
		}catch(err){
			res.send({
				name: 'ERROR_DATA',
				message: '获取数据失败',
			});
		}
	}
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
						name:'小張'
					},
					{
						id:4,
						name:'張三'
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
export default new CityHandle()