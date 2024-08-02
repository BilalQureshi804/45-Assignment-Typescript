//ASSIGNMENT 16
//



// let GuestList:string[]=["Rafia", "Aafifa", "Bilal"];
// let message:string="you are invited to dinner";
// for ( let i=0; i < GuestList.length; i++){
//     console.log(`Dear ${GuestList[i]}, ${message}`);   

       
// }
// console.log(`"Unfortunately ${GuestList[1]},"can't come to dinner."`);
// GuestList[1]= "Madhia";
// console.log("\NEW LIST OF INVITATION :\n");
//  for( let j=0; j < GuestList.length; j++){
//     console.log(`Dear ${GuestList[j]}: \n you are invited to dinner! \n`);

//  }
// console.log("Good news! We 've found a bigger dinner table, so more space is available. So our new guests are:\n")

// GuestList.unshift("Zaheer");
//  GuestList.splice(2,0, "zakir"); 
//  GuestList.push("zubair");

//  for( let i=0; i < GuestList.length; i++){
//     console.log(`Dear ${GuestList[i]} : \n you are invited to dinner! \n`);
//  }


let GuestList: string[] = ["Rafia", "Aafifa", "Bilal"];
let message: string = "you are invited to dinner";

// Initial invitations
for (let i = 0; i < GuestList.length; i++) {
    console.log(`Dear ${GuestList[i]}, ${message}`);
}

console.log(`Unfortunately, ${GuestList[1]} can't come to dinner.`);
GuestList[1] = "Madhia";

console.log("\nNEW LIST OF INVITATIONS:\n");
for (let j = 0; j < GuestList.length; j++) {
    console.log(`Dear ${GuestList[j]}, you are invited to dinner!`);
}

console.log("\nGood news! We've found a bigger dinner table, so more space is available. Our new guests are:\n");

// Adding new guests to the list
GuestList.unshift("Zaheer");
GuestList.splice(2, 0, "Zakir");
GuestList.push("Zubair");

for (let i = 0; i < GuestList.length; i++) {
    console.log(`Dear ${GuestList[i]}, you are invited to dinner!`);
}
