let Snake = function () {
    this.x = DEFAULT_SNAKE_X_POSITION;
    this.y = DEFAULT_SNAKE_Y_POSITION;
    this.xSpeed = DEFAULT_SNAKE_SPEED;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];

    this.draw = function () {
        ctx.fillStyle = 'blue';
        for (let i=0; i<this.tail.length; i++) {
            ctx.fillRect(this.tail[i].x,
                this.tail[i].y, SNAKE_SIZE, SNAKE_SIZE);
        }
        ctx.fillRect(this.x,this.y,SNAKE_SIZE,SNAKE_SIZE);
    }

    this.update = function () {
        for (let i = 0; i < this.tail.length - 1; i ++){
            this.tail[i] = this.tail[i + 1];
        }
        this.tail[this.total - 1] = {
            x: this.x , y: this.y
        }
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x + SNAKE_SIZE> canvas.width){
            isStop = true;gameOver();
        }
        if (this.y + SNAKE_SIZE> canvas.height){
            isStop = true;gameOver()
        }
        if (this.x < 0) {
            isStop = true;gameOver()
        }
        if (this.y < 0) {
            isStop = true; gameOver()
        }
    }
    this.direction = function () {
        if (this.ySpeed < 0){
            return  'up';
        }
        if (this.ySpeed > 0){
            return  'down';
        }
        if (this.xSpeed > 0){
            return  'right';
        }
        if (this.xSpeed < 0){
            return  'left';
        }
    }

    this.changeDirection = function(direction){
        if (direction === ORIENTATION_UP && snake.direction() !== CURRENT_DIRECTION_DOWN){
            this.xSpeed = 0;
            this.ySpeed = -DEFAULT_SNAKE_SPEED;
        }
        if (direction === ORIENTATION_DOWN && snake.direction() !== CURRENT_DIRECTION_UP){
            this.xSpeed = 0;
            this.ySpeed = DEFAULT_SNAKE_SPEED;
        }
        if (direction === ORIENTATION_LEFT && snake.direction() !== CURRENT_DIRECTION_RIGHT){
            this.xSpeed = -DEFAULT_SNAKE_SPEED;
            this.ySpeed = 0;
        }
        if (direction === ORIENTATION_RIGHT && snake.direction() !== CURRENT_DIRECTION_LEFT){
            this.xSpeed = +DEFAULT_SNAKE_SPEED;
            this.ySpeed = 0;
        }
    }

    this.eat = function(fruit){
        if((this.x + SNAKE_SIZE > fruit.x && this.x  <= fruit.x + FRUIT_SIZE)
            && (this.y + SNAKE_SIZE >= fruit.y && this.y <= fruit.y + FRUIT_SIZE )){
            this.total += 1;
            return true;
        }
    }
    this.death = function () {
        for (let i = 0; i < this.tail.length; i ++){
            if(this.x == this.tail[i].x && this.y == this.tail[i].y) {
                isStop = true;
            }
        }
    }

}