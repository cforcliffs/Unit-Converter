/*

1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// measurements//

const meterToFeet = 3.281
const litertoGallon = 0.264
const kilogramtoPound = 2.204



let convertBtn = document.getElementById("convert-btn")
let resetBtn = document.getElementById("reset-btn")

let inputEl = document.getElementById("input-el")

let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")





    // trigger the function//

    convertBtn.addEventListener("click", function(){


    let baseValue = inputEl.value
    lengthEl.textContent = `${baseValue} meters = ${baseValue * meterToFeet} feet | ${baseValue * meterToFeet} feet = ${baseValue} meters  `

    volumeEl.textContent = `${baseValue} liters = ${baseValue * litertoGallon } feet | ${baseValue * litertoGallon } feet  = ${baseValue} liters `

    massEl.textContent = `${baseValue} kilograms = ${baseValue * kilogramtoPound} feet | ${baseValue * kilogramtoPound} feet = ${baseValue} kilograms   `
    
    })




    resetBtn.addEventListener("click", function(){

   inputEl.value = ""


   lengthEl.textContent = `0 meters = 0 feet | 0 feet = 0 meters  `

   volumeEl.textContent = `0 liters = 0 gallons | 0 gallons  = 0 liters `

   massEl.textContent = `0 kilograms = 0 pounds| 0 pounds = 0 kilograms   `
   


    })












