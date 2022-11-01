document.querySelector('#height').oninput = () => {
    return calculator();
}
document.querySelector('#width').oninput = () => {
    return calculator();
}

function calculator() {
    let height = Number(document.getElementById("height").value);
    let width = Number(document.getElementById("width").value);

    if(height > 0 && width > 0){
        document.getElementById("perimetr").innerHTML = 2 * width + 2 * height;
        document.getElementById("plosha").innerHTML = height * width;
        document.getElementById("diagonal").innerHTML = Math.sqrt(height * height + width * width);
    }

}

document.querySelector('#images').addEventListener('click', function (e) {
    let images = ['img.png', 'img_1.png', 'img_2.png', 'img_3.png'];
    let id = e.target.id;
    for (let i = 0; i < images.length; i++) {
        if (id === images[i]) {
            document.getElementById("image").src = id;
        }
    }
});

document.querySelector('#ukr').oninput = () => {
    return transliteration();
}
function transliteration() {
    let ukr = document.getElementById("ukr").value;
    let eng = '';
    let translit = {
        'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
        'е': 'e',    'ї': 'yi',   'ж': 'zh',   'з': 'z',    'и': 'y',
        'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
        'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
        'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
        'ш': 'sh',   'щ': 'sch',  'ь': '\'',     'і': 'i',    'є': 'ye',
        'ю': 'yu',   'я': 'ya',

        'А': 'A',    'Б': 'B',    'В': 'V',    'Г': 'G',    'Д': 'D',
        'Е': 'E',    'Ї': 'Yi',   'Ж': 'Zh',   'З': 'Z',    'И': 'Y',
        'Й': 'Y',    'К': 'K',    'Л': 'L',    'М': 'M',    'Н': 'N',
        'О': 'O',    'П': 'P',    'Р': 'R',    'С': 'S',    'Т': 'T',
        'У': 'U',    'Ф': 'F',    'Х': 'H',    'Ц': 'C',    'Ч': 'Ch',
        'Ш': 'Sh',   'Щ': 'Sch',  'Ь': '\'',     'І': 'I',    'Є': 'Ye',
        'Ю': 'Yu',   'Я': 'Ya'
    }
    for (let i = 0; i < ukr.length; ++i) {
        if (translit[ukr[i]] === undefined) {
            eng += ukr[i];
        } else {
            eng += translit[ukr[i]];
        }
    }

    document.getElementById("eng").innerHTML = eng;
}

function dayOfTheWeek() {
    let date = Date.parse(document.getElementById("day").value);
    let newDate = new Date(date);
    let day = Number(newDate.getDate());
    let month = Number(newDate.getMonth() + 1);
    let year = Number(newDate.getFullYear());
    let a = Math.floor((14 - month) / 12);
    let y = year - a;
    let m = month + 12 * a - 2;
    let dayOfTheWeek = Math.floor(day + y + y / 4 - Math.floor(y / 100) + Math.floor(y / 400) + Math.floor((31 * m) / 12)) % 7;
    let dayName
    switch (dayOfTheWeek) {
        case 0:
            dayName = "Неділя";
            break;
        case 1:
            dayName = "Понеділок";
            break;
        case 2:
            dayName = "Вівторок";
            break;
        case 3:
            dayName = "Середа";
            break;
        case 4:
            dayName = "Четвер";
            break;
        case 5:
            dayName = "П'ятниця";
            break;
        case 6:
            dayName = "Субота";
            break;
    }
    document.getElementById("dayName").innerHTML = dayName;
}
