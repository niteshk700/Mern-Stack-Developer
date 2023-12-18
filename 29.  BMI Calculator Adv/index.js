function bmiCalculator (weight, height) {
    var data= weight/(height*height);
    
    if(data<18.5){
        return ("Your BMI is "+ data+", so you are underweight.");
    }else if(data>18.5 && data<24.9){
        return ("Your BMI is "+ data+", so you have a normal weight.");
    }else{
        return ("Your BMI is "+ data+", so you are overweight.");
    }
    
    
    
}