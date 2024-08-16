package Java.Primitives;

public class SomeNumbers {
    public static void main() {
        System.out.println("Hello World");
        convertFromStringToInt("a");
    }
    public static void convertFromStringToInt(String text) {
        Integer obj = new Integer(text);
        int sample = obj.valueOf(text, 11);
        System.out.println(Integer.valueOf(sample));
    }
}
