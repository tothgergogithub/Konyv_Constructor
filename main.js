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
            };

            visszahozGomb.onclick = function() {
                konyv.viszonoz();
                kolcsonozGomb.disabled = false;
                visszahozGomb.disabled = true;
                allapot.textContent = "Elérhető";
            };
        });
        
