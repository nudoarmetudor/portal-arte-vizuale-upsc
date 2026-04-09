document.addEventListener('DOMContentLoaded', () => {

    // Selectăm toate elementele de care avem nevoie
    const filterAn = document.getElementById('filter-an');
    const filterSpecializare = document.getElementById('filter-specializare');
    const filterCategorie = document.getElementById('filter-categorie');
    const searchNume = document.getElementById('search-nume');
    const proiecte = document.querySelectorAll('.proiect-item');

    // Funcția principală de filtrare
    const filterProjects = () => {
        // Preluăm valorile din filtre și le convertim la litere mici
        const anValue = filterAn.value.toLowerCase();
        const specializareValue = filterSpecializare.value.toLowerCase();
        const categorieValue = filterCategorie.value.toLowerCase();
        const numeValue = searchNume.value.toLowerCase();

        // Iterăm prin fiecare proiect
        proiecte.forEach(proiect => {
            // Preluăm datele din atributele 'data-*'
            const an = proiect.dataset.an;
            const specializare = proiect.dataset.specializare;
            const categorie = proiect.dataset.categorie;
            const nume = proiect.dataset.nume;

            // Verificăm dacă proiectul curent îndeplinește TOATE condițiile
            const matchesAn = anValue === 'toate' || an === anValue;
            const matchesSpecializare = specializareValue === 'toate' || specializare === specializareValue;
            const matchesCategorie = categorieValue === 'toate' || categorie === categorieValue;
            const matchesNume = nume.includes(numeValue);

            // Dacă toate condițiile sunt adevărate, afișăm proiectul, altfel îl ascundem
            if (matchesAn && matchesSpecializare && matchesCategorie && matchesNume) {
                proiect.classList.remove('hide');
            } else {
                proiect.classList.add('hide');
            }
        });
    };

    // Adăugăm un "event listener" pentru fiecare filtru, care să apeleze funcția de filtrare la fiecare schimbare
    filterAn.addEventListener('change', filterProjects);
    filterSpecializare.addEventListener('change', filterProjects);
    filterCategorie.addEventListener('change', filterProjects);
    searchNume.addEventListener('input', filterProjects); // 'input' este mai bun pentru căutare în timp real

    // Apelăm funcția o dată la încărcarea paginii pentru a ne asigura că totul este în regulă
    // (deși în acest caz nu filtrează nimic la început)
    filterProjects();
});
