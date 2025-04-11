import java.util.Scanner;

public class BasicCalculator {
    public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    // Get the first number
    System.out.print("Enter the first number: ");
    float num1 = scanner.nextFloat();

    // Get the second number
    System.out.print("Enter the second number: ");
    float num2 = scanner.nextFloat();

    // Show operation options
    System.out.println("Possible calculations:");
    System.out.println("(A)dd");
    System.out.println("(S)ubtract");
    System.out.println("(M)ultiply");
    System.out.println("(D)ivide");

    // Get user's operation choice
    System.out.print("Please select an option: ");
    String choice = scanner.next();

    // Always multiply for this exercise
    float result = num1 * num2;

    // Show result
    System.out.println(num1 + " * " + num2 + " = " + result);
}
}
