function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
        var data=[];
        
        if(n===1){
            data.push(0);
        }
        else if(n===2){
            data.push(0);
            data.push(1);
        }else{
             data.push(0);
            data.push(1);
            for(var i=2;i<n;i++){
                data.push(data[i-1]+data[i-2]);
            }
        }
        
        
        return data;
        
        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
    }
    
    