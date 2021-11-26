
document.getElementById("trigger").onclick = function() {open()};

function open() {
    document.getElementById("menu-list").classList.toggle("show");
}



// document.getElementById("trigger").onclick = function() {open()};

// let specifiedElement = document.getElementById('menu-list');

// function open() {
//     document.getElementById("menu-list").classList.toggle("show");
//     document.getElementById("trigger").classList.toggle("trigger-closed");
//     document.body.classList.toggle("body-hidden");


// }


// document.body.onclick = function(){close()};
// function close() {
//     document.getElementById("menu-list").classList.remove("show");
//     document.getElementById("trigger").classList.remove("trigger-closed");
//     document.body.classList.remove("body-hidden");
// }

// if (document.getElementById("menu-list").classList.contains("show")) {
//     close();
//     };


// document.getElementById("menu-list").onclick = function() {close()};

// function close() {
//     document.getElementById("menu-list").style.display = "none";
// }




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




let firstSong = new Audio();
firstSong.src = "assets/music/North Oakland Extasy - Squadda B.mp3";

document.getElementById('first-song').onclick = function() {
  if (firstSong.paused == true) {
    firstSong.play();
    document.getElementById('first-song-img').src = 'assets/images/playlist/button-stop.svg';
    secondSong.pause();
    thirdSong.pause();


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
    secondSong.play();
    document.getElementById('second-song-img').src = 'assets/images/playlist/button-stop.svg';
    firstSong.pause();
    thirdSong.pause();
    document.getElementById('first-song-img').src = 'assets/images/playlist/button-play.svg';
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
    thirdSong.play();
    document.getElementById('third-song-img').src = 'assets/images/playlist/button-stop.svg';
    secondSong.pause();
    firstSong.pause();
    document.getElementById('second-song-img').src = 'assets/images/playlist/button-play.svg';
    document.getElementById('first-song-img').src = 'assets/images/playlist/button-play.svg';

  } else {
    thirdSong.pause();
    document.getElementById('third-song-img').src = 'assets/images/playlist/button-play.svg';
  }
};











// Включение музыки по клику на play

// jQuery(function($){
//     $('#first-song').on('click', function(){
//     $('.music')[0].play()
//     });
//     $('.music').hide();
//     });

// jQuery(function($){
//     $('#second-song').on('click', function(){
//     $('.music')[1].play()
//     });
    // $('.music').hide();
    // });

// jQuery(function($){
//     $('#third-song').on('click', function(){
//     $('.music')[2].play()
//     });
//     $('.music').hide();
//     });

// Переключение плей-стоп в плеере

// $('#first-song').click(function(){
//    $('#first-song-img').attr('src', 'assets/images/playlist/button-stop.svg');
// });

// $('#second-song').click(function(){
//     $('#second-song-img').attr('src', 'assets/images/playlist/button-stop.svg');
//  });

//  $('#third-song').click(function(){
//     $('#third-song-img').attr('src', 'assets/images/playlist/button-stop.svg');
//  });


//  Выключение воспроизведения



// Удаление класса active у первого элемента при наведении мыши на другие элементы

let element = document.getElementById('active-item');
let secondElement = document.getElementById('second-item');
let thirdElement = document.getElementById('third-item');

function changeItem() {
    element.classList.remove("practice__features-item-active");
}
// function changeSecondItem() {
//     secondElement.classList.add("practice__features-item-active");
// }

// function changeThirdItem() {
//     thirdElement.classList.add("practice__features-item-active");
// }

// Возвращение класса active первому элементу при отводе мыши
function rechangeItem() {
    element.classList.add("practice__features-item-active");
    // secondElement.classList.remove("practice__features-item-active");
    // thirdElement.classList.remove("practice__features-item-active");
}