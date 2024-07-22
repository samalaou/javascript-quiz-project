function shuffleArray(myArr) {
   for (let i = myArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = myArr[i];
      myArr[i] = myArr[j];
      myArr[j] = temp;
   }
}
