//压缩使用
var webpack = require('webpack');
//抽离
var ET = require('extract-text-webpack-plugin');

module.exports = {
	//不写./会报错
	entry: __dirname + '/src/app.js',
	output: {
		//__dirname:当前文件夹
		path: __dirname + '/dist/',
		//filename:'bundle-[hash].js'
		filename: 'bundle.js'
	},
	devtool:'source-map',
	module:{
		loaders:[
			{
				test: /\.css$/,
				loader: 'style!css'
			}
			,{
				test:/\.js$/,
				loader:'babel?presets[]=es2015'
				//loader: 'babel',
				/*query:{
					"presets:['es2015']"
				}*/
			}
			,{
				test:/\.scss$/,
				//loader:'style!css!sass'
				loader:ET.extract('style','css!sass')
			},
			{
				test:/\.html$/,
				loader:'string'
			}
		]
	},
	
	devServer:{
		contentBase: __dirname + '/dist',
		port:8080,
		host:'localhost',
		proxy:{
			'/api':{
				target:'http://localhost:9000',
				pathRewrite:{
					'^/api':''
				}
			}
		}
	},
	
	plugins:[
		//new webpack.optimize.UglifyJsPlugin(),
		new ET('bundle.css')
	]
	
}
