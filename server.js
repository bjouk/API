var express=require('express')
var app=express()
function treatDate(date){
	var month=['January','February','March','April','May','June','July','August','September','October','November','December']
	return month[date.getMonth()]+ ' '+date.getDate()+', '+date.getFullYear()
	

}
app.get('/:DATE',function(req,res){
	if(req.params.DATE==Number.parseInt(req.params.DATE)){
		var date= new Date(Number.parseInt(req.params.DATE)*1000)
	}
	else{
		var date= new Date(req.params.DATE)
	}
	console.log(date)
	if(date!='Invalid Date'){
		res.json({'unix':date.getTime(),'natural':treatDate(date)})
	}
	else{
		res.json({'unix':null,'natural':null})
	}
})
app.listen(8080)