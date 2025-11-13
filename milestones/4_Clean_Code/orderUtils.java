public double calculateOrder(double[] prices, double discountRate, double taxRate) {
    double subtotal = calculateSubtotal(prices);
    double discounted = applyDiscount(subtotal, discountRate);
    double total = applyTax(discounted, taxRate);
    printSummary(subtotal, discounted, total);
    return total;
}

private double calculateSubtotal(double[] prices) {
    double subtotal = 0;
    for (double price : prices) subtotal += price;
    return subtotal;
}

private double applyDiscount(double subtotal, double discountRate) {
    return subtotal - (subtotal * discountRate);
}

private double applyTax(double amount, double taxRate) {
    return amount + (amount * taxRate);
}

private void printSummary(double subtotal, double discounted, double total) {
    System.out.println("Subtotal: " + subtotal);
    System.out.println("After Discount: " + discounted);
    System.out.println("Final Total: " + total);
}
