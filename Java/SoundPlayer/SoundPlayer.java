package Java.SoundPlayer;

import java.util.concurrent.TimeUnit;

import javax.sound.sampled.AudioInputStream;
import javax.sound.sampled.AudioSystem;
import javax.sound.sampled.Clip;
import javax.swing.JFrame;

public class SoundPlayer {
    public static void main(String[] args) {
        // Launch Window
        launchWindow();
        // Play Sound... specifically the Wilhelm Scream, oh yeah!
        Sound wilhelmScream2 = new Sound("./VOXScrm_Wilhelm scream (ID 0477)_BSB.wav", 2);
        Sound wilhelmScream = new Sound("./VOXScrm_Wilhelm scream (ID 0477)_BSB.wav", 1, wilhelmScream2);
        wilhelmScream.play();
    }
    
    public static class Sound {
        // Sound details
        private String resource;
        private long delay;
        // Node Traversal
        private Sound child;

        public Sound(String url, long delay) {
            this.resource = url;
            this.delay = delay;
        }
        public Sound(String url, long delay, Sound next) {
            this.resource = url;
            this.delay = delay;
            this.child = next;
        }
        public void play() {
            try {
                TimeUnit.SECONDS.sleep(delay);
                Clip clip = AudioSystem.getClip();
                AudioInputStream inputStream = AudioSystem.getAudioInputStream(SoundPlayer.class.getResourceAsStream(resource));
                clip.open(inputStream);
                clip.start();
                if (child != null) {
                    child.play();
                }
            } catch (Exception e) {
                System.err.println(e.getMessage());
            }
        }
    }

    public static void launchWindow() {
        JFrame window = new JFrame("SoundFrame");
        window.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        window.pack();
        window.setVisible(true);
    }
}