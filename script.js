/* =========================
   PIN LOCK
========================= */

const SECRET_PIN = "0708";

function checkPIN() {

    const enteredPIN = document.getElementById("pinInput").value;
    const pinScreen = document.getElementById("pinScreen");
    const pinError = document.getElementById("pinError");

    if (enteredPIN === SECRET_PIN) {

        pinScreen.style.opacity = "0";
        pinScreen.style.transition = "opacity 0.6s ease";

        setTimeout(() => {
            pinScreen.style.display = "none";
        }, 600);

    } else {

        pinError.textContent = "Wrong PIN. Try again ♡";

        document.getElementById("pinInput").value = "";

        document.getElementById("pinInput").animate(
            [
                { transform: "translateX(0)" },
                { transform: "translateX(-8px)" },
                { transform: "translateX(8px)" },
                { transform: "translateX(-5px)" },
                { transform: "translateX(0)" }
            ],
            {
                duration: 350
            }
        );
    }
}
/* =========================
   NAVIGATION
========================= */

function goTo(id) {

    const section =
        document.getElementById(id);

    section.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================
   GIFT
========================= */

function openGift() {

    const gift =
        document.querySelector(".gift");

    const message =
        document.getElementById("giftMessage");


    gift.classList.toggle("opened");


    if (gift.classList.contains("opened")) {

        message.innerHTML =
            "A little surprise, made especially for you. ♡";

        createPetals(15);

    } else {

        message.innerHTML =
            "Click the gift ♡";

    }

}


/* =========================
   FALLING FLOWERS
========================= */

function createPetal(amount = 1) {

    for (let i = 0; i < amount; i++) {

        const petal =
            document.createElement("div");

        petal.className =
            "petal";


        const flowers = [
            "🌸",
            "🌷",
            "✿",
            "❀"
        ];


        petal.innerHTML =
            flowers[
                Math.floor(
                    Math.random() *
                    flowers.length
                )
            ];


        petal.style.left =
            Math.random() * 100 + "vw";


        petal.style.fontSize =
            (12 + Math.random() * 18) + "px";


        petal.style.animationDuration =
            (4 + Math.random() * 5) + "s";


        petal.style.opacity =
            .4 + Math.random() * .6;


        document
            .getElementById("petals")
            .appendChild(petal);


        setTimeout(() => {

            petal.remove();

        }, 10000);

    }

}


/* Create falling petals */

setInterval(() => {

    createPetal();

}, 1200);


createPetal(10);