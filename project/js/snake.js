function Snake(){
    this.x = 0;
    this.y = 0;
    this.xSpeed = scale;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];

    this. draw = function () {
        ctx.fillStyle = 'white';


        ctx.fillRect(this.x, this.y, scale, scale);

        ctx.fillRect((this.x - this.xSpeed ), (this.y - this.ySpeed),scale,scale)


    }

    this.update = function () {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        /*for (let i = 0; i < this.tail.length; i++) {
            this.tail[i] = this.tail[i + 1];
        }*/
        this.tail[this.total - 1] = {x: (this.x - this.xSpeed ), y: (this.y - this.ySpeed)}
        for ( let i = 0; i < this.tail.length; i ++){

        }

        if (this.x > canvas.width) {
            this.x = 0;
        }
        if (this.y > canvas.height) {
            this.y = 0;
        }
        if (this.x < 0) {
            this.x = canvas.width;
        }
        if (this.y < 0) {
            this.y = canvas.height;
        }
    }


    this.changeDirection = function (direction) {
        switch (direction) {
            case 'Up':
                this.xSpeed = 0;
                this.ySpeed = scale * -1;
                break;
            case 'Down':
                this.xSpeed = 0;
                this.ySpeed = scale * +1;
                break;
            case 'Left':
                this.xSpeed = scale * -1;
                this.ySpeed = 0;
                break;
            case 'Right':
                this.xSpeed = scale * +1;
                this.ySpeed = 0;
                break;
        }
    }

    this.eat = function (fruit){
        if(this.x === fruit.x && this.y === fruit.y){
            this.total++;
            return true;
        } else
        return false;
    }
}