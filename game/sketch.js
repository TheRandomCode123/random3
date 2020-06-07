let tigris;
let proceed = 1;
var color1 = 1;
var proceeding = 0;
var choosing = 0;
let taka;
let hero;
var color2 = 1;
var color3 = 1;
var color5 = 1;
var game = 0;
var game1 = 0;
var game2 = 0;
var choose1 = 0;
var choose2 = 0;
var choose3 = 0;
var mover = 0;
var mover1 = 0;
var move = 0;
var move1 = 0;
var move2 = 0;
var move3 = 0;
var stationary = 0;
let knight, knight1, knight2, knight3, knight5, knight6;
var x = 100;
var y = 500;
let tree, rock;
let trees = [];
let base, tower, base1, tower1;
var w = 75; // character width
var h = 75; // character height
let arrow, arrow1;
var arrowx = 2800;
var arrowy = 300;
var dmg = 0;
var arrowx1 = 3750;
var arrowy1 = 200;
var arrowx2 = 3750;
var arrowy2 = 500;
let troop, troop1, troop2, troop3, troop5;
let troops = [];
let base2, base3;
let attack1, attack2, attack3;
var attack = 0;
var attacking = 0;
let skill1, skill2, skill3, skill5, skill6, skill7;
var firstskill = 0;
var skill = 0;
var bootspeed = 5;
let market, market1, market2;
let helmet, armor, sword, axe, boots1, boots2, boots3, potion1, potion2, shield, weapon;
var color6 = 0;
var color7 = 0;
var color8 = 0;
var color9 = 0;
var shopping1 = 0;
var shopping2 = 0;
var shopping3 = 0;
var shopping5 = 0;
var level = 1;
var gold = 0;
var n = 0, n1 = 0, n2 = 0, n3 = 0, n4 = 0, n5 = 0, n6 = 0,
    n7 = 0, n8 = 0, n9 = 0, n10 = 0, n11 = 0;
var m1 = 0, m2 = 0, m3 = 0, m4 = 0, m5 = 0, m6 = 0, m7 = 0, 
    m8 = 0, m9 = 0, m10 = 0, m11 = 0;
var purchased1 = 0;
var purchased2 = 0;
var purchased3 = 0;
var purchased4 = 0;
var purchased5 = 0;
var purchased6 = 0;
var purchased7 = 0;
var purchased8 = 0;
var purchased9 = 0;
var purchased10 = 0;
var purchased11 = 0;
let knightult, knightult1, knightult2, knightult3;
var ult = 0, ult1 = 0;
var p1 = 0, p2 = 0, p3 = 0, p4 = 0, p5 = 0, p6 = 0, p7 = 0,
    p8 = 0, p9 = 0, p10 = 0, p11 = 0;
let taka1, taka2, taka3, taka5, taka6;
var takamove = 0, takamove1 = 0, takamove2 = 0, takamove3 = 0;
var takastationary = 0;
var takamover = 0, takamover1 = 0, takamover2 = 0, 
    takamover3 = 0;
let takaskill1, takaskill2, takaskill3;
var takaattack = 0;
var takaatk = 0;
let takaskill5, takaskill6, takaskill7, takaskill8;
var takaini = 0;
var takaini1 = 0;
let takaskill9, takaskill10, takaskill11;
var takault = 0, takault1 = 0;
let disguise, disguise1;
var hide = 0, hide1 = 0;
let blade1, blade2, blade3, blade5, blade6;
var blademove = 0, blademove1 = 0, blademove2 = 0, 
    blademove3 = 0;
var blademoving = 0, blademoving1 = 0, blademoving2 = 0,       blademoving3 = 0;
var bladestationary = 0;
let bladeatk, bladeatk1;
var bladeatk2 = 0, bladeatk3 = 0;
var bladeskill = 0, bladeskill1 = 0, bladeskill2 = 0, bladeskill3 = 0, bladeskill5 = 0, bladeskill6 = 0;
let bladejump, bladejump1;
let bladerush;
let bladeult, bladeult1, bladeult2, bladeult3;
let displayer, displayer1, displayer2, display1, display2, display3, display4, display5, display6, display7, display8, display9;
var exp1 = 0;
var attackingdamage = 0, attackdamage = 0;
var firstskill = 0;
var secondskill = 0;
var thirdskill = 0;
var duration = 20;
var duration1 = 1;
var mn = 150;
var skillheal = 0;
var healtext = 0, healtext1 = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  tigris = loadImage("Picture1.png");
  taka = loadImage("taka.png");
  hero = loadImage("hero.png");
  knight = loadImage("knight1.png");
  knight1 = loadImage("knight2.png");
  knight2 = loadImage("knight3.png");
  knight3 = loadImage("knight5.png");
  knight5 = loadImage("knight6.png");
  knight6 = loadImage("knight7.png");
  tree = loadImage("tree.png");
  rock = loadImage("rock.png");
  base = loadImage("base.png");
  tower = loadImage("tower.png");
  base1 = loadImage("base1.png");
  tower1 = loadImage("tower1.png");
  arrow = loadImage("arrow.png");
  arrow1 = loadImage("arrow1.png");
  troop = loadImage("troop.png");
   troop1 = loadImage("troop1.png");
   troop2 = loadImage("troop2.png");
   troop3 = loadImage("troop3.png");
   troop5 = loadImage("troop5.png");
  base2 = loadImage("base2.png");
  base3 = loadImage("base3.png");
  attack1 = loadImage("attack1.png");
  attack2 = loadImage("attack2.png");
  attack3 = loadImage("attack3.png");
  skill1 = loadImage("skill1.png");
  skill2 = loadImage("skill2.png");
  skill3 = loadImage("skill3.png");
   skill5 = loadImage("skill5.png");
   skill6 = loadImage("skill6.png");
   skill7 = loadImage("skill7.png");
  market = loadImage("market.png");
   market1 = loadImage("market.png");
   market2 = loadImage("market.png");
  helmet = loadImage("helmet.png");
  armor = loadImage("armor.png");
  sword = loadImage("sword.png");
  axe = loadImage("axe.png");
  boots1 = loadImage("boots1.png");
  boots2 = loadImage("boots2.png");
  boots3 = loadImage("boots3.png");
  potion1 = loadImage("potion1.png");
  potion2 = loadImage("potion2.png");
  shield = loadImage("shield.png");
  weapon = loadImage("weapon.png");
  
   copyhelmet = loadImage("helmet.png");
  copyarmor = loadImage("armor.png");
  copysword = loadImage("sword.png");
  copyaxe = loadImage("axe.png");
  copyboots1 = loadImage("boots1.png");
  copyboots2 = loadImage("boots2.png");
  copyboots3 = loadImage("boots3.png");
  copypotion1 = loadImage("potion1.png");
  copypotion2 = loadImage("potion2.png");
  copyshield = loadImage("shield.png");
  copyweapon = loadImage("weapon.png");
  
  knightult = loadImage("knightult.png");
    knightult1 = loadImage("knightult1.png");
    knightult2 = loadImage("knightult2.png");
    knightult3 = loadImage("knightult3.png");
  taka1 = loadImage("taka1.png");
  taka2 = loadImage("taka2.png");
  taka3 = loadImage("taka3.png");
  taka5 = loadImage("taka5.png");
   taka6 = loadImage("taka6.png");
  takaskill1 = loadImage("takaskill.png");
    takaskill2 = loadImage("takaskill1.png");
    takaskill3 = loadImage("takaskill2.png");
   takaskill5 = loadImage("takaskill3.png");
   takaskill6 = loadImage("takaskill4.png");
   takaskill7 = loadImage("takaskill5.png");
   takaskill8 = loadImage("takaskill6.png");
     takaskill9 = loadImage("takaskill7.png");
     takaskill10 = loadImage("takaskill8.png");
     takaskill11 = loadImage("takaskill9.png");
  disguise = loadImage("disguise.png");
  disguise1 = loadImage("disguise1.png");
  
  blade1 = loadImage("blade1.png");
   blade2 = loadImage("blade2.png");
   blade3 = loadImage("blade3.png");
   blade5 = loadImage("blade5.png");
   blade6 = loadImage("blade6.png");
  bladeatk = loadImage("bladeatk.png");
   bladeatk1 = loadImage("bladeatk1.png");
  bladejump = loadImage("bladejump.png");
  bladejump1 = loadImage("bladejump1.png");
  bladerush = loadImage("bladerush.png");
  bladeult = loadImage("bladeult.png");
   bladeult1 = loadImage("bladeult1.png");
   bladeult2 = loadImage("bladeult2.png");
   bladeult3 = loadImage("bladeult3.png");
  
  displayer = loadImage("display.png");
   displayer1 = loadImage("display.png");
   displayer2 = loadImage("display.png");
   display1 = loadImage("display1.png");
   display2 = loadImage("display2.png");
   display3 = loadImage("display3.png"); 
  display4 = loadImage("display4.png");
   display5 = loadImage("display5.png");
   display6 = loadImage("display6.png");
   display7 = loadImage("display7.png");
   display8 = loadImage("display8.png");
   display9 = loadImage("display9.png");
  for (let i = 0; i < 20; i++) {
    var a = 100;
    var b = 100;
    var c = 50;
    trees[i] = new createtrees(a, b, c);
  }
  for(let j = 0; j < 5; j++) {
    var a1 = 100;
    var b1 = 100;
    var c1 = 50;
  troops[j] = new createtroop(a1, b1, c1);
  }
  angleMode(DEGREES);
}

function mousePressed() {
  if (proceeding < 1) {
    if (mouseX > 950 && mouseX < 1350 && mouseY > 620 && mouseY < 740 && mouseIsPressed) {
      proceed = proceed + 1;
    }
  }
}
function keyPressed() {
   if(key == 'o' && level >= 2 && mn >= 20) {
    firstskill = 1;
    takaini = 1;
     bladeskill = 1;
     firstskill = 1;
     mn = mn - 20
  } 
  if(key == 'l') {
    attack = 1;
    takaattack = 1;
    bladeatk2 = 1;
      attackingdamage = 1;
  } else {
    attackingdamage = 0;
  }
  if(key == 'i' && level >= 8 && mn >= 50) {
    ult = 1;
    takault = 1;
    bladeskill5 = 1;
    mn = mn - 50;
  } 
  if(key == 'k' && level >= 5 && mn >= 30) {
    hide = 1;
    bladeskill2 = 1;
     skillheal = 1;
    mn = mn - 30;
  }
}

function draw() {
  background(1);
  if (proceeding < 1) {
    strokeWeight(5);
    fill(200, color1);
    rect(950, 620, 400, 120);
    textSize(80);
    fill(255);
    text("Proceed", 1000, 700);
    if (mouseX > 950 && mouseX < 1350 && mouseY > 620 && mouseY < 740) {
      color1 = 255;
    } else {
      color1 = 1;
    }
    if (proceed == 1) {
      stroke(255);
      strokeWeight(50);
      noFill();
      rect(200, 200, 1000, 350);
      stroke(255);
      strokeWeight(5);
      noFill();
      textSize(100);
      text("Hero Legends", 405, height / 2);
    }
    if (proceed == 2) {
      text("lol", 1000, 100);
    }
    if (proceed == 3) {
      text("lol lol", 500, 100);
    }
    if (proceed == 5) {
      proceeding = 1;
    }
  }
  if (proceeding > 0) {
    background(100);
    image(tigris, 100, 100);
    tigris.resize(100, 125);
    image(taka, 500, 100);
    taka.resize(100, 125);
    image(hero, 900, 100);
    hero.resize(100, 125);
    textSize(50);
    strokeWeight(1);
    fill(255);
    text("Tigris", 100, 350);
    text("Taka", 500, 350);
    text("Blade", 900, 350);
    text("choose", 100, 500);
    text("choose", 500, 500);
    text("choose", 900, 500);
    fill(100, color2);
    rect(80, 440, 200, 100);
    fill(100, color3);
    rect(480, 440, 200, 100);
    fill(100, color5);
    rect(880, 440, 200, 100);
    textSize(20);
    fill(255);
    text("The great tank", 100, 600);
    text("with thick layers of defense", 50, 650);
    text("A worrior with", 500, 600);
    text("invisibility", 500, 650);
    text("The hero that", 900, 600);
    text("possess the blade", 900, 650);
    if (mouseX > 80 && mouseX < 280 && mouseY > 440 && mouseY < 540) {
      color2 = 255;
    } else {
      color2 = 1;
    }
    if (mouseX > 480 && mouseX < 680 && mouseY > 440 && mouseY < 540) {
      color3 = 255;
    } else {
      color3 = 1;
    }
    if (mouseX > 880 && mouseX < 1080 && mouseY > 440 && mouseY < 540) {
      color5 = 255;
    } else {
      color5 = 1;
    }


    if (mouseX > 80 && mouseX < 280 && mouseY > 440 && mouseY < 540 && mouseIsPressed) {
      game = 1;
      choose1 = 1;
    }
    if (mouseX > 480 && mouseX < 680 && mouseY > 440 && mouseY < 540 && mouseIsPressed) {
      game1 = 1;
      choose2 = 1;
    }
    if (mouseX > 880 && mouseX < 1080 && mouseY > 440 && mouseY < 540 && mouseIsPressed) {
      game2 = 1;
      choose3 = 1;
    }
    
    //commence
    
    if (game > 0 || game1 > 0 || game2 > 0) {
      background(100);
       translate(width / 2 - x, 0);
      
      
         //skill display
      
    noFill();
    stroke(1);
      strokeWeight(10);
    ellipse(x + 600, 500, 100, 100);
      ellipse(x + 600, 610, 100, 100);
      ellipse(x + 600, 720, 100, 100);
        fill(1);
      textSize(50);
      stroke(1);
      strokeWeight(1);
      text("Skills", x + 550, 400);
      let distskill1 = dist(mouseX, mouseY, width/2 + 600, 500);
     let distskill2 = dist(mouseX, mouseY, width/2 + 600, 610);
     let distskill3 = dist(mouseX, mouseY, width/2 + 600, 720);
      stroke(1);
      strokeWeight(2);
      noFill();
      
      if(distskill1 < 50) {
        rect(x + 250, 450, 250, 100);
      }
       if(distskill2 < 50) {
        rect(x + 250, 550, 250, 100);
      }
       if(distskill3 < 50) {
        rect(x + 250, 650, 250, 100);
      }
      
      if(choose1 > 0) {
      image(display1, x + 575, 475);
      display1.resize(50, 50);
       image(display2, x + 575, 585);
      display2.resize(50, 50);
       image(display3, x + 575, 700);
      display3.resize(50, 50);
      }
        if(choose2 > 0) {
      image(display4, x + 575, 475);
      display4.resize(50, 50);
       image(display5, x + 575, 585);
      display5.resize(50, 50);
       image(display6, x + 575, 700);
      display6.resize(50, 50);
      }
        if(choose3 > 0) {
      image(display7, x + 575, 475);
      display7.resize(50, 50);
       image(display8, x + 575, 585);
      display8.resize(50, 50);
       image(display9, x + 575, 700);
      display9.resize(50, 50);
      }
      
      textSize(20);
      fill(1);
        if(distskill1 < 50) {
         text("Level 2 required", x + 300, 490);
          text("Key: o", x + 300, 520);
       }
        if(distskill2 < 50) {
         text("Level 5 required", x + 300, 590);
           text("Key: k", x + 300, 620);
        }
        if(distskill3 < 50 ) {
         text("Level 8 required", x + 300, 690);
           text("Key: i", x + 300, 720);
       }
      
      //skill lock
      if(level < 2) {
      image(displayer, x + 475, 475);
      displayer.resize(50, 50);
      }
      if(level < 5) {
       image(displayer1, x + 475, 585);
      displayer1.resize(50, 50);
      }
      if(level < 8) {
       image(displayer2, x + 475, 700);
      displayer2.resize(50, 50);
      }
      
    //level
    noFill();
      strokeWeight(1);
    rect(x + 140, 35, 300, 15);
      fill(255, 100, 100);
       rect(x + 140, 35, exp1, 15);
      exp1 = exp1 + 1;
      if(exp1 >= 300) {
         exp1 = 0;
        level = level + 1;
      }
      fill(1);
    text("Level", x + 50, 50); 
      text(level, x + 110, 50);
      
      //retreat
      // noFill();
      // stroke(1);
      // strokeWeight(10);
      // ellipse(x - 600, 500, 100, 100);
      // fill(200, 200, 200);
      // noStroke();
      // text("Retreat", x - 630, 505);
      // let retreatdist = dist(mouseX, mouseY, width/2 - 600, 500);
      // if(retreatdist <= 50 && mouseIsPressed && choose1 > 0 && duration == 20) {
      //   x = 0;
      //   y = 500;
      // }
      //   if(retreatdist <= 50 && mouseIsPressed && choose2 > 0 && duration == 20) {
      //   x = 0;
      //   y = 500;
      // }
      //   if(retreatdist <= 50 && mouseIsPressed && choose3 > 0 && duration == 20) {
      //   x = 0;
      //   y = 500;
      // }
      
    // inventory
       
      fill(255, 255, 100);
      textSize(30);
        noStroke();
      text("Inventory", x - 670, 700);
      noFill();
      stroke(255);
      strokeWeight(1);
      rect(x - 500, 650, 100, 100);
      rect(x - 400, 650, 100, 100);
      rect(x - 300, 650, 100, 100);
      rect(x - 200, 650, 100, 100);
      rect(x - 100, 650, 100, 100);
      rect(x, 650, 100, 100);
      
         if(purchased1 > 0) {
          image(copysword, x - 575 + 100*n1, 675);
          copysword.resize(50, 50);
        }
          if(purchased2 > 0) {
             image(copyaxe, x - 575 + 100*n2, 675);
          copyaxe.resize(50, 50);
        }
          if(purchased3 > 0) {
             image(copyweapon, x - 575 + 100*n3, 675);
          copyweapon.resize(50, 50);
        }
          if(purchased4 > 0) {
             image(copyarmor, x - 575 + 100*n4, 675);
          copyarmor.resize(50, 50);
        }
          if(purchased5 > 0) {
             image(copyhelmet, x - 575 + 100*n5, 675);
          copyhelmet.resize(50, 50);
        }  
        if(purchased6 > 0) {
           image(copyshield, x - 575 + 100*n6, 675);
          copyshield.resize(50, 50);
        }
          if(purchased7 > 0) {
             image(copyboots1, x - 575 + 100*n7, 675);
          copyboots1.resize(50, 50);
        }
          if(purchased8 > 0) {
             image(copyboots2, x - 575 + 100*n8, 675);
          copyboots2.resize(50, 50);
        }
          if(purchased9 > 0) {
             image(copyboots3, x - 575 + 100*n9, 675);
          copyboots3.resize(50, 50);
        }
          if(purchased10 > 0) {
             image(copypotion1, x - 575 + 100*n10, 675);
          copypotion1.resize(50, 50);
        }
          if(purchased11 > 0) {
             image(copypotion2, x - 575 + 100*n11, 675);
          copypotion2.resize(50, 50);
        }
      
        //Gold
      fill(1);
    textSize(25);
        noStroke();
      text("Gold :", x - 500, 50);
      text(int(gold), x - 410, 50);
      gold = gold + 0.01;
      
      
      // ally base
      
      for(let j = 0;j < troops.length; j++) {
        troops[j].deploy();
      }
      
      text("shop", 90, 590);
      text("secret shop", 1680, 590);
      text("shop", 4080, 590);
      image(market, 10, 600);
      market.resize(200, 200);
      
          image(market1, 1600, 600);
      market1.resize(200, 200);
      
      noFill();
      rect(30, 210, 300, 10);
      fill(0, 200, 0);
        rect(30, 210, 300, 10);
      
      image(base, 100, 250);
      base.resize(150, 150);
      
        noFill();
      rect(300, 160, 200, 10);
      fill(0, 200, 0);
        rect(300, 160, 200, 10);
      
      image(tower, 350, 200);
      tower.resize(100, 150);
      
        noFill();
      rect(300, 460, 200, 10);
      fill(0, 200, 0);
        rect(300, 460, 200, 10);
      
        image(tower, 350, 500);
      tower.resize(100, 150);
      
        noFill();
      rect(1150, 260, 200, 10);
      fill(0, 200, 0);
        rect(1150, 260, 200, 10);
      
        image(tower, 1200, 300);
      tower.resize(100, 150);
      
      // enemy base
      
          image(market2, 4000, 600);
      market2.resize(200, 200);
      
        noFill();
      rect(3930, 210, 300, 10);
      fill(200, 0, 0);
        rect(3930, 210, 300, 10);
      
       image(base1, 4000, 250);
      base1.resize(150, 150);
      
        noFill();
      rect(3700, 160, 200, 10);
      fill(200, 0, 0);
        rect(3700, 160, 200, 10);
      
      image(tower1, 3750, 200);
      tower1.resize(100, 150);
      
        noFill();
      rect(3700, 460, 200, 10);
      fill(200, 0, 0);
        rect(3700, 460, 200, 10);
      
        image(tower1, 3750, 500);
      tower1.resize(100, 150);
      
        noFill();
      rect(2750, 260, 200, 10);
      fill(200, 0, 0);
        rect(2750, 260, 200, 10);
      
        image(tower1, 2800, 300);
      tower1.resize(100, 150);
    
      let d = dist(x, y + 30, 2800, 300);
      if(d < 500) {
        ellipse(arrowx, arrowy, 10, 10);
        if(x < arrowx) {
        arrowx = arrowx - 10;
        }
         else {
          arrowx = arrowx + 10;
        }
        if(y + 30 < arrowy) {
        arrowy = arrowy - 10;
        } 
        else {
          arrowy = arrowy + 10;
        }
        let ad = dist(x, y + 30, arrowx, arrowy);
          if(ad < 30) {
            arrowx = 2800;
            arrowy = 300;
            dmg = dmg + 10;
          }
      }
      
      
       let d1 = dist(x, y + 30, 3750, 200);
      if(d1 < 500) {
        ellipse(arrowx1, arrowy1, 10, 10);
        if(x < arrowx1) {
        arrowx1 = arrowx1 - 10;
        }
         else {
          arrowx1 = arrowx1 + 10;
        }
        if(y + 30 < arrowy1) {
        arrowy1 = arrowy1 - 10;
        } 
        else {
          arrowy1 = arrowy1 + 10;
        }
        let ad1 = dist(x, y + 30, arrowx1, arrowy1);
          if(ad1 < 30) {
            arrowx1 = 3750;
            arrowy1 = 200;
            dmg = dmg + 15;
          }
      }
      
      
       let d2 = dist(x, y + 30, 3750, 500);
      if(d2 < 500) {
        ellipse(arrowx2, arrowy2, 10, 10);
        if(x < arrowx2) {
        arrowx2 = arrowx2 - 10;
        }
         else {
          arrowx2 = arrowx2 + 10;
        }
        if(y + 30 < arrowy2) {
        arrowy2 = arrowy2 - 10;
        } 
        else {
          arrowy2 = arrowy2 + 10;
        }
        let ad2 = dist(x, y + 30, arrowx2, arrowy2);
          if(ad2 < 30) {
            arrowx2 = 3750;
            arrowy2 = 500;
            dmg = dmg + 15;
          }
      }
      
         // hp and mana
      stroke(1);
      strokeWeight(1);
      noFill();
      rect(x - 30, y - 20, 150, 10);
      fill(0, 200, 0);
      rect(x - 30, y - 20, 150 - dmg, 10);
      if(dmg <= 0) {
        dmg = 0;
      }
      textSize(50);
      fill(1);
      if(dmg >= 150) {
        text("Respond in", x - 700, 200);
        text(int(duration),x - 410, 200);
        duration = duration - 0.02;   
        x = 10;
        y = 500;
      }
      if(duration <= 0) {
        dmg = 0;
        duration = 20;
      }
      
       
      noFill();
      rect(x - 30, y - 10, 150, 10);
      fill(0, 0, 200);
      rect(x - 30, y - 10, mn, 10);
      mn = mn + 1;
      if(mn >= 150) {
        mn = 150;
      }
      fill(1);
      textSize(10);
      text("HP", x - 50, y - 13);
      text("Mana", x - 60, y - 3);
      
      
      
      for (let i = 0; i < trees.length; i++) {
        trees[i].plant();
      }
      //limit walking
      if (x < -100) {
        x = -100;
      }
      if(x > 4100) {
        x = 4100;
      }
      if(y > height - 50) {
        y = height - 50;
      }
      if(y < 0) {
        y = 0;
      }
      if (choose1 > 0 && duration == 20) {
        if (stationary == 0) {
          image(knight, x, y);
          knight.resize(w, h);
        }
        
        // knight's movement
           if (keyIsPressed && key == 'w') {
          y = y - bootspeed;
        move = 1;
        } else {
          move = 0;
        }

        if (keyIsPressed && key == 'd') {
          x = x + bootspeed;
          move1 = 1;
        } else {
          move1 = 0;
        }

            if (keyIsPressed && key == 'a') {
          x = x - bootspeed;
          move2 = 1;
        } else {
          move2 = 0;
        }
        
        if (keyIsPressed && key == 's') {
          y = y + bootspeed;
          move3 = 1;
        } else {
          move3 = 0;
        }

        if(move == 1 || move1 == 1 || move3 == 1) {
          mover = mover + 1;
        }  else {
          mover = 0;
        }
        
            if (mover > 1 && mover <= 10) {
          image(knight1, x, y);
          knight1.resize(w, h);
        }
        if (mover >= 10 && mover <= 20) {
          image(knight, x, y);
          knight.resize(w, h);
        }
        if (mover >= 20 && mover <= 30) {
          image(knight2, x, y);
          knight2.resize(w, h);
        }
        if (mover >= 30) {
          mover= 1;
        }
        
        
        if(move2 == 1) {
          mover1 = mover1 + 1;
        } else {
          mover1 = 0;
        }
        
        if (mover1 > 1 && mover1 <= 10) {
          image(knight3, x, y);
          knight3.resize(w, h);
        }
        if (mover1 >= 10 && mover1 <= 20) {
          image(knight6, x, y);
          knight6.resize(w, h);
        }
        if (mover1 >= 20 && mover1 <= 30) {
          image(knight5, x, y);
          knight5.resize(w, h);
        }
        if (mover1 >= 30) {
          mover1 = 1;
        }
      if(move == 1 || move1 == 1 || move2 == 1 || move3 == 1) {
        stationary = 1;
      } else {
        stationary = 0;
      }
      //attack
      if(attack > 0) {
        attacking = attacking + 1;
        stationary = 1;
      }
      if(attacking > 0 && attacking <= 3) {
        image(attack1, x + 1, y);
        attack1.resize(w, h);
      }
      if(attacking >= 3 && attacking <= 6) {
        image(attack2, x + 1, y);
        attack2.resize(w, h);
      }
       if(attacking >= 6 && attacking <= 9) {
        image(attack3, x + 1, y);
        attack3.resize(w, h);
      }
      if(attacking >= 9) {
        attacking = 0;
        attack = 0;
      }
      //skill
      
      if(firstskill > 0) {
        skill = skill + 1;
        stationary = 1;
        bootspeed = 0;
      }
  if(skill > 0 && skill <= 3) {
    image(skill1, x - 20, y - 10);
    skill1.resize(w + 39, h + 39);
  }
       if(skill >= 3 && skill <= 6) {
    image(skill2, x - 10, y);
    skill2.resize(w + 39, h + 39);
  }
       if(skill >= 6 && skill <= 9) {
    image(skill3, x - 20, y - 10);
    skill3.resize(w + 39, h + 39);
  }
         if(skill >= 9 && skill <= 12) {
    image(skill5, x + 30, y - 10);
    skill5.resize(w + 39, h + 39);
            image(skill3, x - 20, y - 10);
    skill3.resize(w + 39, h + 39);
  }
         if(skill >= 12 && skill <= 15) {
    image(skill6, x + 60 , y - 10);
    skill6.resize(w + 39, h + 39);
            image(skill3, x - 20, y - 10);
    skill3.resize(w + 39, h + 39);
  }
         if(skill >= 15 && skill <= 18) {
    image(skill7, x + 100, y - 10);
    skill7.resize(w + 39, h + 39);
            image(skill3, x - 20, y - 10);
    skill3.resize(w + 39, h + 39);
  }
      if(skill >= 18) {
        skill = 0;
        firstskill = 0;
        stationary = 0;
        bootspeed = 5;
      }
        
        
        if(skillheal > 0) {
          dmg = dmg - 10;
          skillheal = 0;
          healtext = 1;
        }
        if(healtext > 0) {
          healtext1 = healtext1 + 1;
          textSize(30);
          text("+50 HP", x + 50, y + 30);
        }
        if(healtext1 > 50) {
          healtext1 = 0;
          healtext = 0;
        }
        if(ult > 0) {
          stationary = 1;
          ult1 = ult1 + 1;
          bootspeed = 0;
        }
        if(ult1 > 0 && ult1 <= 10) {
          image(knightult, x, y);
          knightult.resize(w, h);
        }
        if(ult1 >= 10 && ult1 <= 60) {
          image(knightult1, x, y);
          knightult1.resize(w, h);
        }
        if((ult1 >= 20 && ult1 <= 30) || (ult1 >= 40 && ult1 <= 50)) {
          image(knightult2, x - 50, y - 50);
          knightult2.resize(w*3, h*3);
        }
        if((ult1 >= 30 && ult1 <= 40) || (ult1 >= 50 && ult1 <= 60)) {
          image(knightult3, x - 50, y - 50);
          knightult3.resize(w*3, h*3);
        }
        if(ult1 >= 60) {
          ult = 0;
          ult1 = 0;
          stationary = 0;
          bootspeed = 5;
        }
          
      }
      
      //taka
      
      if (choose2 > 0 && duration == 20) {
        
        //movement
        if(takastationary < 1) {
          if(hide < 1) {
       image(taka1, x, y);
        taka1.resize(w, h);
          }
          if(hide > 0) {
          image(disguise1, x - 19, y - 19);
            disguise1.resize(w*1.5, h*1.5);
          }
        }
        if(keyIsPressed && key == 'd') {
          x = x + bootspeed;
          takamove = 1;
        } else {
          takamove = 0;
        }
          if(keyIsPressed && key == 'a') {
          x = x - bootspeed;
            takamove1 = 1;
        } else {
          takamove1 = 0;
        }
          if(keyIsPressed && key == 'w') {
          y = y - bootspeed;
            takamove2 = 1;
        } else {
          takamove2 = 0;
        }
          if(keyIsPressed && key == 's') {
          y = y + bootspeed;
            takamove3 = 1;
        } else {
          takamove3 = 0;
        }
        
        
        if(takamove > 0 || takamove1 > 0 || takamove2 > 0 || takamove3 > 0) {
          takastationary = 1;
        } else {
          takastationary = 0;
        }
        
        
        if(takamove > 0 || takamove2 > 0 || takamove3 > 0) {
          takamover = takamover + 1;
      } else {
        takamover = 0;
      }
        if(takamover > 0 && takamover <= 5) {
          image(taka2, x, y);
          taka2.resize(w, h);
        }
        if(takamover >= 5 && takamover <= 10) {
          image(taka3, x, y);
          taka3.resize(w, h);
        }
        if(takamover >= 10) {
          takamover = 1;
        }
        
        
             if(takamove1 > 0) {
          takamover1 = takamover1 + 1;
      } else {
        takamover1 = 0;
      }
        if(takamover1 > 0 && takamover1 <= 5) {
          image(taka5, x, y);
          taka5.resize(w, h);
        }
        if(takamover1 >= 5 && takamover1 <= 10) {
          image(taka6, x, y);
          taka6.resize(w, h);
        }
        if(takamover1 >= 10) {
          takamover1 = 1;
        }
        
        
        
        if(takaattack > 0) {
          takaatk = takaatk + 1;
          takastationary = 1;
        }
            if(takaatk > 0 && takaatk <= 5) {
          image(takaskill1, x, y);
          takaskill1.resize(w, h);
        }
        if(takaatk >= 5 && takaatk <= 10) {
          image(takaskill2, x, y);
          takaskill2.resize(w, h);
        }
         if(takaatk >= 10 && takaatk <= 15) {
          image(takaskill3, x, y);
          takaskill3.resize(w, h);
        }
        if(takaatk >= 15) {
          takaatk = 0;
          takaattack = 0;
          takastationary = 0;
        }
        
        
        if(takaini > 0) {
          takaini1 = takaini1 + 1;
          takastationary = 1;
        }
           if(takaini1 > 0 && takaini1 <= 3) {
          image(takaskill5, x, y - 10);
          takaskill5.resize(w, h);
        }
        if(takaini1 >= 3 && takaini1 <= 6) {
          image(takaskill6, x, y - 30);
          takaskill6.resize(w, h);
        }
         if(takaini1 >= 6 && takaini1 <= 9) {
          image(takaskill7, x, y - 10);
          takaskill7.resize(w, h);
        }
         if(takaini1 >= 9 && takaini1 <= 12) {
          image(takaskill8, x, y + 30);
          takaskill8.resize(w, h);
        }
        if(takaini1 >= 12) {
          takaini1 = 0;
          takaini = 0;
          takastationary = 1;
        }
        
        
        if(takault > 0) {
          takault1 = takault1 + 1;
          takastationary = 1;
        }
        if(takault1 > 0 && takault1 <= 30) {
          image(takaskill9, x, y);
          takaskill9.resize(w, h);
        }
          if(takault1 >= 30 && takault1 <= 35) {
            x = x + 100;
          image(takaskill10, x, y);
          takaskill10.resize(w, h);
        }
          if(takault1 >= 35 && takault1 <= 50) {
          image(takaskill11, x, y);
          takaskill11.resize(w, h);
        }
        if(takault1 >= 50) {
          takault1 = 0;
          takault = 0;
          takastationary = 0;
        }
        
        if(hide > 0) {
          hide1 = hide1 + 1;
        }
        if(hide1 > 0 && hide1 <= 10) {
          image(disguise, x - 19, y - 19);
          disguise.resize(w*1.5, h*1.5);
        }
           if(hide1 > 10 && hide1 <= 100) {
          image(disguise1, x - 19, y - 19);
          disguise1.resize(w*1.5, h*1.5);
        }
        if(hide1 >= 100) {
          hide = 0;
          hide1 = 0;
        }
          
      }
      if (choose3 > 0 && duration == 20) {
      
        if(bladestationary < 1) {
          image(blade1, x, y);
          blade1.resize(w, h);
      }
        if(keyIsPressed && key == 'd') {
          x = x + bootspeed;
          blademove = 1;
        } else {
          blademove = 0;
        }
        if(keyIsPressed && key == 'a') {
          x = x - bootspeed;
           blademove1 = 1;
        } else {
           blademove1 = 0;
        }
        if(keyIsPressed && key == 'w') {
          y = y - bootspeed;
           blademove2 = 1;
        } else {
           blademove2 = 0;
        }
        
        if(keyIsPressed && key == 's') {
          y = y + bootspeed;
           blademove3 = 1;
        } else {
           blademove3 = 0;
        }
        
        if(blademove > 0 || blademove1 > 0 || blademove2 > 0 || blademove3 > 0) {
          bladestationary = 1;
           } else {
             bladestationary = 0;
           }
        
        if(blademove > 0 || blademove2 > 0 || blademove3 > 0) {
          blademoving = blademoving + 1;
        } else {
          blademoving = 0;
        }
        if(blademoving > 0 && blademoving <= 5) {
          image(blade2, x, y);
          blade2.resize(w, h);
        }
        if(blademoving > 5 && blademoving <= 10) {
          image(blade3, x, y);
          blade3.resize(w, h);
        }
        if(blademoving >= 10) {
          blademoving = 1;
        }
        
           
        if(blademove1 > 0) {
          blademoving1 = blademoving1 + 1;
        } else {
          blademoving1 = 0;
        }
        if(blademoving1 > 0 && blademoving1 <= 5) {
          image(blade5, x, y);
          blade5.resize(w, h);
        }
        if(blademoving1 > 5 && blademoving1 <= 10) {
          image(blade6, x, y);
          blade6.resize(w, h);
        }
        if(blademoving1 >= 10) {
          blademoving1 = 1;
        }
        
        
        
        
        if(bladeatk2 > 0) {
          bladeatk3 = bladeatk3 + 1;
          bladestationary = 1;
          
        }
        if(bladeatk3 > 0 && bladeatk3 <= 5) {
          image(bladeatk, x, y);
          bladeatk.resize(w, h);
        }
           if(bladeatk3 > 5 && bladeatk3 <= 13) {
          image(bladeatk1, x, y);
          bladeatk1.resize(w, h);
        }
        if(bladeatk3 >= 13) {
          bladeatk3 = 0;
          bladeatk2 = 0;
          bladestationary = 0;
        }
        
        
        if(bladeskill > 0) {
          bladeskill1 = bladeskill1 + 1;
          bladestationary = 1;
        }
        if(bladeskill1 > 0 && bladeskill1 <= 20) {
          x = x + 10;
          y = y - 3;
          image(bladejump, x, y);
          bladejump.resize(w, h);
        }
            if(bladeskill1 > 20 && bladeskill1 <= 30) {
              x = x + 1;
              y = y + 6;
          image(bladejump1, x, y);
          bladejump1.resize(w*1.3, h*1.3);
        }
        if(bladeskill1 >= 30) {
          bladeskill = 0;
          bladeskill1 = 0;
          bladestationary = 0;
        }
        
        
        
        if(bladeskill2 > 0) {
          bladeskill3 = bladeskill3 + 1;
          bladestationary = 1;
        }
        if(bladeskill3 > 0 && bladeskill3 <= 20) {
          x = x + 20;
          image(bladerush, x, y);
          bladerush.resize(w, h);
        }
        if(bladeskill3 >= 20) {
          bladeskill2 = 0;
          bladeskill3 = 0;
          bladestationary = 0;
        }
        
        
        if(bladeskill5 > 0) {
          bladeskill6 = bladeskill6 + 1;
          bladestationary = 1;
        }
        if(bladeskill6 > 0 && bladeskill6 <= 5) {
          image(bladeult, x, y);
          bladeult.resize(w, h);
        }
         if(bladeskill6 >= 5 && bladeskill6 <= 10) {
          image(bladeult1, x, y);
          bladeult1.resize(w, h);
        }
         if(bladeskill6 >= 10 && bladeskill6 <= 30) {
          image(bladeult2, x, y);
          bladeult2.resize(w, h);
        }
         if(bladeskill6 >= 15 && bladeskill6 <= 17) {
          image(bladeult3, x + 50, y);
          bladeult3.resize(w*1.5, h*1.5);
        }
         if(bladeskill6 >= 17 && bladeskill6 <= 19) {
          image(bladeult3, x + 150, y);
          bladeult3.resize(w*1.5, h*1.5);
        }
         if(bladeskill6 >= 21 && bladeskill6 <= 30) {
          image(bladeult3, x + 300, y);
          bladeult3.resize(w*1.5, h*1.5);
        }
        if(bladeskill6 >= 30) {
          bladeskill5 = 0;
          bladeskill6 = 0;
          bladestationary = 0;
        }
        
      }      
      
    }
    
    
    // market
    
      let range = dist(x, y, 100, 700);
      let range1 = dist(x, y, 1700, 700);
      let range2 = dist(x, y, 4100, 700);
      
      if(range < 100 || range1 < 100 || range2 < 100) {
        background(50);
        noFill()
        stroke(255);
        fill(100, color6);
        rect(x - 500, 100, 200, 100);
        fill(100, color7);
        rect(x - 200, 100, 200, 100);
        fill(100, color8);
        rect(x + 100, 100, 200, 100);
       fill(100, color9);
        rect(x + 400, 100, 200, 100);
        
        fill(255);
        textSize(50);
         text("Weapon", x - 490, 160);
         text("Defense", x - 190, 160);
         text("Agility", x + 120, 160);
          text("Potion", x + 420, 160);
        if(mouseX > width/2 - 500 && mouseX < width/2 - 300 && mouseY > 100 && mouseY < 200) {
          color6 = 255;
      } else {
        color6 = 0;
      }
           if(mouseX > width/2 - 200  && mouseX < width/2 && mouseY > 100 && mouseY < 200) {
          color7 = 255;
      } else {
        color7 = 0;
      }
           if(mouseX > width/2 + 100 && mouseX < width/2 + 300 && mouseY > 100 && mouseY < 200) {
          color8 = 255;
      } else {
        color8 = 0;
      }
           if(mouseX > width/2 + 400 && mouseX < width/2 + 600 && mouseY > 100 && mouseY < 200) {
          color9 = 255;
      } else {
        color9 = 0;
      }
        
        
        
        
           if(mouseX > width/2 - 500 && mouseX < width/2 - 300 && mouseY > 100 && mouseY < 200 && mouseIsPressed) {
            shopping1 = 1;
             shopping2 = 0;
             shopping3 = 0;
             shopping5 = 0;
           }
           if(mouseX > width/2 - 200  && mouseX < width/2 && mouseY > 100 && mouseY < 200 && mouseIsPressed) {
            shopping1 = 0;
             shopping2 = 1;
             shopping3 = 0;
             shopping5 = 0;
           }
           if(mouseX > width/2 + 100 && mouseX < width/2 + 300 && mouseY > 100 && mouseY < 200 && mouseIsPressed) {
            shopping1 = 0;
             shopping2 = 0;
             shopping3 = 1;
             shopping5 = 0;
           }
           if(mouseX > width/2 + 400 && mouseX < width/2 + 600 && mouseY > 100 && mouseY < 200 && mouseIsPressed) {
            shopping1 = 0;
             shopping2 = 0;
             shopping3 = 0;
             shopping5 = 1;
           }
        //items
        
        noFill();
        stroke(255);
        textSize(20);
        if(shopping1 > 0) {
          rect(x - 500, 300, 100, 100);
          image(sword, x - 500, 300);
          sword.resize(100, 100);
          rect(x - 400, 300, 500, 100);
          text("+150 damage", x - 300, 330);
          text("cost: 5000 gold", x - 300, 360);
          
          
            rect(x - 500, 400, 100, 100);
          image(axe, x - 500, 400);
          axe.resize(100, 100);
          rect(x - 400, 400, 500, 100);
          text("+50 damage", x - 300, 430);
          text("cost: 3000 gold", x - 300, 460);
          
          
            rect(x - 500, 500, 100, 100);
          image(weapon, x - 500, 500);
          weapon.resize(100, 100);
          rect(x - 400, 500, 500, 100);
          text("+100 damage", x - 300, 530);
          text("cost: 3500 gold", x - 300, 560);
        }
        
        
        
                if(shopping2 > 0) {
          rect(x - 500, 300, 100, 100);
          image(armor, x - 500, 300);
          armor.resize(100, 100);
          rect(x - 400, 300, 500, 100);
          text("+100 defense", x - 300, 330);
          text("cost: 3000 gold", x - 300, 360);
                  
          rect(x - 500, 400, 100, 100);
          image(helmet, x - 500, 400);
          helmet.resize(100, 100);
          rect(x - 400, 400, 500, 100);
          text("+30 defense", x - 300, 430);
          text("cost: 2000 gold", x - 300, 460);
                  
          rect(x - 500, 500, 100, 100);
          image(shield, x - 500, 500);
          shield.resize(100, 100);
          rect(x - 400, 500, 500, 100);
          text("+100 defense", x - 300, 530);
          text("cost: 5000 gold", x - 300, 560);
        }
                if(shopping3 > 0) {
          rect(x - 500, 300, 100, 100);
          image(boots1, x - 500, 300);
          boots1.resize(90, 90);
          rect(x - 400, 300, 500, 100);
          text("+5 movement speed", x - 300, 330);
          text("cost: 1000 gold", x - 300, 360);
                  
          rect(x - 500, 400, 100, 100);
          image(boots2, x - 500, 400);
          boots2.resize(90, 90);
          rect(x - 400, 400, 500, 100);
          text("+5 movement speed", x - 300, 430);
          text("cost: 1000 gold", x - 300, 460);
                  
          rect(x - 500, 500, 100, 100);
          image(boots3, x - 500, 500);
          boots3.resize(90, 90);
          rect(x - 400, 500, 500, 100);
          text("+5 movement speed", x - 300, 530);
          text("cost: 1000 gold", x - 300, 560);
        }
                if(shopping5 > 0) {
          rect(x - 500, 300, 100, 100);
          image(potion1, x - 500, 300);
          potion1.resize(90, 90);
          rect(x - 400, 300, 500, 100);
          text("+500 HP", x - 300, 330);
          text("cost: 2000 gold", x - 300, 360);
                  
          rect(x - 500, 400, 100, 100);
          image(potion2, x - 500, 400);
          potion2.resize(90, 90);
          rect(x - 400, 400, 500, 100);
          text("+500 Mana", x - 300, 430);
          text("cost: 2000 gold", x - 300, 460);   
      
                  
        }
      // purchase
        
          let mtotal = m1 + m2 + m3 + m4 + m5 + m6 + m7 + m8 + m9 + m10 + m11;
        
          if(shopping1 > 0 && mouseX > width/2 - 500 && mouseX < width - 400 && mouseY > 300 && mouseY < 400 && mouseIsPressed && p1 < 1 && mtotal < 6 && gold >= 5000) {
            purchased1 = 1;
             m1 = 1;
             n1 = m1 + m2 + m3 + m4 + m5 + m6 + m7 + m8 + m9 + m10 + m11;
            gold = gold - 5000;
            p1 = 1;
        }
        
         if(shopping1 > 0 && mouseX > width/2 - 500 && mouseX < width - 400 && mouseY > 400 && mouseY < 500 && mouseIsPressed && p2 < 1 && mtotal < 6 && gold >= 3000) {
               purchased2 = 1;
           m2 = 1;
             n2 = m1 + m2 + m3 + m4 + m5 + m6 + m7 + m8 + m9 + m10 + m11;
           gold = gold - 3000;
           p2 = 1;
        }
        
         if(shopping1 > 0 && mouseX > width/2 - 500 && mouseX < width - 400 && mouseY > 500 && mouseY < 600 && mouseIsPressed && p3 < 1 && mtotal < 6 && gold >= 3500) {
               purchased3 = 1;
           m3 = 1;
             n3 = m1 + m2 + m3 + m4 + m5 + m6 + m7 + m8 + m9 + m10 + m11;
           gold = gold - 3500;
           p3 = 1;
        }
        
          if(shopping2 > 0 && mouseX > width/2 - 500 && mouseX < width - 400 && mouseY > 300 && mouseY < 400 && mouseIsPressed && p4 < 1 && mtotal < 6 && gold >= 3000) {
                purchased4 = 1;
             m4 = 1;
              n4 = m1 + m2 + m3 + m4 + m5 + m6 + m7 + m8 + m9 + m10 + m11;
            gold = gold - 3000;
            p4 = 1;
        }
        
         if(shopping2 > 0 && mouseX > width/2 - 500 && mouseX < width - 400 && mouseY > 400 && mouseY < 500 && mouseIsPressed && p5 < 1 && mtotal < 6 && gold >= 2000) {
               purchased5 = 1;
          m5 = 1;
             n5 = m1 + m2 + m3 + m4 + m5 + m6 + m7 + m8 + m9 + m10 + m11;
           gold = gold - 2000;
           p5 = 1;
        }
        
         if(shopping2 > 0 && mouseX > width/2 - 500 && mouseX < width - 400 && mouseY > 500 && mouseY < 600 && mouseIsPressed && p6 < 1 && mtotal < 6 && gold >= 5000) {
               purchased6 = 1;
           m6 = 1;
             n6 = m1 + m2 + m3 + m4 + m5 + m6 + m7 + m8 + m9 + m10 + m11;
             gold = gold - 5000;
           p6 = 1;
        }
        
          if(shopping3 > 0 && mouseX > width/2 - 500 && mouseX < width - 400 && mouseY > 300 && mouseY < 400 && mouseIsPressed && p7 < 1 && mtotal < 6 && gold >= 1000) {
                purchased7 = 1;
            m7 = 1;
              n7 = m1 + m2 + m3 + m4 + m5 + m6 + m7 + m8 + m9 + m10 + m11;
            gold = gold - 1000;
            p7 = 1;
        }
        
         if(shopping3 > 0 && mouseX > width/2 - 500 && mouseX < width - 400 && mouseY > 400 && mouseY < 500 && mouseIsPressed && p8 < 1 && mtotal < 6 && gold >= 1000) {
               purchased8 = 1;
            m8 = 1;
             n8 = m1 + m2 + m3 + m4 + m5 + m6 + m7 + m8 + m9 + m10 + m11;
           gold = gold - 1000;
           p8 = 1;
        }
        
         if(shopping3 > 0 && mouseX > width/2 - 500 && mouseX < width - 400 && mouseY > 500 && mouseY < 600 && mouseIsPressed && p9 < 1 && mtotal < 6 && gold >= 1000) {
               purchased9 = 1;
            m9 = 1;
             n9 = m1 + m2 + m3 + m4 + m5 + m6 + m7 + m8 + m9 + m10 + m11;
           gold = gold - 1000;
           p9 = 1;
        }
       
          if(shopping5 > 0 && mouseX > width/2 - 500 && mouseX < width - 400 && mouseY > 300 && mouseY < 400 && mouseIsPressed && p10 < 1 && mtotal < 6 && gold >= 2000) {  
            purchased10 = 1;
             m10 = 1;
              n10 = m1 + m2 + m3 + m4 + m5 + m6 + m7 + m8 + m9 + m10 + m11;
            gold = gold - 2000;
            p10 = 1;
            
        }
        
         if(shopping5 > 0 && mouseX > width/2 - 500 && mouseX < width - 400 && mouseY > 400 && mouseY < 500 && mouseIsPressed && p11 < 1 && mtotal < 6 && gold >= 2000) {
           purchased11 = 1;
            m11 = 1
             n11 = m1 + m2 + m3 + m4 + m5 + m6 + m7 + m8 + m9 + m10 + m11;
           gold = gold - 2000;
            p11 = 1;
         }
        
                      
             //Gold
      fill(1);
    textSize(25);
      text("Gold :", x - 500, 50);
      text(int(gold), x - 410, 50);
        
      }
  }
  
}
class createtrees {
  constructor(a, b, c) {
    this.a = random(-500, 4200);
    this.b = random(700);
    this.c = c;
    this.rocka = random(4000);
    this.rockb = random(700);
  }
  plant() {
    image(rock, this.rocka, this.rockb);
    rock.resize(50, 30);
    image(tree, this.a, this.b);
    tree.resize(100, 100);
  }
}
class createtroop {
  constructor(a1, b1, c1) {
    this.a1 = random(500, 3500);
    this.b1 = random(700);
    this.c1 = c1;
    this.troopmove = 0;
    this.atk = 0;
  }
  deploy() {
    // minion's hp
    stroke(1);
    strokeWeight(1);
    noFill();
    rect(this.a1 - 30, this.b1 - 30, 100, 10);
    fill(255, 100, 100);
    rect(this.a1 - 30, this.b1 - 30, 100 - this.atk, 10);
    
    if(this.troopmove == 0) {
    image(troop, this.a1, this.b1);
    troop.resize(50, 50);
    }
    let distance = dist(x + 20, y, this.a1, this.b1);
    if(distance < 50) {
      this.troopmove = this.troopmove + 1;
      if(this.troopmove > 0 && this.troopmove <= 5) {
      image(troop1, this.a1, this.b1);
      troop1.resize(50, 50);
        dmg = dmg + 1;
      }
       if(this.troopmove >= 5 && this.troopmove <= 10) {
      image(troop2, this.a1, this.b1);
      troop2.resize(50, 50);
       }
       if(this.troopmove >= 10 && this.troopmove <= 15) {
      image(troop3, this.a1, this.b1);
      troop3.resize(50, 50);
       }
       if(this.troopmove >= 15 && this.troopmove <= 20) {
      image(troop5, this.a1, this.b1);
      troop5.resize(50, 50);
       }
      if(this.troopmove >= 20) {
      this.troopmove = 1;
      }
    } else {
      this.troopmove = 0;
    }
    if(attackingdamage > 0) {
       attackdamage = attackdamage + 1;
    }
    if(attackdamage > 3) {
      attackingdamage = 0;
      attackdamage = 0;
    }
    if(distance < 50 && attackdamage > 0) {
      this.atk = this.atk + 1;
    }
     if(distance < 150 && firstskill > 0) {
      this.atk = this.atk + 1;
    }
     if(distance < 200 && ult > 0) {
      this.atk = this.atk + 1;
    }
     if(distance < 50 && takaini > 0) {
      this.atk = this.atk + 1;
    }
     if(distance < 50 && takault > 0) {
      this.atk = this.atk + 1;
    }
    
    if(this.atk >= 100) {
      this.a1 = random(500, 3500);
      this.b1 = random(700);
      this.atk = 0;
    }
  }
}