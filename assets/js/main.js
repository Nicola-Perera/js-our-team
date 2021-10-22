/*
    Rappresento, utilizzando la struttura dati piú appropriata,
     una lista di membri di un team.
    Ciascun membro del team avrá come caratteristica name, role, image
*/

const teamMembers = [];
const members = 11;
const playersName = ['Nicola', 'Matteo', 'Marco', 'Luca', 'Giovanni', 'Alessandro', 'Stefano', 'Andrea', 'Federico', 'Tommaso', 'Filippo', ]


const player = {
    nome: 'Nicola',
    ruolo: 'portiere',
    foto: `url(https://picsum.photos/id/1/200/300)`
};



for (let i = 0; i < members; i++) {
    teamMembers.push(player);
}
// console.log(teamMembers);



                        