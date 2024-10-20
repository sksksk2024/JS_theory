// Solution
function Player (name) {
  this.name = name;
  this.lvl = 1;
  this.points = 0;
}

Player.prototype.gainXp = function (xp) {
  this.points += xp;

  if (this.points >= 10) {
    this.lvl++;
    this.points -= 10;
  }

  console.log(this.describe());
}

Player.prototype.describe = function () {
  return `${this.name} is level ${this.lvl} with ${this.points} experience points`;
}

const player1 = new Player('Bob');
const player2 = new Player('Alice');

player1.gainXp(4);
player2.gainXp(7);
player1.gainXp(5);
player2.gainXp(1);
player1.gainXp(7);
player2.gainXp(9);
player1.gainXp(5);
player2.gainXp(2);

// console.log(player1.describe());
// console.log(player2.describe());

// My idea to resolve the provlem(is messed up 'cus i didn't know how to work with multiple players :\)
// function Player (name) {
//   this.name = name;
// }

// Player.prototype.describe1 = () => {
//   console.log(`${obj[0].player.name} is level ${obj[0].level} with ${obj[0].player.points} experience points`);
// }

// Player.prototype.describe2 = () => {
//   console.log(`${obj[1].player.name} is level ${obj[1].level} with ${obj[1].player.points} experience points`);
// }

// let lvl = 1, points = 0;

// let obj = [
//   player1 = {
//     player: new Player('Bob'),
//     level: lvl,
//     points: points,
//   },
//   player2 = {
//     player: new Player('Alice'),
//     level: lvl,
//     points: points,
//   },
// ];

// Player.prototype.gainXp1 = function () {
//   for(let i = 1; i <= 10; i++){
//     obj[0].player1.points += Math.floor(Math.random() * 10) + 1;
//     if (player1.points >= 10) {
//       obj[0].player1.level++, obj[0].player1.points -= 10;
//     }
//   }
// }

// Player.prototype.gainXp2 = function () {
//   for(let i = 1; i <= 10; i++){
//     obj[1].player2.points += Math.floor(Math.random() * 10) + 1;
//     if (player1.points >= 10) {
//       obj[1].player2.level++, obj[1].player2.points -= 10;
//     }
//   }
// }

// obj[0].player1.player.gainXp1();
// console.log(obj[0].player.describe1());
// obj[1].player2.player.gainXp2();
// console.log(obj[1].player.describe2());