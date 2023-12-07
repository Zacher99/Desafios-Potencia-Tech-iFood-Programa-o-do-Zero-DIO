
class Hero {
    constructor(nickname, age, type,) {
        this.nickname = nickname;
        this.age = age;
        this.type = type;
    }
    attacker() {
        const attacktypes = {
            Wizard: "Magia",
            Warrior: "Espada",
            Monk: "Artes Marciais",
            Ninja: "Shuriken"
        };
        let attack = attacktypes[this.type];
        console.log(`O ${this.type} atacou usando ${attack}!`);

    }
}

let wizardHero = new Hero("Pedro", 29, "Wizard")
let warriorHero = new Hero("João", 45, "Warrior")

wizardHero.attacker()
warriorHero.attacker()

