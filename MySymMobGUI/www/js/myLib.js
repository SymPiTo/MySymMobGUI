class TimePicker {
    constructor(room, group, direction) {
        this.room = room;
        this.group = group;
        this.direction = direction;
    }
    get room() {
        return this._room;
    }
    set room(room) {
        this._room = room;
    }

    get group() {
        return this._group;
    }
    set group(group) {
        this._group = group;
    }

    get direction() {
        return this._direction;
    }
    set direction(direction) {
        this._direction = direction;
    }

    create(ParentID, ObId, posTop, posLeft, titel) {
        var box = document.createElement("div");
        box.id = "TimePicker" + ObId;
        box.style.position = "absolute";
        box.style.left = posLeft;
        box.style.top = posTop;

        var h = 0;
        var m = 0;
        document.getElementById(ParentID).appendChild(box);

        var elem1 = document.createElement("div");
        elem1.className = "timeContainer";
        //elem1.id = ObId; 

        var elem2 = document.createElement("div");
        elem2.className = "timeLeft";
        elem2.id = ObId + "left";
        elem2.onscroll = function () {
            var elmnt = document.getElementById(elem2.id);
            var y = elmnt.scrollTop;
            h = Math.floor((y + 10) / 37.9);
            document.getElementById(ObId + "hour").innerHTML = h;
        };
        elem1.append(elem2);
        var a = 0;
        for (var i = 0; i < 29; i++) {
            var elem = document.createElement("div");
            if (i === 0) {
                a = 22;
            } else if (i === 1) {
                a = 23;
            } else if (i === 26) {
                a = 0;
            } else if (i === 27) {
                a = 1;
            } else if (i === 28) {
                a = 2;
            } else {
                a = i - 2;
            };
            if (a < 10) {
                var zahl = "0" + a;
            } else {
                zahl = a;
            }
            elem.innerHTML = zahl;
            elem2.append(elem);
        }
        var elem3 = document.createElement("div");
        elem3.style.width = "40px";
        elem3.style.fontSize = "44px";
        elem3.style.paddingTop = "50px";
        elem3.innerHTML = ":";
        elem1.append(elem3);

        var elem4 = document.createElement("div");
        elem4.className = "timeRight";
        elem4.id = ObId + "right";
        elem4.onscroll = function () {
            var elmnt = document.getElementById(elem4.id);
            var x = elmnt.scrollTop;
            m = (Math.floor((x + 10) / 37.8)) * 5;
            document.getElementById(ObId + "minute").innerHTML = m;
            $('Variable_1').innerHTML = h + ':' + m;
        };
        elem1.append(elem4);
        for (var i = 0; i < 17; i++) {
            var elem5 = document.createElement("div");

            if (i === 0) {
                a = 50;
            } else if (i === 1) {
                a = 55;
            } else if (i === 14) {
                a = 0;
            } else if (i === 15) {
                a = 5;
            } else if (i === 16) {
                a = 0;
            } else {
                a = (i - 2) * 5;
            };
            if (a < 10) {
                zahl = "0" + a;
            } else {
                zahl = a;
            }
            elem5.innerHTML = zahl;
            elem4.append(elem5);
        }
        var elem6 = document.createElement("div");
        elem6.id = "Timer1";
        elem6.innerHTML = titel;

        document.getElementById("TimePicker" + ObId).appendChild(elem6);

        document.getElementById("TimePicker" + ObId).appendChild(elem1);

        var Aelem = document.createElement("div");
        Aelem.className = "ctrlbutton";
        Aelem.style.color = "black";
        Aelem.style.position = "relative";
        Aelem.style.left = "20px";
        Aelem.id = "btn" + ObId;
        Aelem.classList.add("smallwide", "grey");
        Aelem.addEventListener("click", function () {
            setScrollTime();
        });

        var Aelem1 = document.createElement("span");
        Aelem1.id = ObId + "hour";
        var text1 = "00";
        Aelem1.append(text1);
        var Aelem2 = document.createElement("span");
        Aelem2.id = ObId + "minute";
        var text2 = "00";
        Aelem2.append(text2);

        var text3 = "Set Down at ";
        var text4 = " : ";
        Aelem.append(text3);
        Aelem.append(Aelem1);
        Aelem.append(text4);
        Aelem.append(Aelem2);

        document.getElementById("TimePicker" + ObId).appendChild(Aelem);

        function setScrollTime() {

            var cmdTimer = 'command(Rollo,' + eval(ObId).room + ',setTime-' + eval(ObId).direction + ':' + ':' + eval(ObId).group + h + ":" + m + ')';
            send(cmdTimer);
        };
    }



}

/* -------------------------------------------------------------------------- */
/*                            class Dynamic ImageDisplay                      */
/* -------------------------------------------------------------------------- */
/* -------------------------- Version: 1.04.10.2019 ------------------------- */

class MediaDisplay {
    constructor() {
        this.ID = "";
        this.imgID = "";
        this.AlbumObj = "";
        this.ArtistObj = "";
        this.TtileObj = "";
        this.CreatorObj = "";
        this.b = "";
        this.h = "";
        //optionale Parameter
    }


    create(ParentID, posTop, posLeft, b, h, farbe) {
        this.b = b;
        this.h = h;
        var elem = document.createElement("div");
        elem.className = "DenonDisplay";
        elem.classList.add(farbe);
        elem.style.position = "absolute";
        elem.style.left = posLeft;
        elem.style.top = posTop;
        elem.style.marginLeft = "5px";
        elem.style.marginRight = "5px";
        elem.style.height = this.h;
        elem.style.width = this.b;
        this.ID = elem;

        var elem1 = document.createElement("img");
        elem1.className = "icon";
        elem1.style.opacity = "0.75";
        elem1.style.border = "5px  grey inset";
        elem1.style.height = "150px";
        elem1.style.width = "150px";
        elem1.style.margin = "10px";
        elem1.style.marginRight = "30px";
        elem1.src = "";
        this.imgID = elem1;

        elem.append(elem1);

        var elem2 = document.createElement("div");
        elem2.className = "spalteLeft";

        elem.append(elem2);

        var Album = document.createElement("div");
        Album.innerHTML = "- - -:";
        this.AlbumObj = Album;
        Album.style.marginBottom = "15px";
        Album.style.fontSize = "1.4rem";
        Album.style.color = "lime";

        var Artist = document.createElement("div");
        Artist.innerHTML = "Artist: ";
        var ArtistA = document.createElement("div");
        this.ArtistObj = ArtistA;
        ArtistA.innerHTML = "- - -";
        ArtistA.style.marginBottom = "15px";
        ArtistA.style.color = "yellow";

        var Creator = document.createElement("div");
        Creator.innerHTML = "Creator:";
        var CreatorA = document.createElement("div");
        this.CreatorObj = CreatorA;
        CreatorA.innerHTML = "- - -";
        CreatorA.style.color = "yellow";

        var Title = document.createElement("div");
        Title.innerHTML = "Title:";
        var TitleA = document.createElement("div");
        this.TitleObj = TitleA;
        TitleA.innerHTML = "- - -";
        TitleA.style.color = "yellow";


        elem2.append(Album);
        elem2.append(Artist);
        elem2.append(ArtistA);
        elem2.append(Creator);
        elem2.append(CreatorA);
        elem2.append(Title);
        elem2.append(TitleA);
        document.getElementById(ParentID).appendChild(elem);
    }

    update(sourceurl, Album, Artist, Title, Creator) {
        this.imgID.src = sourceurl;
        this.AlbumObj.innerHTML = Album;
        this.ArtistObj.innerHTML = Artist;
        this.TitleObj.innerHTML = Title;
        this.CreatorObj = Creator;

    }
}



/* -------------------------------------------------------------------------- */
/*                              Class CtrlButton                              */
/* -------------------------------------------------------------------------- */

/* -------------------------- Version: 1.04.10.2019 ------------------------- */

class CtrlButton {
    constructor() {
        this.ID = "";

        //optionale Parameter
        this.FontFarbe = "black";
    }

    create(ParentID, posTop, posLeft, btnClass, breite, hoehe, color, text, ctrltype, ctrlWin, command, ...param) {
        if (param.length > 0) {
            this.FontFarbe = param[0];
        }
        var elem = document.createElement("div");
        elem.className = btnClass;
        elem.classList.add(color);
        elem.style.width = breite;
        elem.style.height = hoehe;
        this.ID = elem;
        elem.style.color = this.FontFarbe;
        elem.innerHTML = text;
        elem.style.position = "absolute";
        elem.style.left = posLeft;
        elem.style.top = posTop;
        elem.style.zIndex = "3";
        if (ctrltype === "ctrlWindow") {
            elem.onclick = function () {

                // alle Ctrl auf 0px verkleinern 
                var Ctrl = document.getElementsByTagName("Ctrl");
                var MCtrlWindow = Array.from(Ctrl);
                MCtrlWindow.forEach(function (element) {
                    var a = element.className;
                    document.getElementsByClassName(a)[0].style.width = "0px";
                });
                // ctrlWindow umschalten
                document.getElementsByClassName(ctrlWin)[0].style.width = "26vw";
            };
        } else if (ctrltype === "command") {
            elem.setAttribute("onclick", command);
        } else if (ctrltype === "CtrlCmd") {
            elem.onclick = function () {

                // alle Ctrl auf 0px verkleinern 
                var Ctrl = document.getElementsByTagName("Ctrl");
                var MCtrlWindow = Array.from(Ctrl);
                MCtrlWindow.forEach(function (element) {
                    var a = element.className;
                    document.getElementsByClassName(a)[0].style.width = "0px";
                });
                // ctrlWindow umschalten
                document.getElementsByClassName(ctrlWin)[0].style.width = "26vw";

                send(command);
            }
        } else if (ctrltype === "CtrlFunc") {
            elem.onclick = function () {

                // alle Ctrl auf 0px verkleinern 
                var Ctrl = document.getElementsByTagName("Ctrl");
                var MCtrlWindow = Array.from(Ctrl);
                MCtrlWindow.forEach(function (element) {
                    var a = element.className;
                    document.getElementsByClassName(a)[0].style.width = "0px";
                });
                // ctrlWindow umschalten
                document.getElementsByClassName(ctrlWin)[0].style.width = "26vw";

                ShowHidePanel(command);
            }


        }
        document.getElementById(ParentID).appendChild(elem);
    }
    off() {
        this.ID.style.transition = "all 2s ease-in";
        this.ID.style.height = "0px";
        this.ID.style.opacity = "0";
        this.ID.style.visibility = "hidden";

    }

}

/* --------------------- ProtoType Klasse ToggelCtrlButton ---------------------------------------- */
var ToggleCtrlBtn = {
    create: function (ParentID, Ident, posTop, posLeft, size, color, text1, text2, class1, class2, cmd1, cmd2) {
        var elem = document.createElement("div");
        elem.className = "ctrlbutton";
        elem.classList.add(size, color);
        elem.id = Ident;
        elem.innerHTML = text1;
        elem.style.position = "absolute";
        elem.style.left = posLeft;
        elem.style.top = posTop;

        elem.addEventListener("click", myFunction);
        document.getElementById(ParentID).appendChild(elem);

        function myFunction() {
            if (elem.innerHTML === text1) {
                elem.innerHTML = text2;
                elem.classList.add("blue");
                elem.classList.remove("blueToggle");
                func = Ident + "Sub1";
                if (class1 !== "") {
                    document.getElementsByClassName(class1)[0].style.width = "0px";
                    document.getElementsByClassName(class2)[0].style.width = "26vw";

                }
            } else {
                elem.innerHTML = text1;
                elem.classList.add("blueToggle");
                elem.classList.remove("blue");
                if (class1 !== "") {
                    document.getElementsByClassName(class2)[0].style.width = "0px";
                    document.getElementsByClassName(class1)[0].style.width = "26vw";

                }
            }

        }
    }
};


/* --------------------- class ToggelButton ---------------------------------------- */
class ToggleBtn {


    constructor() {

    }

    create(ParentID, Ident, posTop, posLeft, size, color, text1, text2, class1, class2, cmd1, cmd2) {

        var elem = document.createElement("div");
        elem.className = "ctrlbutton";
        elem.classList.add(size, color);
        elem.id = Ident;
        elem.innerHTML = text1;
        elem.style.position = "absolute";
        elem.style.left = posLeft;
        elem.style.top = posTop;

        elem.addEventListener("click", myFunction());
        document.getElementById(ParentID).appendChild(elem);

        function myFunction() {
            if (elem.innerHTML === text1) {
                elem.innerHTML = text2;
                elem.classList.add("blue");
                elem.classList.remove("blueToggle");
                func = Ident + "Sub1";
                if (class1 !== "") {
                    document.getElementsByClassName(class1)[0].style.width = "0px";
                    document.getElementsByClassName(class2)[0].style.width = "26vw";

                }
            } else {
                elem.innerHTML = text1;
                elem.classList.add("blueToggle");
                elem.classList.remove("blue");
                if (class1 !== "") {
                    document.getElementsByClassName(class2)[0].style.width = "0px";
                    document.getElementsByClassName(class1)[0].style.width = "26vw";

                }
            }

        }
    }
}






/* --------------------- class Label ---------------------------------------- */
class label {


    constructor() {

    }
    create(ParentID, posTop, posLeft, fontsize, fontcolor, text) {
        var elem = document.createElement("p");
        elem.style.color = fontcolor;
        elem.style.fontSize = fontsize;
        elem.innerHTML = text;
        elem.style.position = "absolute";
        elem.style.left = posLeft;
        elem.style.top = posTop;

        document.getElementById(ParentID).appendChild(elem);
    }
}


/* --------------------- class Dynamic ImageDisplay ---------------------------------------- */
class Rahmen {


    constructor() {

    }


    create(ParentID, posTop, posLeft, h, w, color) {
        var elem = document.createElement("div");

        elem.style.position = "absolute";
        elem.style.left = posLeft;
        elem.style.top = posTop;

        elem.style.height = h;
        elem.style.width = w;

        elem.style.border = "1px #C0C0C0 outset";
        elem.style.borderColor = "#777777";

        elem.style.backgroundColor = color;

        document.getElementById(ParentID).appendChild(elem);
    }
}

/* --------------------- class Dynamic ImageDisplay ---------------------------------------- */
class ImageDisplay {


    constructor() {
        this.ID = "";
        this.imgID = "";
        this.elemA = "";
        this.elemB = "";
        this.elemC = "";
    }


    create(ParentID, posTop, posLeft, size) {
        var elem = document.createElement("div");
        elem.className = "DenonDisplay";
        elem.style.position = "absolute";
        elem.style.left = posLeft;
        elem.style.top = posTop;
        elem.style.marginLeft = "5px";
        elem.style.marginRight = "5px";
        elem.style.height = "200px"
        elem.style.width = "510px"
        this.ID = elem;

        var elem1 = document.createElement("img");
        elem1.className = "icon";
        elem1.classList.add(size);
        elem1.style.margin = "10px";
        elem1.style.marginRight = "30px";
        elem1.src = "";
        this.imgID = elem1;

        elem.append(elem1);

        var elem2 = document.createElement("div");
        elem2.className = "spalteLeft";

        elem.append(elem2);

        var elem3 = document.createElement("div");
        elem3.innerHTML = "Sender:";
        this.elemA = elem3;
        elem3.style.marginBottom = "15px";
        elem3.style.fontSize = "28px"
        elem3.style.color = "lime";
        var elem4 = document.createElement("div");
        elem4.innerHTML = "Artist: ";

        var elem4a = document.createElement("div");
        this.elemB = elem4a;
        elem4a.innerHTML = "";
        elem4a.style.marginBottom = "15px";
        elem4a.style.color = "yellow";
        var elem5 = document.createElement("div");
        elem5.innerHTML = "Song:";
        var elem5a = document.createElement("div");
        this.elemC = elem5a;
        elem5a.innerHTML = "";
        elem5a.style.color = "yellow";
        elem2.append(elem3);
        elem2.append(elem4);
        elem2.append(elem4a);
        elem2.append(elem5);
        elem2.append(elem5a);
        document.getElementById(ParentID).appendChild(elem);
    }

    update(value1, value2, value3, value4) {
        this.imgID.src = value1;
        this.elemA.innerHTML = value2;
        this.elemB.innerHTML = value3;
        this.elemC.innerHTML = value4;

    }
}

/* --------------------- class Dynamic Icon ---------------------------------------- */
/* -------------------------- Version: 1.04.10.2019 ------------------------- */
class DynIcon {
    constructor(IBaseName, type, revers) {
        this.ID = "";
        this.ImageBaseName = IBaseName;
        this.typ = type;
        this.revers = revers;
    }

    create(ParentID, posTop, posLeft, b, h) {
        var elem = document.createElement("img");
        this.ID = elem;
        elem.className = "icon";

        elem.src = "images/" + this.ImageBaseName + "0.png";
        elem.style.position = "absolute";
        elem.style.left = posLeft;
        elem.style.top = posTop;
        elem.style.width = b;
        elem.style.height = h;



        document.getElementById(ParentID).appendChild(elem);
    }

    update(value) {
        if (this.typ === "ana") {
            if (value === 0) {
                this.ID.src = "images/" + this.ImageBaseName + "0.png";
            } else if (value === 1) {
                this.ID.src = "images/" + this.ImageBaseName + "1.png";
            } else if (value > 1 && value < 11) {
                this.ID.src = "images/" + this.ImageBaseName + "10.png";
            } else if (value > 10 && value < 21) {
                this.ID.src = "images/" + this.ImageBaseName + "20.png";
            } else if (value > 20 && value < 31) {
                this.ID.src = "images/" + this.ImageBaseName + "30.png";
            } else if (value > 30 && value < 41) {
                this.ID.src = "images/" + this.ImageBaseName + "40.png";
            } else if (value > 40 && value < 51) {
                this.ID.src = "images/" + this.ImageBaseName + "50.png";
            } else if (value > 50 && value < 61) {
                this.ID.src = "images/" + this.ImageBaseName + "60.png";
            } else if (value > 60 && value < 71) {
                this.ID.src = "images/" + this.ImageBaseName + "70.png";
            } else if (value > 70 && value < 81) {
                this.ID.src = "images/" + this.ImageBaseName + "80.png";
            } else if (value > 80 && value < 91) {
                this.ID.src = "images/" + this.ImageBaseName + "90.png";
            } else if (value > 90 && value < 101) {
                this.ID.src = "images/" + this.ImageBaseName + "100.png";
            } else {}
        }
        if (this.typ === "bin") {
            value = value + 0;
            if (this.revers) {
                if (value === 0) {
                    this.ID.src = "images/" + this.ImageBaseName + "1.png";
                } else {
                    this.ID.src = "images/" + this.ImageBaseName + "0.png";
                }
            } else {
                if (value === 0) {
                    this.ID.src = "images/" + this.ImageBaseName + "0.png";
                } else {
                    this.ID.src = "images/" + this.ImageBaseName + "1.png";
                }
            }


        }
    }
}




/* --------------------- class Display status of Variable ---------------------------------------- */
/* -------------------------- Version: 1.18.10.2019 ------------------------- */
class StateDisplay {
    constructor() {
        this.ID = "";
        this.unit = "";
        this.textColor = "black";
        this.state0 = "";
        this.state1 = "";
        this.state2 = "";
        this.state3 = "";
        this.bgColor = "black";
        this.h = "60px";
        this.b = "202px";
        //Optionale Parameter
    }

    create(ParentID, color, einheit, posTop, posLeft, breite, hoehe, SchriftGr, titel, zus0, zus1, zus2, zus3, command, ...param) {
        this.unit = einheit,
            this.bgColor = color;
        if (color === "") {
            this.bgColor = "black";
        }
        this.state0 = zus0;
        this.state1 = zus1;
        this.state2 = zus2;
        this.state3 = zus3;
        var elem1 = document.createElement("div");
        elem1.className = "anzeige";
        elem1.classList.add(this.bgColor);
        this.b = breite;
        this.h = hoehe;
        elem1.style.width = this.b;
        elem1.style.height = this.h;
        if (param.length > 0) {

        } else {

        }

        elem1.style.color = "white";
        elem1.style.position = "absolute";
        elem1.style.left = posLeft;
        elem1.style.top = posTop;

        elem1.setAttribute("onclick", command);

        var elem2 = document.createElement("div");
        elem2.style.backgroundColor = "black";
        elem2.style.height = "20px";
        elem2.innerHTML = titel;
        elem2.style.paddingTop = "2px"
        elem1.append(elem2);

        var elem3 = document.createElement("div");


        elem3.innerHTML = "----" + this.unit;
        elem3.style.fontSize = SchriftGr;
        elem3.style.paddingTop = "5px";
        elem3.style.color = this.textColor;
        this.ID = elem3;
        elem1.append(elem3);
        document.getElementById(ParentID).appendChild(elem1);
    }

    update(value, n = 0) {
        try {
            this.ID.style.color = this.textColor;
            if (this.state0 === "Number") {
                var wert = value.toFixed(n);
                this.ID.innerHTML = (wert.toString() + this.unit);
            } else if (this.state0 === "String") {
                this.ID.innerHTML = (value.toString() + this.unit);
            } else {
                switch (value) {
                    case 0:
                        this.ID.innerHTML = this.state0;
                        break;
                    case 1:
                        this.ID.innerHTML = this.state1;
                        break;
                    case 2:
                        this.ID.innerHTML = this.state2;
                        break;
                    case 3:
                        this.ID.innerHTML = this.state3;
                        break;
                    case true:
                        this.ID.innerHTML = this.state0;
                        break;
                    case false:
                        this.ID.innerHTML = this.state1;
                        break;
                }
            }
        } catch (error) {
            $('fehler').innerHTML = "Variable  fehlt:";
            //alert("value in Display error" + this.ID);
        }


    }

    setTextColor(farbe) {
        this.ID.style.color = farbe;
    }

}




/* --------------------- Class VarDis ---------------------------------------- */

class VarDis {
    constructor() {
        this.ID = "";
        this.unit = "";
        this.textColor = "white";
        this.state1 = "";
        this.state2 = "";
        this.bgColor = "black";
    }

    create(ParentID, bgColor, posTop, posLeft, size, einheit, zus0, zus1) {

        this.bgColor = bgColor;
        this.unit = einheit;
        this.state1 = zus0;
        this.state2 = zus1;

        var elem = document.createElement("div");
        elem.className = "var";
        elem.classList.add(size);
        elem.style.position = "absolute";
        elem.style.left = posLeft;
        elem.style.top = posTop;
        elem.style.color = this.textColor;
        elem.style.backgroundColor = bgColor;

        this.ID = elem;

        document.getElementById(ParentID).appendChild(elem);
    }

    update(value, n) {
        try {
            if (value === false) {
                this.ID.innerHTML = this.state1;
            } else if (value === true) {
                this.ID.innerHTML = this.state2;
            } else if (n === 0 || n > 0) {
                //var wert = Math.round(value).toFixed(n);
                var wert = value.toFixed(n);
                this.ID.innerHTML = wert + this.unit;
            } else {
                this.ID.innerHTML = value + this.unit;
            }
        } catch (error) {
            // alert("error");
        }

    }
}








/* --------------------- ProtoType Klasse VarDisplay ---------------------------------------- 
 var VarDisplay = {
    Ident : "ID",
    color : "white",
    textcolor : "white",
    unit : "°C",
    state1 : "",
    state2 : "",
    
    create :  function(ParentID, ID, ObjektFarbe, posTop, posLeft, size, einheit, status1, status2){  
        this.Ident = ID;
        this.color = ObjektFarbe;
        this.unit = einheit;
        this.state1 = status1;
        this.state2 = status2;
        
        var elem = document.createElement("div");
        elem.className = "var";  
        elem.classList.add(this.color, size);
        elem.style.position = "absolute";
        elem.style.left = posLeft;
        elem.style.top = posTop;
        elem.style.color = this.textcolor;
        
        elem.id = ID; 
       
        document.getElementById(ParentID).appendChild(elem);   
    },
    update :  function (value, n){
        try { 
            if (value === false){
               document.getElementById(this.Ident).innerHTML = this.state1; 
            }
            else if (value === true) {
                document.getElementById(this.Ident).innerHTML = this.state2; 
            }
            else if (n === 0 || n > 0){
                //var wert = Math.round(value).toFixed(n);
                var wert = value.toFixed(n);
                document.getElementById(this.Ident).innerHTML = wert + this.unit;
            }
            else {
                document.getElementById(this.Ident).innerHTML = value + this.unit;
            }
        } catch (error) {
           // alert("error");
        }
        
     }
  }  
  
*/


function addTempCtrl(ParentID, Ident, color, posTop, posLeft, Titel, valueID, valueLeftID, valueRightID, room) {
    var elem1 = document.createElement("div");
    elem1.className = "tempcontrol";
    elem1.classList.add(color);
    elem1.style.color = "lime";
    elem1.id = Ident;
    elem1.style.position = "absolute";
    elem1.style.left = posLeft;
    elem1.style.top = posTop;


    elem1.innerHTML = Titel;
    elem1.style.paddingTop = "5px";

    var elem3 = document.createElement("div");
    elem3.style.display = "flex";
    elem3.style.flexDirection = "row";
    elem3.style.justifyContent = "space-between";
    elem3.style.paddingTop = "15px";
    elem3.style.marginBottom = "5px";
    elem3.style.color = "white";
    var elem4 = document.createElement("span");
    elem4.id = valueLeftID;
    elem4.innerHTML = "--";
    elem4.style.fontSize = "14px";
    elem4.style.paddingTop = "25px";
    elem4.style.paddingLeft = "5px";

    var elem5 = document.createElement("span");
    elem5.id = valueID;
    elem5.innerHTML = "22.0";
    elem5.style.fontSize = "28px";


    var elem6 = document.createElement("span");
    elem6.id = valueRightID;
    elem6.innerHTML = "--";
    elem6.style.fontSize = "14px";
    elem6.style.paddingTop = "25px";
    elem6.style.paddingRight = "5px";

    elem7 = document.createElement("div");
    elem7.style.display = "flex";
    elem7.style.flexDirection = "row";
    elem7.style.justifyContent = "space-between";


    elem8 = document.createElement("div");
    elem8.className = "fontbutton";
    elem8.classList.add(color, "normal");
    elem9 = document.createElement("span");
    elem9.className = "fa fa-plus";
    elem9.style.fontSize = "24px";
    elem9.style.padding = "12px";
    var cmd1 = "incTemp('" + valueID + "')";
    elem8.setAttribute("onclick", cmd1);
    elem8.append(elem9);
    elem7.append(elem8);


    elem10 = document.createElement("div");
    elem10.className = "fontbutton";
    elem10.classList.add(color, "normal");
    elem11 = document.createElement("span");
    elem11.className = "fa fa-minus";
    elem11.style.fontSize = "24px";
    elem11.style.padding = "12px";
    var cmd2 = "decTemp('" + valueID + "')";
    elem10.setAttribute("onclick", cmd2);
    elem10.append(elem11);
    elem7.append(elem10);

    var elem12 = document.createElement("div");
    elem12.className = "ctrlbutton";
    elem12.classList.add("normal", color);
    elem12.innerHTML = "set";

    var cmd3 = "setSollTemp('" + valueID + "', '" + room + "');";
    elem12.setAttribute("onclick", cmd3);
    elem12.style.width = "199px";
    elem3.append(elem4);
    elem3.append(elem5);
    elem3.append(elem6);

    elem1.append(elem3);
    elem1.append(elem7);
    elem1.append(elem12);

    document.getElementById(ParentID).appendChild(elem1);
}

function incTemp(valueID) {
    var solltempS = document.getElementById(valueID).innerHTML;
    var solltemp = parseFloat(solltempS) + 0.5;
    document.getElementById(valueID).innerHTML = solltemp;
}

function decTemp(valueID) {
    var solltempS = document.getElementById(valueID).innerHTML;
    var solltemp = parseFloat(solltempS) - 0.5;
    document.getElementById(valueID).innerHTML = solltemp;
}

function setSollTemp(valueID, room) {
    var sollTemp = document.getElementById(valueID).innerHTML;
    var cmd = "command(Heizung," + room + "," + sollTemp + ")";

    send(cmd);
}

function addStatus(ParentID, Ident, color, posTop, posLeft, text) {
    var elem = document.createElement("div");
    elem.className = "status";
    elem.classList.add("Bat", color);
    elem.style.position = "absolute";
    elem.style.left = posLeft;
    elem.style.top = posTop;


    var elem1 = document.createElement("div");
    elem1.className = "fa fa-battery-full";
    elem1.style.fontSize = "24px";
    elem1.style.color = "#00FF00";
    elem1.innerHTML = "        " + text;
    elem1.id = Ident;

    elem.append(elem1);
    document.getElementById(ParentID).appendChild(elem);
}




























/* --------------------- ProtoType Klasse FontButton ---------------------------------------- 
 var FontButton = {
    create :  function(ParentID, color, size, posTop, posLeft, symbol, cmd){  
                var elem = document.createElement("div");
                elem.className = "fontbutton";   
                elem.classList.add(size, color);
                elem.style.position = "absolute";
                elem.style.left = posLeft;
                elem.style.top = posTop;
                elem.setAttribute("onclick", cmd);

                var elem1 = document.createElement("span");
                elem1.className = symbol; 
                elem1.style.fontSize = "30px";
                elem1.style.padding = "5px";
                elem1.style.marginTop = "10px";

                elem.append(elem1);
                document.getElementById(ParentID).appendChild(elem);
    }    

 };


function addFontButton(ParentID, color, size, posTop, posLeft, symbol, cmd){
    var elem = document.createElement("div");
    elem.className = "fontbutton";   
    elem.classList.add(size, color);
    elem.style.position = "absolute";
    elem.style.left = posLeft;
    elem.style.top = posTop;
    elem.setAttribute("onclick", cmd);
    
    var elem1 = document.createElement("span");
    elem1.className = symbol; 
    elem1.style.fontSize = "30px";
    elem1.style.padding = "5px";
    elem1.style.marginTop = "10px";
    
    elem.append(elem1);
    document.getElementById(ParentID).appendChild(elem);	
}

 */




/* --------------------- Klasse CheckBoxCtrlBtn ---------------------------------------- */
class CheckBoxCtrlBtn {
    constructor() {
        this.ID = "";
        this.color = "";

        //optionale Parameter
        this.textColor1 = "black";
        this.textColor2 = "black";
    }

    create(ParentID, farbe, posTop, posLeft, text, sendCmd, ...param) {
        var c1 = this.textColor1;
        var c2 = this.textColor2;
        this.color = farbe;
        var elem1 = document.createElement("label");
        elem1.className = "CBcontainer";
        elem1.classList.add(farbe);
        elem1.innerHTML = text;
        elem1.style.top = posTop;
        elem1.style.left = posLeft;
        elem1.style.width = "200px";
        elem1.style.height = "40px";
        elem1.style.color = c1;

        var elem2 = document.createElement("input");
        elem2.setAttribute("type", "checkbox");
        this.ID = elem2;
        elem2.checked = false;
        elem1.append(elem2);

        var elem3 = document.createElement("span");
        elem3.className = "checkmark";
        elem1.append(elem3);

        document.getElementById(ParentID).appendChild(elem1);

        elem2.addEventListener('change', function () {
            if (this.checked) {
                // Checkbox is checked..
                elem1.style.color = c1;
                elem2.style.color = c1;
                //var n = sendCmd.search("X"); 
                var res = sendCmd.replace("X", "on");
                send(res);
            } else {
                // Checkbox is not checked..
                elem1.style.color = c2;
                var res = sendCmd.replace("X", "off");
                send(res);
            }
        });
    }

    update(value) {
        this.ID.checked = value;
    }
}



/* -------------------------------------------------------------------------- */
/*                         Klasse: Menu Button (Glide)                         */
/* -------------------------------------------------------------------------- */
class GlideButton {
    constructor() {
        this.unit1 = " ";
        this.unit2 = " ";
        this.unit3 = " ";
        this.unit4 = " ";
        this.value1 = " ";
        this.value2 = " ";
        this.value3 = " ";
        this.value4 = " ";
        this.ObjValue1 = "";
        this.ObjValue2 = "";
        this.ObjValue3 = "";
        this.ObjValue4 = "";
        this.kopftext = "";
    }

    create(ParentID, farbe, titel, image, IDMain, IDFull, MenuType) {
        this.kopftext = titel;
        var elem1 = document.createElement("div");
        elem1.className = "GlideButton";
        elem1.classList.add(farbe, "area");

        elem1.onclick = function () {
            this.kopftext = titel;
            if (MenuType === "R") {
                // Main-Menus aufklappen  
                var MainMenu = document.getElementsByTagName("mainMenu");
                MainMenu[0].style.width = "28vw";
                //Startbild vergößern
                document.getElementsByClassName("StartScreen")[0].style.left = "28vw";
                document.getElementsByClassName("StartScreen")[0].style.width = "72vw";
            }

            // alle subMenus auf 0px verkleinern 
            var subs = document.getElementsByTagName("SubMenu");
            var SubMenus = Array.from(subs);
            SubMenus.forEach(function (element) {
                var a = element.className;
                document.getElementsByClassName(a)[0].style.width = "0px";
            });
            // alle Main auf 0px verkleinern 
            var Main = document.getElementsByTagName("Main");
            var MainWindow = Array.from(Main);
            MainWindow.forEach(function (element) {
                var a = element.className;
                document.getElementsByClassName(a)[0].style.width = "0px";
            });
            // alle Ctrl auf 0px verkleinern 
            var Ctrl = document.getElementsByTagName("Ctrl");
            var MCtrlWindow = Array.from(Ctrl);
            MCtrlWindow.forEach(function (element) {
                var a = element.className;
                document.getElementsByClassName(a)[0].style.width = "0px";
            });
            if (MenuType === "MM") {
                //benötigte Fenster einblenden für Main Menu
                document.getElementById(ParentID).style.width = "22vw";
                if (IDMain !== "") {

                    document.getElementsByClassName(IDMain)[0].style.width = "78vw";

                } else {
                    document.getElementsByClassName("StartScreen")[0].style.width = "0px";
                    document.getElementsByClassName("StartScreen")[0].style.left = "8vw";
                    document.getElementsByClassName(IDFull)[0].style.width = "92vw";

                }
            }
            if (MenuType === "SM") {
                if (IDMain !== "") {
                    //MainMenue Leiste ausblenden
                    document.getElementById("MainMenu").style.width = "0vw";
                    //SubMenue Leiste ausblenden 
                    document.getElementById(ParentID).style.width = "0vw";
                    //Haupt Fenster einblenden
                    document.getElementById(IDMain).style.width = "100vw";
                    //Control Fenster einblenden
                    //document.getElementById(IDMain + "Ctrl").style.width = "78vw";
                } else {
                    document.getElementsByClassName("StartScreen")[0].style.width = "0px";
                    //SubMenue Leiste verkuerzt einblenden
                    document.getElementById(ParentID).style.width = "8vw";
                    //Haupt Fenster komplett einblenden
                    document.getElementById(IDFull).style.width = "92vw";
                }
            }
            if (MenuType === "SMload") {
                //part HTML nachladen
                var x = document.getElementById(IDMain);
                if (x == null) {
                    function loadContent() {
                        jQuery.get(IDMain + ".html", function (data) {
                            jQuery("#Main").html(data);

                        }).done(function () {
                            if (IDMain !== "") {
                                //MainMenue Leiste ausblenden
                                document.getElementById("MainMenu").style.width = "0vw";
                                //SubMenue Leiste verkuerzt ausblenden
                                document.getElementById(ParentID).style.width = "0vw";
                                //Haupt Fenster einblenden
                                document.getElementById(IDMain).style.width = "100vw";
                            } else {
                                document.getElementsByClassName("StartScreen")[0].style.width = "0px";
                                //SubMenue Leiste verkuerzt einblenden
                                document.getElementById(ParentID).style.width = "8vw";
                                //Haupt Fenster komplett einblenden
                                document.getElementById(IDFull).style.width = "92vw";
                            }
                        })
                    }
                    loadContent();
                } else {
                    if (IDMain !== "") {
                        //MainMenue Leiste ausblenden
                        document.getElementById("MainMenu").style.width = "0vw";
                        //SubMenue Leiste verkuerzt ausblenden
                        document.getElementById(ParentID).style.width = "0vw";
                        //Haupt Fenster einblenden
                        document.getElementById(IDMain).style.width = "100vw";
                    } else {
                        document.getElementsByClassName("StartScreen")[0].style.width = "0px";
                        //SubMenue Leiste verkuerzt einblenden
                        document.getElementById(ParentID).style.width = "8vw";
                        //Haupt Fenster komplett einblenden
                        document.getElementById(IDFull).style.width = "92vw";
                    }
                }







            }

            var kopfleiste = document.getElementsByClassName("Top")[0];
            kopfleiste.className = "Top";
            kopfleiste.classList.add(farbe);
            kopfleiste.style.color = "black";
            document.getElementById("TopTitle").innerHTML = this.kopftext;
        };

        var elem2 = document.createElement("img");
        elem2.className = "icon";
        if (image != "") {
            //elem2.src = "images/" + image;
            elem2.src = image;
        }
        elem1.append(elem2);

        var elem2a = document.createElement("div");
        elem1.append(elem2a);

        var elem3 = document.createElement("div");
        elem3.className = "room";
        elem3.innerHTML = titel;
        elem2a.append(elem3);

        var elem4 = document.createElement("div");
        elem4.style.fontSize = "1.0rem";
        elem4.style.display = "flex";
        elem4.style.justifyContent = "space-between";
        elem4.style.width = "200px";
        elem4.style.paddingLeft = "30px";
        elem2a.append(elem4);

        var elem5 = document.createElement("div");
        this.ObjValue1 = elem5;
        elem4.append(elem5);

        var elem6 = document.createElement("div");
        this.ObjValue2 = elem6;
        elem4.append(elem6);

        var elem7 = document.createElement("div");
        this.ObjValue3 = elem7;
        elem4.append(elem7);

        var elem8 = document.createElement("div");
        this.ObjValue4 = elem8;
        elem4.append(elem8);

        document.getElementById(ParentID).appendChild(elem1);

    };

    update(value1, unit1, value2, unit2, value3, unit3, value4, unit4) {
        this.unit1 = unit1;
        this.unit2 = unit2;
        this.unit3 = unit3;
        this.unit4 = unit4;
        this.value1 = value1;
        this.value2 = value2;
        this.value3 = value3;
        this.value4 = value4;
        this.ObjValue1.innerHTML = this.value1 + this.unit1;
        this.ObjValue2.innerHTML = this.value2 + this.unit2;
        this.ObjValue3.innerHTML = this.value3 + this.unit3;
        this.ObjValue4.innerHTML = this.value4 + this.unit4;
    };
}


/* --------------------- Klasse Zahlenfeld ---------------------------------------- */
class KeyPad {
    constructor() {
        this.value1 = "";
        this.ID = " ";
    }

    create(ParentID, ObjID, Device, color, size, posTop, posLeft) {
        var elem = document.createElement("div");
        elem.style.position = "absolute";
        elem.style.left = posLeft;
        elem.style.top = posTop;

        var Zdisplay = document.createElement("div");

        Zdisplay.style.backgroundColor = "grey";
        Zdisplay.style.padding = "7px" * size;
        let hoehe = 50 * size;
        let breite = 320 * size;
        Zdisplay.style.height = hoehe + "px";
        Zdisplay.style.width = breite + "px";
        Zdisplay.style.border = "thick solid #0000FF";
        Zdisplay.style.marginBottom = "10px";
        Zdisplay.style.paddingTop = "10px";
        this.ID = Zdisplay;
        elem.append(Zdisplay);



        var Zcontainer = document.createElement("div");
        Zcontainer.className = "ZahlenContainer";
        Zcontainer.style.backgroundColor = "black";
        Zcontainer.style.padding = "7px" * size;
        let h = 320 * size;
        let b = 320 * size;
        Zcontainer.style.height = h + "px";
        Zcontainer.style.width = b + "px";
        Zcontainer.style.paddingTop = "10px";

        elem.append(Zcontainer);

        var i;
        for (i = 0; i < 9; i++) {
            var taste = document.createElement("div");
            taste.className = "fontbutton";
            taste.classList.add(color);
            let f1 = 38 * size;
            taste.style.fontSize = f1 + "px";
            taste.style.padding = "8px";
            let a1 = 100 * size;
            let b1 = 70 * size;
            taste.style.width = a1 + "px";
            taste.style.height = b1 + "px";
            taste.setAttribute("onclick", "send('command(" + Device + ",keyNo," + i + ")')");
            taste.innerHTML = i;
            Zcontainer.append(taste);
        }


        var reply = document.createElement("div");
        reply.className = "fontbutton";
        reply.classList.add(color);
        let f2 = 38 * size;
        reply.style.fontSize = f2 + "px";
        reply.style.padding = "8px";
        let a2 = 100 * size;
        let b2 = 70 * size;
        reply.style.width = a2 + "px";
        reply.style.height = b2 + "px";
        reply.setAttribute("onclick", "send('command(" + Device + ",key,cancel)')");
        Zcontainer.append(reply);

        var replyA = document.createElement("span");
        replyA.className = "fa fa-reply";
        let f6 = 30 * size;
        replyA.style.fontSize = f6 + "px";
        replyA.style.padding = "5px";
        replyA.style.marginTop = "10px" * size;
        reply.append(replyA);

        var taste9 = document.createElement("div");
        taste9.className = "fontbutton";
        taste9.classList.add(color);
        let f3 = 38 * size;
        taste9.style.fontSize = f3 + "px";
        taste9.style.padding = "8px";
        let a3 = 100 * size;
        let b3 = 70 * size;
        taste9.style.width = a3 + "px";
        taste9.style.height = b3 + "px";
        taste9.setAttribute("onclick", "send('command(" + Device + ",keyNo,9)')");
        taste9.innerHTML = "9";
        Zcontainer.append(taste9);

        var enter = document.createElement("div");
        enter.className = "fontbutton";
        enter.classList.add(color);
        let f4 = 38 * size;
        enter.style.fontSize = f4 + "px";
        enter.style.padding = "8px";
        let a4 = 100 * size;
        let b4 = 70 * size;
        enter.style.width = a4 + "px";
        enter.style.height = b4 + "px";
        enter.setAttribute("onclick", "send('command(" + Device + ",key,enter)')");
        Zcontainer.append(enter);

        var enterA = document.createElement("span");
        enterA.className = "fa fa-check";
        let f5 = 30 * size;
        enterA.style.fontSize = f5 + "px";
        enterA.style.padding = "5px";
        enterA.style.marginTop = "10px" * size;
        enter.append(enterA);

        document.getElementById(ParentID).appendChild(elem);

    }
    update(value) {
        if (value != "") {
            this.value1 = value;
            var n = this.value1.length;
            var code = "**************************";
            this.ID.innerHTML = code.substr(0, n);
        }
    };


}

/* --------------------- Klasse AlarmBox ---------------------------------------- */
class AlarmBox {
    constructor() {
        this.ID = "";
    }

    create(ParentID, ObjID, color, posTop, posLeft) {
        this.ID = ObjID;
        var elem = document.createElement("div");
        elem.className = "AlarmBox";
        elem.classList.add(color);
        elem.id = this.ID;
        elem.style.fontSize = "24px";
        elem.style.padding = "4px";
        elem.setAttribute("onclick", "send('command(security,alarm,aus)')");
        elem.innerHTML = "Einbrecher!";
        elem.style.position = "absolute";
        elem.style.left = posLeft;
        elem.style.top = posTop;
        elem.style.width = "205px";
        elem.style.height = "45px";
        elem.style.display = "block";

        elem.style.zIndex = "4";

        elem.style.backgroundColor = color;
        elem.style.fontFamily = "Arial";
        elem.href = "#";
        elem.style.paddingTop = "4px";
        elem.style.border = "thick solid #0000FF";
        elem.style.borderRadius = "10px";
        document.getElementById(ParentID).appendChild(elem);
    }

    update(value) {
        if (value == 2) {
            document.getElementById(this.ID).style.display = "block";
        } else {
            document.getElementById(this.ID).style.display = "none";
        }
    }
}


/* --------------------- Klasse IconSelectList ---------------------------------------- */
class DynIconList {
    constructor() {

    }

    create(ParentID, source) {

        // Liste einlesen
        var Liste = new data();
        switch (source) {
            case "CD":
                var SourceListJson = Liste.getMusicLib();
                var SourceList = Array();
                var SourceList1 = JSON.parse(SourceListJson);
                SourceList = SourceList1['media'];
                break;
            case "CeolCD":
                var SourceListJson = Liste.getMusicLib();
                var SourceList = Array();
                var SourceList1 = JSON.parse(SourceListJson);
                SourceList = SourceList1['media'];
                break;
            case "TV":
                var SourceListJson = Liste.getTVchannels();
                var SourceList = Array();
                var SourceList1 = JSON.parse(SourceListJson);
                SourceList = SourceList1['media'];
                break;
            case "IRadio":
                var SourceList = Liste.getIRadiochannels();
                break;
            case "Audio":
                var SourceListJson = Liste.getAudiobookLib();
                var SourceList = Array();
                var SourceList1 = JSON.parse(SourceListJson);
                SourceList = SourceList1['media'];
                break;
            case "Video":
                var SourceListJson = Liste.getVideoLib();
                var SourceList = Array();
                var SourceList1 = JSON.parse(SourceListJson);
                SourceList = SourceList1['media'];
                break;
            case "Foto":
                var SourceListJson = Liste.getFotoLib();
                var SourceList = Array();
                var SourceList1 = JSON.parse(SourceListJson);
                SourceList = SourceList1['media'];
                break;
            case "CeolAudio":
                var SourceListJson = Liste.getAudiobookLib();
                var SourceList = Array();
                var SourceList1 = JSON.parse(SourceListJson);
                SourceList = SourceList1['media'];
                break;
            default:
        }

        SourceList.forEach(function (item) {
            var elem = document.createElement("img");

            switch (source) {
                case "TV":
                    var icon = item["icon"];
                    break;
                case "IRadio":
                    var icon = item["icon"];
                    break;
                case "CD":
                    var icon = item["icon"];
                    break;
                case "Audio":
                    var icon = item["icon"];
                    break
                case "Video":
                    var icon = item["icon"];
                    break
                case "Foto":
                    var icon = item["icon"];
                    break
                case "CeolCD":
                    var icon = item["icon"];
                    break;
                case "CeolAudio":
                    var icon = item["icon"];
                    break
                default:
            }

            elem.className = "iconTV";
            elem.id = source + item["no"];
            elem.style.padding = "2px";
            if (source === "TV") {
                elem.src = "images/Sender/" + icon;
            } else if (source === "IRadio") {
                elem.src = "images/RadioStation/" + icon;
            } else if (source === "CD") {
                elem.src = icon;
            } else if (source === "Audio") {
                elem.src = icon;
            } else if (source === "Video") {
                elem.src = icon;
            } else if (source === "Foto") {
                elem.src = icon;
            } else if (source === "CeolCD") {
                elem.src = icon;
            } else if (source === "CeolAudio") {
                elem.src = icon;
            }
            elem.onclick = function () {
                var test = SourceList;
                var index = SourceList.findIndex((item) => item.selected === true);
                if (index !== -1) {
                    SourceList[index]['selected'] = false;
                    var ObjID = source + index;
                    var elem0 = document.getElementById(ObjID);
                    elem0.classList.add("iconTV");
                    elem0.classList.remove("iconTVToggle");
                }
                elem.classList.add("iconTVToggle");
                elem.classList.remove("iconTV");
                item['selected'] = true;
                if (source === "TV") {
                    var cmd = "func(STV_setChannelbyName, 44308," + item['sender'] + ")";
                } else if (source === "IRadio") {
                    var cmd = "command(DenonCeol,Channel," + item['FV'] + ")";
                } else if (source === "CD") {
                    var cmd = "command(upnp,loadCDPlaylist," + item['playlistname'] + ")";
                } else if (source === "Audio") {
                    var cmd = "command(upnp,loadAudioPlaylist," + item['playlistname'] + ")";
                } else if (source === "Video") {
                    var cmd = "command(upnp,loadVideoPlaylist," + item['playlistname'] + ")";
                } else if (source === "Foto") {
                    var cmd = "command(upnp,loadFotoPlaylist," + item['playlistname'] + ")";
                } else if (source === "CeolCD") {
                    var cmd = "command(DenonCeol,loadCDPlaylist," + item['playlistname'] + ")";
                } else if (source === "CeolAudio") {
                    var cmd = "command(DenonCeol,loadAudioPlaylist," + item['playlistname'] + ")";
                }
                send(cmd);
                //umschalten auf Haupt Ansicht
                /*
                document.getElementById(ParentID).style.width = "0vw";
                var position = ParentID.search(/_/);
                var mainID = ParentID.substr(0, position);
                document.getElementById(mainID).style.width = "100vw";
                */
            };

            document.getElementById(ParentID).appendChild(elem);
        });

    }
}




/* --------------------- Klasse CDLib SelectList ---------------------------------------- */
class CDLibrary {
    constructor() {

    }

    create(ParentID, device, action) {
        // Liste einlesen
        var Liste = new data();
        var SourceList = Liste.getCDLib();


        SourceList.forEach(function (item) {
            var elem = document.createElement("img");

            elem.className = "iconTV";
            elem.id = device + item["No"];
            elem.style.padding = "2px";
            elem.src = "CDs/" + item["icon"];
            elem.onclick = function () {

                var index = SourceList.findIndex((item) => item.selected === true);
                if (index !== -1) {
                    SourceList[index]['selected'] = false;
                    var ObjID = device + index;
                    var elem0 = document.getElementById(ObjID);
                    elem0.classList.add("iconTV");
                    elem0.classList.remove("iconTVToggle");
                }
                elem.classList.add("iconTVToggle");
                elem.classList.remove("iconTV");
                item['selected'] = true;
                if (action == "play") {
                    cmd = ("command(" + device + ",playAlbum," + item['FV'] + ")");
                    send(cmd);
                }
            }

            document.getElementById(ParentID).appendChild(elem);
        })
    }



}
























/* ---------------------  Klasse FontButton (Rest noch austauschen ---------------------------------------- */
class FontButtonNew {
    constructor() {
        this.ID = "";
        this.ID1 = "";
        this.b = "";
        this.h = "";

        // options
        this.textSize = "28px";
        this.textColor = "black";
    }
    create(ParentID, btnClass, color, posTop, posLeft, symbol, b, h, cmd, ...param) {
        this.h = h;
        this.b = b;
        if (param.length > 0) {
            this.textSize = param[0];
            this.textColor = param[1];
        }


        var elem = document.createElement("div");
        elem.className = btnClass;
        elem.classList.add(color);
        this.ID = elem;
        elem.style.position = "absolute";
        elem.style.left = posLeft;
        elem.style.top = posTop;
        elem.style.width = this.b;
        elem.style.height = this.h;
        elem.style.display = "flex";
        elem.style.alignItems = "center";
        elem.style.justifyContent = "center";
        elem.setAttribute("onclick", cmd);

        var elem1 = document.createElement("span");
        elem1.className = symbol;
        elem1.style.fontSize = this.textSize;
        elem1.style.color = this.textColor;
        this.ID1 = elem1;

        elem.append(elem1);
        document.getElementById(ParentID).appendChild(elem);
    }

    update(value) {
        if (value === true) {
            this.ID1.style.color = "lime";
        } else {
            this.ID1.style.color = "white";
        }
    }

    off() {
        this.ID.style.transition = "all 2s ease-in";

        this.ID.style.opacity = "0";
        this.ID.style.visibility = "hidden";
    }
    on() {
        this.ID.style.transition = "all 2s ease-in";

        this.ID.style.opacity = "1";
        this.ID.style.visibility = "visible";
    }
};

/* --------------------- Klasse Navigation Pad ---------------------------------------- */
class NavPad {
    constructor() {

    }

    create(ParentID, ObjID, color, posTop, posLeft, sym) {

        var elem = document.createElement("div");
        elem.style.position = "absolute";
        elem.style.left = posLeft;
        elem.style.top = posTop;


        var Navcontainer = document.createElement("div");
        Navcontainer.className = "NavContainer";

        Navcontainer.style.width = "220px";


        elem.append(Navcontainer);

        var i;
        for (i = 0; i < 9; i++) {
            var taste = document.createElement("div");
            taste.className = "fontbutton";
            taste.classList.add(color);


            taste.style.padding = "8px";
            taste.style.margin = "0px";

            taste.style.width = "60px";
            taste.style.height = "60px";
            var cmd = "";
            switch (i) {
                case 0:
                    taste.style.marginTop = "30px";
                    taste.style.marginLeft = "0px";
                    taste.style.width = "50px";
                    taste.style.height = "50px";
                    taste.style.color = "yellow";
                    cmd = "command(TV,key,c)";
                    break;
                case 1:
                    taste.style.borderRadius = "20px 20px 0px 0px";
                    taste.style.fontSize = "45px";
                    taste.style.height = "80px";
                    taste.style.marginTop = "0px";
                    cmd = "command(TV,key,KEY_UP)";
                    break;
                case 2:
                    taste.style.marginTop = "30px";
                    taste.style.marginRight = "0px";
                    taste.style.width = "50px";
                    taste.style.height = "50px";
                    taste.style.color = "green";
                    cmd = "command(TV,key,c)";
                    break;
                case 3:
                    taste.style.borderRadius = "20px  0px  0px 20px";
                    taste.style.width = "80px";
                    cmd = "command(TV,key,KEY_LEFT)";
                    break;
                case 4:
                    cmd = "command(TV,key,KEY_ENTER)";
                    break;
                case 5:
                    taste.style.borderRadius = "0px 20px 20px 0px";
                    taste.style.width = "80px";
                    cmd = "command(TV,key,KEY_RIGHT)";
                    break;
                case 6:
                    taste.style.marginBottom = "0px";
                    taste.style.marginLeft = "0px";
                    taste.style.width = "50px";
                    taste.style.height = "50px";
                    taste.style.color = "blue";
                    cmd = "command(TV,key,c)";
                    break;
                case 7:
                    taste.style.borderRadius = "0px  0px 20px 20px";
                    taste.style.height = "80px";
                    cmd = "command(TV,key,KEY_DOWN)";
                    break;
                case 8:
                    taste.style.marginBottom = "0px";
                    taste.style.marginRight = "0px";
                    taste.style.width = "50px";
                    taste.style.height = "50px";
                    taste.style.color = "red";
                    cmd = "command(TV,key,c)";
                    break;
            }


            taste.onclick = send(cmd);

            Navcontainer.append(taste);

            var symbol = document.createElement("span");

            symbol.className = sym[i];
            symbol.style.position = "relative";

            symbol.style.fontSize = "38px";
            if (i == 7) {
                symbol.style.top = "25px";
            } else if (i == 1) {
                symbol.style.top = "-10px";
            } else if (i == 3) {
                symbol.style.left = "-15px";
            } else if (i == 5) {
                symbol.style.left = "15px";
            }
            taste.append(symbol);
        }
        document.getElementById(ParentID).appendChild(elem);
    }
}

/* --------------------- Klasse Navigation Pad ---------------------------------------- */
class LEDdisplay {
    constructor() {
        this.ID = "";
    }

    create(ParentID, ObjID, posTop, posLeft, hoehe, breite) {

        var elem = document.createElement("div");
        elem.className = "DenonAnzeige";
        elem.style.position = "absolute";
        elem.style.left = posLeft;
        elem.style.top = posTop;
        elem.style.height = hoehe;
        elem.style.width = breite;
        elem.innerHTML = "TEST Sender"
        this.ID = elem;
        document.getElementById(ParentID).appendChild(elem);
    }

    update(value) {

        this.ID.innerHTML = value;


    }
}

/* --------------------- Klasse     ---------------------------------------- */
class MainWindow {
    constructor() {

    }

    create(ParentID, ObjID, windowsClass) {

        var elem = document.createElement("Main");
        elem.className = windowsClass;


        document.getElementById(ParentID).appendChild(elem);


    }
}

/* --------------------- Klasse TextScrollBox    ---------------------------------------- */
class TextScrollBox {
    constructor() {
        this.ID = "";
    }

    create(ParentID, posTop, posLeft) {

        var elem = document.createElement("textarea");
        elem.className = "AList";
        elem.style.position = "absolute";
        elem.style.left = posLeft;
        elem.style.top = posTop;
        elem.style.resize = "none";
        elem.style.width = "450px";
        elem.style.height = "0px";

        this.ID = elem;

        document.getElementById(ParentID).appendChild(elem);
    }

    update(text) {
        try {
            if (text !== "") {
                this.ID.value = text;
            } else {
                this.ID.value = "no Alarm List";
            }
        } catch (error) {
            // alert("error");
        }

    }

    minimize() {
        this.ID.style.height = "0px";
    }

    maximize() {
        this.ID.style.height = "450px";
    }
}

/* --------------------- Klasse IconVarDisplay ---------------------------------------- */
class IconVarDisplay {
    constructor() {
        this.ID = "";
        this.color = "white",
            this.textcolor = "white",
            this.textsize = "14px";
        this.unit = "°C",
            this.state = ""

    }


    create(ParentID, ObjektFarbe, posTop, posLeft, symbol, einheit, ...status) {
        this.color = ObjektFarbe;
        this.unit = einheit;
        this.state = status;


        var elem = document.createElement("div");
        elem.className = "status";
        elem.classList.add(this.color);
        elem.style.position = "absolute";
        elem.style.left = posLeft;
        elem.style.top = posTop;
        elem.style.width = "100px";

        var elem1 = document.createElement("span");
        elem1.className = symbol;
        elem1.style.fontSize = this.textsize;
        elem1.style.color = this.textcolor;

        elem.append(elem1);

        var elem2 = document.createElement("span");
        elem2.style.marginLeft = "15px";
        elem2.innerHTML = "- - -";
        this.ID = elem2;
        elem1.append(elem2);

        document.getElementById(ParentID).appendChild(elem);
    };
    update(value, n) {
        try {
            if (n === "state") {
                this.ID.innerHTML = this.state[value];
            } else if (n === 0 || n > 0) {
                //var wert = Math.round(value).toFixed(n);
                var wert = value.toFixed(n);
                this.ID.innerHTML = wert + this.unit;
            } else {
                this.ID.innerHTML = value + this.unit;
            }
        } catch (error) {
            // alert("error");
        }

    }
}

/* --------------------- Klasse TransVarDisplay ---------------------------------------- */
class TransVarDisplay {
    constructor() {
        this.ID = "";

        this.textcolor = "white",
            this.textsize = "34px";
        this.unit = "°C",
            this.state = ""

    }


    create(ParentID, posTop, posLeft, textcolor, textsize, title, einheit, ...status) {
        this.textcolor = textcolor;
        this.textsize = textsize;
        this.unit = einheit;
        this.state = status;


        var elem = document.createElement("div");
        elem.style.position = "absolute";
        elem.style.left = posLeft;
        elem.style.top = posTop;
        elem.style.width = "175px";
        elem.style.hight = "150px";
        elem.style.flexDirection = "column";
        elem.style.justifyContent = "center";


        var elem1 = document.createElement("div");
        elem1.innerHTML = title;
        elem1.style.color = "white";
        elem1.style.fontSize = "18px";
        elem1.style.justifyContent = "center";
        elem1.style.paddingBottom = "5px"
        elem.append(elem1);;
        var elem2 = document.createElement("div");
        elem.append(elem2);

        var elem4 = document.createElement("span");
        elem4.style.fontSize = this.textsize;
        elem4.style.color = this.textcolor;
        elem4.style.fontFamily = "dot matrix, arial";
        elem4.style.wordWrap = "break-word";
        elem4.innerHTML = "99" + this.unit;
        this.ID = elem4;
        elem2.append(elem4);

        document.getElementById(ParentID).appendChild(elem);
    };
    update(value, n) {
        try {
            if (n === "state") {
                var i = 0;
                if (value === false) {
                    i = 0;
                } else if (value === true) {
                    i = 1;
                }
                this.ID.innerHTML = this.state[i];
            } else if (n === 0 || n > 0) {
                //var wert = Math.round(value).toFixed(n);
                var wert = value.toFixed(n);
                this.ID.innerHTML = wert + this.unit;
            } else {
                this.ID.innerHTML = value + this.unit;
            }
        } catch (error) {
            // alert("error");
        }

    }
}



/* --------------------- Klasse flashing Led ---------------------------------------- */
class flashLed {
    constructor() {
        this.ID = "";
        this.color = "blue"

    }

    create(ParentID, ObjektFarbe, posTop, posLeft) {



        this.color = ObjektFarbe;



        var elem = document.createElement("div");
        elem.className = "led-box";

        var elem1 = document.createElement("div");
        elem1.className = "led-yellow";
        elem1.style.margin = "0 auto";
        elem1.style.width = "24px";
        elem1.style.height = "24px";
        elem1.style.backgroundColor = this.color;
        elem1.style.WebkitAnimationIterationCount = "infinite";
        elem1.style.WebkitAnimationDuration = "0s";
        elem1.style.WebkitAnimationName = "blinkYellow";
        elem.append(elem1);
        this.ID = elem1;

        document.getElementById(ParentID).appendChild(elem);


    }

    flashBlue() {
        this.ID.style.backgroundColor = "blue";
        this.ID.style.WebkitAnimationName = "blinkBlue";
    }

    flashRed() {
        this.ID.style.backgroundColor = "red";
        this.ID.style.WebkitAnimationName = "blinkRed";
    }

    update(state) {
        if (state == true) {
            this.ID.style.WebkitAnimationDuration = "1s";
        } else {
            this.ID.style.WebkitAnimationDuration = "0s";
        }
    }
}


/* --------------------- Klasse TVGuide ---------------------------------------- */
class TVguide {
    constructor() {
        this.ID = "";
        this.TVchannel = Array(12);
        this.TVtime = Array(12);
        this.TVprog = Array(12);

    }


    create(ParentID) {

        var elem = document.createElement("div");
        elem.innerHTML = "Program Guide"
        elem.style.paddingTop = "3px";


        for (var i = 0; i < 13; i++) {
            var elem1 = document.createElement("hr");
            elem.append(elem1);
            this.TVchannel[i] = document.createElement("div");
            elem.append(this.TVchannel[i]);
            this.TVtime[i] = document.createElement("div");
            elem.append(this.TVtime[i]);
            this.TVprog[i] = document.createElement("div");
            elem.append(this.TVprog[i]);
        }

        document.getElementById(ParentID).appendChild(elem);
    };

    update(text) {
        try {
            var TVarray = Array(12);
            TVarray = JSON.parse(text);
            for (var i = 0; i < 13; i++) {
                this.TVchannel[i].innerHTML = TVarray[i].DispChName;
                this.TVtime[i].innerHTML = TVarray[i].Time;
                this.TVprog[i].innerHTML = TVarray[i].ProgTitle;
            }
        } catch (error) {
            // alert("error");
        }

    }
}

/* --------------------- Klasse Ctrl Status Button ---------------------------------------- */
class CtrlStatButton {
    constructor() {
        this.id1 = "";
        this.id2 = "";
        this.id3 = "";
        this.label = "";
        this.stat1 = false;
        this.stat2 = false;
        this.statcolor = "transparent";
    }

    create(ParentID, posTop, posLeft, size, label, color, cmdType, command) {
        var elem = document.createElement("div");
        elem.className = "ctrlbutton";
        elem.classList.add(size, color);
        this.label = label;
        this.ID = elem;

        elem.style.position = "absolute";
        elem.style.left = posLeft;
        elem.style.top = posTop;

        if (cmdType == "ctrlWindow") {
            elem.onclick = function () {

                // alle Ctrl auf 0px verkleinern 
                var Ctrl = document.getElementsByTagName("Ctrl");
                var MCtrlWindow = Array.from(Ctrl);
                MCtrlWindow.forEach(function (element) {
                    var a = element.className;
                    document.getElementsByClassName(a)[0].style.width = "0px";
                });
                // ctrlWindow umschalten
                document.getElementsByClassName(command)[0].style.width = "26vw";
            }
        } else if (cmdType == "command") {
            elem.setAttribute("onclick", command);
        }

        var elem1 = document.createElement("span");
        elem1.className = "fa fa-circle";
        elem1.style.color = this.statcolor;
        elem1.style.fontSize = "20px";
        elem1.style.padding = "5px";
        elem1.style.cssFloat = "left";
        this.id1 = elem1;

        elem.append(elem1);

        var elem2 = document.createElement("span");
        elem2.innerHTML = this.label;
        elem2.style.fontSize = "20px";
        elem2.style.padding = "5px";
        elem2.style.textAlign = "center";
        this.id2 = elem2;
        elem.append(elem2);

        var elem3 = document.createElement("span");
        elem3.className = "fa fa-circle";
        elem3.style.fontSize = "20px";
        elem3.style.color = this.statcolor;
        elem3.style.cssFloat = "right";
        elem3.style.padding = "5px";
        this.id3 = elem3;
        elem.append(elem3);

        document.getElementById(ParentID).appendChild(elem);
    }

    update(label, stat1, stat2) {

        this.label = label;
        this.id2.innerHTML = this.label;
        if (stat1 === true || stat1 === "Yes") {
            this.statcolor = "lime";
            this.id1.style.color = this.statcolor;
        } else if (stat1 === false || stat1 === "No") {
            this.statcolor = "red";
            this.id1.style.color = this.statcolor;
        }
        if (stat2 === true || stat1 === "Yes") {
            this.statcolor = "lime";
            this.id3.style.color = this.statcolor;
        } else if (stat2 === false || stat2 === "No") {
            this.statcolor = "red";
            this.id3.style.color = this.statcolor;
        }
    }
}

/* --------------------- Klasse CtrlTile ---------------------------------------- */
class CtrlTile {
    constructor() {
        this.ID = "";
        this.color = "cyan";
        this.size = "size5";
        this.icon = "";
        this.id1 = "";
        this.id2 = "";
        this.id3 = "";
        this.id4 = "";
        this.id5 = "";
        this.cmd1 = "";
        this.cmd2 = "";
    }

    create(ParentID, posTop, posLeft, label, color, BaseIcon, cmd1, cmd2) {
        this.color = color;
        this.icon = BaseIcon;
        var elem = document.createElement("div");
        elem.className = "Tile";
        elem.classList.add(color + "Light");
        elem.style.position = "absolute";
        elem.style.left = posLeft;
        elem.style.top = posTop;



        elem.innerHTML = label;
        this.ID = elem;

        var Bild = document.createElement("IMG");
        Bild.src = "images/" + this.icon + "0" + ".png";
        Bild.style.width = "100px";
        Bild.style.height = "100px";
        Bild.style.position = "relative";
        Bild.style.left = "50%x";
        Bild.style.paddingTop = "5px";
        this.id1 = Bild;
        elem.append(Bild);

        var elemTC = document.createElement("div");
        elemTC.style.display = "flex";
        elemTC.style.flexDirection = "row";
        elemTC.style.justifyContent = "space-between";
        elem.append(elemTC);

        var elemTL = document.createElement("span");
        elemTL.innerHTML = "left";
        elemTL.style.paddingLeft = "5px";
        this.id2 = elemTL;
        elemTC.append(elemTL);

        var elemTR = document.createElement("span");
        elemTR.innerHTML = "right";
        elemTR.style.paddingRight = "5px";
        this.id3 = elemTR;
        elemTC.append(elemTR);

        var elem1 = document.createElement("div");
        elem1.style.display = "flex";
        elem1.style.flexDirection = "row";
        elem1.style.justifyContent = "space-between";
        elem1.style.position = "absolute";
        elem1.style.top = "75%";

        elem.append(elem1);



        var elem2 = document.createElement("div");
        elem2.className = "ctrlbutton";
        elem2.classList.add(this.size, this.color);
        elem2.innerHTML = "off";
        this.id4 = elem2;
        this.cmd1 = cmd1;
        elem2.setAttribute("onclick", this.cmd1);

        elem1.append(elem2);


        var elem4 = document.createElement("div");
        elem4.className = "ctrlbutton";
        elem4.classList.add(this.size, this.color);
        elem4.innerHTML = "on";
        this.id5 = elem4;

        this.cmd2 = cmd2;
        elem4.setAttribute("onclick", this.cmd2);

        elem1.append(elem4);

        document.getElementById(ParentID).appendChild(elem);
    }

    update(value, valueLeft, valueRight) {

        if (value === true) {
            this.id1.src = "images/" + this.icon + "1" + ".png";
            this.id4.style.color = "white";
            this.id5.style.color = "lime"
        } else {
            this.id1.src = "images/" + this.icon + "0" + ".png";
            this.id4.style.color = "lime";
            this.id5.style.color = "white"
        }
        this.id2.innerHTML = valueLeft;
        this.id3.innerHTML = valueRight;
    }
}

/* --------------------- Klasse SetIframe ---------------------------------------- */
class SetIframe {
    constructor() {
        this.ID = "";
        this.startDate = new Date();
        this.differenz = 0;
        this.bufferA = "";
        this.buf = "";
    }

    create(ParentID, posTop, posLeft, sizeH, sizeW, color, source) {
        //var source = "<p>Some new content inside the iframe!</p>";
        //var source = "<table width='auto'><tr><td width='auto'height='80px'><div><img src=https://a2.tvspielfilm.de/itv_sofa/2019-03-10/5c6affc281896536498e11b9_149.jpg alt='not Found'></div></td><td width='980px'><div style='text-align:left; margin-left:10px;'><b style=color:#C00000;>19:05 | RTL | Vermisst</b><br><small>Rund um den Globus sucht Sandra Eckardt nach verschollenen Personen. Nicht immer gibt’s ein Happy End.  Sechs neue Folgen, so. </small><br></div></td></tr></table>";

        var ifrm = document.createElement("iframe");
        ifrm.setAttribute("src", "");
        ifrm.style.width = sizeW;
        ifrm.style.height = sizeH;
        ifrm.style.position = "relative";
        ifrm.style.top = posTop;
        ifrm.style.left = posLeft;
        ifrm.srcdoc = "";
        ifrm.classList.add(color);
        this.ID = ifrm;
        this.buf = new buffer("");
        document.getElementById(ParentID).appendChild(ifrm);
    }

    update(urlstring, interval) {



        // var endDate = new Date();
        // this.differenz = (endDate.getTime() - this.startDate.getTime());
        //if (this.differenz > interval) {
        var oldWert = this.buf.wert;
        if (oldWert != urlstring) {
            this.buf.wert = urlstring;
            this.ID.srcdoc = urlstring;
        }

        //   this.startDate = endDate;
        // }
    }
}

/* --------------------- Klasse ShowUrlImage ---------------------------------------- */
class ShowUrlImage {
    constructor() {
        this.ID = "";
    }

    create(ParentID, posTop, posLeft, sizeH, sizeW, SourceUrl) {
        var img = document.createElement("img");
        img.src = SourceUrl;
        img.style.width = sizeW;
        img.style.height = sizeH;
        img.style.position = "relative";
        img.style.top = posTop;
        img.style.left = posLeft;
        this.ID = img;
        document.getElementById(ParentID).appendChild(img);
    }

    update(SourceUrl) {
        this.ID.src = SourceUrl;
    }
}

/* --------------------- Klasse ArrayListBox ---------------------------------------- */
class ArrayListBox {
    constructor() {
        this.ID = "";
    }

    create(ParentID, posTop, posLeft, txtColor) {
        var arrBox = document.createElement("table");
        arrBox.width = "100%";
        arrBox.style.position = "relative";
        arrBox.style.top = posTop;
        arrBox.style.left = posLeft;
        arrBox.style.color = txtColor;
        this.ID = arrBox;

        var elem1 = document.createElement("tr");
        arrBox.append(elem1);

        var elem2 = document.createElement("td");
        elem1.append(elem2);

        var elem3 = document.createElement("div");
        elem3.style.textAlign = "left";
        elem3.innerHTML = "";
        elem2.append(elem3);


        document.getElementById(ParentID).appendChild(arrBox);
    }

    update(jsonarray) {
        var array = JSON.parse(jsonarray);
        // As long as <ul> has a child node, remove it
        while (this.ID.hasChildNodes()) {
            this.ID.removeChild(this.ID.firstChild);
        }
        var a = this.ID;
        array.forEach(function (value) {
            var elem1 = document.createElement("tr");
            a.append(elem1);

            var elem2 = document.createElement("td");
            elem1.append(elem2);

            var elem3 = document.createElement("div");
            elem3.style.textAlign = "left";
            elem3.innerHTML = value;
            elem2.append(elem3);

            a.append(elem1);
        });
    }
}
/* --------------------- Klasse ArraySelectListBox ---------------------------------------- */
class ArraySelectListBox {
    constructor() {
        this.ID = "";
    }

    create(ParentID, posTop, posLeft, txtColor) {
        var arrBox = document.createElement("table");
        arrBox.cellPadding = "10px";
        arrBox.cellSpacing = "10px";
        arrBox.width = "100%";
        arrBox.style.position = "relative";
        arrBox.style.top = posTop;
        arrBox.style.left = posLeft;
        arrBox.style.color = txtColor;
        this.ID = arrBox;

        var elem1 = document.createElement("tr");
        arrBox.append(elem1);

        var elem2 = document.createElement("td");

        elem1.append(elem2);

        var elem3 = document.createElement("div");
        elem3.style.textAlign = "left";

        elem3.innerHTML = "";
        elem2.append(elem3);


        document.getElementById(ParentID).appendChild(arrBox);
    }

    update(jsonarray) {
        var array = JSON.parse(jsonarray);
        // As long as <ul> has a child node, remove it
        while (this.ID.hasChildNodes()) {
            this.ID.removeChild(this.ID.firstChild);
        }
        var a = this.ID;
        array.forEach(function (value, i) {
            var elem1 = document.createElement("tr");
            a.append(elem1);

            var elem2 = document.createElement("td");
            elem1.append(elem2);

            var elem3 = document.createElement("div");
            elem3.style.textAlign = "left";
            elem3.innerHTML = value;
            elem3.onclick = function () {
                var index = i;
                send('command(Cook,selected,' + i + ')');
            }
            elem2.append(elem3);

            a.append(elem1);
        });
    }
}

/* --------------------- Klasse TextBox ---------------------------------------- */
class TextBox {
    constructor() {
        this.ID = "";
    }

    create(ParentID, posTop, posLeft, sizeH, sizeW, txtColor, txtSize, bgColor) {

        var elem1 = document.createElement("div");
        var txt = document.createElement("textarea");
        txt.style.color = txtColor;
        txt.style.fontSize = txtSize;
        txt.style.backgroundColor = bgColor;
        txt.style.width = sizeW;
        txt.style.height = sizeH;
        txt.style.position = "relative";
        txt.style.top = posTop;
        txt.style.left = posLeft;
        txt.innerHTML = "";
        this.ID = txt;
        elem1.append(txt);


        document.getElementById(ParentID).appendChild(elem1);
    }

    update(text) {
        this.ID.innerHTML = text;
    }
}

/* --------------------- Klasse HeadLine ---------------------------------------- */
class HeadLine {
    constructor() {
        this.ID = "";
    }

    create(ParentID, bgcolor, headline) {
        var elem1 = document.createElement("header");
        elem1.style.backgroundColor = bgcolor;
        var elem2 = document.createElement("h1");
        elem2.innerHTML = headline;
        elem2.style.fontSize = "18px";
        elem1.append(elem2);
        this.ID = elem2;
        document.getElementById(ParentID).appendChild(elem1);
    }

    update(headline) {
        if (typeof (headline) != 'undefined' && headline != null) {
            this.ID.innerHTML = headline;
        } else {
            $('fehler').innerHTML = "Variable wrong or missing:";
        }

    }
}


/* --------------------- Klasse Clock ---------------------------------------- */
class EierUhr {
    constructor() {
        this.ID = "";
        this.klasse = "";
        this.wert = "";
    }

    create(ParentID, n) {
        var container = document.createElement("div");
        var elem = document.createElement("div");
        elem.className = "clock" + n;
        elem.style.margin = "2em";
        this.klasse = elem.className;
        container.append(elem);

        var contHMS = document.createElement("div");
        contHMS.style.marginLeft = "10px";
        contHMS.style.marginRight = "10px";
        contHMS.style.display = "flex";
        contHMS.style.flexDirection = "row";
        contHMS.style.justifyContent = "space-between";
        var contH = document.createElement("div");
        var elemIncH = document.createElement("button");
        elemIncH.className = "incH" + n;
        elemIncH.style.width = "50px";
        elemIncH.style.height = "50px";
        elemIncH.style.fontSize = "20px";
        elemIncH.style.marginRight = "5px";
        elemIncH.innerHTML = "+";
        contH.append(elemIncH);
        var elemDecH = document.createElement("button");
        elemDecH.className = "decH" + n;
        elemDecH.style.width = "50px";
        elemDecH.style.height = "50px";
        elemDecH.style.fontSize = "20px";
        elemDecH.style.marginLeft = "5px";
        elemDecH.innerHTML = "-";
        contH.append(elemDecH);

        contHMS.append(contH);

        var contM = document.createElement("div");
        var elemIncMin = document.createElement("button");
        elemIncMin.className = "incMin" + n;
        elemIncMin.style.width = "50px";
        elemIncMin.style.height = "50px";
        elemIncMin.style.fontSize = "20px";
        elemIncMin.style.marginRight = "5px";
        elemIncMin.innerHTML = "+";
        contM.append(elemIncMin);
        var elemDecMin = document.createElement("button");
        elemDecMin.className = "decMin" + n;
        elemDecMin.style.width = "50px";
        elemDecMin.style.height = "50px";
        elemDecMin.style.fontSize = "20px";
        elemDecMin.style.marginLeft = "5px";
        elemDecMin.innerHTML = "-";
        contM.append(elemDecMin);

        contHMS.append(contM);


        var contS = document.createElement("div");
        var elemIncSec = document.createElement("button");
        elemIncSec.className = "incSec" + n;
        elemIncSec.style.width = "50px";
        elemIncSec.style.height = "50px";
        elemIncSec.style.fontSize = "20px";
        elemIncSec.style.marginRight = "5px";
        elemIncSec.innerHTML = "+";
        contS.append(elemIncSec);
        var elemDecSec = document.createElement("button");
        elemDecSec.className = "decSec" + n;
        elemDecSec.style.width = "50px";
        elemDecSec.style.height = "50px";
        elemDecSec.style.fontSize = "20px";
        elemDecSec.style.marginLeft = "5px";
        elemDecSec.innerHTML = "-";
        contS.append(elemDecSec);
        contHMS.append(contS);
        container.append(contHMS);

        var contSS = document.createElement("div");
        contSS.style.marginLeft = "10px";
        contSS.style.marginRight = "10px";
        contSS.style.display = "flex";
        contSS.style.flexDirection = "row";
        contSS.style.justifyContent = "center";
        var elemStart = document.createElement("button");
        elemStart.className = "start" + n;
        elemStart.style.width = "70px";
        elemStart.style.height = "50px";
        elemStart.style.marginRight = "2px";
        elemStart.innerHTML = "Start";
        this.wert = elemStart;
        contSS.append(elemStart);

        var elemStop = document.createElement("button");
        elemStop.className = "stop" + n;
        elemStop.style.width = "70px";
        elemStop.style.height = "50px";
        elemStop.style.marginLeft = "2px";
        elemStop.innerHTML = "Stop";
        contSS.append(elemStop);
        contHMS.append(contSS);

        document.getElementById(ParentID).appendChild(container);
    }

    update() {


    }

    countdown1() {
        var clock1 = jQuery('.clock1').FlipClock(10, {
            clockFace: 'HourlyCounter',
            countdown: true,
            autoStart: false,
            callbacks: {
                start: function () {

                }
            }
        });

        jQuery('.start1').click(function (e) {

            clock1.start();
        });

        jQuery('.stop1').click(function (e) {

            clock1.stop();
        });

        jQuery('.incSec1').click(function (e) {
            var time = clock1.getTime().time;
            if (time > 57) {
                time = -2
            };
            clock1.stop();
            clock1.setTime(time + 2);
        });
        jQuery('.decSec1').click(function (e) {
            var time = clock1.getTime().time;
            if (time < 1) {
                time = 0
            };
            clock1.stop();
            clock1.setTime(time - 0);
        });

        jQuery('.incMin1').click(function (e) {
            var time = clock1.getTime().time;
            if (time > 3538) {
                time = 3539
            };
            clock1.stop();
            clock1.setTime(time + 61);
        });
        jQuery('.decMin1').click(function (e) {
            var time = clock1.getTime().time;
            if (time < 61) {
                time = 60
            };
            clock1.stop();
            clock1.setTime(time - 59);
        });

        jQuery('.incH1').click(function (e) {
            var time = clock1.getTime().time;
            if (time > 82798) {
                time = 82799
            };
            clock1.stop();
            clock1.setTime(time + 3601);
        });
        jQuery('.decH1').click(function (e) {
            var time = clock1.getTime().time;
            if (time < 3588) {
                time = 3599
            };
            clock1.stop();
            clock1.setTime(time - 3599);
        });
    }

    countdown2() {
        var clock2 = jQuery('.clock2').FlipClock(10, {
            clockFace: 'HourlyCounter',
            countdown: true,
            autoStart: false,
            callbacks: {
                start: function () {

                }
            }
        });

        jQuery('.start2').click(function (e) {

            clock2.start();
        });

        jQuery('.stop2').click(function (e) {

            clock2.stop();
        });

        jQuery('.incSec2').click(function (e) {
            var time = clock2.getTime().time;
            if (time > 57) {
                time = -2
            };
            clock2.stop();
            clock2.setTime(time + 2);
        });
        jQuery('.decSec2').click(function (e) {
            var time = clock2.getTime().time;
            if (time < 1) {
                time = 0
            };
            clock2.stop();
            clock2.setTime(time - 0);
        });

        jQuery('.incMin2').click(function (e) {
            var time = clock2.getTime().time;
            if (time > 3538) {
                time = 3539
            };
            clock2.stop();
            clock2.setTime(time + 61);
        });
        jQuery('.decMin2').click(function (e) {
            var time = clock2.getTime().time;
            if (time < 61) {
                time = 60
            };
            clock2.stop();
            clock2.setTime(time - 59);
        });

        jQuery('.incH2').click(function (e) {
            var time = clock2.getTime().time;
            if (time > 82798) {
                time = 82799
            };
            clock2.stop();
            clock2.setTime(time + 3601);
        });
        jQuery('.decH2').click(function (e) {
            var time = clock2.getTime().time;
            if (time < 3588) {
                time = 3599
            };
            clock2.stop();
            clock2.setTime(time - 3599);
        });
    }

    countdown3() {
        var clock3 = jQuery('.clock3').FlipClock(10, {
            clockFace: 'HourlyCounter',
            countdown: true,
            autoStart: false,
            callbacks: {
                start: function () {

                }
            }
        });

        jQuery('.start3').click(function (e) {

            clock3.start();
        });

        jQuery('.stop3').click(function (e) {

            clock3.stop();
        });

        jQuery('.incSec3').click(function (e) {
            var time = clock3.getTime().time;
            if (time > 57) {
                time = -2
            };
            clock3.stop();
            clock3.setTime(time + 2);
        });
        jQuery('.decSec3').click(function (e) {
            var time = clock3.getTime().time;
            if (time < 1) {
                time = 0
            };
            clock3.stop();
            clock3.setTime(time - 0);
        });

        jQuery('.incMin3').click(function (e) {
            var time = clock3.getTime().time;
            if (time > 3538) {
                time = 3539
            };
            clock3.stop();
            clock3.setTime(time + 61);
        });
        jQuery('.decMin3').click(function (e) {
            var time = clock3.getTime().time;
            if (time < 61) {
                time = 60
            };
            clock3.stop();
            clock3.setTime(time - 59);
        });

        jQuery('.incH3').click(function (e) {
            var time = clock3.getTime().time;
            if (time > 82798) {
                time = 82799
            };
            clock3.stop();
            clock3.setTime(time + 3601);
        });
        jQuery('.decH3').click(function (e) {
            var time = clock3.getTime().time;
            if (time < 3588) {
                time = 3599
            };
            clock3.stop();
            clock3.setTime(time - 3599);
        });
    }
}

/* --------------------- Klasse WeatherLabel ---------------------------------------- */
class WeatherLabel {
    constructor() {

        this.source = "";
        this.day = "";
        this.tempMin_ID = "";
        this.tempMax_ID = "";

        this.windspeed_ID = "";
        this.windGust_ID = "";
        this.cloudCover_ID = "";
        this.humidity_ID = "";
        this.ozone_ID = "";
        this.uvIndex_ID = "";
        this.summary_ID = "";
    }

    create(ParentID, top, left, frameheight) {
        var container = document.createElement("div");
        container.style.position = "absolute";
        container.style.top = top;
        container.style.left = left;
        container.className = "weathertablecell";
        container.style.color = "white";

        var secA = document.createElement("section");
        secA.className = "weatherframe";
        secA.style.height = frameheight;
        container.append(secA);
        var titel = document.createElement("div");
        titel.innerHTML = this.day;
        titel.style.fontSize = "22px";
        this.day = titel;
        secA.append(titel);
        var Fig = document.createElement("figure");
        Fig.style.position = "absolute";
        Fig.style.top = "10px";
        Fig.style.left = "-30px";
        secA.append(Fig);
        var img = document.createElement("img");
        img.style.width = "70px";
        img.style.height = "70px";

        var secB = document.createElement("section");
        secB.style.position = "absolute";
        secB.style.top = "90px";
        secB.style.left = "100px";
        secB.style.fontSize = "20px";
        container.append(secB);
        var tempMax = document.createElement("div");
        this.tempMax_ID = tempMax;
        secB.append(tempMax);
        var tempMin = document.createElement("div");
        secB.append(tempMin);
        this.tempMin_ID = tempMin;

        var secC = document.createElement("section");
        secC.style.position = "absolute";
        secC.style.top = "160px";
        secC.style.left = "10px";
        secC.style.fontSize = "12px";

        container.append(secC);
        var windspeed = document.createElement("div");
        this.windspeed_ID = windspeed;
        secC.append(windspeed);
        var windGust = document.createElement("div");
        this.windGust_ID = windGust;
        secC.append(windGust);
        var cloudCover = document.createElement("div");
        this.cloudCover_ID = cloudCover;
        secC.append(cloudCover);
        var humidity = document.createElement("div");
        this.humidity_ID = humidity;
        secC.append(humidity);
        var ozone = document.createElement("div");
        this.ozone_ID = ozone;
        secC.append(ozone);
        var uvIndex = document.createElement("div");
        this.uvIndex_ID = uvIndex;
        secC.append(uvIndex);
        var summary = document.createElement("div");
        this.summary_ID = summary;
        secC.append(summary);
        this.source = img;
        Fig.append(img);





        document.getElementById(ParentID).appendChild(container);
    }

    update(iconurl, day, tempMax, tempMin, windspeed, windGust, cloudCover, humidity, ozone, uvIndex, summary) {
        this.source.src = iconurl;
        this.day.innerHTML = day;
        this.tempMax_ID.innerHTML = tempMax;
        this.tempMin_ID.innerHTML = tempMin;
        this.windspeed_ID.innerHTML = "Windgeschw.: " + windspeed;
        this.windGust_ID.innerHTML = "Wind Böen: " + windGust;
        this.cloudCover_ID.innerHTML = "Bewölkung: " + cloudCover;
        this.humidity_ID.innerHTML = "Feuchte: " + humidity;
        if (ozone) {
            this.ozone_ID.innerHTML = "Ozonwert: " + ozone;
            this.uvIndex_ID.innerHTML = "UV-Index: " + uvIndex;
            this.summary_ID.innerHTML = summary;
        }
    }


}


/* --------------------- Klasse Area ---------------------------------------- */
class Area {
    constructor() {

    }

    createMain(MainID, SubMenuID, bgcolor) {
        var elem1 = document.createElement("Main");
        elem1.id = MainID;
        elem1.className = SubMenuID;
        elem1.classList.add(bgcolor, "area", "areaMain");
        document.getElementById("Container").appendChild(elem1);
    }

    createCtrl(CtrlID, MainID, bgcolor) {
        var elem2 = document.createElement("Ctrl");
        elem2.id = CtrlID;
        elem2.className = MainID;
        elem2.classList.add(bgcolor, "area", "areaCtrl");
        document.getElementById("Container").appendChild(elem2);
    }
}



/* --------------------- Klasse BackBtn ---------------------------------------- */
class BackBtn {
    constructor() {
        this.ID = "";
        this.color = "cyan";
        this.size = "size5";
        this.icon = "";
        this.id1 = "";
        this.id2 = "";
        this.id3 = "";
        this.id4 = "";
        this.id5 = "";
        this.cmd1 = "";
        this.cmd2 = "";
    }

    create(ParentID, posTop, posLeft, Icon) {

        this.icon = Icon;

        var elem = document.createElement("div");
        //elem.className = "Tile";
        //elem.classList.add(color + "Light");
        elem.style.position = "absolute";
        elem.style.left = posLeft;
        elem.style.top = posTop;

        this.ID = elem;

        var Bild = document.createElement("IMG");

        Bild.src = this.icon;
        Bild.style.width = "40px";
        Bild.style.height = "40px";
        elem.onclick = function () {
            //Class->MainMenu auf Breite prüfen -> Ja .> nichts machen
            var MainMenu = document.getElementById("MainMenu").style.width;
            var done = false;
            if (MainMenu > "28vw") {
                //MainMenu ist ausgeklappt
                done = true;
            }
            if (!done) {
                //prüfen ob ein SubMenu aufgeklappt ist und welches - Ja -> MainMenu aufklappen
                var subs = document.getElementsByTagName("SubMenu");
                var SubMenus = Array.from(subs);
                SubMenus.forEach(function (element) {
                    var a = element.className;
                    var b = document.getElementsByClassName(a)[0].style.width;
                    //das aufgeklappte SubMenu schliessen und das MainMenu voll aufklappen
                    if (b === "78vw") {
                        document.getElementsByClassName(a)[0].style.width = "0px";
                        document.getElementsByClassName("MainMenu")[0].style.width = "100vw";
                        done = true;
                    }
                });
            }
            if (!done) {
                //prüfen ob eine class mit Tag Main aufgeklappt ist - Ja -> zugehöriges Submenu öffnen und MainMenu verkleinert öffnen
                var mains = document.getElementsByTagName("Main");
                var mainwin = Array.from(mains);
                mainwin.forEach(function (element) {


                    //das aufgeklappte SubMenu schliessen und das MainMenu voll aufklappen
                    if (element.style.width === "100vw") {

                        element.style.width = "0px";
                        var submenu = element.classList[0];
                        document.getElementsByClassName("MainMenu")[0].style.width = "22vw";
                        document.getElementById(submenu).style.width = "78vw";
                    }
                });
            }
            if (!done) {
                //prüfen od eine class mit Tag CTRL aufgeklappt ist - Ja -> bis Unterstrich ID kürzen und umschalten 
                var ctrls = document.getElementsByTagName("CTRL");
                var ctrlwin = Array.from(ctrls);
                ctrlwin.forEach(function (element) {
                    var mainwin = element.classList[0];

                    //das aufgeklappte Ctrl schliessen und das MainWindow voll aufklappen
                    if (element.style.width === "100vw") {
                        element.style.width = "0px";
                        document.getElementById(mainwin).style.width = "100vw";
                        done = true;
                    }
                });
            }
        }
        this.id1 = Bild;
        elem.append(Bild);




        document.getElementById(ParentID).appendChild(elem);
    }


}

/* --------------------- Klasse MoveSwitch - Schiebescahlter -------------------------------------- */
class MoveSwitch {
    constructor() {

    }
    create(ParentID, posTop, posLeft) {
        var container = document.createElement("div");
        container.style.position = "absolute";
        container.style.left = posLeft;
        container.style.top = posTop;
        var elem = document.createElement("label");
        elem.className = "MoveSwitch";
        container.append(elem);
        var elem1 = document.createElement("Input");
        elem1.type = "checkbox";
        elem.append(elem1);
        var elem2 = document.createElement("div");
        elem2.className = "MoveSlider";
        elem.append(elem2);
        document.getElementById(ParentID).appendChild(container);
    }
}

/* --------------------- Class Heating Ctrl -------------------------------------- */
/* -------------------------- Version: 2.04.10.2019 ------------------------- */
class HeatCtrl {
    constructor() {
        this.ID = "";
        this.value1ID = "";
        this.value2ID = "";
        this.color = "";
        this.state0 = "+";
        this.state1 = "-";
        this.state2 = "set";
        this.unit = "°C";
        this.leftStat = "00";
        this.rightStat = "00";

        //optionale Parameter
        this.b = "200px";
        this.h = "220px";
        this.zeichengr = "25px";
        this.btnTextColor = "black";
        this.labelcolor = "lime";
    }
    create(ParentID, posTop, posLeft, color, label, room, ...param) {
        this.color = color;
        if (param.length > 1) {
            this.b = param[0];
            this.h = param[1];
            this.zeichengr = param[2];
            this.btnTextColor = param[3];
            this.labelcolor = param[4];
        }
        var container = document.createElement("div");
        this.ID = container;
        container.style.flexDirection = "column";
        container.style.position = "absolute";
        container.style.left = posLeft;
        container.style.top = posTop;
        container.className = color + "Light";
        container.style.width = this.b;
        container.style.height = this.h;
        container.style.color = this.labelcolor;
        // Label 
        var elem1 = document.createElement("div");
        elem1.style.paddingTop = "5px";
        elem1.style.height = "30px";
        elem1.style.backgroundColor = "black";
        elem1.innerHTML = label;
        container.append(elem1)
        //ausstehender Soll - Einstell Wert - Soll WERT
        var elemTC = document.createElement("div");
        elemTC.style.width = this.b;
        elemTC.style.padding = "5px";
        elemTC.style.height = "35%";
        elemTC.style.color = "black";
        elemTC.style.display = "flex";
        elemTC.style.alignItems = "flex-end";
        elemTC.style.flexDirection = "row";
        elemTC.style.justifyContent = "space-between";
        container.append(elemTC);
        //Anzeige ausstehende Soll Temperatur
        var elemTL = document.createElement("span");
        this.value1ID = elemTL;
        elemTL.innerHTML = this.leftStat + this.unit;
        elemTC.append(elemTL);
        //Anzeige vorgewählter Sollwert
        var elemTM = document.createElement("span");
        elemTM.style.paddingBottom = "10%";
        elemTM.innerHTML = "22.0" + this.unit;
        elemTM.style.fontSize = "30px";
        elemTC.append(elemTM);
        //Anzeige Sollwert am Regler
        var elemTR = document.createElement("span");
        this.value2ID = elemTR;
        elemTR.innerHTML = this.rightStat + this.unit;
        elemTC.append(elemTR);
        // + / - buttons
        var elem1 = document.createElement("div");
        elem1.style.width = this.b;
        elem1.style.height = "25%";
        elem1.style.display = "flex";
        elem1.style.flexDirection = "row";
        elem1.style.justifyContent = "space-around";
        elem1.style.position = "absolute";
        elem1.style.top = "51%";
        elem1.style.padding = "2px";
        elem1.style.fontsize = this.fs1;
        container.append(elem1);
        // Button Vorgabewert - Sollwert um 0,5 °C erhöhen
        var elem2 = document.createElement("div");
        elem2.style.width = "50%";
        elem2.style.color = this.btnTextColor;
        elem2.style.fontSize = "200%";
        elem2.className = "ctrlbutton";
        elem2.classList.add(this.color);
        elem2.innerHTML = this.state0;
        elem2.style.flexGrow = "1";
        elem2.onclick = function () {
            var solltemp = parseFloat(elemTM.innerHTML) + 0.5;
            elemTM.innerHTML = solltemp + "°C";
        }
        elem1.append(elem2);
        // Button Vorgabewert - Sollwert um 0,5 °C verringern
        var elem4 = document.createElement("div");
        elem4.style.width = "50%";
        elem4.style.flexGrow = "1";
        elem4.style.color = this.btnTextColor;
        elem4.style.fontSize = "200%";
        elem4.className = "ctrlbutton";
        elem4.classList.add(this.color);
        elem4.innerHTML = this.state1;
        elem4.onclick = function () {
            var solltemp = parseFloat(elemTM.innerHTML) - 0.5;
            elemTM.innerHTML = solltemp + "°C";
        }
        elem1.append(elem4);
        // Set Button
        var elem5 = document.createElement("div");
        elem5.style.width = this.b;
        elem5.style.height = "25%";
        elem5.style.padding = "2px";

        elem5.style.display = "flex";
        elem5.style.flexDirection = "row";
        elem5.style.justifyContent = "space-around";
        elem5.style.position = "absolute";
        elem5.style.top = "75%";
        container.append(elem5);
        // angewählten Sollwert an IPS senden
        var elem6 = document.createElement("div");

        elem6.style.flexGrow = "1";
        elem6.className = "ctrlbutton";
        elem6.classList.add(this.color);
        elem6.style.fontSize = "200%";
        elem6.innerHTML = this.state2;
        elem6.style.color = this.btnTextColor;
        elem6.onclick = function () {
            var solltemp = parseFloat(elemTM.innerHTML);
            var cmd = "command(Heizung," + room + "," + solltemp + ")";
            send(cmd);
        }
        elem5.append(elem6);

        document.getElementById(ParentID).appendChild(container);
    }

    update(value1, value2, change = "false") {
        this.value1ID.innerHTML = value1 + this.unit;
        this.value2ID.innerHTML = value2 + this.unit;
        if (change) {
            this.elemSollTemp.innerHTML = value2 + this.unit;
        }
    }
}


/* --------------------- Class Kachel -------------------------------------- */
/* -------------------------- Version:1.05.10.2019 -------------------------- */

class Kachel {
    constructor() {
        this.ID = "";


        //optionale Parameter
        this.b = "200px";
        this.h = "350px";

        this.btnTextColor = "black";
        this.labelcolor = "lime";
    }
    create(ParentID, posTop, posLeft, breite, hoehe, color, title, ...param) {
        this.color = color;
        this.b = breite;
        this.h = hoehe;
        if (param.length > 1) {
            this.b = param[0];
            this.h = param[1];

            this.btnTextColor = param[2];
            this.labelcolor = param[3];
        }
        var container = document.createElement("div");
        this.ID = container;
        container.style.flexDirection = "column";
        container.style.position = "absolute";
        container.style.left = posLeft;
        container.style.top = posTop;
        container.className = color + "Light";
        container.style.width = this.b;
        container.style.height = this.h;
        container.style.color = this.labelcolor;
        container.style.border = "thin solid black";

        // Label 
        var label = document.createElement("div");
        label.style.paddingTop = "2px";
        label.style.height = "30px";
        label.style.backgroundColor = "black";
        label.innerHTML = title;
        container.append(label);

        document.getElementById(ParentID).appendChild(container);
    }
}


/* ---------------------  Klasse FontCtrlButton   ---------------------------------------- */
/* -------------------------- Version: 1.23.12.2019 ------------------------- */
class FontCtrlButton {
    constructor() {
        this.ID = "";

        //optionale Parameter
        this.b = "200px";
        this.h = "60px";
        this.textfarbe = "black";
        this.textgr = "20px";
        this.textfarbeAF = "black";
    }
    create(ParentID, color, posTop, posLeft, symbol, text, ctrltype, cmd, ctrlWin, ...param) {
        if (param.length > 1) {
            this.b = param[0];
            this.h = param[1];
            this.textfarbe = param[2];
            this.textgr = param[3];
            this.textfarbeAF = param[4];
        }
        var container = document.createElement("div");
        container.className = "ctrlbutton";
        container.classList.add(color);
        this.ID = container;
        container.style.width = this.b;
        container.style.height = this.h;
        container.style.position = "absolute";
        container.style.left = posLeft;
        container.style.top = posTop;
        container.style.display = "flex";
        container.style.flexDirection = "row";
        container.style.justifyContent = "space-around";

        switch (ctrltype) {
            case "command":
                container.setAttribute("onclick", cmd);
                break;
            case "ctrlWindow":
                container.onclick = function () {
                    // alle Main auf 0px verkleinern 
                    var Main = document.getElementsByTagName("Main");
                    var MainWindow = Array.from(Main);
                    MainWindow.forEach(function (element) {
                        var a = element.className;
                        document.getElementsByClassName(a)[0].style.width = "0px";
                    });
                    // alle Ctrl auf 0px verkleinern 
                    var Ctrl = document.getElementsByTagName("Ctrl");
                    var MCtrlWindow = Array.from(Ctrl);
                    MCtrlWindow.forEach(function (element) {
                        var a = element.className;
                        document.getElementsByClassName(a)[0].style.width = "0px";
                    });
                    // ctrlWindow umschalten
                    document.getElementById(ctrlWin).style.width = "100vw";
                };
                break;
            case "CtrlFunc":
                container.onclick = function () {
                    // alle Main auf 0px verkleinern 
                    var Main = document.getElementsByTagName("Main");
                    var MainWindow = Array.from(Main);
                    MainWindow.forEach(function (element) {
                        var a = element.className;
                        document.getElementsByClassName(a)[0].style.width = "0px";
                    });
                    // alle Ctrl auf 0px verkleinern 
                    var Ctrl = document.getElementsByTagName("Ctrl");
                    var MCtrlWindow = Array.from(Ctrl);
                    MCtrlWindow.forEach(function (element) {
                        var a = element.className;
                        document.getElementsByClassName(a)[0].style.width = "0px";
                    });
                    // ctrlWindow umschalten
                    document.getElementsByClassName(ctrlWin)[0].style.width = "56vw";
                    ShowHidePanel(cmd);
                }
                break;
            case "CtrlCmd":
                container.onclick = function () {
                    // alle Ctrl auf 0px verkleinern 
                    var Ctrl = document.getElementsByTagName("Ctrl");
                    var MCtrlWindow = Array.from(Ctrl);
                    MCtrlWindow.forEach(function (element) {
                        var a = element.className;
                        document.getElementsByClassName(a)[0].style.width = "0px";
                    });
                    // ctrlWindow umschalten
                    document.getElementsByClassName(ctrlWin)[0].style.width = "26vw";

                    send(cmd);
                }
                break;
            default:
                container.setAttribute("onclick", cmd);
        }

        var elem = document.createElement("div");
        elem.style.backgroundColor = "transparent";
        elem.style.width = "20%";
        elem.style.height = "75%";
        elem.style.display = "flex";
        elem.style.alignItems = "center";
        elem.style.justifyContent = "center";
        container.append(elem);

        var elem1 = document.createElement("span");
        elem1.className = symbol;
        elem1.style.fontSize = this.textgr;
        elem1.style.color = this.textfarbeAF;
        elem.append(elem1);

        var textContainer = document.createElement("div");
        textContainer.style.width = "70%";
        textContainer.style.height = "75%";
        textContainer.style.backgroundColor = "transparent";
        textContainer.style.display = "flex";
        textContainer.style.alignItems = "center";
        textContainer.style.justifyContent = "center";
        container.append(textContainer);

        var textelem = document.createElement("span");
        textelem.style.color = this.textfarbe;
        textelem.style.fontSize = this.textgr;
        textelem.innerHTML = text;
        textContainer.append(textelem);

        document.getElementById(ParentID).appendChild(container);
    }
}

/* --------------------- Klasse message Buffer ---------------------------------------- */
class buffer {
    constructor(wert) {
        this.speicher = wert;
    }
}