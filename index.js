
//getInput
function getInput(inputId){
    return document.getElementById(inputId)
}

//getDigit

function getDigit(num){
    if(num=="MC"){ 
        getInput('digit').innerText='0'
        getInput('result').innerText='0'
    }else if(num !='M+'){
        getInput('digit').innerText+=num
    }
          
}
//doCalculation
function doCalculation(){
    const stringArray=getInput('digit').innerText;
    
    //return eval(stringArray)
    return (new Function('return '+stringArray)())

}
    
getInput('key-pad').addEventListener('click',(event)=>{
    if(event.target.innerText !='='&& event.target.getAttribute('id')!='key-pad'){
        getDigit(event.target.innerText)
    }
    console.log(event.target)

})

getInput('equal').addEventListener('click',(event)=>{
    event.stopPropagation()
    getInput('result').innerText=doCalculation()
    
    //console.log("equal",event.target.innerText)
})
