package Java.SoundPlayer;

import javax.swing.*; 
import java.awt.*;
import java.awt.event.*;
import java.io.File;

import javax.sound.sampled.*; // For playing sounds

public class Song {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Sound Player");
        JButton playButton = new JButton("Play Sound");

        // Action when the button is clicked
        playButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                playSound();
            }
        });

        frame.add(playButton);
        frame.pack();
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }

    private static void playSound() {
           try {
               File soundFile = new File("/Users/orionnye/Projects/Testing/Java/SoundPlayer/VOXScrm_Wilhelm scream (ID 0477)_BSB.wav"); // Replace with your sound file
               AudioInputStream audioIn = AudioSystem.getAudioInputStream(soundFile);
               Clip clip = AudioSystem.getClip();
               clip.open(audioIn);
               clip.start();
           } catch (Exception e) {
               e.printStackTrace();
           }
       }
    
       public class Node {
           // We'll likely want a reference to the next node for sequencing
           private Node next; 
    
           // Constructor
           public Node(Node next) {
               this.next = next;
           }
       }
    
       public class Note extends Node {
           private int pitch;
           private int duration;
           private int volume;
    
           // Constructor
           public Note(Node next, int pitch, int duration, int volume) {
               super(next);
               this.pitch = pitch;
               this.duration = duration;
               this.volume = volume;
           }
       }
}
