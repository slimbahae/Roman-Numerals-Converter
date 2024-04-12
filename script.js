function convert() {
    let number=document.getElementById("number").value;
    if (number === "") {
        document.getElementById("output").textContent = "Please enter a valid number";
    } else if (number < 1) {
        document.getElementById("output").textContent = "Please enter a number greater than or equal to 1";
    } else if (number > 3999) {
        document.getElementById("output").textContent = "Please enter a number less than or equal to 3999";
    } else {
        document.getElementById("output").textContent = convertToRoman(number);
    }
}


function convertToRoman(num) {
    var romanNumeral = "";
    var romanNumerals = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    for (let key in romanNumerals) {
        while (num >= romanNumerals[key]) {
            romanNumeral += key;
            num -= romanNumerals[key];
        }
    }

    return romanNumeral;
}