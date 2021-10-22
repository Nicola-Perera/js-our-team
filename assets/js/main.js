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

const finalMembersLayout = shuffle (playersName);
console.log(finalMembersLayout);

const finalTeam = randomRolesToMembers (finalRolesLayout, finalMembersLayout);
console.log(finalTeam);




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

//la funzione mescola casualmente l'ordine degli elementi della lista inserita come parametro
function shuffle (playersName) {
    const membersLayout = [];
    const shuffledNames = [];
    
    while (membersLayout.length < playersName.length) {
        const randomNumber = Math.floor(Math.random() * playersName.length);
        if (!membersLayout.includes(randomNumber)) {
            membersLayout.push(randomNumber)
        }
    }
    for (let i = 0; i < playersName.length; i++) {
        shuffledNames.push(playersName[membersLayout[i]])
    }

    return shuffledNames;
}

// la funzione assegna ogni ruolo al corrispondente membro della squadra
function randomRolesToMembers (finalRolesLayout, finalMembersLayout) {
    const team = [];
    const range = finalRolesLayout.length;
    for (let i = 0; i < range; i++) {
        let player = {
            name: finalMembersLayout[i],
            ruolo: finalRolesLayout[i]
        }
        team.push(player);
    }
    return team;
}