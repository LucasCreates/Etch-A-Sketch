const grid = document.querySelector(".grid-screen");
const selectedSize = 16;



createGrid = () => {
for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.classList.add('cell');
    div.addEventListener('mouseover', function(event){
        event.target.style.backgroundColor = multipleColor();
    })
    grid.appendChild(div); 
}
};



const slider = document.querySelector("#slider");
const screenValue = document.querySelector("#value");

slider.addEventListener("input", function(){
	let val = document.getElementById("slider").value;
	screenValue.textContent = val;
	grid.setAttribute('style', `grid-template-columns: repeat(${val}, 2fr); grid-template-rows: repeat(${val}, 2fr); `);
	console.log(firstChild);
	for(let i = 0; i <= val*val; i++){
		const div = document.createElement('div');
		  div.classList.add('cell');
    	  div.addEventListener('mouseover', function(event){
          event.target.style.backgroundColor = multipleColor();
          })
		  grid.appendChild(div); 
	}

});


function myFunction(){
	squares.style.background = multipleColor();
}
function multipleColor(){
	color = Math.random().toString(16).slice(2,8);
	return ("#" + color) 
}

createGrid();
console.log(multipleColor());



