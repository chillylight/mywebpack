module.exports = {
    //入口文件
    entry : {
    	mian:__dirname+'/src/script/main.js',
    	a:__dirname+'/src/script/a.js'
    },
    output : {
        filename : '[name]-[hash].js',//输出文件名
        path : __dirname + '/dist/js'//输出文件路径
    },
}