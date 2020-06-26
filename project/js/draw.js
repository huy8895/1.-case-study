let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
let scale = 5;
let size = 30;
let rows = canvas.height/scale;
let cols = canvas.width/scale;

let snake = new Snake();
let fruit = new Fruit();
let stop;

/*(function setup() {*/
    function loop() {
        ctx.clearRect(0,0,canvas.width,canvas.height)
        snake.draw();
        snake.update();
        stop = requestAnimationFrame(loop)
        console.log(snake.x);
        console.log(snake.y);
        console.log(canvas.width);
        console.log(canvas.height);

    }

/*})()*/
cancelAnimationFrame(stop);

window.addEventListener('keydown', ((evt) => {
    const direction = evt.key.replace('Arrow', '');
    console.log(direction);
    snake.changeDirection(direction);
}));
