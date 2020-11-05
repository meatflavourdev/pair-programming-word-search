const joinVertical = function (letters) {
    const result = [];
      if(!letters.length) return [];
      if(!letters[0].length) return [];
  
    for (let i = 0; i < letters[0].length; i++) {
      let verticalString = "";
      for (let j = 0; j < letters.length; j++) {
        verticalString += letters[j][i];
      }
      result.push(verticalString);
    }
    return result;
  };
  
  
  const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''));
    const verticalJoin = joinVertical(letters);
  
  
    for (const l of horizontalJoin) {
      if (l.includes(word)) return true;
    }
    for (const l of verticalJoin) {
      if (l.includes(word)) return true;
    }
  
    return false;
  };
  
  module.exports = wordSearch;
  