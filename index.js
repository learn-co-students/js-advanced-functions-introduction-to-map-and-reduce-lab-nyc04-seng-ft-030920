// Your code here


function mapToNegativize(sourceArray){
      

      for(var i = 0; i < sourceArray.length; i++){
        
       sourceArray[i] =  sourceArray[i] * (-1)


      }

      return sourceArray


}

function mapToNoChange(sourceArray){
      

    for(var i = 0; i < sourceArray.length; i++){
      
     sourceArray[i] =  sourceArray[i] 


    }

    return sourceArray


}

function mapToDouble(sourceArray){
      

    for(var i = 0; i < sourceArray.length; i++){
      
     sourceArray[i] =  sourceArray[i] * 2


    }

    return sourceArray


}

function mapToSquare(sourceArray){
      

    for(var i = 0; i < sourceArray.length; i++){
      
     sourceArray[i] =  sourceArray[i] ** 2


    }

    return sourceArray


}




function reduceToTotal(sourceArray , startingPoint=0){

   

    for(var i = 0; i < sourceArray.length; i++){
    
      startingPoint  =  startingPoint + sourceArray[i] 
 
 
     }

     return startingPoint
}

function reduceToAllTrue(sourceArray , startingPoint=0){
       
      var i = 0 
   
      while(i < sourceArray.length){
         
           if(!sourceArray[i]){
               return false
           }

          i++

      }

      return true

}

function reduceToAnyTrue(sourceArray , startingPoint=0){
       
    var i = 0 
 
    while(i < sourceArray.length){
       
         if(sourceArray[i]){
             return true
         }

        i++

    }

    return false

}