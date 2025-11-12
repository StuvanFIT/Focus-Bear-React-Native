public double calculateOrder(double[] prices, double discountRate, double taxRate) {
    double subtotal = 0;
    for (double price : prices) {
        subtotal += price;
    }
    double discount = subtotal * discountRate;
    double taxedTotal = (subtotal - discount) + ((subtotal - discount) * taxRate);
    System.out.println("Subtotal: " + subtotal);
    System.out.println("Discount: " + discount);
    System.out.println("Taxed Total: " + taxedTotal);
    return taxedTotal;
}
