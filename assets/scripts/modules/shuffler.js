import { getRandomIntArray } from "../lib/randomic.js";

const   interactiveListElement =
            document.getElementById( "shuffler-value-list" ),
        shufflerShuffledListElement =
            document.getElementById( "shuffler-shuffled-value-list" ),
        shufflerCheckboxDrawOneAtATime =
            document.getElementById( "shuffler-one-at-a-time" );

// este template abriga os itens interativos inseridos pelo usuário na lista HTML dinâmica
// de valores que serão sorteados

const shuffleItemHTMLTemplate = `
    <div class="shuffler-value-line">
        <button class="suffler-button-item-remover">X</button>
        <input type="text" class="suffler-item-text-content">
    </div>
`;

const   shuffledValuesArray = [];

let     rndListIndexOrder   = [],
        currentRndItemIndex = 0,
        clearShuffledListFlag = false;

function clearShuffledList() {
    
    shufflerShuffledListElement.innerHTML = ""

    clearShuffledListFlag = false;

    shuffledValuesArray.length = 0;
    rndListIndexOrder.length = 0;
    currentRndItemIndex = 0;

}

function shuffleOneAtATime() {
    return shufflerCheckboxDrawOneAtATime.checked;
}

function initListShufflerEventListeners() {

    interactiveListElement.addEventListener( "change", (event) => {

        clearShuffledListFlag = true;

    } );

    shufflerCheckboxDrawOneAtATime.addEventListener( "change", (event) => {

        if( event.target.checked ) {
            clearShuffledListFlag = true;
        }

    } );

    document.getElementById("shuffler-button-add-item").addEventListener( "click", () => {
        
        const newListItem = document.createElement("div");
        newListItem.innerHTML = shuffleItemHTMLTemplate;

        newListItem.getElementsByClassName("suffler-button-item-remover").item(0)
        .addEventListener( "click", ( event ) => {

            // se este botão for pressionado, deleta o elemento inteiro da lista interativa

            const parentDiv = event.currentTarget.parentElement;

            if( parentDiv ) { parentDiv.remove(); }

        } );

        newListItem.getElementsByClassName("suffler-item-text-content").item(0)
        .addEventListener( "change", ( event ) => {
            
            // qualquer mudança de valores da lista interativa obriga limpar a lista
            // sorteada

            clearShuffledListFlag = true;
            
        } );

        interactiveListElement.appendChild( newListItem );
    } );

    document.getElementById("shuffler-button-clear").addEventListener( "click", () => {

        // este botão apaga a lista interativa inteira

        interactiveListElement.innerHTML = "";
        listItems.length = 0;

    } );

    document.getElementById("shuffler-button-shuffle").addEventListener( "click", () => {

        // este botão é responsável por mostrar os itens da lista sorteada

        if( clearShuffledListFlag ) {

            // limpa a lista sorteada se já estava marcado para fazer isso

            clearShuffledList();

        }

        const shuffledListElement = interactiveListElement.getElementsByClassName(
            "suffler-item-text-content");

        const addValueToShuffledList = ( indexFromShuffledArray ) => {
            
            // uma função local que adiciona um elemento HTML na lista de valores sorteados
            // utilizando um index do array interno 'rndListIndexOrder', onde abriga a ordem
            // aleatória que os elementos da lista sorteada terá

            const newListItem = document.createElement("li");
            let listValue = shuffledListElement.item(
                rndListIndexOrder[ indexFromShuffledArray ]
            );
            newListItem.textContent = listValue.value;

            shuffledValuesArray.push( listValue.value );
        
            shufflerShuffledListElement.appendChild( newListItem );
        };

        if( shuffledListElement.length > 0 ) {

            if( shuffleOneAtATime() ) {

                if( rndListIndexOrder.length < 1 ) {

                    rndListIndexOrder = getRandomIntArray(
                        0, shuffledListElement.length - 1
                    );

                }

                if( currentRndItemIndex < shuffledListElement.length ) {
                    
                    addValueToShuffledList( currentRndItemIndex );

                    currentRndItemIndex++;
                }

            } else {

                shufflerShuffledListElement.innerHTML = "";

                rndListIndexOrder = getRandomIntArray(
                    0, shuffledListElement.length - 1
                );

                for( let i = 0; i < shuffledListElement.length; i++ ) {
                    addValueToShuffledList( i );
                }

            }
        }

    } );

    document.getElementById("shuffler-button-clear-shuffle").addEventListener( "click", () => {

        // limpa todos os elementos HTML da lista sorteada

        clearShuffledList();

    } );

}

initListShufflerEventListeners();