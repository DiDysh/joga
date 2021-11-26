"use strict"
// Меню-бургер для мобильных устройств
// Появление меню при нажатии на бургер
document.getElementById("trigger").onclick = function() {open()};

function open() {
    document.getElementById("menu-list").classList.add("show");
    document.getElementById("trigger").classList.add("trigger-closed");
}

// Исчезновение меню при нажатии на любую область экрана,кроме бургера
let specifiedElement = document.getElementById('trigger');

document.addEventListener('click', function(event) {
    let isClickInside = specifiedElement.contains(event.target);

    if (!isClickInside) {
        document.getElementById("menu-list").classList.remove("show");
    document.getElementById("trigger").classList.remove("trigger-closed");
    }
});

// Исчезновение меню при повторном нажатии на бургер (крестик)
document.getElementById("trigger").onclick = function() {close()};
function close() {
    document.getElementById("menu-list").classList.toggle("show");
    document.getElementById("trigger").classList.toggle("trigger-closed");
}


// Menu
// Удаление класса active у первого элемента при наведении мыши на другие элементы
let menuElement = document.getElementById('active-menu-link');
function changeActivity() {
    menuElement.classList.remove("menu__list-link-active");
}

// Возвращение класса active первому элементу при отводе мыши
function rechangeActivity() {
    menuElement.classList.add("menu__list-link-active");
}


// Playlist
// Включение и выключение музыки в плеере

let firstSong = new Audio();
firstSong.src = "assets/music/North Oakland Extasy - Squadda B.mp3";

document.getElementById('first-song').onclick = function() {
  if (firstSong.paused == true) {
    firstSong.play();
    secondSong.pause();
    thirdSong.pause();
    document.getElementById('first-song-img').src = 'assets/images/playlist/button-stop.svg';
    document.getElementById('second-song-img').src = 'assets/images/playlist/button-play.svg';
    document.getElementById('third-song-img').src = 'assets/images/playlist/button-play.svg';

  } else {
    firstSong.pause();
    document.getElementById('first-song-img').src = 'assets/images/playlist/button-play.svg';
  }
};

let secondSong = new Audio();
secondSong.src = "assets/music/Drifting at 432 Hz - Unicorn Heads.mp3";

document.getElementById('second-song').onclick = function() {
  if (secondSong.paused == true) {
    firstSong.pause();
    secondSong.play();
    thirdSong.pause();
    document.getElementById('first-song-img').src = 'assets/images/playlist/button-play.svg';
    document.getElementById('second-song-img').src = 'assets/images/playlist/button-stop.svg';
    document.getElementById('third-song-img').src = 'assets/images/playlist/button-play.svg';

  } else {
    secondSong.pause();
    document.getElementById('second-song-img').src = 'assets/images/playlist/button-play.svg';
  }
};

let thirdSong = new Audio();
thirdSong.src = "assets/music/Voices - Patrick Patrikios.mp3";

document.getElementById('third-song').onclick = function() {
  if (thirdSong.paused == true) {
    firstSong.pause();
    secondSong.pause();
    thirdSong.play();
    document.getElementById('first-song-img').src = 'assets/images/playlist/button-play.svg';
    document.getElementById('second-song-img').src = 'assets/images/playlist/button-play.svg';
    document.getElementById('third-song-img').src = 'assets/images/playlist/button-stop.svg';

  } else {
    thirdSong.pause();
    document.getElementById('third-song-img').src = 'assets/images/playlist/button-play.svg';
  }
};


// Practice
// Удаление класса active у первого элемента при наведении мыши на другие элементы

let practiceElement = document.getElementById('active-item');
function changeItem() {
    practiceElement.classList.remove("practice__features-item-active");
}

// Возвращение класса active первому элементу при отводе мыши
function rechangeItem() {
    practiceElement.classList.add("practice__features-item-active");
}