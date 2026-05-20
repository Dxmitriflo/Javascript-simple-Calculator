const result = document.getElementById('result');

function appendToResult(input){
    result.value += input ;

}

function clearResult(){
    result.value = "";

}

function calculate(){
    try{
        result.value = eval(result.value);
    }
    catch(error){
        result.value = "Error" ;
    }
  
}

const jsonstring = JSON.stringify(result,result.value)
