import { showListOfSongs } from "./show_list_of_songs.js";
import { showTableOfStudents } from "./show_table_of_students.js";
import { paginatedTable } from "./paginated_table.js";
////////////////////////////////////////////////
// Show list of songs function implementation //
///////////////////////////////////////////////
const showSongsButton = document.querySelector(".show_songs");
showSongsButton.addEventListener("click", showListOfSongs);

////////////////////////////////////////////////
// Show table of students implementation //
///////////////////////////////////////////////
const showStudentsTable = document.querySelector(".show_students");
showStudentsTable.addEventListener("click", showTableOfStudents);

////////////////////////////////////////////////
// Show paginaited table of customs //
// make pagination work and show the custom by 5 on the page //
///////////////////////////////////////////////
paginatedTable();

// Задание 2
// 1 - найти на странице элемент селект с классом .items_per_page
// 2 - добавить евент листенер для селекта и вызывать функцию
// paginatedTable() на "change" евент
// 3 - передавть в функцию paginatedTable желаемое количесвто рядов для отрисовки
// 5 - для этого испоьлзовать свойства объекта евент (чуть чуть поисследовать)
