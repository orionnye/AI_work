

import java.util.*;
import java.lang.*;
import java.io.*;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.SimpleDateFormat;
import java.util.Date;

public static void createFileWithCurrentDate(String pathString) {

    try {
        // Validate the path to make sure it's not null or empty
        if (pathString == null || pathString.isEmpty()) {
            throw new IllegalArgumentException("Invalid path. Path cannot be null or empty.");
        }

        // Create the Path object
        Path path = Paths.get(pathString);

        // Check if a file already exists at the location
        if (Files.exists(path)) {
            throw new IOException("File already exists: " + pathString);
        }

        // Get current date and format it
        Date currentDate = new Date();
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        String formattedDate = dateFormat.format(currentDate);

        // Create the file and write the date to it
        try (FileWriter fileWriter = new FileWriter(pathString)) {
            fileWriter.write(formattedDate);
        }

        System.out.println("File created successfully: " + pathString);

    } catch (IOException e) {
        System.err.println("Error creating file: " + e.getMessage());
    } catch (IllegalArgumentException e) {
        System.err.println("Invalid input: " + e.getMessage());
    }
}