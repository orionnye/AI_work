import java.awt.geom.*;

public class drawings {
  public static void main(String[] args) {
    // Create a rectangle
    Rectangle2D rect = new Rectangle2D.Double(10, 10, 50, 50);

    // Create an ellipse
    Ellipse2D ellipse = new Ellipse2D.Double(100, 100, 50, 50);

    // Create a general path
    GeneralPath path = new GeneralPath();

    // Move to the starting point
    path.moveTo(10, 10);

    // Add a line to the next point
    path.lineTo(100, 100);

    // Add a curve to the next point
    path.quadTo(50, 50, 100, 100);

    // Close the path
    path.closePath();

    // Create an area object
    Area area = new Area(rect);

    // Add the ellipse to the area
    // area.add(ellipse);

    // Subtract the path from the area
    // area.subtract(path);

    // Get the bounds of the area
    Rectangle2D bounds = area.getBounds2D();

    // Print the bounds
    System.out.println(bounds);
  }
}