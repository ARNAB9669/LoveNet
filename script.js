
localStorage.removeItem("loveNetPrivacyShown")


document.addEventListener("DOMContentLoaded", () => {

   

    // ==================== PRIVACY POPUP ====================
    const popup = document.getElementById("privacyPopup");
    const closeBtn = document.getElementById("closePrivacyPopup");

    if (!localStorage.getItem("loveNetPrivacyShown")) {
        popup.style.display = "block";
        localStorage.setItem("loveNetPrivacyShown", "true");
    }

    closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
    });

    // ==================== ENCODE / DECODE ====================
    const EI = document.getElementById("encodeInput");
    const EO = document.getElementById("encodeOutput");
    const DI = document.getElementById("decodeInput");
    const DO = document.getElementById("decodeOutput");
    const ECB = document.getElementById("encodeBtn");
    const DCB = document.getElementById("decodeBtn");

    ECB.addEventListener("click", async () => {
        if (!EI.value.trim()) {
            alert("Input is empty 😳");
            return;
        }
        if (EI.value.trim().length < 2) {
            alert("Not goonna work 😂");
            return;
        }

        EO.innerText = "Encoding... Please wait.";

        const res = await fetch("https://script.google.com/macros/s/AKfycbyrU82yXq4y2zjG4kS4INeAWOfjwhkpNJrsfrsW4aVSffAEvtr8K47D2tiwM8FLFl4KQw/exec", {
            method: "POST",
            body: JSON.stringify({
                mssg: EI.value.trim(),
                metod: 1
            })
        });

        const data = await res.json();
        EO.innerText = decodeURIComponent(data.result);
    });

    DCB.addEventListener("click", async () => {
        if (!DI.value.trim()) {
            alert("Input is empty 😳");
            return;
        }
        if (DI.value.trim().length < 2) {
            alert("Not goonna work 😂");
            return;
        }

        DO.innerText = "Decoding... Please wait.";

        const res = await fetch("https://script.google.com/macros/s/AKfycbyrU82yXq4y2zjG4kS4INeAWOfjwhkpNJrsfrsW4aVSffAEvtr8K47D2tiwM8FLFl4KQw/exec", {
            method: "POST",
            body: JSON.stringify({
                mssg: DI.value.trim(),
                metod: 2
            })
        });

        const data = await res.json();
        DO.innerText = decodeURIComponent(data.result);
    });


});