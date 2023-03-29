
const bill = document.getElementById("billTotalInput")
const tip = document.getElementById("tipInput")
const npeople = document.getElementById("numberOfPeople")
const pptotal = document.getElementById("perPersonTotal")
// console.log(npeople.innerText)

// Get number of people from number of people div

let npeoplediv = Number(npeople.innerText)

// ** Calculate the total bill per person **

const calculateBill = () => {
  // get bill from user input & convert it into a number
  
  const billdiv = Number(bill.value)

  // get the tip from user & convert it into a percentage (divide by 100)
  const tipp = Number(tip.value) / 100
  // console.log(tipp)

  // get the total tip amount
  const tipAmount = billdiv * tipp
  console.log({ 'tipAmount': tipAmount })

  // calculate the total (tip amount + bill)
  const totalbill = tipAmount + billdiv


  // calculate the per person total (total divided by number of people)
  const perperson = totalbill / npeoplediv
  // console.log("per person bill",perperson)

  // update the perPersonTotal on DOM & show it to user
  pptotal.innerText = `$${perperson.toFixed(2)}`
}

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
  npeoplediv += 1
  // update the DOM with the new number of people
  npeople.innerText = `${npeoplediv}`

  // calculate the bill based on the new number of people
  const billdiv = Number(bill.value)

  // get the tip from user & convert it into a percentage (divide by 100)
  const tipp = Number(tip.value) / 100

  // get the total tip amount
  const tipAmount = billdiv * tipp
  console.log({ 'tipAmount': tipAmount })

  // calculate the total (tip amount + bill)
  const totalbill = tipAmount + billdiv
  const final_ppbill = totalbill / npeoplediv
  const perperson = totalbill / npeoplediv

  // update the perPersonTotal on DOM & show it to user
  pptotal.innerText = `$${perperson.toFixed(2)}`
  console.log(final_ppbill)

}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  
  // if people is 1 or less simply return
  
  if (npeoplediv < 1)
    alert("you can't")
  //   or you can throw an error
  // throw "you can't"
    return

  // decrement the amount of people
  npeoplediv -= 1

  // update the DOM with the new number of people
  npeople.innerText = `${npeoplediv}`
  const billdiv = Number(bill.value)

  const tipp = Number(tip.value) / 100

  // get the total tip amount
  const tipAmount = billdiv * tipp
  console.log({ 'tipAmount': tipAmount })

  const totalbill = tipAmount + billdiv
  const final_ppbill = totalbill / npeoplediv
  const perperson = totalbill / npeoplediv

  // update the perPersonTotal on DOM & show it to user
  
  pptotal.innerText = `$${perperson.toFixed(2)}`
  console.log(final_ppbill)


    // *** or simply you can call calculateBill() function instead of writing all the stuff in increment and decrement function ****// 
}