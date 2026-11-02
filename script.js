
const gift = document.getElementById("gift");
const openGift = document.getElementById("openGift");
const surprise = document.getElementById("surprise");
const celebrate = document.getElementById("celebrate");

openGift.addEventListener("click", function() {

    gift.classList.add("open");

    openGift.style.display = "none";

    setTimeout(function() {
        surprise.classList.remove("hidden");

        surprise.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        createHearts(25);

    }, 900);

});

celebrate.addEventListener("click", function() {

    createHearts(60);

    celebrate.innerText = "🎉 Happy Birthday Harshu! 🎉";

});

function createHearts(number) {

    const symbols = ["💗", "💖", "✨", "🌸", "🦋", "⭐"];

    for (let i = 0; i < number; i++) {

        const heart = document.createElement("div");

        heart.className = "heart";

        heart.innerText =
            symbols[Math.floor(Math.random() * symbols.length)];

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";

        heart.style.animationDuration =
            (3 + Math.random() * 3) + "s";

        document.body.appendChild(heart);

        setTimeout(function() {
            heart.remove();
        }, 6000);

    }
}
