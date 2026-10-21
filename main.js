function Konyv_Constructor(cim, szerzo, kiadasi_ev, oldalszam, kategoria) {
            this.konyvcim = cim;
            this.konyvszerzo = szerzo;
            this.konyvkiadasiev = kiadasi_ev;
            this.konyvoldalszam = oldalszam;
            this.konyvkategoria = kategoria;
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
        const konyv1 = new Konyv_Constructor(
            "Harry Potter és a bölcsek köve",
            "J. K. Rowling",
            1997,
            320,
            "Fantasy"
        );
        const konyv2 = new Konyv_Constructor(
            "A kis herceg",
            "Antoine de Saint-Exupéry",
            1943,
            96,
            "Filozófiai mese"
        );
        const konyv3 = new Konyv_Constructor(
            "1984",
            "George Orwell",
            1949,
            328,
            "Dístópia"
        );

        const konyvek = [];
        konyvek.push(konyv1);
        konyvek.push(konyv2);
        konyvek.push(konyv3);

        function konyvGombokBekotese(konyv, index) {
            const kolcsonozGomb = document.getElementById("kolcsonoz" + index);
            const visszahozGomb = document.getElementById("visszahoz" + index);
            const torolGomb = document.getElementById("torol" + index);
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

            torolGomb.onclick = function() {
                const konyvIndex = konyvek.indexOf(konyv);
                if (konyvIndex !== -1) {
                    konyvek.splice(konyvIndex, 1);
                }
                torolGomb.closest("tr").remove();
                frissSzabadkonyvek();
            };
        }

        konyvek.forEach(konyvGombokBekotese);
        let kovetkezoKonyvId = konyvek.length;

function konyvSorMegjelenit(konyv, id) {
    const sablon = document.getElementById("konyvSorSablon");
    const sor = sablon.content.cloneNode(true).firstElementChild;

    sor.cells[0].textContent = konyv.konyvcim;
    sor.cells[1].textContent = konyv.konyvszerzo;
    sor.cells[2].textContent = konyv.konyvkiadasiev;
    sor.cells[3].textContent = konyv.konyvoldalszam;
    sor.cells[4].firstElementChild.id = "kolcsonoz" + id;
    sor.cells[5].firstElementChild.id = "visszahoz" + id;
    sor.cells[6].id = "allapot" + id;
    sor.cells[7].firstElementChild.id = "torol" + id;

    document.getElementById("konyvTablaTorzs").appendChild(sor);
    konyvGombokBekotese(konyv, id);
}

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
    if(document.getElementById("cim").value === "" ||
       document.getElementById("szerzo").value === "" ||
       document.getElementById("kiadasiEv").value === "" ||
       document.getElementById("oldalszam").value === "" ||
       document.getElementById("kategoria").value === "")
       {
        alert("Kérlek töltsd ki az összes mezőt!");
       }
    const cim = document.getElementById("cim").value;
    const szerzo = document.getElementById("szerzo").value;
    const kiadasiEv = Number(document.getElementById("kiadasiEv").value);
    const oldalszam = Number(document.getElementById("oldalszam").value);
    const kategoria = document.getElementById("kategoria").value;

    const ujKonyv = new Konyv_Constructor(
        cim, szerzo, kiadasiEv, oldalszam, kategoria
    );

    konyvek.push(ujKonyv);
    konyvSorMegjelenit(ujKonyv, kovetkezoKonyvId++);
}
    
