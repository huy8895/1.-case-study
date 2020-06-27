let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
let scale = 5;
let size = 30;
let sizeFruit = 30;
let rows = canvas.height/scale;
let cols = canvas.width/scale;

let snake = new Snake();
let fruit = new Fruit();

fruit.pickLocation();
function start() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    fruit.draw();
    snake.update();
    snake.draw();
    console.log(snake.dirNow());
    if (snake.eat(fruit)) {
        fruit.pickLocation();
        document.getElementById('Score').innerHTML = snake.total;
    }
}
let test = setInterval(start,20)
function stop (){
    clearInterval(test);
}



window.addEventListener('keydown', ((evt) => {
    const direction = evt.key.replace('Arrow', '');
    snake.changeDirection(direction);
}))
