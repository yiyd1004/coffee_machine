package machine

private val machineState = CoffeeMachineState()

fun main() {
    machineState.printState()
    println()
    menu()
}

fun menu() {
    println("Write action (buy, fill, take): ")
    when (readln()) {
        MENU.BUY.value -> buyCoffee()
        MENU.FILL.value -> fillMachine()
        MENU.TAKE.value -> getMoneyFromMachine()
    }
}

fun buyCoffee() {
    println("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:")
    val input = readln().toInt()

    machineState.cups --;
    when (input) {
        COFFEE.ESPRESSO.id -> {
            machineState.water -=  COFFEE.ESPRESSO.water
            machineState.milk -= COFFEE.ESPRESSO.milk
            machineState.coffeeBeans -= COFFEE.ESPRESSO.coffeeBeans
            machineState.money += COFFEE.ESPRESSO.price
        }
        COFFEE.LATTE.id -> {
            machineState.water -=  COFFEE.LATTE.water
            machineState.milk -= COFFEE.LATTE.milk
            machineState.coffeeBeans -= COFFEE.LATTE.coffeeBeans
            machineState.money += COFFEE.LATTE.price
        }
        COFFEE.CAPPUCCINO.id -> {
            machineState.water -=  COFFEE.CAPPUCCINO.water
            machineState.milk -= COFFEE.CAPPUCCINO.milk
            machineState.coffeeBeans -= COFFEE.CAPPUCCINO.coffeeBeans
            machineState.money += COFFEE.CAPPUCCINO.price
        }
    }

    println()
    machineState.printState()
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
    machineState.printState()
}

fun getMoneyFromMachine() {
    println("I gave you $${machineState.money}")

    machineState.money = 0

    println()
    machineState.printState()
}

enum class COFFEE (
    val id: Int,
    val water: Int,
    val milk: Int,
    val coffeeBeans: Int,
    val price: Int)
{
    ESPRESSO (1, 250, 0, 16, 4),
    LATTE (2, 350, 75,  20, 7),
    CAPPUCCINO (3, 200, 100, 12, 6)
}

enum class MENU (val value: String) {
    BUY ("buy"),
    FILL ("fill"),
    TAKE ("take")
}

data class CoffeeMachineState (
    var water: Int = 400,
    var milk: Int = 540,
    var coffeeBeans: Int = 120,
    var cups: Int = 9,
    var money: Int = 550
) {
    fun printState() {
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