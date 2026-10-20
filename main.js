function Konyv_Constructor(cim, szerzo, kiadasi_ev, oldalszam) {
            this.konyvcim = cim;
            this.konyvszerzo = szerzo;
            this.konyvkiadasiev = kiadasi_ev;
            this.konyvoldalszam = oldalszam;
            this.kolcsonoze = false;

            this.kolcsonoz = () => {
                this.kolcsonoze = true;
            };

            this.viszonoz = () => {
                this.kolcsonoze = false;
            };

            this.konykiiras = function() {
                return this.konyvcim + " " +
                    this.konyvszerzo + " " +
                    this.konyvkiadasiev + " " +
                    this.konyvoldalszam;
            };
        }
        const konyvek = [
            new Konyv_Constructor(
                "Harry Potter és a bölcsek köve",
                "J. K. Rowling",
                1997,
                320
            ),
            new Konyv_Constructor(
                "A kis herceg",
                "Antoine de Saint-Exupéry",
                1943,
                96
            ),
            new Konyv_Constructor(
                "1984",
                "George Orwell",
                1949,
                328
            )
        ];
        konyvek.forEach(function(konyv, index) {
            const kolcsonozGomb = document.getElementById("kolcsonoz" + index);
            const visszahozGomb = document.getElementById("visszahoz" + index);
            const allapot = document.getElementById("allapot" + index);

            kolcsonozGomb.onclick = function() {
                konyv.kolcsonoz();
                kolcsonozGomb.disabled = true;
                visszahozGomb.disabled = false;
                allapot.textContent = "Kölcsönözve";
                frissSzabadkonyvek();
            };

            visszahozGomb.onclick = function() {
                konyv.viszonoz();
                kolcsonozGomb.disabled = false;
                visszahozGomb.disabled = true;
                allapot.textContent = "Elérhető";
                frissSzabadkonyvek();
            };
        });
        function szabadkonyvek() 
        {   

           const szabadKonyvek = [];
           
           for(const konyv of konyvek) {
                if(konyv.kolcsonoze === false) {
                    szabadKonyvek.push(konyv.konyvcim);
                }
               
                
            }
            if(szabadKonyvek.length === 0) 
                {
                    szabadKonyvek.push("Nincs szabad könyv");   
                }
        return szabadKonyvek;
    }
    function frissSzabadkonyvek() 
    {
        document.getElementById("megjelen").textContent = szabadkonyvek().join(", ");   
    }
    
    document.getElementById("szabadkonyvek").addEventListener("click", function() {
    frissSzabadkonyvek();
    });
    function legregebbikonyv() 
    {
        
   

    let legregebbi = konyvek[0];

    for (const konyv of konyvek) {
        if (konyv.konyvkiadasiev < legregebbi.konyvkiadasiev) {
            legregebbi = konyv;
        }
    }

    document.getElementById("legregebbiMegjelen").textContent =
        legregebbi.konyvcim + " (" + legregebbi.konyvkiadasiev + ")";
}
function legvastagabbkonyv() 
{
    let legvastagabb = konyvek[0];
    for (const konyv of konyvek) {
        if (konyv.konyvoldalszam > legvastagabb.konyvoldalszam) {
            legvastagabb = konyv;
        }
    }
    document.getElementById("legvastagabbMegjelen").textContent =
        legvastagabb.konyvcim + " (" + legvastagabb.konyvoldalszam + " oldal)";
}
function atlagosOldalszamkonyv(){
    let osszesOldalszam = 0;
    for (const konyv of konyvek) {
        osszesOldalszam += konyv.konyvoldalszam;
    }
    const atlagosOldalszam = osszesOldalszam / konyvek.length;
    document.getElementById("atlagosOldalszamMegjelen").textContent =
        atlagosOldalszam.toFixed(2) + " oldal";
}
function hozzaadKonyv()
{
    const cim = document.getElementById("cim").value;
    const szerzo = document.getElementById("szerzo").value;
    const kiadasiEv = parseInt(document.getElementById("kiadasiEv").value);
    const oldalszam = parseInt(document.getElementById("oldalszam").value);
   if(cim=="" || szerzo=="" || isNaN(kiadasiEv) || isNaN(oldalszam)){
    alert("Kérlek töltsd ki az összes mezőt!");
   }

}
    
