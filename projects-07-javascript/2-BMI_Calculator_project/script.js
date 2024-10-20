const forms = document.querySelector('form');

forms.addEventListener('submit',function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector(".height").value);
    const weight = parseInt(document.querySelector(".weight").value);
    const results = document.querySelector(".result");
    
    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML=`Please give valid height ${height}`;
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML=`Please give valid Weight ${weight}`;
    }
    else{
        const calculate = (weight/((height*height)/10000)).toFixed(2);
        results.innerHTML=`Your BMI: ${calculate}`;
    }
})