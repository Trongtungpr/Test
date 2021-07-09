// Bài 1
// let str = "program";
// let newStr="";
// console.log(str);
// for(let i=str.length-1; i>=0; i--){
//     newStr += str[i];
// }
// console.log(newStr);

// bài 2
// let str = "this is TEST".toLowerCase().split(" ");
// let s = "";
// for(let i=0; i<str.length; i++){

//     let newStr = str[i][0].charAt(0).toLocaleUpperCase()+str[i].slice(1);
//     s+=" "+newStr;
// }
// console.log(s);

// bài 3

// function unique(arr) {
//     var newArr = []
//     for (var i = 0; i < arr.length; i++) {
//       if (!newArr.includes(arr[i])) {
//         newArr.push(arr[i])
//       }
//     }
//     return newArr
//   }
//   console.log(unique([1, 1, 2, 3, 5, 3, 1, 5, 6, 7, 4]))

// // bài 4
// let FutureAcademy = [
//     {
//         ten: "Tung",
//         tuoi: 26,
//         mucLuong: 1000,
//         chucVu: "Nhan Vien",
//     },
//     {
//         ten: "Đức",
//         tuoi: 30,
//         mucLuong: 5000,
//         chucVu: "Lead",
//     },
//     {
//         ten: "Lê",
//         tuoi: 28,
//         mucLuong: 2500,
//         chucVu: "ViceLead",
//     }
// ]

// while (true) {
//     let check = prompt("Nhập chức năng C,R,U,D");
//     if (check == "U") {
//         let checkID =Number(prompt("Nhập id cần check"));
//         checkID = checkID -1;
//         let check1 = prompt("bạn muốn update thành phần nào")
//         if (check1 == "name") {
//             let newName = prompt("nhập tên cần update");
//             FutureAcademy[checkID].ten = newName;
//         }
//         else if (check1 == "tuoi") {
//             let newTuoi = prompt("Nhập tuổi cần update");
//             FutureAcademy[checkID].tuoi= newTuoi;
//         }
//         else if (check1 == "mucLuong") {
//             let newMucLuong = prompt("Nhập mức lương cần update");
//             FutureAcademy[checkID].mucLuong = newMucLuong;

//         }
//         else if (check1 == "chucVu") {
//             let newChucVu = prompt("Nhập chuc vu cần update");
//             FutureAcademy[checkID].chucVu= newChucVu;
//         }
//         else if (check1 == "all") {
//             let newName = prompt("nhập tên cần update");
//             let newTuoi = prompt("Nhập tuổi cần update");
//             let newMucLuong = prompt("Nhập mức lương cần update");
//             let newChucVu = prompt("Nhập chuc vu cần update");
//             FutureAcademy[checkID].ten = newName;
//             FutureAcademy[checkID].tuoi= newTuoi;
//             FutureAcademy[checkID].mucLuong = newMucLuong;
//             FutureAcademy[checkID].chucVu = newChucVu;
//         }
//     }
//     else if (check == "r"){
//         for (let i = 0; i < FutureAcademy.length; i++) {
//             console.log(`${FutureAcademy[i].ten}\n${FutureAcademy[i].tuoi}\n${FutureAcademy[i].mucLuong}\n${FutureAcademy[i].chucVu}\n`);
//         }
//     }
//     else if(check == "d"){
//         let checkID =Number(prompt("Nhập id  nhân viên cần xóa"));
//         checkID = checkID -1;
//         delete FutureAcademy[checkID];
//     }
//     else if (check == "c"){
//         let newName = prompt("nhập tên ");
//         let newTuoi = prompt("Nhập tuổi ");
//         let newMucLuong = prompt("Nhập mức lương ");
//         let newChucVu= prompt("Nhập chuc vu");
//         FutureAcademy[FutureAcademy.length] = {
//             ten: newName,
//             tuoi: newTuoi,
//             mucLuong: newMucLuong,
//             chucVu: newChucVu
//         }
//     }
//     else if(check == "esc"){
//         break;
//     }
// }
//bài 5