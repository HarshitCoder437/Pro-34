class Ground {
    constructor(x,y,width,height) {
        var options = {
            isStatic: true,
            restitution: 0.3
        }

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        noStroke();
        rectMode(CENTER);
        fill(244,0,149);
        rect(pos.x, pos.y, this.width, this.height);
    }
}