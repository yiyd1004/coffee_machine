//const input = require("sync-input"); // To get user input in hyperskill.org
const input = require("prompt-sync")(); // To get user input in Node.js environment

const CoffeeMachine = {
    singleCupReqs: {
        water: 200,
        milk: 50,
        coffee: 15,
    },

    init: function () {
        console.log("Write how many cups of coffee you will need:");
        const cups = input();
        this.reqIngredients(Number(cups));
    },

    reqIngredients: function (cups) {
        console.log(
            `For ${cups} cups of coffee you will need:\n` +
                `${cups * this.singleCupReqs.water} ml of water\n` +
                `${cups * this.singleCupReqs.milk} ml of milk\n` +
                `${cups * this.singleCupReqs.coffee} g of coffee beans`
        );
    },
};

CoffeeMachine.init();
