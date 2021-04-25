// 1

// let data = new Date(2012, 1, 20, 3, 12, 0, 0);
// console.log(data);

// 2

// let date = new Date(2012, 0, 3);
// function getWeekDay(date) {
//     let week = date.getDay()
//     switch (week) {
//         case 0:
//             week = 'ВС';
//             break;
//         case 1:
//             week = 'ПН';
//             break;
//         case 2:
//             week = 'ВТ';
//             break;
//         case 3:
//             week = 'СР';
//             break;
//         case 4:
//             week = 'ЧТ';
//             break;
//         case 5:
//             week = 'ПТ';
//             break;
//         case 6:
//             week = 'СБ';
//             break;
//     }
//     return week
// }
// console.log(getWeekDay(date));

// 3

// let date = new Date(2012, 0,);
// function getLocalDay(date) {
//     let week = date.getDay();
//     let local = week;
//     switch (week) {
//         case 0:
//             week = 'ВС';
//             break;
//         case 1:
//             week = 'ПН';
//             break;
//         case 2:
//             week = 'ВТ';
//             break;
//         case 3:
//             week = 'СР';
//             break;
//         case 4:
//             week = 'ЧТ';
//             break;
//         case 5:
//             week = 'ПТ';
//             break;
//         case 6:
//             week = 'СБ';
//             break;
//     }
//     if (local == 0) local = 7;
//     return `${week} : ${local} - по счету `
// }
// console.log(getLocalDay(date));

// 4

// function getDateAgo(date, days) {
//     let dateNew = new Date(date);

//     dateNew.setDate(date.getDate() - days);
//     return dateNew.getDate();
// }

// let date = new Date(2015, 0, 2);
// console.log(getDateAgo(date, 7));

// 5

// let user = {
//     name: "Василий Иванович",
//     age: 35
// };
// let json = JSON.stringify(user);
// console.log(json);
// let user2 = JSON.parse(JSON.stringify(user));
// console.log(user2);

// 6

// let room = {
//     number: 23
// };

// let meetup = {
//     title: "Совещание",
//     occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
//     place: room
// };

// // цикличные ссылки
// room.occupiedBy = meetup;
// meetup.self = meetup;
// console.log(JSON.stringify(meetup, function replacer(key, value) {
//     return (key != "" && value == meetup) ? undefined : value
// }));

