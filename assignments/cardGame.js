//worked with Ryan Cain, Gary Buckner Jr. 

class Unit {
    constructor(name, cost, power, resilience) {
        this.name = name;
        this.cost = cost;
        this.power = power;
        this.resilience = resilience;
    }

    attack(target) {
       const damage = this.power - target.resilience;
       if (damage >= 0 ) {
        target.resilience -= damage;
        console.log(`${this.name} attacks ${target.name} for ${damage} damage`)
       } else {
        console.log(`${this.name}'s attack had no effect on ${target.name}.`)
       }
    }
}

class Effect {
    constructor(name, cost, text, stat, magnitude) {
        this.name = name;
        this.cost = cost;
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play(target) {
        if (this.stat === 'resilience') {
            target.resilience += this.magnitude;
            console.log(`${this.name} was played against ${target.name}. ${target.name}'s reslience is now ${target.resilience}`)
        } else if (this.stat === "power") {
            target.power += this.magnitude;
            console.log(`${this.name} was played against ${target.name}. ${target.name}'s power is now ${target.power}`)
        } else {
            console.log(`Invalid stat: ${this.stat}`)
        }

    }
}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4)
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4)
const hardAlgorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3)
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "reduce the target's resilience by 2", "resilience", -2)
const pairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2)


hardAlgorithm.play(redBeltNinja);
unhandledPromiseRejection.play(redBeltNinja);
pairProgramming.play(redBeltNinja);
redBeltNinja.attack(blackBeltNinja);

