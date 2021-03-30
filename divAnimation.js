//
// function onMove(valX, valY) {
//
//     let innerDiv = document.getElementById('innerdiv');
//     let mainDiv = document.getElementById('main-div');
//
//     let x = 0;
//     let y = 0;
//
//     let fixedHeight = 500 - 100; //x
//     let fixedWidth = 800 - 100;  //y
//
//     setInterval(() => {
//
//         x += valX;
//         innerDiv.style.top = x + "px";
//         y += valY;
//         innerDiv.style.left = y + "px";
//
//
//         if (x > fixedHeight || x < 0) {
//             valX = valX * -1;
//         }
//         if (y > fixedWidth || y < 0) {
//             valY = valY * -1;
//         }
//
//     }, 5);
//     onMove2(1,1);
//
// }
//
//
// function onMove2(valX, valY) {
//     let innerDiv2 = document.getElementById('innerdiv2');
//
//     // let mainDiv = document.getElementById('main-div');
//     let x = 0;
//     let y = 0;
//
//     let fixedHeight = 500 - 100; //x
//     let fixedWidth = 800 - 100;  //y
//
//     setInterval(() => {
//
//         x += valX;
//         innerDiv2.style.top = x + "px";
//
//         y += valY;
//         innerDiv2.style.left = y + "px";
//
//
//         if (x > fixedHeight || x < 0) {
//             valX = valX * -1;
//         }
//         if (y > fixedWidth || y < 0) {
//             valY = valY * -1;
//
//
//         }
//
//     }, 2);
//
// }
//
//

var container = document.getElementById('outer');
var height =container.clientHeight;
var width = container.clientWidth;
var maxheight =height - 50;
var maxwidth = width - 50;
var Box=new Array();
var Xposition=new Array();
var Yposition=new Array();
let outer=document.getElementById('outer');
var current_rotation = 0;

function boxgenerator(){
for (let i=1; i<=5; i++) {

    var top = Math.floor(Math.random() * maxheight) - 1;
    var left = Math.floor(Math.random() * maxwidth) - 1;

    var boxes = document.createElement("img");
    boxes.setAttribute('id','sample');
    outer.appendChild(boxes);
    boxes.style.width = '50px';
    boxes.src="unnamed.png";
    document.getElementById("sample").style.transform = 'rotate(' + current_rotation + 'deg)';
    boxes.style.height = '50px';
    boxes.style.position = 'absolute';
    boxes.style.backgroundColor = "gray";
    boxes.setAttribute('id','outer'+i);
    Box.push(boxes);
    update(top, left, 1, 1, boxes, i);

    //counting score
    var count=0;

    boxes.addEventListener('click', function (){
            count++;
            let score=document.getElementById('score');
            let score2=document.getElementById('score2');
            let start=document.getElementById('btnStart');
            let gif=document.getElementById('gif');

        score.innerHTML = "Your Score is: " + count;

            if(count === 5) {
                //adding gif
                gif.style.display="block";
                gif.style.width=container.clientWidth;
                gif.style.height=container.clientHeight;

                //over
                score.innerHTML = "Game is Over!";
                score.style.color="red";
                score.style.position="absolute";
                score.style.top="10%";
                score.style.left="30%";
                score.style.fontSize="50px";
                //highScore
                score2.innerHTML="Your High Score is: " + count;
                score2.style.color="green";
                score2.style.position="absolute";
                score2.style.top="30%";
                score2.style.left="30%";
                score2.style.fontSize="50px";
                //start game again
                start.style.backgroundColor="black";
                start.style.display="block";
                start.style.color="white";
                start.style.position="absolute";
                start.style.top="70%";
                start.style.left="45%";
                start.style.fontSize="25px";

                start.addEventListener("click", function (){
                    window.location.reload();
                })
            }
        }
    );
}
}

boxgenerator();

function update(top,left,valuex,valuey,boxes,index){


setInterval(() => {
    top += valuex;
    boxes.style.top = top +"px";
    left += valuey;
    boxes.style.left =left +"px";


    if (top > maxheight || top < 0) {
        valuex =valuex * -1;
        boxes.style.backgroundColor ="black";
        boxes.style.transform = 'rotate(' + current_rotation+90 +'deg)';
    }
	if (left >maxwidth || left < 0) {
        valuey =valuey * -1;
        boxes.style.backgroundColor ="black";
        boxes.style.transform = 'rotate(' + current_rotation+180 +'deg)';


    }

    // collision(top, left,valuex, valuey, boxes,index);
    Xposition[index] = top;
    Yposition[index] = left;
    for (let i= 0; i<5; i++){
        if (!(i === index)) {
            // console.log(Box);
            if ((Xposition[i] < top + 50) && (Xposition[i] + 50 > top) && (Yposition[i] < left + 50) && (Yposition[i] + 50 > left)) {
                valuex=valuex* -1;
                valuey = valuey * -1;
                // boxes.src="2.png";
            }
        }
    }

}, 10);

//killing ants
    boxes.addEventListener('click', function (){
            boxes.style.display="none";
        }
    );

}

//rajendrachataut@kec.edu.np
//9866431380
