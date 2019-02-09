// Soldier
class Soldier {
    constructor(healthArg, strengthArg) {
        this.health = healthArg;
        this.strength = strengthArg;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health = this.health - damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }
        receiveDamage(damage){
        this.health = this.health - damage;
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
            }
        }

        battleCry(){
            return 'Odin Owns You All!'
        }

}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super(health, strength)
    }
    receiveDamage(damage){
        this.health = this.health - damage;
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
            }
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(Viking){
        this.vikingArmy.push(Viking);
    }

    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    }

    vikingAttack(){
        const randomDamage = this.vikingArmy[(Math.floor(Math.random() * this.vikingArmy.length))].strength;
        const randomNumber = Math.floor(Math.random()*this.saxonArmy.length);
        const randomSaxon = this.saxonArmy[randomNumber];
        const attackBalance = randomSaxon.receiveDamage(randomDamage);       
        if (randomSaxon.health <= 0) this.saxonArmy.splice(randomNumber, 1);
        
       return attackBalance;  
    }

    saxonAttack(){
        const randomDamage = this.saxonArmy[(Math.floor(Math.random() * this.saxonArmy.length))].strength;
        const randomNumber = Math.floor(Math.random()*this.vikingArmy.length);
        const randomViking = this.vikingArmy[randomNumber];
        const attackBalance = randomViking.receiveDamage(randomDamage);       
        if (randomViking.health <= 0) this.vikingArmy.splice(randomNumber, 1);
        
       return attackBalance;  
    }

    showStatus(){
        if(this.saxonArmy.length === 0){
            return 'Vikings have won the war of the century!';
        } else if(this.vikingArmy.length === 0){
            return 'Saxons have fought for their lives and survive another day...';
        } else {
            return 'Vikings and Saxons are still in the thick of battle.'
        }
    }
}
