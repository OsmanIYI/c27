class Slingshot {
    constructor(body1,body2){
        var options = {
            bodyA : body1,
            bodyB : body2,
            length : 10,
            stiffness : 0.3,
        }
        this.slingshot=Constraint.create(options);
        World.add(world,this.slingshot);

    }
    display(){
        var body1 = this.slingshot.bodyA.position;
        var body2 = this.slingshot.bodyB.position;

        line(body1.x,body1.y,body2.x,body2.y);
    }

}