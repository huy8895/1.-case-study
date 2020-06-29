let GameIntro = function () {
    this.y = canvas.height;
    this.height = 0;

     this.startIntro = function () {
        ctx.fillStyle = 'black';
        ctx.fillRect(0,this.y,canvas.width,this.height);
     }
}
