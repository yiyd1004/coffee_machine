const input = require("prompt-sync")();
const CoffeeMachine = {
    singleCupReqs: {
        water: 200,
        milk: 50,
        coffee: 15,
    },

    init: function () {
        // console.log(
        //     "Starting to make a coffee\n" +
        //         "Grinding coffee beans\n" +
        //         "Boiling water\n" +
        //         "Mixing boiled water with crushed coffee beans\n" +
        //         "Pouring coffee into the cup\n" +
        //         "Pouring some milk into the cup\n" +
        //         "Coffee is ready!"
        // );

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
