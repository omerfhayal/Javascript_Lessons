//console.log("Merhaba from script")
document.write("<p>merhaba</p>")

// burası header iiçin yazıllı


//console.log("merhaba from");//
//console.log("merhabnaassssssssssssspcritp");//

//alert
//window.alert("sayfada uyarrı mesajı")//


var firstname="Mehmet";
let lastname="Türk";
const age = 47;


//console.log("Mehmet 46 yaşında");
console.log(firstname, age ,  "yaşında");

//PascalCae 
let FirstName =" Mehmet";

//CamelCase 
let firstName = "Mehmet";

//Snake Case 

let first_name = "Mehmet";

//Kebap Case 
//let first-name ="Mehmet" // CSS ' de kullanıyoruz





let name=
console.log("Memet 46 yaşında");




let team1="şahin", team2="doğan", team3="kartal" , team4="atmaca"
console.log(team1 + team2 + team3 ,
     team4)
console.log("merha" + "ba")
console.log(age + 5 )

//String

let dataString1 = "Merhaba"
let dataString2 = 'Merhaba' + " " + age + " " +" yaşındaki" +" " + firstName;
let dataString3 = `Merhaba  ${age} yaşındaki ${firstName}`
console.log(dataString2)
console.log(dataString3)


// Number

let numberValue1 = 5;
let numberValue2 = 5.5;


// Boolean

let isMarrried = true; //false;
let ageIsOver18 = false; 

// undefined
let telefon;
console.log(telefon)

//null
let nullValue= "";
console.log(nullValue)

function nameFunc(params){
     let test = " fonsiyon içi";
     console.log( test);
     console.log(firstName) // local scope , global scopa erişebilir.

}
nameFunc()

console.log(test); // test locak scope olduğu için çalışmaz
