const App = (() => {
    const htmlElements = {
        buttonYes: document.querySelector('#btn-yes'), 
        buttonNo: document.querySelector('#btn-no'),   
        messageText: document.getElementById("textoDiferente") 
    }
    
    const bindEvents = {
        onInputChange() {
            htmlElements.buttonYes.addEventListener("click", () => {
                showAlertWithGif();
                hideButtons();
            });

            htmlElements.buttonNo.addEventListener("click", () => {
                const currentHeight = parseInt(window.getComputedStyle(htmlElements.buttonYes).height);
                const currentWidth = parseInt(window.getComputedStyle(htmlElements.buttonYes).width);
                const newHeight = currentHeight + 20; 
                const newWidth = currentWidth + 20;   
                
                if (newHeight <= 300 && newWidth <= 300) {
                    htmlElements.buttonYes.style.height = newHeight + "px";
                    htmlElements.buttonYes.style.width = newWidth + "px";
                }

                // Mensajes aleatorios
                const messages = [
                    "¿Estás segura?", "Estas completamente segura?..", 
                    "Le daré like a tus videos de maquillaje", "Por favor?", 
                    "Me encantas", "perdoname 😔", 
                    "Deja de darle click ahí", "Te mandaré un unpalumpa", 
                    "Ya perdoname!! 😐", "Te compraré una cangreburguer", 
                    "No lo dire mas 😡", "Deja de dar click ahí", 
                    "Tamara mala 🥺", "Ya perdoname", 
                    "Estaré siempre te sientas mal", "Acepto que me equivoque y que soy muy celoso 🫠", "Creo que soy como medio bipolar yo tambien xD",
                    "No volvera a pasar 🫠", "Brian Malo! 😡",
                    "Compartiré tus publicaciones en mis historias pues", "Ya me perdonaste?"
                ];

                const index = parseInt(htmlElements.buttonNo.getAttribute("data-index")) || 0;
                if (index < messages.length) {
                    htmlElements.messageText.innerText = messages[index];
                    htmlElements.buttonNo.setAttribute("data-index", index + 1);
                } else {
                    htmlElements.messageText.innerText = "Porfis";
                }
            });
        }
    }

    function showAlertWithGif() {
        const gifUrl1 = "https://media.tenor.com/4yEuW6bbRo0AAAAC/gato.gif";
        const gifUrl2 = "https://media1.giphy.com/media/W1hd3uXRIbddu/giphy.gif";

        const img1 = document.createElement("img");
        img1.src = gifUrl1;
        img1.style.width = "200px";
        img1.style.height = "200px";
        img1.style.position = "fixed";
        img1.style.top = "30%";
        img1.style.left = "50%";
        img1.style.transform = "translate(-50%, -50%)";
        img1.style.zIndex = "9999";
        img1.style.borderRadius = "0";
        img1.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.3)";
        document.body.appendChild(img1);
        
        const title = document.createElement("div");
        title.textContent = "Gracias mi reina";
        title.style.position = "fixed";
        title.style.top = "51%";
        title.style.left = "50%";
        title.style.transform = "translate(-50%, -50%)";
        title.style.zIndex = "9999";
        title.style.fontSize = "24px";
        title.style.fontFamily = "Calibri, sans-serif";
        title.style.fontWeight = "bold";
        document.body.appendChild(title);

        const img2 = document.createElement("img");
        img2.src = gifUrl2;
        img2.style.width = "200px";
        img2.style.height = "200px";
        img2.style.position = "fixed";
        img2.style.top = "72%";
        img2.style.left = "50%";
        img2.style.transform = "translate(-50%, -50%)";
        img2.style.zIndex = "9999";
        img2.style.borderRadius = "0";
        img2.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.3)";
        document.body.appendChild(img2);

        setTimeout(() => {
            document.body.removeChild(img1);
            document.body.removeChild(title);
            document.body.removeChild(img2);
            alert("Grashias");
        }, 3000);
    }

    function hideButtons() {
        document.getElementById("buttonContainer2").style.display = "none";
        document.getElementById("buttonContainer").style.display = "none"; 
    }

    bindEvents.onInputChange();
})();
