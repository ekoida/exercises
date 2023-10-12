import { showListOfSongs } from "./show_list_of_songs.js";
import { showTableOfStudents } from "./show_table_of_students.js";

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
