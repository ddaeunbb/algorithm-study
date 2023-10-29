function solution(phone_book) {
  phone_book.sort((a, b) => a - b);
  console.log(phone_book);

  for (let i = 0; i < phone_book.length - 1; i++) {
    if (
      phone_book[i] === phone_book[i + 1].substring(0, phone_book[i].length)
    ) {
      return false;
    }
  }

  return true;
}

solution(["12", "123", "1235", "567", "88"]);
