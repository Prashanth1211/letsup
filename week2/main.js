let name = "Thor";
let weapon = "stormbreaker";
let minute = 20;
let letterarr = "a";
let letter="t";
if (weapon.search(letter)){
    console.log(weapon.indexOf(letter));
}
let second=minute *60;
console.log(second);

let Avengers=["Ironman","Thor","Captain America","Black Widow","Hawkeye"];
Avengers.forEach(function(ele)
{
    if(ele.search(letterarr)){
        if(ele.indexOf(letterarr)!=-1){
        console.log(ele);
        }
    }
});

let reverseAvengers=Avengers.reverse();
console.log(reverseAvengers);