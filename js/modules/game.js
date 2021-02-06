const Game = ( _=> {

    let clicks;
    let score = 0;

    // cache the DOM
    const memoryPics = document.querySelector(".memory__pics");
    const gameScore = document.querySelector(".memory__result");

    const init = _ => {
        clicks = [];
        listeners();
        render();
    }

    const removeBackground = elem => {
        elem.target.style.setProperty('background-color', 'initial')
        clicks.push(elem.target.getAttribute("data-img"));
    }

    const checkImg = _ => {
        return clicks.every(elem => elem === clicks[0]);
    }

    const checkClicks = _ => {
        if (clicks.length == 2) {
            if(checkImg()) {
                clicks = [];
                score++;
                render();
            } else {
                alert('You Lose');
            }
        }
    }


    const listeners = _ => {
        memoryPics.addEventListener("click", e => {
            if(e.target.matches(".img__fill")) {
                // Remove fill
                removeBackground(e);
                // Check if clicked img is the same
                checkClicks();
            }
        })
    }

    const render = _ => {
        let markup = `<h1 class="memory__score">Score: ${score}</h1>`;
        gameScore.innerHTML = markup;
    }

    return {
        init
    }
})();

export default Game;