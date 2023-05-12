// form submit: to send an email to me
function sendMail() {
    var link = "mailto:ladyknight564@hotmail.com?cc="
    + encodeURI(document.getElementById('mEmail').value) + "&subject=" + encodeURI("Hello my name is \ ")
    + encodeURI(document.getElementById('MessengerName'))
    + encodeURI("\  and I want to talk to you about \ ") + encodeURI(document.getElementById('mSubject').value)
    + "&body=" + encodeURI(document.getElementById('Message').value);
    console.log(link);
    window.location.href = link;

}
