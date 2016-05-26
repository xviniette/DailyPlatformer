_root._quality = "high";
gquality = "high";
game = { tileW: 20, tileH: 20, visx: 15, visy: 25, pushy: 100, tilenumber: 76 };
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
_root.createEmptyMovieClip("OverL", game.depth);
game.clip = _root.OverL;
game.depth = game.depth + 1;
game.mouse = false;
game.mouseup = true;
game.custom = new Object();
game.use = new Object();
game.xcharspeed = 8;
game.xcurrentspeed = 0;
game.maxVel = 15;
game.mapBuilt = false;
game.mouseTracker = false;
game.enter = true;
game.pause = false;

game.buildmap = function (map, char) {
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
    while (i < mapHeight) {
        j = 0;
        while (j < mapWidth) {
            var _loc1_ = "t_" + j + "_" + i;
            game.use[_loc1_] = new game."tile" + map[j][i]();
            game.use[_loc1_].x = j * game.tileW;
            game.use[_loc1_].y = i * game.tileH;
            j++;
        }
        i++;
    }
    i = game.currentStageY;
    while (i < game.mVH + game.currentStageY) {
        j = 0;
        while (j < game.mVW) {
            if (i >= 0) {
                _loc1_ = "t_" + j + "_" + i;
                game.clip.attachMovie("tile", _loc1_, game.depth);
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
    if (game.bgirlon == true) {
        game.clip.attachMovie("bchar", "char", game.depth);
    }
    else if (game.ccon == true) {
        game.clip.attachMovie("cchar", "char", game.depth);
    }
    else if (game.drfeton == true) {
        game.clip.attachMovie("fchar", "char", game.depth);
    }
    else if (game.gishon == true) {
        game.clip.attachMovie("gchar", "char", game.depth);
    }
    else {
        game.clip.attachMovie("char", "char", game.depth);
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
game.detectkeys = function (ob) {
    game.grabCorners(ob.x - 1, ob.y, ob);
    if (!ob.upleft || !ob.downleft) {
        game.xcurrentspeed = 0;
    }
    game.grabCorners(ob.x - 1, ob.y + 1, ob);
    if (ob.uprightK && ob.downrightK || ob.downrightK && ob.downleftK || ob.upleftK && ob.uprightK || ob.downleftK && ob.upleftK) {
        game.death = true;
    }
    else if (ob.uprightK && ob.downright && ob.downleft && ob.upleft || ob.downrightK && ob.downleft && ob.upleft && ob.upright || ob.upleftK && ob.upright && ob.downleft && ob.downright || ob.downleftK && ob.upleft && ob.upright && ob.downright) {
        game.death = true;
        trace("thisone");
    }
    else if (ob.upright && ob.downleft && ob.upleft && ob.downrightK || ob.downright && ob.upleft && ob.upright && ob.downleftK || ob.upleft && ob.downleft && ob.downright && ob.uprightK || ob.downleft && ob.upright && ob.downright && ob.upleftK) {
        game.death = true;
        trace("thistwo");
    }
    game.grabCorners(ob.x - 1, ob.y - 1, ob);
    if (ob.uprightK && ob.downrightK || ob.downrightK && ob.downleftK || ob.upleftK && ob.uprightK || ob.downleftK && ob.upleftK) {
        game.death = true;
    }
    else if (ob.uprightK && ob.downright && ob.downleft && ob.upleft || ob.downrightK && ob.downleft && ob.upleft && ob.upright || ob.upleftK && ob.upright && ob.downleft && ob.downright || ob.downleftK && ob.upleft && ob.upright && ob.downright) {
        game.death = true;
        trace("thisone");
    }
    else if (ob.upright && ob.downleft && ob.upleft && ob.downrightK || ob.downright && ob.upleft && ob.upright && ob.downleftK || ob.upleft && ob.downleft && ob.downright && ob.uprightK || ob.downleft && ob.upright && ob.downright && ob.upleftK) {
        game.death = true;
        trace("thistwo");
    }
    game.grabCorners(ob.x + 1, ob.y, ob);
    if (!ob.upright || !ob.downright) {
        game.xcurrentspeed = 0;
    }
    game.grabCorners(ob.x + 1, ob.y + 1, ob);
    if (ob.uprightK && ob.downrightK || ob.downrightK && ob.downleftK || ob.upleftK && ob.uprightK || ob.downleftK && ob.upleftK) {
        game.death = true;
    }
    else if (ob.uprightK && ob.downright && ob.downleft && ob.upleft || ob.downrightK && ob.downleft && ob.upleft && ob.upright || ob.upleftK && ob.upright && ob.downleft && ob.downright || ob.downleftK && ob.upleft && ob.upright && ob.downright) {
        game.death = true;
        trace("thisone");
    }
    else if (ob.upright && ob.downleft && ob.upleft && ob.downrightK || ob.downright && ob.upleft && ob.upright && ob.downleftK || ob.upleft && ob.downleft && ob.downright && ob.uprightK || ob.downleft && ob.upright && ob.downright && ob.upleftK) {
        game.death = true;
        trace("thistwo");
    }
    game.grabCorners(ob.x + 1, ob.y - 1, ob);
    if (ob.uprightK && ob.downrightK || ob.downrightK && ob.downleftK || ob.upleftK && ob.uprightK || ob.downleftK && ob.upleftK) {
        game.death = true;
    }
    else if (ob.uprightK && ob.downright && ob.downleft && ob.upleft || ob.downrightK && ob.downleft && ob.upleft && ob.upright || ob.upleftK && ob.upright && ob.downleft && ob.downright || ob.downleftK && ob.upleft && ob.upright && ob.downright) {
        game.death = true;
        trace("thisone");
    }
    else if (ob.upright && ob.downleft && ob.upleft && ob.downrightK || ob.downright && ob.upleft && ob.upright && ob.downleftK || ob.upleft && ob.downleft && ob.downright && ob.uprightK || ob.downleft && ob.upright && ob.downright && ob.upleftK) {
        game.death = true;
        trace("thistwo");
    }
    if (Key.isDown(39) && game.xcurrentspeed < game.xcharspeed) {
        game.cdir = 1;
        game.xcurrentspeed = game.xcurrentspeed + 1;
        if (ob.jump == false) {
            game.xcurrentspeed = game.xcurrentspeed + 1;
        }
    }
    else if (Key.isDown(37) && game.xcurrentspeed > game.xcharspeed * -1) {
        game.cdir = -1;
        game.xcurrentspeed = game.xcurrentspeed - 1;
        if (ob.jump == false) {
            game.xcurrentspeed = game.xcurrentspeed - 1;
        }
    }
    else if (!Key.isDown(37) && !Key.isDown(39) || Key.isDown(37) && Key.isDown(39)) {
        if (game.xcurrentspeed < 2 && game.xcurrentspeed > -2) {
            game.xcurrentspeed = 0;
        }
        else if (game.xcurrentspeed > 0) {
            game.xcurrentspeed = game.xcurrentspeed - 0.25;
            if (ob.jump == false) {
                game.xcurrentspeed = game.xcurrentspeed - 2.75;
            }
        }
        else if (game.xcurrentspeed < 0) {
            game.xcurrentspeed = game.xcurrentspeed + 0.25;
            if (ob.jump == false) {
                game.xcurrentspeed = game.xcurrentspeed + 2.75;
            }
        }
    }
    game.jumpcheck(ob);
    if (ob.velocity > 0) {
        diry = 1;
    }
    else if (ob.velocity < 0) {
        diry = -1;
    }
    else {
        diry = 0;
    }
    if (game.xcurrentspeed > 0) {
        dirx = 1;
    }
    else if (game.xcurrentspeed < 0) {
        dirx = -1;
    }
    else {
        dirx = 0;
    }
    if (ob.velocity - ob.ypull < game.maxVel && ob.velocity - ob.ypull > game.maxVel * -1) {
        ob.velocity = ob.velocity - ob.ypull;
    }
    else if (ob.velocity - ob.ypull > game.maxVel) {
        ob.velocity = game.maxVel;
    }
    else if (ob.velocity - ob.ypull < game.maxVel * -1) {
        ob.velocity = game.maxVel * -1;
    }
    game.moveChar(ob, dirx, Math.abs(game.xcurrentspeed / 2), diry, Math.abs(ob.velocity / 2));
    game.moveChar(ob, dirx, Math.abs(game.xcurrentspeed / 2), diry, Math.abs(ob.velocity / 2));
};
game.moveChar = function (ob, dirx, xspeed, diry, yspeed) {
    game.grabCorners(ob.x + dirx * xspeed, ob.y, ob);
    if (dirx == -1) {
        ob.xtileTwo = Math.floor((ob.x - dirx * xspeed) / game.tileW);
        if (ob.upleft && ob.downleft) {
            ob.x = ob.x + xspeed * dirx;
        }
        else {
            ob.x = ob.xtileTwo * game.tileW;
        }
        if (ob.upleftK && ob.downleftK) {
            game.death = true;
        }
    }
    else if (dirx == 1) {
        ob.xtileTwo = Math.floor((ob.x + dirx * xspeed) / game.tileW);
        if (ob.upright && ob.downright) {
            ob.x = ob.x + xspeed * dirx;
        }
        else {
            ob.x = ob.xtileTwo * game.tileW + (game.tileW - ob.width * 2);
        }
        if (ob.uprightK && ob.downrightK) {
            game.death = true;
        }
    }
    game.grabCorners(ob.x, ob.y + diry * yspeed, ob);
    if (diry == -1) {
        ob.ytileTwo = Math.floor((ob.y - diry * yspeed) / game.tileH);
        if (ob.upleft && ob.upright) {
            ob.y = ob.y + yspeed * diry;
        }
        else {
            ob.y = ob.ytileTwo * game.tileH;
            ob.velocity = 0;
        }
        if (ob.upleftK && ob.uprightK) {
            game.death = true;
        }
    }
    else if (diry == 1) {
        ob.ytileTwo = Math.floor((ob.y + diry * yspeed) / game.tileH);
        if (ob.downleft && ob.downright) {
            ob.y = ob.y + yspeed * diry;
        }
        else {
            ob.y = ob.ytileTwo * game.tileH + (game.tileH - ob.height * 2);
            ob.velocity = 0;
            ob.jump = false;
            soundplay = "jump" + (random(4) + 1);
            _root[soundplay].start(0, 1);
            if (game.bgirlon == true) {
                game.clip.attachMovie("blands", "dust" + game.dustn, game.depth);
            }
            else if (game.ccon == true) {
                game.clip.attachMovie("clands", "dust" + game.dustn, game.depth);
            }
            else if (game.gishon == true) {
                game.clip.attachMovie("glands", "dust" + game.dustn, game.depth);
            }
            else if (!game.drfeton) {
                game.clip.attachMovie("lands", "dust" + game.dustn, game.depth);
            }
            game.depth = game.depth + 1;
            game.clip["dust" + game.dustn]._x = ob.x - (ob.width * 2 - game.clip["dust" + game.dustn]._width / 2);
            game.clip["dust" + game.dustn]._y = ob.y + ob.height;
            game.clip["dust" + game.dustn].timer = 12;
            game.dustArray.push(game.dustn);
            game.dustn = game.dustn + 1;
            game.landanimation = true;
            game.grabCorners(ob.x, ob.y + 1, ob);
            if (!ob.downleftBLD && !ob.downleft && !ob.downleftNB) {
                if (game.bgirlon == true) {
                    game.clip.attachMovie("bhmarks", "mark" + game.markn, game.depth);
                }
                else if (game.ccon == true) {
                    game.clip.attachMovie("chmarks", "mark" + game.markn, game.depth);
                }
                else if (game.gishon == true) {
                    game.clip.attachMovie("ghmarks", "mark" + game.markn, game.depth);
                }
                else if (!game.drfeton) {
                    game.clip.attachMovie("hmarks", "mark" + game.markn, game.depth);
                }
                game.depth = game.depth + 1;
                game.clip["mark" + game.markn]._x = ob.leftX * game.tileW;
                game.clip["mark" + game.markn]._y = ob.downY * game.tileH;
                game.clip["mark" + game.markn].cacheAsBitmap = true;
                game.markn = game.markn + 1;
                game.use["t_" + ob.leftX + "_" + ob.downY].bloodDown = true;
            }
            if (!ob.downrightBLD && !ob.downright && !ob.downrightNB) {
                if (game.bgirlon == true) {
                    game.clip.attachMovie("bhmarks", "mark" + game.markn, game.depth);
                }
                else if (game.ccon == true) {
                    game.clip.attachMovie("chmarks", "mark" + game.markn, game.depth);
                }
                else if (game.gishon == true) {
                    game.clip.attachMovie("ghmarks", "mark" + game.markn, game.depth);
                }
                else if (!game.drfeton) {
                    game.clip.attachMovie("hmarks", "mark" + game.markn, game.depth);
                }
                game.depth = game.depth + 1;
                game.clip["mark" + game.markn]._x = ob.rightX * game.tileW;
                game.clip["mark" + game.markn]._y = ob.downY * game.tileH;
                game.clip["mark" + game.markn].cacheAsBitmap = true;
                game.markn = game.markn + 1;
                game.use["t_" + ob.rightX + "_" + ob.downY].bloodDown = true;
            }
        }
        if (ob.downleftK && ob.downrightK) {
            game.death = true;
        }
    }
    ob.clip._x = ob.x;
    ob.clip._y = ob.y;
};
game.grabCorners = function (x, y, ob) {
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
    if (game.use["t_" + ob.leftXK + "_" + ob.upYK].deadly) {
        game.dtype = game.use["t_" + ob.leftXK + "_" + ob.upYK].dtype;
        game.dsound = game.use["t_" + ob.leftXK + "_" + ob.upYK].dsound;
    }
    if (game.use["t_" + ob.leftXK + "_" + ob.downYK].deadly) {
        game.dtype = game.use["t_" + ob.leftXK + "_" + ob.downYK].dtype;
        game.dsound = game.use["t_" + ob.leftXK + "_" + ob.downYK].dsound;
    }
    if (game.use["t_" + ob.rightXK + "_" + ob.upYK].deadly) {
        game.dtype = game.use["t_" + ob.rightXK + "_" + ob.upYK].dtype;
        game.dsound = game.use["t_" + ob.rightXK + "_" + ob.upYK].dsound;
    }
    if (game.use["t_" + ob.rightXK + "_" + ob.downYK].deadly) {
        game.dtype = game.use["t_" + ob.rightXK + "_" + ob.downYK].dtype;
        game.dsound = game.use["t_" + ob.rightXK + "_" + ob.downYK].dsound;
    }
    if (game.use["t_" + ob.leftXK + "_" + ob.downYK].deadlyup) {
        ob.downleftK = game.use["t_" + ob.leftXK + "_" + ob.downYK].deadlyup;
        game.dtype = game.use["t_" + ob.leftXK + "_" + ob.downYK].dtype;
        game.dsound = game.use["t_" + ob.leftXK + "_" + ob.downYK].dsound;
    }
    if (game.use["t_" + ob.rightXK + "_" + ob.downYK].deadlyup) {
        ob.uprightK = game.use["t_" + ob.rightXK + "_" + ob.downYK].deadlyup;
        game.dtype = game.use["t_" + ob.rightXK + "_" + ob.downYK].dtype;
        game.dsound = game.use["t_" + ob.rightXK + "_" + ob.downYK].dsound;
    }
    ob.upleftA = game.use["t_" + ob.leftXK + "_" + ob.upYK].activated;
    ob.downleftA = game.use["t_" + ob.leftXK + "_" + ob.downYK].activated;
    ob.uprightA = game.use["t_" + ob.rightXK + "_" + ob.upYK].activated;
    ob.downrightA = game.use["t_" + ob.rightXK + "_" + ob.downYK].activated;
    if (ob.upleftA == false) {
        game.use["t_" + ob.leftXK + "_" + ob.upYK].activated = true;
    }
    if (ob.downleftA == false) {
        game.use["t_" + ob.leftXK + "_" + ob.downYK].activated = true;
    }
    if (ob.uprightA == false) {
        game.use["t_" + ob.rightXK + "_" + ob.upYK].activated = true;
    }
    if (ob.downrightA == false) {
        game.use["t_" + ob.rightXK + "_" + ob.downYK].activated = true;
    }
    ob.upleftJ = game.use["t_" + ob.leftXK + "_" + ob.upYK].ypull;
    ob.downleftJ = game.use["t_" + ob.leftXK + "_" + ob.downYK].ypull;
    ob.uprightJ = game.use["t_" + ob.rightXK + "_" + ob.upYK].ypull;
    ob.downrightJ = game.use["t_" + ob.rightXK + "_" + ob.downYK].ypull;
    if (ob.upleftJ) {
        ob.ypull = ob.upleftJ;
    }
    else if (ob.downleftJ) {
        ob.ypull = ob.downleftJ;
    }
    else if (ob.uprightJ) {
        ob.ypull = ob.uprightJ;
    }
    else if (ob.downrightJ) {
        ob.ypull = ob.downrightJ;
    }
    else {
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
game.jumpcheck = function (ob) {
    if (ob.velocity == undefined) {
        ob.velocity = 0;
    }
    game.grabCorners(ob.x, ob.y + 1, ob);
    if (ob.downleft && ob.downright) {
        ob.jump = true;
    }
    else {
        ob.jump = false;
    }
    if (ob.jump == true) {
        game.grabCorners(ob.x - 1, ob.y, ob);
        if (!ob.downleft || !ob.upleft) {
            ob.walljump = true;
            ob.walljumpr = true;
            ob.walljumpl = false;
            if (!ob.wallland) {
                if (game.bgirlon == true) {
                    game.clip.attachMovie("blwalls", "dust" + game.dustn, game.depth);
                }
                else if (game.ccon == true) {
                    game.clip.attachMovie("clwalls", "dust" + game.dustn, game.depth);
                }
                else if (game.gishon == true) {
                    game.clip.attachMovie("glwalls", "dust" + game.dustn, game.depth);
                }
                else if (!game.drfeton) {
                    game.clip.attachMovie("lwalls", "dust" + game.dustn, game.depth);
                }
                soundplay = "jump" + (random(4) + 1);
                _root[soundplay].start(0, 1);
                game.depth = game.depth + 1;
                game.clip["dust" + game.dustn]._x = ob.x;
                game.clip["dust" + game.dustn]._y = ob.y - (ob.height * 2 - game.clip["dust" + game.dustn]._height / 2);
                game.clip["dust" + game.dustn].timer = 12;
                game.dustArray.push(game.dustn);
                game.dustn = game.dustn + 1;
                ob.wallland = true;
            }
            if (!ob.upleftBLL && !ob.upleft && !ob.upleftNB) {
                if (game.bgirlon == true) {
                    game.clip.attachMovie("bvmarks", "mark" + game.markn, game.depth);
                }
                else if (game.ccon == true) {
                    game.clip.attachMovie("cvmarks", "mark" + game.markn, game.depth);
                }
                else if (game.gishon == true) {
                    game.clip.attachMovie("gvmarks", "mark" + game.markn, game.depth);
                }
                else if (!game.drfeton) {
                    game.clip.attachMovie("vmarks", "mark" + game.markn, game.depth);
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
            if (!ob.downleftBLL && !ob.downleft && !ob.downleftNB) {
                if (game.bgirlon == true) {
                    game.clip.attachMovie("bvmarks", "mark" + game.markn, game.depth);
                }
                else if (game.ccon == true) {
                    game.clip.attachMovie("cvmarks", "mark" + game.markn, game.depth);
                }
                else if (game.gishon == true) {
                    game.clip.attachMovie("gvmarks", "mark" + game.markn, game.depth);
                }
                else if (!game.drfeton) {
                    game.clip.attachMovie("vmarks", "mark" + game.markn, game.depth);
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
        else {
            game.grabCorners(ob.x + 1, ob.y, ob);
            if (!ob.downright || !ob.upright) {
                ob.walljump = true;
                ob.walljumpr = false;
                ob.walljumpl = true;
                if (!ob.wallland) {
                    soundplay = "jump" + (random(4) + 1);
                    _root[soundplay].start(0, 1);
                    if (game.bgirlon == true) {
                        game.clip.attachMovie("blwalls", "dust" + game.dustn, game.depth);
                    }
                    else if (game.ccon == true) {
                        game.clip.attachMovie("clwalls", "dust" + game.dustn, game.depth);
                    }
                    else if (game.gishon == true) {
                        game.clip.attachMovie("glwalls", "dust" + game.dustn, game.depth);
                    }
                    else if (!game.drfeton) {
                        game.clip.attachMovie("lwalls", "dust" + game.dustn, game.depth);
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
                if (!ob.uprightBLR && !ob.upright && !ob.uprightNB) {
                    if (game.bgirlon == true) {
                        game.clip.attachMovie("bvmarks", "mark" + game.markn, game.depth);
                    }
                    else if (game.ccon == true) {
                        game.clip.attachMovie("cvmarks", "mark" + game.markn, game.depth);
                    }
                    else if (game.gishon == true) {
                        game.clip.attachMovie("gvmarks", "mark" + game.markn, game.depth);
                    }
                    else if (!game.drfeton) {
                        game.clip.attachMovie("vmarks", "mark" + game.markn, game.depth);
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
                if (!ob.downrightBLR && !ob.downright && !ob.downrightNB) {
                    if (game.bgirlon == true) {
                        game.clip.attachMovie("bvmarks", "mark" + game.markn, game.depth);
                    }
                    else if (game.ccon == true) {
                        game.clip.attachMovie("cvmarks", "mark" + game.markn, game.depth);
                    }
                    else if (game.gishon == true) {
                        game.clip.attachMovie("gvmarks", "mark" + game.markn, game.depth);
                    }
                    else if (!game.drfeton) {
                        game.clip.attachMovie("vmarks", "mark" + game.markn, game.depth);
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
            else {
                ob.walljump = false;
                ob.walljumpr = false;
                ob.walljumpl = false;
                ob.wallland = false;
                ob.walldir = 0;
            }
        }
    }
    else {
        ob.walljump = false;
        ob.walljumpr = false;
        ob.walljumpl = false;
        ob.wallland = false;
        ob.walldir = 0;
    }
    if ((Key.isDown(32) || Key.isDown(65)) && game.space && ob.walljump == true && ob.jump == true) {
        ob.velocity = -8;
        game.xcurrentspeed = ob.walldir * 7;
        game.space = false;
        ob.wallland = false;
        ob.walljump = false;
        soundplay = "jump" + (random(4) + 1);
        _root[soundplay].start(0, 1);
        if (ob.walljumpr) {
            if (game.bgirlon == true) {
                game.clip.attachMovie("bjwalls", "dust" + game.dustn, game.depth);
            }
            else if (game.ccon == true) {
                game.clip.attachMovie("cjwalls", "dust" + game.dustn, game.depth);
            }
            else if (game.gishon == true) {
                game.clip.attachMovie("gjwalls", "dust" + game.dustn, game.depth);
            }
            else if (!game.drfeton) {
                game.clip.attachMovie("jwalls", "dust" + game.dustn, game.depth);
            }
            game.depth = game.depth + 1;
            game.clip["dust" + game.dustn]._x = ob.x;
            game.clip["dust" + game.dustn]._y = ob.y + (- ob.height * 2 - game.clip["dust" + game.dustn]._height / 2);
            game.clip["dust" + game.dustn].timer = 12;
            game.dustArray.push(game.dustn);
            game.dustn = game.dustn + 1;
        }
        else if (ob.walljumpl) {
            if (game.bgirlon == true) {
                game.clip.attachMovie("bjwalls", "dust" + game.dustn, game.depth);
            }
            else if (game.ccon == true) {
                game.clip.attachMovie("cjwalls", "dust" + game.dustn, game.depth);
            }
            else if (game.gishon == true) {
                game.clip.attachMovie("gjwalls", "dust" + game.dustn, game.depth);
            }
            else if (!game.drfeton) {
                game.clip.attachMovie("jwalls", "dust" + game.dustn, game.depth);
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
    if ((Key.isDown(32) || Key.isDown(65)) && game.space && ob.jump == false) {
        ob.velocity = -8;
        ob.jump = true;
        game.space = false;
        soundplay = "jump" + (random(4) + 1);
        _root[soundplay].start(0, 1);
        if (game.bgirlon == true) {
            game.clip.attachMovie("bjumps", "dust" + game.dustn, game.depth);
        }
        else if (game.ccon == true) {
            game.clip.attachMovie("cjumps", "dust" + game.dustn, game.depth);
        }
        else if (game.gishon == true) {
            game.clip.attachMovie("gjumps", "dust" + game.dustn, game.depth);
        }
        else if (!game.drfeton) {
            game.clip.attachMovie("jumps", "dust" + game.dustn, game.depth);
        }
        game.depth = game.depth + 1;
        game.clip["dust" + game.dustn]._x = ob.x - (ob.width * 2 - game.clip["dust" + game.dustn]._width / 2);
        game.clip["dust" + game.dustn]._y = ob.y - (ob.height + game.clip["dust" + game.dustn]._height);
        game.clip["dust" + game.dustn].timer = 12;
        game.dustArray.push(game.dustn);
        game.dustn = game.dustn + 1;
        game.grabCorners(ob.x, ob.y + 1, ob);
        if (!ob.downleftBLD && !ob.downleft && !ob.downleftNB) {
            if (game.bgirlon == true) {
                game.clip.attachMovie("bhmarks", "mark" + game.markn, game.depth);
            }
            else if (game.ccon == true) {
                game.clip.attachMovie("chmarks", "mark" + game.markn, game.depth);
            }
            else if (game.gishon == true) {
                game.clip.attachMovie("ghmarks", "mark" + game.markn, game.depth);
            }
            else if (!game.drfeton) {
                game.clip.attachMovie("hmarks", "mark" + game.markn, game.depth);
            }
            game.depth = game.depth + 1;
            game.clip["mark" + game.markn]._x = ob.leftX * game.tileW;
            game.clip["mark" + game.markn]._y = ob.downY * game.tileH;
            game.clip["mark" + game.markn].cacheAsBitmap = true;
            game.markn = game.markn + 1;
            game.use["t_" + ob.leftX + "_" + ob.downY].bloodDown = true;
        }
        if (!ob.downrightBLD && !ob.downright && !ob.downrightNB) {
            if (game.bgirlon == true) {
                game.clip.attachMovie("bhmarks", "mark" + game.markn, game.depth);
            }
            else if (game.ccon == true) {
                game.clip.attachMovie("chmarks", "mark" + game.markn, game.depth);
            }
            else if (game.gishon == true) {
                game.clip.attachMovie("ghmarks", "mark" + game.markn, game.depth);
            }
            else if (!game.drfeton) {
                game.clip.attachMovie("hmarks", "mark" + game.markn, game.depth);
            }
            game.depth = game.depth + 1;
            game.clip["mark" + game.markn]._x = ob.rightX * game.tileW;
            game.clip["mark" + game.markn]._y = ob.downY * game.tileH;
            game.clip["mark" + game.markn].cacheAsBitmap = true;
            game.markn = game.markn + 1;
            game.use["t_" + ob.rightX + "_" + ob.downY].bloodDown = true;
        }
    }
    else if (ob.jump == true && ob.velocity < game.maxVel) {
        ob.velocity = ob.velocity + 0.5;
    }
};


