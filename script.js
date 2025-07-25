document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("animeInput");
    const button = document.getElementById("searchButton");

    button.addEventListener("click", function () {
        const animeName = input.value.trim();

        if (animeName) {
            alert("You searched for: " + animeName);
        } else {
            alert("Please type an anime name.");
        }
    });
});