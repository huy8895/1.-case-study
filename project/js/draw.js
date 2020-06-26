let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
let scale = 10;
let rows = canvas.height/scale;
let cols = canvas.width/scale;


(function setup() {
    let snake = new Snake();
    let fruit = new Fruit();
    function loop() {
        ctx.clearRect(0,0,canvas.width,canvas.height)
        snake.draw();
        snake.update();
        requestAnimationFrame(loop)

    }
    requestAnimationFrame(loop)
})()