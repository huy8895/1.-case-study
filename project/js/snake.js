let Snake = function () {
    this.x = 0;
    this.y = 0;
    this.xSpeed = scale*1;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];

    this.draw = function () {
        ctx.fillStyle = 'blue';
        if(this.tail.length > 0){
            for (let i = 0; this.tail.length; i ++){
                ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale)
            }
        }
        ctx.fillRect(this.x,this.y,scale,scale);
    }
    this.update = function () {
        for (let i = 0; i )
    }
}