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

        function hozzad() {
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

            const tabla = document.getElementById("konyvek");

        
            tabla.innerHTML = "";

            konyvek.forEach(function(konyv) {
                const sor = document.createElement("tr");

                const cim = document.createElement("td");
                cim.textContent = konyv.konyvcim;

                const szerzo = document.createElement("td");
                szerzo.textContent = konyv.konyvszerzo;

                const kiadasi_ev = document.createElement("td");
                kiadasi_ev.textContent = konyv.konyvkiadasiev;

                const oldalszam = document.createElement("td");
                oldalszam.textContent = konyv.konyvoldalszam;

                sor.appendChild(cim);
                sor.appendChild(szerzo);
                sor.appendChild(kiadasi_ev);
                sor.appendChild(oldalszam);

                tabla.appendChild(sor);
            });
        }
        
