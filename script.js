function getInputValue() {
    let resultPrint = document.getElementById('result');

    document.getElementById('result-text').style.display = 'inline';

    let heightInCM = document.getElementById('height').value;
    let weightInKG = document.getElementById('weight').value;

    if (String(heightInCM) === "" || String(weightInKG) === "") {
        resultPrint.style.color = 'red';
        resultPrint.style.fontWeight = 600;
        resultPrint.style.fontSize = '18px';
        console.log('Hii');
        resultPrint.innerHTML = 'Please ENTER your Height and Weight!';
        document.getElementById('result-text').style.display = 'none';
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
