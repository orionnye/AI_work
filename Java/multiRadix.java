package Java;

public class multiRadix {
    public static void main(String[] args) {
        System.out.println("\nHello World!\n");
        System.out.println(translateRadix(16, 4));
    }
    public static String translateRadix(int number, int toRadix) {
        int newIndex = 0;
        while (Math.pow(toRadix, newIndex) <= number) {
            newIndex += 1;
        }
        
        return String.valueOf(newIndex);
    }
}
