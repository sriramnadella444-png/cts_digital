using System;
using System.Data.SqlClient;

class Program
{
    static void Main()
    {

        // C# Variables

        string name = "sri ram";
        int age = 20;


        Console.WriteLine(name);
        Console.WriteLine(age);



        // Array Example

        string[] skills =
        {
            "C#",
            "SQL",
            "Angular"
        };


        foreach(string skill in skills)
        {
            Console.WriteLine(skill);
        }



        // Condition Example

        if(age >= 18)
        {
            Console.WriteLine("Adult");
        }
        else
        {
            Console.WriteLine("Not Adult");
        }



        // Loop Example

        for(int i = 1; i <= 5; i++)
        {
            Console.WriteLine(i);
        }



        // ADO.NET Connection Example


        string connectionString =
        "server=localhost;database=StudentDB;trusted_connection=true";


        SqlConnection con =
        new SqlConnection(connectionString);


        try
        {

            con.Open();

            Console.WriteLine("Database Connected");


            SqlCommand cmd =
            new SqlCommand(
            "SELECT * FROM Student",
            con);


            SqlDataReader reader =
            cmd.ExecuteReader();


            while(reader.Read())
            {

                Console.WriteLine(
                reader["Name"]);

            }


        }

        catch(Exception e)
        {

            Console.WriteLine(e.Message);

        }


        finally
        {

            con.Close();

            Console.WriteLine("Connection Closed");

        }


    }
}