console.log('Calcolo del Prezzo del Biglietto')

//collego il form HTML al mio file JS

const formElement = document.getElementById('ticketform')

/* creo gli elements collegati ai labels del form
dal quale successivamente dovrò acquisire i valori inseriti
dall'utente durante la compilazione */

const distanceElement = document.getElementById('distance')

const ageElement = document.getElementById('age')

/*dichiaro la constante collegata a dove vorrò
stampare il prezzo finale del biglietto
visibile all'utente */

const ticketFinal = document.getElementById('biglietto')

//aggiungo evento di ascolto al form 'submit' e blocco l'invio automatico del form

formElement.addEventListener('submit', function (event) {

    event.preventDefault()

    //acquisisco i values inseriti dall'utente per calcolare il prezzo del biglietto

    const distance = distanceElement.value

    const age = ageElement.value

    //calcolo il prezzo del biglietto senza sconti

    ticketDraft = (distance * 0.21).toFixed(2)

    //definisco la variabile del prezzo senza sconto

    const ticketPrice = ticketDraft

    /*inserisco le condidizioni di scontistica sul biglietto
    in base all'età inserita dall'utente nel form */

    if (age >= 65) {
        ticketPrice = ticketDraft - (ticketDraft / 100 * 40)
    }

    else if (age <= 18) {
        ticketPrice = ticketDraft - (ticketDraft / 100 * 20)
    }

    //stampo in output sul foglio HTML il risultato finale

    ticketFinal.innerHTML = '€ ' + ticketPrice


})
