package Java.DataRetrieval;

// Reading data from a file using FileReader 
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.io.File;  // Import the File class
import java.io.FileNotFoundException;  // Import this class to handle errors
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner; // Import the Scanner class to read text files

public class Data {
    List<float> vertices;
    List<int> indices;
}

public class Reader {
  public static void readFromFile(String file) {
    try {
        File myObj = new File(file);
        Scanner myReader = new Scanner(myObj);
        while (myReader.hasNextLine()) {
            String data = myReader.nextLine();
            System.out.println(data.toString());
        }
        myReader.close();
        } catch (FileNotFoundException e) {
        System.out.println("An error occurred.");
        e.printStackTrace();
        }
  }
  public static void interpretData(String data) {
    String lines[] = data.split("\\r?\\n");
    Data d = new Data();
    for(String s : lines) {
        if (s.startsWith("v")) {
            String line[] = s.split(" ");
            for(String i : line) {
                d.vertices.add(Float.parseFloat(i));
            }
        }
        else if (s.startsWith("d")) {
            String line[] = s.split(" ");
            for(String i : line) {
                d.indices.add(Integer.parseInt(i));
            }
        }
    }
  }
}