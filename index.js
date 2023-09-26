let channel = {"2":"blue","4":"green","3":"red","1":"yellow","wrong":"wrong"}

let pattern = []

let start = false

let level = 1

let actualIndex = 0


$(".button").click(function(){
    let pressedValue = this.classList[1]
    playSound(channel[pressedValue])
    if(start){
        checkAnswer(pressedValue)    
    }
   //console.log(this.classList[1])
})

function startMobile(){
    start = true
    $("h1").removeClass("animate")
    let randomValue = Math.floor(Math.random()*4)+1
    pattern.push(randomValue)  
    patternDisplay(randomValue)    
    $("h1").text("Game Started")
    setTimeout( ()=> {  $("h1").text(`Level ${level}`)}
    ,1000
    )
}


$(document).keypress(function(){
    start = true
    $("h1").removeClass("animate")
    let randomValue = Math.floor(Math.random()*4)+1
    pattern.push(randomValue)  
    patternDisplay(randomValue)    
    $("h1").text("Game Started")
    setTimeout( ()=> {  $("h1").text(`Level ${level}`)}
    ,1000
    )


})


function playSound(id){
    let audio = new Audio("./sounds/"+id+".mp3")
    audio.play()

}

function patternDisplay(value){
    let object = "."+value
    playSound(channel[value])
    $(object).addClass("pressed")
    setTimeout(function(){
        $(object).removeClass("pressed")
    },150)
    }

function patternReplay(){
    for(let e = 0;e<pattern.length;e++){
        setTimeout(()=>{
            patternDisplay(pattern[e])
            },800)
    }
    
}

function checkAnswer(inputValue){
        if(inputValue == pattern[actualIndex]){
            actualIndex++
            let randomValue = Math.floor(Math.random()*4)+1
            console.log(actualIndex,pattern.length)
            if(actualIndex == pattern.length){
                setTimeout(()=>{
                pattern.push(randomValue)
                console.log(pattern)
                patternDisplay(randomValue)
                },800)
            level++
            setTimeout( ()=> {  $("h1").text(`Level ${level}`)},100)
            
            actualIndex = 0
            }
            
    
        }else{
            playSound("wrong")
            pattern = []
            $("h1").text("You Lose")
            start = false
            actualIndex = 0
            level = 1
        }
    
}

