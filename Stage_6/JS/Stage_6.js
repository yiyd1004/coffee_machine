//const input = require("sync-input"); // To get user input in hyperskill.org
const input = require("prompt-sync")(); // To get user input in Node.js environment

const CoffeeMachine = {
    machineState: {
        water: 400,
        milk: 540,
        coffee: 120,
        disposableCups: 9,
        money: 550,
    },

    espresso: {
        water: 250,
        milk: 0,
        coffee: 16,
    },

    latte: {
        water: 350,
        milk: 75,
        coffee: 20,
    },

    cappuccino: {
        water: 200,
        milk: 100,
        coffee: 12,
    },

    americano: {
        water: 350,
        milk: 0,
        coffee: 24,
    },

    water: {
        water: 300,
        milk: 0,
        coffee: 0,
    },

    remainCups: 0,

    init: function () {
        this.run();
    },

    printMachineState: function () {
        console.log("\nThe coffee machine has:");
        console.log(
            `${this.machineState.water} ml of water\n` +
                `${this.machineState.milk} ml of milk\n` +
                `${this.machineState.coffee} g of coffee beans\n` +
                `${this.machineState.disposableCups} disposable cups\n` +
                `$${this.machineState.money} of money\n`
        );
    },

    run: function () {
        while (true) {
            console.log(`Write action (buy, fill, take, remaining, exit):`);
            const action = input();

            switch (action) {
                case "buy":
                    this.buy();
                    break;

                case "fill":
                    this.fill();
                    break;

                case "take":
                    this.take();
                    break;

                case "remaining":
                    this.printMachineState();
                    break;

                case "exit":
                    return;
            }
        }
    },

    buy: function () {
        console.log(
            `\nWhat do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, 4 - americano, 5 - water, back - to main menu:`
        );
        const menu = input();

        switch (menu) {
            case "1":
                if (
                    !this.checkResources(
                        this.espresso.water,
                        this.espresso.milk,
                        this.espresso.coffee
                    )
                ) {
                    return;
                }
                this.machineState.water -= this.espresso.water;
                this.machineState.milk -= this.espresso.milk;
                this.machineState.coffee -= this.espresso.coffee;
                this.machineState.money += 4;
                break;

            case "2":
                if (
                    !this.checkResources(
                        this.latte.water,
                        this.latte.milk,
                        this.latte.coffee
                    )
                ) {
                    return;
                }
                this.machineState.water -= this.latte.water;
                this.machineState.milk -= this.latte.milk;
                this.machineState.coffee -= this.latte.coffee;
                this.machineState.money += 7;
                break;

            case "3":
                if (
                    !this.checkResources(
                        this.cappuccino.water,
                        this.cappuccino.milk,
                        this.cappuccino.coffee
                    )
                ) {
                    return;
                }
                this.machineState.water -= this.cappuccino.water;
                this.machineState.milk -= this.cappuccino.milk;
                this.machineState.coffee -= this.cappuccino.coffee;
                this.machineState.money += 6;
                break;

            case "4":
                if (
                    !this.checkResources(
                        this.americano.water,
                        this.americano.milk,
                        this.americano.coffee
                    )
                ) {
                    return;
                }
                this.machineState.water -= this.americano.water;
                this.machineState.milk -= this.americano.milk;
                this.machineState.coffee -= this.americano.coffee;
                this.machineState.money += 5;
                break;

            case "5":
                if (
                    !this.checkResources(
                        this.water.water,
                        this.water.milk,
                        this.water.coffee
                    )
                ) {
                    return;
                }
                this.machineState.water -= this.water.water;
                this.machineState.milk -= this.water.milk;
                this.machineState.coffee -= this.water.coffee;
                break;

            case "back":
                return;
        }
        this.machineState.disposableCups -= 1;
    },

    fill: function () {
        console.log(`\nWrite how many ml of water you want to add:`);
        this.machineState.water += Number(input());

        console.log(`Write how many ml of milk you want to add:`);
        this.machineState.milk += Number(input());

        console.log(`Write how many grams of coffee beans you want to add:`);
        this.machineState.coffee += Number(input());

        console.log(`Write how many disposable cups you want to add:`);
        this.machineState.disposableCups += Number(input());

        console.log();
    },

    take: function () {
        console.log(`\nI gave you $${this.machineState.money}`);
        this.machineState.money = 0;
    },

    checkResources: function (water, milk, coffee) {
        let missingItems = [];

        if (this.machineState.water < water) {
            missingItems.push(`water`);
        }

        if (this.machineState.milk < milk) {
            missingItems.push(`milk`);
        }

        if (this.machineState.coffee < coffee) {
            missingItems.push(`coffee`);
        }

        if (this.machineState.disposableCups === 0) {
            missingItems.push(`cups`);
        }

        if (missingItems.length > 0) {
            console.log(`Sorry, not enough ${missingItems}!\n`);
            return false;
        } else {
            console.log(`I have enough resources, making you a coffee!\n`);
            return true;
        }
    },
};

CoffeeMachine.init();
