var GuestList = ["Rafia", "Aafifa", "Bilal"];
var message = "you are invited to dinner";
// Initial invitations
for (var i = 0; i < GuestList.length; i++) {
    console.log("Dear ".concat(GuestList[i], ", ").concat(message));
}
console.log("Unfortunately, Aafifa can't come to dinner.");
GuestList[1] = "Madhia";
console.log("\nNEW LIST OF INVITATIONS:\n");
for (var j = 0; j < GuestList.length; j++) {
    var prefix = GuestList[j] === "Madhia" ? "Ms." : "Mr./Ms.";
    console.log("Dear ".concat(prefix, " ").concat(GuestList[j], ", you are invited to dinner!"));
}
console.log("\nGood news! We've found a bigger dinner table, so more space is available. Our new guests are:\n");
// Adding new guests to the list
GuestList.unshift("Zaheer");
GuestList.splice(2, 0, "Zakir");
GuestList.push("Zubair");
for (var i = 0; i < GuestList.length; i++) {
    var prefix = GuestList[i] === "Madhia" ? "Ms." : "Mr./Ms.";
    console.log("Dear ".concat(prefix, " ").concat(GuestList[i], ", you are invited to dinner!"));
}
console.log("Unfortunately, the new dinner table won't arrive in time, so we can only invite two people for dinner.\n");
while (GuestList.length > 2) {
    var notInvited = GuestList.pop();
    console.log("Sorry, due to limited space we can't invite you to dinner Mr./Ms. ".concat(notInvited, "."));
}
for (var i = 0; i < GuestList.length; i++) {
    var prefix = GuestList[i] === "Madhia" ? "Ms." : "Mr./Ms.";
    console.log("Dear ".concat(prefix, " ").concat(GuestList[i], ", you are still invited to dinner!"));
}
GuestList.pop();
GuestList.pop();
console.log(GuestList);
