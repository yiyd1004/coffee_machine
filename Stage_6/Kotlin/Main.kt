package machine

fun main() {
    val coffeeMaker = CoffeeMaker()
    coffeeMaker.startMachine()
}

class CoffeeMaker() {
    private val machineState = CoffeeMachineState()

    enum class COFFEE (
        val id: String,
        val water: Int,
        val milk: Int,
        val coffeeBeans: Int,
        val price: Int
    ) {
        ESPRESSO ("1", 250, 0, 16, 4),
        LATTE ("2", 350, 75,  20, 7),
        CAPPUCCINO ("3", 200, 100, 12, 6)
    }

    enum class MENU (val value: String) {
        BUY ("buy"),
        FILL ("fill"),
        TAKE ("take"),
        REMAINING ("remaining"),
        EXIT ("exit")
    }

    data class CoffeeMachineState (
        var water: Int = 400,
        var milk: Int = 540,
        var coffeeBeans: Int = 120,
        var cups: Int = 9,
        var money: Int = 550
    ) {
        fun printState(addNewLineAtStart: Boolean) {
            if (addNewLineAtStart) {
                println()
            }

            println(
                """
            The coffee machine has:
            $water ml of water
            $milk ml of milk
            $coffeeBeans g of coffee beans
            $cups disposable cups
            $$money of money
            
        """.trimIndent()
            )
        }
    }

    fun startMachine() {
        while (true) {
            println("Write action (buy, fill, take, remaining, exit):")
            val input = readln()
            println()
            when (input) {
                MENU.BUY.value -> buyCoffee()
                MENU.FILL.value -> fillMachine()
                MENU.TAKE.value -> getMoneyFromMachine()
                MENU.REMAINING.value -> machineState.printState(false)
                MENU.EXIT.value -> break
            }
        }
    }

    fun buyCoffee() {
        println("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:")

        when (readln()) {
            COFFEE.ESPRESSO.id -> {
                if (!checkResources(COFFEE.ESPRESSO)) {
                    return
                }

                machineState.water -=  COFFEE.ESPRESSO.water
                machineState.milk -= COFFEE.ESPRESSO.milk
                machineState.coffeeBeans -= COFFEE.ESPRESSO.coffeeBeans
                machineState.money += COFFEE.ESPRESSO.price
            }
            COFFEE.LATTE.id -> {
                if (!checkResources(COFFEE.LATTE)) {
                    return
                }

                machineState.water -=  COFFEE.LATTE.water
                machineState.milk -= COFFEE.LATTE.milk
                machineState.coffeeBeans -= COFFEE.LATTE.coffeeBeans
                machineState.money += COFFEE.LATTE.price
            }
            COFFEE.CAPPUCCINO.id -> {
                if (!checkResources(COFFEE.CAPPUCCINO)) {
                    return
                }

                machineState.water -=  COFFEE.CAPPUCCINO.water
                machineState.milk -= COFFEE.CAPPUCCINO.milk
                machineState.coffeeBeans -= COFFEE.CAPPUCCINO.coffeeBeans
                machineState.money += COFFEE.CAPPUCCINO.price
            }
            else -> return
        }
        machineState.cups --

        println("I have enough resources, making you a coffee!\n")
    }

    fun checkResources(coffee: COFFEE): Boolean {
        var canMake = true

        if (machineState.water < coffee.water) {
            println("Sorry, not enough water!\n")
            canMake = false
        } else if (machineState.milk < coffee.milk) {
            println("Sorry, not enough milk!\n")
            canMake = false
        } else if (machineState.coffeeBeans < COFFEE.CAPPUCCINO.coffeeBeans) {
            println("Sorry, not enough coffee beans!\n")
            canMake = false
        } else if (machineState.cups <= 0) {
            println("Sorry, not enough disposable cups!\n")
            canMake = false
        }

        return canMake
    }

    fun fillMachine() {
        println("Write how many ml of water you want to add:")
        machineState.water += readln().toInt()

        println("Write how many ml of water you want to add: ")
        machineState.milk += readln().toInt()

        println("Write how many grams of coffee beans you want to add:")
        machineState.coffeeBeans += readln().toInt()

        println("Write how many disposable cups you want to add:")
        machineState.cups += readln().toInt()

        println()
    }

    fun getMoneyFromMachine() {
        println("I gave you $${machineState.money}")

        machineState.money = 0

        println()
    }
}