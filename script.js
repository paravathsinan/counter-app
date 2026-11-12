const countDisplay = document.getElementById('count')
const increaseBtn = document.getElementById('increase')
const decreaseBtn = document.getElementById('decrease')
const resetBtn = document.getElementById('reset')
let count = 0;
let holdInterval ;
function updateCounter(){
    countDisplay.textContent = count;
    if(count>0){
        countDisplay.style.color = "green"
    }
    else if(count<0){
        countDisplay.style.color = "red"
    }
    else{
        countDisplay.style.color = "black"
    }
}

increaseBtn.addEventListener('mousedown', function(){
        count++
        updateCounter()
        holdInterval = setInterval(function(){
            count++
            updateCounter()
    },100)
})
decreaseBtn.addEventListener('mousedown', function(){
    count--
    updateCounter()
    holdInterval = setInterval(function(){
        count--
        updateCounter()
    }, 100)
})

window.addEventListener('mouseup', function(){
    clearInterval(holdInterval)
})



    // increaseBtn.addEventListener('click', function(){
    //     count++
    //     updateCounter()
    // })
    // decreaseBtn.addEventListener('click', function(){
    //     count--
    //     updateCounter()
    // })
    resetBtn.addEventListener('click', function(){
        count = 0
        updateCounter()
    })