
// alert('I'); alert('love');  alert('JS');


// let admin;
// let name;

// name = 'John';
// admin = name;

// alert(admin);

// let ourPlanet;
// let currentUser;

// const bigNum = 1234567890123456789012345678901234567890n;
// console.log(bigNum);//BigInt

// const bigSure = "It`s new 'macOS' os";
// console.log(bigSure);


// let name = prompt('Каматоз пидарас?', 'Andreev');
// alert('ты прав ' + name + ' пидарас');

// let value = true;

// console.log(typeof value);

// value = String(value);
// console.log(typeof value);

// console.log('6' / '2');

// let str = true;
// console.log(typeof str);
// console.log(str);

// let num = Number(str);
// console.log(num);


// console.log(typeof num);

// let mat = "" + 1 + 0;//str 10
// let mat = "" - 1 + 0;// -1 num
// let mat = true + false;// 1 num
// let mat = 6 / 3;// 2 num
// let mat = '2' + '22';// 222str
// let mat = '6' - 2 - 2;// 2 num
// let mat = '$' + 4 + 9;// $49 str

// let mat = '4px' - 2;// Nan
// let mat = 7 / 0;//Infinity
// let mat = ' -9 ' + 5;// str -9 5
// let mat = ' -8 ' - 4;// -12 num
// let mat = null + 1;// num 1
// let mat = undefined + 1;// NaN
// let mat = ' \t \n' - 2;// -2 num

// console.log(mat);

// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);

// // a = new Number(a);
// // b = new Number(b);

// console.log(+a + +b);

// console.log('Я' > 'Я');

/*
операторы сравнения
true
false
false
true
false
false
false
*/

// const question = prompt('Какое "официальное" название JavaScript?', 'E............5');

// if (question == 'ECMAScript') {
//     alert('верно бро');
// } else {
//     alert('не шаришь?( ECMASCript');
// }

// const num = prompt('plz input nimber', '123....');

// if (num > 0) {
//     alert('1');
// } else if (num < 0){
//     alert('-1')
// } else if (num == 0) {
//     alert('0')
// } else {
//     alert('only num plz')
// }


// let result;
// a = 2;
// b = 1;

// (a + b < 4) ? result = 'Маловато' : result = 'Многовато';

// console.log(result)

// let login = 'Director';

// message = (login == 'Director') ? message = 'Pizdato' : (login == 'Bariga') ? message = 'Bud osorogen' : (login = 'Kamatoz') ? message = 'huevo bit Kamatozom(' : message = 'введите логин';

// console.log(message);

//Логические операторы

// alert(null || 2 || undefined);// 2 первое трушное значение
// alert(alert(1) || 2 || alert(3));// 1 потом 2, так как 1 будет underfined
// alert(1 && null && 2); //null первое фолсное значение
// alert(alert(1) && alert(2));//1 потом underfined
// alert(null || 2 && 3 || 4);//3 так как сначала выполниться И (2 && 3) и потом нул или 3 или 4

// let age = 91;
//
// if (age >= 14 && age <= 90) {
//     alert('Age truth');
// } else {
//     alert('age must be 14...90');
// }

// let age = 5;
//
// if (0 || age < 14 || age > 90) {
//     alert('Возраст вне диапазона от 14 до 90')
// }
// if (!true || age < 14 || age > 90) {
//     alert('Возраст вне диапазона от 14 до 90(!)')
// }
// if (!(age >= 14 && age <=90)) {
//     alert('Возраст вне диапазона от 14 до 90(!)')
// }
// if (age < 14 || age > 90) {
//     alert('Возраст вне диапазона от 14 до 90(!)')
// }
// if (-1 || 0) alert( 'first' );
// //выполниться true false
// if (-1 && 0) alert( 'second' );
// //не выполниться true false
// if (null || -1 && 1) alert( 'third' );
// //выполниться true && true -> true -> null || true -> true(1)

// let userName = prompt('Кто там?', '');
//
// if (userName === 'Админ') {
//     let pass =  prompt('Пароль?', '');
//
//     if (pass === 'Я главный') {
//         alert('Здраствуйте');
//     } else if (pass === '' || pass === null) {
//         alert('Отменено');
//     } else {
//         alert('Неверный пароль')
//     }
// } else if (userName === '' || userName == null) {
//     alert( 'Отменено' );
// } else {
//     alert( "Я вас не знаю" );
// }
//Обьеденение с null
// let height;
// height = height ?? 100;
//
// console.log(height);

// let sum = 0;
//
// while (true) {
//
//     let value = +prompt("Введите число", '');
//
//     if (!value) break; // (*)
//
//     sum += value;
//
// }
// alert( 'Сумма: ' + sum );

// for (let i = 0; i < 10; i++) {
//
//     // если true, пропустить оставшуюся часть тела цикла
//     if (i % 2 === 0) continue;
//
//     alert(i); // 1, затем 3, 5, 7, 9
// }

// for (let i = 0; i < 3; i++) {
//
//     for (let j = 0; j < 3; j++) {
//
//         let input = prompt(`Значение на координатах (${i},${j})`, '');
//
//         // Что если мы захотим перейти к Готово (ниже) прямо отсюда?
//
//     }
// }
//
// alert('Готово!');
// //Четные
// for (let i = 2; i <= 10; i++) {
//     if (i % 2 === 0) {
//         alert( i );
//     }
// }
// //Нечетные
// for (let i = 0; i <= 10; i++) {
//     if (i % 2 === 0) continue;
//     alert(i);
// }
// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!`)
// }

// let i = 0;
//
// while (i < 3) {
//     alert(`number ${i}!`);
//     i++;
// }
// let num;
//
// do {
//     num = prompt("Введите число, большее 100", 0);
// } while (num <= 100 && num)

// let n = 10;
//
// nextPrime:
//     for (let i = 2; i <= n; i++) { // Для всех i...
//
//         for (let j = 2; j < i; j++) { // проверить, делится ли число..
//             if (i % j === 0) continue nextPrime; // не подходит, берём следующее
//         }
//
//         alert( i ); // простое число
//     }

// let age = 91;
//
// if (age < 14 ) {
//     alert('Слишко маленький возраст')
// } else if (age > 90) {
//     alert('Слишком большой возраст');
// }
//
// if (age >= 14 && age <= 90) {
//     alert('Подходящий возраст')
// }

// if (!(age >= 14 && age <= 90)) {
//     alert('true')
// }
//
// if (age < 14 || age > 90) {
//     alert('true')
// }

// let userName = prompt('Кто там?', '');
//
// if (userName === 'Админ') {
//     let pass = prompt('Пароль?', '');
//
//     if (pass === 'Я главный') {
//         alert('Здраствуйте');
//     } else if (pass === '' || pass == null) {
//         alert('Отменено');
//     } else {
//         alert('Неправильный пароль');
//     }
// } else if (userName === '' || userName === null) {
//     alert('Отменено');
// } else {
//     alert('Я Вас не занаю');
// }
//
// let user;
//
// alert(user ?? 'anon');

// let height = null;
// let width = null;
//
// let area = (height ?? 100) * (width ?? 50);
//
// alert(area);
// let x = (1 && 2) ?? 3;
// alert(x)
// let juliaZp = (adina, lalier) => adina + lalier;
// alert(juliaZp(4000, 8000));

// let sh = (gr, price) => gr * price;
//
// alert(sh(1.5, 150) + ' грн' + ' за шишку');
//
// alert('1000 грн на хуйню');
//
// let ferzyiDolg = (sh, iTak) => sh + iTak;
//
// alert(ferzyiDolg(sh(1.5, 150), 1000)+ ' грн.' + " В общем с ш");
//
// let dolgOk = prompt('Сколько ты должен', 'подумай ска...');
//
// let realyDolg = (dolgOk < 1225) ? () => alert('Маловато, +100 грн за неправильный ответ') :
//     () => alert('Првильно, +200 грн)))');
//
// realyDolg();

// let dohodOneMembers = (haveMembers, oneMembersCost) => {
//     let result = haveMembers - oneMembersCost;
//     return result;
// }
//
// alert(dohodOneMembers(100, 30) + "$");

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }
//
// ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
// );

// let ask = (question, yes, no) => {
//     if (confirm(question)) yes()
//     else no();
// }
//
// ask(
//     'Вы согласны?',
//     () => alert('Вы согласились'),
//     () => alert('Вы отменили выполенение')
// )

// let queToLove = (que, yes, no) => {
//     (confirm(que)) ? yes() : no();
// }
//
// queToLove(
//     'Ты выйдешь за меня?',
//         () => alert('Я люблю тебя'),
//         () => alert('Пидара отмена')
// )
//
// let que2 = prompt('Почему?');
//
// alert('а я тебя потому что ты' + que2);
//
// let userName = prompt("Введите имя", "Алиса");
// let isTeaWanted = confirm("Вы хотите чаю?");
//
// let teaR = (isTeaWanted) ? ' будет' : ' не будет';
//
// alert( "Гость " + userName + " чай" + teaR );

//цыклы
// ferzyDolg = 1225;
// let otdal = prompt('Сколько ты отдаешь?');
// console.log(otdal + 'otdal');
//
// let sum = (dolg, vernul) => {
//     return dolg - vernul;
// }
//
// let res = (sum(ferzyDolg, otdal));
//
// console.log(ferzyDolg + 'dolg');
// console.log(otdal + 'otdal');
// console.log(res + 'res')
//
// while (res < ferzyDolg) {
//     alert('Ты еще должен' + res);
//     let otdalMore = confirm('Еще хочешь скинуть?') ? (prompt('Сколько?')) : alert('Сука');
//     let newRes = res - otdalMore;
//     while (newRes < ferzyDolg) {
//         alert('Ты будещь еще должен' + newRes);
//         let newNewRes = newRes - otdalMoreMore;
//         let otdalMoreMore = confirm('Хочешь еще скинуть') ? confirm('Скидуешь?') ? prompt('Сколько?') : alert('Так нахуя заебуешь?') : alert('Чума дурная');
//     }
// }
// let fD = 0;
// do  {
//     ++fD;
//     alert(fD);
// } while (fD > 5)
// let one = 1;
// let fD = 5;
// for (; fD; --fD) {
//     alert(fD);
// }
// console.log(fD)
//
// let sum = 0;
//
// while (true) {
//     let value = +prompt('Enter the number', '1...2...3...4...5...');
//     if (!value) break;
//
//     sum += value;
//
// }
// alert('Sum' + sum);

// let ferzyDolg = 1225;
//
// for (;ferzyDolg;) {
//     alert('Ты все еще должен' + ferzyDolg)
//     let otdal = +prompt('Сколько возвращяещь?', '');
//     if (!otdal) break;
//     ferzyDolg -= otdal;
//     alert('Твой долг составляет:' + ferzyDolg);
// }
// let moreD = confirm('Еще будешь брать в долг?');
// for (;moreD;) {
//    let sumMoreD =  +prompt('Сколько?');
//    if (!sumMoreD) break;
//    alert('Ты снова должен' + sumMoreD);
// }

// moreD;

// while (true) {
//     alert('Ты должен' + ferzyDolg);
//     let vernul = +prompt('Сколько возвращяещь?', 'в гривнах');
//     if (!vernul) break;
//     ferzyDolg -= vernul;
// }
// alert('Твой долг составляет:' + ferzyDolg);

// for (let i = 0; i < 10; i++) {
//     if (i % 2 === 0) continue;
//     // (i > 5) ? alert(i) : continue; // continue здесь приведёт к ошибке
//
//     // if (i > 5) {
//     //     alert(i);
//     // } else {
//     //     continue;
//     // }
//     alert(i);
// }

// if (i > 5) {
//     alert(i);
// } else {
//     continue;
// }

// outer:
//     for (let i = 0; i < 3; i++) {
//
//         for (let j = 0; j < 3; j++) {
//
//             let input = prompt(`Значение на координатах (${i},${j})`, '');
//
//             // если пустая строка или Отмена, то выйти из обоих циклов
//             if (!input) continue outer; // (*)
//
//             // сделать что-нибудь со значениями...
//         }
//     }
//
// alert('Готово!');

// for (let i = 0; i <= 10; i++) {
//     if (i % 2 || i === 0) {
//         continue
//     }
//     alert(i)
// }

// for (let i = 2; i <= 10; i++) {
//     if (i % 2 === 0) {
//         alert( i );
//     }
// }

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
// }

// let i = 0;
// while (i < 3) {
//     alert(`number ${i}!`);
//     ++i;
// }

// for (let i = 0; i <= 100;) {
//     i = +prompt('Введите число')
//     if (!i) break
// }

// let num = 0;
// do {
//     num = +prompt('Введите число больше 100 или 100')
// } while (num <= 100 && num)

// while (true) {
//     let i = 0;
//     if (i < 0) {
//         i = +prompt('Введите число')
//     }
// }


// let n = 10;
//
// nextPrime:
//     for (let i = 2; i <= n; i++) { // Для всех i...
//
//         for (let j = 2; j < i; j++) { // проверить, делится ли число..
//             if (i % j === 0) continue nextPrime; // не подходит, берём следующее
//         }
//
//         alert( i ); // простое число
//     }


// let n = 10;
//
// // newLabel:
// // for (let i = 2; i <= n; i++) {
// //     let sI = i - 1;
// //     for (;i % sI === 0;) continue newLabel;
// //     alert(i)
// // }
//
// firstLabel:
// for (let i = 2; i <= n; i++) {
//
//     for (let j = 2; j < i; j++) {
//         if (i % j === 0) continue firstLabel;
//     }
//     alert(i)
// }


// let num = 5;
// for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//     }
// }
//
// let arg = +prompt("Введите число?");
// switch (arg) {
//     case '0':
//     case '1':
//         alert( 'Один или ноль' );
//         break;
//
//     case '2':
//         alert( 'Два' );
//         break;
//
//     case 3:
//         alert( 'Никогда не выполнится!' );
//         break;
//     default:
//         alert( 'Неизвестное значение' );
// }
// let browser = prompt('Введите браузер')
// switch (browser) {
//     case 'Edge':
//         alert( "You've got the Edge!" );
//         break;
//
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//         alert( 'Okay we support these browsers too' );
//         break;
//
//     default:
//         alert( 'We hope that this page looks ok!' );
// }

// if (browser === 'Edge') {
//     alert("You've got the Edge!")
// }
// else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
//     alert('Okay we support these browsers too')
// }
// else if (!browser || browser === '' || browser) {
//     alert('We hope that this page looks ok!')
// }

// const number = +prompt('Введите число между 0 и 3', '');
//
// if (number === 0) {
//     alert('Вы ввели число 0');
// }
//
// if (number === 1) {
//     alert('Вы ввели число 1');
// }
//
// if (number === 2 || number === 3) {
//     alert('Вы ввели число 2, а может и 3');
// }

// let number = +prompt('Enter number from 0 to 3')
// switch (number) {
//     case 0: alert('Number 0'); break
//     case 1: alert('Number 1'); break
//     case 2:
//     case 3: alert('Number 2 or 3'); break
// }

// function dolg(sh, naF) {
//     return sh + naF;
// }
// alert(dolg(225, 1000));

// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('А родители разрешили?');
//     }
// }
//
// let age = prompt('Сколько вам лет?', 18);
//
// if ( checkAge(age) ) {
//     alert( 'Доступ получен' );
// } else {
//     alert( 'Доступ закрыт' );
// }

// function checkDolg(sum) {
//     if (sum >= 1225) {
//         return true
//     } else {
//         return confirm('Все вернешь?')
//     }
// }
//
// let sum = prompt('Сколько ты должен?', 1225)
//
// if (checkDolg(sum)) {
//     alert('Ответ првильный')
// } else {
//     alert('Не верно')
// }

//Пишем функцию которая при фолсном аргументе не показывает значение
// let age = 0;
// function checkAge(age) {
//      age = prompt('Для просмотра фильма введите возраст');
//      return age;
// }
//
// console.log(age)
//
// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('А родители разрешили?');
//     }
// }
//
// let age = prompt('Сколько вам лет?', 18);
//
// if ( checkAge(age) ) {
//     alert( 'Доступ получен' );
// } else {
//     alert( 'Доступ закрыт' );
// }
//
// function showMovie(age) {
//     if ( !checkAge(age) ) {
//         return;
//     }
//
//     alert( "Вам показывается кино" );
//
// }
// showMovie();

// function showPrimes(n) {
//     for (let i = 2; i < n; i++) {
//         if (!isPrime(i)) continue;
//
//         alert(i);  // простое
//     }
//
// }
// let showPrimes = (n) => {
//     for (let i = 2; i < n; i++) {
//         if (!isPrime(i)) continue;
//
//         alert(i);  // простое
//     }
// }
// // function isPrime(n) {
// //     for (let i = 2; i < n; i++) {
// //         if (n % i === 0) return false;
// //     }
// //     return true;
// // }
// let isPrime = (n) => {
//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) return false;
//     }
//     return true;
// }
// let n;
// let checkN = (n) => n = +prompt('Введите число');
// // function checkN(n) {
// //     n = +prompt('Введите число')
// //     return n;
// // }
//
// showPrimes(checkN(n));

// let emptyFc = () => {
//     return
// }
//
// alert(emptyFc()) undefined
//
// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('Родители разрешили?');
//     }
// }
// let age = +prompt('Введите возраст');
// alert(age);
// checkAge(age);
// Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
//
//     Сделайте два варианта функции checkAge:
//
//     Используя оператор ?
//     Используя оператор ||
// let checkAge2 = (age) => age < 18 ? true : confirm('Родители разрешили?');
// let age = +prompt('Введите возраст');
// alert(age);
// checkAge2(age);
// let checkAge3 = (age) => age >= 18 || confirm('Родители разрешили?');
// let age = +prompt('Введите возраст');
// alert(age);
// checkAge3(age);
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
//     Пример вызовов:
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1
// let min = (a, b) => a < b ? a : b;
// function min(a, b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }
// let a = +prompt('Введите значение a')
// let b = +prompt('Введите значение b')
// alert(min(a, b))
// Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
//
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// let showPrimes = (n) => {
//     for (let i = 2; i < n; i++) {
//         if (!isPrime(i)) continue;
//
//         alert(i);  // простое
//     }
// }
// function isPrime(n) {
//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) return false;
//     }
//     return true;
// }
//
// function pow(x, n) {
//     x = x ** n
//     return x
// }
// let x = prompt("x?", '');
// let n = prompt("n?", '')
//
// if (n < 1) {
//     alert(`Степень ${n} не поддерживается, используйте натуральное число`);
// } else {
//     alert( pow(x, n) );
// }
// function pow(x, n) {
//     let sum = x;
//     for (let i = 1; i < n; i++) {
//         sum *= x
//     }
//     return sum
// }
// alert(pow(31,8))//
// Проверяем бид и меняем ставку до определенной суммы

// function checkBidget() {
//     let bid = confirm('Горит элемент что Ваша ставка не наивысшая?');//Получаем подтверждение что ставка не актуальна
//     if (bid) {
//         let prSt = +prompt('Введите актуальную ставку?');//Получаем актуальную ставку
//         let st = 9.56;//Предыдущяя ставка
//         let res;
//         function checkPreviousSt(st, prSt) {
//             res = st < prSt; // Проверяем ставку на актуальность
//         }
//         alert('Ваша предыдущяя ставка: ' + st);
//         function checkBid(res) {
//             let shag = 0.01;//Шаг по ставке
//             if (prSt > st) {
//                 st = prSt + shag // Добавляем шаг - делаем ставку актуальной
//             }
//             return st;
//         }
//         checkBid(st, prSt);// запускаем изменения
//         alert('Ваша актуальная ставка: ' + st);
//         checkPreviousSt(st, prSt);// запускаем изменения только если ставка не актуальна
//     } else {
//         alert('Ваша ставка наивысшая')
//     }
// }
// checkBidget();

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no()
// }
//
// function showYes() {
//     alert('Давайте поиграем')
// }
//
// function showNo() {
//     alert('Как хотите')
// }
//
// ask('Хотите поиграть?', showYes, showNo);
//
// function ask(que, yes, no) {
//     if (confirm(que)) yes()
//     else no()
// }
//
// function showYes() {  //каллбек для yes
//     alert('А я не дам')
// }
// function showNo() {  //каллбек для no
//     alert('А че так?')
// }
//
// ask('Будешь еще в долг брать', showYes, showNo)

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }
//
// ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); } // Все функции мы делаем анонимными и вписуем при вызове функции , без сохранения
// );         //Идеальный вариант когда минимум кода и функции не сохраняються
// function otadlDolg(question, yes, no) {
//     if (confirm(question)) yes()
//     else no()
// }

// otadlDolg('Ты все вернул', function() {
//     alert('Ну ладно')
// }, function() {
//     alert('Какого хуя?')
// })

// let otdalDolg = (question, yes, no) => {
//     if (confirm(question)) {
//         yes()
//     } else {
//         no()
//     }
// };
//
// otdalDolg('Вернул все?', () => alert('Отдал добро, получил краба и пакет сильпо'), () => alert('Дал обратку, получил нож под лопатку'));

//Пишем код который считает вложения какана с учетом всего и в процентном соотношении
// let stUsdt = 6647; //2743 + 3904
// let stBtc = 0.051;// По курсу 60к
// let cursBtcMomentEntry = 60000;//Курс на середину марта
// alert('Заводилось 2743usdt + 3904usdt. Всего: ' + stUsdt  + ' usdt')
//
// let btcOnUsdtMe = () => {
//     return stBtc * cursBtcMomentEntry;
// };
// alert('Также зашло BTC(0.51) по курсу ' + cursBtcMomentEntry + ' BTC/USDT: ' + btcOnUsdtMe(stBtc, cursBtcMomentEntry) + ' usdt');
//
// let rocket = 67;
// let fatPig = 950;
// let crypton = 135;
// let signalsKakanPay = () => {
//     return rocket + fatPig + crypton;
// }
// alert('+ заводилось на сигналы: ' + signalsKakanPay(rocket, fatPig, crypton) + ' usdt');
//
//
// let allEntryInUsdt = () => signalsKakanPay() + btcOnUsdtMe() + stUsdt;
// alert('Всего заводилось на торги + сигналы: ' + allEntryInUsdt() + ' usdt');
//
// let coinCode = 71;
// let crytoSila = 190;
// let signalsFromMarket = () => {
//     return coinCode + crytoSila;
// }
// alert('Вывыелось с биржы на сигналы: ' + signalsFromMarket() + ' usdt');
//
// let allUsdtWithSignalsOnMarket = () => {
//     return btcOnUsdtMe() + stUsdt - signalsFromMarket();
// }
// alert('На биржу зашло(без учета сигналов): ' + allUsdtWithSignalsOnMarket() + ' usdt ' + ' BTC:' + stBtc + ' Usdt:' + stUsdt );
//
// //На данный момент
// let newBtc = 0.0847;
// let newUsdt = 5017;
// let profitBtc = () => {
//     return newBtc - stBtc;
// }
// alert('Доход в BTC составил: ' + profitBtc() + 'BTC');
// let profitBtcInProc = (a, b, c) => {
//     return (a / b - 1) * c;
// }
// alert( 'Доход (по btc) в % составил: ' + profitBtcInProc(newBtc, stBtc, 100) + '%');
// let profitUsdt = () => {
//     return newUsdt - (allUsdtWithSignalsOnMarket() - btcOnUsdtMe());
// }
// alert('Доход в USDT составил: ' + profitUsdt() + ' usdt');
// alert( 'Доход (по usdt) в % составил: ' + profitBtcInProc(newUsdt, (allUsdtWithSignalsOnMarket() - btcOnUsdtMe()), 100) + '%');
// let generalRes = () => {
//     let profitBtcInUsdt = profitBtc() * cursBtcMomentEntry;
//     let profitUsdtInUsdt = profitUsdt();
//     alert('Доход в BTC(usdt): ' + profitBtcInUsdt + ' usdt');
//     alert('Доход в usdt: ' + profitUsdtInUsdt + ' usdt');
//     return profitBtcInUsdt + profitUsdtInUsdt;
// }
// alert('Доход по бирже составил: ' + generalRes() + ' usdt');
//
// let allBackPackNow = (newB, newU) => {
//     newB = newBtc * cursBtcMomentEntry;
//     newU = newUsdt;
//     return newB + newU;
// }
// alert('На данный момент если считать по курсу '  + cursBtcMomentEntry + ' BTC/USDT: ' + ' на бирже(usdt): ' + allBackPackNow() + ' usdt');
// alert('Считаем от всех что заводились(с сигналами), доход: ' + (allBackPackNow() - allEntryInUsdt()) + ' usdt');

//Риск-менеджмент, скрипт для просчета
// let depo = 5630;
// let oneDeal = 500;
// let risk = 8.86 / 100;
// let entry = 6.615;
// let tP = 6.55;
// let sL = 6.10;
//
// let rR;
// let sumCoin;
// let currenDepo;
// let currentStop;

// a = this._roundValue(t + (s - i) * r * o)
//     , l = this._roundValue(t - (i - n) * r * o);
// Лот — 1.43.
// Торговый инструмент (валютная пара) — GBPCHF.
// Курс GBPCHF —2.3533.
// Contract —143 000 GBP.
// Курс USDCHF — 1.1659 (необходим для пересчета стоимости одного пункта в валюту депозита).
// OnePointValue = (143 000 × (2.3533 + 0.0001)) - (143 000 × 2.3533) = 336536.2 – 336521.9 = 14.3 CHF.
//
// let lot = 0.1;//Минимальная сделка в соотношении к USDT
// let punct = 0.1;
//
// let depo = 10000;
// let risk = 1 / 100;
// let entry = 6.168;
// let tp = 6.550;
// let sl = 6.100;
// alert('Риск: ' + risk + '%');
//
// let minHod = () => {
//     return (lot * punct) / entry;
// }
// alert('1 пунк равен: ' + minHod());//0.00001621271076523995
//
// let amountRisk = depo * risk;
// alert('Риск по сделке составляет: ' + amountRisk + ' usdt');
// let er = () => entry - sl;
// alert('Разница между входом и стоп-лоссом: ' + er());
// let sp = () => er() / minHod();
// alert('Пункты до сл: ' + sp())// Получилось 41 пункт до стоплоса
// let newSl = () => sp() * punct;
// alert('Риск на 1 сделку  $' + newSl());//Риск на 1 сделку в $
// Размер лота =
// макс. риск (в $) / стоп лосс (в пунктах) / минимальную стоимость 1 пункта * минимальный торговый лот
// let newLot = amountRisk / sp() /

// let amountCoin = () => {
//     let rr = entry - sl;
//     let ac = rr / minHod();
//     alert('При возможном риск: ' + rr + ' Вход в сделку: ' + ac + ' шт./монет' )
// }
// amountCoin();

// let i = 0;
// let checkAmountCoin = function () {
//     for (i; sl < entry; i++) {
//         sl = sl + a();
//     }
// }
// checkAmountCoin()
// console.log(i);

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }
//
// ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
// );
// let ask = (question) => {
//     let yes = () => alert('Вы согласились');
//     let no = () => alert('Вы отменили выполнение');
//     if (confirm(question)) yes()
//     else no();
// }
// ask('Подтвердите действие');


//
// let nftDeposit = {
//     soft: 300,
//     usdt: 270,
//     usdt2: 130,
//     usdt3: 100,
// }
// //нфт - 270 + 100 + 130
// //Правильный подсчет дохода по бирже
// let mdx = prompt('Сколько MDX', 'в usdt') //Долгосрок
// let bake = prompt('Сколько BAKE', 'в usdt') //Долгосрок
// let twt = prompt('Сколько TWT', 'в usdt') //Долгосрок
// let icx = prompt('Сколько ICX', 'в usdt') // Долгосрок
// let nft = prompt('Сколько NFT(busd)', 'в busd') //Нфт
// let yfi = prompt('Сколько YFI', 'в usdt') //Мой долгосрок
// let eth = prompt('Сколько ETH', 'в usdt') //Мой долгосрок
//
// let superfluous = {
//     mdx,
//     bake,
//     twt,
//     icx,
//     nft,
//     yfi,
//     eth,
// }
// let calcAnDepoEx = () => +mdx + +bake + +twt + +icx + +nft + +yfi + +eth;
// alert(calcAnDepoEx());
//
// let cursBtc = prompt('По какому курсу считаем?','Заводились по 60000')
// let allDeposit = {
//     btc: 0.051 * cursBtc,
//     usdt: 2743,
//     usdt2: 3904,
// }
// allDeposit[cursBtc] = cursBtc;
// // Считаем сколько заводилось без учета сигналов
// let windUpWoS = () => allDeposit.btc + allDeposit.usdt + allDeposit.usdt2
// alert('На биржу заводилось: ' + windUpWoS() + ' usdt')
//
// let signalsFromWallet = {
//     rocket: 67,
//     fatPig: 950,
//     crypton: 135,
// }
// //Считаем сколько заводилось на сигналы
// let windUpFW = () => signalsFromWallet.rocket + signalsFromWallet.fatPig + signalsFromWallet.crypton
// alert('Паралельно покупались сигналы на: ' + windUpFW() + ' usdt')
// //Считаем сколько заводилось всего
// let allDepositWindUp = () => windUpWoS() + windUpFW();
// alert('Всего заводилось: ' + allDepositWindUp() + 'usdt');
//
// //Считаем депозит на биржу (с учетом что часть вывелась на сигналы)
// let signalsFromEx = {
//     coinCode: 71,
//     cryptoSila: 190,
//     slivi: 66,
// }
// let calcSignalFromEx = () => signalsFromEx.coinCode + signalsFromEx.cryptoSila + signalsFromEx.slivi;
// alert('Сколько вывелось с биржы на сигналы: ' + calcSignalFromEx() + 'usdt');
// let calcWindUpExWoS = () => windUpWoS() - calcSignalFromEx();
// alert('Считаем депозит на биржу (с учетом что часть вывелась на сигналы): ' + calcWindUpExWoS() + 'usdt');
//
// //Считаем сколько сейчас на бирже
// let cursBtcN = prompt('Какой сейчас курс');
// let btcN = prompt('Сколько сейчас BTC', 'Пример: 0.051');
// let btcToUsdtCurrCurs = () => btcN * cursBtcN;
// alert('Сколько битка в долларе на данный момент' + btcToUsdtCurrCurs());
// let howAllUsdt = prompt('Сколько всего USDT сейчас на бирже');
// let howUsdtNow = () => howAllUsdt - btcToUsdtCurrCurs();
// alert('Сколько долларов сейчас на бирже: ' + howUsdtNow() + 'usdt')
//
// //Переводим биток в курс как заводились
// let nowEx = {
//     btcN: btcN * cursBtc,
//     usdtN: howUsdtNow()
// }
// let calcNowEx = () => nowEx.btcN + nowEx.usdtN;
// alert('Сколько долларов по курсу как заводились: ' + calcNowEx() + 'usdt')
// let calcNowExWoEnD = () => calcNowEx() - calcAnDepoEx();
// alert('Сейчас на бирже(с учетом всего): ' + calcNowExWoEnD() + 'usdt');
// let dohodEx = () => calcWindUpExWoS() - calcNowExWoEnD();
// alert('Доход по бирже составил: ' + dohodEx());
// let dohodAll = () => calcNowExWoEnD() - allDepositWindUp();
// alert('Всего заводилось: ' + dohodAll() + 'usdt');
//

// let user = {};
// user['name'] = 'Jhon';
// user['surname'] = 'Smith';
// alert(user.name);
// user['name'] = 'Pete';
// alert(user.name);
// delete user.name;
// alert(user.name);

// function isEmpty(obj) {
//     for (let objKey in obj) {
//         if (objKey !== undefined) {
//             return false
//         }
//     }
//     return true
// }
//
// let schedule = {};
//
// alert('a3' + isEmpty(schedule)); // true
//
// schedule["8:30"] = "get up";
//
// alert('a4' + isEmpty(schedule)); // false

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
//
// function calcZp() {
//     let sum = 0;
//     for (let salariesKey in salaries) {
//         sum += salaries[salariesKey]
//     }
//     alert(sum)
// }
// calcZp()

// до вызова функции
// function multiplyNumeric(obj) {
//     let item = 2;
//     let objKey;
//     for (objKey in obj) {
//         if (typeof obj[objKey] === 'number') {
//             obj[objKey] = item * obj[objKey]
//         }
//     }
// }
//
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
//
// multiplyNumeric(menu);
// alert('width' in menu);
// alert(menu.width);

// // после вызова функции
// menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
// };

// let user = {
//     name: "Иван"
// };
// alert(user.name)
// let admin = user;
// alert(admin)
// alert(user)
// admin.name = 'her'
// alert(user.name)
//
// let kakanPortfforMe = {
//     btc: 0.051,
//     usdt: 8000
// }
// let kakanPortfForHim = {}
//
// for (let key in kakanPortfForHim) {
//     kakanPortfForHim[key] = kakanPortfforMe[key]
// }
//
// kakanPortfForHim.btc = 0.084;
// kakanPortfForHim.nft = 200;
//
// Object.assign(kakanPortfforMe, kakanPortfForHim)
// for (let key in kakanPortfforMe) {
//     alert(kakanPortfforMe[key])
// }
// Object.assign(kakanPortfforMe, {btc: 0.0509})
// alert(kakanPortfforMe.btc)


// let entryEx = {
//     usdt: 4000,
//     btc: 0.051,
//     dopEntry: {
//         nft: 570,
//     }
// }
//
// // Первый вариант глубокого копирования - Lodash
// startDepo = _.startDepoDeep(entryEx);

// Второй вариант глубокого копирования через рекурсию
// let deepstartDepo = (obj) => {
//     //Сначала проверяем, является ли переданный объект null
//     if (obj === null) return null;
//     // Создаем поверхностный клона оригинала.
//     let startDepo = Object.assign({}, obj)
//
//     // Определяем, какие пары ключ-значение
//     // необходимо глубоко клонировать.
//     Object.keys(startDepo).forEach(
//         key =>
//             (startDepo[key] =
//                 typeof obj[key] === 'object' ?
//                     deepstartDepo(obj[key]) : obj[key])
//     );
//
//     // Проверяем является ли obj массивом и не пустой ли он.
//     // указываем объекту startDepo длину исходного массива что бы
//     // конвертировать startDepo в массив и вернуть его.
//     return Array.isArray(obj) && obj.length
//         ? (startDepo.length = obj.length) && Array.from(startDepo)
//         //Если obj пустой массив
//         : Array.isArray(obj)
//             //то возвращяем эго
//             ? Array.from(obj)
//             // в других случаях obj это объект и мы возвращаем копию startDepo.
//             : startDepo;
// }
// let startDepo = deepstartDepo(entryEx)

// alert('startDepo.btc' + startDepo.btc)
// alert('startDepo.usdt'+ startDepo.usdt)
// alert('startDepo.dopEntry.nft' + startDepo.dopEntry.nft)
// alert('startDepo.dopEntry === entryEx.dopEntry' + startDepo.dopEntry === entryEx.dopEntry)
// startDepo.dopEntry.nft++;
// alert('startDepo.dopEntry.nft++;' + startDepo.dopEntry.nft)
// alert('entryEx.dopEntry.nft' + entryEx.dopEntry.nft)
// startDepo.dopEntry.nft++;
// entryEx.dopEntry.nft++;
// alert('startDepo.dopEntry.nft++ ++;' + startDepo.dopEntry.nft)
// alert('entryEx.dopEntry.nft ++' + entryEx.dopEntry.nft)
// function marry(man, woman) {
//     woman.husband = man;
//     man.wife = woman;
//
//     return {
//         father: man,
//         mother: woman,
//     }
// }
//
// let family = marry({
//     name: 'Alex'
// }, {name: 'Julia'})
//
// for (let familyKey in family) {
//     alert(familyKey + family[familyKey])
// }
//
// // family = null;
//
// alert([family.mother.husband])
// alert(family.husband.name)
// let cursBTC = prompt('Введите актуальный курс', 'Пример: 60000');
// let depo = [
//     firstDepo = {
//         btc: 0.051 * cursBTC,
//         usdt: 2743,
//         usdt2: 3904,
//     },
//     secondDepo = {
//         usdt3: 3000,
//     }
// ]
//
// let allSignal = [
//     signal = {
//         rocket: 67,
//         fatPig: 950,
//         crypton: 135,
//     },
//     signalFrowWallet = {
//         coinCode: 71,
//         cryptoSila: 190,
//         slivi: 66,
//     }
// ]
//
// let nft = [
//     frowWallet = {
//         usdt: 100,
//         usdt2: 130,
//         usdt3: 500,
//         usdt4: 60,
//     },
//     depo = {
//         usdt5: 270,
//         script: 300,
//     }
// ]
//
// let noEx = [
//     longTerm = {
//         mdx: 412,
//         bake: 338,
//         icx: 74,
//         twt: 555,
//     },
//     myD = {
//         yfi: 19,
//         eth: 31,
//         skl: 40,
//     },
//     nftB = {
//         busd: 42,
//     }
// ]
// // Считаем сколько зашло на биржу в долларх
// function allDepo() {
//     //Зашло отдельно на сигналы
//     let sg = signal.rocket + signal.fatPig + signal.crypton;
//     //Зашло на биржу
//     let usdt = firstDepo.btc + firstDepo.usdt + firstDepo.usdt2 + secondDepo.usdt3;
//     //Сколько зашдл на нфт
//     let nft = depo.usdt5 + depo.script;
//     return sg + usdt + nft;
// }
//
// alert('Всего в тему зашло: ' + allDepo() + ' usdt');
//
// //Сколько вывели с биржы на сигналы и нфт
// function outOnEx() {
//     let nft = frowWallet.usdt + frowWallet.usdt2 + frowWallet.usdt3 + frowWallet.usdt4;
//     let sg = signalFrowWallet.coinCode + signalFrowWallet.cryptoSila + signalFrowWallet.slivi;
//     return nft + sg;
// }
//
// alert('Вывели с биржы на сигналы и нфт: ' + outOnEx() + ' usdt');
//
// //Считаем сколько зашло на торги
// function onEx() {
//     //Сколько зашдл на нфт
//     let nft = depo.usdt5 + depo.script;
//     //Зашло отдельно на сигналы
//     let sg = signal.rocket + signal.fatPig + signal.crypton;
//     return nft + sg;
// }
//
// alert('Отдельно от биржы(НФТ и сигналы): ' + onEx() + ' usdt');
//
// function allEx() {
//     return allDepo() - outOnEx() - onEx();
// }
//
// alert('На биржу зашло без учета нфт и сигналов: ' + allEx() + ' usdt');
// //Считаем сколько сейчас на бирже
// //Считаем сколько на бирже долгосрок и др.
//
// function otherMeans() {
//     let lt = longTerm.mdx + longTerm.bake + longTerm.icx + longTerm.twt;
//     let md = myD.eth + myD.skl + myD.yfi;
//
//     return lt + md + nftB.busd;
// }
// alert('На бирже в долгосроке: ' + otherMeans() + ' usdt');
// //Сколько сейчас на бирже без учета долгосрока
// let currentUsdt = prompt('Сколько сейчас прише на бирже?');
// function curEx() {
//     let cu = currentUsdt - otherMeans();
//     return cu - allEx();
// }
// alert('В + на (без учета сигналов и нфт): ' + curEx() + ' usdt');
// function generalProfit() {
//     return allDepo() - currentUsdt - otherMeans();
// }
// alert('Считаем общий профит (без учета сколько в NFT): ' + generalProfit() + ' usdt');
//
// let nftOnEx = [
//     nftOE = {
//         purchase: 1240
//     }
// ]
// alert('Закупка в НФТ: ' + nftOE.purchase + ' usdt')
// function allDepoWithNft() {
//     return generalProfit() + nftOE.purchase
// }
// alert('Общий доход (c учетом сколько в NFT): ' + allDepoWithNft() + ' usdt');

// let depo = {
//     usdt: 9647,
//     btc: 0.051,
//
//     cursBtc() {
//         alert(this.btc * prompt('Введите курс биткоина'))
//     }
// }
//
// depo.cursBtc();

// let user = {
//     name: "Джон",
//     go: function() { alert(this.name) }
// };
//
// (user.go)()
//
//
// let calculator = {
//     read() {
//         this.x = prompt('Введите число X')
//         this.y = prompt('Введите число Y')
//     },
//     sum() {
//         return +this.x + +this.y;
//     },
//     mul() {
//       return +this.x * +this.y;
//     }
// };
//
// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());
//
// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this;
//     },
//     down() {
//         this.step--;
//         return this;
//     },
//     showStep: function() { // показывает текущую ступеньку
//         alert( this.step );
//         return this;
//     }
// };
//
//
// ladder.up().up().down().showStep().up().down().down().showStep().down().showStep().up().up().up().up().up().up().up().showStep(); // 1
//

// let pOfc = {
//     usdt: 14000,
//     howNow() {
//         this.usdt = prompt('Сколько сейчас на счету?') - this.usdt
//         return this;
//     },
//     show() {
//         alert(this.usdt)
//         return this
//     }
// };
// pOfc.howNow().show().howNow().show().howNow().show().howNow();

// function Depo(btc) {
//     this.btc = btc;
//     this.usdt = 5000;
// }
//
// let plusDepo = new Depo( '0.051')
// alert(plusDepo.btc)
// let allDepo;
// function Depo(add) {
//     this.add = add;
//     this.usdt = 3000;
//     allDepo = +this.usdt + +this.add;
// }
//
// let plusDepo = new Depo('3000')
// alert(plusDepo.add)
// alert(plusDepo.usdt)
// alert(allDepo);
// let plusDepo2 = new Depo('2000')
// alert(allDepo);
// alert(plusDepo2.add)
// alert(plusDepo2.usdt)
// let plusDepo3 = new Depo('2000')
// alert(allDepo);

// function nftPortfolio(nft) {
//     this.nft = nft;
//     this.soft = 300;
// }
//
// newNft = new nftPortfolio('tyga: 30$');
// new nftPortfolio('tyga: 35$');
// alert(newNft.nft);
// alert(newNft.nft);
// let newNft;
// let priceNewNft;
// let portfolio = {
//     newNft: newNft,
//     priceNewNft: priceNewNft,
// }
// let q = confirm('Купили новый NFT?')
// if (q) {
//     newNft = prompt('Какой НФТ Вы преобрели');
//     priceNewNft = prompt('Почем?');
// }
// function addNft(newNft) {
//
// }
// alert(portfolio[newNft])
// alert(portfolio.priceNewNft)
//
// function nftPortfolio(nft) {
//     this.nft = nft;
//     this.soft = 300;
// }
//
// let nft1 = new nftPortfolio('tyga');
//
// alert(nft1.nft)
// alert(nft1.soft)

// function Nft(nft) {
//     this.nft = nft;
//
//     this.sayName = function () {
//         alert('NFT name: ' + this.nft)
//     }
// }
//
// let tyga = new Nft('Tyga');
// let nftKong = new Nft('NftKing')
// tyga.sayName();
// nftKong.sayName();
//
// function A() {  }
// function B() {  }
//
// let a = new A;
// let b = new B;
//
// alert( a == b ); // true

// function Calculator() {
//     let a;
//     let b;
//     this.read = function read() {
//         a = prompt('Введите значение A');
//         b = prompt('Введите значение B');
//     }
//     this.sum = function sum() {
//         return +a + +b;
//     }
//     this.mul = function mul() {
//         return `${a} , ${b}`
//     }
// }
//
//
// let calculator = new Calculator();
// calculator.read();
//
// alert("Sum=" + calculator.sum());
// alert("Mul=" + calculator.mul());


// function Accumulator(num) {
//  this.value = num;
//  this.read = function () {
//      this.value += +prompt('Сколько добавить?')
//  }
// }
//
// let accumulator = new Accumulator(1);
//
// accumulator.read();
// accumulator.read();
// alert(accumulator.value);

//Считаем весь депо на 2.11.21
// let depo = {
//     usdt: {
//         usdt1: 2743,
//         usdt2: 3904,
//         usdt3: 3000,
//         usdt4: 570, //twt
//     },
//     btc: {
//         btc1: 0.051 * 57644, //Считаем по курсу на 18.03.21
//     },
//     signals: {
//         rocket: 67,
//         fatPig: 950,
//     },
//     nft: {
//         nft: 270,
//         script: 300,
//     }
// }
// let nft = {
//     fromWallet: {
//         script: 300,
//         nft: 270,
//     },
//     fromEx: {
//         usdt1: 130,
//         usdt2: 500,
//         usdt3: 70,
//         usdt4: 10,
//         usdt5: 162, //Solzombies
//     }
// }
// let futures = {
//     balance: 2984,
//     inSignals: -520,
// }
//
// let costs = {
//     signalsFromEx: {
//         coinCode: 71,
//         cryptoSila: 190,
//         slivi: 66,
//         crypton: 135,
//         crypton2: 135,
//         node: 150,
//     },
//     scripts: {
//         scriptNft: 300,
//     },
//     signalsFromWallet: {
//         rocket: 67,
//         fatPig: 950,
//     }
// }
//
// function AllCosts() {
//     this.costs = costs;
//     this.calculate = function () {
//         this.costs = costs.signalsFromEx.coinCode
//             + costs.signalsFromEx.cryptoSila
//             + costs.signalsFromEx.slivi
//             + costs.signalsFromEx.crypton
//             + costs.signalsFromEx.crypton2
//             + costs.signalsFromEx.node
//             + costs.scripts.scriptNft
//             + costs.signalsFromWallet.fatPig
//             + costs.signalsFromWallet.rocket
//     }
// }
//
// let calculatorCosts = new AllCosts();
//
// function AllFutures() {
//     this.futures = futures;
//     this.calculate = function () {
//         this.futures = +futures.balance + +futures.inSignals;
//     }
// }
//
// let calculatorF = new AllFutures();
//
// function AllDepo() {
//     this.depo = depo;
//     this.calculate = function () {
//         this.depo = depo.usdt.usdt1
//             + depo.usdt.usdt2
//             + depo.usdt.usdt3
//             + depo.usdt.usdt4
//             + depo.btc.btc1
//             + depo.signals.fatPig
//             + depo.signals.rocket
//             + depo.nft.script
//             + depo.nft.nft
//     }
// }
//
// let calculator = new AllDepo();
//
// function AllNft() {
//     this.nft = nft;
//     this.calculate = function () {
//         this.nft = nft.fromWallet.nft
//             + nft.fromWallet.script
//             + nft.fromEx.usdt1
//             + nft.fromEx.usdt2
//             + nft.fromEx.usdt3
//             + nft.fromEx.usdt4
//             + nft.fromEx.usdt5
//     }
// }
//
// let calculatorNft = new AllNft();
//
// calculator.calculate();
// calculatorNft.calculate();
// calculatorF.calculate();
// calculatorCosts.calculate();
// alert('Общий депозит составляет: ' + calculator.depo + ' usdt');
// alert('Депозит в NFT составляет (c учетом скрипта): ' + calculatorNft.nft + ' usdt');
// alert('Операционные расходы составили (сигналы, скрипты): ' + calculatorCosts.costs + ' usdt');
//
//
// //Считаем сколько зашло на NFT без учета скрипта
// let nftWs = {
//     allNft: calculatorNft.nft,
//     allScr: nft.fromWallet.script,
// }
//
// function NftWs() {
//     this.nftWs = nftWs;
//     this.calculate = function () {
//         this.nftWs = nftWs.allNft - nftWs.allScr - nft.fromWallet.script;
//     }
// }
//
// let calculatorNwS = new NftWs();
//
// calculatorNwS.calculate();
// alert('На NFT завели(c биржы): ' + calculatorNwS.nftWs + ' usdt');
//
//
// //Считаем сколько зашло на торги
// let depoEx = {
//     allDepo: calculator.depo,
//     allNft: calculatorNft.nft,
//     allCosts: calculatorCosts.costs,
//     allTransNft: calculatorNwS.nftWs,
// }
//
// function AllDepoEx() {
//     this.depoEx = depoEx;
//     this.calculate = function () {
//         this.depoEx = (calculator.depo - calculatorNft.nft - calculatorCosts.costs);
//     }
// }
//
// let calculatorEx = new AllDepoEx();
//
// calculatorEx.calculate();
// alert('На биржу зашло: ' + calculatorEx.depoEx + ' usdt');
// alert('Баланс на фьючерсах: ' + calculatorF.futures + ' usdt');
//
// //Считаем сколько на данный момент в сигналах(СПОТ)
// let cursBtc = +prompt('Введите актуальный курс')
// let spot = { //Берем актуальную цену
//     inBtc: { //Умножаем на актуальный курс
//         cfx: 0.00767,
//         icp: 0.00663,
//         cos: 0.00435,
//         wrx: 0.00417,
//         fun: 0.00398,
//         cake: 0.00408,
//         for: 0.00402,
//         pond: 0.00395,
//         srm: 0.00395,
//         front: 0.00212,
//         ava: 0.00762,
//         btc: 0.07966,
//         axs: 0.00484,
//     },
//     inUsdt: {
//         ftt: 220,
//         psg: 321,
//         theta: 166,
//         usdt: 26,
//         beta: 54,
//         sol: 539,
//         bnb: 1098,
//         busd: 188,
//     },
//     leftist: {
//         treasury: {
//             uah: 351,
//         },
//         nodes: {
//             usdt: 50,
//         },
//         leftistLt: { //Дааные берем с CoinMarketCup
//             twt: 583,
//             mdx: 372,
//             bake: 337,
//             icx: 84,
//         },
//         myDepo: {
//             yfi: 19,
//             eth: 33,
//         },
//         nftBusd: {
//             busd: 5,
//         }
//     }
// }
//
// function ActualDepo() {
//     this.spot = spot;
//     this.calculateBtc = function () {
//         this.spot = spot.inBtc.icp
//             + spot.inBtc.cos
//             + spot.inBtc.wrx
//             + spot.inBtc.fun
//             + spot.inBtc.cake
//             + spot.inBtc.for
//             + spot.inBtc.pond
//             + spot.inBtc.srm
//             + spot.inBtc.front
//             + spot.inBtc.ava
//             + spot.inBtc.btc
//             + spot.inBtc.axs
//     }
//     this.calculateUsdt = function () {
//         this.spot = spot.inUsdt.beta
//             + spot.inUsdt.usdt
//             + spot.inUsdt.bnb
//             + spot.inUsdt.ftt
//             + spot.inUsdt.psg
//             + spot.inUsdt.busd
//             + spot.inUsdt.sol
//             + spot.inUsdt.theta
//     }
// }
//
// let calculatorADB = new ActualDepo();
// calculatorADB.calculateBtc();
// alert('Сейчас в BTC/USDT(спот): ' + calculatorADB.spot + 'BTC ' + calculatorADB.spot * cursBtc + ' USDT');
//
// let calculatorADU = new ActualDepo();
// calculatorADU.calculateUsdt();
// alert('В USDT сейчас(спот): ' + calculatorADU.spot + ' usdt');
//
//
//
// //Считаем доход по бирже
// function depoExNow() {
//     let nftBalance = 1593;
//     let totalIncome = calculatorADU.spot + calculatorADB.spot * cursBtc + calculatorF.futures;
//     let tIwNFT = totalIncome + nftBalance;
//     let oldIncome = calculator.depo;//14173
//     alert('Общий депозит составляет(spot + futures + nft): ' + tIwNFT + ' usdt');
//     let newEx = calculatorADU.spot + calculatorADB.spot * cursBtc + calculatorF.futures;
//     alert('Сейчас на бирже(spot + futures): ' + newEx + ' usdt');
//     let incomeEx = newEx - calculatorEx.depoEx;
//     alert('Доход по бирже составил: ' + incomeEx + ' usdt')
//     let incomeNft = nftBalance - calculatorNft.nft;
//     alert('Доход по NFT: ' + incomeNft + ' usdt')
//     return tIwNFT - oldIncome;
// }
// alert('Доход составил(02.11.21): ' + depoExNow() + ' usdt');
//

// Копирование объектов и ссылки
// https://learn.javascript.ru/object-copy
//
// let allDepo = {
//     usdt1: 2743,
//     usdt2: 3904,
//     usdt3: 3000,
//     usdt5: 3600,
//     btc1: 0.051 * 57644, //Считаем по курсу на 18.03.21 
//     btc2: 0.027 * 67500, // 09.11.2021
//     script: 300,
//     nft: 270,
//     ela: 1433,
//     filda: 1559,
//     mdx: 1363,
//     bake: 926,
//     vra: 400,
//     twt: 400,
//     icx: 100,
//     rocket: 67,
//     fatPig: 950,
// }
//
// let startDepo = {}
//
// for (let key in allDepo) {
//     startDepo[key] = allDepo[key];
// }
//
// startDepo.all = 0;
// // alert(startDepo.all)
// // alert(startDepo.twt)
//
// for (let sum in allDepo) {
//     startDepo.all += +allDepo[sum]
// }
// alert(startDepo.all + ' Всего заводилось в USD');  // Всего заводилось в USD
//
// // let nowDepo = {};
// // Object.assign(nowDepo, allDepo, startDepo);
// // alert(nowDepo.twt);
// // alert(nowDepo.all);

// let allDepo = {
//     inUsdt: {
//         usdt1: 2743,
//         usdt2: 3904,
//         usdt3: 3000,
//         usdt4: 3600,
//     },
//     inBtc: {
//         btc1: 0.051 * 57644, //Считаем по курсу на 18.03.21 
//         btc2: 0.027 * 67500, // 09.11.2021
//     },
//     nftDepo: {
//         script: 300,
//         nft: 270,
//     },
//     armyanSignals: {
//         ela: 1433,
//         filda: 1559,
//         mdx: 1363,
//         bake: 926,
//         vra: 400,
//         twt: 400,
//         icx: 100,
//     },
//     vipSubscr: {
//         rocket: 67,
//         fatPig: 950,
//     },
// }
//
// let startDepo = Object.assign({}, allDepo);
//
//
// alert(startDepo.inBtc.btc1 + ' startDepo.inBtc.btc1');
//
// // https://learn.javascript.ru/recursion
// let nowDepo = {};
// function deepstartDepo(obj) { //Рекурсия + цыкл = глубокое клонирование
//     for (let i in obj) {
//         if (obj[i] instanceof Object) { // instanceof позволяет проверить, к какому классу принадлежит объект, с учётом наследования.
//             nowDepo[i] = deepstartDepo(obj[i]);
//             continue // Инструкция continue прерывает выполнение текущей итерации текущего или отмеченного цикла, и продолжает его выполнение на следующей итерации.
//         }
//         nowDepo[i] = obj[i];
//     }
//     return nowDepo;
// }
// deepstartDepo(startDepo)
// startDepo.inBtc.btc1 = (startDepo.inBtc.btc1 - 1000);
// nowDepo.inBtc.btc1 = (nowDepo.inBtc.btc1 - 2000);
// alert(nowDepo.inBtc.btc1 + ' nowDepo - 2000')
// alert(startDepo.inBtc.btc1 + ' startDepo - 1000')
// startDepo.inBtc.btc1 = (startDepo.inBtc.btc1 - 500);
// alert(startDepo.inBtc.btc1 + ' startDepo - 1000 - 500');
//
// alert(startDepo.inBtc + ' startDepo.inBtc')
//
//
// let clone = {};
// for (let key in startDepo) {
//     clone[key] = startDepo[key]
// }
// clone.all = 0;
//
// for (let key in startDepo) {
//     clone.all += +startDepo[key]
// }
// alert(clone.all + ' clone.all')
// // https://learn.javascript.ru/object-methods Внутренняя реализация: Ссылочный тип

// let depo = {
//     name: 'AllDepo',
//     hi() { alert(this.name); },
//     bye() { alert('Bye'); }
// };
//
// depo.hi();
// (depo.name === 'AllDepo' ? depo.hi : depo.bye)();
//
//
// (alert('hello'));

//
// let user = {
//     name: "Джон",
//     hi() { alert(this.name); }
// };
//
// // разделим получение метода объекта и его вызов в разных строках
// let hi = user.hi;
// // hi();

//reference type
// Для работы вызовов типа user.hi(),
// JavaScript использует трюк – точка '.' возвращает не саму функцию,
// а специальное значение «ссылочного типа», называемого Reference Type.

// Значение ссылочного типа – это «триплет»:
// комбинация из трёх значений (base, name, strict), где:
//
// base – это объект.
// name – это имя свойства объекта.
// strict – это режим исполнения.
// Является true, если действует строгий режим (use strict).

// user.hi(user, "hi", true);

// У стрелочных функций нет «this»
// Стрелочные функции особенные:
// у них нет своего «собственного» this.
// Если мы используем this внутри стрелочной функции, то его значение берётся из внешней «нормальной» функции.
//
// let user = {
//     firstName: 'Ilya',
//     sayHi() {
//         let arrow = () => alert(this.firstName);
//         arrow();
//     }
// }
// user.sayHi();
// let buy;
// buy = () => {
//     return user
// }
//
// // Функции, которые находятся в объекте в качестве его свойств,
// // называются «методами».
//
// let user = {
//     name: "Джон",
//     go: function() { alert(this.name) }
// };
//
// (user.go)();//undefined
// let obj, method;
//
// obj = {
//     go: function() { alert(this); },
//     go2: 'alex'
// };
//
// obj.go();               // (1) [object Object]
// // Когда функция вызывается синтаксисом «метода» – object.method(),
// // значением this во время вызова является объект перед точкой.
//
// (obj.go)();             // (2) [object Object]
// // вызов с точкой будет первый
//
// (method = obj.go)();    // (3) undefined при вызове идет сперва ссылка method на код функции
// // потом вызов method() без передачи this
//
// (obj.go(obj, "go2", true) || obj.stop)(); // (4) undefined тут мы обьявили функцию в первых скобках
// // и ее значение будет obj.stop()() = //undefined
// function makeUser() {
//     return {
//         name: "Джон",
//         ref: this
//     };
// };
//
// let user = makeUser();
//
// alert( user.ref.name ); // Ошибка this вызывается в контексте какого либо обьекта,
// значение this ищет обьект  и если найдет то будет undefined или при вызове через точку то ошибка
// function makeUser() {
//     return {
//         name: "Джон",
//         ref() {
//             return this;
//         }
//     };
// };
//
// let user = makeUser();
//
// alert( user.ref().name ); // Джон
//
// let calculator = {
//     a: '',
//     b: '',
//     read() {
//         this.a = +prompt('Введите значение 1')
//         this.b = +prompt('Введите значение 2')
//     },
//     sum() {
//        return this.a + this.b;
//     },
//     mul() {
//         return this.a * this.b;
//     }
// }
//
// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());
//
// let ladder = {
//     step: 0,
//     up: function() {
//         this.step++;
//         return this
//     },
//     down: function() {
//         this.step--;
//         return this
//     },
//     showStep: function() { // показывает текущую ступеньку
//        alert( this.step );
//        return this
//     }
// };
//
// ladder.up().up().down().showStep(); // 1
//
//
// let repayDuty = {
//     allDuty: 6000,
//     monthGood: function () {
//         this.allDuty = this.allDuty - 200;
//         return this;
//     },
//     monthNorm: function () {
//         this.allDuty = this.allDuty - 100;
//         return this;
//     },
//     monthBad: function () {
//         this.allDuty = this.allDuty - 50;
//         return this;
//     },
//     showAllDuty() {
//         alert(this.allDuty)
//         return this
//     }
// }
//
// repayDuty. // стартуем с апреля
//     monthGood(). // 1
//     monthBad(). // 2
//     showAllDuty().
//     monthNorm(). // 3
//     showAllDuty().
//     monthBad(). // 4
//     monthBad(). // 5
//     showAllDuty()
//     .monthNorm(). // 6
//     showAllDuty().
//     monthGood(). // 7
//     monthBad(). // 8
//     showAllDuty().
//     monthNorm(). // 9
//     showAllDuty().
//     monthBad(). // 10
//     monthBad(). // 11
//     showAllDuty().
//     monthNorm(). //12
//     showAllDuty();
// // 6 плохих, 4 норм, 2 хороших = 1100$ = +/- 5 лет
// // при росте дохода 2-3-4 года

// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
// }
//
// let user = new User("Вася");
// let user2 = new User('Настя');
// let user3 = new User('Piter');
//
// alert(user.name); // Вася
// alert(user2.name);
// alert(user2.isAdmin);
// alert(user3.name);
// alert(user.isAdmin); // false

// function AllDepo(name, how) {
//     this.name = name;
//     this.how = how;
//     alert(new.target)
// }
// AllDepo();
// let usdt1 = new AllDepo('usdt1', 2743);
// let usdt2 = new AllDepo('usdt2', 3904);
// let usdt3 = new AllDepo('usdt3', 3000);
// let usdt4 = new AllDepo('usdt4', 570);
// let usdt5 = new AllDepo('usdt5', 3600);
// let usdt6 = new AllDepo('usdt6', 763);
// let rocket = new AllDepo('rocket', 67); //57644
// let fatPig = new AllDepo('fatPig', 950); //57644
// let iPad = new AllDepo('iPad', 550);
// let nft = new AllDepo('nft', 270); //57644
// let scriptNft = new AllDepo('scriptNft', 300); //57644
// let btc1 = new AllDepo('btc1', 0.051); //57644
// let btc2 = new AllDepo('btc2', 0.027); //67500
//
// alert(usdt1.name + ': ' + usdt1.how + 'usdt' );
//
// function User(n, h) {
//     if (!new.target) { // в случае, если вы вызвали без оператора new
//         return new User(name); // ...добавим оператор new за вас
//     }
//     alert(new.target);
// }
//
// // без "new":
// User('22', 22); // undefined
//
// // с "new":
// new User(); // function User { ... }
//
// function BigUser() {
//
//     this.name = "Вася";
//
//     return { name: "Godzilla" };  // <-- возвращает этот объект
// }
//
// alert( new BigUser().name );  // Godzilla, получили этот объект
//
// function CalcDepoUsd() {
//     this.how = 123;
//
//     return;
// }
//
// alert( new CalcDepoUsd().how );  // Godzilla, получили этот объект
//
// function SmallUser() {
//
//     this.name = "Вася";
//
//     return; // <-- возвращает this, без тоже
// }
//
// alert( new SmallUser().name );  // Вася

// let obj = {};
//
// function A() {
//     return obj
// }
//
// function B() {
//     return obj
// }
//
// let a = new A;
// let b = new B;
// alert(a);
// alert(b);
// alert(a === b); // true
//
// let a;
// let b;
// let res;
// function Calculator() {
//     this.read = function () {
//         this.a = prompt('A', 0);
//         this.b = prompt('B', 0);
//     }
//     this.sum = function () {
//        return +this.a + +this.b;
//     }
//     this.mul = function () {
//         return 'a: ' + this.a + ' ' + 'b: ' + this.b;
//     }
// }
//
// let calculator = new Calculator();
// calculator.read();
//
// alert("Sum=" + calculator.sum());
// alert("Mul=" + calculator.mul());
//
// function Accumulator(startingValue) {
//     this.value = startingValue;
//     this.read = function () {
//         this.value += +prompt('enter num', 0);
//     }
// }
//
// let accumulator = new Accumulator(1); // начальное значение 1
//
// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению
//
// alert(accumulator.value); // выведет сумму этих значений

// let html = document.querySelector('.my-element').innerHTML;
// alert(html)

// let user1 = {
//     firstName: "Иван"
// };
//
// let user2 = null; // Представим, что пользователь не авторизован
//
// let key = "firstName";
//
// alert( user1?.[key] ); // Иван
// alert( user2?.[key] ); // undefined
//
// alert( user1?.[key]?.something?.not?.existing);
//
// let depo = {
//     usd: 3000,
//     btc: 0.08 * 57770
// }
//
// let oldDepo = {
//     usd: 5000,
//     btc: 0.024 * 57770
// }
//
// let newDepo = {
//     usd: 4000
// }
//
// let key = "btc";
// let key2 = "usd";
//
// alert( depo?.[key] ); // 0.08
// alert( newDepo?.[key] ); // undefined
// alert( oldDepo?.[key2] === 5000); // undefined
//
// alert( depo?.[key]?.something?.not?.existing);
// alert( depo[key] ); // 0.08
// delete depo?.btc;
// alert( depo?.[key] ); // 0.08
// alert( depo[key] ); // 0.08


// https://learn.javascript.ru/symbol Тип данных Symbol
//
// let id = Symbol('id');
// let id2 = Symbol('id22');
// alert(id === id2);
//
// alert(id2.toString());
// alert(id2.description);
// alert(id.description);
//
//

// let depo = {
//     name: 'firstDepo'
// }
//
// let id = Symbol('id');
// let id2 = Symbol('id');
//
// depo[id] = "02.12.2021";
// depo[id2] = "02.08.2021"
//
// alert(depo[id]);
// alert(depo[id2]);
//
// let date3 = Symbol('date3');
//
// depo[date3] = "01.01.2022";
// alert(depo[date3]);
//
// let btc = {
//     name: 'btc',
//     [date3]: 123,
// }
//
// alert(btc[date3])
// alert(date3.toString());
//
// let id = Symbol("id");
// let user = {
//     name: "Вася",
//     age: 30,
//     [id]: 123
// };
//
// for (let key in user) alert(key); // name, age (свойства с ключом-символом нет среди перечисленных)
//
// // хотя прямой доступ по символу работает
// alert( "Напрямую: " + user[id] );
//
// let id = Symbol("id");
// let user = {
//     [id]: 123
// };
// let date = Symbol('date')
// let depo = {
//     [date]: '01.01.2021'
// }
//
// let cloneU = Object.assign({}, user);
// let cloneD = Object.assign({}, depo);
//
// alert( cloneU[id] ); // 123
// alert( cloneD[date] ); // 123
// Технически символы скрыты не на 100%.
// Существует встроенный метод Object.getOwnPropertySymbols(obj)
// – с его помощью можно получить все свойства объекта
// с ключами-символами. Также существует метод
// Reflect.ownKeys(obj)
// https://learn.javascript.ru/object-toprimitive
//
// let user = {
//     name: "John",
//     money: 1000,
//
//     [Symbol.toPrimitive](hint) {
//         alert(`hint: ${hint}`);
//         return hint === "string" ? `{name: "${this.name}"}` : this.money;
//     }
// };
//
// // демонстрация результатов преобразований:
// alert(user); // hint: string -> {name: "John"}
// alert(+user); // hint: number -> 1000
// alert(user + 500); // hint: default -> 1500


// let allDepo = {
//     name: 'depo1',
//     money: 7000,
//
//     // [Symbol.toPrimitive](h) {
//     //     alert(`hint: ${h}`);
//     //     return h === "string" ? `{name: "${this.name}"}` : this.money;
//     // }
//
//     // // для хинта равного "string"
//     // toString() {
//     //     return `{name: "${this.name}"}`;
//     // },
//     //
//     // // для хинта равного "number" или "default"
//     // valueOf() {
//     //     return this.money;
//     // }
//
//     toString() {
//         return this.name;
//     }
// }
//
// // alert(allDepo.valueOf())
// // alert(allDepo.valueOf)
// alert(allDepo)
// alert(+allDepo)
// alert(allDepo + 500);

// https://learn.javascript.ru/data-types Типы данных
// https://tc39.es/ecma262/#sec-toprimitive
// https://tc39.es/ecma262/#sec-well-known-symbols

// Методы у примитивов https://learn.javascript.ru/primitives-methods
"use strict";

// let str = 'hi';
// str.test = 5;
// alert(str.test)
//
// let billion = 1000000000;
// let smallBi = 1.2e8;
//
// alert(smallBi);
// alert(billion);
//
// let ms = 0.000001;
// let smallMs = 1e-6; // шесть нулей, слева от 1
//
// alert(ms)
// alert(smallMs)
//
//
// alert((3422333455).toString(36));

// alert( 1e500 ); // Infinity

// https://learn.javascript.ru/number Неточные вычисления

// alert( 0.1 + 0.2 === 0.3 );
// alert( 0.1 + 0.2 )
// alert( 0.1.toFixed(20) );
//
// let sum = 0.1 + 0.2;
// alert( sum.toFixed(2) ); // 0.30
// Привет! Я – число, растущее само по себе!
// let s = Number();
// s = 9999999999999999;
// alert(s);
//
// alert( isNaN(NaN) ); // true
// alert( isNaN("str") ); // true
//
// alert( NaN === NaN );
//
// alert( isFinite("15") ); // true
// alert( isFinite("str") ); // false, потому что специальное значение: NaN
// alert( isFinite(Infinity) ); //

// let num = +prompt("Enter a number", '');
//
// // вернёт true всегда, кроме ситуаций, когда аргумент - Infinity/-Infinity или не число
// alert( isFinite(num) );
//
// alert( parseInt('0xff', 16) ); // 255
// alert( parseInt('ff', 16) ); // 255, без 0x тоже работает
//
// alert( parseInt('2n9c', 36) ); // 123456
// alert(Math.random())
// alert(Math.random())
// // alert(Math.random())
// let r = Math.sign(-1110) ;
// Math.toSource = function (r) {
//    if (r) {
//        return r.toLocaleString()
//    }
// }
// alert(Math.toSource(r))
// let n1;
// let n2;
// let res;
// function alertNum() {
//     n1 = +prompt('Enter number 1');
//     n2 = +prompt('Enter number 2');
//     res = n1 + n2;
// }
// alertNum()
// alert(res)

// alert(Math.round(12.921))
// alert(Math.round(12.321))
// alert(Math.round(12.49))
// alert(Math.round(12.5))
//
// alert( 1.35.toFixed(1) ); // 1.4
// alert(Math.round((6.35 * 10) / 10)); //6.4
// alert( Math.round(6.35 * 10) / 10);

// function readNumber() {
//     let n = +prompt('Введите число');
//     isFinite(n) ? alert(n) : readNumber();
// }
// readNumber();
//
// function readNumber2() {
//     let num;
//
//     do {
//         num = prompt("Введите число", 0);
//     } while ( !isFinite(num) );
//
//     if (num === null || num === '') return null;
//
//     return +num;
// }
//
// alert(`Число: ${readNumber2()}`);
//
// let i = 0;
// while (i < 11) {
//     i += 0.2;
//     if (i > 9.8 && i < 10.2) alert( i );
// }

// Случайное число от min до max
// важность: 2
// Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)
//
// Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).
//
// Пример работы функции:

// function random(a, b) {
//     let int = Math.random() * (b - a) + a
//     return parseInt(int);
// }
// //
// // alert( random(1, 5) ); // 1.2345623452
// // alert( random(12, 20) ); // 3.7894332423
// // alert( random(10, 12) ); // 4.3435234525
//
// // function random(min, max) {
// //     return min + Math.random() * (max - min);
// // }
//
// alert( random(1, 5) );
// alert( random(1, 5) );
// alert( random(1, 5) );
// function sum(a, b) {
//     return a + b;
// }
//
// alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

// let guestList = `Guests:
//  * John  * Mary
//
//  * Pete
// `;
//
// alert(guestList);

// let str = `Hello`;
//
// // получаем первый символ
// alert( str[0] ); // H
// alert( str[1] ); // H
// alert( str[2] ); // H
// alert( str[3] ); // H
// alert( str[4] ); // H
// alert( str[5] ); // H
//
// alert( str.charAt(0) ); // H
// alert( str.charAt(5) ); // H
//
// // получаем последний символ
// alert( str[str.length - 1] ); // o
//
// for (let ch of 'hello') {
//     alert(ch);
// }

// let str = 'Hiron';
// str = 'Periss ' + 'h' + str[1] + 'l' + 't' + str[3] + str[4];
// // str = 'l' + str[3];
// alert(str)

// let str2 = 'my wife is hungry';
// alert(str2.indexOf('is'));
// str2 = 'my wife ' + str2[8].toUpperCase() + 's hungry';
// alert(str2);
// alert(str2.indexOf('i'));
// alert(str2.indexOf('I', 4));
//
// let str = 'Ослик Иа-Иа посмотрел на виадук';
//
// let target = 'Иа'; // цель поиска

// let pos = 0;
// while (true) {
//     let foundPos = str.indexOf(target, pos);
//     if (foundPos === -1) break;
//
//     alert( `Найдено тут: ${foundPos}` );
//     pos = foundPos + 1; // продолжаем со следующей позиции
// }
//
// let str = "Ослик Иа-Иа посмотрел на виадук";
// let target = "Иа";
//
// let pos = -1;
// while ((pos = str.indexOf(target, pos + 1)) !== -1) {
//     alert( pos );
// alert(~4294967295);
// alert( '𝒳'.length ); // 2, MATHEMATICAL SCRIPT CAPITAL X
// alert( '😂'.length ); // 2, FACE WITH TEARS OF JOY
// alert( '𩷶'.length ); // 2, редкий китайский иероглиф
// alert( '𝒳'[0] ); // странные символы…
// alert( '𝒳'[1] ); // …части суррогатной пары
// // charCodeAt не поддерживает суррогатные пары, поэтому возвращает код для их частей

// alert( '𝒳'.charCodeAt(0).toString(16) ); // d835, между 0xd800 и 0xdbff
// alert( '𝒳'.charCodeAt(1).toString(16) );

// alert( 'S\u0307' ); // Ṡ
// alert( 'S\u0323\u0307\u0307\u0307\u0323' ); // Ṩ
//

// function ucFirstMy(str) {
//     str = str.slice(0,1).toUpperCase() + str.slice(1);
//     return str;
// }
// alert(ucFirstMy(''))
//
// function ucFirst(str) {
//     if (!str) return str;
//
//     return str[0].toUpperCase() + str.slice(1);
// }
//
// alert( ucFirst("") ); // Вася

// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
//
//     Функция должна быть нечувствительна к регистру:
//
//     checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false


// function checkSpam(str) {
//     let spam1 = 'xxx';
//     let spam2 = 'viagra';
//     str = str.toLowerCase();
//     if (str.includes(spam1) || str.includes(spam2)) {
//         alert(true)
//     } else {
//         alert(false)
//     }
//     // alert(str.includes(spam2));
//
// }
//
// checkSpam('buy ViAgRA now');
// checkSpam('free xxxxx');
// checkSpam("innocent rabbit");
//
// function checkSpam(str) {
//     let lowerStr = str.toLowerCase();
//
//     return lowerStr.includes('viagra') || lowerStr.includes('xxx');
// }
//
// alert( checkSpam('buy ViAgRA now') );
// alert( checkSpam('free xxxxx') );
// alert( checkSpam("innocent rabbit") );

// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength,
// заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
//
//     Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.
//
//     Например:
//
// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"
//
// truncate("Всем привет!", 20) = "Всем привет!"
//
// function truncate(str, pos) {
//     if (str.length > pos) {
//         return alert(str = str.substr(0, pos -1) + '...');
//     } else {
//         return alert(str);
//     }
// }
//
// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20)
// truncate("Всем привет!", 20)

// function extractCurrencyValue(str) {
//     // str = str[1] + str[2] + str[3]; //или такой вариант
//     // return str
//
//     // return str.slice(1) // или такой
//
//     if (!str.includes('$')) {
//         return str
//     }
//     return str.slice(1); //самый оптимальный вдруг знака не будет
// }
// alert( extractCurrencyValue('$120'));
// https://learn.javascript.ru/array Массивы
//
// let depo = ['usdt1: 1000', 'usdt2: 2000', 'usdt3: 3000'];
//
// alert(depo[1])
//
// depo[1] = 'usdt2: 2500';
//
// alert(depo[1]);
//
// depo[3] = 'btc1: 0.055';
//
// alert(depo.length);
// alert(depo);
//
// depo[4] = { nft: 'usdt(nft): 2000'};
// depo[5] = function () {
//     alert('Считаем депо...')
// }
//
// alert(depo[4].nft)
// depo[5]();
//
// let fruits = ["Яблоко", "Апельсин", "Груша"];
//
// alert( `${fruits.pop()}, ${fruits.pop()}` ); // удаляем "Груша" и выводим его
//
// alert( fruits ); // Яблоко, Апельсин
//
// // fruits.push("Груша");
// fruits[fruits.length] = 'Груша';
//
// alert( fruits ); // Яблоко, Апельсин, Груша
//
// alert( fruits.shift() ); // удаляем Яблоко и выводим его
//
// alert( fruits ); // Апельсин, Груша
//
// fruits.unshift('Яблоко', 'Помидоры', 'Сливы');
//
// alert( fruits ); // Яблоко, Апельсин, Груша

//
// let fruits = []; // создаём массив
//
// fruits[99999] = 5; // создаём свойство с индексом, намного превышающим длину массива
//
// fruits.age = 25;
//
// alert(fruits[99999]);
// alert(fruits.age);

// let arr = new Array("Яблоко", "Груша", "и тд");
// let arr = new Array(2); // создастся ли массив [2]?
//
// alert( arr[0] ); // undefined! нет элементов.
//
// alert( arr.length ); // length 2
//
// arr[2] = 'vvv';
//
// alert(arr[2]);
// alert( arr.length ); // length 2
// arr[0] = 'fff'
// alert( arr[0] ); // undefined! нет элементов.
// alert( arr.length ); // length 2

// let matrix = [
//     ['Lbvf', 2, 3],
//     [4, 5, 'her6'],
//     [7, 8, 9]
// ];
//
// alert( matrix[1][2] ); // 5, центральный элемент
//
// let styles = ['jazz', 'bluez'];
// alert(styles);
// styles.push('rock-n-roll');
// alert(styles);
// styles[Math.floor((styles.length - 1) / 2)] = 'classic';
// alert(styles);
// alert(styles.shift());
// alert(styles);
// styles.unshift('rap', 'reggie' );
// alert(styles);
//
// let arr = ["a", "b"];
//
// arr.push(function() {
//     alert( this );
// })
//
// arr[2](); // ?
// Напишите функцию sumInput(), которая:
//
// Просит пользователя ввести значения,
//      используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения,
//     когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
//     P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
// let arr = [];
// function sumInput2() {
//     let i = prompt('Enter only number');
//     let sum = 1;
//     let z = '0';
//
//     // do {
//     //     i = prompt('Enter only number');
//     // } while (i === '0' || parseFloat(i));
//
//     if (i === z || parseFloat(i)) {
//         arr.push(i);
//         sumInput2();
//     } else {
//         for (let s of arr) {
//             sum += +s;
//         }
//         alert('Вы нажали отмена, или ввели не число! Введенные Вами числа : ' + arr);
//         alert('Сумма чисел' + (sum -1));
//     }
//
// }
//
// sumInput2();
//
// function sumInput() {
//
//     let numbers = [];
//
//     while (true) {
//
//         let value = prompt("Введите число", 0);
//
//         // Прекращаем ввод?
//         if (value === "" || value === null || !isFinite(value)) break;
//
//         numbers.push(+value);
//     }
//
//     let sum = 0;
//     for (let number of numbers) {
//         sum += number;
//     }
//     return sum;
// }
//
// alert( sumInput() );
//
// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
//
//     Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
//
//     Функция getMaxSubSum(arr) должна возвращать эту сумму.
//
//     Например:

// function getMaxSubSum(arr) {
//     // for (let key in arr) {
//     //     alert(arr[key]);
//     //
//     // }
//
//     let maxSum = 0;
//
//     for (let i = 0; i < arr.length; i++) {
//         let sumFixSt = 0;
//         for (let j = i; j < arr.length; j++) {
//             sumFixSt += arr[j];
//             maxSum = Math.max(maxSum, sumFixSt);
//         }
//     }
//     return maxSum;
// }
//
// function getMaxSubSum(arr) {
//     let maxSum = 0;
//     let partialSum = 0;
//
//     for (let item of arr) { // для каждого элемента массива
//         partialSum += item; // добавляем значение элемента к partialSum
//         maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
//         if (partialSum < 0) partialSum = 0; // ноль если отрицательное
//     }
//
//     return maxSum;
// }
//
// alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
// alert( getMaxSubSum([2, -1, 2, 3, -9]) ); // 6
// alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
// alert( getMaxSubSum([1, 2, 3]) ); // 6
// alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
// alert( getMaxSubSum([-8, -9,-1, 1, 2, -3, 5]) ); // 5
// alert( getMaxSubSum([-1, 1, 2, 3, 2, -3, 4]) ); // 9
// alert( getMaxSubSum([-1, 1, 2, 3, 2, -3, 4]) ); // 9
// alert( getMaxSubSum([-1, 5, 11, 3, 2, -5, 14]) ); // 30
//
// //
// // function getMaxOfArray(numArray) {
// //     return Math.max.apply(null, numArray);
// // }
// //
// // alert( getMaxOfArray([-1, 2, 3, -9]) ); // 3
// // alert( getMaxOfArray([-1, 2, 3, -9, 11]) ); // 11
// // alert( getMaxOfArray([-2, -1, 1, 2]) ); // 2
// // alert( getMaxOfArray([1, 2, 3]) ); // 3
// // alert( getMaxOfArray([100, -9, 2, -3, 5]) ); // 100


// //Все что заводилось
// // первым делов вписываем текущий курс в строку ниже
// let cursNow = prompt('Введите текущий курс БТЦ(без точек и зарпятых)');
// let startedUp = {
//     usdt: {
//         usdt1: 2743,
//         usdt2: 3904,
//         usdt3: 3000,
//         usdt4: 570,
//         usdt5: 3600,
//         usdt6: 764,
//     },
//     btc: {
//         btc1: 0.051,
//         btc2: 0.027,
//     },
//     usdtSignals: {
//         usdt1: 67,//rocket
//         fatPig: 950,//fatPig
//     },
//     usdtNft: {
//         usdt1: 270,
//         usdt2: 300,//Скрипт
//     }
// }
// let allDepo;
// let allDepoOld;
// function calcStartedUpDepo() {
//     // let allDepo = 0;
//     let allUsdt = 0;
//     let allBtc = 0;
//     let allBtcU = 0;
//     let allBtcLateRate = 0;
//     let rateNow = cursNow;
//     let rateLate = [57644, 67500];
//     let averageRating = 0;
//     let allSignals = 0;
//     let allNft = 0;
//     for (let key in rateLate) {
//         averageRating = (averageRating += rateLate[key] / 2) ;
//     }
//     for (let key in startedUp.usdt) {
//         allUsdt += startedUp.usdt[key];
//     }
//     for (let key in startedUp.btc) {
//         allBtc += (startedUp.btc[key]);
//         allBtcLateRate += (startedUp.btc[key] * averageRating);
//         allBtcU += (startedUp.btc[key] * rateNow);
//     }
//     for (let key in startedUp.usdtSignals) {
//         allSignals += (startedUp.usdtSignals[key])
//     }
//     for (let key in startedUp.usdtNft) {
//         allNft += (startedUp.usdtNft[key])
//     }
//     allDepo = `${allUsdt + allBtcU + allSignals + allNft}`;
//     allDepoOld = `${allUsdt + allBtcLateRate + allSignals + allNft}`;
//     return alert(`
//     Всего заводилось(по новому (${rateNow}) курсу): ${allUsdt + allBtcU + allSignals + allNft}
//
//                   usdt: ${allUsdt}
//                   btc(btc): ${allBtc}
//                   btc(usdt): ${allBtcU}
//                   signals: ${allSignals}
//                   nft: ${allNft}
//
//                   заводилось по курсу: ${averageRating}
//                   считаеться по курсу БТЦ: ${rateNow}
//
//     Всего заводилось(по старому (${averageRating}) курсу): ${allUsdt + allBtcLateRate + allSignals + allNft}
// `);
// }
//
// // Считаем и выводим весь депо
// calcStartedUpDepo();
//
// //Рссходы с биржы
// let costs = {
//     costsFromEx: {
//         usdt1: 71,
//         usdt2: 191,
//         usdt3: 66,
//         usdt4: 135,
//         usdt5: 75,
//         usdt6: 121,
//         usdt7: 56,
//         usdt8: 350,
//         usdt9: 56,
//         usdt10: 56,
//         // usdt11: 170,
//         // usdt12: 200,
//     },
//     costsFromWallet: {
//         usdt1: 67,
//         usdt2: 950,
//         usdt3: 270,
//         usdt4: 300,
//     }
// }
// let allCosts;
// function calcAllCosts() {
//     let allCostsEx = 0;
//     let allCostsW = 0;
//     for (let key in costs.costsFromEx) {
//         allCostsEx += (costs.costsFromEx[key]);
//     }
//     for (let key in costs.costsFromWallet) {
//         allCostsW += (costs.costsFromWallet[key]);
//     }
//     allCosts = `${allCostsEx + allCostsW}`;
//     return alert(`
//     Рассходы: ${allCostsEx + allCostsW} usdt
//
//     c Биржы: ${allCostsEx} usdt
//     c общих: ${allCostsW} usdt`);
// }
// // Считаем сколько всего ушло на сигналы/нфт
// calcAllCosts()
//
// //Результат по нынешнему курсу и результат расходов добавляем в массив
// let diffInputsCosts = []
// diffInputsCosts.push(allDepo);
// diffInputsCosts.push(allCosts);
//
// //Считаем разницу между депозитом и расходами, получаем сумму которая зашла на биржу
// let diff;
// function calcDiffDepoCosts() {
//     diff = diffInputsCosts[0] - diffInputsCosts[1];
//     return alert(`Зашло на биржу(без учета рассходов/по нынешнему курсу): ${diff.toFixed(2)}`);
// }
// calcDiffDepoCosts();
//
// //Выписуем все с бирж и кошельков
// let backPackNow = {
//     nft: {
//             bronzeTicket: 90,
//             mysteryBoxDeHero: 27 * 10,
//             theSpheres: 100 * 2,
//             ironHeelOrange: 120 * 2,
//             blueSky: 35 * 3,
//             ducks: 30 * 6,
//             lazio: 7 * 4,
//             porto: 13 * 4,
//             mysteryBoxMazinger: 12.5 * 4,
//             mysterBoxRara: 9 * 3,
//             shiba: 8,
//             glory: 8 * 3,
//             diamonds8: 12 * 2,
//             bellCommon: 2 * 2,
//             thor: 90,
//             seoul: 25,
//             celiaRare: 40,
//             venomArmor: 199,
//             gypsyKing: 19,
//             whaleB4: 12,
//             ericHaze: 20,
//     },
//     spot: {
//         usdt: {
//             usdt: 201,
//             busd: 302,
//         },
//         btc: {
//             btc: 0,
//         },
//         altUsdt: {
//             bnb: 682,
//             psg: 190,
//             chr: 138,
//             ltc: 122,
//             usdc: 105,
//             porto: 65,
//             enj: 50,
//             dar: 47,
//             dodo: 33,
//             icx: 25,
//             bnx: 20,
//             lazio: 15,
//             near: 11,
//             beta: 11,
//             alice: 7,
//             c98: 4,
//             luna: 3,
//             other: 10,
//         },
//         altBtc: {
//             eth: (0.0841 * 0.0664) * cursNow, // считаем по курсу к биткоину и биткоин к доллару
//         }
//     },
//     futures: {
//         usdt: 214,
//         busd: 0,
//     },
//     earn: {
//         staking: {
//             ava: (163.89 * 0.00003037) * cursNow, // считаем по курсу к биткоину и биткоин к доллару
//             btc: 0.1503 * cursNow,
//             dot: 13.15 * 18.46,
//             sol: 2.34 * 92,
//         },
//         launchpad: {
//             mc: 31.16 * 2.15,
//         },
//         auction: {
//             dot: 3.77 * 18.46,
//         },
//         other: {
//             huobi: 200,
//             xrp: 168 * 0.60,
//         }
//     }
// }
// //Считаем нынешний депо по нынешнему курсу и отнимаем от результата 'депо без расходов'
// function calcActualDepo() {
//     let allNft = 0;
//     let allSpot = {
//         allSpotUsdt: 0,
//         allSpotBtc: 0,
//         allSpotAltUsdt: 0,
//         allSpotAltBtc: 0,
//     };
//     let allFutures = 0;
//     let allEarn = {
//         staking: 0,
//         launchpad: 0,
//         auction: 0,
//         other: 0,
//     }
//     for (let key in backPackNow.nft) {
//         allNft += backPackNow.nft[key]
//     }
//     for (let key in backPackNow.spot.usdt) {
//         allSpot.allSpotUsdt += backPackNow.spot.usdt[key]
//     }
//     for (let key in backPackNow.spot.btc) {
//         allSpot.allSpotBtc += backPackNow.spot.btc[key]
//     }
//     for (let key in backPackNow.spot.altUsdt) {
//         allSpot.allSpotAltUsdt += backPackNow.spot.altUsdt[key]
//     }
//     for (let key in backPackNow.spot.altBtc) {
//         allSpot.allSpotAltBtc += backPackNow.spot.altBtc[key]
//     }
//     for (let key in backPackNow.futures) {
//         allFutures += backPackNow.futures[key]
//     }
//     for (let key in backPackNow.earn.staking) {
//         allEarn.staking += backPackNow.earn.staking[key]
//     }
//     for (let key in backPackNow.earn.launchpad) {
//         allEarn.launchpad += backPackNow.earn.launchpad[key]
//     }
//     for (let key in backPackNow.earn.auction) {
//         allEarn.auction += backPackNow.earn.auction[key]
//     }
//     for (let key in backPackNow.earn.other) {
//         allEarn.other += backPackNow.earn.other[key]
//     }
//
//     return alert(`Сейчас на бирже(usdt): ${allNft + allSpot.allSpotUsdt + allSpot.allSpotBtc + allSpot.allSpotAltUsdt + allSpot.allSpotAltBtc + allEarn.staking + allEarn.launchpad + allEarn.auction + allEarn.other + allFutures}
//       В NFT:  ${allNft}
//       Спот: ${allSpot.allSpotUsdt + allSpot.allSpotBtc + allSpot.allSpotAltUsdt + allSpot.allSpotAltBtc}
//       Earn: ${allEarn.staking + allEarn.launchpad + allEarn.auction + allEarn.other}
//       Фьючерсы:  ${allFutures}
//
//       Разница(по текущему курсу/без учета расходов):
//       -${diff.toFixed(2) - (allNft + allSpot.allSpotUsdt + allSpot.allSpotBtc + allSpot.allSpotAltUsdt + allSpot.allSpotAltBtc + allEarn.staking + allEarn.launchpad + allEarn.auction + allEarn.other + allFutures)}
//       Разница(по текущему курсу/с учетом расходов):
//       -${allDepo - (allNft + allSpot.allSpotUsdt + allSpot.allSpotBtc + allSpot.allSpotAltUsdt + allSpot.allSpotAltBtc + allEarn.staking + allEarn.launchpad + allEarn.auction + allEarn.other + allFutures)}
//       Разница(по курсу как заводились):
//       -${allDepoOld - (allNft + allSpot.allSpotUsdt + allSpot.allSpotBtc + allSpot.allSpotAltUsdt + allSpot.allSpotAltBtc + allEarn.staking + allEarn.launchpad + allEarn.auction + allEarn.other + allFutures)}
//       `);
// }
// calcActualDepo();


// Методы массивов
// let arr = ['usdt: 1000', 'btc: 0.05', 'alt: 6000']
// arr.splice(1, 1);
// alert(arr)
// arr.splice(0,1,'usdt: 500', 'btc: 0.15')
// alert(arr)
// let rem = arr.splice(0,2)
// alert(rem)
// arr.slice(1,2);
// alert(arr)
// let arr = [1, 2]
// let arr2 = [6, 8]
//
// let newArr = arr.concat([3, 4], arr2, 9, 10);
// newArr.splice(4, 0, 5)
// newArr.splice(6, 0, 7)
// alert(newArr)
//
// let arr = [1, 2];
//
// let arrayLike = {
//     0: "что-то",
//     length: 1
// };
// let newA = 0;
// for (let key in arrayLike) {
//     newA += arrayLike[key]
// }
// let newA1 = newA.concat(arr)
// alert(newA1);
//
// let arr = [1, 2];
//
// let arrayLike = {
//     0: "что-то",
//     1: "ещё",
//     [Symbol.isConcatSpreadable]: true,
//     length: 33
// };
//
// alert( arr.concat(arrayLike) ); // 1,2,что-то,ещё
//
// //
// ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
//     alert(`${item} имеет позицию ${index} в ${array}`);
// });
// let result = arr.find(function(item, index, array) {
//     // если true - возвращается текущий элемент и перебор прерывается
//     // если все итерации оказались ложными, возвращается undefined
// });
// let users = [
//     {
//         id: 1, name: "Вася",
//         [Symbol.isConcatSpreadable]: true,
//         length: 4
//     },
//     {id: 2, name: "Петя"},
//     {id: 3, name: "Маша"},
//
// ];
// let user = users.findIndex(function checkId(id , name, users) {
//     return id === 1;
// });
// alert(user); // Вася
//
// let users = [{id: 0}, 2, 3 , 4, {id: 5}, 6];
// alert(users.findIndex(item => item.id === 5))
// let nU = users.find(item => item.id === 5);
// for (let key in nU) {
//     alert(nU[key])
// }
// users = users.concat(nU)
// // alert(users)
//
// let users = [
//     {id: 1, name: "Вася"},
//     {id: 2, name: "Петя"},
//     {id: 3, name: "Маша"},
//     {id: 4, name: "Петя"},
//     {id: 5, name: "Петя"},
//     {id: 6, name: "Петя"},
//
// ];
//
// // возвращает массив, состоящий из двух первых пользователей
// let someUsers = users.filter(item => item.name === 'Маша');
//
// alert(someUsers.length); // 2
// let lengths = ['bilbo', 'pidor', 'ibrogim'];
// // alert(lengths.map(item => item.length));
//
// function compareNumeric(a, b) {
//     if (a > b) return 1;
//     if (a === b) return 0;
//     if (a < b) return -1;
// }
//
// let arr = [ 1, 2, 15, 4, 9, 17, 3, 5, 6 ];
//
// arr.sort(compareNumeric);
//
// alert(arr);  // 1, 2, 15
//
// [-1, -2, 15, 2, 0, 8].sort(function(a, b) {
//     alert( a + " <> " + b );
// });
//
// let arr = [ 1, 9, 2, 15, 11, -4, -10, 'b', 'c', 'a'];
//
// arr.sort((a, b) => a - b );
// alert(arr);  // 1, 2, 15
// arr.reverse();
// alert(arr)
//
// let names = 'Вася, Петя, Маша';
//
// let arr = names.split(', ');
//
// for (let name of arr) {
//     alert( `Сообщение получат: ${name}.` ); // Сообщение получат: Вася (и другие имена)
// }
//
// let str = arr.join(', ');
// alert(str)
// let arr = [44, 13, 54, 1]
// let res = arr.reduce((s, c) => s + c, 0);
// alert(res)
// let arr2 = [{a: 1}, {b: 2}]
// let arr2Key;
// for (let key in arr2) {
//     arr2Key = arr2[key]
// }
// alert(arr2Key)
// let res2 = arr2.reduce((s, c) => s + c, 0);
// // alert(res2)
// let arr = [1, 9, 16, 30, 11, 0];
// let obj = {0: 0, 1: 1};
// let aN = arr.reduceRight((sum, c) => sum + c, 100)
// alert(aN)
// alert(`${Array.isArray(arr)} ${Array.isArray(obj)}`)
// let army = {
//     minAge: 18,
//     maxAge: 27,
//     canJoin(user) {
//         return user.age >= this.minAge && user.age < this.maxAge;
//     }
// };
//
// let users = [
//     {age: 16},
//     {age: 20},
//     {age: 23},
//     {age: 30},
//     {age: 27},
//     {age: 26},
//     {age: 18},
// ];
//
// // найти пользователей, для которых army.canJoin возвращает true
// let soldiers = users.filter(army.canJoin, army);
//
// alert(soldiers.length); // 2
// alert(soldiers[0].age); // 20
// alert(soldiers[1].age); // 23
// Изученных нами методов достаточно в 99% случаев, но существуют и другие.
//
// arr.some(fn)/arr.every(fn) проверяет массив.
//
//     Функция fn вызывается для каждого элемента массива аналогично map. Если какие-либо/все результаты вызовов являются true, то метод возвращает true, иначе false.
//
// arr.fill(value, start, end) – заполняет массив повторяющимися value, начиная с индекса start до end.
//
// arr.copyWithin(target, start, end) – копирует свои элементы, начиная со start и заканчивая end, в собственную позицию target (перезаписывает существующие).
//
// Итого
// Шпаргалка по методам массива:
//
//     Для добавления/удаления элементов:
//
//     push (...items) – добавляет элементы в конец,
//     pop() – извлекает элемент с конца,
//     shift() – извлекает элемент с начала,
//     unshift(...items) – добавляет элементы в начало.
// splice(pos, deleteCount, ...items) – начиная с индекса pos, удаляет deleteCount элементов и вставляет items.
// slice(start, end) – создаёт новый массив, копируя в него элементы с позиции start до end (не включая end).
// concat(...items) – возвращает новый массив: копирует все члены текущего массива и добавляет к нему items. Если какой-то из items является массивом, тогда берутся его элементы.
//     Для поиска среди элементов:
//
//     indexOf/lastIndexOf(item, pos) – ищет item, начиная с позиции pos, и возвращает его индекс или -1, если ничего не найдено.
// includes(value) – возвращает true, если в массиве имеется элемент value, в противном случае false.
//     find/filter(func) – фильтрует элементы через функцию и отдаёт первое/все значения, при прохождении которых через функцию возвращается true.
//     findIndex похож на find, но возвращает индекс вместо значения.
//     Для перебора элементов:
//
//     forEach(func) – вызывает func для каждого элемента. Ничего не возвращает.
//     Для преобразования массива:
//
//     map(func) – создаёт новый массив из результатов вызова func для каждого элемента.
// sort(func) – сортирует массив «на месте», а потом возвращает его.
// reverse() – «на месте» меняет порядок следования элементов на противоположный и возвращает изменённый массив.
//     split/join – преобразует строку в массив и обратно.
// reduce(func, initial) – вычисляет одно значение на основе всего массива, вызывая func для каждого элемента и передавая промежуточный результат между вызовами.
//     Дополнительно:
//
// Array.isArray(arr) проверяет, является ли arr массивом.
// let newStr;
// let newStr2;
// let upC;
// let word;
// let nW;
// let newWord;
// let newWordUpc;
// function camelize(str) {
//     // newStr = str.split('-');
//     // newStr[1][0].toUpperCase();
//     // alert(`${newStr[0]}${newStr[1][0].toUpperCase()}${newStr[1].slice(1)}`) //Гавно вариант
//
//     newStr = str.split('-');
//     // alert(newStr[0].length) //вычесляем длину первого элемента
//     if (newStr[0].length === 0) {
//         newStr.splice(0, 1);
//     }
//
//     for (let key in newStr) {
//         word = newStr[key];
//         upC = newStr[key][0].toUpperCase();
//         nW = word.split('');
//         newWord = nW.splice(0, 1, upC);
//         newWordUpc = nW.join('');
//         newStr2 = newStr.concat([newWordUpc])
//     }
//     alert(newStr2)
// }
//
// function camelize(str) {
//     // return str
//     //     .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
//     //     .map(
//     //         // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
//     //         // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
//     //         (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//     //     )
//     //     .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
//
//     let newArr = str.split('-');
//     if (newArr[0].length === 0) {
//         newArr.splice(0, 1);
//     }
//     let newArr2 = newArr.map(item => item[0].toUpperCase() + item.slice(1));
//     alert(newArr2.join(''));
// }
//
// camelize("background-color");
// camelize("list-style-image");
// camelize("-webkit-transition");
// camelize("-routeMap-webkit-transition");
// // https://learn.javascript.ru/array-methods Фильтрация по диапазону
// Фильтрация по диапазону
// важность: 4
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.
//
//     Функция должна возвращать новый массив и не изменять исходный.
//
//     Например:

// let arr = [5, 3, 8, 1];
//
// function filterRange(arr, i, e) {
//     let newArr;
//     return newArr = arr.filter(item => (i <= item && item <= e));
// }
//
// let filtered = filterRange(arr, 1, 4);
//
// alert( filtered ); // 3,1 (совпадающие значения)
//
// alert( arr ); // 5,3,8,1 (без изменений)
//
// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения
// кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
//
//     Функция должна изменять принимаемый массив и ничего не возвращать.
//
//     Например:
// let arr = [5, 3, 8, 1];
// let firstN;
// let secondN;
// let newArr;
// function filterRangeInPlace(arr, a, b) {
//     // firstN = arr.findIndex(item => item === a);
//     // secondN = arr.findIndex(item => item === b);
//     // alert('a:' +firstN + ' b:' + secondN);
//
//     // arr.splice((a - 1), 1);
//     firstN = arr.splice((a), 1);
//     alert(firstN) //3
//     newArr = arr.slice((arr.length - 1))
//     alert(newArr) //1
//     alert(arr.length) //3
// }
//
// filterRangeInPlace(arr, 1, 4)
//
// alert(arr); // [3, 1] //581








