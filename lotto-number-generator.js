// v3

const w = new ListWidget()

let numbers = Array.from({length:49}, (v,i) => i+1)
let randomNumbers= []
      
function getRandom(list) {return list[Math.floor(Math.random() * list.length)];}

function showRandomNumbers(){
  for(var i = 0; i < 6; i++){
  	number = getRandom(numbers);
  	console.log(number);
  	randomNumbers.push(number);
  	numbers.splice(numbers.indexOf(number),1)
    }
  randomNumbers = randomNumbers.sort((a, b) => a - b)
  console.log(randomNumbers);
  }
  
showRandomNumbers()



w.addSpacer()

let n = 0

for (var i = 0; i < 3; i++) {
  let a = w.addStack()
  a.addSpacer()
  	for (var x = 0; x < 2; x++) {
  		a.addText(randomNumbers[n].toString())
  		n++
  		a.addSpacer()
	}
  w.addSpacer()
}



Script.setWidget(w)
Script.complete()
w.presentSmall()
