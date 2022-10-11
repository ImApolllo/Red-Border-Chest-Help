var symCount = 0;
var symActive = [false, false, false, false, false, false, false, false, false];
var currentSym = [];
var flavorText = [
    "After completeing the opening encounter and going through the portal, jump on the first swinging lamp and turn around. The Symbol is directly below the platform below you.",
    "This Symbol can be found on the wall directly behind the first secret chest.  After riding the tombship across the chasm (second part of the jumping puzzle), jump off early and head to the left up the wall.  Then head through the hole in the wall to find the chest and Symbol.",
    "After completing the totems encounter, head to the left side room.  The Symbol is on the wall behind the balcony where the knights spawn, towards the right side.",
    "After defeating the Warpriest, this Symbol can be found on the wall on the right side balcony.",
    "After making your way through Golgoroth's maze, the next Symbol is on the iside wall of the final hole.  Directly before the door to Golgoroth.",
    "After defeating Golgoroth, head to the room in the lower pit directly behind the first orb drop area.  The Symbol is on the wall.",
    "Make your way through the second jumping puzzle and pull out your ghost to reveal the hidden platforms.  Across the platforms is a room where you find the second secret chest.  The Symbol is directly beside the chest.",
    "After completing the jumping puzzle, the next Symbol can be found on the ceiling directly in front of the door at the end.",
    "After entering the final arena, turn around and look up.  The final Symbol is on the wall above the door you entered through."
];

// Backtick = `

function symOver(id) {
    if (symCount >= 3) {
        return
    }

    id.style.borderColor = "red";
    //console.log(id.getAttribute('id'));
}
function symOut(id) {
    var symbol = id.getAttribute('id');
    if (symbol === "sym-1") {
        if (symActive[0] === true) {
            return;
        }
    }
    if (symbol === "sym-2") {
        if (symActive[1] === true) {
            return;
        }
    }
    if (symbol === "sym-3") {
        if (symActive[2] === true) {
            return;
        }
    }
    if (symbol === "sym-4") {
        if (symActive[3] === true) {
            return;
        }
    }
    if (symbol === "sym-5") {
        if (symActive[4] === true) {
            return;
        }
    }
    if (symbol === "sym-6") {
        if (symActive[5] === true) {
            return;
        }
    }
    if (symbol === "sym-7") {
        if (symActive[6] === true) {
            return;
        }
    }
    if (symbol === "sym-8") {
        if (symActive[7] === true) {
            return;
        }
    }
    if (symbol === "sym-9") {
        if (symActive[8] === true) {
            return;
        }
    }
    id.style.borderColor = "transparent";
}
function selectSym(id) {
    var symbol = id.getAttribute('id');
    
    if (symCount >= 3){
        symCount = 3;
        alert("Only 3 Symbols can be selected at a time...")
        return;
    }

    if (symbol === "sym-1") {
        if (symActive[0] === true) {
            return;
        }
        currentSym.push('1');
        currentSym.sort();
        symActive[0] = true;
    }
    if (symbol === "sym-2") {
        if (symActive[1] === true) {
            return;
        }
        currentSym.push('2');
        currentSym.sort();
        symActive[1] = true;
    }
    if (symbol === "sym-3") {
        if (symActive[2] === true) {
            return;
        }
        currentSym.push('3');
        currentSym.sort();
        symActive[2] = true;
    }
    if (symbol === "sym-4") {
        if (symActive[3] === true) {
            return;
        }
        currentSym.push('4');
        currentSym.sort();
        symActive[3] = true;
    }
    if (symbol === "sym-5") {
        if (symActive[4] === true) {
            return;
        }
        currentSym.push('5');
        currentSym.sort();
        symActive[4] = true;
    }
    if (symbol === "sym-6") {
        if (symActive[5] === true) {
            return;
        }
        currentSym.push('6');
        currentSym.sort();
        symActive[5] = true;
    }
    if (symbol === "sym-7") {
        if (symActive[6] === true) {
            return;
        }
        currentSym.push('7');
        currentSym.sort();
        symActive[6] = true;
    }
    if (symbol === "sym-8") {
        if (symActive[7] === true) {
            return;
        }
        currentSym.push('8');
        currentSym.sort();
        symActive[7] = true;
    }
    if (symbol === "sym-9") {
        if (symActive[8] === true) {
            return;
        }
        currentSym.push('9');
        currentSym.sort();
        symActive[8] = true;
    }
    symCount++;
    id.style.borderColor = "red";
    updateSelection(id);
}
function unSelect(id, title) {
    var symbol = document.querySelector(id);
    var currentRemove = title.replace('sym-', '');
    var recolorSym = document.querySelector('#' + title);
    recolorSym.style.borderColor = "transparent";
    var name = symbol.getAttribute('class');

    for (i = 0; i < symActive.length; i++) {
        if (title === 'sym-' + (i + 1)) {
            symActive[i] = false
        }
    }

    let index = currentSym.indexOf(currentRemove);
    currentSym.splice(index, 1);
    symbol.remove();
    symCount--;

    var format = document.querySelector('#secret');
    if (currentSym.length === 1) {
        format.style.justifyContent = "center";
    }
    if (currentSym.length === 2) {
        format.style.justifyContent = "space-around";
    }
    if (currentSym.length === 3) {
        format.style.justifyContent = "space-between";
    }
}
function updateSelection(pngInfo) {
    var newText = ''; 
    var card = "";
    var name = '';
    var fText = "";
    var format = document.querySelector('#secret');
    if (currentSym.length === 1) {
        format.style.justifyContent = "center";
    }
    if (currentSym.length === 2) {
        format.style.justifyContent = "space-around";
    }
    if (currentSym.length === 3) {
        format.style.justifyContent = "space-between";
    }

    for (i = 0; i < currentSym.length; i++) {
        name = 'sym-' + currentSym[i];
        if (i === 0){
            card = "first";
        }
        if (i === 1){
            card = "second";
        }
        if (i === 2){
            card = "third";
        }
        for (j = 0; j < flavorText.length; j++) {
            if (name === 'sym-' + (j + 1)) {
                fText = flavorText[j];
            }
        }
        newText = newText + `<div class="selected-symbol" id="${card}">
                            <div class="sym-container">
                                <div class="top-sym" onclick="unSelect('#${card}', '${name}')"><img src="${name}.png" alt="${name}"></div>
                            </div>
                            <p>
                                ${fText}
                            </p>
                            <img src="Temp.png" alt="" class="guide-img">
                        </div>`;
    }
    var update = document.querySelector('#secret');
    update.innerHTML = newText;
}