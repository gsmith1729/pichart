data={
	lab:[200,"red"],
	con:[300,"blue"],
	snp:[50,"yellow"],
	ld:[50,"orange"]
}
total=0
radius=40
for (i in data){
	total+=data[i][0]
}
pie=document.getElementById("chart")
rt=0
for (i in data){
	pie.innerHTML+=String.raw`<circle cx="200" cy="200" r="`+radius+String.raw`" stroke-width="20" fill="white" stroke="`+data[i][1]+String.raw`"
	stroke-dasharray="`+(Math.PI*2*radius)+String.raw`" stroke-dashoffset="`+(Math.PI*2*radius*(1-data[i][0]/total))+String.raw`" transform="rotate(`+
	(rt*360/total)+String.raw`,200,200)"><title>`+i+":"+data[i][0]+String.raw`</title></circle>`
	rt+=data[i][0]
}
pie.innerHTML+=String.raw`<circle cx="200" cy="200" r="40" stroke-width="0" fill="white"></circle>`
pie.innerHTML+=String.raw`<circle cx="200" cy="200" r="40" stroke-width="20" fill="white" id="cover" stroke="white "
stroke-dasharray="`+(Math.PI*2*radius)+String.raw`"></circle>`
function upangle(){
	document.getElementById("cover").style.strokeDashoffset-=2
}
setInterval(upangle,20)
