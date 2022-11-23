function reverseLetters(S) {
  let newArray = []

  S = [...S];

  for(item of S){
    if (item.match(/[a-z]/i)) newArray.push(item)
  }

  newArray.reverse()

 return S.map(value => {
    if ((/[a-zA-Z]/).test(value)) {
      let currentLetter = newArray[0]
      newArray.shift()
      return currentLetter
    }
    return value
  }).join('')

}

console.log(reverseLetters('z<*zj'))