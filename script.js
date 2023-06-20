function volume_sphere() {
    //Write your code here
	event.preventDefault();
	let radius=document.querySelector("#radius");
	let volumeVal=document.querySelector("#volume");
	let radiusVal=parseFloat(radius.value);
	let val=(4/3)*Math.PI*Math.pow(radiusVal,3);

	volumeVal.value=val;
	
	
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
