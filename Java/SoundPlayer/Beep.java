package Java.SoundPlayer;

import javax.sound.sampled.AudioFormat;
import javax.sound.sampled.AudioSystem;
import javax.sound.sampled.LineUnavailableException;
import javax.sound.sampled.SourceDataLine;

public class Beep {
    public static void main(String[] args) {
        System.out.println("Hello World! Beep Beep!");
        
        Sound boop = new Sound(3);
        boop.play();
    }

    public static class Sound {
        public int delay;
        public int duration;
        public int sampleRate;
        public double pitch;

        public Sound(int delay) {
            this.delay = delay;
            this.duration = 1;
            this.sampleRate = 44100;
            this.pitch = 600;
        }

        public void play() {
            byte[] buf = new byte[ 1 ];
            AudioFormat af = new AudioFormat( (float )sampleRate, 8, 1, true, false );
            try (SourceDataLine sdl = AudioSystem.getSourceDataLine( af )) {
                sdl.open();
                sdl.start();
                for (int i = 0; i < duration * (float )sampleRate / 1000; i++) {
                    double angle = i / ( (float )sampleRate / pitch ) * 2.0 * Math.PI;
                    buf[ 0 ] = (byte )( Math.sin( angle ) * 100 );
                    sdl.write( buf, 0, 1 );
                }
                sdl.drain();
                sdl.stop();
            } catch (LineUnavailableException e) {
                e.printStackTrace();
            }
        }
    }
}
