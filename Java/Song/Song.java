import javax.sound.sampled.*;
import javax.swing.*;

import java.awt.event.*;
import java.io.File;
import java.util.ArrayList;
import java.util.List;

public class Song {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Java Sound Player");
        JButton playButton = new JButton("Play Sound");
        frame.add(playButton);
        String wilhelmScream = "/Users/orionnye/Projects/Testing/Java/Song/VOXScrm_Wilhelm scream (ID 0477)_BSB.wav";
        // Note wilhelm = new Note("/Users/orionnye/Projects/Testing/Java/Song/VOXScrm_Wilhelm scream (ID 0477)_BSB.wav");
        Node root = new Node(0);
        Note note1 = new Note(wilhelmScream);
        Note note2 = new Note(140, 44100, 700, 2); // Generated 440 Hz tone for 500ms
        Note anotherOne = new Note(440, 44100, 200, 5);
        Node nested = new Node(1000); // Delay of 1 second before playing children
        root.addChild(note1);
        root.addChild(nested);
        nested.addChild(note2);
        note2.addChild(anotherOne);
        note2.addChild(note1);
        // nested.addChild(anotherOne);
        nested.addChild(new Note(wilhelmScream));

        List<Note> notes = createNoteChain(440, 10, 44100, 500, PitchChangeMode.FIXED_STEP, 20);
        // Creates 10 notes starting at 440 Hz, each increasing by 20 Hz
        
        List<Note> sineNotes = createNoteChain(600, 8, 44100, 300, PitchChangeMode.SINE_WAVE, 100);
        // Creates 8 notes starting at 600 Hz, pitch varying in a sine pattern with amplitude 100 Hz

        // Note wilhelm = new Note(440, 4400, 1000, 0);
        
        playButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                // root.play();
                notes.get(0).play();
                // sineNotes.get(0).play();
                // wilhelm.generateAndPlay();
            }
        });

        frame.pack();
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }
    
public static class Node {
    private List<Node> children = new ArrayList<>();
    private int delay; // Delay in milliseconds before playing this node

    public Node(int delay) {
        this.delay = delay;
    }

    public void addChild(Node child) {
        children.add(child);
    }    
    public void play() {
        // Start the delay on a new thread
        new Thread(() -> {
            try {
                Thread.sleep(delay);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }

            // Play sound (if a Note) and children on the current thread
            if (this instanceof Note) {
                ((Note) this).playSound();
            }
            for (Node child : children) {
                child.play();
            }
        }).start();
    }    
}

    public static class Note extends Node {
        private String soundFile; // For loading sound files
        private int pitch;  // For generated sounds
        private float sampleRate; 
        private int duration; // Duration in milliseconds
        private float decay = 0.9f; // Default decay value (0 to 1)
        
        public Note(int pitch, float sampleRate, int duration, int delay) {
            super(0);
            this.pitch = pitch;
            this.sampleRate = sampleRate;
            this.duration = duration;
        }

        public Note(String soundFile) {
            super(0);
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
    
                // Apply decay
                int decaySamples = (int) (duration * sampleRate / 1000 * 0.1); // 10% decay by default
                for (int i = 0; i < duration * sampleRate / 1000; i++) {
                    double angle = i / (sampleRate / pitch) * 2.0 * Math.PI;
                    double volume = 1.0;
                    if (i >= duration * sampleRate / 1000 - decaySamples) {
                        volume = 1.0 - (i - (duration * sampleRate / 1000 - decaySamples)) / (double) decaySamples;
                    }
                    buf[0] = (byte) (Math.sin(angle) * 100 * volume);
                    sdl.write(buf, 0, 1);
                }
    
                sdl.drain();
                sdl.stop();
            } catch (LineUnavailableException e) {
                e.printStackTrace();
            }
        }
    }
    public static List<Note> createNoteChain(int startPitch, int numNotes, float sampleRate, int duration, PitchChangeMode mode, double pitchChangeValue) {
        List<Note> noteChain = new ArrayList<>();
        int currentPitch = startPitch;
    
        for (int i = 0; i < numNotes; i++) {
            if (mode == PitchChangeMode.FIXED_STEP) {
                currentPitch += (int) pitchChangeValue;
            } else if (mode == PitchChangeMode.SINE_WAVE) {
                double angle = i * 2 * Math.PI / numNotes;
                double pitchDelta = pitchChangeValue * Math.sin(angle);
                currentPitch += (int) Math.round(pitchDelta);
            }
    
            Note note = new Note(currentPitch, sampleRate, duration, duration);
            if (!noteChain.isEmpty()) {
                noteChain.get(i - 1).addChild(note); // Add as child to previous note
            }
            noteChain.add(note);
        }
        return noteChain;
    }

    enum PitchChangeMode {
        FIXED_STEP,
        SINE_WAVE
    }
}
