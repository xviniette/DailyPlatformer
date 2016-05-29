_root._quality = "high";
gquality = "high";
game = {tileW:20,tileH:20,visx:15,visy:25,pushy:100,tilenumber:76};
game.savefile = SharedObject.getLocal("vertigo");
tip1 = "You only have to beat 3 out of 5 levels for every level set, if you run into a level that seems impossible to beat you can always skip it.";
tip2 = "All of the music featured in meatboy was created by Danny B, make sure to visit his website at www.dbsoundworks.com!";
tip3 = "Did you know pressing escape pauses the game? It\'s true!";
tip4 = "So Jon McEntee walks into a bar right? OUCH!";
tip5 = "If all else fails, you can always rage quit";
tip6 = "When Edmund McMillen says \"It\'s peanut-butter jelly time!\", every gosh diddly darn person on the North-Western continent sits down and has a peanut butter and jelly sandwich.";
tip7 = "Lean red meat is not only a good source of protein and energy, but also has benefits in avoiding heart disease.";
tip8 = "Eating two portions of red meat a day increases a person\'s risk of getting bowel cancer by 35 percent";
tip9 = "LOL @ the people who think this game is vegetarian propaganda";
tip10 = "Meat is Murder. Tasty, Tasty Murder";
game.eMenu = false;
game.levelsCompleted = 1;
game.originTimer = 220;
game.rebornTimer = 23;
game.cdir = 1;
game.dustn = 0;
game.markn = 0;
game.ctimerone = 50;
game.ctimertwo = 50;
game.ctimerthree = 50;
game.missilen = 0;
game.dustArray = new Array();
game.smartMark = new Array();
game.mArray = new Array();
game.bsync = 20;
game.msync = 50;
game.damsync = 50;
game.ctiletype = 1;
game.blockplace = 1;
game.bnumber = 0;
game.deathCounter = 0;
game.comicStage = 1;
game.deathStage = 1;
game.importStage = 1;
game.death = false;
game.inputMidStage = 1;
game.customLevels = 0;
game.depth = 2;
game.mouseCheckW = 0;
game.mouseCheckH = 0;
game.c = 1;
game.menuStage = "unloaded";
game.menuBuilt = false;
game.textOneW = 40;
game.textOneH = 20;
game.textTwoW = 100;
game.textTwoH = 20;
game.textThreeW = 250;
game.textThreeH = 250;
game.textFourW = 250;
game.textFourH = 60;
game.textFiveW = 150;
game.textFiveH = 20;
game.textSixW = 350;
game.textSixH = 65;
game.textSevenW = 200;
game.textSevenH = 200;
game.creationStage = 1;
game.mapnumber = 1;
game.mapamount = 61;
_root.createEmptyMovieClip("OverL",game.depth);
game.clip = _root.OverL;
game.depth = game.depth + 1;
game.mouse = false;
game.mouseup = true;
game.textOneFormat = new TextFormat();
game.textOneFormat.align = "center";
game.textOneFormat.bold = true;
game.textOneFormat.font = "Arial";
game.textOneFormat.embedFonts = true;
game.textFourFormat = new TextFormat();
game.textFourFormat.align = "center";
game.textFourFormat.bold = true;
game.textFourFormat.size = 25;
game.textFourFormat.font = "Arial";
game.textFourFormat.embedFonts = true;
game.textSixFormat = new TextFormat();
game.textSixFormat.align = "center";
game.textSixFormat.bold = true;
game.textSixFormat.size = 50;
game.textSixFormat.font = "Arial";
game.textSixFormat.embedFonts = true;
game.textSevenFormat = new TextFormat();
game.textSevenFormat.bold = true;
game.textSevenFormat.font = "Arial";
game.textSevenFormat.embedFonts = true;
game.textEightFormat = new TextFormat();
game.textEightFormat.align = "center";
game.textEightFormat.bold = true;
game.textEightFormat.underline = true;
game.textEightFormat.font = "Arial";
game.textEightFormat.embedFonts = true;
game.custom = new Object();
game.use = new Object();
game.xcharspeed = 8;
game.xcurrentspeed = 0;
game.maxVel = 15;
game.mapBuilt = false;
game.mouseTracker = false;
game.enter = true;
game.pause = false;
music1_1 = new Sound();
music1_1.attachSound("mus1");
music2_1 = new Sound();
music2_1.attachSound("mus3");
music3_1 = new Sound();
music3_1.attachSound("mus5");
det1 = new Sound();
det1.attachSound("det1");
det2 = new Sound();
det2.attachSound("det2");
det3 = new Sound();
det3.attachSound("det3");
jump1 = new Sound();
jump1.attachSound("j1");
jump2 = new Sound();
jump2.attachSound("j2");
jump3 = new Sound();
jump3.attachSound("j3");
jump4 = new Sound();
jump4.attachSound("j4");
sexy = new Sound();
sexy.attachSound("sexy");
bpick = new Sound();
bpick.attachSound("baidpick");
MOB = new Sound();
MOB.attachSound("mob");
YW = new Sound();
YW.attachSound("youwin");
buzz = new Sound();
buzz.attachSound("buzz");
burn = new Sound();
burn.attachSound("burn");
mexplode = new Sound();
mexplode.attachSound("mexplode");
bexplode = new Sound();
bexplode.attachSound("bexplode");
titleMenuSound = new Sound();
titleMenuSound.attachSound("crazyindustry");
game.tile0 = function()
{
};
game.tile0.prototype.walkable = true;
game.tile0.prototype.frame = 1;
game.tile0.prototype.end = false;
game.tile1 = function()
{
};
game.tile1.prototype.walkable = true;
game.tile1.prototype.frame = 2;
game.tile1.prototype.end = false;
game.tile2 = function()
{
};
game.tile2.prototype.walkable = true;
game.tile2.prototype.frame = 3;
game.tile2.prototype.end = false;
game.tile3 = function()
{
};
game.tile3.prototype.walkable = true;
game.tile3.prototype.frame = 4;
game.tile3.prototype.end = false;
game.tile4 = function()
{
};
game.tile4.prototype.walkable = true;
game.tile4.prototype.frame = 5;
game.tile4.prototype.end = false;
game.tile5 = function()
{
};
game.tile5.prototype.walkable = true;
game.tile5.prototype.frame = 6;
game.tile5.prototype.end = false;
game.tile6 = function()
{
};
game.tile6.prototype.walkable = true;
game.tile6.prototype.frame = 7;
game.tile6.prototype.end = false;
game.tile7 = function()
{
};
game.tile7.prototype.walkable = true;
game.tile7.prototype.frame = 8;
game.tile7.prototype.end = false;
game.tile8 = function()
{
};
game.tile8.prototype.walkable = false;
game.tile8.prototype.frame = 9;
game.tile9 = function()
{
};
game.tile9.prototype.walkable = false;
game.tile9.prototype.frame = 10;
game.tile10 = function()
{
};
game.tile10.prototype.walkable = false;
game.tile10.prototype.frame = 11;
game.tile11 = function()
{
};
game.tile11.prototype.walkable = false;
game.tile11.prototype.frame = 12;
game.tile12 = function()
{
};
game.tile12.prototype.walkable = false;
game.tile12.prototype.frame = 13;
game.tile13 = function()
{
};
game.tile13.prototype.walkable = true;
game.tile13.prototype.end = true;
game.tile13.prototype.activated = false;
game.tile13.prototype.dtimer = 0;
game.tile13.prototype.frame = 14;
game.tile14 = function()
{
};
game.tile14.prototype.walkable = false;
game.tile14.prototype.frame = 15;
game.tile14.prototype.deadly = true;
game.tile14.prototype.noblood = true;
game.tile14.prototype.dsound = "buzz";
game.tile14.prototype.dtype = "deathblow";
game.tile15 = function()
{
};
game.tile15.prototype.walkable = false;
game.tile15.prototype.frame = 16;
game.tile15.prototype.shooting = 1;
game.tile15.prototype.btype = "fbullet";
game.tile15.prototype.timer = 20;
game.tile16 = function()
{
};
game.tile16.prototype.walkable = false;
game.tile16.prototype.frame = 17;
game.tile16.prototype.shooting = -1;
game.tile16.prototype.btype = "fbullet";
game.tile16.prototype.timer = 20;
game.tile17 = function()
{
};
game.tile17.prototype.walkable = false;
game.tile17.prototype.activated = false;
game.tile17.prototype.noblood = true;
game.tile17.prototype.frame = 18;
game.tile17.prototype.dtimer = 10;
game.tile18 = function()
{
};
game.tile18.prototype.walkable = false;
game.tile18.prototype.frame = 19;
game.tile18.prototype.ypull = 2;
game.tile19 = function()
{
};
game.tile19.prototype.walkable = false;
game.tile19.prototype.frame = 20;
game.tile19.prototype.ypull = -2;
game.tile20 = function()
{
};
game.tile20.prototype.walkable = false;
game.tile20.prototype.frame = 21;
game.tile20.prototype.damTimer = 50;
game.tile20.prototype.dsound = "buzz";
game.tile20.prototype.dtype = "deathblow";
game.tile20.prototype.noblood = true;
game.tile20.prototype.phase = false;
game.tile21 = function()
{
};
game.tile21.prototype.walkable = true;
game.tile21.prototype.frame = 22;
game.tile21.prototype.mtimer = 50;
game.tile21.prototype.mshooting = 1;
game.tile21.prototype.mtype = "fmissile";
game.tile22 = function()
{
};
game.tile22.prototype.walkable = true;
game.tile22.prototype.frame = 23;
game.tile22.prototype.mtimer = 50;
game.tile22.prototype.mshooting = -1;
game.tile22.prototype.mtype = "fmissile";
game.tile23 = function()
{
};
game.tile23.prototype.walkable = true;
game.tile23.prototype.frame = 24;
game.tile23.prototype.deadly = true;
game.tile23.prototype.noblood = true;
game.tile23.prototype.dsound = "burn";
game.tile23.prototype.dtype = "deathburn";
game.tile24 = function()
{
};
game.tile24.prototype.walkable = true;
game.tile24.prototype.frame = 25;
game.tile24.prototype.deadly = true;
game.tile24.prototype.noblood = true;
game.tile24.prototype.dsound = "burn";
game.tile24.prototype.dtype = "deathburn";
game.tile25 = function()
{
};
game.tile25.prototype.walkable = false;
game.tile25.prototype.activated = false;
game.tile25.prototype.noblood = true;
game.tile25.prototype.frame = 26;
game.tile25.prototype.dtimer = 10;
game.tile26 = function()
{
};
game.tile26.prototype.walkable = true;
game.tile26.prototype.frame = 27;
game.tile26.prototype.end = false;
game.tile27 = function()
{
};
game.tile27.prototype.walkable = true;
game.tile27.prototype.frame = 28;
game.tile27.prototype.end = false;
game.tile28 = function()
{
};
game.tile28.prototype.walkable = true;
game.tile28.prototype.frame = 29;
game.tile28.prototype.end = false;
game.tile29 = function()
{
};
game.tile29.prototype.walkable = true;
game.tile29.prototype.frame = 30;
game.tile29.prototype.end = false;
game.tile30 = function()
{
};
game.tile30.prototype.walkable = true;
game.tile30.prototype.frame = 31;
game.tile30.prototype.end = false;
game.tile31 = function()
{
};
game.tile31.prototype.walkable = true;
game.tile31.prototype.frame = 32;
game.tile31.prototype.end = false;
game.tile32 = function()
{
};
game.tile32.prototype.walkable = true;
game.tile32.prototype.frame = 33;
game.tile32.prototype.end = false;
game.tile33 = function()
{
};
game.tile33.prototype.walkable = false;
game.tile33.prototype.frame = 34;
game.tile34 = function()
{
};
game.tile34.prototype.walkable = false;
game.tile34.prototype.frame = 35;
game.tile35 = function()
{
};
game.tile35.prototype.walkable = false;
game.tile35.prototype.frame = 36;
game.tile36 = function()
{
};
game.tile36.prototype.walkable = false;
game.tile36.prototype.frame = 37;
game.tile37 = function()
{
};
game.tile37.prototype.walkable = false;
game.tile37.prototype.frame = 38;
game.tile38 = function()
{
};
game.tile38.prototype.walkable = true;
game.tile38.prototype.end = true;
game.tile38.prototype.activated = false;
game.tile38.prototype.dtimer = 0;
game.tile38.prototype.frame = 39;
game.tile39 = function()
{
};
game.tile39.prototype.walkable = false;
game.tile39.prototype.frame = 40;
game.tile39.prototype.deadly = true;
game.tile39.prototype.dtype = "deathburn";
game.tile39.prototype.dsound = "burn";
game.tile40 = function()
{
};
game.tile40.prototype.walkable = false;
game.tile40.prototype.frame = 41;
game.tile40.prototype.shooting = 1;
game.tile40.prototype.btype = "sbullet";
game.tile40.prototype.timer = 20;
game.tile41 = function()
{
};
game.tile41.prototype.walkable = false;
game.tile41.prototype.frame = 42;
game.tile41.prototype.shooting = -1;
game.tile41.prototype.btype = "sbullet";
game.tile41.prototype.timer = 20;
game.tile42 = function()
{
};
game.tile42.prototype.walkable = false;
game.tile42.prototype.activated = false;
game.tile42.prototype.noblood = true;
game.tile42.prototype.frame = 43;
game.tile42.prototype.dtimer = 10;
game.tile43 = function()
{
};
game.tile43.prototype.walkable = false;
game.tile43.prototype.frame = 44;
game.tile43.prototype.ypull = 2;
game.tile44 = function()
{
};
game.tile44.prototype.walkable = false;
game.tile44.prototype.frame = 45;
game.tile44.prototype.ypull = -2;
game.tile45 = function()
{
};
game.tile45.prototype.walkable = false;
game.tile45.prototype.frame = 46;
game.tile45.prototype.damTimer = 50;
game.tile45.prototype.noblood = true;
game.tile45.prototype.dtype = "deathburn";
game.tile45.prototype.dsound = "burn";
game.tile45.prototype.phase = false;
game.tile46 = function()
{
};
game.tile46.prototype.walkable = true;
game.tile46.prototype.frame = 47;
game.tile46.prototype.mtimer = 50;
game.tile46.prototype.mshooting = 1;
game.tile46.prototype.mtype = "smissile";
game.tile47 = function()
{
};
game.tile47.prototype.walkable = true;
game.tile47.prototype.frame = 48;
game.tile47.prototype.mtimer = 50;
game.tile47.prototype.mshooting = -1;
game.tile47.prototype.mtype = "smissile";
game.tile48 = function()
{
};
game.tile48.prototype.walkable = false;
game.tile48.prototype.frame = 49;
game.tile48.prototype.deadly = true;
game.tile48.prototype.noblood = true;
game.tile48.prototype.dtype = "deathburn";
game.tile48.prototype.dsound = "burn";
game.tile49 = function()
{
};
game.tile49.prototype.walkable = false;
game.tile49.prototype.frame = 50;
game.tile49.prototype.deadly = true;
game.tile49.prototype.noblood = true;
game.tile49.prototype.dtype = "deathburn";
game.tile49.prototype.dsound = "burn";
game.tile50 = function()
{
};
game.tile50.prototype.walkable = false;
game.tile50.prototype.activated = false;
game.tile50.prototype.noblood = true;
game.tile50.prototype.frame = 51;
game.tile50.prototype.dtimer = 10;
game.tile51 = function()
{
};
game.tile51.prototype.walkable = true;
game.tile51.prototype.frame = 52;
game.tile51.prototype.end = false;
game.tile52 = function()
{
};
game.tile52.prototype.walkable = true;
game.tile52.prototype.frame = 53;
game.tile52.prototype.end = false;
game.tile53 = function()
{
};
game.tile53.prototype.walkable = true;
game.tile53.prototype.frame = 54;
game.tile53.prototype.end = false;
game.tile54 = function()
{
};
game.tile54.prototype.walkable = true;
game.tile54.prototype.frame = 55;
game.tile54.prototype.end = false;
game.tile55 = function()
{
};
game.tile55.prototype.walkable = true;
game.tile55.prototype.frame = 56;
game.tile55.prototype.end = false;
game.tile56 = function()
{
};
game.tile56.prototype.walkable = true;
game.tile56.prototype.frame = 57;
game.tile56.prototype.end = false;
game.tile57 = function()
{
};
game.tile57.prototype.walkable = true;
game.tile57.prototype.frame = 58;
game.tile57.prototype.end = false;
game.tile58 = function()
{
};
game.tile58.prototype.walkable = false;
game.tile58.prototype.frame = 59;
game.tile59 = function()
{
};
game.tile59.prototype.walkable = false;
game.tile59.prototype.frame = 60;
game.tile60 = function()
{
};
game.tile60.prototype.walkable = false;
game.tile60.prototype.frame = 61;
game.tile61 = function()
{
};
game.tile61.prototype.walkable = false;
game.tile61.prototype.frame = 62;
game.tile62 = function()
{
};
game.tile62.prototype.walkable = false;
game.tile62.prototype.frame = 63;
game.tile63 = function()
{
};
game.tile63.prototype.walkable = true;
game.tile63.prototype.end = true;
game.tile63.prototype.activated = false;
game.tile63.prototype.dtimer = 0;
game.tile63.prototype.frame = 64;
game.tile64 = function()
{
};
game.tile64.prototype.walkable = false;
game.tile64.prototype.frame = 65;
game.tile64.prototype.deadly = true;
game.tile64.prototype.noblood = true;
game.tile64.prototype.dtype = "deathburn";
game.tile64.prototype.dsound = "burn";
game.tile65 = function()
{
};
game.tile65.prototype.walkable = false;
game.tile65.prototype.frame = 66;
game.tile65.prototype.shooting = 1;
game.tile65.prototype.btype = "hbullet";
game.tile65.prototype.timer = 20;
game.tile66 = function()
{
};
game.tile66.prototype.walkable = false;
game.tile66.prototype.frame = 67;
game.tile66.prototype.shooting = -1;
game.tile66.prototype.btype = "hbullet";
game.tile66.prototype.timer = 20;
game.tile67 = function()
{
};
game.tile67.prototype.walkable = false;
game.tile67.prototype.activated = false;
game.tile67.prototype.noblood = true;
game.tile67.prototype.frame = 68;
game.tile67.prototype.dtimer = 10;
game.tile68 = function()
{
};
game.tile68.prototype.walkable = false;
game.tile68.prototype.frame = 69;
game.tile68.prototype.ypull = 2;
game.tile69 = function()
{
};
game.tile69.prototype.walkable = false;
game.tile69.prototype.frame = 70;
game.tile69.prototype.ypull = -2;
game.tile70 = function()
{
};
game.tile70.prototype.walkable = false;
game.tile70.prototype.frame = 71;
game.tile70.prototype.damTimer = 50;
game.tile70.prototype.dtype = "deathburn";
game.tile70.prototype.dsound = "burn";
game.tile70.prototype.noblood = true;
game.tile70.prototype.phase = false;
game.tile71 = function()
{
};
game.tile71.prototype.walkable = true;
game.tile71.prototype.frame = 72;
game.tile71.prototype.mtimer = 50;
game.tile71.prototype.mshooting = 1;
game.tile71.prototype.mtype = "hmissile";
game.tile72 = function()
{
};
game.tile72.prototype.walkable = true;
game.tile72.prototype.frame = 73;
game.tile72.prototype.mtimer = 50;
game.tile72.prototype.mshooting = -1;
game.tile72.prototype.mtype = "hmissile";
game.tile73 = function()
{
};
game.tile73.prototype.walkable = false;
game.tile73.prototype.frame = 74;
game.tile73.prototype.deadly = true;
game.tile73.prototype.noblood = true;
game.tile73.prototype.dtype = "deathburn";
game.tile73.prototype.dsound = "burn";
game.tile74 = function()
{
};
game.tile74.prototype.walkable = false;
game.tile74.prototype.frame = 75;
game.tile74.prototype.deadly = true;
game.tile74.prototype.noblood = true;
game.tile74.prototype.dtype = "deathburn";
game.tile74.prototype.dsound = "burn";
game.tile75 = function()
{
};
game.tile75.prototype.walkable = false;
game.tile75.prototype.activated = false;
game.tile75.prototype.noblood = true;
game.tile75.prototype.frame = 76;
game.tile75.prototype.dtimer = 10;
game.tile76 = function()
{
};
game.tile76.prototype.walkable = true;
game.tile76.prototype.activated = false;
game.tile75.prototype.noblood = true;
game.tile76.prototype.dtimer = 1;
game.tile76.prototype.baid = true;
game.tile76.prototype.frame = 77;
game.keyChecker = function()
{
   if(!Key.isDown(13))
   {
      game.enter = true;
   }
   if(!Key.isDown(32) && !Key.isDown(65))
   {
      game.space = true;
   }
   if(!Key.isDown(27))
   {
      game.escape = true;
   }
   if(!Key.isDown(46))
   {
      game.deletekey = true;
   }
};
if(game.savefile.data.customAmount != undefined)
{
   game.customLevels = game.savefile.data.customAmount;
   i = 0;
   while(i < game.customLevels)
   {
      game.custom["savegame" + i] = new Object();
      game.custom["savegame" + i].array = game.savefile.data["custommaparray" + i];
      game.custom["savegame" + i].name = game.savefile.data["custommapname" + i];
      game.custom["savegame" + i].char = game.savefile.data["customchar" + i];
      game.custom["savegame" + i].bg = game.savefile.data["custombg" + i];
      game.custom["savegame" + i].scroll = game.savefile.data["customscroll" + i];
      i++;
   }
}
i = 0;
while(i <= game.mapamount)
{
   _root["map" + i + "beaten"] = game.savefile.data["map" + i + "beaten"];
   _root["map" + i + "baid"] = game.savefile.data["map" + i + "baid"];
   i++;
}
i = 0;
while(i < 12)
{
   arrname = "set" + i;
   _root[arrname + "finished"] = game.savefile.data[arrname + "finished"];
   _root[arrname + "comicplayed"] = game.savefile.data[arrname + "comicplayed"];
   i++;
}
if(game.savefile.data.bgirlunlocked != undefined)
{
   game.bgirlunlocked = game.savefile.data.bgirlunlocked;
}
if(game.savefile.data.ccunlocked != undefined)
{
   game.ccunlocked = game.savefile.data.ccunlocked;
   game.ccdone = game.savefile.data.ccunlocked;
}
if(game.savefile.data.drfetunlocked != undefined)
{
   game.drfetunlocked = game.savefile.data.drfetunlocked;
   game.drfetdone = game.savefile.data.drfetunlocked;
}
if(game.savefile.data.gishunlocked != undefined)
{
   game.gishunlocked = game.savefile.data.gishunlocked;
   game.gishdone = game.savefile.data.gishunlocked;
}
if(game.savefile.data.coffeeunlocked != undefined)
{
   game.coffeeunlocked = game.savefile.data.coffeeunlocked;
   game.coffeedone = game.savefile.data.coffeeunlocked;
}
game.blackout = function(p)
{
   if(!_root.blackout && p)
   {
      _root.createEmptyMovieClip("blackout",game.depth);
      game.depth = game.depth + 1;
      _root.blackout.lineStyle(1,0,100);
      _root.blackout.moveTo(0,0);
      _root.blackout._x = 0;
      _root.blackout._y = 0;
      _root.blackout.beginFill(0,100);
      _root.blackout.lineTo(0,0);
      _root.blackout.lineTo(300,0);
      _root.blackout.lineTo(300,500);
      _root.blackout.lineTo(0,500);
      _root.blackout.lineTo(0,0);
      _root.blackout._alpha = 0;
   }
   else if(p && _root.blackout._alpha < 50)
   {
      _root.blackout._alpha = _root.blackout._alpha + 10;
   }
   else if(!p && _root.blackout)
   {
      _root.blackout.removeMovieClip();
   }
};
game.mapcreator = function()
{
   if(game.creationStage == 1)
   {
      tutlevel = 1;
      game.pause = true;
      game.notimport = true;
      game.creationStage = 2;
   }
   if(_root.blackout._alpha >= 50 && _root.blackout._alpha != undefined && game.creationStage == 2)
   {
      game.creationArray = new Array();
      _root.createEmptyMovieClip("textbox",game.depth);
      game.depth = game.depth + 1;
      _root.textbox.createTextField("fieldHeight",game.depth,-10000,-10000,game.textOneW,game.textOneH);
      game.depth = game.depth + 1;
      _root.textbox.fieldHeight.type = "input";
      _root.textbox.fieldHeight._y = Stage.height / 2 - game.textOneH / 2;
      _root.textbox.fieldHeight._x = Stage.width / 2 - game.textOneW / 2;
      _root.textbox.fieldHeight.maxChars = 3;
      _root.textbox.fieldHeight.background = true;
      _root.textbox.fieldHeight.backgroundColor = 3355443;
      _root.textbox.fieldHeight.textColor = 16777215;
      _root.textbox.fieldHeight.text = 25;
      _root.textbox.fieldHeight.restrict = "0-9";
      _root.textbox.createTextField("fieldHeightTwo",game.depth,-10000,-10000,game.textSevenW,game.textSevenH);
      game.depth = game.depth + 1;
      _root.textbox.fieldHeightTwo.selectable = false;
      _root.textbox.fieldHeightTwo.wordWrap = true;
      _root.textbox.fieldHeightTwo.text = "To begin building your custom map, please first enter the desired height of your map and press the \"Build Map\" button.  It is strongly recommended that you keep your map height between 25 and 100.\n\nIt is also highly recommended that you read the manual in the author\'s notes before attempting to make a map.";
      _root.textbox.fieldHeightTwo._y = 50;
      _root.textbox.fieldHeightTwo._x = Stage.width / 2 - game.textSevenW / 2;
      _root.textbox.fieldHeightTwo.textColor = 16777215;
      _root.textbox.createTextField("bgType",game.depth,-10000,-10000,game.textFiveW,game.textFiveH);
      game.depth = game.depth + 1;
      _root.textbox.bgType._y = Stage.height / 2 - game.textOneH / 2 + game.textOneH + 10;
      _root.textbox.bgType._x = Stage.width / 2 - game.textFiveW / 2;
      _root.textbox.bgType.background = true;
      _root.textbox.bgType.backgroundColor = 3355443;
      _root.textbox.bgType.textColor = 16777215;
      _root.textbox.bgType.selectable = false;
      _root.textbox.bgType.text = "Background: Forest";
      bgtemp = 1;
      _root.textbox.createTextField("scrollselect",game.depth,-10000,-10000,game.textFiveW,game.textFiveH);
      game.depth = game.depth + 1;
      _root.textbox.scrollselect._y = Stage.height / 2 - game.textOneH / 2 + game.textOneH * 2 + 20;
      _root.textbox.scrollselect._x = Stage.width / 2 - game.textFiveW / 2;
      _root.textbox.scrollselect.background = true;
      _root.textbox.scrollselect.backgroundColor = 3355443;
      _root.textbox.scrollselect.textColor = 16777215;
      _root.textbox.scrollselect.text = "Scrolling: Normal";
      scrolltypetemp = 1;
      _root.textbox.scrollselect.selectable = false;
      _root.textbox.createTextField("forward",game.depth,-10000,-10000,game.textFiveW,game.textFiveH);
      game.depth = game.depth + 1;
      _root.textbox.forward._y = 430;
      _root.textbox.forward._x = Stage.width / 2 - game.textFiveW / 2;
      _root.textbox.forward.background = true;
      _root.textbox.forward.backgroundColor = 3355443;
      _root.textbox.forward.textColor = 16777215;
      _root.textbox.forward.selectable = false;
      _root.textbox.forward.text = "Build Map";
      game.creationStage = 3;
   }
   else if(game.creationStage == 3)
   {
      mapadvance = false;
      if(Key.isDown(27) && game.escape == true)
      {
         game.escape = false;
         game.menuStage = "mainmenu";
         game.menuBuilt = false;
         _root.textbox.removeMovieClip();
         game.creationStage = 1;
      }
      if(_xmouse > _root.textbox.scrollselect._x && _xmouse < _root.textbox.scrollselect._x + _root.textbox.scrollselect._width && _ymouse > _root.textbox.scrollselect._y && _ymouse < _root.textbox.scrollselect._y + _root.textbox.scrollselect._height)
      {
         _root.textbox.scrollselect.backgroundColor = 10066329;
         if(game.mouse == true && game.mouseup == true)
         {
            game.mouseup = false;
            if(scrolltypetemp == 0)
            {
               scrolltypetemp = 1;
               _root.textbox.scrollselect.text = "Scrolling: Normal";
            }
            else if(scrolltypetemp == 1)
            {
               scrolltypetemp = 2;
               _root.textbox.scrollselect.text = "Scrolling: Fast";
            }
            else if(scrolltypetemp == 2)
            {
               scrolltypetemp = 0;
               _root.textbox.scrollselect.text = "Scrolling: None";
            }
         }
      }
      else
      {
         _root.textbox.scrollselect.backgroundColor = 3355443;
      }
      if(_xmouse > _root.textbox.bgType._x && _xmouse < _root.textbox.bgType._x + _root.textbox.bgType._width && _ymouse > _root.textbox.bgType._y && _ymouse < _root.textbox.bgType._y + _root.textbox.bgType._height)
      {
         _root.textbox.bgType.backgroundColor = 10066329;
         if(game.mouse == true && game.mouseup == true)
         {
            game.mouseup = false;
            if(bgtemp == 1)
            {
               bgtemp = 2;
               _root.textbox.bgType.text = "Background: Factory";
            }
            else if(bgtemp == 2)
            {
               bgtemp = 3;
               _root.textbox.bgType.text = "Background: Hell";
            }
            else if(bgtemp == 3)
            {
               bgtemp = 1;
               _root.textbox.bgType.text = "Background: Forest";
            }
         }
      }
      else
      {
         _root.textbox.bgType.backgroundColor = 3355443;
      }
      if(_xmouse > _root.textbox.forward._x && _xmouse < _root.textbox.forward._x + _root.textbox.forward._width && _ymouse > _root.textbox.forward._y && _ymouse < _root.textbox.forward._y + _root.textbox.forward._height)
      {
         _root.textbox.forward.backgroundColor = 10066329;
         if(game.mouse == true && game.mouseup == true)
         {
            game.mouseup = false;
            mapadvance = true;
         }
      }
      else
      {
         _root.textbox.forward.backgroundColor = 3355443;
      }
      _root.textbox.scrollselect.setTextFormat(game.textOneFormat);
      _root.textbox.fieldHeight.setTextFormat(game.textOneFormat);
      _root.textbox.bgType.setTextFormat(game.textOneFormat);
      _root.textbox.fieldHeightTwo.setTextFormat(game.textOneFormat);
      _root.textbox.forward.setTextFormat(game.textOneFormat);
      game.textOneExtract = Number(_root.textbox.fieldHeight.text);
      if((Key.isDown(13) && game.enter == true || mapadvance == true) && game.textOneExtract >= 25)
      {
         mapadvance = false;
         game.textOneExtract = Number(_root.textbox.fieldHeight.text);
         game.bgExtract = bgtemp;
         game.enter = false;
         _root.textbox.removeMovieClip();
         game.pause = false;
         game.creationStage = 4;
         stopAllSounds();
         muson = false;
      }
   }
   else if(game.creationStage == 4)
   {
      game.creationTileW = Stage.width / game.tileW;
      game.creationTileH = Stage.height / game.tileH;
      game.creationArray.length = game.creationTileW;
      i = 0;
      while(i < game.creationTileW)
      {
         game.creationArray[i] = new Array();
         game.creationArray[i].length = game.textOneExtract;
         i++;
      }
      game.creationYlength = game.creationArray[0].length * game.tileH;
      i = 0;
      while(i < game.creationTileW)
      {
         j = 0;
         while(j < game.textOneExtract)
         {
            game.creationArray[i][j] = 0;
            j++;
         }
         i++;
      }
      game.clip.removeMovieClip();
      _root.createEmptyMovieClip("OverL",game.depth);
      game.clip = _root.OverL;
      i = 0;
      while(i < game.creationTileW)
      {
         j = 0;
         while(j < game.textOneExtract)
         {
            var _loc2_ = "t_" + i + "_" + j;
            game[_loc2_] = new Function();
            game[_loc2_].type = game.creationArray[i][j];
            game[_loc2_].x = i * game.tileW;
            game[_loc2_].y = j * game.tileH;
            game[_loc2_].mouse = true;
            game.clip.attachMovie("tile",_loc2_,game.depth);
            game.clip[_loc2_]._x = game[_loc2_].x;
            game.clip[_loc2_]._y = game[_loc2_].y;
            game.clip[_loc2_].gotoAndStop(game[_loc2_].type + 1);
            game.depth = game.depth + 1;
            j++;
         }
         i++;
      }
      game.clip._y = (game.creationYlength - Stage.height) * -1;
      game.mouseCheckW = game.creationTileW;
      game.mouseCheckH = game.textOneExtract;
      _root.bg.removeMovieClip();
      _root.attachMovie("bg","bg",1);
      _root.bg.gotoAndStop(game.bgExtract + 1);
      _root.bg._y = (_root.bg._height - Stage.height) * -1;
      game.creationStage = 5;
   }
   else if(game.creationStage == 5)
   {
      game.creatorTutorial();
      if(!_root.tileyholder)
      {
         _root.attachMovie("tile","tileyholder",game.depth);
         game.depth = game.depth + 1;
      }
      else
      {
         _root.tileyholder._x = _xmouse - game.tileW / 2;
         _root.tileyholder._y = _ymouse - game.tileH / 2;
         _root.tileyholder.gotoAndStop(game.ctiletype + 1);
      }
      if(Key.isDown(27) && game.escape == true)
      {
         game.escape = false;
         if(game.pause == false)
         {
            game.pause = true;
            pw = 1;
            ph = 1;
         }
         else if(game.pause == true)
         {
            game.pause = false;
            _root.pallete.removeMovieClip();
            game.palletebuilt = false;
         }
      }
      if(game.pause == false)
      {
         if(Key.isDown(40) && game.clip._y > (game.creationYlength - Stage.height) * -1)
         {
            game.clip._y = game.clip._y - 5;
            nesteps = (game.creationYlength + Stage.height) / 5;
            neintervall1 = 450 / nesteps;
            neintervall2 = 400 / nesteps;
            neintervall3 = 350 / nesteps;
            _root.bg.l1._y = _root.bg.l1._y - neintervall1;
            _root.bg.l2._y = _root.bg.l2._y - neintervall2;
            _root.bg.l3._y = _root.bg.l3._y - neintervall3;
         }
         if(Key.isDown(38) && game.clip._y < 0)
         {
            game.clip._y = game.clip._y + 5;
            nesteps = (game.creationYlength + Stage.height) / 5;
            neintervall1 = 450 / nesteps;
            neintervall2 = 400 / nesteps;
            neintervall3 = 350 / nesteps;
            _root.bg.l1._y = _root.bg.l1._y + neintervall1;
            _root.bg.l2._y = _root.bg.l2._y + neintervall2;
            _root.bg.l3._y = _root.bg.l3._y + neintervall3;
         }
         if(game.mouse == true)
         {
            game.mouseTileX = Math.floor(_xmouse / game.tileW);
            game.mouseTileY = Math.floor((_ymouse - game.clip._y) / game.tileH);
            if(game["t_" + game.mouseTileX + "_" + game.mouseTileY].mouse == true)
            {
               game["t_" + game.mouseTileX + "_" + game.mouseTileY].type = game.ctiletype;
               game.creationArray[game.mouseTileX][game.mouseTileY] = game.ctiletype;
               game.clip["t_" + game.mouseTileX + "_" + game.mouseTileY].gotoAndStop(game["t_" + game.mouseTileX + "_" + game.mouseTileY].type + 1);
               game["t_" + game.mouseTileX + "_" + game.mouseTileY].mouse = false;
            }
         }
         if(Key.isDown(46))
         {
            game.mouseTileX = Math.floor(_xmouse / game.tileW);
            game.mouseTileY = Math.floor((_ymouse - game.clip._y) / game.tileH);
            game["t_" + game.mouseTileX + "_" + game.mouseTileY].type = 0;
            game.creationArray[game.mouseTileX][game.mouseTileY] = 0;
            game.clip["t_" + game.mouseTileX + "_" + game.mouseTileY].gotoAndStop(1);
         }
         if(Key.isDown(13) && game.enter == true)
         {
            game.enter = false;
            _root.tutBox.removeMovieClip();
            _root.tileyholder.removeMovieClip();
            game.creationStage = 6;
         }
      }
      else if(game.pause == true && _root.blackout._alpha > 50 && _root.blackout._alpha != undefined)
      {
         game.mouseTileX = Math.floor(_xmouse / game.tileW);
         game.mouseTileY = Math.floor(_ymouse / game.tileH);
         if(!game.palletebuilt)
         {
            _root.createEmptyMovieClip("pallete",game.depth);
            game.depth = game.depth + 1;
            p = 0;
            while(p <= game.tilenumber)
            {
               pname = "p_" + pw + "_" + ph;
               _root.pallete.attachMovie("tile",pname,game.depth);
               game.depth = game.depth + 1;
               _root.pallete[pname]._x = pw * game.tileW;
               pw++;
               _root.pallete[pname]._y = ph * game.tileH;
               _root.pallete[pname].gotoAndStop(p + 1);
               _root.pallete[pname].type = p;
               if(pw > 13)
               {
                  pw = 1;
                  ph++;
               }
               p++;
            }
            game.palletebuilt = true;
         }
         else if(game.mouse == true)
         {
            if(_root.pallete["p_" + game.mouseTileX + "_" + game.mouseTileY].type != undefined)
            {
               game.ctiletype = _root.pallete["p_" + game.mouseTileX + "_" + game.mouseTileY].type;
            }
         }
      }
   }
   else if(game.creationStage == 6)
   {
      if(!_root.tileyholder)
      {
         _root.attachMovie("char","tileyholder",game.depth);
         game.depth = game.depth + 1;
         _root.tileyholder.gotoAndStop(1);
      }
      _root.tileyholder._x = _xmouse - _root.tileyholder._width / 2;
      _root.tileyholder._y = _ymouse - _root.tileyholder._height / 2;
      if(Key.isDown(40) && game.clip._y > (game.creationYlength - Stage.height) * -1)
      {
         game.clip._y = game.clip._y - 5;
         nesteps = (game.creationYlength + Stage.height) / 5;
         neintervall1 = 450 / nesteps;
         neintervall2 = 400 / nesteps;
         neintervall3 = 350 / nesteps;
         _root.bg.l1._y = _root.bg.l1._y - neintervall1;
         _root.bg.l2._y = _root.bg.l2._y - neintervall2;
         _root.bg.l3._y = _root.bg.l3._y - neintervall3;
      }
      if(Key.isDown(38) && game.clip._y < 0)
      {
         game.clip._y = game.clip._y + 5;
         nesteps = (game.creationYlength + Stage.height) / 5;
         neintervall1 = 450 / nesteps;
         neintervall2 = 400 / nesteps;
         neintervall3 = 350 / nesteps;
         _root.bg.l1._y = _root.bg.l1._y + neintervall1;
         _root.bg.l2._y = _root.bg.l2._y + neintervall2;
         _root.bg.l3._y = _root.bg.l3._y + neintervall3;
      }
      game.mouseTileX = Math.floor(_xmouse / game.tileW);
      game.mouseTileY = Math.floor((_ymouse - game.clip._y) / game.tileH);
      if(game.mouse == true && game.mouseup == true)
      {
         game.clip.trialchar.removeMovieClip();
         game.mouseup = false;
         game.trialCharx = game.mouseTileX;
         game.trialChary = game.mouseTileY;
         game.clip.attachMovie("char","trialchar",game.depth);
         game.depth = game.depth + 1;
         game.clip.trialchar._x = game.trialCharx * game.tileW + (game.tileW / 2 - game.clip.trialchar._width / 2);
         game.clip.trialchar._y = game.trialChary * game.tileW + (game.tileH - game.clip.trialchar._height);
      }
      if(Key.isDown(13) && game.enter == true)
      {
         game.enter = false;
         _root.tileyholder.removeMovieClip();
         game.creationStage = 7;
      }
   }
   else if(game.creationStage == 7)
   {
      game.pause = true;
      if(_root.blackout._alpha >= 50)
      {
         game.creationStage = 8;
      }
   }
   else if(game.creationStage == 8)
   {
      _root.createEmptyMovieClip("textbox",game.depth);
      game.depth = game.depth + 1;
      _root.textbox.createTextField("savegame",game.depth,-10000,-10000,game.textTwoW,game.textTwoH);
      game.depth = game.depth + 1;
      _root.textbox.savegame.type = "input";
      _root.textbox.savegame._y = Stage.height / 2 - game.textTwoH / 2;
      _root.textbox.savegame._x = Stage.width / 2 - game.textTwoW / 2;
      _root.textbox.savegame.maxChars = 20;
      _root.textbox.savegame.background = true;
      _root.textbox.savegame.backgroundColor = 3355443;
      _root.textbox.savegame.textColor = 16777215;
      _root.textbox.savegame.restrict = "a-z A-Z";
      _root.textbox.createTextField("savegameTwo",game.depth,-10000,-10000,game.textSevenW,game.textSevenH);
      game.depth = game.depth + 1;
      _root.textbox.savegameTwo.selectable = false;
      _root.textbox.savegameTwo.wordWrap = true;
      _root.textbox.savegameTwo.text = "Please title your map...";
      _root.textbox.savegameTwo._y = 200;
      _root.textbox.savegameTwo._x = Stage.width / 2 - game.textSevenW / 2;
      _root.textbox.savegameTwo.textColor = 16777215;
      _root.textbox.createTextField("forward",game.depth,-10000,-10000,game.textFiveW,game.textFiveH);
      game.depth = game.depth + 1;
      _root.textbox.forward._y = 280;
      _root.textbox.forward._x = Stage.width / 2 - game.textFiveW / 2;
      _root.textbox.forward.background = true;
      _root.textbox.forward.backgroundColor = 3355443;
      _root.textbox.forward.textColor = 16777215;
      _root.textbox.forward.selectable = false;
      _root.textbox.forward.text = "Save";
      game.creationStage = 9;
   }
   else if(game.creationStage == 9)
   {
      _root.textbox.savegame.setTextFormat(game.textOneFormat);
      _root.textbox.savegameTwo.setTextFormat(game.textOneFormat);
      _root.textbox.forward.setTextFormat(game.textOneFormat);
      if(_xmouse > _root.textbox.forward._x && _xmouse < _root.textbox.forward._x + _root.textbox.forward._width && _ymouse > _root.textbox.forward._y && _ymouse < _root.textbox.forward._y + _root.textbox.forward._height)
      {
         _root.textbox.forward.backgroundColor = 10066329;
         if(game.mouse == true && game.mouseup == true)
         {
            game.mouseup = false;
            savemoveon = true;
         }
      }
      else
      {
         _root.textbox.forward.backgroundColor = 3355443;
      }
      if(Key.isDown(13) && game.enter == true || savemoveon == true)
      {
         newOne = new Array();
         savemoveon = false;
         i = 0;
         while(i < game.creationArray.length)
         {
            newOne.push(game.creationArray[i]);
            i++;
         }
         _loc2_ = _root.textbox.savegame.text;
         game.custom["savegame" + game.customLevels] = new Object();
         game.custom["savegame" + game.customLevels].array = newOne;
         game.custom["savegame" + game.customLevels].name = _loc2_;
         game.custom["savegame" + game.customLevels].bg = game.bgExtract + 1;
         game.custom["savegame" + game.customLevels].char = {xtile:game.trialCharx,ytile:game.trialChary};
         game.custom["savegame" + game.customLevels].scroll = scrolltypetemp;
         game.enter = false;
         _root.textbox.removeMovieClip();
         game.creationStage = 10;
      }
   }
   else if(game.creationStage == 10 && game.notimport == true)
   {
      _root.bg.removeMovieClip();
      _root.attachMovie("bg","bg",1);
      _root.bg.gotoAndStop(1);
      _root.bg.introduction.gotoAndStop(290);
      titleMenuSound.start(0,99);
      printArray = "[[";
      i = 0;
      while(i < game.mouseCheckW)
      {
         j = 0;
         while(j < game.mouseCheckH)
         {
            if(game.custom["savegame" + game.customLevels].array[i][j + 1] != undefined)
            {
               printArray = printArray + game.custom["savegame" + game.customLevels].array[i][j] + ",";
            }
            else
            {
               printArray = printArray + game.custom["savegame" + game.customLevels].array[i][j];
            }
            j++;
         }
         if(game.custom["savegame" + game.customLevels].array[i + 1])
         {
            printArray = printArray + "],\n[";
         }
         else
         {
            printArray = printArray + "]]" + game.trialCharx + "," + game.trialChary + "," + game.bgExtract + "," + scrolltypetemp + ",";
         }
         i++;
      }
      _root.createEmptyMovieClip("textbox",game.depth);
      game.depth = game.depth + 1;
      game.depth = game.depth + 1;
      _root.textbox.attachMovie("edbut","edbut",game.depth);
      _root.textbox.edbut._x = 100;
      _root.textbox.edbut._y = 430;
      _root.textbox.createTextField("results",game.depth,-10000,-10000,game.textThreeW,game.textThreeH);
      game.depth = game.depth + 1;
      _root.textbox.results._y = Stage.height / 2 - game.textThreeH / 2 - 40;
      _root.textbox.results._x = Stage.width / 2 - game.textThreeW / 2;
      _root.textbox.results.background = true;
      _root.textbox.results.backgroundColor = 3355443;
      _root.textbox.results.textColor = 16777215;
      _root.textbox.results.text = printArray;
      _root.textbox.results.setTextFormat(game.textOneFormat);
      _root.textbox.createTextField("exportexp",game.depth,-10000,-10000,game.textSevenW,game.textSevenH);
      game.depth = game.depth + 1;
      _root.textbox.exportexp.selectable = false;
      _root.textbox.exportexp.wordWrap = true;
      _root.textbox.exportexp.text = "Copy this code and share the level you just made with your freinds!  They can then take the code and use it with the \"Import\" feature.  If your map is especially good, send it to souldescen@aol.com\n\n(press enter to advance)";
      _root.textbox.exportexp._y = 350;
      _root.textbox.exportexp._x = Stage.width / 2 - game.textSevenW / 2;
      _root.textbox.exportexp.textColor = 16777215;
      _root.textbox.exportexp.setTextFormat(game.textOneFormat);
      game.clip.removeMovieClip();
      _root.createEmptyMovieClip("OverL",game.depth);
      game.clip = _root.OverL;
      game.creationStage = 11;
   }
   else if(game.creationStage == 10 && game.notimport == false)
   {
      game.clip.removeMovieClip();
      _root.createEmptyMovieClip("OverL",game.depth);
      game.clip = _root.OverL;
      game.creationStage = 12;
      titleMenuSound.start(0,99);
      _root.bg.removeMovieClip();
      _root.attachMovie("bg","bg",1);
      _root.bg.gotoAndStop(1);
      _root.bg.introduction.gotoAndStop(290);
   }
   else if(Key.isDown(13) && game.enter == true && game.creationStage == 11 || game.creationStage == 12)
   {
      _root.textbox.removeMovieClip();
      game.savefile.data["custommaparray" + game.customLevels] = game.custom["savegame" + game.customLevels].array;
      game.savefile.data["custommapname" + game.customLevels] = game.custom["savegame" + game.customLevels].name;
      game.savefile.data["customchar" + game.customLevels] = game.custom["savegame" + game.customLevels].char;
      game.savefile.data["custombg" + game.customLevels] = game.custom["savegame" + game.customLevels].bg;
      game.savefile.data["customscroll" + game.customLevels] = game.custom["savegame" + game.customLevels].scroll;
      game.customLevels = game.customLevels + 1;
      game.savefile.data.customAmount = game.customLevels;
      game.savefile.flush();
      if(game.deletor)
      {
         game.deleteFile(game.deletor);
         game.deletor = false;
      }
      game.menuBuilt = false;
      game.enter = false;
      game.menuStage = "mainmenu";
      game.creationStage = 1;
   }
};
game.buildmap = function(map, char)
{
   game.halfvisx = int(game.visx / 2);
   game.halfvisy = int(game.visy / 2);
   mapWidth = map.length;
   mapHeight = map[0].length;
   game.mVW = Math.floor(Stage.width / game.tileW);
   game.mVH = Math.floor(Stage.height / game.tileH) + 2;
   game.mW = map.length;
   game.mH = map[0].length;
   game.currentStageY = mapHeight - game.mVH;
   game.cliprealheight = map[0].length * game.tileH;
   i = 0;
   while(i < mapHeight)
   {
      j = 0;
      while(j < mapWidth)
      {
         var _loc1_ = "t_" + j + "_" + i;
         game.use[_loc1_] = new game."tile" + map[j][i]();
         game.use[_loc1_].x = j * game.tileW;
         game.use[_loc1_].y = i * game.tileH;
         j++;
      }
      i++;
   }
   i = game.currentStageY;
   while(i < game.mVH + game.currentStageY)
   {
      j = 0;
      while(j < game.mVW)
      {
         if(i >= 0)
         {
            _loc1_ = "t_" + j + "_" + i;
            game.clip.attachMovie("tile",_loc1_,game.depth);
            game.depth = game.depth + 1;
            game.clip[_loc1_].gotoAndStop(game.use[_loc1_].frame);
            game.clip[_loc1_]._x = game.use[_loc1_].x;
            game.clip[_loc1_]._y = game.use[_loc1_].y;
         }
         j++;
      }
      i++;
   }
   game.clip._y = (game.cliprealheight - Stage.height) * -1;
   if(game.bgirlon == true)
   {
      game.clip.attachMovie("bchar","char",game.depth);
   }
   else if(game.ccon == true)
   {
      game.clip.attachMovie("cchar","char",game.depth);
   }
   else if(game.drfeton == true)
   {
      game.clip.attachMovie("fchar","char",game.depth);
   }
   else if(game.gishon == true)
   {
      game.clip.attachMovie("gchar","char",game.depth);
   }
   else
   {
      game.clip.attachMovie("char","char",game.depth);
   }
   game.depth = game.depth + 1;
   char.clip = game.clip.char;
   char.width = (char.clip._width - 6) / 2;
   char.height = char.clip._height / 2;
   char.x = char.xtile * game.tileW + (game.tileW / 2 - char.width);
   char.y = char.ytile * game.tileH + (game.tileH - char.height * 2);
   char.jump = false;
   char.clip._x = char.x;
   char.clip._y = char.y;
};
game.detectkeys = function(ob)
{
   game.grabCorners(ob.x - 1,ob.y,ob);
   if(!ob.upleft || !ob.downleft)
   {
      game.xcurrentspeed = 0;
   }
   game.grabCorners(ob.x - 1,ob.y + 1,ob);
   if(ob.uprightK && ob.downrightK || ob.downrightK && ob.downleftK || ob.upleftK && ob.uprightK || ob.downleftK && ob.upleftK)
   {
      game.death = true;
   }
   else if(ob.uprightK && ob.downright && ob.downleft && ob.upleft || ob.downrightK && ob.downleft && ob.upleft && ob.upright || ob.upleftK && ob.upright && ob.downleft && ob.downright || ob.downleftK && ob.upleft && ob.upright && ob.downright)
   {
      game.death = true;
      trace("thisone");
   }
   else if(ob.upright && ob.downleft && ob.upleft && ob.downrightK || ob.downright && ob.upleft && ob.upright && ob.downleftK || ob.upleft && ob.downleft && ob.downright && ob.uprightK || ob.downleft && ob.upright && ob.downright && ob.upleftK)
   {
      game.death = true;
      trace("thistwo");
   }
   game.grabCorners(ob.x - 1,ob.y - 1,ob);
   if(ob.uprightK && ob.downrightK || ob.downrightK && ob.downleftK || ob.upleftK && ob.uprightK || ob.downleftK && ob.upleftK)
   {
      game.death = true;
   }
   else if(ob.uprightK && ob.downright && ob.downleft && ob.upleft || ob.downrightK && ob.downleft && ob.upleft && ob.upright || ob.upleftK && ob.upright && ob.downleft && ob.downright || ob.downleftK && ob.upleft && ob.upright && ob.downright)
   {
      game.death = true;
      trace("thisone");
   }
   else if(ob.upright && ob.downleft && ob.upleft && ob.downrightK || ob.downright && ob.upleft && ob.upright && ob.downleftK || ob.upleft && ob.downleft && ob.downright && ob.uprightK || ob.downleft && ob.upright && ob.downright && ob.upleftK)
   {
      game.death = true;
      trace("thistwo");
   }
   game.grabCorners(ob.x + 1,ob.y,ob);
   if(!ob.upright || !ob.downright)
   {
      game.xcurrentspeed = 0;
   }
   game.grabCorners(ob.x + 1,ob.y + 1,ob);
   if(ob.uprightK && ob.downrightK || ob.downrightK && ob.downleftK || ob.upleftK && ob.uprightK || ob.downleftK && ob.upleftK)
   {
      game.death = true;
   }
   else if(ob.uprightK && ob.downright && ob.downleft && ob.upleft || ob.downrightK && ob.downleft && ob.upleft && ob.upright || ob.upleftK && ob.upright && ob.downleft && ob.downright || ob.downleftK && ob.upleft && ob.upright && ob.downright)
   {
      game.death = true;
      trace("thisone");
   }
   else if(ob.upright && ob.downleft && ob.upleft && ob.downrightK || ob.downright && ob.upleft && ob.upright && ob.downleftK || ob.upleft && ob.downleft && ob.downright && ob.uprightK || ob.downleft && ob.upright && ob.downright && ob.upleftK)
   {
      game.death = true;
      trace("thistwo");
   }
   game.grabCorners(ob.x + 1,ob.y - 1,ob);
   if(ob.uprightK && ob.downrightK || ob.downrightK && ob.downleftK || ob.upleftK && ob.uprightK || ob.downleftK && ob.upleftK)
   {
      game.death = true;
   }
   else if(ob.uprightK && ob.downright && ob.downleft && ob.upleft || ob.downrightK && ob.downleft && ob.upleft && ob.upright || ob.upleftK && ob.upright && ob.downleft && ob.downright || ob.downleftK && ob.upleft && ob.upright && ob.downright)
   {
      game.death = true;
      trace("thisone");
   }
   else if(ob.upright && ob.downleft && ob.upleft && ob.downrightK || ob.downright && ob.upleft && ob.upright && ob.downleftK || ob.upleft && ob.downleft && ob.downright && ob.uprightK || ob.downleft && ob.upright && ob.downright && ob.upleftK)
   {
      game.death = true;
      trace("thistwo");
   }
   if(Key.isDown(39) && game.xcurrentspeed < game.xcharspeed)
   {
      game.cdir = 1;
      game.xcurrentspeed = game.xcurrentspeed + 1;
      if(ob.jump == false)
      {
         game.xcurrentspeed = game.xcurrentspeed + 1;
      }
   }
   else if(Key.isDown(37) && game.xcurrentspeed > game.xcharspeed * -1)
   {
      game.cdir = -1;
      game.xcurrentspeed = game.xcurrentspeed - 1;
      if(ob.jump == false)
      {
         game.xcurrentspeed = game.xcurrentspeed - 1;
      }
   }
   else if(!Key.isDown(37) && !Key.isDown(39) || Key.isDown(37) && Key.isDown(39))
   {
      if(game.xcurrentspeed < 2 && game.xcurrentspeed > -2)
      {
         game.xcurrentspeed = 0;
      }
      else if(game.xcurrentspeed > 0)
      {
         game.xcurrentspeed = game.xcurrentspeed - 0.25;
         if(ob.jump == false)
         {
            game.xcurrentspeed = game.xcurrentspeed - 2.75;
         }
      }
      else if(game.xcurrentspeed < 0)
      {
         game.xcurrentspeed = game.xcurrentspeed + 0.25;
         if(ob.jump == false)
         {
            game.xcurrentspeed = game.xcurrentspeed + 2.75;
         }
      }
   }
   game.jumpcheck(ob);
   if(ob.velocity > 0)
   {
      diry = 1;
   }
   else if(ob.velocity < 0)
   {
      diry = -1;
   }
   else
   {
      diry = 0;
   }
   if(game.xcurrentspeed > 0)
   {
      dirx = 1;
   }
   else if(game.xcurrentspeed < 0)
   {
      dirx = -1;
   }
   else
   {
      dirx = 0;
   }
   if(ob.velocity - ob.ypull < game.maxVel && ob.velocity - ob.ypull > game.maxVel * -1)
   {
      ob.velocity = ob.velocity - ob.ypull;
   }
   else if(ob.velocity - ob.ypull > game.maxVel)
   {
      ob.velocity = game.maxVel;
   }
   else if(ob.velocity - ob.ypull < game.maxVel * -1)
   {
      ob.velocity = game.maxVel * -1;
   }
   game.moveChar(ob,dirx,Math.abs(game.xcurrentspeed / 2),diry,Math.abs(ob.velocity / 2));
   game.moveChar(ob,dirx,Math.abs(game.xcurrentspeed / 2),diry,Math.abs(ob.velocity / 2));
};
game.moveChar = function(ob, dirx, xspeed, diry, yspeed)
{
   game.grabCorners(ob.x + dirx * xspeed,ob.y,ob);
   if(dirx == -1)
   {
      ob.xtileTwo = Math.floor((ob.x - dirx * xspeed) / game.tileW);
      if(ob.upleft && ob.downleft)
      {
         ob.x = ob.x + xspeed * dirx;
      }
      else
      {
         ob.x = ob.xtileTwo * game.tileW;
      }
      if(ob.upleftK && ob.downleftK)
      {
         game.death = true;
      }
   }
   else if(dirx == 1)
   {
      ob.xtileTwo = Math.floor((ob.x + dirx * xspeed) / game.tileW);
      if(ob.upright && ob.downright)
      {
         ob.x = ob.x + xspeed * dirx;
      }
      else
      {
         ob.x = ob.xtileTwo * game.tileW + (game.tileW - ob.width * 2);
      }
      if(ob.uprightK && ob.downrightK)
      {
         game.death = true;
      }
   }
   game.grabCorners(ob.x,ob.y + diry * yspeed,ob);
   if(diry == -1)
   {
      ob.ytileTwo = Math.floor((ob.y - diry * yspeed) / game.tileH);
      if(ob.upleft && ob.upright)
      {
         ob.y = ob.y + yspeed * diry;
      }
      else
      {
         ob.y = ob.ytileTwo * game.tileH;
         ob.velocity = 0;
      }
      if(ob.upleftK && ob.uprightK)
      {
         game.death = true;
      }
   }
   else if(diry == 1)
   {
      ob.ytileTwo = Math.floor((ob.y + diry * yspeed) / game.tileH);
      if(ob.downleft && ob.downright)
      {
         ob.y = ob.y + yspeed * diry;
      }
      else
      {
         ob.y = ob.ytileTwo * game.tileH + (game.tileH - ob.height * 2);
         ob.velocity = 0;
         ob.jump = false;
         soundplay = "jump" + (random(4) + 1);
         _root[soundplay].start(0,1);
         if(game.bgirlon == true)
         {
            game.clip.attachMovie("blands","dust" + game.dustn,game.depth);
         }
         else if(game.ccon == true)
         {
            game.clip.attachMovie("clands","dust" + game.dustn,game.depth);
         }
         else if(game.gishon == true)
         {
            game.clip.attachMovie("glands","dust" + game.dustn,game.depth);
         }
         else if(!game.drfeton)
         {
            game.clip.attachMovie("lands","dust" + game.dustn,game.depth);
         }
         game.depth = game.depth + 1;
         game.clip["dust" + game.dustn]._x = ob.x - (ob.width * 2 - game.clip["dust" + game.dustn]._width / 2);
         game.clip["dust" + game.dustn]._y = ob.y + ob.height;
         game.clip["dust" + game.dustn].timer = 12;
         game.dustArray.push(game.dustn);
         game.dustn = game.dustn + 1;
         game.landanimation = true;
         game.grabCorners(ob.x,ob.y + 1,ob);
         if(!ob.downleftBLD && !ob.downleft && !ob.downleftNB)
         {
            if(game.bgirlon == true)
            {
               game.clip.attachMovie("bhmarks","mark" + game.markn,game.depth);
            }
            else if(game.ccon == true)
            {
               game.clip.attachMovie("chmarks","mark" + game.markn,game.depth);
            }
            else if(game.gishon == true)
            {
               game.clip.attachMovie("ghmarks","mark" + game.markn,game.depth);
            }
            else if(!game.drfeton)
            {
               game.clip.attachMovie("hmarks","mark" + game.markn,game.depth);
            }
            game.depth = game.depth + 1;
            game.clip["mark" + game.markn]._x = ob.leftX * game.tileW;
            game.clip["mark" + game.markn]._y = ob.downY * game.tileH;
            game.clip["mark" + game.markn].cacheAsBitmap = true;
            game.markn = game.markn + 1;
            game.use["t_" + ob.leftX + "_" + ob.downY].bloodDown = true;
         }
         if(!ob.downrightBLD && !ob.downright && !ob.downrightNB)
         {
            if(game.bgirlon == true)
            {
               game.clip.attachMovie("bhmarks","mark" + game.markn,game.depth);
            }
            else if(game.ccon == true)
            {
               game.clip.attachMovie("chmarks","mark" + game.markn,game.depth);
            }
            else if(game.gishon == true)
            {
               game.clip.attachMovie("ghmarks","mark" + game.markn,game.depth);
            }
            else if(!game.drfeton)
            {
               game.clip.attachMovie("hmarks","mark" + game.markn,game.depth);
            }
            game.depth = game.depth + 1;
            game.clip["mark" + game.markn]._x = ob.rightX * game.tileW;
            game.clip["mark" + game.markn]._y = ob.downY * game.tileH;
            game.clip["mark" + game.markn].cacheAsBitmap = true;
            game.markn = game.markn + 1;
            game.use["t_" + ob.rightX + "_" + ob.downY].bloodDown = true;
         }
      }
      if(ob.downleftK && ob.downrightK)
      {
         game.death = true;
      }
   }
   ob.clip._x = ob.x;
   ob.clip._y = ob.y;
};
game.grabCorners = function(x, y, ob)
{
   ob.downY = Math.floor((y + ob.height * 2 - 1) / game.tileH);
   ob.upY = Math.floor(y / game.tileH);
   ob.leftX = Math.floor(x / game.tileW);
   ob.rightX = Math.floor((x + ob.width * 2 - 1) / game.tileW);
   ob.downYK = Math.floor((y + ob.height * 2) / game.tileH);
   ob.upYK = Math.floor(y / game.tileH);
   ob.leftXK = Math.floor(x / game.tileW);
   ob.rightXK = Math.floor((x + ob.width * 2) / game.tileW);
   ob.upleft = game.use["t_" + ob.leftX + "_" + ob.upY].walkable;
   ob.downleft = game.use["t_" + ob.leftX + "_" + ob.downY].walkable;
   ob.upright = game.use["t_" + ob.rightX + "_" + ob.upY].walkable;
   ob.downright = game.use["t_" + ob.rightX + "_" + ob.downY].walkable;
   ob.upleftK = game.use["t_" + ob.leftXK + "_" + ob.upYK].deadly;
   ob.downleftK = game.use["t_" + ob.leftXK + "_" + ob.downYK].deadly;
   ob.uprightK = game.use["t_" + ob.rightXK + "_" + ob.upYK].deadly;
   ob.downrightK = game.use["t_" + ob.rightXK + "_" + ob.downYK].deadly;
   if(game.use["t_" + ob.leftXK + "_" + ob.upYK].deadly)
   {
      game.dtype = game.use["t_" + ob.leftXK + "_" + ob.upYK].dtype;
      game.dsound = game.use["t_" + ob.leftXK + "_" + ob.upYK].dsound;
   }
   if(game.use["t_" + ob.leftXK + "_" + ob.downYK].deadly)
   {
      game.dtype = game.use["t_" + ob.leftXK + "_" + ob.downYK].dtype;
      game.dsound = game.use["t_" + ob.leftXK + "_" + ob.downYK].dsound;
   }
   if(game.use["t_" + ob.rightXK + "_" + ob.upYK].deadly)
   {
      game.dtype = game.use["t_" + ob.rightXK + "_" + ob.upYK].dtype;
      game.dsound = game.use["t_" + ob.rightXK + "_" + ob.upYK].dsound;
   }
   if(game.use["t_" + ob.rightXK + "_" + ob.downYK].deadly)
   {
      game.dtype = game.use["t_" + ob.rightXK + "_" + ob.downYK].dtype;
      game.dsound = game.use["t_" + ob.rightXK + "_" + ob.downYK].dsound;
   }
   if(game.use["t_" + ob.leftXK + "_" + ob.downYK].deadlyup)
   {
      ob.downleftK = game.use["t_" + ob.leftXK + "_" + ob.downYK].deadlyup;
      game.dtype = game.use["t_" + ob.leftXK + "_" + ob.downYK].dtype;
      game.dsound = game.use["t_" + ob.leftXK + "_" + ob.downYK].dsound;
   }
   if(game.use["t_" + ob.rightXK + "_" + ob.downYK].deadlyup)
   {
      ob.uprightK = game.use["t_" + ob.rightXK + "_" + ob.downYK].deadlyup;
      game.dtype = game.use["t_" + ob.rightXK + "_" + ob.downYK].dtype;
      game.dsound = game.use["t_" + ob.rightXK + "_" + ob.downYK].dsound;
   }
   ob.upleftA = game.use["t_" + ob.leftXK + "_" + ob.upYK].activated;
   ob.downleftA = game.use["t_" + ob.leftXK + "_" + ob.downYK].activated;
   ob.uprightA = game.use["t_" + ob.rightXK + "_" + ob.upYK].activated;
   ob.downrightA = game.use["t_" + ob.rightXK + "_" + ob.downYK].activated;
   if(ob.upleftA == false)
   {
      game.use["t_" + ob.leftXK + "_" + ob.upYK].activated = true;
   }
   if(ob.downleftA == false)
   {
      game.use["t_" + ob.leftXK + "_" + ob.downYK].activated = true;
   }
   if(ob.uprightA == false)
   {
      game.use["t_" + ob.rightXK + "_" + ob.upYK].activated = true;
   }
   if(ob.downrightA == false)
   {
      game.use["t_" + ob.rightXK + "_" + ob.downYK].activated = true;
   }
   ob.upleftJ = game.use["t_" + ob.leftXK + "_" + ob.upYK].ypull;
   ob.downleftJ = game.use["t_" + ob.leftXK + "_" + ob.downYK].ypull;
   ob.uprightJ = game.use["t_" + ob.rightXK + "_" + ob.upYK].ypull;
   ob.downrightJ = game.use["t_" + ob.rightXK + "_" + ob.downYK].ypull;
   if(ob.upleftJ)
   {
      ob.ypull = ob.upleftJ;
   }
   else if(ob.downleftJ)
   {
      ob.ypull = ob.downleftJ;
   }
   else if(ob.uprightJ)
   {
      ob.ypull = ob.uprightJ;
   }
   else if(ob.downrightJ)
   {
      ob.ypull = ob.downrightJ;
   }
   else
   {
      ob.ypull = 0;
   }
   ob.downleftBLD = game.use["t_" + ob.leftX + "_" + ob.downY].bloodDown;
   ob.downrightBLD = game.use["t_" + ob.rightX + "_" + ob.downY].bloodDown;
   ob.upleftBLL = game.use["t_" + ob.leftX + "_" + ob.upY].bloodLeft;
   ob.downleftBLL = game.use["t_" + ob.leftX + "_" + ob.downY].bloodLeft;
   ob.uprightBLR = game.use["t_" + ob.rightX + "_" + ob.upY].bloodRight;
   ob.downrightBLR = game.use["t_" + ob.rightX + "_" + ob.downY].bloodRight;
   ob.upleftNB = game.use["t_" + ob.leftX + "_" + ob.upY].noblood;
   ob.downleftNB = game.use["t_" + ob.leftX + "_" + ob.downY].noblood;
   ob.uprightNB = game.use["t_" + ob.rightX + "_" + ob.upY].noblood;
   ob.downrightNB = game.use["t_" + ob.rightX + "_" + ob.downY].noblood;
};
game.jumpcheck = function(ob)
{
   if(ob.velocity == undefined)
   {
      ob.velocity = 0;
   }
   game.grabCorners(ob.x,ob.y + 1,ob);
   if(ob.downleft && ob.downright)
   {
      ob.jump = true;
   }
   else
   {
      ob.jump = false;
   }
   if(ob.jump == true)
   {
      game.grabCorners(ob.x - 1,ob.y,ob);
      if(!ob.downleft || !ob.upleft)
      {
         ob.walljump = true;
         ob.walljumpr = true;
         ob.walljumpl = false;
         if(!ob.wallland)
         {
            if(game.bgirlon == true)
            {
               game.clip.attachMovie("blwalls","dust" + game.dustn,game.depth);
            }
            else if(game.ccon == true)
            {
               game.clip.attachMovie("clwalls","dust" + game.dustn,game.depth);
            }
            else if(game.gishon == true)
            {
               game.clip.attachMovie("glwalls","dust" + game.dustn,game.depth);
            }
            else if(!game.drfeton)
            {
               game.clip.attachMovie("lwalls","dust" + game.dustn,game.depth);
            }
            soundplay = "jump" + (random(4) + 1);
            _root[soundplay].start(0,1);
            game.depth = game.depth + 1;
            game.clip["dust" + game.dustn]._x = ob.x;
            game.clip["dust" + game.dustn]._y = ob.y - (ob.height * 2 - game.clip["dust" + game.dustn]._height / 2);
            game.clip["dust" + game.dustn].timer = 12;
            game.dustArray.push(game.dustn);
            game.dustn = game.dustn + 1;
            ob.wallland = true;
         }
         if(!ob.upleftBLL && !ob.upleft && !ob.upleftNB)
         {
            if(game.bgirlon == true)
            {
               game.clip.attachMovie("bvmarks","mark" + game.markn,game.depth);
            }
            else if(game.ccon == true)
            {
               game.clip.attachMovie("cvmarks","mark" + game.markn,game.depth);
            }
            else if(game.gishon == true)
            {
               game.clip.attachMovie("gvmarks","mark" + game.markn,game.depth);
            }
            else if(!game.drfeton)
            {
               game.clip.attachMovie("vmarks","mark" + game.markn,game.depth);
            }
            game.depth = game.depth + 1;
            game.clip.char.swapDepths(game.depth);
            game.depth = game.depth + 1;
            game.clip["mark" + game.markn]._x = (ob.leftX + 1) * game.tileW - 2;
            game.clip["mark" + game.markn]._y = ob.upY * game.tileH;
            game.clip["mark" + game.markn].xscale = -100;
            game.clip["mark" + game.markn].cacheAsBitmap = true;
            game.markn = game.markn + 1;
            game.use["t_" + (ob.leftX + 1) + "_" + ob.upY].bloodLeft = true;
         }
         if(!ob.downleftBLL && !ob.downleft && !ob.downleftNB)
         {
            if(game.bgirlon == true)
            {
               game.clip.attachMovie("bvmarks","mark" + game.markn,game.depth);
            }
            else if(game.ccon == true)
            {
               game.clip.attachMovie("cvmarks","mark" + game.markn,game.depth);
            }
            else if(game.gishon == true)
            {
               game.clip.attachMovie("gvmarks","mark" + game.markn,game.depth);
            }
            else if(!game.drfeton)
            {
               game.clip.attachMovie("vmarks","mark" + game.markn,game.depth);
            }
            game.depth = game.depth + 1;
            game.clip.char.swapDepths(game.depth);
            game.depth = game.depth + 1;
            game.clip["mark" + game.markn]._x = (ob.leftX + 1) * game.tileW - 2;
            game.clip["mark" + game.markn]._y = ob.downY * game.tileH;
            game.clip["mark" + game.markn].xscale = -100;
            game.clip["mark" + game.markn].cacheAsBitmap = true;
            game.markn = game.markn + 1;
            game.use["t_" + (ob.leftX + 1) + "_" + ob.downY].bloodLeft = true;
         }
         game.cdir = 1;
         ob.walldir = 1;
      }
      else
      {
         game.grabCorners(ob.x + 1,ob.y,ob);
         if(!ob.downright || !ob.upright)
         {
            ob.walljump = true;
            ob.walljumpr = false;
            ob.walljumpl = true;
            if(!ob.wallland)
            {
               soundplay = "jump" + (random(4) + 1);
               _root[soundplay].start(0,1);
               if(game.bgirlon == true)
               {
                  game.clip.attachMovie("blwalls","dust" + game.dustn,game.depth);
               }
               else if(game.ccon == true)
               {
                  game.clip.attachMovie("clwalls","dust" + game.dustn,game.depth);
               }
               else if(game.gishon == true)
               {
                  game.clip.attachMovie("glwalls","dust" + game.dustn,game.depth);
               }
               else if(!game.drfeton)
               {
                  game.clip.attachMovie("lwalls","dust" + game.dustn,game.depth);
               }
               game.depth = game.depth + 1;
               game.clip["dust" + game.dustn]._x = ob.x + ob.width * 2;
               game.clip["dust" + game.dustn]._y = ob.y + (- ob.height * 2 - game.clip["dust" + game.dustn]._height / 2);
               game.clip["dust" + game.dustn]._xscale = -100;
               game.clip["dust" + game.dustn].timer = 12;
               game.dustArray.push(game.dustn);
               game.dustn = game.dustn + 1;
               ob.wallland = true;
            }
            if(!ob.uprightBLR && !ob.upright && !ob.uprightNB)
            {
               if(game.bgirlon == true)
               {
                  game.clip.attachMovie("bvmarks","mark" + game.markn,game.depth);
               }
               else if(game.ccon == true)
               {
                  game.clip.attachMovie("cvmarks","mark" + game.markn,game.depth);
               }
               else if(game.gishon == true)
               {
                  game.clip.attachMovie("gvmarks","mark" + game.markn,game.depth);
               }
               else if(!game.drfeton)
               {
                  game.clip.attachMovie("vmarks","mark" + game.markn,game.depth);
               }
               game.depth = game.depth + 1;
               game.clip.char.swapDepths(game.depth);
               game.depth = game.depth + 1;
               game.clip["mark" + game.markn]._x = ob.rightX * game.tileW + 2;
               game.clip["mark" + game.markn]._y = ob.upY * game.tileH;
               game.clip["mark" + game.markn]._xscale = -100;
               game.clip["mark" + game.markn].cacheAsBitmap = true;
               game.markn = game.markn + 1;
               game.use["t_" + ob.rightX + "_" + ob.upY].bloodRight = true;
            }
            if(!ob.downrightBLR && !ob.downright && !ob.downrightNB)
            {
               if(game.bgirlon == true)
               {
                  game.clip.attachMovie("bvmarks","mark" + game.markn,game.depth);
               }
               else if(game.ccon == true)
               {
                  game.clip.attachMovie("cvmarks","mark" + game.markn,game.depth);
               }
               else if(game.gishon == true)
               {
                  game.clip.attachMovie("gvmarks","mark" + game.markn,game.depth);
               }
               else if(!game.drfeton)
               {
                  game.clip.attachMovie("vmarks","mark" + game.markn,game.depth);
               }
               game.depth = game.depth + 1;
               game.clip.char.swapDepths(game.depth);
               game.depth = game.depth + 1;
               game.clip["mark" + game.markn]._x = ob.rightX * game.tileW + 2;
               game.clip["mark" + game.markn]._y = ob.downY * game.tileH;
               game.clip["mark" + game.markn]._xscale = -100;
               game.clip["mark" + game.markn].cacheAsBitmap = true;
               game.markn = game.markn + 1;
               game.use["t_" + ob.rightX + "_" + ob.downY].bloodRight = true;
            }
            game.cdir = -1;
            ob.walldir = -1;
         }
         else
         {
            ob.walljump = false;
            ob.walljumpr = false;
            ob.walljumpl = false;
            ob.wallland = false;
            ob.walldir = 0;
         }
      }
   }
   else
   {
      ob.walljump = false;
      ob.walljumpr = false;
      ob.walljumpl = false;
      ob.wallland = false;
      ob.walldir = 0;
   }
   if((Key.isDown(32) || Key.isDown(65)) && game.space && ob.walljump == true && ob.jump == true)
   {
      ob.velocity = -8;
      game.xcurrentspeed = ob.walldir * 7;
      game.space = false;
      ob.wallland = false;
      ob.walljump = false;
      soundplay = "jump" + (random(4) + 1);
      _root[soundplay].start(0,1);
      if(ob.walljumpr)
      {
         if(game.bgirlon == true)
         {
            game.clip.attachMovie("bjwalls","dust" + game.dustn,game.depth);
         }
         else if(game.ccon == true)
         {
            game.clip.attachMovie("cjwalls","dust" + game.dustn,game.depth);
         }
         else if(game.gishon == true)
         {
            game.clip.attachMovie("gjwalls","dust" + game.dustn,game.depth);
         }
         else if(!game.drfeton)
         {
            game.clip.attachMovie("jwalls","dust" + game.dustn,game.depth);
         }
         game.depth = game.depth + 1;
         game.clip["dust" + game.dustn]._x = ob.x;
         game.clip["dust" + game.dustn]._y = ob.y + (- ob.height * 2 - game.clip["dust" + game.dustn]._height / 2);
         game.clip["dust" + game.dustn].timer = 12;
         game.dustArray.push(game.dustn);
         game.dustn = game.dustn + 1;
      }
      else if(ob.walljumpl)
      {
         if(game.bgirlon == true)
         {
            game.clip.attachMovie("bjwalls","dust" + game.dustn,game.depth);
         }
         else if(game.ccon == true)
         {
            game.clip.attachMovie("cjwalls","dust" + game.dustn,game.depth);
         }
         else if(game.gishon == true)
         {
            game.clip.attachMovie("gjwalls","dust" + game.dustn,game.depth);
         }
         else if(!game.drfeton)
         {
            game.clip.attachMovie("jwalls","dust" + game.dustn,game.depth);
         }
         game.depth = game.depth + 1;
         game.clip["dust" + game.dustn]._x = ob.x + ob.width * 2;
         game.clip["dust" + game.dustn]._y = ob.y + (- ob.height * 2 - game.clip["dust" + game.dustn]._height / 2);
         game.clip["dust" + game.dustn]._xscale = -100;
         game.clip["dust" + game.dustn].timer = 12;
         game.dustArray.push(game.dustn);
         game.dustn = game.dustn + 1;
      }
   }
   if((Key.isDown(32) || Key.isDown(65)) && game.space && ob.jump == false)
   {
      ob.velocity = -8;
      ob.jump = true;
      game.space = false;
      soundplay = "jump" + (random(4) + 1);
      _root[soundplay].start(0,1);
      if(game.bgirlon == true)
      {
         game.clip.attachMovie("bjumps","dust" + game.dustn,game.depth);
      }
      else if(game.ccon == true)
      {
         game.clip.attachMovie("cjumps","dust" + game.dustn,game.depth);
      }
      else if(game.gishon == true)
      {
         game.clip.attachMovie("gjumps","dust" + game.dustn,game.depth);
      }
      else if(!game.drfeton)
      {
         game.clip.attachMovie("jumps","dust" + game.dustn,game.depth);
      }
      game.depth = game.depth + 1;
      game.clip["dust" + game.dustn]._x = ob.x - (ob.width * 2 - game.clip["dust" + game.dustn]._width / 2);
      game.clip["dust" + game.dustn]._y = ob.y - (ob.height + game.clip["dust" + game.dustn]._height);
      game.clip["dust" + game.dustn].timer = 12;
      game.dustArray.push(game.dustn);
      game.dustn = game.dustn + 1;
      game.grabCorners(ob.x,ob.y + 1,ob);
      if(!ob.downleftBLD && !ob.downleft && !ob.downleftNB)
      {
         if(game.bgirlon == true)
         {
            game.clip.attachMovie("bhmarks","mark" + game.markn,game.depth);
         }
         else if(game.ccon == true)
         {
            game.clip.attachMovie("chmarks","mark" + game.markn,game.depth);
         }
         else if(game.gishon == true)
         {
            game.clip.attachMovie("ghmarks","mark" + game.markn,game.depth);
         }
         else if(!game.drfeton)
         {
            game.clip.attachMovie("hmarks","mark" + game.markn,game.depth);
         }
         game.depth = game.depth + 1;
         game.clip["mark" + game.markn]._x = ob.leftX * game.tileW;
         game.clip["mark" + game.markn]._y = ob.downY * game.tileH;
         game.clip["mark" + game.markn].cacheAsBitmap = true;
         game.markn = game.markn + 1;
         game.use["t_" + ob.leftX + "_" + ob.downY].bloodDown = true;
      }
      if(!ob.downrightBLD && !ob.downright && !ob.downrightNB)
      {
         if(game.bgirlon == true)
         {
            game.clip.attachMovie("bhmarks","mark" + game.markn,game.depth);
         }
         else if(game.ccon == true)
         {
            game.clip.attachMovie("chmarks","mark" + game.markn,game.depth);
         }
         else if(game.gishon == true)
         {
            game.clip.attachMovie("ghmarks","mark" + game.markn,game.depth);
         }
         else if(!game.drfeton)
         {
            game.clip.attachMovie("hmarks","mark" + game.markn,game.depth);
         }
         game.depth = game.depth + 1;
         game.clip["mark" + game.markn]._x = ob.rightX * game.tileW;
         game.clip["mark" + game.markn]._y = ob.downY * game.tileH;
         game.clip["mark" + game.markn].cacheAsBitmap = true;
         game.markn = game.markn + 1;
         game.use["t_" + ob.rightX + "_" + ob.downY].bloodDown = true;
      }
   }
   else if(ob.jump == true && ob.velocity < game.maxVel)
   {
      ob.velocity = ob.velocity + 0.5;
   }
};
game.scrollFunction = function(ob, scrollspeed)
{
   if(scrollspeed != undefined)
   {
      scrollmov = scrollspeed;
   }
   else
   {
      scrollmov = 1;
   }
   if(game.clip._y > (game.cliprealheight - Stage.height) * -1 + game.blockplace * game.tileH)
   {
      j = 0;
      while(j < game.mVW)
      {
         ni = game.currentStageY - game.blockplace;
         oi = game.currentStageY - game.blockplace + game.mVH;
         var _loc2_ = "t_" + j + "_" + ni;
         if(ni >= 0)
         {
            game.clip.attachMovie("tile",_loc2_,game.depth);
            game.depth = game.depth + 1;
            game.clip[_loc2_].gotoAndStop(game.use[_loc2_].frame);
            game.clip[_loc2_]._x = game.use[_loc2_].x;
            game.clip[_loc2_]._y = game.use[_loc2_].y;
         }
         var _loc3_ = "t_" + j + "_" + oi;
         game.clip[_loc3_].removeMovieClip();
         j++;
      }
      game.blockplace = game.blockplace + 1;
      game.currchar.clip.swapDepths(game.depth);
      game.depth = game.depth + 1;
   }
   if(ob.y + game.clip._y >= Stage.height)
   {
      game.death = true;
   }
   if(game.clip._y < 0)
   {
      game.clip._y = game.clip._y + scrollmov;
      nesteps = (game.cliprealheight + Stage.height) / scrollmov;
      neintervall1 = 450 / nesteps;
      neintervall2 = 400 / nesteps;
      neintervall3 = 350 / nesteps;
      _root.bg.l1._y = _root.bg.l1._y + neintervall1;
      _root.bg.l2._y = _root.bg.l2._y + neintervall2;
      _root.bg.l3._y = _root.bg.l3._y + neintervall3;
      if(ob.y < game.pushy - game.clip._y)
      {
         var _loc4_ = Math.abs(game.pushy - game.clip._y - ob.y);
         if(game.clip._y + _loc4_ <= 0)
         {
            game.clip._y = game.clip._y + _loc4_;
            nesteps = (game.cliprealheight + Stage.height) / _loc4_;
            neintervall1 = 450 / nesteps;
            neintervall2 = 400 / nesteps;
            neintervall3 = 350 / nesteps;
            _root.bg.l1._y = _root.bg.l1._y + neintervall1;
            _root.bg.l2._y = _root.bg.l2._y + neintervall2;
            _root.bg.l3._y = _root.bg.l3._y + neintervall3;
            ob.y = game.pushy - game.clip._y;
         }
         else
         {
            game.clip._y = 0;
         }
      }
   }
};
game.checkEnd = function(ob)
{
   var _loc3_ = Math.floor((ob.x + ob.width) / game.tileW);
   var _loc2_ = Math.floor((ob.y + ob.height) / game.tileH);
   if(game.use["t_" + _loc3_ + "_" + _loc2_].end == true)
   {
      return true;
   }
   return false;
};
game.endLevel = function()
{
   game.pause = true;
   if(_root.blackout._alpha >= 50 && _root.blackout._alpha != undefined && _root.textbox == undefined)
   {
      YW.start(0,1);
      _root.createEmptyMovieClip("textbox",game.depth);
      game.depth = game.depth + 1;
      _root.textbox.createTextField("completeText",game.depth,-10000,-10000,game.textFourW,game.textFourH);
      game.depth = game.depth + 1;
      _root.textbox.completeText._y = 200;
      _root.textbox.completeText._x = Stage.width / 2 - game.textFourW / 2;
      _root.textbox.completeText.selectable = false;
      _root.textbox.completeText.textColor = 16777215;
      _root.textbox.completeText.text = "Level Complete!";
      _root.textbox.completeText.setTextFormat(game.textFourFormat);
      _root.textbox.createTextField("holder",game.depth,-10000,-10000,game.textSevenW,game.textSevenH);
      game.depth = game.depth + 1;
      _root.textbox.holder.selectable = false;
      _root.textbox.holder.wordWrap = true;
      _root.textbox.holder.text = "";
      _root.textbox.holder._y = 240;
      _root.textbox.holder._x = Stage.width / 2 - game.textSevenW / 2;
      _root.textbox.holder.textColor = 16777215;
      _root.textbox.holder.setTextFormat(game.textOneFormat);
      if(game.cunlocked == true)
      {
         _root.textbox.holder.text = _root.textbox.holder.text + "(you unlocked a new level set!)\n";
         _root.textbox.holder.setTextFormat(game.textOneFormat);
         game.cunlocked = false;
      }
      if(game.comicHArray)
      {
         _root.textbox.holder.setTextFormat(game.textOneFormat);
         game.cunlocked = false;
      }
      if(game.leveltype == "static" && _root["map" + game.holdmapnumtemp + "unlocked"] == true)
      {
         _root.textbox.holder.text = _root.textbox.holder.text + "(press enter to advance)\n";
      }
      _root.textbox.holder.text = _root.textbox.holder.text + ("(press escape to exit)\n\n\nTip: " + _root["tip" + (random(10) + 1)]);
      _root.textbox.holder.setTextFormat(game.textOneFormat);
   }
};
game.levelProgression = function(c)
{
   if(game.leveltype == "static" && game.mapBuilt == false)
   {
      char = _root["map" + game.mapnumber + "char"];
      map = _root["map" + game.mapnumber];
      var _loc2_ = _root["mapbg" + game.mapnumber];
      bgt = _root["mapbg" + game.mapnumber];
      scrolly = _root["mapscroll" + game.mapnumber];
      string = _root["map" + game.mapnumber + "statement"];
      strue = _root["map" + game.mapnumber + "stringplayed"];
      comic = _root["map" + game.mapnumber + "comic"];
      ctrue = _root["map" + game.mapnumber + "comicplay"];
      final = _root["map" + game.mapnumber + "final"];
   }
   else if(game.leveltype == "custom" && game.mapBuilt == false)
   {
      char = game.custom["savegame" + c].char;
      map = game.custom["savegame" + c].array;
      _loc2_ = game.custom["savegame" + c].bg;
      bgt = game.custom["savegame" + c].bg;
      scrolly = game.custom["savegame" + c].scroll;
      string = false;
      strue = true;
      comic = false;
      ctrue = true;
      final = false;
   }
   if(game.mapBuilt == false)
   {
      game.damsync = 50;
      game.damtypephase = true;
      _root.loader.swapDepths(0);
      game.baid = false;
      game.invincibleTimer = 10;
      game.rebornTimer = 23;
      game.buildmap(map,char,movt);
      game.mapBuilt = true;
      game.bnumber = 0;
      game.blockplace = 0;
      game.bArray = new Array();
      game.currchar = char;
      chat.suckvelocityY = 0;
      game.dustn = 0;
      game.dtype = false;
      game.dsound = false;
      game.markn = 0;
      game.dustArray = new Array();
      _root.bg.removeMovieClip();
      _root.attachMovie("bg","bg",1);
      _root.bg.gotoAndStop(_loc2_);
      _root.bg._y = (_root.bg._height - Stage.height) * -1;
      musplay = "music" + (_loc2_ - 1) + "_1";
      if(string && !strue || comic && !ctrue)
      {
         game.clip.char.gotoAndStop("nothing");
      }
      else if(game.cdir == 1)
      {
         game.clip.char.gotoAndStop("rebornright");
      }
      else if(game.cdir == -1)
      {
         game.clip.char.gotoAndStop("rebornleft");
      }
      if(!muson || muson != _loc2_ - 1)
      {
         stopAllSounds();
         _root[musplay].start(0,999);
         muson = _loc2_ - 1;
      }
   }
   else if(comic && !ctrue)
   {
      game.pause = true;
      if(_root.blackout._alpha >= 50 && _root.blackout._alpha != undefined)
      {
         game.comicPlay(comic[0],comic[1],comic[2]);
      }
      if(game.ctimerthree <= 0)
      {
         _root["map" + game.mapnumber + "comicplay"] = true;
         ctrue = _root["map" + game.mapnumber + "comicplay"];
         _root.cmone.removeMovieClip();
         _root.cmtwo.removeMovieClip();
         _root.cmthree.removeMovieClip();
         game.ctimerone = 50;
         game.ctimertwo = 50;
         game.ctimerthree = 50;
         if(!string || strue)
         {
            game.pause = false;
            if(game.cdir == 1)
            {
               game.clip.char.gotoAndStop("rebornright");
            }
            else if(game.cdir == -1)
            {
               game.clip.char.gotoAndStop("rebornleft");
            }
         }
      }
   }
   else if(string && !strue)
   {
      game.pause = true;
      game.instructions(string);
      if(Key.isDown(13) && game.enter == true)
      {
         game.enter = false;
         game.pause = false;
         if(game.cdir == 1)
         {
            game.clip.char.gotoAndStop("rebornright");
         }
         else if(game.cdir == -1)
         {
            game.clip.char.gotoAndStop("rebornleft");
         }
         string = false;
         _root["map" + game.mapnumber + "stringplayed"] = true;
         _root.textbox.removeMovieClip();
      }
   }
   else if(game.rebornTimer > 0)
   {
      game.rebornTimer--;
   }
   else if(game.checkEnd(char) == false && (game.death == false || game.invincibleTimer > 0))
   {
      game.pauseFunction();
      if(!game.pause)
      {
         game.detectkeys(char);
         game.scrollFunction(char,scrolly);
         game.tileBrain(char);
         game.bulletBrain(char);
         game.charAnimations(char);
         game.particleEngine(game.dustArray);
         game.missileBrain(game.mArray,char);
         if(game.invincibleTimer > 0)
         {
            game.death = false;
         }
      }
   }
   else if(game.death == true && game.invincibleTimer <= 0)
   {
      game.xcurrentspeed = 0;
      char.velocity = 0;
      if(game.deathCounter < 30)
      {
         game.resetLevel = 1;
         game.charDeath(char);
         game.bulletBrain(char);
         game.missileBrain(game.mArray,char);
         game.deathCounter = game.deathCounter + 1;
      }
      else if(game.deathCounter >= 30)
      {
         _root.bg.gotoAndStop("load");
         game.clip.removeMovieClip();
         _root.textbox.removeMovieClip();
         _root.createEmptyMovieClip("OverL",game.depth);
         game.clip = _root.OverL;
         game.pause = false;
         game.mapBuilt = false;
         game.death = false;
         game.deathCounter = 0;
         game.deathStage = 1;
      }
   }
   else if(game.cutsceneTimer > 0)
   {
      game.cutsceneTimer--;
      if(!_root.cutscene)
      {
         _root.attachMovie(game.cutscene,"cutscene",game.depth);
         _root.cutscene._x = 150;
         _root.cutscene._y = 250;
         game.depth = game.depth + 1;
      }
      if(game.cutsceneTimer - 1 <= 0)
      {
         game.unlockable = false;
         game.cutsceneTimer = 0;
         _root.cutscene.removeMovieClip();
         final = false;
         if(!enterUnlockables)
         {
            game.menuStage = "mainmenu";
            game.menuBuilt = false;
            game.mapBuilt = false;
            _root.createEmptyMovieClip("OverL",game.depth);
            game.clip = _root.OverL;
            game.pause = true;
            _root.attachMovie("bg","bg",1);
            _root.bg.gotoAndStop(1);
            _root.bg.introduction.gotoAndStop(290);
            titleMenuSound.start(0,99);
         }
         else
         {
            game.xcurrentspeed = 0;
            char.velocity = 0;
            game.clip.removeMovieClip();
            _root.textbox.removeMovieClip();
            _root.createEmptyMovieClip("OverL",game.depth);
            game.clip = _root.OverL;
            if(game.mapnumber + 1 != 1 && game.mapnumber + 1 != 17 && game.mapnumber + 1 != 33 && game.mapnumber + 1 != 50)
            {
               game.mapnumber = game.mapnumber + 1;
            }
            else
            {
               game.mapnumber = game.mapnumber + 2;
            }
            game.pause = false;
            game.mapBuilt = false;
         }
      }
   }
   else
   {
      game.pause = true;
      if(game.leveltype == "static")
      {
         _root["map" + game.mapnumber + "beaten"] = true;
         game.savefile.data["map" + game.mapnumber + "beaten"] = true;
         if(game.baid)
         {
            _root["map" + game.mapnumber + "baid"] = true;
            game.savefile.data["map" + game.mapnumber + "baid"] = true;
         }
         game.savefile.flush();
      }
      if(game.mapnumber + 1 != 1 && game.mapnumber + 1 != 17 && game.mapnumber + 1 != 33 && game.mapnumber + 1 != 50)
      {
         game.holdmapnumtemp = game.mapnumber + 1;
      }
      else
      {
         game.holdmapnumtemp = game.mapnumber + 2;
      }
      game.unlockLevels();
      game.unlockSecrets();
      game.endLevel();
      if(Key.isDown(13) && game.enter == true && game.mapnumber < game.mapamount - 1 && game.leveltype == "static" && _root["map" + (game.mapnumber + 1) + "unlocked"] == true)
      {
         game.enter = false;
         if(!final && !game.unlockable)
         {
            _root.bg.gotoAndStop("load");
            _root.loader.swapDepths(game.depth);
            game.depth = game.depth + 1;
            game.xcurrentspeed = 0;
            char.velocity = 0;
            game.clip.removeMovieClip();
            _root.textbox.removeMovieClip();
            _root.createEmptyMovieClip("OverL",game.depth);
            game.clip = _root.OverL;
            if(game.mapnumber + 1 != 1 && game.mapnumber + 1 != 17 && game.mapnumber + 1 != 33 && game.mapnumber + 1 != 50)
            {
               game.mapnumber = game.mapnumber + 1;
            }
            else
            {
               game.mapnumber = game.mapnumber + 2;
            }
            game.pause = false;
            game.mapBuilt = false;
         }
         else if(final)
         {
            game.xcurrentspeed = 0;
            char.velocity = 0;
            game.clip.removeMovieClip();
            _root.textbox.removeMovieClip();
            _root.bg.removeMovieClip();
            game.pause = false;
            stopAllSounds();
            muson = false;
            game.cutsceneTimer = 2850;
            game.cutscene = "ending";
            game.bgirlunlocked = true;
            game.savefile.data.bgirlunlocked = true;
         }
         else if(game.unlockable)
         {
            enterUnlockables = true;
            game.xcurrentspeed = 0;
            char.velocity = 0;
            game.clip.removeMovieClip();
            _root.textbox.removeMovieClip();
            _root.bg.removeMovieClip();
            game.pause = false;
            stopAllSounds();
            muson = false;
            game.cutsceneTimer = 100;
            game.cutscene = game.unlockable;
         }
      }
      else if(Key.isDown(27) && game.escape == true)
      {
         game.escape = false;
         if(!final && !game.unlockable)
         {
            _root.bg.removeMovieClip();
            _root.attachMovie("bg","bg",1);
            _root.bg.gotoAndStop(1);
            _root.bg.introduction.gotoAndStop(290);
            game.xcurrentspeed = 0;
            char.velocity = 0;
            _root[char].clip.removeMovieClip();
            game.clip.removeMovieClip();
            _root.textbox.removeMovieClip();
            _root.createEmptyMovieClip("OverL",game.depth);
            game.clip = _root.OverL;
            if(game.leveltype == "static")
            {
               game.menuStage = "campaignlist";
            }
            else if(game.leveltype == "custom")
            {
               game.menuStage = "loadcustom";
            }
            game.mapBuilt = false;
         }
         else if(final)
         {
            game.xcurrentspeed = 0;
            char.velocity = 0;
            game.clip.removeMovieClip();
            _root.textbox.removeMovieClip();
            _root.bg.removeMovieClip();
            game.pause = false;
            stopAllSounds();
            muson = false;
            game.cutsceneTimer = 2850;
            game.cutscene = "ending";
            game.bgirlunlocked = true;
            game.savefile.data.bgirlunlocked = true;
         }
         else if(game.unlockable)
         {
            game.xcurrentspeed = 0;
            char.velocity = 0;
            game.clip.removeMovieClip();
            _root.textbox.removeMovieClip();
            _root.bg.removeMovieClip();
            game.pause = false;
            stopAllSounds();
            muson = false;
            game.cutsceneTimer = 100;
            game.cutscene = game.unlockable;
         }
      }
   }
};
game.menumap = function()
{
   if((game.menuStage != "LevelProgression" || game.cutsceneTimer > 0) && gquality == "low")
   {
      _root._quality = "high";
      gquality = "high";
   }
   else if(game.menuStage == "LevelProgression" && game.cutsceneTimer <= 0 && gquality == "high")
   {
      _root._quality = "low";
      gquality = "low";
   }
   if(game.menuStage == "unloaded")
   {
      if(!_root.bg)
      {
         _root.attachMovie("bg","bg",1);
         _root.bg.gotoAndStop(1);
      }
      game.menuStage = "countdown";
   }
   if(game.menuStage == "countdown")
   {
      if(game.originTimer > 0)
      {
         game.originTimer--;
      }
      else
      {
         game.pause = true;
         game.menuStage = "mainmenu";
         titleMenuSound.start(0,99);
      }
   }
   if((game.menuStage == "loadcustom" || game.menuStage == "campaignlist" || game.menuStage == "import" || game.menuStage == "extra" && game.eCutsceneT <= 0 || game.menuStage == "mapcreation" && game.creationStage == 3) && !_root.bt)
   {
      if(_root.blackout._alpha >= 50 && _root.blackout._alpha != undefined)
      {
         _root.createEmptyMovieClip("bt",game.depth);
         game.depth = game.depth + 1;
         _root.bt.createTextField("back",game.depth,-10000,-10000,game.textFiveW,game.textFiveH);
         game.depth = game.depth + 1;
         _root.bt.back._y = 455;
         _root.bt.back._x = Stage.width / 2 - game.textFiveW / 2;
         _root.bt.back.background = true;
         _root.bt.back.backgroundColor = 3355443;
         _root.bt.back.textColor = 16777215;
         _root.bt.back.text = "Go Back";
         _root.bt.back.setTextFormat(game.textOneFormat);
         _root.bt.back.selectable = false;
      }
   }
   else if(game.menuStage == "loadcustom" || game.menuStage == "campaignlist" || game.menuStage == "import" || game.menuStage == "extra" && game.eCutsceneT <= 0 || game.menuStage == "mapcreation" && game.creationStage == 3)
   {
      if(_xmouse > _root.bt.back._x && _xmouse < _root.bt.back._x + _root.bt.back._width)
      {
         if(_ymouse > _root.bt.back._y && _ymouse < _root.bt.back._y + _root.bt.back._height)
         {
            _root.bt.back.backgroundColor = 10066329;
            if(backover)
            {
               MOB.start(0,1);
               backover = false;
            }
            if(game.mouseup == true && game.mouse == true)
            {
               game.mouseup = false;
               game.menuStage = "mainmenu";
               game.menuBuilt = false;
               _root.textbox.removeMovieClip();
               _root.slider.removeMovieClip();
               game.creationStage = 1;
            }
         }
         else
         {
            backover = true;
            _root.bt.back.backgroundColor = 3355443;
         }
      }
   }
   else if(_root.bt)
   {
      _root.bt.removeMovieClip();
   }
   if(_root.blackout._alpha >= 50 && _root.blackout._alpha != undefined && game.menuBuilt == false && game.menuStage == "mainmenu")
   {
      game.menuBuilt = true;
      _root.createEmptyMovieClip("textbox",game.depth);
      game.depth = game.depth + 1;
      _root.textbox.attachMovie("dload","dload",game.depth);
      game.depth = game.depth + 1;
      _root.textbox.dload._y = 110;
      _root.textbox.dload._x = Stage.width / 2 - _root.textbox.dload._width / 2;
      _root.textbox.attachMovie("ngl","nglogo",game.depth);
      game.depth = game.depth + 1;
      _root.textbox.nglogo._y = 340;
      _root.textbox.nglogo._x = Stage.width / 2 - _root.textbox.nglogo._width / 2;
      _root.textbox.attachMovie("title","title",game.depth);
      game.depth = game.depth + 1;
      _root.textbox.title._y = 50;
      _root.textbox.title._x = Stage.width / 2 - _root.textbox.title._width / 2;
      _root.textbox.createTextField("Campaign",game.depth,-10000,-10000,game.textFiveW,game.textFiveH);
      game.depth = game.depth + 1;
      _root.textbox.Campaign._y = 200;
      _root.textbox.Campaign._x = Stage.width / 2 - game.textFiveW / 2;
      _root.textbox.Campaign.background = true;
      _root.textbox.Campaign.backgroundColor = 3355443;
      _root.textbox.Campaign.textColor = 16777215;
      _root.textbox.Campaign.text = "Campaign";
      _root.textbox.Campaign.setTextFormat(game.textOneFormat);
      _root.textbox.Campaign.selectable = false;
      _root.textbox.createTextField("MapCreation",game.depth,-10000,-10000,game.textFiveW,game.textFiveH);
      game.depth = game.depth + 1;
      _root.textbox.MapCreation.selectable = false;
      _root.textbox.MapCreation._y = 220;
      _root.textbox.MapCreation._x = Stage.width / 2 - game.textFiveW / 2;
      _root.textbox.MapCreation.background = true;
      _root.textbox.MapCreation.backgroundColor = 3355443;
      _root.textbox.MapCreation.textColor = 16777215;
      _root.textbox.MapCreation.text = "Map Creation";
      _root.textbox.MapCreation.setTextFormat(game.textOneFormat);
      _root.textbox.createTextField("LoadCustom",game.depth,-10000,-10000,game.textFiveW,game.textFiveH);
      game.depth = game.depth + 1;
      _root.textbox.LoadCustom.selectable = false;
      _root.textbox.LoadCustom._y = 240;
      _root.textbox.LoadCustom._x = Stage.width / 2 - game.textFiveW / 2;
      _root.textbox.LoadCustom.background = true;
      _root.textbox.LoadCustom.backgroundColor = 3355443;
      _root.textbox.LoadCustom.textColor = 16777215;
      _root.textbox.LoadCustom.text = "Load Custom";
      _root.textbox.LoadCustom.setTextFormat(game.textOneFormat);
      _root.textbox.createTextField("Import",game.depth,-10000,-10000,game.textFiveW,game.textFiveH);
      game.depth = game.depth + 1;
      _root.textbox.Import.selectable = false;
      _root.textbox.Import._y = 260;
      _root.textbox.Import._x = Stage.width / 2 - game.textFiveW / 2;
      _root.textbox.Import.background = true;
      _root.textbox.Import.backgroundColor = 3355443;
      _root.textbox.Import.textColor = 16777215;
      _root.textbox.Import.text = "Import";
      _root.textbox.Import.setTextFormat(game.textOneFormat);
      _root.textbox.createTextField("Exit",game.depth,-10000,-10000,game.textFiveW,game.textFiveH);
      game.depth = game.depth + 1;
      _root.textbox.Exit.selectable = false;
      _root.textbox.Exit._y = 280;
      _root.textbox.Exit._x = Stage.width / 2 - game.textFiveW / 2;
      _root.textbox.Exit.background = true;
      _root.textbox.Exit.backgroundColor = 3355443;
      _root.textbox.Exit.textColor = 16777215;
      _root.textbox.Exit.text = "Secrets";
      _root.textbox.Exit.setTextFormat(game.textOneFormat);
   }
   else if(game.menuStage == "mainmenu")
   {
      if(_xmouse > _root.textbox.Campaign._x && _xmouse < _root.textbox.Campaign._x + _root.textbox.Campaign._width)
      {
         if(_ymouse > _root.textbox.Campaign._y && _ymouse < _root.textbox.Campaign._y + _root.textbox.Campaign._height)
         {
            _root.textbox.Campaign.backgroundColor = 10066329;
            if(campaignover)
            {
               MOB.start(0,1);
               campaignover = false;
            }
            if(game.mouseup == true && game.mouse == true)
            {
               game.mouseup = false;
               game.menuStage = "campaignlist";
               _root.textbox.removeMovieClip();
            }
         }
         else
         {
            campaignover = true;
            _root.textbox.Campaign.backgroundColor = 3355443;
         }
         if(_ymouse > _root.textbox.MapCreation._y && _ymouse < _root.textbox.MapCreation._y + _root.textbox.MapCreation._height)
         {
            _root.textbox.MapCreation.backgroundColor = 10066329;
            if(creationover)
            {
               MOB.start(0,1);
               creationover = false;
            }
            if(game.mouseup == true && game.mouse == true)
            {
               game.mouseup = false;
               game.menuStage = "mapcreation";
               _root.textbox.removeMovieClip();
            }
         }
         else
         {
            _root.textbox.MapCreation.backgroundColor = 3355443;
            creationover = true;
         }
         if(_ymouse > _root.textbox.LoadCustom._y && _ymouse < _root.textbox.LoadCustom._y + _root.textbox.LoadCustom._height)
         {
            _root.textbox.LoadCustom.backgroundColor = 10066329;
            if(loadover)
            {
               MOB.start(0,1);
               loadover = false;
            }
            if(game.mouseup == true && game.mouse == true)
            {
               game.mouseup = false;
               game.menuStage = "loadcustom";
               _root.textbox.removeMovieClip();
            }
         }
         else
         {
            _root.textbox.LoadCustom.backgroundColor = 3355443;
            loadover = true;
         }
         if(_ymouse > _root.textbox.Import._y && _ymouse < _root.textbox.Import._y + _root.textbox.Import._height)
         {
            _root.textbox.Import.backgroundColor = 10066329;
            if(importover)
            {
               MOB.start(0,1);
               importover = false;
            }
            if(game.mouseup == true && game.mouse == true)
            {
               game.mouseup = false;
               game.menuStage = "import";
               game.importStage = 1;
               _root.textbox.removeMovieClip();
            }
         }
         else
         {
            _root.textbox.Import.backgroundColor = 3355443;
            importover = true;
         }
         if(_ymouse > _root.textbox.Exit._y && _ymouse < _root.textbox.Exit._y + _root.textbox.Exit._height)
         {
            _root.textbox.Exit.backgroundColor = 10066329;
            if(exitover)
            {
               MOB.start(0,1);
               exitover = false;
            }
            if(game.mouseup == true && game.mouse == true)
            {
               game.mouseup = false;
               game.menuStage = "extra";
               game.eMenu = false;
               _root.textbox.removeMovieClip();
            }
         }
         else
         {
            _root.textbox.Exit.backgroundColor = 3355443;
            exitover = true;
         }
      }
   }
   else if(game.menuStage == "campaignlist")
   {
      game.listStaticMap();
      if(Key.isDown(27) && game.escape == true)
      {
         game.escape = false;
         game.saveSliderY = _root.slider._y;
         game.menuStage = "mainmenu";
         game.menuBuilt = false;
         _root.textbox.removeMovieClip();
         _root.slider.removeMovieClip();
      }
   }
   else if(game.menuStage == "LevelProgression")
   {
      game.levelProgression(game.c);
   }
   else if(game.menuStage == "mapcreation")
   {
      game.mapcreator();
   }
   else if(game.menuStage == "loadcustom")
   {
      game.listCustomMap();
      if(Key.isDown(27) && game.escape == true)
      {
         game.escape = false;
         game.menuStage = "mainmenu";
         game.menuBuilt = false;
         _root.textbox.removeMovieClip();
         _root.slider.removeMovieClip();
      }
   }
   else if(game.menuStage == "import")
   {
      game.importMap();
      if(Key.isDown(27) && game.escape == true)
      {
         game.escape = false;
         game.menuStage = "mainmenu";
         game.menuBuilt = false;
         _root.textbox.removeMovieClip();
      }
   }
   else if(game.menuStage == "extra")
   {
      game.extrasMenu();
      if(Key.isDown(27) && game.escape == true && (game.eCutsceneT <= 0 || !game.eCutsceneT))
      {
         game.escape = false;
         game.menuStage = "mainmenu";
         game.menuBuilt = false;
         _root.textbox.removeMovieClip();
      }
   }
};
game.listStaticMap = function()
{
   if(game.selection == undefined)
   {
      game.selection = 0;
   }
   if(game.mapamount >= 20)
   {
      if(_root.slider == undefined && _root.textbox != undefined)
      {
         _root.createEmptyMovieClip("slider",game.depth);
         game.depth = game.depth + 1;
         _root.slider.lineStyle(2,16777215,70);
         _root.slider.moveTo(0,0);
         _root.slider._x = Stage.width / 2 + game.textFiveW / 2 + 1;
         if(!game.saveSliderY)
         {
            _root.slider._y = _root.textbox._y;
         }
         else
         {
            _root.slider._y = game.saveSliderY;
         }
         _root.slider.beginFill(3355443,100);
         _root.slider.lineTo(0,0);
         _root.slider.lineTo(20,0);
         _root.slider.lineTo(20,20);
         _root.slider.lineTo(0,20);
         _root.slider.lineTo(0,0);
         _root.slider.moveTo(3,3);
         _root.slider.beginFill(16777215,100);
         _root.slider.lineTo(17,3);
         _root.slider.lineTo(10,17);
      }
      if(game.mouse == true && _root.slider._y >= _root.textbox._y && _root.slider._y <= _root.textbox._height + _root.textbox._y - _root.slider._height)
      {
         if(_xmouse > _root.slider._x && _xmouse < _root.slider._x + _root.slider._width)
         {
            game.slidermouse = true;
            game.mouseup = false;
         }
         if(game.slidermouse == true)
         {
            _root.slider._y = _ymouse;
         }
      }
      else
      {
         game.slidermouse = false;
      }
      if(_root.slider._y < _root.textbox._y)
      {
         _root.slider._y = _root.textbox._y;
      }
      if(_root.slider._y > _root.textbox._height + _root.textbox._y - _root.slider._height)
      {
         _root.slider._y = _root.textbox._height + _root.textbox._y - _root.slider._height;
      }
      staticSlideCalc = game.calculateSlider(_root.textbox._y,_root.textbox._height + _root.textbox._y - _root.slider._height,_root.slider._y);
      game.selection = Math.floor((game.mapamount - 20) * staticSlideCalc / 100 - 5);
   }
   game.compileStaticList(game.selection);
   _root.textbox._y = Stage.height / 2 - _root.textbox._height / 2;
   i = 1;
   while(i <= 20 && i <= game.mapamount)
   {
      ik = i + game.selection - 1;
      var _loc2_ = "map" + ik;
      if(_xmouse > _root.textbox[_loc2_]._x && _xmouse < _root.textbox[_loc2_]._x + _root.textbox[_loc2_]._width)
      {
         if(_ymouse - _root.textbox._y > _root.textbox[_loc2_]._y && _ymouse - _root.textbox._y < _root.textbox[_loc2_]._y + _root.textbox[_loc2_]._height && !_root["map" + ik + "title"])
         {
            _root.textbox[_loc2_].backgroundColor = 10066329;
            if(_root["map" + ik + "over"])
            {
               MOB.start(0,1);
               _root["map" + ik + "over"] = false;
            }
            if(game.mouseup == true && game.mouse == true)
            {
               game.mouseup = false;
               game.leveltype = "static";
               game.mapnumber = ik;
               _root["map" + game.mapnumber + "stringplayed"] = false;
               _root["map" + game.mapnumber + "comicplay"] = false;
               if(_root["map" + game.mapnumber + "unlocked"] == true)
               {
                  game.saveSliderY = _root.slider._y;
                  game.menuStage = "LevelProgression";
                  _root.bg.gotoAndStop("load");
                  _root.loader.swapDepths(game.depth);
                  _root.bt.removeMovieClip();
                  game.depth = game.depth + 1;
                  game.pause = false;
                  _root.textbox.removeMovieClip();
                  _root.slider.removeMovieClip();
                  game.clip.removeMovieClip();
                  _root.createEmptyMovieClip("OverL",game.depth);
                  game.clip = _root.OverL;
               }
            }
         }
         else
         {
            _root.textbox[_loc2_].backgroundColor = 3355443;
            _root["map" + ik + "over"] = true;
         }
      }
      i++;
   }
};
game.compileStaticList = function(k)
{
   _root.textbox.removeMovieClip();
   _root.createEmptyMovieClip("textbox",game.depth);
   game.depth = game.depth + 1;
   i = 1;
   while(i < 20)
   {
      ik = i + k - 1;
      var _loc2_ = "map" + ik;
      _root.textbox.createTextField([_loc2_],game.depth,-10000,-10000,game.textFiveW,game.textFiveH);
      game.depth = game.depth + 1;
      _root.textbox[_loc2_]._y = 20 * (i - 1);
      _root.textbox[_loc2_]._x = Stage.width / 2 - game.textFiveW / 2;
      _root.textbox[_loc2_].background = true;
      _root.textbox[_loc2_].backgroundColor = 3355443;
      _root.textbox[_loc2_].textColor = 16777215;
      if(_root[_loc2_ + "unlocked"] == true)
      {
         _root.textbox[_loc2_].text = _root["map" + ik + "name"];
      }
      else
      {
         _root.textbox[_loc2_].text = "(locked)";
      }
      if(!_root[_loc2_ + "title"])
      {
         _root.textbox[_loc2_].setTextFormat(game.textSevenFormat);
      }
      else
      {
         _root.textbox[_loc2_].setTextFormat(game.textEightFormat);
      }
      _root.textbox[_loc2_].selectable = false;
      if(_root[_loc2_ + "beaten"] == true)
      {
         _root.textbox.attachMovie("medal","medal" + ik,game.depth);
         if(_root[_loc2_ + "baid"] == true)
         {
            _root.textbox["medal" + ik].gotoAndStop(2);
         }
         else
         {
            _root.textbox["medal" + ik].gotoAndStop(1);
         }
         game.depth = game.depth + 1;
         _root.textbox["medal" + ik]._y = 20 * (i - 1) + 3;
         _root.textbox["medal" + ik]._x = Stage.width / 2 - game.textFiveW / 2 - _root.textbox["medal" + ik]._width;
      }
      i++;
   }
};
game.calculateSlider = function(starty, endy, currenty)
{
   slidlength = endy - starty;
   return currenty * 100 / slidlength;
};
game.compileCustomList = function(k)
{
   _root.textbox.removeMovieClip();
   _root.createEmptyMovieClip("textbox",game.depth);
   game.depth = game.depth + 1;
   i = 0;
   while(i < game.customLevels && i < 20)
   {
      ik = i + k;
      var _loc2_ = "savegame" + ik;
      _root.textbox.createTextField([_loc2_],game.depth,-10000,-10000,game.textFiveW,game.textFiveH);
      game.depth = game.depth + 1;
      _root.textbox[_loc2_]._y = 20 * i;
      _root.textbox[_loc2_]._x = Stage.width / 2 - game.textFiveW / 2;
      _root.textbox[_loc2_].background = true;
      _root.textbox[_loc2_].backgroundColor = 3355443;
      _root.textbox[_loc2_].textColor = 16777215;
      _root.textbox[_loc2_].text = game.custom["savegame" + ik].name;
      _root.textbox[_loc2_].setTextFormat(game.textOneFormat);
      _root.textbox[_loc2_].selectable = false;
      i++;
   }
};
game.listCustomMap = function()
{
   if(game.selectionCustom == undefined)
   {
      game.selectionCustom = 0;
   }
   if(game.customLevels > 20)
   {
      if(_root.slider == undefined && _root.textbox != undefined)
      {
         _root.createEmptyMovieClip("slider",game.depth);
         game.depth = game.depth + 1;
         _root.slider.lineStyle(2,16777215,70);
         _root.slider.moveTo(0,0);
         _root.slider._x = Stage.width / 2 + game.textFiveW / 2 + 1;
         _root.slider._y = _root.textbox._y;
         _root.slider.beginFill(3355443,100);
         _root.slider.lineTo(0,0);
         _root.slider.lineTo(20,0);
         _root.slider.lineTo(20,20);
         _root.slider.lineTo(0,20);
         _root.slider.lineTo(0,0);
         _root.slider.moveTo(3,3);
         _root.slider.beginFill(16777215,100);
         _root.slider.lineTo(17,3);
         _root.slider.lineTo(10,17);
      }
      if(game.mouse == true && _root.slider._y >= _root.textbox._y && _root.slider._y <= _root.textbox._height + _root.textbox._y - _root.slider._height)
      {
         if(_xmouse > _root.slider._x && _xmouse < _root.slider._x + _root.slider._width)
         {
            game.slidermouse = true;
            game.mouseup = false;
         }
         if(game.slidermouse == true)
         {
            _root.slider._y = _ymouse;
         }
      }
      else
      {
         game.slidermouse = false;
      }
      if(_root.slider._y < _root.textbox._y)
      {
         _root.slider._y = _root.textbox._y;
      }
      if(_root.slider._y > _root.textbox._height + _root.textbox._y - _root.slider._height)
      {
         _root.slider._y = _root.textbox._height + _root.textbox._y - _root.slider._height;
      }
      customSlideCalc = game.calculateSlider(_root.textbox._y,_root.textbox._height + _root.textbox._y - _root.slider._height,_root.slider._y);
      game.selectionCustom = Math.floor((game.customLevels - 20) * customSlideCalc / 100);
   }
   game.compileCustomList(game.selectionCustom);
   _root.textbox._y = Stage.height / 2 - _root.textbox._height / 2;
   i = 0;
   while(i < game.customLevels && i < 20)
   {
      ik = i + game.selectionCustom;
      var _loc2_ = "savegame" + ik;
      if(_xmouse > _root.textbox[_loc2_]._x && _xmouse < _root.textbox[_loc2_]._x + _root.textbox[_loc2_]._width)
      {
         if(_ymouse - _root.textbox._y > _root.textbox[_loc2_]._y && _ymouse - _root.textbox._y < _root.textbox[_loc2_]._y + _root.textbox[_loc2_]._height)
         {
            _root.textbox[_loc2_].backgroundColor = 10066329;
            if(_root["map" + ik + "over"])
            {
               MOB.start(0,1);
               _root["map" + ik + "over"] = false;
            }
            if(game.mouseup == true && game.mouse == true)
            {
               game.mouseup = false;
               game.mapnumber = ik;
               game.pause = false;
               game.menuStage = "LevelProgression";
               game.leveltype = "custom";
               game.c = ik;
               _root.bg.gotoAndStop("load");
               _root.loader.swapDepths(game.depth);
               game.depth = game.depth + 1;
               _root.bt.removeMovieClip();
               _root.textbox.removeMovieClip();
               _root.slider.removeMovieClip();
               game.clip.removeMovieClip();
               _root.createEmptyMovieClip("OverL",game.depth);
               game.clip = _root.OverL;
            }
            if(Key.isDown(46) && game.deletekey == true)
            {
               game.deletekey = false;
               game.deleteFile(i);
            }
            if(Key.isDown(13) && game.enter == true)
            {
               game.enter = false;
               temparray = game.custom["savegame" + i].array;
               _root.textbox.removeMovieClip();
               game.editFile(i);
            }
         }
         else
         {
            _root.textbox[_loc2_].backgroundColor = 3355443;
            _root["map" + ik + "over"] = true;
         }
      }
      i++;
   }
};
game.importMap = function()
{
   if(game.importStage == 1)
   {
      _root.createEmptyMovieClip("textbox",game.depth);
      game.depth = game.depth + 1;
      _root.textbox.createTextField("inputfield",game.depth,-10000,-10000,game.textThreeW,game.textThreeH);
      game.depth = game.depth + 1;
      _root.textbox.inputfield._y = Stage.height / 2 - game.textThreeH / 2 - 40;
      _root.textbox.inputfield._x = Stage.width / 2 - game.textThreeW / 2;
      _root.textbox.inputfield.background = true;
      _root.textbox.inputfield.backgroundColor = 3355443;
      _root.textbox.inputfield.textColor = 16777215;
      _root.textbox.inputfield.wordWrap = true;
      _root.textbox.inputfield.type = "input";
      _root.textbox.inputfield.setTextFormat(game.textOneFormat);
      _root.textbox.createTextField("exportexp",game.depth,-10000,-10000,game.textSevenW,game.textSevenH);
      game.depth = game.depth + 1;
      _root.textbox.exportexp.selectable = false;
      _root.textbox.exportexp.wordWrap = true;
      _root.textbox.exportexp.text = "Copy and paste level codes given to you by your friends into here!\n\n(press enter to advance)";
      _root.textbox.exportexp._y = 350;
      _root.textbox.exportexp._x = Stage.width / 2 - game.textSevenW / 2;
      _root.textbox.exportexp.textColor = 16777215;
      _root.textbox.exportexp.setTextFormat(game.textOneFormat);
      game.importStage = 2;
   }
   else if(game.importStage == 2)
   {
      if(Key.isDown(13) && game.enter == true)
      {
         game.enter = false;
         game.holdings = _root.textbox.inputfield.text;
         game.importStage = 3;
         _root.textbox.removeMovieClip();
      }
   }
   else if(game.importStage == 3)
   {
      temparrayheight = 0;
      temparraywidth = 0;
      game.tempArray = new Array();
      game.tempCharArray = new Array();
      game.tempArray[temparraywidth] = new Array();
      i = 1;
      while(i < game.holdings.length)
      {
         holdtemp = game.holdings.substring(i - 1,i);
         holdnum = Number(holdtemp);
         holdend = game.holdings.substring(i - 1,i + 1);
         if(game.inputMidStage == 1)
         {
            if(holdtemp == "]" && holdend != "]]")
            {
               temparraywidth++;
               temparrayheight = 0;
               game.tempArray[temparraywidth] = new Array();
            }
            else if(holdend == "]]")
            {
               game.inputMidStage = 2;
               i++;
            }
            g = 0;
            while(g < 10)
            {
               if(holdnum === g)
               {
                  b = 0;
                  while(b < 4)
                  {
                     traceholdstrin = game.holdings.substring(i - 1 + b,i + b);
                     traceholdnum = Number(traceholdstrin);
                     if(traceholdnum <= 0 && traceholdnum != 0)
                     {
                        tracefullstrin = game.holdings.substring(i - 1,i + b - 1);
                        tracefullnum = Number(tracefullstrin);
                        game.tempArray[temparraywidth].push(tracefullnum);
                        i = i + (b - 1);
                        break;
                     }
                     b++;
                  }
               }
               g++;
            }
         }
         else if(game.inputMidStage == 2)
         {
            g = 0;
            while(g < 10)
            {
               if(holdnum == g)
               {
                  b = 1;
                  while(b < 4)
                  {
                     traceholdstrin = game.holdings.substring(i - 1 + b,i + b);
                     traceholdnum = Number(traceholdstrin);
                     if(traceholdnum <= 0 && traceholdnum != 0)
                     {
                        tracefullstrin = game.holdings.substring(i - 1,i + b - 1);
                        tracefullnum = Number(tracefullstrin);
                        game.tempCharArray.push(tracefullnum);
                        i = i + b;
                        break;
                     }
                     b++;
                  }
                  break;
               }
               g++;
            }
         }
         i++;
      }
      game.trialCharx = game.tempCharArray[0];
      game.trialChary = game.tempCharArray[1];
      game.bgExtract = game.tempCharArray[2];
      scrolltypetemp = game.tempCharArray[3];
      _root.bg.removeMovieClip();
      _root.attachMovie("bg","bg",1);
      _root.bg.gotoAndStop(game.bgExtract + 1);
      _root.bg._y = (_root.bg._height - Stage.height) * -1;
      importWidth = game.tempArray.length;
      importHeight = game.tempArray[0].length;
      game.inputMidStage = 1;
      game.importStage = 4;
   }
   else if(game.importStage == 4)
   {
      game.clip.removeMovieClip();
      _root.createEmptyMovieClip("OverL",game.depth);
      game.clip = _root.OverL;
      game.creationArray = game.tempArray;
      i = 0;
      while(i < importWidth)
      {
         j = 0;
         while(j < importHeight)
         {
            var _loc2_ = "t_" + i + "_" + j;
            game[_loc2_] = new Function();
            game[_loc2_].type = game.creationArray[i][j];
            game[_loc2_].x = i * game.tileW;
            game[_loc2_].y = j * game.tileH;
            game[_loc2_].mouse = true;
            game.clip.attachMovie("tile",_loc2_,game.depth);
            game.clip[_loc2_]._x = game[_loc2_].x;
            game.clip[_loc2_]._y = game[_loc2_].y;
            game.clip[_loc2_].gotoAndStop(game[_loc2_].type + 1);
            game.depth = game.depth + 1;
            j++;
         }
         i++;
      }
      game.clip.attachMovie("char","trialchar",game.depth);
      game.depth = game.depth + 1;
      game.clip.trialchar._x = game.trialCharx * game.tileW + (game.tileW / 2 - game.clip.trialchar._width / 2);
      game.clip.trialchar._y = game.trialChary * game.tileW + (game.tileH - game.clip.trialchar._height);
      game.mouseCheckW = importWidth;
      game.mouseCheckH = importHeight;
      game.notimport = false;
      game.clip._y = (importHeight * game.tileH - Stage.height) * -1;
      game.importStage = 1;
      game.menuStage = "mapcreation";
      game.pause = false;
      stopAllSounds();
      muson = false;
      game.creationStage = 7;
   }
};
game.charDeath = function(ob)
{
   if(game.deathStage == 1)
   {
      ob.clip.gotoAndStop(game.dtype);
      _root["det" + (random(3) + 1)].start(0,1);
      _root[game.dsound].start(0,1);
      if(game.dtype == "deathblow")
      {
         i = 1;
         while(i <= 5)
         {
            game.clip.attachMovie("gib","gib" + i,game.depth);
            game.depth = game.depth + 1;
            game.clip["gib" + i]._x = ob.x;
            game.clip["gib" + i]._y = ob.y;
            game.clip["gib" + i].gotoAndStop(i);
            game.clip["gib" + i].velocity = random(4) - 2;
            if(game.clip["gib" + i].velocity == 0)
            {
               game.clip["gib" + i].velocity = 1;
            }
            game.clip["gib" + i].xspeed = random(6) - 3;
            if(game.clip["gib" + i].xspeed == 0)
            {
               game.clip["gib" + i].xspeed = 1;
            }
            game.clip["gib" + i].rotater = random(20) - 10;
            i++;
         }
      }
      game.deathStage = 2;
   }
   else if(game.deathStage == 2)
   {
      i = 1;
      while(i <= 5)
      {
         game.clip["gib" + i]._y = game.clip["gib" + i]._y - game.clip["gib" + i].velocity;
         game.clip["gib" + i].velocity = game.clip["gib" + i].velocity - 1;
         game.clip["gib" + i]._x = game.clip["gib" + i]._x + game.clip["gib" + i].xspeed;
         game.clip["gib" + i]._rotation = game.clip["gib" + i]._rotation + game.clip["gib" + i].rotater;
         i++;
      }
   }
};
game.deathScreen = function()
{
   game.pause = true;
   if(_root.blackout._alpha >= 50 && _root.blackout._alpha != undefined && _root.textbox == undefined)
   {
      _root.createEmptyMovieClip("textbox",game.depth);
      game.depth = game.depth + 1;
      _root.textbox.createTextField("deathText",game.depth,-10000,-10000,game.textFourW,game.textFourH);
      game.depth = game.depth + 1;
      _root.textbox.deathText._y = Stage.height / 2 - game.textFourH / 2;
      _root.textbox.deathText._x = Stage.width / 2 - game.textFourW / 2;
      _root.textbox.deathText.selectable = false;
      _root.textbox.deathText.textColor = 16777215;
      _root.textbox.deathText.text = "YOU DIED :(";
      _root.textbox.deathText.setTextFormat(game.textFourFormat);
   }
};
game.tileBrain = function(ob)
{
   if(game.damsync > 0)
   {
      game.damsync--;
   }
   else
   {
      game.damsync = 50;
      if(!game.damtypephase)
      {
         game.damtypephase = true;
      }
      else if(game.damtypephase)
      {
         game.damtypephase = false;
      }
   }
   if(game.bsync > 0)
   {
      game.bsync--;
   }
   else
   {
      game.bsync = 30;
   }
   if(game.msync > 0)
   {
      game.msync--;
   }
   else
   {
      game.msync = 50;
   }
   i = game.currentStageY - game.blockplace;
   while(i < game.mVH + game.currentStageY - game.blockplace)
   {
      j = 0;
      while(j < game.mW)
      {
         var _loc1_ = "t_" + j + "_" + i;
         if(game.clip[_loc1_] != undefined)
         {
            if(game.use[_loc1_].damTimer != undefined)
            {
               if(game.use[_loc1_].phase == false && game.damtypephase)
               {
                  game.use[_loc1_].phase = true;
                  game.use[_loc1_].deadly = true;
                  game.clip[_loc1_].tile.gotoAndStop(2);
                  game.use[_loc1_].damTimer = 30;
               }
               else if(game.use[_loc1_].phase == true && !game.damtypephase)
               {
                  game.use[_loc1_].phase = false;
                  game.clip[_loc1_].tile.gotoAndStop(1);
                  game.use[_loc1_].damTimer = 50;
                  game.use[_loc1_].deadly = false;
               }
            }
            if(game.use[_loc1_].mshooting == 1)
            {
               if(game.msync <= 0)
               {
                  game.use["missile" + game.missilen] = new Object();
                  game.clip.attachMovie(game.use[_loc1_].mtype,"missile" + game.missilen,game.depth);
                  game.depth = game.depth + 1;
                  game.use["missile" + game.missilen].speed = 1;
                  game.use["missile" + game.missilen].mtype = game.use[_loc1_].mtype;
                  game.use["missile" + game.missilen].vx = 0;
                  game.use["missile" + game.missilen].vy = 0;
                  game.use["missile" + game.missilen].x = game.clip[_loc1_]._x + game.tileW / 2;
                  game.use["missile" + game.missilen].y = game.clip[_loc1_]._y + game.tileH / 2;
                  game.clip["missile" + game.missilen]._x = game.use["missile" + game.missilen].x;
                  game.clip["missile" + game.missilen]._y = game.use["missile" + game.missilen].y;
                  game.mArray.push(game.missilen);
                  game.missilen = game.missilen + 1;
                  game.clip.attachMovie("l_" + game.use[_loc1_].mtype,"dust" + game.dustn,game.depth);
                  game.depth = game.depth + 1;
                  game.clip["dust" + game.dustn]._x = game.clip[_loc1_]._x + game.tileW / 2;
                  game.clip["dust" + game.dustn]._y = game.clip[_loc1_]._y + game.tileH / 2;
                  game.clip["dust" + game.dustn].timer = 12;
                  game.dustArray.push(game.dustn);
                  game.dustn = game.dustn + 1;
               }
            }
            else if(game.use[_loc1_].mshooting == -1)
            {
               if(game.msync <= 0)
               {
                  game.use["missile" + game.missilen] = new Object();
                  game.clip.attachMovie(game.use[_loc1_].mtype,"missile" + game.missilen,game.depth);
                  game.use["missile" + game.missilen].mtype = game.use[_loc1_].mtype;
                  game.depth = game.depth + 1;
                  game.use["missile" + game.missilen].speed = 1;
                  game.use["missile" + game.missilen].vx = 0;
                  game.use["missile" + game.missilen].vy = 0;
                  game.use["missile" + game.missilen].x = game.clip[_loc1_]._x + game.tileW / 2;
                  game.use["missile" + game.missilen].y = game.clip[_loc1_]._y + game.tileH / 2;
                  game.clip["missile" + game.missilen]._x = game.use["missile" + game.missilen].x;
                  game.clip["missile" + game.missilen]._y = game.use["missile" + game.missilen].y;
                  game.mArray.push(game.missilen);
                  game.missilen = game.missilen + 1;
                  game.clip.attachMovie("l_" + game.use[_loc1_].mtype,"dust" + game.dustn,game.depth);
                  game.depth = game.depth + 1;
                  game.clip["dust" + game.dustn]._xscale = -100;
                  game.clip["dust" + game.dustn]._x = game.clip[_loc1_]._x + game.tileW / 2;
                  game.clip["dust" + game.dustn]._y = game.clip[_loc1_]._y + game.tileH / 2;
                  game.clip["dust" + game.dustn].timer = 12;
                  game.dustArray.push(game.dustn);
                  game.dustn = game.dustn + 1;
               }
            }
            if(game.use[_loc1_].shooting == 1)
            {
               if(game.bsync <= 0)
               {
                  game.use["bullet" + game.bnumber] = new Object();
                  game.clip.attachMovie(game.use[_loc1_].btype,"bullet" + game.bnumber,game.depth);
                  game.depth = game.depth + 1;
                  game.use["bullet" + game.bnumber].speed = 10;
                  game.use["bullet" + game.bnumber].btype = game.use[_loc1_].btype;
                  game.use["bullet" + game.bnumber].x = game.clip[_loc1_]._x + game.clip["bullet" + game.bnumber]._width;
                  game.use["bullet" + game.bnumber].y = game.clip[_loc1_]._y + (game.tileH / 2 - game.clip["bullet" + game.bnumber]._height / 2);
                  game.clip["bullet" + game.bnumber]._x = game.use["bullet" + game.bnumber].x;
                  game.clip["bullet" + game.bnumber]._y = game.use["bullet" + game.bnumber].y;
                  game.use["bullet" + game.bnumber].cacheAsBitmap = true;
                  game.bArray.push(game.bnumber);
                  game.bnumber = game.bnumber + 1;
                  game.clip.attachMovie("l_" + game.use[_loc1_].btype,"dust" + game.dustn,game.depth);
                  game.depth = game.depth + 1;
                  game.clip["dust" + game.dustn]._x = game.clip[_loc1_]._x + game.tileW + game.clip["dust" + game.dustn]._width;
                  game.clip["dust" + game.dustn]._y = game.clip[_loc1_]._y + (game.tileH / 2 - game.clip["dust" + game.dustn]._height / 2);
                  game.clip["dust" + game.dustn].timer = 12;
                  game.dustArray.push(game.dustn);
                  game.dustn = game.dustn + 1;
               }
            }
            else if(game.use[_loc1_].shooting == -1)
            {
               if(game.bsync <= 0)
               {
                  game.use["bullet" + game.bnumber] = new Object();
                  game.clip.attachMovie(game.use[_loc1_].btype,"bullet" + game.bnumber,game.depth);
                  game.depth = game.depth + 1;
                  game.use["bullet" + game.bnumber].btype = game.use[_loc1_].btype;
                  game.clip["bullet" + game.bnumber]._xscale = -100;
                  game.use["bullet" + game.bnumber].speed = -10;
                  game.use["bullet" + game.bnumber].x = game.clip[_loc1_]._x;
                  game.use["bullet" + game.bnumber].y = game.clip[_loc1_]._y + (game.tileH / 2 - game.clip["bullet" + game.bnumber]._height / 2);
                  game.clip["bullet" + game.bnumber]._x = game.use["bullet" + game.bnumber].x;
                  game.clip["bullet" + game.bnumber]._y = game.use["bullet" + game.bnumber].y;
                  game.use["bullet" + game.bnumber].cacheAsBitmap = true;
                  game.bArray.push(game.bnumber);
                  game.bnumber = game.bnumber + 1;
                  game.clip.attachMovie("l_" + game.use[_loc1_].btype,"dust" + game.dustn,game.depth);
                  game.depth = game.depth + 1;
                  game.clip["dust" + game.dustn]._xscale = -100;
                  game.clip["dust" + game.dustn]._x = game.clip[_loc1_]._x - game.clip["dust" + game.dustn]._width;
                  game.clip["dust" + game.dustn]._y = game.clip[_loc1_]._y + (game.tileH / 2 - game.clip["dust" + game.dustn]._height / 2);
                  game.clip["dust" + game.dustn].timer = 12;
                  game.dustArray.push(game.dustn);
                  game.dustn = game.dustn + 1;
               }
            }
            else if(game.use[_loc1_].activated == true && !game.use[_loc1_].done)
            {
               if(game.use[_loc1_].dtimer > 0)
               {
                  game.use[_loc1_].dtimer = game.use[_loc1_].dtimer - 1;
                  if(game.use[_loc1_].baid)
                  {
                     game.baid = true;
                     bpick.start(0,1);
                  }
               }
               else
               {
                  game.clip[_loc1_].tile.gotoAndPlay(1);
                  game.clip[_loc1_].swapDepths(game.depth);
                  game.depth = game.depth + 1;
                  game.clip.char.swapDepths(game.depth);
                  game.depth = game.depth + 1;
                  game.use[_loc1_].walkable = true;
                  game.use[_loc1_].done = true;
               }
            }
         }
         j++;
      }
      i++;
   }
};
game.bulletBrain = function(ob)
{
   p = 0;
   while(p < game.bArray.length)
   {
      bname = "bullet" + game.bArray[p];
      if(game.use[bname].speed > 0)
      {
         xc = Math.floor((game.use[bname].x + game.clip[bname]._width + game.use[bname].speed) / game.tileW);
         yc = Math.floor(game.use[bname].y / game.tileH);
         xtc = Math.floor((game.use[bname].x + game.clip[bname]._width) / game.tileW);
         ytc = Math.floor(game.use[bname].y / game.tileH);
      }
      else if(game.use[bname].speed < 0)
      {
         xc = Math.floor((game.use[bname].x - game.clip[bname]._width + game.use[bname].speed) / game.tileW);
         yc = Math.floor(game.use[bname].y / game.tileH);
         xtc = Math.floor((game.use[bname].x - game.clip[bname]._width) / game.tileW);
         ytc = Math.floor(game.use[bname].y / game.tileH);
      }
      var _loc2_ = "t_" + xc + "_" + yc;
      var _loc3_ = "t_" + xtc + "_" + ytc;
      if(game.use[_loc2_].walkable && game.use[_loc3_].walkable)
      {
         game.use[bname].x = game.use[bname].x + game.use[bname].speed;
         game.clip[bname]._x = game.use[bname].x;
      }
      else
      {
         upb = game.clip[bname]._y;
         downb = game.clip[bname]._y + game.clip[bname]._height;
         leftb = game.clip[bname]._x + game.use[bname].speed;
         rightb = game.clip[bname]._x + game.clip[bname]._width + game.use[bname].speed;
         upo = ob.y;
         downo = ob.y + ob.height * 2;
         lefto = ob.x;
         righto = ob.x + ob.width * 2;
         if(upb > upo && upb < downo && leftb > lefto && leftb < righto || upb > upo && upb < downo && rightb > lefto && rightb < righto || downb > upo && downb < downo && rightb > lefto && rightb < righto || downb > upo && downb < downo && leftb > lefto && leftb < righto)
         {
            game.death = true;
            game.dtype = "deathblow";
            game.dsound = "bexplode";
         }
         tempExplode = "e_" + game.use[bname].btype;
         game.clip.attachMovie(tempExplode,"dust" + game.dustn,game.depth);
         game.depth = game.depth + 1;
         if(game.use[bname].speed > 0)
         {
            game.clip["dust" + game.dustn]._x = xc * game.tileW - game.clip["dust" + game.dustn]._width;
         }
         else
         {
            game.clip["dust" + game.dustn]._x = xc * game.tileW + game.clip["dust" + game.dustn]._width;
         }
         game.clip["dust" + game.dustn]._y = yc * game.tileH + (game.tileH / 2 - game.clip["dust" + game.dustn]._width / 2);
         game.clip["dust" + game.dustn].timer = 12;
         game.dustArray.push(game.dustn);
         game.dustn = game.dustn + 1;
         game.clip[bname].removeMovieClip();
         game.bArray.splice(p,1);
         p--;
      }
      upb = game.clip[bname]._y;
      downb = game.clip[bname]._y + game.clip[bname]._height;
      leftb = game.clip[bname]._x;
      rightb = game.clip[bname]._x + game.clip[bname]._width;
      upo = ob.y;
      downo = ob.y + ob.height * 2;
      lefto = ob.x;
      righto = ob.x + ob.width * 2;
      if(upb > upo && upb < downo && leftb > lefto && leftb < righto || upb > upo && upb < downo && rightb > lefto && rightb < righto || downb > upo && downb < downo && rightb > lefto && rightb < righto || downb > upo && downb < downo && leftb > lefto && leftb < righto)
      {
         game.death = true;
         game.dtype = "deathblow";
         game.dsound = "bexplode";
      }
      p++;
   }
};
game.deleteFile = function(filenum)
{
   i = filenum;
   while(i < game.customLevels)
   {
      game.savefile.data["custommaparray" + i] = game.savefile.data["custommaparray" + (i + 1)];
      game.savefile.data["custommapname" + i] = game.savefile.data["custommapname" + (i + 1)];
      game.savefile.data["customchar" + i] = game.savefile.data["customchar" + (i + 1)];
      game.savefile.data["custombg" + i] = game.savefile.data["custombg" + (i + 1)];
      game.custom["savegame" + i].array = game.custom["savegame" + (i + 1)].array;
      game.custom["savegame" + i].name = game.custom["savegame" + (i + 1)].name;
      game.custom["savegame" + i].char = game.custom["savegame" + (i + 1)].char;
      game.custom["savegame" + i].bg = game.custom["savegame" + (i + 1)].bg;
      i++;
   }
   game.customLevels--;
   game.savefile.data.customAmount = game.customLevels;
   game.savefile.flush();
};
game.editFile = function(filenum)
{
   importWidth = temparray.length;
   importHeight = temparray[0].length;
   game.clip.removeMovieClip();
   _root.createEmptyMovieClip("OverL",game.depth);
   game.clip = _root.OverL;
   game.creationArray = game.tempArray;
   game.creationYlength = importHeight * game.tileH;
   i = 0;
   while(i < importWidth)
   {
      j = 0;
      while(j < importHeight)
      {
         var _loc2_ = "t_" + i + "_" + j;
         game[_loc2_] = new Function();
         game[_loc2_].type = temparray[i][j];
         game[_loc2_].x = i * game.tileW;
         game[_loc2_].y = j * game.tileH;
         game[_loc2_].mouse = true;
         game.clip.attachMovie("tile",_loc2_,game.depth);
         game.clip[_loc2_]._x = game[_loc2_].x;
         game.clip[_loc2_]._y = game[_loc2_].y;
         game.clip[_loc2_].gotoAndStop(game[_loc2_].type + 1);
         game.depth = game.depth + 1;
         j++;
      }
      i++;
   }
   game.creationArray = temparray;
   game.deletor = filenum;
   game.mouseCheckW = importWidth;
   game.mouseCheckH = importHeight;
   game.notimport = true;
   game.clip._y = (importHeight * game.tileH - Stage.height) * -1;
   game.menuStage = "mapcreation";
   game.pause = false;
   _root.bg.removeMovieClip();
   _root.attachMovie("bg","bg",1);
   _root.bg.gotoAndStop(game.custom["savegame" + filenum].bg);
   game.bgExtract = game.custom["savegame" + filenum].bg - 1;
   _root.bg._y = (_root.bg._height - Stage.height) * -1;
   _root.bg.l1.cacheAsBitmap = true;
   _root.bg.l2.cacheAsBitmap = true;
   _root.bg.l3.cacheAsBitmap = true;
   stopAllSounds();
   muson = false;
   game.creationStage = 5;
};
game.charAnimations = function(ob)
{
   if(game.invincibleTimer > 0)
   {
      game.invincibleTimer--;
      if(ob.clip._alpha == 100)
      {
         ob.clip._alpha = 50;
      }
      else if(ob.clip._alpha == 50)
      {
         ob.clip._alpha = 100;
      }
   }
   else if(ob.clip._alpha == 50)
   {
      ob.clip._alpha = 100;
   }
   if(ob.jump == true && ob.walljumpr == true && (ob.velocity > 3 || ob.velocity < -3))
   {
      if(game.bgirlon == true)
      {
         game.clip.attachMovie("bsides","dust" + game.dustn,game.depth);
      }
      else if(game.ccon == true)
      {
         game.clip.attachMovie("csides","dust" + game.dustn,game.depth);
      }
      else if(game.gishon == true)
      {
         game.clip.attachMovie("gsides","dust" + game.dustn,game.depth);
      }
      else if(!game.drfeton)
      {
         game.clip.attachMovie("sides","dust" + game.dustn,game.depth);
      }
      game.depth = game.depth + 1;
      game.clip["dust" + game.dustn]._x = ob.x - ob.width;
      game.clip["dust" + game.dustn]._y = ob.y;
      game.clip["dust" + game.dustn].timer = 12;
      game.dustArray.push(game.dustn);
      game.dustn = game.dustn + 1;
      game.grabCorners(ob.x - 1,ob.y,ob);
      if(!ob.upleftBLL && !ob.upleft && !ob.upleftNB)
      {
         if(game.bgirlon == true)
         {
            game.clip.attachMovie("bvmarks","mark" + game.markn,game.depth);
         }
         else if(game.ccon == true)
         {
            game.clip.attachMovie("cvmarks","mark" + game.markn,game.depth);
         }
         else if(game.gishon == true)
         {
            game.clip.attachMovie("gvmarks","mark" + game.markn,game.depth);
         }
         else if(!game.drfeton)
         {
            game.clip.attachMovie("vmarks","mark" + game.markn,game.depth);
         }
         game.depth = game.depth + 1;
         game.clip.char.swapDepths(game.depth);
         game.depth = game.depth + 1;
         game.clip["mark" + game.markn]._x = (ob.leftX + 1) * game.tileW - 2;
         game.clip["mark" + game.markn]._y = ob.upY * game.tileH;
         game.clip["mark" + game.markn].cacheAsBitmap = true;
         game.markn = game.markn + 1;
         game.use["t_" + ob.leftX + "_" + ob.upY].bloodLeft = true;
      }
      game.grabCorners(ob.x - 1,ob.y - 1,ob);
      if(!ob.downleftBLL && !ob.downleft && !ob.downleftNB)
      {
         if(game.bgirlon == true)
         {
            game.clip.attachMovie("bvmarks","mark" + game.markn,game.depth);
         }
         else if(game.ccon == true)
         {
            game.clip.attachMovie("cvmarks","mark" + game.markn,game.depth);
         }
         else if(game.gishon == true)
         {
            game.clip.attachMovie("gvmarks","mark" + game.markn,game.depth);
         }
         else if(!game.drfeton)
         {
            game.clip.attachMovie("vmarks","mark" + game.markn,game.depth);
         }
         game.depth = game.depth + 1;
         game.clip.char.swapDepths(game.depth);
         game.depth = game.depth + 1;
         game.clip["mark" + game.markn]._x = (ob.leftX + 1) * game.tileW - 2;
         game.clip["mark" + game.markn]._y = ob.downY * game.tileH;
         game.clip["mark" + game.markn].cacheAsBitmap = true;
         game.markn = game.markn + 1;
         game.use["t_" + ob.leftX + "_" + ob.downY].bloodLeft = true;
      }
   }
   else if(ob.jump == true && ob.walljumpl == true && (ob.velocity > 3 || ob.velocity < -3))
   {
      if(game.bgirlon == true)
      {
         game.clip.attachMovie("bsides","dust" + game.dustn,game.depth);
      }
      else if(game.ccon == true)
      {
         game.clip.attachMovie("csides","dust" + game.dustn,game.depth);
      }
      else if(game.gishon == true)
      {
         game.clip.attachMovie("gsides","dust" + game.dustn,game.depth);
      }
      else if(!game.drfeton)
      {
         game.clip.attachMovie("sides","dust" + game.dustn,game.depth);
      }
      game.depth = game.depth + 1;
      game.clip["dust" + game.dustn]._x = ob.x + game.clip["dust" + game.dustn]._width + ob.width * 2;
      game.clip["dust" + game.dustn]._y = ob.y;
      game.clip["dust" + game.dustn]._xscale = -100;
      game.clip["dust" + game.dustn].timer = 12;
      game.dustArray.push(game.dustn);
      game.dustn = game.dustn + 1;
      game.grabCorners(ob.x + 1,ob.y,ob);
      if(!ob.uprightBLR && !ob.upright && !ob.uprightNB)
      {
         if(game.bgirlon == true)
         {
            game.clip.attachMovie("bvmarks","mark" + game.markn,game.depth);
         }
         else if(game.ccon == true)
         {
            game.clip.attachMovie("cvmarks","mark" + game.markn,game.depth);
         }
         else if(game.gishon == true)
         {
            game.clip.attachMovie("gvmarks","mark" + game.markn,game.depth);
         }
         else if(!game.drfeton)
         {
            game.clip.attachMovie("vmarks","mark" + game.markn,game.depth);
         }
         game.depth = game.depth + 1;
         game.clip.char.swapDepths(game.depth);
         game.depth = game.depth + 1;
         game.clip["mark" + game.markn]._x = ob.rightX * game.tileW + 2;
         game.clip["mark" + game.markn]._y = ob.upY * game.tileH;
         game.clip["mark" + game.markn]._xscale = -100;
         game.clip["mark" + game.markn].cacheAsBitmap = true;
         game.markn = game.markn + 1;
         game.use["t_" + ob.rightX + "_" + ob.upY].bloodRight = true;
      }
      game.grabCorners(ob.x + 1,ob.y - 1,ob);
      if(!ob.downrightBLR && !ob.downright && !ob.downrightNB)
      {
         if(game.bgirlon == true)
         {
            game.clip.attachMovie("bvmarks","mark" + game.markn,game.depth);
         }
         else if(game.ccon == true)
         {
            game.clip.attachMovie("cvmarks","mark" + game.markn,game.depth);
         }
         else if(game.gishon == true)
         {
            game.clip.attachMovie("gvmarks","mark" + game.markn,game.depth);
         }
         else if(!game.drfeton)
         {
            game.clip.attachMovie("vmarks","mark" + game.markn,game.depth);
         }
         game.depth = game.depth + 1;
         game.clip.char.swapDepths(game.depth);
         game.depth = game.depth + 1;
         game.clip["mark" + game.markn]._x = ob.rightX * game.tileW + 2;
         game.clip["mark" + game.markn]._y = ob.downY * game.tileH;
         game.clip["mark" + game.markn]._xscale = -100;
         game.clip["mark" + game.markn].cacheAsBitmap = true;
         game.markn = game.markn + 1;
         game.use["t_" + ob.rightX + "_" + ob.downY].bloodRight = true;
      }
   }
   if(game.cdir == 1 && game.xcurrentspeed >= 8 && ob.jump == false)
   {
      if(game.bgirlon == true)
      {
         game.clip.attachMovie("bruns","dust" + game.dustn,game.depth);
      }
      else if(game.ccon == true)
      {
         game.clip.attachMovie("cruns","dust" + game.dustn,game.depth);
      }
      else if(game.gishon == true)
      {
         game.clip.attachMovie("gruns","dust" + game.dustn,game.depth);
      }
      else if(!game.drfeton)
      {
         game.clip.attachMovie("runs","dust" + game.dustn,game.depth);
      }
      game.depth = game.depth + 1;
      game.clip["dust" + game.dustn]._x = ob.x - (game.clip["dust" + game.dustn]._width - ob.width * 2);
      game.clip["dust" + game.dustn]._y = ob.y - (game.clip["dust" + game.dustn]._height - ob.height * 2);
      game.clip["dust" + game.dustn]._xscale = -100;
      game.clip["dust" + game.dustn].timer = 12;
      game.dustArray.push(game.dustn);
      game.dustn = game.dustn + 1;
      game.grabCorners(ob.x,ob.y + 1,ob);
      if(!ob.downleftBLD && !ob.downleft && !ob.downleftNB)
      {
         if(game.bgirlon == true)
         {
            game.clip.attachMovie("bhmarks","mark" + game.markn,game.depth);
         }
         else if(game.ccon == true)
         {
            game.clip.attachMovie("chmarks","mark" + game.markn,game.depth);
         }
         else if(game.gishon == true)
         {
            game.clip.attachMovie("ghmarks","mark" + game.markn,game.depth);
         }
         else if(!game.drfeton)
         {
            game.clip.attachMovie("hmarks","mark" + game.markn,game.depth);
         }
         game.depth = game.depth + 1;
         game.clip["mark" + game.markn]._x = ob.leftX * game.tileW;
         game.clip["mark" + game.markn]._y = ob.downY * game.tileH;
         game.clip["mark" + game.markn].cacheAsBitmap = true;
         game.markn = game.markn + 1;
         game.use["t_" + ob.leftX + "_" + ob.downY].bloodDown = true;
      }
      if(!ob.downrightBLD && !ob.downright && !ob.downrightNB)
      {
         if(game.bgirlon == true)
         {
            game.clip.attachMovie("bhmarks","mark" + game.markn,game.depth);
         }
         else if(game.ccon == true)
         {
            game.clip.attachMovie("chmarks","mark" + game.markn,game.depth);
         }
         else if(game.gishon == true)
         {
            game.clip.attachMovie("ghmarks","mark" + game.markn,game.depth);
         }
         else if(!game.drfeton)
         {
            game.clip.attachMovie("hmarks","mark" + game.markn,game.depth);
         }
         game.depth = game.depth + 1;
         game.clip["mark" + game.markn]._x = ob.rightX * game.tileW;
         game.clip["mark" + game.markn]._y = ob.downY * game.tileH;
         game.clip["mark" + game.markn].cacheAsBitmap = true;
         game.markn = game.markn + 1;
         game.use["t_" + ob.rightX + "_" + ob.downY].bloodDown = true;
      }
   }
   else if(game.cdir == -1 && game.xcurrentspeed <= -8 && ob.jump == false)
   {
      if(game.bgirlon == true)
      {
         game.clip.attachMovie("bruns","dust" + game.dustn,game.depth);
      }
      else if(game.ccon == true)
      {
         game.clip.attachMovie("cruns","dust" + game.dustn,game.depth);
      }
      else if(game.gishon == true)
      {
         game.clip.attachMovie("gruns","dust" + game.dustn,game.depth);
      }
      else if(!game.drfeton)
      {
         game.clip.attachMovie("runs","dust" + game.dustn,game.depth);
      }
      game.depth = game.depth + 1;
      game.clip["dust" + game.dustn]._x = ob.x + ob.width * 2;
      game.clip["dust" + game.dustn]._y = ob.y - (game.clip["dust" + game.dustn]._height - ob.height * 2);
      game.clip["dust" + game.dustn].timer = 12;
      game.dustArray.push(game.dustn);
      game.dustn = game.dustn + 1;
      game.grabCorners(ob.x,ob.y + 1,ob);
      if(!ob.downleftBLD && !ob.downleft && !ob.downleftNB)
      {
         if(game.bgirlon == true)
         {
            game.clip.attachMovie("bhmarks","mark" + game.markn,game.depth);
         }
         else if(game.ccon == true)
         {
            game.clip.attachMovie("chmarks","mark" + game.markn,game.depth);
         }
         else if(game.gishon == true)
         {
            game.clip.attachMovie("ghmarks","mark" + game.markn,game.depth);
         }
         else if(!game.drfeton)
         {
            game.clip.attachMovie("hmarks","mark" + game.markn,game.depth);
         }
         game.depth = game.depth + 1;
         game.clip["mark" + game.markn]._x = ob.leftX * game.tileW;
         game.clip["mark" + game.markn]._y = ob.downY * game.tileH;
         game.clip["mark" + game.markn].cacheAsBitmap = true;
         game.markn = game.markn + 1;
         game.use["t_" + ob.leftX + "_" + ob.downY].bloodDown = true;
      }
      if(!ob.downrightBLD && !ob.downright && !ob.downrightNB)
      {
         if(game.bgirlon == true)
         {
            game.clip.attachMovie("bhmarks","mark" + game.markn,game.depth);
         }
         else if(game.ccon == true)
         {
            game.clip.attachMovie("chmarks","mark" + game.markn,game.depth);
         }
         else if(game.gishon == true)
         {
            game.clip.attachMovie("ghmarks","mark" + game.markn,game.depth);
         }
         else if(!game.drfeton)
         {
            game.clip.attachMovie("hmarks","mark" + game.markn,game.depth);
         }
         game.depth = game.depth + 1;
         game.clip["mark" + game.markn]._x = ob.rightXK * game.tileW;
         game.clip["mark" + game.markn]._y = ob.downYK * game.tileH;
         game.clip["mark" + game.markn].cacheAsBitmap = true;
         game.markn = game.markn + 1;
         game.use["t_" + ob.rightXK + "_" + ob.downYK].bloodDown = true;
      }
   }
   if(game.landanimation == true && game.cdir == 1)
   {
      ob.clip.gotoAndStop("landright");
   }
   else if(game.landanimation == true && game.cdir == -1)
   {
      ob.clip.gotoAndStop("landleft");
   }
   else if(ob.jump == false && game.xcurrentspeed == 0 && game.cdir == 1)
   {
      ob.clip.gotoAndStop("standright");
   }
   else if(ob.jump == false && game.xcurrentspeed == 0 && game.cdir == -1)
   {
      ob.clip.gotoAndStop("standleft");
   }
   else if(ob.jump == false && game.xcurrentspeed > 0 && game.xcurrentspeed < 8 && game.cdir == 1)
   {
      ob.clip.gotoAndStop("walkright");
   }
   else if(ob.jump == false && game.xcurrentspeed < 0 && game.xcurrentspeed > -8 && game.cdir == -1)
   {
      ob.clip.gotoAndStop("walkleft");
   }
   else if(ob.jump == false && game.xcurrentspeed >= 8 && game.cdir == 1)
   {
      ob.clip.gotoAndStop("runright");
   }
   else if(ob.jump == false && game.xcurrentspeed <= -8 && game.cdir == -1)
   {
      ob.clip.gotoAndStop("runleft");
   }
   else if(ob.jump == true && ob.walljumpr == true)
   {
      ob.clip.gotoAndStop("wallslideright");
   }
   else if(ob.jump == true && ob.walljumpl == true)
   {
      ob.clip.gotoAndStop("wallslideleft");
   }
   else if(ob.jump == true && ob.velocity <= 0 && game.cdir == 1)
   {
      ob.clip.gotoAndStop("jumpupright");
   }
   else if(ob.jump == true && ob.velocity <= 0 && game.cdir == -1)
   {
      ob.clip.gotoAndStop("jumpupleft");
   }
   else if(ob.jump == true && ob.velocity > 0 && game.cdir == 1)
   {
      ob.clip.gotoAndStop("jumpdownright");
   }
   else if(ob.jump == true && ob.velocity > 0 && game.cdir == -1)
   {
      ob.clip.gotoAndStop("jumpdownleft");
   }
   game.landanimation = false;
};
game.particleEngine = function(parArray)
{
   i = 0;
   while(i < parArray.length)
   {
      if(game.clip["dust" + parArray[i]].timer > 0)
      {
         game.clip["dust" + parArray[i]].timer = game.clip["dust" + parArray[i]].timer - 1;
      }
      else if(game.clip["dust" + parArray[i]].timer <= 0)
      {
         game.clip["dust" + parArray[i]].removeMovieClip();
         parArray.splice(i,1);
      }
      i++;
   }
};
game.missileBrain = function(missileArray, ob)
{
   p = 0;
   while(p < missileArray.length)
   {
      if(game.use[mname].speed < 3)
      {
         game.use[mname].speed = game.use[mname].speed + 1;
      }
      else if(game.use[mname].speed > 3)
      {
         game.use[mname].speed = 3;
      }
      mname = "missile" + missileArray[p];
      AiR = Math.atan2(ob.y - game.clip[mname]._y,ob.x - game.clip[mname]._x);
      AiD = Math.round(AiR * 180 / 3.141592653589793);
      game.clip[mname]._rotation = AiD;
      dx = ob.x - game.clip[mname]._x;
      dy = ob.y - game.clip[mname]._y;
      distance = Math.sqrt(dx * dx + dy * dy);
      dx = dx / distance;
      dy = dy / distance;
      game.use[mname].vx = game.use[mname].vx + dx * 0.25;
      game.use[mname].vy = game.use[mname].vy + dy * 0.25;
      velocity = Math.sqrt(game.use[mname].vx * game.use[mname].vx + game.use[mname].vy * game.use[mname].vy);
      if(velocity > game.use[mname].speed)
      {
         vx = game.use[mname].speed / velocity;
         vy = game.use[mname].speed / velocity;
      }
      dx = ob.x - game.clip[mname]._x;
      dy = ob.y - game.clip[mname]._y;
      distance = Math.sqrt(dx * dx + dy * dy);
      dx = dx / distance;
      dy = dy / distance;
      game.use[mname].vx = game.use[mname].vx + dx * 0.5;
      game.use[mname].vy = game.use[mname].vy + dy * 0.5;
      testx = Math.floor((game.clip[mname]._x + game.use[mname].vx) / game.tileW);
      testy = Math.floor((game.clip[mname]._y + game.use[mname].vy) / game.tileH);
      testlol = game.use["t_" + testx + "_" + testy].walkable;
      if(!testlol)
      {
         tempExplode = "e_" + game.use[mname].mtype;
         if(testlol == false)
         {
            game.clip.attachMovie(tempExplode,"dust" + game.dustn,game.depth);
         }
         game.depth = game.depth + 1;
         if(game.use[mname].vx > 0)
         {
            game.clip["dust" + game.dustn]._x = testx * game.tileW;
         }
         else
         {
            game.clip["dust" + game.dustn]._x = testx * game.tileW + game.clip["dust" + game.dustn]._width;
         }
         if(game.use[mname].vy > 0)
         {
            game.clip["dust" + game.dustn]._y = testy * game.tileH;
         }
         else
         {
            game.clip["dust" + game.dustn]._y = testy * game.tileH + game.clip["dust" + game.dustn]._height;
         }
         game.clip["dust" + game.dustn].timer = 12;
         game.dustArray.push(game.dustn);
         game.dustn = game.dustn + 1;
         game.clip[mname].removeMovieClip();
         missileArray.splice(p,1);
         mexplode.start(0,1);
         p--;
      }
      AiR = Math.atan2(game.clip[mname]._y + game.use[mname].vy - game.clip[mname]._y,game.clip[mname]._x + game.use[mname].vx - game.clip[mname]._x);
      AiD = Math.round(AiR * 180 / 3.141592653589793);
      game.clip[mname]._rotation = AiD;
      game.clip[mname]._x = game.clip[mname]._x + game.use[mname].vx;
      game.clip[mname]._y = game.clip[mname]._y + game.use[mname].vy;
      if(game.clip[mname].hitTest(game.clip.char) && game.death == false)
      {
         game.death = true;
         game.dtype = "deathblow";
         game.dsound = "mexplode";
         game.clip[mname].removeMovieClip();
         missileArray.splice(p,1);
         p--;
      }
      p++;
   }
};
game.instructions = function(stg)
{
   if(_root.blackout._alpha >= 50 && _root.blackout._alpha != undefined)
   {
      if(_root.textbox == undefined)
      {
         _root.createEmptyMovieClip("textbox",game.depth);
         game.depth = game.depth + 1;
         _root.textbox.createTextField("holder",game.depth,-10000,-10000,game.textSevenW,game.textSevenH);
         game.depth = game.depth + 1;
         _root.textbox.holder.selectable = false;
         _root.textbox.holder.wordWrap = true;
         _root.textbox.holder.text = stg + "\n\n\n(press enter to continue)";
         _root.textbox.holder._y = Stage.height / 2 - game.textSevenH / 2;
         _root.textbox.holder._x = Stage.width / 2 - game.textSevenW / 2;
         _root.textbox.holder.textColor = 16777215;
      }
      else
      {
         _root.textbox.holder.setTextFormat(game.textOneFormat);
      }
   }
};
game.extrasMenu = function()
{
   if(_root.blackout._alpha >= 50 && _root.blackout._alpha != undefined && game.eMenu == false)
   {
      game.eMenu = true;
      _root.createEmptyMovieClip("textbox",game.depth);
      game.depth = game.depth + 1;
      _root.textbox.createTextField("Bgirl",game.depth,-10000,-10000,game.textFiveW,game.textFiveH);
      game.depth = game.depth + 1;
      _root.textbox.Bgirl._y = 200;
      _root.textbox.Bgirl._x = Stage.width / 2 - game.textFiveW / 2;
      _root.textbox.Bgirl.background = true;
      _root.textbox.Bgirl.backgroundColor = 3355443;
      _root.textbox.Bgirl.textColor = 16777215;
      if(game.bgirlunlocked)
      {
         if(!game.bgirlon)
         {
            _root.textbox.Bgirl.text = "Play as B-girl (off)";
         }
         else
         {
            _root.textbox.Bgirl.text = "Play as B-girl (on)";
         }
      }
      else
      {
         _root.textbox.Bgirl.text = "(Beat the Game)";
      }
      _root.textbox.Bgirl.setTextFormat(game.textOneFormat);
      _root.textbox.Bgirl.selectable = false;
      _root.textbox.createTextField("Drfet",game.depth,-10000,-10000,game.textFiveW,game.textFiveH);
      game.depth = game.depth + 1;
      _root.textbox.Drfet._y = 240;
      _root.textbox.Drfet._x = Stage.width / 2 - game.textFiveW / 2;
      _root.textbox.Drfet.background = true;
      _root.textbox.Drfet.backgroundColor = 3355443;
      _root.textbox.Drfet.textColor = 16777215;
      if(game.drfetunlocked)
      {
         if(!game.dfeton)
         {
            _root.textbox.Drfet.text = "Play as Dr. Fetus (off)";
         }
         else
         {
            _root.textbox.Drfet.text = "Play as Dr. Fetus (on)";
         }
      }
      else
      {
         _root.textbox.Drfet.text = "(" + (8 - game.baidAquired) + " more Bandaids)";
      }
      _root.textbox.Drfet.setTextFormat(game.textOneFormat);
      _root.textbox.Drfet.selectable = false;
      _root.textbox.createTextField("Gish",game.depth,-10000,-10000,game.textFiveW,game.textFiveH);
      game.depth = game.depth + 1;
      _root.textbox.Gish._y = 260;
      _root.textbox.Gish._x = Stage.width / 2 - game.textFiveW / 2;
      _root.textbox.Gish.background = true;
      _root.textbox.Gish.backgroundColor = 3355443;
      _root.textbox.Gish.textColor = 16777215;
      if(game.gishunlocked)
      {
         if(!game.gishon)
         {
            _root.textbox.Gish.text = "Play as Gish (off)";
         }
         else
         {
            _root.textbox.Gish.text = "Play as Gish (on)";
         }
      }
      else
      {
         _root.textbox.Gish.text = "(" + (16 - game.baidAquired) + " more Bandaids)";
      }
      _root.textbox.Gish.setTextFormat(game.textOneFormat);
      _root.textbox.Gish.selectable = false;
      _root.textbox.createTextField("CC",game.depth,-10000,-10000,game.textFiveW,game.textFiveH);
      game.depth = game.depth + 1;
      _root.textbox.CC._y = 220;
      _root.textbox.CC._x = Stage.width / 2 - game.textFiveW / 2;
      _root.textbox.CC.background = true;
      _root.textbox.CC.backgroundColor = 3355443;
      _root.textbox.CC.textColor = 16777215;
      if(game.ccunlocked)
      {
         if(!game.ccon)
         {
            _root.textbox.CC.text = "Play as C-Crasher (off)";
         }
         else
         {
            _root.textbox.CC.text = "Play as C-Crasher (on)";
         }
      }
      else
      {
         _root.textbox.CC.text = "(" + (4 - game.baidAquired) + " more Bandaids)";
      }
      _root.textbox.CC.setTextFormat(game.textOneFormat);
      _root.textbox.CC.selectable = false;
      _root.textbox.createTextField("HC",game.depth,-10000,-10000,game.textFiveW,game.textFiveH);
      game.depth = game.depth + 1;
      _root.textbox.HC._y = 280;
      _root.textbox.HC._x = Stage.width / 2 - game.textFiveW / 2;
      _root.textbox.HC.background = true;
      _root.textbox.HC.backgroundColor = 3355443;
      _root.textbox.HC.textColor = 16777215;
      if(game.coffeeunlocked)
      {
         _root.textbox.HC.text = "Hot Coffee";
      }
      else
      {
         _root.textbox.HC.text = "(" + (24 - game.baidAquired) + " more Bandaids)";
      }
      _root.textbox.HC.setTextFormat(game.textOneFormat);
      _root.textbox.HC.selectable = false;
   }
   else if(game.eCutsceneT > 0)
   {
      game.eCutsceneT--;
      if(!_root.eCuts)
      {
         _root.attachMovie(game.eCutscene,"eCuts",game.depth);
         _root.eCuts._x = 150;
         _root.eCuts._y = 250;
         game.depth = game.depth + 1;
      }
      if(game.eCutsceneT - 1 <= 0)
      {
         game.eCutsceneT = 0;
         _root.eCuts.removeMovieClip();
         game.eMenu = false;
         game.pause = true;
      }
   }
   else if(_xmouse > _root.textbox.Bgirl._x && _xmouse < _root.textbox.Bgirl._x + _root.textbox.Bgirl._width)
   {
      if(_ymouse > _root.textbox.Bgirl._y && _ymouse < _root.textbox.Bgirl._y + _root.textbox.Bgirl._height)
      {
         _root.textbox.Bgirl.backgroundColor = 10066329;
         if(bgirlover)
         {
            MOB.start(0,1);
            bgirlover = false;
         }
         if(game.mouseup == true && game.mouse == true && game.bgirlunlocked)
         {
            game.mouseup = false;
            if(game.bgirlon)
            {
               game.bgirlon = false;
               _root.textbox.Bgirl.text = "Play as B-girl (off)";
               _root.textbox.Bgirl.setTextFormat(game.textOneFormat);
            }
            else if(!game.bgirlon)
            {
               game.bgirlon = true;
               _root.textbox.Bgirl.text = "Play as B-girl (on)";
               _root.textbox.Bgirl.setTextFormat(game.textOneFormat);
               if(game.drfetunlocked)
               {
                  game.drfeton = false;
                  _root.textbox.Drfet.text = "Play as Dr. Fetus (off)";
                  _root.textbox.Drfet.setTextFormat(game.textOneFormat);
               }
               if(game.gishunlocked)
               {
                  game.gishon = false;
                  _root.textbox.Gish.text = "Play as Gish (off)";
                  _root.textbox.Gish.setTextFormat(game.textOneFormat);
               }
               if(game.ccunlocked)
               {
                  game.ccon = false;
                  _root.textbox.CC.text = "Play as C-Crasher (off)";
                  _root.textbox.CC.setTextFormat(game.textOneFormat);
               }
            }
         }
      }
      else
      {
         bgirlover = true;
         _root.textbox.Bgirl.backgroundColor = 3355443;
      }
      if(_ymouse > _root.textbox.Drfet._y && _ymouse < _root.textbox.Drfet._y + _root.textbox.Drfet._height)
      {
         _root.textbox.Drfet.backgroundColor = 10066329;
         if(drfetover)
         {
            MOB.start(0,1);
            drfetover = false;
         }
         if(game.mouseup == true && game.mouse == true && game.drfetunlocked)
         {
            game.mouseup = false;
            if(game.drfeton)
            {
               game.drfeton = false;
               _root.textbox.Drfet.text = "Play as Dr. Fetus (off)";
               _root.textbox.Drfet.setTextFormat(game.textOneFormat);
            }
            else if(!game.drfeton)
            {
               game.drfeton = true;
               _root.textbox.Drfet.text = "Play as Dr. Fetus (on)";
               _root.textbox.Drfet.setTextFormat(game.textOneFormat);
               if(game.bgirlunlocked)
               {
                  game.bgirlon = false;
                  _root.textbox.Bgirl.text = "Play as B-girl (off)";
                  _root.textbox.Bgirl.setTextFormat(game.textOneFormat);
               }
               if(game.gishunlocked)
               {
                  game.gishon = false;
                  _root.textbox.Gish.text = "Play as Gish (off)";
                  _root.textbox.Gish.setTextFormat(game.textOneFormat);
               }
               if(game.ccunlocked)
               {
                  game.ccon = false;
                  _root.textbox.CC.text = "Play as C-Crasher (off)";
                  _root.textbox.CC.setTextFormat(game.textOneFormat);
               }
            }
         }
      }
      else
      {
         drfetover = true;
         _root.textbox.Drfet.backgroundColor = 3355443;
      }
      if(_ymouse > _root.textbox.Gish._y && _ymouse < _root.textbox.Gish._y + _root.textbox.Gish._height)
      {
         _root.textbox.Gish.backgroundColor = 10066329;
         if(gishover)
         {
            MOB.start(0,1);
            gishover = false;
         }
         if(game.mouseup == true && game.mouse == true && game.gishunlocked)
         {
            game.mouseup = false;
            if(game.gishon)
            {
               game.gishon = false;
               _root.textbox.Gish.text = "Play as Gish (off)";
               _root.textbox.Gish.setTextFormat(game.textOneFormat);
            }
            else if(!game.gishon)
            {
               game.gishon = true;
               _root.textbox.Gish.text = "Play as Gish (on)";
               _root.textbox.Gish.setTextFormat(game.textOneFormat);
               if(game.bgirlunlocked)
               {
                  game.bgirlon = false;
                  _root.textbox.Bgirl.text = "Play as B-girl (off)";
                  _root.textbox.Bgirl.setTextFormat(game.textOneFormat);
               }
               if(game.drfetunlocked)
               {
                  game.drfeton = false;
                  _root.textbox.Drfet.text = "Play as Dr. Fetus (off)";
                  _root.textbox.Drfet.setTextFormat(game.textOneFormat);
               }
               if(game.ccunlocked)
               {
                  game.ccon = false;
                  _root.textbox.CC.text = "Play as C-Crasher (off)";
                  _root.textbox.CC.setTextFormat(game.textOneFormat);
               }
            }
         }
      }
      else
      {
         _root.textbox.Gish.backgroundColor = 3355443;
         gishover = true;
      }
      if(_ymouse > _root.textbox.CC._y && _ymouse < _root.textbox.CC._y + _root.textbox.CC._height)
      {
         _root.textbox.CC.backgroundColor = 10066329;
         if(ccover)
         {
            MOB.start(0,1);
            ccover = false;
         }
         if(game.mouseup == true && game.mouse == true && game.ccunlocked)
         {
            game.mouseup = false;
            if(game.ccon)
            {
               game.ccon = false;
               _root.textbox.CC.text = "Play as C-Crasher (off)";
               _root.textbox.CC.setTextFormat(game.textOneFormat);
            }
            else if(!game.ccon)
            {
               game.ccon = true;
               _root.textbox.CC.text = "Play as C-Crasher (on)";
               _root.textbox.CC.setTextFormat(game.textOneFormat);
               if(game.drfetunlocked)
               {
                  game.drfeton = false;
                  _root.textbox.Drfet.text = "Play as Dr. Fetus (off)";
                  _root.textbox.Drfet.setTextFormat(game.textOneFormat);
               }
               if(game.gishunlocked)
               {
                  game.gishon = false;
                  _root.textbox.Gish.text = "Play as Gish (off)";
                  _root.textbox.Gish.setTextFormat(game.textOneFormat);
               }
               if(game.bgirlunlocked)
               {
                  game.bgirlon = false;
                  _root.textbox.Bgirl.text = "Play as B-girl (off)";
                  _root.textbox.Bgirl.setTextFormat(game.textOneFormat);
               }
            }
         }
      }
      else
      {
         ccover = true;
         _root.textbox.CC.backgroundColor = 3355443;
      }
      if(_ymouse > _root.textbox.HC._y && _ymouse < _root.textbox.HC._y + _root.textbox.HC._height)
      {
         _root.textbox.HC.backgroundColor = 10066329;
         if(hcover)
         {
            MOB.start(0,1);
            hcover = false;
         }
         if(game.mouseup == true && game.mouse == true && game.coffeeunlocked)
         {
            game.mouseup = false;
            game.eCutscene = "epilogue";
            game.eCutsceneT = 500;
            game.pause = false;
            stopAllSounds();
            muson = false;
            sexy.start(0,99);
            _root.textbox.removeMovieClip();
         }
      }
      else
      {
         hcover = true;
         _root.textbox.HC.backgroundColor = 3355443;
      }
   }
};
game.comicPlay = function(imgone, imgtwo, imgthree)
{
   if(!_root.cmone)
   {
      _root.attachMovie(imgone,"cmone",game.depth);
      game.depth = game.depth + 1;
      _root.cmone._x = Stage.width / 2 - _root.cmone._width / 2;
      _root.cmone._y = 5;
      _root.cmone._alpha = 0;
   }
   else if(_root.cmone._alpha < 100)
   {
      _root.cmone._alpha = _root.cmone._alpha + 10;
   }
   else if(game.ctimerone > 0)
   {
      game.ctimerone--;
   }
   else if(!_root.cmtwo)
   {
      _root.attachMovie(imgtwo,"cmtwo",game.depth);
      game.depth = game.depth + 1;
      _root.cmtwo._x = Stage.width / 2 - _root.cmone._width / 2;
      _root.cmtwo._y = 10 + _root.cmtwo._height;
      _root.cmtwo._alpha = 0;
   }
   else if(_root.cmtwo._alpha < 100)
   {
      _root.cmtwo._alpha = _root.cmtwo._alpha + 10;
   }
   else if(game.ctimertwo > 0)
   {
      game.ctimertwo--;
   }
   else if(!_root.cmthree)
   {
      _root.attachMovie(imgthree,"cmthree",game.depth);
      game.depth = game.depth + 1;
      _root.cmthree._x = Stage.width / 2 - _root.cmone._width / 2;
      _root.cmthree._y = 15 + _root.cmthree._height * 2;
      _root.cmthree._alpha = 0;
   }
   else if(_root.cmthree._alpha < 100)
   {
      _root.cmthree._alpha = _root.cmthree._alpha + 10;
   }
   else if(game.ctimerthree > 0)
   {
      game.ctimerthree--;
   }
};
game.unlockLevels = function()
{
   set1 = [2,3,4,5,6];
   set2 = [7,8,9,10,11];
   set3 = [12,13,14,15,16];
   set3comic = true;
   set4 = [18,19,20,21,22];
   set5 = [23,24,25,26,27];
   set6 = [28,29,30,31,32];
   set6comic = true;
   set7 = [34,35,36,37,38];
   set8 = [39,40,41,42,43];
   set9 = [44,45,46,47,48];
   set9comic = true;
   set10 = [49];
   set11 = [51,52,53,54,55];
   set12 = [56,57,58,59,60];
   i = 1;
   while(i < 12)
   {
      arrname = "set" + i;
      templolnum = 0;
      j = 0;
      while(j < _root[arrname].length)
      {
         mcheck = "map" + _root[arrname][j] + "beaten";
         if(_root[mcheck] == true)
         {
            templolnum++;
         }
         j++;
      }
      if(templolnum / _root[arrname].length * 10 >= 6)
      {
         arrcname = "set" + (i + 1);
         if(!_root[arrname + "finished"])
         {
            game.cunlocked = true;
            _root[arrname + "finished"] = true;
            game.savefile.data[arrname + "finished"] = true;
         }
         p = 0;
         while(p < _root[arrcname].length)
         {
            munlock = "map" + _root[arrcname][p] + "unlocked";
            _root[munlock] = true;
            p++;
         }
         if(_root[arrname + "comic"] && !_root[arrname + "comicplayed"])
         {
            game.comicHArray = _root[arrname + "comic"];
            game.comicSetStage = 1;
            _root[arrname + "comicplayed"] = true;
            game.savefile.data[arrname + "comicplayed"] = true;
         }
      }
      i++;
   }
};
game.unlockLevels();
game.pauseFunction = function()
{
   if(Key.isDown(27) && game.escape == true)
   {
      game.escape = false;
      if(game.pause == true)
      {
         game.pause = false;
      }
      else
      {
         game.pause = true;
      }
   }
   if(_root.blackout._alpha >= 50 && _root.blackout._alpha != undefined)
   {
      if(!_root.textbox)
      {
         _root.createEmptyMovieClip("textbox",game.depth);
         game.depth = game.depth + 1;
         _root.textbox.createTextField("deathText",game.depth,-10000,-10000,game.textFourW,game.textFourH);
         game.depth = game.depth + 1;
         _root.textbox.deathText._y = 200;
         _root.textbox.deathText._x = Stage.width / 2 - game.textFourW / 2;
         _root.textbox.deathText.selectable = false;
         _root.textbox.deathText.textColor = 16777215;
         _root.textbox.deathText.text = "Game Paused";
         _root.textbox.deathText.setTextFormat(game.textFourFormat);
         _root.textbox.createTextField("holder",game.depth,-10000,-10000,game.textSevenW,game.textSevenH);
         game.depth = game.depth + 1;
         _root.textbox.holder.selectable = false;
         _root.textbox.holder.wordWrap = true;
         _root.textbox.holder.text = "";
         _root.textbox.holder._y = 240;
         _root.textbox.holder._x = Stage.width / 2 - game.textSevenW / 2;
         _root.textbox.holder.textColor = 16777215;
         _root.textbox.holder.text = _root.textbox.holder.text + ("(press enter to exit)\n(press escape to return)\n\n\n\nTip: " + _root["tip" + (random(10) + 1)]);
         _root.textbox.holder.setTextFormat(game.textOneFormat);
      }
      if(Key.isDown(13) && game.enter == true)
      {
         game.enter = false;
         _root.textbox.removeMovieClip();
         _root.bg.removeMovieClip();
         _root.attachMovie("bg","bg",1);
         _root.bg.gotoAndStop(1);
         _root.bg.introduction.gotoAndStop(290);
         _root[char].clip.removeMovieClip();
         game.clip.removeMovieClip();
         _root.createEmptyMovieClip("OverL",game.depth);
         game.clip = _root.OverL;
         if(game.leveltype == "static")
         {
            game.menuStage = "campaignlist";
         }
         else if(game.leveltype == "custom")
         {
            game.menuStage = "loadcustom";
         }
         game.mapBuilt = false;
         game.death = false;
         game.deathCounter = 0;
         game.deathStage = 1;
      }
   }
   else
   {
      _root.textbox.removeMovieClip();
   }
};
game.levelReset = function(chx, chy)
{
   if(game.resetLevel == 1)
   {
      i = 0;
      while(i < game.mH)
      {
         j = 0;
         while(j < game.mW)
         {
            var _loc2_ = "t_" + j + "_" + i;
            if(game.use[_loc2_].dtimer != undefined && !game.use[_loc2_].baid)
            {
               game.use[_loc2_].dtimer = 10;
               game.use[_loc2_].activated = false;
               game.use[_loc2_].done = false;
               game.use[_loc2_].walkable = false;
               game.clip[_loc2_].tile.gotoAndStop(1);
            }
            j++;
         }
         i++;
      }
      game.resetLevel = 2;
   }
   else if(game.resetLevel == 2)
   {
      if(game.clip._y > (game.cliprealheight - Stage.height) * -1)
      {
         if(game.clip._y - 10 > (game.cliprealheight - Stage.height) * -1)
         {
            game.clip._y = game.clip._y - 10;
            nesteps = (game.cliprealheight + Stage.height) / 10;
            neintervall1 = 450 / nesteps;
            neintervall2 = 400 / nesteps;
            neintervall3 = 350 / nesteps;
            _root.bg.l1._y = _root.bg.l1._y + neintervall1;
            _root.bg.l2._y = _root.bg.l2._y + neintervall2;
            _root.bg.l3._y = _root.bg.l3._y + neintervall3;
         }
         else
         {
            spdlol = game.clip._y - (game.cliprealheight - Stage.height) * -1;
            game.clip._y = game.clip._y - spdlol;
            nesteps = (game.cliprealheight + Stage.height) / spdlol;
            neintervall1 = 450 / nesteps;
            neintervall2 = 400 / nesteps;
            neintervall3 = 350 / nesteps;
            _root.bg.l1._y = _root.bg.l1._y + neintervall1;
            _root.bg.l2._y = _root.bg.l2._y + neintervall2;
            _root.bg.l3._y = _root.bg.l3._y + neintervall3;
            game.resetLevel = 3;
         }
      }
      if(game.clip._y > game.cliprealheight * -1 + game.blockplace * game.tileH)
      {
         j = 0;
         while(j < game.mVW)
         {
            ni = game.currentStageY - game.blockplace + game.mVH;
            oi = game.currentStageY - game.blockplace;
            var _loc3_ = "t_" + j + "_" + ni;
            if(ni >= 0)
            {
               game.clip.attachMovie("tile",_loc3_,game.depth);
               game.depth = game.depth + 1;
               game.clip[_loc3_].gotoAndStop(game.use[_loc3_].frame);
               game.clip[_loc3_]._x = game.use[_loc3_].x;
               game.clip[_loc3_]._y = game.use[_loc3_].y;
            }
            var _loc4_ = "t_" + j + "_" + oi;
            game.clip[_loc4_].removeMovieClip();
            j++;
         }
         if(game.blockplace > 0)
         {
            game.blockplace--;
         }
         game.currchar.clip.swapDepths(game.depth);
         game.depth = game.depth + 1;
      }
   }
   else if(game.resetLevel == 3)
   {
      game.blockplace = 0;
      game.clip.char.removeMovieClip();
      if(game.bgirlon == true)
      {
         game.clip.attachMovie("bchar","char",game.depth);
      }
      else if(game.drfeton == true)
      {
         game.clip.attachMovie("fchar","char",game.depth);
      }
      else if(game.gishon == true)
      {
         game.clip.attachMovie("gchar","char",game.depth);
      }
      else
      {
         game.clip.attachMovie("char","char",game.depth);
      }
      game.depth = game.depth + 1;
      char.clip = game.clip.char;
      char.width = char.clip._width / 2;
      char.height = char.clip._height / 2;
      char.x = chx;
      char.y = chy;
      char.jump = false;
      char.clip._x = char.x;
      char.clip._y = char.y;
      if(game.cdir == 1)
      {
         game.clip.char.gotoAndStop("rebornright");
      }
      else if(game.cdir == -1)
      {
         game.clip.char.gotoAndStop("rebornleft");
      }
      game.rebornTimer = 23;
      game.death = false;
      game.deathCounter = 0;
      game.deathStage = 1;
   }
};
game.unlockSecrets = function()
{
   testbaids = 0;
   i = 0;
   while(i < game.mapamount)
   {
      if(_root["map" + i + "baid"] == true)
      {
         testbaids++;
      }
      i++;
   }
   if(testbaids >= 4 && !game.ccdone)
   {
      game.ccunlocked = true;
      game.ccdone = true;
      game.unlockable = "cc";
      game.savefile.data.ccunlocked = true;
   }
   if(testbaids >= 8 && !game.drfetdone)
   {
      game.drfetunlocked = true;
      game.drfetdone = true;
      game.unlockable = "drfet";
      game.savefile.data.drfetunlocked = true;
   }
   if(testbaids >= 16 && !game.gishdone)
   {
      game.gishunlocked = true;
      game.gishdone = true;
      game.unlockable = "gish";
      game.savefile.data.gishunlocked = true;
   }
   if(testbaids >= 24 && !game.coffeedone)
   {
      game.coffeeunlocked = true;
      game.coffeedone = true;
      game.unlockable = "coffee";
      game.savefile.data.coffeeunlocked = true;
   }
   game.baidAquired = testbaids;
};
game.unlockSecrets();
game.creatorTutorial = function()
{
   if(!_root.tutBox && tutlevel == 1)
   {
      _root.createEmptyMovieClip("tutBox",game.depth);
      game.depth = game.depth + 1;
      _root.tutBox.createTextField("field",game.depth,-10000,-10000,game.textSevenW,game.textSevenH);
      game.depth = game.depth + 1;
      _root.tutBox.field.selectable = false;
      _root.tutBox.field.wordWrap = true;
      _root.tutBox.field.text = "(press escape to open the tile selection screen)";
      _root.tutBox.field._y = 150;
      _root.tutBox.field._x = Stage.width / 2 - game.textSevenW / 2;
      _root.tutBox.field.textColor = 16777215;
   }
   else if(tutlevel == 1)
   {
      _root.tutBox.field.setTextFormat(game.textOneFormat);
      if(Key.isDown(27) && game.escape == true)
      {
         _root.tutBox.removeMovieClip();
         tutlevel = 2;
      }
   }
   else if(!_root.tutBox && tutlevel == 2 && _root.blackout._alpha >= 50 && _root.blackout._alpha != undefined)
   {
      _root.createEmptyMovieClip("tutBox",game.depth);
      game.depth = game.depth + 1;
      _root.tutBox.createTextField("field",game.depth,-10000,-10000,game.textSevenW,900);
      game.depth = game.depth + 1;
      _root.tutBox.field.selectable = false;
      _root.tutBox.field.wordWrap = true;
      _root.tutBox.field.text = "Select your tile by clicking on it, then pressing escape, then click to paste the tiles over the map builder screen.  press enter to place the character once you\'re done.  press enter again after you\'ve placed you char to be prompted to save.  Make sure to place B-girl at the end of your level or you will not be able to beat the map.\n\nHappy Building!\n~Ed & Jon (Team Mic)";
      _root.tutBox.field._y = 160;
      _root.tutBox.field._x = Stage.width / 2 - game.textSevenW / 2;
      _root.tutBox.field.textColor = 16777215;
   }
   else if(tutlevel == 2)
   {
      _root.tutBox.field.setTextFormat(game.textOneFormat);
      if(Key.isDown(27) && game.escape == true)
      {
         _root.tutBox.removeMovieClip();
         tutlevel = 1;
      }
   }
};
