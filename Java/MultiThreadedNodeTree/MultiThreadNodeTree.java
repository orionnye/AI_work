package Java.MultiThreadedNodeTree;

import java.util.concurrent.TimeUnit;

public class MultiThreadNodeTree {
    public static void main(String[] args) {
        System.out.println("Banger, hola!");
        Node chimp = new Node("Hola", 4);
        Node monkey = new Node("Hello", 2);
        monkey.children[0] = chimp;
        monkey.read();
    }
    public static class Node {
        private String message;
        private int delay;
        public Node[] children;
        public Node(String text, int time) {
            this.message = text;
            this.delay = time;
            this.children = new Node[3];
        }
        public void read() {
            try {
                TimeUnit.SECONDS.sleep(delay);
                System.out.println(message);
                if (children.length > 0) {
                    for (int i = 0; i < children.length; i++) {
                        Node child = children[i];
                        if (child != null) {
                            child.read();
                        }
                    }
                }
            } catch (InterruptedException e) {
                System.out.println(e.getMessage());
            }
        }
    }
}
