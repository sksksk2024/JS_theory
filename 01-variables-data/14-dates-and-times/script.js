let d;

d = new Date();

d = d.toString();

d = new Date(2021, 0, 10, 12, 30, 0);

d = new Date('2021-07-10T12:30:00');
d = new Date('07/10/2021 12:30');

d = new Date('2022-07-10'); // off by 1 day depending on the region
d = new Date('07-10-2022');

d = Date.now();

d = new Date();
d = d.getTime();
d = d.valueOf();

d = new Date(1727000835017);

d = Math.floor(Date.now() / 1000); // showing in seconds, not in miliseconds as before

console.log(d);