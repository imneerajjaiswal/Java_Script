// nested else

// how is make program(aisa program bnana hai) 
// winning number 19
// 19 your guess is right
// 17 is too low
// 20 is too high 
//  prompt (hame value lene k liye iska use krte hai)

let age = 19;
let aukaat = prompt("अपनी उम्र बता सुअर")
if(age === aukaat){
    console.log("Haa tu suar hai")
}else{
    if(userGuess<winningNumber){
        console.log("अभी तू  बच्चा हैं ");
    }else{
        console.log("itni bhi kya jaldi hai");
    }
}   