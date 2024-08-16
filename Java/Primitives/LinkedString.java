package Java.Primitives;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class LinkedString {
    public static void main(String[] args) {
        String charArray = "ohbebdas000011112222333344445555";
        System.out.println("Generated String: " + followChars(charArray));
        System.out.println("Reversed String: " + followCharsReverse("Hello World!"));
    }

    public static String followChars(String text) {
        char[] singled = text.toCharArray();
        char head = text.charAt(0);

        String path = "";
        for (int i = 0; i < singled.length; i++) {
            int nextIndex = getIndex(singled[i]);

            if (nextIndex >= singled.length) {
                break;
            }

            path += singled[nextIndex];
        }
        return path;
    }

    public static String followCharsReverse(String text) {
        char[] singled = text.toCharArray();
        char head = text.charAt(0);

        Map<Integer, String> lookup = new HashMap<>();
        for (int i = 0; i < singled.length; i++) {
            lookup.put(getIndex(singled[i]), String.valueOf(singled[i]));
        }

        String path = "";
        for (int i = text.length() - 1; i >= 0; i--) {
            int nextIndex = getIndex(text.charAt(i));

            if (lookup.containsKey(nextIndex)) {
                path = lookup.get(nextIndex) + path;
            }
        }
        return path;
    }

    public static int getIndex(char c) {
        if (Character.isDigit(c)) {
            return Character.getNumericValue(c);
        } else {
            return c;
        }
    }
}
