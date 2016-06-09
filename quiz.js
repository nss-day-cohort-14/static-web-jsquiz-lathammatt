//get input from height, convert to number
//get character
//set listeners for return key and button, activate function
//set alert if either input is blank
//console.log the tree based on input

var height = document.getElementById("height");

var leaves = document.getElementById("char");

var button = document.getElementById("grow");






function objectIfy (){
	var treeObj = {
		size: document.getElementById("height").value,
		wood: document.getElementById("char").value
	}
	tree(treeObj);		
		// console.log("object made",treeObj);
};



function tree(treeObj){
	var space = " ";
	var length = treeObj.size;
	var matter = treeObj.wood;
	var treeArray = [matter];
	for (var i = 0; i < length; i++) {
		treeArray.unshift(space);
	}
		var treeString = treeArray.join("")
		console.log(treeString);
		
	for (var i = 0; i < length; i++) {
		treeArray.push(matter);
		treeArray.push(matter);
		treeArray.shift(space);
		var treeString = treeArray.join("")
		console.log(treeString);
	}	
	
};





height.addEventListener("keyup", function(event){
	if (event.keyCode === 13){
		var size = height.value;
		var wood = leaves.value;
		if (size < 1 || wood == ''){
			alert("Height must have a number. Character must be one symbol");
		} else {
			 objectIfy();
			 // console.log("height enter process");
		};
	};	
});


leaves.addEventListener("keyup", function (event){
	if (event.keyCode === 13){
		var size = height.value;
		var wood = leaves.value;
		if (size < 1 || wood == ''){
			alert("Height must have a number. Character must be one symbol");
		} else {
		 	objectIfy();
		    // console.log("char enter process");

		};
	};	
});


button.addEventListener("click", function buttonPress(){
	var size = height.value;
	var wood = leaves.value;
		if (size < 1 || wood == ''){
			alert("Height must have a number. Character must be one symbol");
	} else {
		 objectIfy();
		 // console.log("button process");
	};
});



















