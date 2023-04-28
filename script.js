document.addEventListener("DOMContentLoaded", function(){
	createGrid(16)
	console.log("test")
})

function createGrid(size){
		let board = document.querySelector(".board");
	    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
	    let numDivs = size * size

	    for(let i = 0; i < numDivs; i++){
	    	let div = document.createElement("div");
	    	div.style.backgroundColor = "#ededed";
	    	div.style.border = "1px solid black"
	    	board.insertAdjacentElement("beforeend", div);
	    }
	
};




// const slider = document.querySelector("#slider");
// const screenValue = document.querySelector("#value");

// slider.addEventListener("input", function(){
// 	let val = document.getElementById("slider").value;
// 	screenValue.textContent = val;
// 	grid.setAttribute('style', `grid-template-columns: repeat(${val}, 2fr); grid-template-rows: repeat(${val}, 2fr); `);
// 	console.log(firstChild);
// 	for(let i = 0; i <= val*val; i++){
// 		const div = document.createElement('div');
// 		  div.classList.add('cell');
//     	  div.addEventListener('mouseover', function(event){
//           event.target.style.backgroundColor = multipleColor();
//           })
// 		  grid.appendChild(div); 
// 	}

// });


// function myFunction(){
// 	squares.style.background = multipleColor();
// }
// function multipleColor(){
// 	color = Math.random().toString(16).slice(2,8);
// 	return ("#" + color) 
// }

// createGrid();
// console.log(multipleColor());



