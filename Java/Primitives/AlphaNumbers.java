package Java.Primitives;

public class AlphaNumbers {
    public static void main(String[] args) {
        System.out.println("Hello World");
        System.out.println(convertFromStringToInt("c"));
        System.out.println(convertFromIntToString(10, 36));
    }

    public static int convertFromStringToInt(String text) {
        int result = 0;
        for (char c : text.toCharArray()) {
            result = result * 26 + (c - 'a' + 10);
        }
        return result;
    }

    public static String convertFromIntToString(int num, int radix) {
        StringBuilder result = new StringBuilder();
        while (num > 0) {
            int digit = num % radix;
            num /= radix;
            if (digit < 10) {
                result.append(digit);
            } else {
                result.append((char) ('a' + digit - 10));
            }
        }
        return result.reverse().toString();
    }
}