const calBtn = document.getElementById('calBtn');

const input = document.getElementById('input');

let breakDownArray = [];

let el = document.getElementById('letter');

const falseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];



const letters = {
    א: 1,
    ב: 2,
    ג: 3,
    ד: 4,
    ה: 5,
    ו: 6,
    ז: 7,
    ח: 8,
    ט: 9,
    י: 10,
    כ: 20,
    ך: 20,
    ל: 30,
    מ: 40,
    ם: 40,
    נ: 50,
    ן: 50,
    ס: 60,
    ע: 70,
    פ: 80,
    ף: 80,
    צ: 90,
    ץ: 90,
    ק: 100,
    ר: 200,
    ש: 300,
    ת: 400,
    ' ': 0,
};

input .oninput = () => {

}

calBtn .onclick = () => {
    el .innerHTML = '';

    breakDownArray = [];

    let theValue = input.value;

    let split = theValue.split('');


    console.log(split)


    let results = 0;


    for (let i = 0; i < split.length; i++) {

        results += letters[split[i]];

        breakDownArray .push(split[i] + ' = ' + letters[split[i]])

        let newPara = document.createElement('p');

        newPara .innerHTML = breakDownArray[i]

        el.appendChild(newPara);
    }

    //result 
    document.getElementById('results') .innerHTML = 'Result: ' + results

    //breakdown
    document.getElementById('breakDown') .style = 'display: block';
}

input .oninput = () => {
    for (let i = 0; i < falseLetters.length; i++) {
        if (input.value === falseLetters[i]){
            alert('Only works with hebrew letters')
            input.value = '';
        } 
    }
}