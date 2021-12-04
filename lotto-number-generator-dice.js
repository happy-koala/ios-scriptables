// v1

const w = new ListWidget()

w.borderWidth = 50
w.borderColor = new Color('#ffffff')

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

let a = w.addStack()
a.addSpacer()
a.addText(randomNumbers[0].toString())
a.addSpacer()
a.addText(randomNumbers[1].toString())
a.addSpacer()

w.addSpacer()

let b = w.addStack()
b.addSpacer()
b.addText(randomNumbers[2].toString())
b.addSpacer()
b.addText(randomNumbers[3].toString())
b.addSpacer()

w.addSpacer()

let c = w.addStack()
c.addSpacer()
c.addText(randomNumbers[4].toString())
c.addSpacer()
c.addText(randomNumbers[5].toString())
c.addSpacer()

w.addSpacer()

Script.setWidget(w)
Script.complete()
w.presentSmall()
