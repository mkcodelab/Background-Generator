const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

function aspect(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
aspect();
// window.addEventListener('resize', aspect);

const bgBtn = document.getElementById('bgColor');
const bgColorMenu = document.getElementById('bgColorMenu');
bgBtn.addEventListener('click', function(){
    bgColorMenu.classList.toggle('menu-off');
});

// const bgInput = document.getElementById('bgColorInput');
const bgColorRedSlider = document.getElementById('bgRed');
const bgColorGreenSlider = document.getElementById('bgGreen');
const bgColorBlueSlider = document.getElementById('bgBlue');

const createBgBtn = document.getElementById('createBgColor');
createBgBtn.addEventListener('click', function(){
   
    let r = bgColorRedSlider.value;
    let g = bgColorGreenSlider.value;
    let b = bgColorBlueSlider.value;
    let color = `rgb(${r}, ${g}, ${b})`;
    bgColor(color);
});

function bgColor(color){
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
// shapes menu
const shapesBtn = document.getElementById('shapes');
const shapesMenu = document.getElementById('shapesMenu');
shapesBtn.addEventListener('click', function(){
    shapesMenu.classList.toggle('menu-off');
});
// circles
const circlesBtn = document.querySelector('.circles')
const circlesMenu = document.querySelector('.circles-menu');
circlesBtn.addEventListener('click', function(){
    circlesMenu.classList.toggle('menu-off');
});

const circlesQuantityInput = document.getElementById('circlesQuantity');
const circlesSizeInput = document.getElementById('circlesSize');
const circlesColorRedSlider = document.getElementById('circlesRed');
const circlesColorGreenSlider = document.getElementById('circlesGreen');
const circlesColorBlueSlider = document.getElementById('circlesBlue');
const circlesColorAlphaSlider = document.getElementById('circlesAlpha');
const circlesFluctInput = document.getElementById('circlesFluct');
const createCircleShapesBtn = document.getElementById('createCircleShapes');


createCircleShapesBtn.addEventListener('click', function(){
    let quantity = circlesQuantityInput.value;
    let size = circlesSizeInput.value;
    let r = circlesColorRedSlider.value;
    let g = circlesColorGreenSlider.value;
    let b = circlesColorBlueSlider.value;
    let a = circlesColorAlphaSlider.value;
    let color = `rgba(${r}, ${g}, ${b}, ${a})`;
    
    let fluct = circlesFluctInput.value;
    createCircleShapes(quantity, size, color, fluct);
    circlesMenu.classList.toggle('menu-off');
    console.log(fluct);
});
// wtf ? ? ? math.random()*10 zwraca mi 100 lol ?  ?
// problem w konwersji number na string, ale nie wiem kiedy i gdzie
// zalatwione parseInt() :D
function createCircleShapes(quantity, size, color, fluct){
   
   for (let i = 0; i < quantity; i++){
   
    // let sizeFluct = parseInt(fluct, 10);
    let calcSize = parseInt(size, 10) + Math.random() * fluct;
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
       ctx.fillStyle = color;
       ctx.beginPath();
       ctx.arc(x, y, calcSize, 0, Math.PI * 2);
       ctx.fill();
       ctx.closePath();
    //    console.log('size fluctuation: '+sizeFluct);
       console.log('calculated size: '+calcSize);
   }

   
   console.log('circles has been created')
}
// squares

const squaresBtn = document.querySelector('.squares')
const squaresMenu = document.querySelector('.squares-menu');
squaresBtn.addEventListener('click', function(){
    squaresMenu.classList.toggle('menu-off');
});

const squaresQuantityInput = document.getElementById('squaresQuantity');
const squaresSizeInput = document.getElementById('squaresSize');
const squaresAngleInput = document.getElementById('squaresAngle');
const squaresColorRedSlider = document.getElementById('squaresRed');
const squaresColorGreenSlider = document.getElementById('squaresGreen');
const squaresColorBlueSlider = document.getElementById('squaresBlue');
const squaresColorAlphaSlider = document.getElementById('squaresAlpha');
const squaresFluctInput = document.getElementById('squaresFluct');
const createSquareShapesBtn = document.getElementById('createSquareShapes');

createSquareShapesBtn.addEventListener('click', function(){
    let quantity = squaresQuantityInput.value;
    let size = squaresSizeInput.value;
    let r = squaresColorRedSlider.value;
    let g = squaresColorGreenSlider.value;
    let b = squaresColorBlueSlider.value;
    let a = squaresColorAlphaSlider.value;
    let color = `rgba(${r}, ${g}, ${b}, ${a})`;
    let angle = squaresAngleInput.value;
    let fluct = squaresFluctInput.value;
    createSquareShapes(quantity, size, color, fluct, angle);
    squaresMenu.classList.toggle('menu-off');

});

function createSquareShapes(quantity, size, color, fluct, angle){
    for (let i = 0; i < quantity; i++){
        let calcSize = parseInt(size, 10) + Math.random() * fluct;
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        drawRotatedRectangle(x, y, calcSize, calcSize, angle, color);
    };
};
// rotated rectangle at its centerpoint
function drawRotatedRectangle(x, y, w, h, angle, color){
    ctx.save();
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.translate(x+w/2, y+h/2);
    ctx.rotate(angle * Math.PI/180);
    ctx.fillRect(-w/2, -h/2, w, h);
    ctx.restore();

}

// lines menu
const linesBtn = document.getElementById('lines');
const linesMenu = document.getElementById('linesMenu');
linesBtn.addEventListener('click', function(){
    linesMenu.classList.toggle('menu-off');
});
const straightLinesBtn = document.querySelector('.straight-lines');
const straightMenu = document.querySelector('.straight-menu');
straightLinesBtn.addEventListener('click', function(){
    straightMenu.classList.toggle('menu-off');
});

const straightlinesQuantityInput = document.getElementById('straightlinesQuantity');
const straightlinesThicknessInput = document.getElementById('straightlinesThickness');
const straightlinesColorRedSlider = document.getElementById('straightlinesRed');
const straightlinesColorGreenSlider = document.getElementById('straightlinesGreen');
const straightlinesColorBlueSlider = document.getElementById('straightlinesBlue');
const straightlinesColorAlphaSlider = document.getElementById('straightlinesAlpha');

const createStraightlineBtn = document.getElementById('createStraightLines');

createStraightlineBtn.addEventListener('click', function(){
    let quantity = parseInt(straightlinesQuantityInput.value, 10);
    let thickness = parseFloat(straightlinesThicknessInput.value, 10);
    let r = straightlinesColorRedSlider.value;
    let g = straightlinesColorGreenSlider.value;
    let b = straightlinesColorBlueSlider.value;
    let a = straightlinesColorAlphaSlider.value;
    let color = `rgba(${r}, ${g}, ${b}, ${a})`;

    createStraightlines(quantity, thickness, color);
    straightMenu.classList.toggle('menu-off');
});

function createStraightlines(quantity, thickness, color){
    for (let i = 0; i < quantity; i++){
        let x = Math.random()* canvas.width;
        let y = Math.random()* canvas.height;
        let x2 = Math.random()* canvas.width;
        let y2 = Math.random()* canvas.height;

        ctx.strokeStyle = color;
        ctx.lineWidth = thickness;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.closePath();
    }
}
// close button
const closeBtns = document.querySelectorAll('.btn-close');
closeBtns.forEach(function(e){
    e.addEventListener('click', closeParent);
});

function closeParent(){
    this.parentElement.classList.toggle('menu-off');
    console.log('parent closed')
};

// download canvas
const downloadBtn = document.getElementById('downloadBtn');
downloadBtn.addEventListener('click', downloadCanvas);

function downloadCanvas(e){
    const dataURL = canvas.toDataURL();
    e.target.href = dataURL;
};

// POMYSLY I KOMENTARZE:
// dodaj opcje tworzenia gradientu w tle
// dodaj input z fluktuacją kształtów, rozmiarów itp
// dodaj opcje globalcompositeoperation bedzie fajne
// ctx.globalCompositeOperation = type;
// dodaj jakies pędzle, zdarzenia myszy itp