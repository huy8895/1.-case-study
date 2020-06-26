let Fruit = function () {
    this.pickLocation = function (){
        this.x = Math.random()*(canvas.width - sizeFruit);
        this.y = Math.random()*(canvas.height - sizeFruit);
    }
    this.draw = function () {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x,this.y,sizeFruit,sizeFruit)
    }
}