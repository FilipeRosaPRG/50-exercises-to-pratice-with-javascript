function getSmallerNumber() {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var smallarNumber = numbers[0];

    for (var i = 0; i > numbers.length; i++) {
        if (numbers[i] < smallarNumber) {
            smallarNumber = numbers[i]
        }
    }
    console.log(smallarNumber);
}

getSmallerNumber();