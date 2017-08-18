let baseUrl = ''; 
let routerMode = 'history';
let baseImgPath = 'http://images.cangdu.org/';

if (process.env.NODE_ENV == 'development') {
	//baseUrl = 'http://cangdu.org:8001';
}else{
	baseUrl = 'http://cangdu.org:8001';
}

export {
	baseUrl,
	routerMode,
	baseImgPath
}