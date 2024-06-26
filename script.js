function getInputValue() {
    let resultPrint = document.getElementById('result');
    let resultString = document.getElementById('p1');

    resultString.style.display = 'block';

    let heightInCM = document.getElementById('height').value;
    let weightInKG = document.getElementById('weight').value;

    if (String(heightInCM) === "" || String(weightInKG) === "") {
        resultPrint.style.color = 'red';
        resultPrint.style.fontWeight = 600;
        resultPrint.style.fontSize = '18px';
        resultPrint.innerHTML = 'Please ENTER your Height and Weight!';
        resultString.style.display = 'none';
    }else{
        let heightInMeter = heightInCM / 100;

        let bmi = weightInKG / (heightInMeter * heightInMeter);
    
        console.log(bmi.toFixed(2));

        resultPrint.style.color = 'black';
        resultPrint.style.fontWeight = 100;
        resultPrint.style.fontSize = '17px';
        
        resultPrint.innerHTML = `Your BMI is ${bmi.toFixed(2)}.`;
    }
}
