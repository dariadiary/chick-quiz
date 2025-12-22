const button = document.querySelector ('#btn');
const results = document.querySelector ('#results');

button.addEventListener ('click', points);

function points(e){
    e.preventDefault();

    let points = 0;
    
    if (document.querySelector ('#answer1').checked){
        points ++;
    }
    if (document.querySelector ('#answer2').checked){
        points ++;
    }
    if (document.querySelector ('#answer3').checked){
        points ++;
    }
    if (document.querySelector ('#answer4').checked){
        points ++;
    }
    if (document.querySelector ('#answer5').checked){
        points ++;
    }
    results.textContent = `Your score: ${points}/5!`;
}