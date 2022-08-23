import { Component, OnInit } from '@angular/core';
import { generate } from 'rxjs';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
title = 'color-palettes';
ctx:any;
colorCode:String;
//allCharacter :any = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
randomColor:any=[];
colorValues:any=[];
fontColorValues:any=[];

constructor(){}
ngOnInit()
{
  for(var i=0;i<4;i++)
  {
    this.fontColorValues[i]='#000000';
  }

}

/*generateRandomColor()
{
var letters = '0123456789ABCDEF';
var color = '#';
for (var i = 0; i < 6; i++) {
  color += letters[Math.floor(Math.random() * 16)];
}
return color;
}

generatePalette()
{
for(var i=0;i<4;i++)
{
    this.randomColor[i]=this.generateRandomColor();
    var paletteColorDiv = document.getElementById('color'+i);
    paletteColorDiv.style.backgroundColor = this.randomColor[i];
}
}*/

setRow1(event:any)
{
console.log(event.target.id);
if(event.target.id == 'row1Color')
{
  var paletteColorDiv = document.getElementById('color0');
}
else if(event.target.id == 'row2Color')
{
  var paletteColorDiv = document.getElementById('color1');
}
else if(event.target.id == 'row3Color')
{
  var paletteColorDiv = document.getElementById('color2');
}
else if(event.target.id == 'row4Color')
{
  var paletteColorDiv = document.getElementById('color3');
}
// var paletteColorDiv = document.getElementById('color0');
// var color1 = document.getElementById('row1Color');
paletteColorDiv.style.backgroundColor = event.target.value;


}

setFontColor1(event:any)
{

  console.log(event.target.id);
  if(event.target.id == 'row1TextColor')
  {
    this.fontColorValues[0]=event.target.value;
  }
  else if(event.target.id == 'row2TextColor')
  {
    this.fontColorValues[1]=event.target.value;
  }
  else if(event.target.id == 'row3TextColor')
  {
    this.fontColorValues[2]=event.target.value;
  }
  else if(event.target.id == 'row4TextColor')
  {
    this.fontColorValues[3]=event.target.value;
  }

}

generateImage()
{

var element = document.getElementById('paletteImage');
  element?.remove();
  for(var i=0;i<4;i++)
  {
    this.colorValues[i] = (<HTMLInputElement>document.getElementById('row'+(i+1)+'Color')).value;

  }

var canvas = <HTMLCanvasElement>document.getElementById('myCanvas1');
canvas.width = 1200;
canvas.height = 675;
this.ctx = canvas.getContext('2d');

this.ctx.clearRect(0, 0, canvas.width, canvas.height);
//this.ctx.fillStyle = '#F5CEBE';
var grd = this.ctx.createLinearGradient(0,0,1200,675);
grd.addColorStop(1,"#B0F3F1");
grd.addColorStop(0,"#FFCFDF");

//this.ctx.style.backgroundColor = grd;
this.ctx.fillStyle = grd;
this.ctx.fillRect(0,0,canvas.width, canvas.height);
this.fillColor(160,120,700,250);
this.fillHexCode(700,160);
this.ctx.font = "30px FontAwesome";
this.ctx.fillStyle = '#00acee';
this.ctx.fillText('\uF081',20,640);
this.ctx.fill();
this.ctx.font = "30px Helvetica";
this.ctx.fillStyle = '#000000';
this.ctx.fillText('@shubhamlashkan',60,640);
this.ctx.fill();
this.ctx.font = "30px FontAwesome";
this.ctx.fillStyle = '#8a3ab9';
this.ctx.fillText('\uF16D',880,50);
this.ctx.fill();
this.ctx.font = "30px Helvetica";
this.ctx.fillStyle = '#000000';
this.ctx.fillText('@shubhamlashkan',920,50);
this.ctx.fill();
var img = new Image();
img.src = canvas.toDataURL();
img.id = 'paletteImage';
img.style.maxWidth = "75%";
img.style.display = 'block';
img.style.marginLeft = 'auto';
img.style.marginRight ='auto';
img.className = 'img-responsive';
img.onclick = function()
{
return downloadQuote(canvas);
}
var imgDiv = document.getElementById('imageDiv');
imgDiv?.appendChild(img);
}

fillColor(xStart:any,yStart:any,xSize:any,ySize:any)
{
for(var i=0;i<4;i++)
{
  this.ctx.beginPath();
this.ctx.rect(xStart,yStart, xSize, ySize);
this.ctx.fillStyle = this.colorValues[i];
this.ctx.fill();
xStart+=60;
yStart+=60;
}


}

fillHexCode(xStart:any,yStart:any)
{
  for(var i=0;i<4;i++)
{
  this.ctx.beginPath();
  this.ctx.font = "30px Times New Roman";
  this.colorCode = this.fontColorValues[i].toUpperCase();
  //console.log(this.colorCode);
  //console.log(invertColor(this.colorCode));
 this.ctx.fillStyle = this.colorCode;
  this.ctx.fillText(this.colorValues[i].toUpperCase(),xStart,yStart);
this.ctx.fill();
xStart+=60;
yStart+=60;
}

}






}




function downloadQuote(canvas:any): any {
var link = document.createElement('a');
link.download = 'Palette.png';
link.href = canvas.toDataURL()
link.click();
}




