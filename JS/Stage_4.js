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

    remainCups: 0,

    init: function () {
        this.printMachineState();
        this.run();
    },

    printMachineState: function () {
        console.log("The coffee machine has:");
        console.log(
            `${this.machineState.water} ml of water\n` +
                `${this.machineState.milk} ml of milk\n` +
                `${this.machineState.coffee} g of coffee beans\n` +
                `${this.machineState.disposableCups} disposable cups\n` +
                `$${this.machineState.money} of money\n`
        );
    },

    run: function () {
        console.log(`Write action (buy, fill, take):`);
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
        }
    },

    buy: function () {
        console.log(
            `What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:`
        );
        const menu = input();

        switch (menu) {
            case "1":
                this.machineState.water -= this.espresso.water;
                this.machineState.milk -= this.espresso.milk;
                this.machineState.coffee -= this.espresso.coffee;
                this.machineState.money += 4;
                break;

            case "2":
                this.machineState.water -= this.latte.water;
                this.machineState.milk -= this.latte.milk;
                this.machineState.coffee -= this.latte.coffee;
                this.machineState.money += 7;
                break;

            case "3":
                this.machineState.water -= this.cappuccino.water;
                this.machineState.milk -= this.cappuccino.milk;
                this.machineState.coffee -= this.cappuccino.coffee;
                this.machineState.money += 6;
                break;
        }
        this.machineState.disposableCups -= 1;

        console.log();
        this.printMachineState();
    },

    fill: function () {
        console.log(`Write how many ml of water you want to add:`);
        this.machineState.water += Number(input());

        console.log(`Write how many ml of milk you want to add:`);
        this.machineState.milk += Number(input());

        console.log(`Write how many grams of coffee beans you want to add:`);
        this.machineState.coffee += Number(input());

        console.log(`Write how many disposable cups you want to add:`);
        this.machineState.disposableCups += Number(input());

        console.log();
        this.printMachineState();
    },

    take: function () {
        console.log(`I gave you $${this.machineState.money}\n`);
        this.machineState.money = 0;

        this.printMachineState();
    },

    calculateRemainCups: function () {
        this.remainCups = Math.floor(
            Math.min(
                this.machineState.water / this.singleCupReqs.water,
                Math.min(
                    this.machineState.milk / this.singleCupReqs.milk,
                    this.machineState.coffee / this.singleCupReqs.coffee
                )
            )
        );
    },

    reqIngredients: function (cups) {
        if (cups === this.remainCups) {
            console.log("Yes, I can make that amount of coffee");
        } else if (cups < this.remainCups) {
            console.log(
                `Yes, I can make that amount of coffee (and even ${
                    this.remainCups - cups
                } more than that)`
            );
        } else {
            console.log(
                `No, I can make only ${this.remainCups} cups of coffee`
            );
        }
    },
};

CoffeeMachine.init();
