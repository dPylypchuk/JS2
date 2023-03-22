let currentYear = new Date () .getFullYear()
let birthYear = prompt("У якому році ви народилися?")
if (isNaN(birthYear)) {
    alert("Тобі ж ясно сказали вести повне числове значення")
    let birthYear = prompt("Вкажіть У ЯКОМУ РОЦІ ВИ НАРОДИЛИСЯ")
    let age = currentYear - birthYear 
    alert(`Тобі ${age} років`)
    if (age > 100) {
        alert (`Як вам не соромно брехати`)
    }
} 
else {
    let age = currentYear - birthYear
    alert(`Вам ${age} років`)
    if (age > 100) {
        alert(`Як вам не соромно брехати`)
    }
}
