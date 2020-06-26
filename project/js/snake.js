let Snake = function () {
    this.x = 0;
    this.y = 0;
    this.xSpeed = scale;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];

    this.draw = function () {
        ctx.fillStyle = 'blue';
        if(this.tail.length > 0){
            for (let i = 0; this.tail.length; i ++){
                ctx.fillRect(this.tail[i].x, this.tail[i].y, size, size)
            }
        }
        ctx.fillRect(this.x,this.y,size,size);
    }
    this.update = function () {
        for (let i = 0; i < this.tail.length - 1; i ++){
            this.tail[i] = this.tail[i + 1];
        }

        this.tail[this.total -1] = {
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

    this.changeDirection = function(direction){
        switch(direction){
            case 'Up':
                this.xSpeed = 0;
                this.ySpeed = -scale;
                break;
            case 'Down':
                this.xSpeed = 0;
                this.ySpeed = scale;
                break;
            case 'Left':
                this.xSpeed = -scale;
                this.ySpeed = 0;
                break;
            case 'Right':
                this.xSpeed = +scale;
                this.ySpeed = 0;
                break;
        }
    }

    this.eat = function(fruit){
        if((this.x + size) >= fruit.x
            && (this.y + size) >= fruit.y){
            this.total ++;
            return true;
        }
        if (this.x <= (fruit.x + sizeFruit)
            && this.y <= (fruit.y + sizeFruit)){
            this.total ++;
            return true;
        }
    }


}