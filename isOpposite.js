// function isOpposite(s1,s2){
//     primeiraString = s1.UpperCase;
//     segundaString = s2.UpperCase;

//     return primeiraString === segundaString ? true : false
    
//   }

function isOpposite(s1, s2) {
    if (s1.length !== s2.length || s1.length === 0) {
      return false;
    }
    
    for (let i = 0; i < s1.length; i++) {
      const char1 = s1[i];
      const char2 = s2[i];
      
      if (char1 === char2 || char1.toLowerCase() !== char2.toLowerCase()) {
        return false;
      }
    }
    
    return true;
  }