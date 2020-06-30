let Fruit = function () {
    this.pickLocation = function (){
        this.x = Math.random()*(canvas.width - FRUIT_SIZE);
        this.y = Math.random()*(canvas.height - FRUIT_SIZE);
    }
    this.draw = function () {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x,this.y,FRUIT_SIZE,FRUIT_SIZE)
    }
}