$(document).ready(function () {

    createGrid();

    //Turn the squares a different color 
    $('.grid').hover(function(){
<<<<<<< HEAD
        $(this).css('background-color', '#6699FF');
    });

    //Erases board and reprompts/recreates
    $('button[name="reset"]').on('click', function(){
=======
        $(this).css('background-color', '#3366FF');
    });

    //Erases board and reprompts/recreates
    $('button[name="reset"').on('click', function(){
>>>>>>> eb5aa3ffce05582e28a7d8bc2403af6d8253a15c
        emptyGrid();
        createGrid();
    });

<<<<<<< HEAD
 });

    // Stuff lol
=======
});

// Stuff lol
>>>>>>> eb5aa3ffce05582e28a7d8bc2403af6d8253a15c
function createGrid() {

    var size = prompt("What would you like the Grid size to be? 1-42", '');
    if (size >= 42) {
        size = 42;
    }

    // Calclates Square size
<<<<<<< HEAD
    var tileSize = (800 / size) +"px";
=======
    var tileSize = (960 / size) +"px";
>>>>>>> eb5aa3ffce05582e28a7d8bc2403af6d8253a15c

    var container = $('#container');
    var containerParent = container.parent();
    var newGrid = '<div class="grid"></div>';
<<<<<<< HEAD

=======
    
>>>>>>> eb5aa3ffce05582e28a7d8bc2403af6d8253a15c
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

<<<<<<< HEAD
    //Resets grid
    function emptyGrid () {
       $('.grid').css('background-color', '#fff');
}
=======

//Resets grid
function emptyGrid () {
    $("#container").remove();
}
>>>>>>> eb5aa3ffce05582e28a7d8bc2403af6d8253a15c
