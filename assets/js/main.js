/*
CREO UNA SQUADRA DI CALCIO
    Rappresento, utilizzando la struttura dati piú appropriata,
     una lista di membri di un team.
    Ciascun membro del team avrá come caratteristica name, role, image
*/

const membersNumber = 11;
const playersName = ['Nicola', 'Matteo', 'Marco', 'Luca', 'Giovanni', 'Alessandro', 'Stefano', 'Andrea', 'Federico', 'Tommaso', 'Filippo', ]
const soccer11Layout = {portiere: 1, difensore: 4, mediano: 3, attaccante: 2, punta: 1};

const finalRolesLayout = revealLayout (soccer11Layout);
console.log(finalRolesLayout);

const finalMembersLayout = randomRoles_definedLayout (playersName);
console.log(finalMembersLayout);




//LE MIE FUNZIONI

//la funzione restituisce la lista della formazione in base alla lista delle quantità dei ruoli inserita come parametro
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

//la funzione restituisce sempre un layout definito dal primo paramtero scegliendo i membri a caso dalla lista del secondo parametro
function randomRoles_definedLayout (playersName) {
    const membersLayout = [];
    
    while (membersLayout.length < playersName.length) {
        const randomNumber = Math.floor(Math.random() * playersName.length);
        if (!membersLayout.includes(randomNumber)) {
            membersLayout.push(randomNumber)
        }
    }
    return membersLayout;
}