function solution(phoneBook) {
  const phoneBookHash = {};

  for (const phoneNumber of phoneBook) {
    phoneBookHash[phoneNumber] = true;
  }

  for (const phoneNumber of phoneBook) {
    for (let i = 1; i < phoneNumber.length; i++) {
      const prefix = phoneNumber.slice(0, i);

      if (phoneBookHash[prefix]) {
        return false;
      }
    }
  }

  return true;
}

console.log(solution(["12", "123", "1235", "567", "88"]));
