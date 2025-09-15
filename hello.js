// console.log("hello node js");
const username = "anas";
const currentTime = new Date();
const hours = currentTime.getHours();
const minutes = currentTime.getMinutes();
const seconds = currentTime.getSeconds();
console.log(hours);
console.log(minutes);
console.log(`Time is ${hours}: ${minutes}: ${seconds}`);

let greeting;
if (hours < 12) {
  greeting = "good morning";
} else if (hours < 18) {
  greeting = "good afternoon";
} else {
  greeting = "good evening";
}

console.log(`${greeting},  ${username}! Welcome Node js `);
