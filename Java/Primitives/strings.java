package Java.Primitives;

import java.util.ArrayList;

public class strings {
    public static void main(String[] args) {
        String sample = "mankey";
        ArrayList<String> samples = new ArrayList<String>();
        for(int i = 0; i < 1; i++) {
            samples.add(sample);
        }
        for (int i = 0; i < samples.size(); i++) {
            System.out.println(samples.get(i).toString());
        }

        for (String s : samples) {
            for(int i = 0; i < s.length(); i++) {
                if (s.charAt(i) == 'A' || s.charAt(i) == 'a') {
                    String first = s.substring(0, i-1);
                    String second = s.substring(i);
                    s = first + "a" + second;
                    System.out.println(s);
                }
            }
        }
    }

    public String Mutate (String input) {
        String ret = "";
        for(int i = 0; i < input.length(); i++) {
            if (input.charAt(i) == 'A' || input.charAt(i) == 'a') {
                String first = input.substring(0, i-1);
                String second = input.substring(i);
                ret = first + "a" + second;
            }
        }
        return ret;
    }
}
