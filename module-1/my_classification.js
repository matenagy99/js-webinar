function grade(point) {
    let grade = 5;

    if (point < 0 || point > 100) {
        return 0;
    }

    if (point < 60){
        return 1;
    } else {
        return grade - (Math.ceil(((100 - point) / 10)) - 1);
    }
}

// console.log(grade(90));