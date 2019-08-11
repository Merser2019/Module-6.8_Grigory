// 'use strict'

var ProgressValue = 0,
	FirstButtonValue = 1,
	SecondButtonValue = 3,
	ThirdButtonValue = 7;
var ProgressBarWidth = 0;

console.log ('Значение ProgressBarWidth: ' + ProgressBarWidth);


$("#FirstButton").click(function(){
	ProgressValue = ProgressValue + FirstButtonValue;
	console.log ('Нажата первая кнопка, значение пргресс-бара: ' + ProgressValue + '%');
	if (ProgressValue >= 100) {
		ProgressValue = 100;
		reboot ();
	};
	drawingBar ();
});

$('#SecondButton').click(function(){
	ProgressValue = ProgressValue + SecondButtonValue;
	console.log ('Нажата вторая кнопка, значение пргресс-бара: ' + ProgressValue + '%');
	if (ProgressValue >= 100) {
		ProgressValue = 100;
		reboot ();
	};
	drawingBar ();
});

$('#ThirdButton').click(function(){
	ProgressValue = ProgressValue + ThirdButtonValue;
	console.log ('Нажата третья кнопка, значение пргресс-бара: ' + ProgressValue + '%');
	if (ProgressValue >= 100) {
		ProgressValue = 100;
		reboot ();
	};

	drawingBar ();
});

function drawingBar () {
	ProgressBarWidth = ProgressValue;
	$('#ProgressBar').width(ProgressBarWidth + '%');
	$('ProgressBar').html(`${ProgressBarWidth}%`);
	console.log ('Значение ProgressBarWidth: ' + ProgressBarWidth);

};

function reboot () {
	ProgressValue = 0;
	console.log ('Значение пргресс-бара сброшено и равно ' + ProgressValue + '%');
	document.write('Прогресс-бар заполнен!');
};


console.log ('Скрипт подгрузился');





























// function drawingBar () {
//     ProgressBarWidth = ProgressValue;
//     $('#ProgressBar').width(ProgressBarWidth + '%');
//   };

// // Фото

// function drawingBar () {
//     ProgressBarWidth = ProgressValue;
//     $('#ProgressBar').width(ProgressBarWidth + '%');
//   	console.log ('Значение ProgressBarWidth: ' + ProgressBarWidth);
//   	$('ProgressBar').html(`${ProgressBarWidth}%`);
//   };

// function reboot () {
// 	ProgressValue = 0;
// 	console.log('Значение прогресс-бара сброшено и равно' + ProgressValue + '%');
// 	alert('Прогресс-бар заполнен!');
// };


















// ______________________________

// function dummy(arg) {
//   console.log(arg);
// }

// $("input[type=checkbox]").change(dummy);

// console.log("скрипт подгрузился");

// function trackChecks() {
//   let checkCount = $("input[type=checkbox]:checked").length; 
//   console.log(`Выбрано флажков: ${checkCount}`); 
// }

// function init() { 

//   $("input[type=checkbox]").change(trackChecks); 

//   console.log("скрипт подгрузился");
// }

// $(document).ready(init);

// // const maxAllowedChecks = 2; 

// // function trackChecks() {
// //   let checkCount = $("input[type=checkbox]:checked").length;
// //   if (checkCount >= maxAllowedChecks) { 
// //     console.log("это много");
// //   } else {
// //     console.log("это нормально");
// //   }
// // }

// const maxAllowedChecks = 2; 

// function trackChecks() {
//   let checkCount = $("input[type=checkbox]:checked").length;
//   if (checkCount >= maxAllowedChecks) { 
//     $("input[type=checkbox]:not(:checked)").prop("disabled", true)
//   } else {
//     $("input[type=checkbox]:not(:checked)").prop("disabled", false);
//   }
// }

// // Второй вариант, короче но сложнее

// // const maxAllowedChecks = 2;

// // function trackChecks() {
// //   let checkCount = $("input[type=checkbox]:checked").length;
// //   $("input[type=checkbox]:not(:checked)").prop("disabled", checkCount >= maxAllowedChecks);
// // }
// ______________________________

// Что-то не получилось

// function trackRadios() {
//   $("input[type=radio]").prop("disabled", true);
// }

// function init() {
//   $("input[type=checkbox]").change(trackChecks);
//   $("input[type=radio]").change(trackRadios);

//   trackChecks(); 
//   trackRadios();  
//   console.log("скрипт подгрузился");
// }

// // Прогресс-бар
// $("#my-progress-bar").width("41%")