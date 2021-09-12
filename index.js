var timeblockContainer = document.querySelector(".container");
var timeblock;
var userData;
currentDate = moment().format( 'MMM Do YYYY' );
currentTime = moment().format( 'HH' );


function dateTimeUpd(){
    currentDay.innerHTML = currentDate;
    for (let i = 8; i < 19; i++ ) {
        const textElement = document.getElementById( 'block' + i.toString() );
        if ( i < currentTime ) {
            textElement.classList.add( "past" );
        } else if ( i == currentTime ) {
            textElement.classList.add( "present" );
        } else {
            textElement.classList.add( "future" );
        }
    }
}

function saveCalendarEvent( event ) {
    event.preventDefault();
    var hrSaveBtn = event.target.getAttribute( 'data-hour' );
    if ( hrSaveBtn != null && timeblock != undefined && userData != undefined ) {
        const hrBtn = hrSaveBtn.substr( 4,2 );
        const inputHr = timeblock.substr( 2,2 );
        if ( hrBtn === inputHr ) {
            localStorage.setItem( hrSaveBtn, userData );
        } else {
            window.alert( 'Nothing to add. Please add valid data and try again.' );
        }
    }
}

function userInput( event ) {
    event.preventDefault();
    timeblock = event.target.getAttribute( 'id' );
    userData = document.getElementById( timeblock ).value;
}

dateTimeUpd();
timeblockContainer.addEventListener( 'click', saveCalendarEvent );
addEventListener( 'change', userInput );
