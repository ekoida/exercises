const generateRandomID = () => Math.floor(Math.random() * 1000);
const generateRandomGrade = () => Math.floor(Math.random() * 10);

const listOfStudents = [
  {
    sdudentId: generateRandomID(),
    studentName: "John",
    grade: generateRandomGrade(),
  },
  {
    sdudentId: generateRandomID(),
    studentName: "Marry",
    grade: generateRandomGrade(),
  },
  {
    sdudentId: generateRandomID(),
    studentName: "Bjork",
    grade: generateRandomGrade(),
  },
  {
    sdudentId: generateRandomID(),
    studentName: "Michael",
    grade: generateRandomGrade(),
  },
  {
    sdudentId: generateRandomID(),
    studentName: "Richard",
    grade: generateRandomGrade(),
  },
  {
    sdudentId: generateRandomID(),
    studentName: "Patrick",
    grade: generateRandomGrade(),
  },
];

export function showTableOfStudents() {
  // 1 - найти элемент tbody по классу
  const tbody = document.querySelector(".students_data");
  // 2 - создать элемент tr
  const tr = document.createElement("tr");
  // 3 - создать элемент td
  const td = document.createElement("td");
  // 4 - удалить tr c записью No Data
  tbody.removeChild(tbody.querySelector("tr"));

  // 5 - создать цикл для обхода массива с данными студентов
  for (let i = 0; i < listOfStudents.length; i++) {
    //   7 - клонировать tr
    const currentTr = tr.cloneNode(true);
    //   8 - клонировать td  для каждого свойства студента (id, имя и оценка)
    const currentTdId = td.cloneNode(true);
    const currentTdName = td.cloneNode(true);
    const currentTdGrade = td.cloneNode(true);
    //   9 - записть в каждый клониваный td соответвующую информацию
    currentTdId.textContent = listOfStudents[i].sdudentId;
    currentTdName.textContent = listOfStudents[i].studentName;
    currentTdGrade.textContent = listOfStudents[i].grade;
    //   10 - добавить клонированные td в клонированный tr
    currentTr.append(currentTdId, currentTdName, currentTdGrade);
    //   11 - добавить клонированый tr в tbody
    tbody.appendChild(currentTr);
  }
}
