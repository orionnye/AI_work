// import java.util.concurrent.atomic.AtomicInteger;

// import Java.MultiThreadedNodeTree.MultiThreadNodeTree.Node;

// public class ThreadTest {

//     private static final AtomicInteger activeThreadCount = new AtomicInteger(0);

//     public static void main(String[] args) {
//         int basePitch = 440;
//         int numNotesPerChain = 100;
//         int sampleRate = 44100;
//         int duration = 500; // ms
//         int delay = 100; // ms

//         int numChains = 1; // Start with 1 chain
//         boolean success = true;

//         while (success) {
//             System.out.println("Testing with " + numChains + " chains...");
//             success = testWithChains(numChains, basePitch, numNotesPerChain, sampleRate, duration, delay);
//             numChains++;
//         }

//         System.out.println("Maximum chains before issues: " + (numChains - 1));
//     }

//     private static boolean testWithChains(int numChains, int basePitch, int numNotesPerChain, 
//                                           int sampleRate, int duration, int delay) {
//         activeThreadCount.set(0); // Reset thread count

//         for (int i = 0; i < numChains; i++) {
//             Node root = new Node(delay);
//             List<Note> noteChain = createNoteChain(basePitch, numNotesPerChain, sampleRate, duration, PitchChangeMode.FIXED_STEP, 10);
//             noteChain.forEach(root::addChild);
//             root.play();
//         }

//         // Wait a bit for threads to finish
//         try {
//             Thread.sleep(duration * numNotesPerChain / numChains * 2); // Adjust as needed
//         } catch (InterruptedException e) {
//             e.printStackTrace();
//         }

//         int maxThreads = activeThreadCount.get();
//         System.out.println("Maximum active threads: " + maxThreads);
//         return maxThreads < 1000; // Adjust threshold as needed 
//     }

//     // ... (createNoteChain method remains the same)
// }