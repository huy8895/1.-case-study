const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const scale = 5;
const sizeSnake = 20;
const sizeFruit = 30;
let snake = new Snake();
let fruit = new Fruit();
let isStop = false;

fruit.pickLocation();
let stopId
function start() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    fruit.draw();    snake.update();
    snake.draw();

    if (snake.eat(fruit)) {
        fruit.pickLocation();

    }
    snake.death();
    document.getElementById('Score').innerText = snake.total;
    if (isStop === true) {
        cancelAnimationFrame(stopId);
        gameOver()
        /*alert('game over');
        document.location.reload()*/
    } else {
        stopId = requestAnimationFrame(start);
    }
}
requestAnimationFrame(start);

function stopA() {
    cancelAnimationFrame(stopId);
}
window.addEventListener('keydown', ((evt) => {
    const direction = evt.key.replace('Arrow', '');
    snake.changeDirection(direction);
}))
