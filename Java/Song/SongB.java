import javax.sound.sampled.*;
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.io.File;

public class SongB {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Java Sound Player");
        JButton playButton = new JButton("Play Sound");
        frame.add(playButton);
        
        // Note wilhelm = new Note("/Users/orionnye/Projects/Testing/Java/Song/VOXScrm_Wilhelm scream (ID 0477)_BSB.wav");
        Note wilhelm = new Note(440, 4400, 1000);

        playButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                wilhelm.generateAndPlay();
            }
        });

        frame.pack();
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }

    public static class Node {
        // You'll likely want to add methods for managing children in your NodeTree
    }

    public static class Note extends Node {
        private String soundFile; // For loading sound files
        private int pitch;  // For generated sounds
        private float sampleRate; 
        private int duration; // Duration in milliseconds

        public Note(int pitch, float sampleRate, int duration) {
            this.pitch = pitch;
            this.sampleRate = sampleRate;
            this.duration = duration;
        }

        public Note(String soundFile) {
            this.soundFile = soundFile;
        }

        public void playSound() {
            if (soundFile != null) {
                playFromFile();
            } else {
                generateAndPlay();
            }
        }

        private void playFromFile() {
            try {
                AudioInputStream audioInputStream = AudioSystem.getAudioInputStream(new File(soundFile));
                Clip clip = AudioSystem.getClip();
                clip.open(audioInputStream);
                clip.start();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

        private void generateAndPlay() {
            byte[] buf = new byte[1];
            AudioFormat af = new AudioFormat(sampleRate, 8, 1, true, false);
            try (SourceDataLine sdl = AudioSystem.getSourceDataLine(af)) {
                sdl.open();
                sdl.start();
                for (int i = 0; i < duration * sampleRate / 1000; i++) {
                    double angle = i / (sampleRate / pitch) * 2.0 * Math.PI;
                    buf[0] = (byte) (Math.sin(angle) * 100);
                    sdl.write(buf, 0, 1);
                }
                sdl.drain();
                sdl.stop();
            } catch (LineUnavailableException e) {
                e.printStackTrace();
            }
        }
    }
}
