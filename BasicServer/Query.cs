namespace BasicServer;

public class Query
{
    public string Greetings(string name = "World")
        => $"Hello, {name}!";
}