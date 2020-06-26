let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
let scale = 5;
let size = 30;
let sizeFruit = 20;
let rows = canvas.height/scale;
let cols = canvas.width/scale;

let snake = new Snake();
let fruit = new Fruit();
let stop;
fruit.pickLocation();
function start() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    fruit.draw();
    snake.update();
    snake.draw();
    if (snake.eat(fruit)) {
        fruit.pickLocation();
    }
}
window.setInterval(start,10)



window.addEventListener('keydown', ((evt) => {
    const direction = evt.key.replace('Arrow', '');
    snake.changeDirection(direction);
}))
