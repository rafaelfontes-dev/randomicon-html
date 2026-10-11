const buttonsShowFunctionality = [];

const functionalityDivs = document.getElementsByClassName( "functionality-div" );

const numFunctionalities = functionalityDivs.length;

function initNavigationButtons() {

    for( let i = 0; i < numFunctionalities; i++ ) {
        buttonsShowFunctionality.push(
            document.getElementById( "btn-show-functionality-div-" + (i+1) )
        );

        buttonsShowFunctionality[i].addEventListener( "click", () => {
            let divElement = null;
            for( let j = 0; j < numFunctionalities; j++ ){
                divElement =
                    document.getElementsByClassName( "functionality-div" ).item( j );
                divElement.style.display = ( i == j ? "flex" : "none" );
            }
        } );
    }

}

initNavigationButtons();