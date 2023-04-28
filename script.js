document.addEventListener("DOMContentLoaded", function(){
	createGrid(16)
	
	const select = document.querySelector(".select-btn");

	select.addEventListener('click', function(){
		
	 	let size = getSize();
	 	createGrid(size);
	});


	
})

function getSize(){
	
	input = prompt("What will be the size? ");
	
	let message = document.querySelector("#message");
	if (input > 0 && input < 100 ){
		message.textContent = `You have chosen ${input}`;
		console.log("provide a number");
	}
	else if (input < 0 || input > 100){
		message.textContent = "Provide a number between 0 and 100";
		console.log("provide a number between")
	}
	else {
		message.textContent = "That is not a valid option";
	}
	return input;
	
}


function createGrid(size){
		let board = document.querySelector(".board");
	    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

	    let numDivs = size * size

	    for(let i = 0; i < numDivs; i++){
	    	let div = document.createElement("div");
	    	div.style.backgroundColor = "#ededed";
	    	
	    	board.insertAdjacentElement("beforeend", div);
	    	div.addEventListener("mouseover", (event) =>{
	    		event.target.style.backgroundColor ="black"
	    	})
	    }
		
};




