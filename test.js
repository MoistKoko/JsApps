namespace ConsoleApp1;

class Program
{
    static void Main(string[] args)
    {
        int reps = 0;
        int num = 0;
        int num2 = 1;
        double total = 0;

        System.Console.Write("How many items do you have: ");
        int amount = Convert.ToInt32(Console.ReadLine());
        double[] items = new double[amount];

        if (amount == 0)
        {
            System.Console.WriteLine("Guess youre broke!! ;)");
        }
        else
        {
            do
            {
                System.Console.Write("How much does your item cost? ");
                items[num] = Convert.ToDouble(Console.ReadLine());
                num++;
                reps++;
            } while (reps != amount);

            Console.Clear();

            foreach (double item in items)
            {
                total += item;
                System.Console.WriteLine("Item Nr. " + num2 + " costs " + item + "$");
                num2++;
            }

            System.Console.WriteLine("All your clothes together cost " + total + "$");
            System.Console.WriteLine("Would you like a bag with it? Only costs 0.70 Cent! (Y/N)");
            String answer = Console.ReadLine();
            answer = answer.ToUpper();

            if (answer == "Y")
            {
                total += 0.7;
                System.Console.WriteLine(
                    "Thanks for your additional purchase ;) The total is now " + total + "$");
            }
            else
            {
                System.Console.WriteLine("Ok, then good luck carrying it :(");
            }

            Console.ReadKey();
        }
    }
}
