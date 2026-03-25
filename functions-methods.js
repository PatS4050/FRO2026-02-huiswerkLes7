// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

// const userInputEmail = prompt('Enter your email');
// const userInputEmail = ["n.eeken@novi-education.nl", "t.mellink@novi.nl"]
// console.log(userInputEmail);


function getEmailDomain(userInputEmail) {
    const emailIndex = userInputEmail.indexOf('@');
    return userInputEmail.substring(emailIndex + 1);
}

console.log(getEmailDomain("user@novi.nl"))

/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

// functie vergelijkt of ze domein novi herkent en geeft Medewerker
// functie vergelijkt of ze eeen novi-education domein heeft - early return en geeft Student
// al het overige is extern


function typeOfEmail(userInputEmail) {
    const emailIndex = userInputEmail.indexOf("@");
    const emailDomain = userInputEmail.substring(emailIndex + 1);
//     return userInputEmail.substring(emailIndex + 1);
    switch (emailDomain) {
        case "novi.nl":
            return "Medewerker";
        case "novi-education":
            return "Student";
        default:
            return "Extern"
    }
}
console.log(typeOfEmail("user@gmail"));

/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

function checkEmailValidity (userInputEmail) {
    if (userInputEmail.includes(",")){
        return userInputEmail = false }
    if (userInputEmail.lastIndexOf(".") === userInputEmail.length) {
        return userInputEmail = false }
    else if (userInputEmail.includes("@")){
        return userInputEmail = true }
    else {
        return userInputEmail = false }
}
console.log(checkEmailValidity("user@novi.nl"))

// De punt notatie op regel 69 werkt niet Grrrrrr