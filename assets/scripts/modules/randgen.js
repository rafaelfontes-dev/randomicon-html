import { getRandomInt } from "../lib/randomic.js";

const drawnNumbers = [];

const
    resultElement = document.getElementById(
        "randgen-result-value" ),

    valueRepeatCheckElement = document.getElementById(
        "randgen-can-repeat" ),

    minValueElement = document.getElementById(
        "randgen-min-input" ),

    maxValueElement = document.getElementById(
        "randgen-max-input" ),

    valueHistoryListElement = document.getElementById(
        "randgen-history-value-list" ),

    historySettingsDivElement = document.getElementById(
        "randgen-history-settings" ),

    historyValueSeparatorElement = document.getElementById(
        "randgen-history-value-separator" ),

    historyUseSpaceSeparatorElement = document.getElementById(
        "randgen-history-use-spaces" );

let clearHistoryFlag = false;

function canDrawsRepeatNumbers() {

    return valueRepeatCheckElement.checked;

}

function clearHistoryValues() {

    valueHistoryListElement.innerHTML = "";
    drawnNumbers.length = 0;

    clearHistoryFlag = false;
}

// adquire um array de números que vai de N a M (ex. range(1,3) = [1, 2, 3])
const range = (start, end) => 
    Array.from( { length: end - start + 1 }, (_, i) => start + i );

function getMinValueInputForDraw() { return parseInt( minValueElement.value ); }

function getMaxValueInputForDraw() { return parseInt( maxValueElement.value ); }

// ===== Randomic functions

function drawAndShowRandomNumber() {
    
    if( clearHistoryFlag ){

        clearHistoryValues();

    }

    let minValue = getMinValueInputForDraw();
    let maxValue = getMaxValueInputForDraw();

    if( minValue > maxValue ){

        let aux = maxValue;
        maxValue = minValue;
        minValue = aux;

    }

    let rnd;
    const minMaxRange = range( minValue, maxValue );

    do {

        rnd = getRandomInt( minValue, maxValue );

    } while(
        !canDrawsRepeatNumbers() &&
        drawnNumbers.includes( rnd ) &&
        ( drawnNumbers.length < minMaxRange.length )
    );

    let gotRandomNumber =
        !( !canDrawsRepeatNumbers() &&
        drawnNumbers.length >= minMaxRange.length );

    if( gotRandomNumber ) {
        
        drawnNumbers.push( rnd );
        resultElement.textContent = rnd;

        resultElement.style.transition = "none";
        resultElement.style.opacity = 0;

        setTimeout( () => {
            resultElement.style.transition = "opacity 200ms ease-in-out";
            resultElement.style.opacity = 1;
        }, 200 );
        
        let numSeparator = historyValueSeparatorElement.value;
        let useSpaceSeparator = historyUseSpaceSeparatorElement.checked;

        valueHistoryListElement.textContent +=
        ( resultElement.textContent + numSeparator + ( useSpaceSeparator ? " " : "" ) );
    
    }

}

function initRandgenEventListeners() {

    valueRepeatCheckElement.addEventListener( "change", (event) => {

        // se o checkbox de "Permitir repetição?" for desmarcado, limpa o histórico para
        // evitar conflitos!

        if( !event.target.checked ){
            clearHistoryFlag = true;
        }
    } );

    minValueElement.addEventListener( "change", (event) => {

        // qualquer mudança de valor deste campo limpa o histórico, caso esteja marcado
        // que ele não permita repetição

        if( !canDrawsRepeatNumbers ){
            clearHistoryFlag = true;
        }
    } );

    maxValueElement.addEventListener( "change", (event) => {

        // qualquer mudança de valor deste campo limpa o histórico, caso esteja marcado
        // que ele não permita repetição

        if( !canDrawsRepeatNumbers() ){
            clearHistoryFlag = true;
        }
    } );

    document.getElementById("randgen-button-clearhist").addEventListener( "click", () => {
        clearHistoryValues();
    } );

    document.getElementById("randgen-button-showsettings").addEventListener( "click", () => {
        let vis = historySettingsDivElement.style.visibility;

        historySettingsDivElement.style.visibility =
        ( vis === "visible" ? "hidden" : "visible" );
    } );

    document.getElementById("randgen-button-draw-number").addEventListener( "click", () => {
        drawAndShowRandomNumber();    
    } );

    document.getElementById("randgen-button-draw-sequence").addEventListener( "click", () => {

        // button function; it draws N numbers, from 'min' to 'max', and
        // inserts the results into the history of values

        let minValue = getMinValueInputForDraw();
        let maxValue = getMaxValueInputForDraw();

        if( minValue > maxValue ){
            let aux = maxValue;
            maxValue = minValue;
            minValue = aux;
        }

        const minMaxRange = range( minValue, maxValue );

        if( !canDrawsRepeatNumbers() && ( drawnNumbers.length >= minMaxRange.length ) ){
            clearHistoryValues();
        }

        for( let i = 0; i < minMaxRange.length; i++ ){
            drawAndShowRandomNumber();
        }

    } );

}

initRandgenEventListeners();