let players = ['Rohit', "samson", "Sehwag", "Virat", "Dhoni","siraj"];
// Delete all users contains with 'sa'
// update the user virat to 'virat kholi'
// display all users in the console with 'mr/ms'

let delete_player = players.filter(player => !player.includes('sa'));
console.log(delete_player)


let modification_players = players.map(player => {
    if (player === 'Virat') {
      return 'Virat Kohli';
    } else {
      return player;
    }
  });
  console.log(modification_players)


let change_Name = players.map(player => 'Mr/Ms ' + player);
console.log(change_Name)

