const listOfScorpionsAlbums = [
  "Lonesome Crow",
  "Fly to the Rainbow",
  "In Trance",
  "Virgin Killer",
  "Taken by Force",
  "Lovedrive",
  "Animal Magnetism",
  "Blackout",
  "Love at First Sting",
  "Savage Amusement",
  "Crazy World",
  "Face the Heat",
  "Pure Instinct",
  "Eye II Eye",
  "Unbreakable",
  "Humanity: Hour I",
  "Return To Forever",
  "Rock Believer",
];

export function showListOfSongs() {
  // 1 - найти элемент ul, куда будем вписывать названия альбомов
  const ul=document.querySelector(".list_of_songs");
  // 2 - создать элемент списка li, например так const li = document.createElement('li')
  const li=document.createElement("li");
  // 3 - в цикле пройти по всем альбомам из массива
  for (let i=0; i < listOfScorpionsAlbums.length; i++) {
  //    4 - клонивать созданный элемент списка li, например так const currentLi = li.cloneNode(true)
  const currentLi = li.cloneNode(true);
    //    5 - добавить в клонированый элемент списка название альбома
currentLi.textContent=listOfScorpionsAlbums[i]
  //    6 - добавить клонированый элемент в элемент ul,  который мы нашли в пункте №1
    ul.appendChild(currentLi);
  }
}
