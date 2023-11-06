const words = [
    "A journey of a thousand miles begins with a single step",
    "Don’t put off until tomorrow what you can do today",
    "If you want something done right, you have to do it yourself",
    "Don’t count your chickens before they hatch.",
    "Hope for the best, prepare for the worst",
    "Keep your friends close, and your enemies closer",
    "People who live in glass houses should not throw stones",
    "The grass is always greener on the other side",
    "When the going gets tough, the tough get going",
    "You can lead a horse to water, but you can’t make him drink it"
];

const msg = document.getElementById("msg");
const textArea = document.getElementById("textArea");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

let startTime, endTime, finalResult;

textArea.disabled = true;

const playGame = () => {
    let index = Math.floor(Math.random() * words.length);
    msg.innerHTML = words[index];
    btn.innerHTML = 'Done';
    let date = new Date();
    startTime = date.getTime();
}

const countWords = (str) => {
    let response = str.split(" ").length;
    return response;
}

const compareWords = (word1, word2) => {
    let w1 = word1.split(" ");
    let w2 = word2.split(" ");
    let count = 0;

    w1.forEach(function(item, index)  {
        if(item === w2[index]){
            count++;
        }
    });

    let errors = (w1.length - count);
    console.log(w1,length)
    console.log(w2,length)
    console.log(count)
    console.log(errors);
    return (`with ${errors} error words.`);
}

const endGame = () => {
    
    let date = new Date();
    endTime = date.getTime();
    let totalTime = (endTime - startTime)/ 1000;
   
    let totalStr = textArea.value;
    let wordCounts = countWords(totalStr);

    let speed = Math.round((wordCounts / totalTime)*60);
    
    finalResult = `You typed ${speed} words per minute `;
    finalResult += compareWords(msg.innerHTML, textArea.value);
    result.innerHTML = finalResult;
    result.style.borderBottom = "0.3rem solid #f40a41";
    textArea.value = "";
}

btn.addEventListener("click", function() {
    if(this.innerHTML === 'Start'){
        textArea.disabled = false;
        playGame();
    } else if(this.innerHTML === 'Done'){
        textArea.disabled = true;
        this.innerHTML = 'Start';
        endGame();
    }
})