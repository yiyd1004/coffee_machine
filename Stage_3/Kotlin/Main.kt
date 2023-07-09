package machine

import kotlin.math.min

const val WATER = "water"
const val MILK = "milk"
const val COFFEE = "coffee"

fun main() {
    val machineState: MutableMap<String, Int> = mutableMapOf(WATER to 0, MILK to 0, COFFEE to 0)
    val coffeeReq: Map<String, Int> = mapOf(WATER to 200, MILK to 50, COFFEE to 15)

    println("Write how many ml of water the coffee machine has:")
    machineState[WATER] = readln().toInt()

    println("Write how many ml of milk the coffee machine has:")
    machineState[MILK] = readln().toInt()

    println("Write how many grams of coffee beans the coffee machine has:")
    machineState[COFFEE] = readln().toInt()

    val maxCups: Int = min(machineState[WATER]?.div(coffeeReq[WATER]!!)!!,
        min(machineState[MILK]!!.div(coffeeReq[MILK]!!), machineState[COFFEE]!!.div(coffeeReq[COFFEE]!!)))

    println("Write how many cups of coffee you will need:")
    val cups = readln().toInt()

    if (cups <= maxCups) {
        var message: String = "Yes, I can make that amount of coffee"

        if (cups < maxCups) {
            message += " (and even ${maxCups - cups} more than that)"
        }
        println(message)
    } else {
        println("No, I can make only $maxCups cups of coffee")
    }

}
