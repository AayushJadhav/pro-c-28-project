class Rubber
{
    constructor(bodyA, pointB)
    {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 2
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    fly()
    {
        this.chain.bodyA = null;
    }

    attach(bodyA)
    {
        this.chain.bodyA = bodyA;
        // line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.pointB.x, this.pointB.y);
    }

    display()
    {
        if(this.chain.bodyA !== null)
        {
            strokeWeight(1);
            line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.chain.pointB.x, this.chain.pointB.y);
        }
    }
}