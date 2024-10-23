document.addEventListener('DOMContentLoaded', function() {
    let laugh = new Audio('/sounds/evil-laugh-89423.mp3');
    let contentContainer = document.getElementsByClassName("content-container")[0]

        try {
            let evilLaugh = laugh.play();
    
            evilLaugh.then(() => {
                contentContainer.style.backgroundColor = "rgb(44, 6, 6)";
            }).then(setTimeout(() => {
                contentContainer.style.backgroundColor = "rgb(59, 37, 81)";
            }, "3000"));
        } catch (error) {
            console.log(error)
        }

});