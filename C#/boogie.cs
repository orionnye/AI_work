using System.ServiceProcess; // Import necessary namespace

class ServiceMonitor
{
    static void Main()
    {
        ServiceController service = new ServiceController("ServiceName"); // Replace "ServiceName" with the actual service name
        while (true)
        {
            if (service.Status == ServiceControllerStatus.Stopped) service.Start(); // Check status and start if stopped
            System.Threading.Thread.Sleep(5000); // Sleep for 5 seconds before checking again
        }
    }
}

using System.ServiceProcess; // Import ServiceProcess namespace

public class ServiceMonitor 
{
    static void Main() 
    {
        ServiceController sc = new ServiceController("ServiceName"); // Replace "ServiceName" with the actual service name

        while (true) 
        {
            if (sc.Status == ServiceControllerStatus.Stopped) 
            {
                sc.Start(); // Start the service if stopped
                sc.WaitForStatus(ServiceControllerStatus.Running); // Wait for it to reach running state
            }
            System.Threading.Thread.Sleep(5000); // Check every 5 seconds
        }
    }
}