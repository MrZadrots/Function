function conjugation(word, pr) {
    const exceptions = [
        "гнать",
        "дышать",
        "держать",
        "слышать",
        "зависеть",
        "видеть",
        "обидеть",
        "терпеть",
        "вертеть",
        "ненавидеть",
        "смотреть",
    ];
    const prMassive = [
        'я',
        'ты',
        'он',
        'она',
        'мы',
        'вы'
    ]
    word = word.toLowerCase();
    pr = pr.toLowerCase();
    let result = [];
    let cash = word.substr(word.length - 3);
    let kind;
    //Проверка на инфинитив
    if (cash.substr(cash.length - 2) != "ть") {
        return "Введен не инфинитив!";
    }
    //Проверка местоимения
    if(!prMassive.includes(pr)){
        return 'Введено неверное местоимение!'
    }
    switch (pr) {
        case "я":
            if (cash == "ить" || exceptions.includes(word)) {
                if (word[word.length - 4] == "б") {
                    result = word.substr(0, word.length - 3) + "лю";
                    break;
                }
                if (word[word.length - 4] === "д") {
                    result = word.substr(0, word.length - 4) + "жу";
                    break;
                }
                result = word.substr(0, word.length - 3) + "ю";
            } else {
                if (word[word.length - 3] == "а") {
                    if (word[word.length - 4] == "с") {
                        result = word.substr(0, word.length - 4) + "шу";
                        break;
                    }
                    result = word.substr(0, word.length - 2) + "ю";
                    break;
                }
                if (word[word.length - 4] == "д") {
                    result = word.substr(0, word.length - 4) + "жу";
                    break;
                }
                if (cash[0] == "е") {
                    result = word.substr(0, word.length - 3) + "ю";
                    break;
                }
                result = word.substr(0, word.length - 3) + "у";
            }
            break;
        case "он":
        case "она":
            if (cash == "ить" || exceptions.includes(word)) {
                result = word.substr(0, word.length - 3) + "ит";
            } else {
                if (word[word.length - 3] == "а") {
                    if (word[word.length - 4] == "с") {
                        result = word.substr(0, word.length - 4) + "шит";
                        break;
                    }
                    result = word.substr(0, word.length - 2) + "ет";
                    break;
                }
                result = word.substr(0, word.length - 3) + "ет";
            }
            break;
        case "мы":
            if (cash == "ить" || exceptions.includes(word)) {
                result = word.substr(0, word.length - 3) + "им";
            } else {
                if (word[word.length - 3] == "а") {
                    if (word[word.length - 4] == "с") {
                        result = word.substr(0, word.length - 4) + "шим";
                        break;
                    }
                    result = word.substr(0, word.length - 2) + "ем";
                    break;
                }
                result = word.substr(0, word.length - 3) + "ем";
            }
            break;
        case "вы":
            if (cash == "ить" || exceptions.includes(word)) {
                result = word.substr(0, word.length - 3) + "ите";
            } else {
                if (word[word.length - 3] == "а") {
                    if (word[word.length - 4] == "с") {
                        result = word.substr(0, word.length - 4) + "шите";
                        break;
                    }
                    result = word.substr(0, word.length - 2) + "ете";
                    break;
                }
                result = word.substr(0, word.length - 3) + "ете";
            }
            break;
        case "ты":
            if (cash == "ить" || exceptions.includes(word)) {
                result = word.substr(0, word.length - 3) + "ишь";
            } else {
                if (word[word.length - 3] == "а") {
                    if (word[word.length - 4] == "с") {
                        result = word.substr(0, word.length - 4) + "шишь";
                        break;
                    }
                    result = word.substr(0, word.length - 2) + "ешь";
                    break;
                }
                result = word.substr(0, word.length - 3) + "ешь";
            }
            break;
        default:
            break;
    }
    return result;
}
console.log(conjugation("любить", "я"));
console.log(conjugation("люблю", "я"));
console.log(conjugation("прыгать", "ты"));
console.log(conjugation("ходить", "вы"));
console.log(conjugation("смотреть", "они"));
