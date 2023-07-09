package machine

fun main() {
    val coffeeReq: Map<String, Int> = mapOf("water" to 200, "milk" to 50, "coffee" to 15)

    println("Write how many cups of coffee you will need:")
    val input = readln().toInt()

    println(
        """
            For ${input} cups of coffee you will need:
            ${input * coffeeReq["water"]!!} ml of water
            ${input * coffeeReq["milk"]!!} ml of milk
            ${input * coffeeReq["coffee"]!!} g of coffee beans
        """.trimIndent())
}
