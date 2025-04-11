package org.example;

import java.util.Scanner;

    class BasicCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);


        System.out.print("Enter the first number: ");
        float num1 = scanner.nextFloat();


        System.out.print("Enter the second number: ");
        float num2 = scanner.nextFloat();

        System.out.println("Possible calculations:");
        System.out.println("(M)ultiply");

        float result = num1 * num2;

        System.out.println(num1 + " * " + num2 + " = " + result);
    }
}
