/*
    Rappresento, utilizzando la struttura dati piú appropriata,
     una lista di membri di un team.
    Ciascun membro del team avrá come caratteristica name, role, image
*/

const teamMembers = [];
const members = 11;
const playersName = ['Nicola', 'Matteo', 'Marco', 'Luca', 'Giovanni', 'Alessandro', 'Stefano', 'Andrea', 'Federico', 'Tommaso', 'Filippo', ]
const soccer11Layout = {portiere: 1, difensore: 4, mediano: 3, attaccante: 2, punta: 1};

const finalLayout = revealLayout (soccer11Layout);
console.log(finalLayout);


//LE MIE FUNZIONI
function revealLayout (soccer11Layout) {
    const rolesList = [];

for (let key in soccer11Layout) {
    console.log(soccer11Layout[key]);
    const numberPerRole = soccer11Layout[key];
    for (let i = 0; i < numberPerRole; i++) {
        rolesList.push(`${key}`);
    }
}
return rolesList;
}



                        