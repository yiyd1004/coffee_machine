//const input = require("sync-input"); // To get user input in hyperskill.org
const input = require("prompt-sync")(); // To get user input in Node.js environment

const CoffeeMachine = {
    machineState: {
        water: 0,
        milk: 0,
        coffee: 0,
    },

    singleCupReqs: {
        water: 200,
        milk: 50,
        coffee: 15,
    },

    maxCups: 0,

    init: function () {
        console.log("Write how many ml of water the coffee machine has:");
        this.machineState.water = Number(input());

        console.log("Write how many ml of milk the coffee machine has:");
        this.machineState.milk = Number(input());

        console.log(
            "Write how many grams of coffee beans the coffee machine has:"
        );
        this.machineState.coffee = Number(input());

        this.maxCups = Math.floor(
            Math.min(
                this.machineState.water / this.singleCupReqs.water,
                Math.min(
                    this.machineState.milk / this.singleCupReqs.milk,
                    this.machineState.coffee / this.singleCupReqs.coffee
                )
            )
        );

        console.log("Write how many cups of coffee you will need:");
        const cups = input();
        this.reqIngredients(Number(cups));
    },

    reqIngredients: function (cups) {
        if (cups === this.maxCups) {
            console.log("Yes, I can make that amount of coffee");
        } else if (cups < this.maxCups) {
            console.log(
                `Yes, I can make that amount of coffee (and even ${
                    this.maxCups - cups
                } more than that)`
            );
        } else {
            console.log(`No, I can make only ${this.maxCups} cups of coffee`);
        }
    },
};

CoffeeMachine.init();
