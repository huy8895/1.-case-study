let Snake = function () {
    this.x = 0;
    this.y = 0;
    this.xSpeed = scale;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];

    this.draw = function () {
        ctx.fillStyle = 'blue';
        for (let i=0; i<this.tail.length; i++) {
            ctx.fillRect(this.tail[i].x,
                this.tail[i].y, size, size);
        }
        ctx.fillRect(this.x,this.y,size,size);
    }

    this.update = function () {
        for (let i = 0; i < this.tail.length - 1; i ++){
            this.tail[i] = this.tail[i + 1];
        }

        this.tail[this.total - 1] = {
            x: this.x, y: this.y
        }

        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x + size> canvas.width){
            this.x = 0
        }
        if (this.y + size> canvas.height){
            this.y = 0
        }
        if (this.x < 0) {
            this.x = canvas.width - size;
        }
        if (this.y < 0) {
            this.y = canvas.height - size;
        }
    }
    this.direction = function () {
        if (this.x === this.tail[this.total -1].x
        && this.y < this.tail[this.total -1].y){
            return  'up';
        }
        if (this.x === this.tail[this.total -1].x
            && this.y > this.tail[this.total -1].y){
            return  'down';
        }
        if (this.x > this.tail[this.total -1].x
            && this.y === this.tail[this.total -1].y){
            return  'right';
        }
        if (this.x < this.tail[this.total -1].x
            && this.y === this.tail[this.total -1].y){
            return  'left';
        }

    }

    this.changeDirection = function(direction){
        if (direction === 'Up' && snake.direction() !== 'down'){
            this.xSpeed = 0;
            this.ySpeed = -scale;
        }
        if (direction === 'Down' && snake.direction() !== 'up'){
            this.xSpeed = 0;
            this.ySpeed = scale;
        }
        if (direction === 'Left' && snake.direction() !== 'right'){
            this.xSpeed = -scale;
            this.ySpeed = 0;
        }
        if (direction === 'Right' && snake.direction() !== 'left'){
            this.xSpeed = +scale;
            this.ySpeed = 0;
        }
    }

    this.eat = function(fruit){
        if((this.x + size > fruit.x && this.x  <= fruit.x + sizeFruit)
            && (this.y + size >= fruit.y && this.y <= fruit.y + sizeFruit )){
            this.total += 1;
            return true;
        }

    }
    this.death = function () {
        for (let i = 0; i < this.tail.length; i ++){
            if (this.x === this.tail[i].x &&
            this.y === this.tail[i].y){
                stop ();
            }
        }
    }




}