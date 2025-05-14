const mycheckbox = document.getElementById('mycheckbox');
const visabt = document.getElementById('visabt');
const masterbt = document.getElementById('masterbt');
const paypalbt = document.getElementById('paypalbt');

const mysubmit = document.getElementById('mysubmit');
const subresult = document.getElementById('subresult');
const paymentresult = document.getElementById('paymentresult');

mysubmit.onclick = function() {

    if(mycheckbox.checked){
        subresult.textContent = `You 're Subscribed`;
    }else {
        subresult.textContent = `You 're not Subscribed`;
    }

    if(visabt.checked) {
        paymentresult.textContent = `You are paying with Visa`;
    } else if(masterbt.checked) {
        paymentresult.textContent = `You are paying with MasterCard`;
    } else if(paypalbt.checked) {
        paymentresult.textContent = `You are paying with PayPal`;
    } else {
        paymentresult.textContent = `You have not Selected any mode of Payment`;
    }
}