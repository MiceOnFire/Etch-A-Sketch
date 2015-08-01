$(document).ready(function () {

    createGrid();

    //Turn the squares a different color 
    $('.grid').hover(function(){
        $(this).css('background-color', '#6699FF');
    });

    //Erases board and reprompts/recreates
    $('button[name="reset"]').on('click', function(){
        emptyGrid();
        createGrid();
    });

 });

    // Stuff lol
function createGrid() {

    var size = prompt("What would you like the Grid size to be? 1-42", '');
    if (size >= 42) {
        size = 42;
    }

    // Calclates Square size
    var tileSize = (800 / size) +"px";

    var container = $('#container');
    var containerParent = container.parent();
    var newGrid = '<div class="grid"></div>';

    container.detach();

    //Builds Grid
    for (var x = 1; x <= size; x++) {
        for (var i = 1; i <= size; i++) {
            container.append(newGrid);
        }
    }

    containerParent.append(container);

    //Set .Grid Size
    $('.grid').css({'height': tileSize, 'width': tileSize});
}

    //Resets grid
    function emptyGrid () {
       $('.grid').css('background-color', '#fff');
}