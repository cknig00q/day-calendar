var now = moment();

$('#currentDay').text(now)


/*
.past-hour {
    color: gray
}

.current-hour {
    color: red
}

.future-hour {
    color: green
}
*/

function getTextBoxClass(hourid) {
    if (hourid < now.hour()) {
        return 'past-hour'
    } 
    if (hourid == now.hour()) {
        return 'current-hour'
    } 
    return 'future-hour'
}

function hourRowElement(hourid) {
    const hourText = moment().hour(hourid).format('h A')
    const textBoxClass = getTextBoxClass(hourid);
    return `<div class='time-block'>
    <div>${hourText}</div>
    <div><input type="text" id="userinput-${hourid}" class="${textBoxClass}"></div>
    <div><button type="button" id="save-button-${hourid}">Save!</button></div>
    </div>`
}

function saveButtonHandler(hourid) {
    return function() {
        localStorage.setItem(`${hourid}`, $(`#userinput-${hourid}`).val() );
    }
}

for (i = 9; i <= 17; i++) {
    $('.container').append(hourRowElement(i));
    $(`#save-button-${i}`).click(saveButtonHandler(i))
    $(`#userinput-${i}`).val(localStorage.getItem(`${i}`))
}


