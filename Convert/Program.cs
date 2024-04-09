namespace Convert
{
    internal class Program
    {
        static void Main(string[] args)
        {
            List<German> lstGerman = new List<German>();    
            using (StreamReader sr = new StreamReader(@"C:\Users\ita6-tn03\OneDrive - IT-Akademie Dr. Heuer GmbH\Neuer Ordner\deutsch-for-b2c1c2 by Geil [1353153]\deutsch-for-b2c1c2 [1353153].csv"))
            {
                string line;

                while ((line = sr.ReadLine()) != null)
                {
                    
                

                    string[] arr = line.Split(',');
                    arr[0] = arr[0].Trim('\"');
                    arr[1] = arr[1].Trim('\"');

                    German temp = new German();
                    temp.EnglishWord = arr[1];

                    string[] tempStringArr = arr[0].Split(' ');
                    if (tempStringArr[0] == "der" || tempStringArr[0] == "die" || tempStringArr[0] == "das")
                    {
                        temp.Artikel = tempStringArr[0];
                        temp.GermanWord = arr[0].Substring(4, arr[0].Length-4);
                    }
                    else
                    {
                        temp.GermanWord = arr[0];
                    }



                    Console.WriteLine(temp);

                }


            }
        }
    }

    class German
    {
        public string Artikel { get; set; }
        public string GermanWord { get; set; }
        public string EnglishWord { get; set; }

        public override string ToString()
        {
            return $"Artikel: {Artikel} Germanword: {GermanWord} Englishword: {EnglishWord}";
        }
    }
}
