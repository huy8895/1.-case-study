let Fruit = function () {
    this.pickLocation = function (){
        this.x = (Math.floor(Math.random()*cols) * scale)
        this.y = (Math.floor(Math.random()*rows) * scale)
    }
    this.draw = function () {
        this.fillStyle = 'red';
        ctx.fillRect(this.x,this.y,size,size)
    }
}