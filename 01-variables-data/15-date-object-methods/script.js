let x;
let d = new Date();

x = d.toString();

x = d.getTime();
x = d.valueOf();

x = d.getFullYear();

x = d.getMonth();
x = d.getMonth() + 1;

x = d.getDate();

x = d.getDay();

x = d.getHours();

x = d.getMinutes();

x = d.getSeconds();

x = d.getMilliseconds();

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

x = Intl.DateTimeFormat('en-US').format(d);
x = Intl.DateTimeFormat('en-GB').format(d);
x = Intl.DateTimeFormat('en-default').format(d);

x = Intl.DateTimeFormat('default', { month: 'long' }).format(d);

x = d.toLocaleString('default', { month: 'short' });

// Suggestion in what to use on dates(helpful)
x = d.toLocaleDateString('default', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'America/New_York',
});

console.log(x);