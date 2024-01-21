document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("myForm").addEventListener("submit", function (event) {
        event.preventDefault();
        SendMail();
    });

    // Ottenere tutti gli elementi h3 delle FAQ solo se non sono già stati ottenuti
    const faqTitles = document.querySelectorAll('.contact .row .faq .box h3');
    if (faqTitles) {
        // Aggiungere l'evento di clic a ciascun titolo delle FAQ
        faqTitles.forEach(faqTitle => {
            faqTitle.addEventListener('click', () => {
                // Ottenere il genitore dell'elemento h3 (la casella delle FAQ)
                const faqBox = faqTitle.parentElement;

                // Aggiungere o rimuovere la classe 'active' per mostrare o nascondere il contenuto
                faqBox.classList.toggle('active');
            });
        });
    }
});

function SendMail() {
    var params = {
        from_name: document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        number: document.getElementById("number").value,
        richiamare: document.getElementById("richiamare").value,
        message: document.getElementById("msg").value
    };

    emailjs.send("service_9f61txk", "template_sx8rlqg", params).then(
        function (res) {
            alert("Email inviata correttamente");
            document.getElementById("fullName").value = '';
            document.getElementById("email_id").value = '';
            document.getElementById("number").value = '';
            document.getElementById("richiamare").value = '';
            document.getElementById("msg").value = '';
        },
        function (error) {
            console.log("Errore nell'invio dell'email:", error);
            alert("Si è verificato un errore nell'invio dell'email. Controlla la console per i dettagli.");
        }
    );
}
