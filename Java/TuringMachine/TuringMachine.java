package Java.TuringMachine;

import java.util.HashMap;

public class TuringMachine {
    public static void main(String[] args) {
        System.out.println("Hello World!");
        HashMap commands = new HashMap<String, Runnable>();
        commands.put("a", new Runnable() { 
            public void run() { System.out.println("Jaboogah"); }
        });
        commands.get("a");
    }
}
