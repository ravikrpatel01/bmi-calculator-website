function getInputValue() {
    let heightInCM = document.getElementById('height').value;

    let weightInKG = document.getElementById('weight').value;

    console.log(heightInCM);
    console.log(weightInKG);

    let heightInMeter = heightInCM / 100

    let bmi = weightInKG / (heightInMeter * heightInMeter);

    console.log(bmi.toFixed(2));

    let resultPrint = document.getElementById('result');

    resultPrint.innerHTML = `Your BMI is ${bmi.toFixed(2)}.`;
}

