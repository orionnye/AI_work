using System;

class Program
{
    static void Main()
    {
        // Create an instance of the random number generator.
        // This instance is reusable and can generate multiple random numbers.
        Random rand = new Random();

        // Specify the range between which the random number should be generated.
        // Here, we're generating a number between 1 and 100, inclusive.
        int minValue = 1;
        int maxValue = 101; // the upper bound is exclusive, so 101 is used for numbers up to 100.
        
        // Generate a random integer within the specified range.
        int randomNumber = rand.Next(minValue, maxValue);

        // Print the random number to the console.
        Console.WriteLine("Generated random number: " + randomNumber);

        // Prevent console from closing if running from GUI.
        Console.WriteLine("Press any key to exit.");
        Console.ReadKey();
    }
}