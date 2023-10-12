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
  // 2 - создать элемент tr
  // 3 - создать элемент td
  // 4 - удалить tr c записью No Data
  // 5 - создать цикл для обхода массива с данными студентов
  // 6 - внутри цикла:
  //   7 - клонировать tr
  //   8 - клонировать td  для каждого свойства студента (id, имя и оценка)
  //   9 - записть в каждый клониваный td соответвующую информацию
  //   10 - добавить клонированные td в клонированный tr
  //   11 - добавить клонированый tr в tbody
}
