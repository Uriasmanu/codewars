// function Distinct(a) {
//   let array = [];
//     for (var numb in a){
//       if (numb =! numb +1){
//         array.push (numb)
//       }

//     }
//     return [];
//   }


  function Distinct(a){
    let array = [];
    for (let num of a){
      if(!array.includes(num)){
        array.push(num)
      }
    }
    return array
  }

  module.exports = { Distinct }
