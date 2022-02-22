import '../scss/style.scss'

import { printError, printResult } from './printResult.js'
import { getDateDiff } from './getDateDiff.js'
import { switchTabs } from './switchTabs.js';
import { startTimer } from './startTimer.js';

switchTabs();

const calc = document.getElementById('datecalc');

calc.onsubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const firsDate = formData.get('firstDate');
    const secondDate = formData.get('secondDate');

    if (!firsDate || !secondDate) {
        printError('Oooooopppsss - введите обе даты!!!!');
    } else {
        const dateDiff = getDateDiff(firsDate, secondDate);
        printResult(dateDiff);
    }
}

const start = document.querySelector(".btn-start");

start.onclick = (event) => {
    event.preventDefault();
    startTimer();
}