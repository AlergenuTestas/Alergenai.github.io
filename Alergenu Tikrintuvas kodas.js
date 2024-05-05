<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alergenų tikrinimas</title>
</head>
<body>
    <h1>Alergenų tikrinimas</h1>
    <p><b>Įkelk sudėtį čia:</b></p>
    <!-- Modified textarea to convert input to lowercase and ignore commas -->7:55 PM 5/2/20247:55 PM 5/2/2024
    <textarea id="inputWords" rows="20" cols="50" oninput="this.value = this.value.toLowerCase().replace(/,/g, '')"></textarea>
    <button onclick="matchWords()">TIKRINTI</button>
    <div id="matchedWords"></div>

    <script>
        // List of words stored in the program
        const storedWords = ["acetato-o", "(acetato-o) fenilgyvsidabris", "bufenas", "mercuron", "fenilmerkuriacetatas", "(aceto)fenilgyvsidabris", "aceto fenilgyvsidabris", "celmer", "neantina", "fenilo gyvsidabris", "acetoksifenilo gyvsidabris", "contra kremas", "norforms", "amonio acetatas", "cosan pma", "nildew ac 30", "pmal", "fenilo gyvsidabrio darinys", "gallotox", "nuodex pma 18", "scuti", "(acetoksimercuri) benzenas", "acetoksimercuri benzenas", "hong nien", "nylmerate", "seedtox", "agrosan gn 5", "liquifenas", "pamisan", "shimmer-ex", "mersol algi", "acticide", "einecs 247-500-7", "einecs 247", "einecs 500", "einecs 7", "methylchloroisothiazolinone", "algucid ch50", "euxyl k 100", "methylisothlazolinone", "amerstat 250", "fennosan it 21gr 856 izolin", "groto b1932", "mitco b1932", "mitco k", "mitco tk2", "paretolis", "cl+ me-izotlazolinonas", "izotiazolonas", "parmetolis df 35", "parmetolis df 12", "parmetolis a23", "parmetolis k50", "parmetolis k40", "parmetolis df 18", "chloro-2-metil-3(2h)-zotiazolonas", "kathon cg", "kathon dp", "kathon lx", "kathon ut", "kathon wt", "p3 multan d", "chlor-2-meti-4-zotiazolin-3-onas", "mergal k7", "piror p109", "chloro-2-metilizotiazol-3-onas", "metat gt", "metatin gt", "specialus mx 323", "chloro-2-metil-4-izotiazolin-3-onas", "pro clin 150", "dihidroabietilo alkoholis", "hidroabietilo alkoholis", "abitolis", "2h 1 benzopiranas 6 ol", "dl-alfa-tokoferilo acetatas", "3,4 dihidro-2,5", "7,8 tetrametil-2,4 trimetiltridecilas", "8 trimetiltridecilas", "12 trimetiltridecilas", "dl alfatokoferolis all-rac-alfa-tokoferilo acetatas", "efinalis", "alfa- tokoferolio acetatas", "alfa-tokoferolio acetatas", "sintoferolio acetatas", "ccri s 6054", "vitamino e acetatas di forma", "dl-alfa-tokoferolio acetatas", "3,4,5-trihidroksibenzen-1-propilkarboksilata", "nipagallina p", "3,4,5-trihidroksibenzenkarboksirūgšties propilo esteri", "pg", "galino rügsties propilo ester", "progalina p", "n-propila", "galatas", "propilo 3,4,5-trihidroksibenzoatas", "n-propilo 3,4,5-trihidroksibenzoatas", "propilgalatas", "3,4,5-trihidroksibenzenkarboksirügsties npropilo esteris", "propilesteris", "nipa 49", "tenox pg", "acetate-o", "(acetate-o) phenylmercuric acetate", "bufenas", "mercuron", "phenylmercuriacetate", "(aceto)phenylmercuric acetate", "aceto phenylmercuric acetate", "celmer", "neantina", "phenyl mercuric acetate", "acetoxphenylmercuric acetate", "contra cream", "norforms", "ammonium acetate", "cosan pma", "nildew ac 30", "pmal", "phenylmercuric acetate derivative", "gallotox", "nuodex pma 18", "scuti", "(acetoximercuri)benzene", "acetoximercuri benzene", "hong nien", "nylmerate", "seedtox", "agrosan gn 5", "liquifenas", "pamisan", "shimmer-ex", "mersol algi", "acticide", "einecs 247-500-7", "einecs 247", "einecs 500", "einecs 7", "methylchloroisothiazolinone", "algucid ch50", "euxyl k 100", "methylisothlazolinone", "amerstat 250", "fennosan it 21gr 856 izolin", "groto b1932", "mitco b1932", "mitco k", "mitco tk2", "paretolis", "cl+ me-isothiazolinones", "isothiazolinones", "parmetolis df 35", "parmetolis df 12", "parmetolis a23", "parmetolis k50", "parmetolis k40", "parmetolis df 18", "chloro-2-methyl-3(2h)-isothiazolones", "kathon cg", "kathon dp", "kathon lx", "kathon ut", "kathon wt", "p3 multan d", "chlor-2-methyl-4-isothiazolin-3-ones", "mergal k7", "piror p109", "chloro-2-methylisothiazol-3-ones", "metat gt", "metatin gt", "special mx 323", "chloro-2-methyl-4-isothiazolin-3-ones", "pro clin 150", "dihydroabiethyl alcohol", "hydroabiethyl alcohol", "abitolis", "2h 1 benzopyran 6 ol", "dl-alpha-tocopheryl acetate", "3,4-dihydro-2,5", "7,8-tetramethyl-2,4-trimethyltridecyl", "8-trimethyltridecyl", "12-trimethyltridecyl", "dl alpha-tocopherol", "all-rac-alpha-tocopheryl acetate", "efinalis", "alpha-tocopherol acetate", "alpha-tocopherol acetate", "sintoferol acetate", "ccri s 6054", "vitamin e acetate", "dl-alpha-tocopheryl acetate", "3,4,5-trihydroxybenzen-1-propylcarboxylate", "nipagallina p", "3,4,5-trihydroxybenzenecarboxylic acid propyl esters", "pg", "galic acid propyl ester", "progalina p", "n-propyl", "galatas", "propyl 3,4,5-trihydroxybenzoate", "n-propyl 3,4,5-trihydroxybenzoate", "propyl gallate", "3,4,5-trihydroxybenzenecarboxylic acid n-propyl ester", "propyl ester", "nipa 49", "tenox pg", "fenilio gyvsidabrio acetatas", "metilizotiazolinonas", "metilchloroizotiazolinas", "metilizotiazolinonas+metilchloroizotiazolinas", "methylisothiazolinone", "methylchloroisothiazolinone", "methylisothiazolinone+methylchloroisothiazolinone", "methylisothiazolinone + methylchloroisothiazolinone", "propio galatas", "propyl gallate", "galato mišinys", "gallate mišinys", "hidroabitelo alkoholis", "hidroabitelo alcohol", "tokoferolis", "tocopherol", "fenilio gyvsidabrio acetatas", "phenyl mercuric acetate", "abietinė rūgštis", "abietilo alkoholis", "abitolis", "kolofonio Dercolyte ZS", "metilo abietato alkoholis", "Dertomalo Dertofenas", "Granolito SO 1818", "terebintų derva", "Hercolyn D", "Gumos Foral 105", "derva", "abietilo alkoholis", "Myroxylon pereirae derva", "dihidroabietilo alkoholis", "medžio derva", "tocopheryl"];

        // Function to match words from the input with stored words
        function matchWords() {
            // Get the input sentence from the textarea
            const inputText = document.getElementById("inputWords").value.toLowerCase();
            // Clear previous results
            document.getElementById("matchedWords").innerHTML = "";
            // Check if the input sentence contains any of the stored words
            const matched = storedWords.filter(word => inputText.includes(word));
            // Display matched words
            if (matched.length > 0) {
                const resultDiv = document.getElementById("matchedWords");
                resultDiv.innerHTML = "<h3>Alergenai:</h3>";
                const ul = document.createElement("ul");
                matched.forEach(match => {
                    const li = document.createElement("li");
                    li.textContent = match;
                    ul.appendChild(li);
                });
                resultDiv.appendChild(ul);
            } else {
                document.getElementById("matchedWords").innerHTML = "<p>Alergenų nėra (GAL)</p>";
            }
        }
    </script>
</body>
</html>
