//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
let GuestList = ["Rafia", "Aafifa", "Bilal"];
let message = "you are invited to dinner";
for (let i = 0; i < GuestList.length; i++) {
    console.log(`Dear ${GuestList[i]}, ${message}`);
}
console.log(`"Unfortunately ${GuestList[1]},"can't come to dinner."`);
GuestList[1] = "Madhia";
console.log("\NEW LIST OF INVITATION :\n");
for (let j = 0; j < GuestList.length; j++) {
    console.log(`Dear ${GuestList[j]}: \n you are invited to dinner! \n`);
}
export {};
