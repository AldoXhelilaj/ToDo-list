$(document).ready(function() {
    var OurRequest = new XMLHttpRequest();
    OurRequest.open('GET', 'object.json', true);
    OurRequest.onload = function() {

        var ourData = JSON.parse(OurRequest.responseText)


        renderHtml(ourData);


    };
    OurRequest.send();


    function renderHtml(data) {

        var htmlString = "";
        for (i = 0; i < data.length; i++) {


            htmlString += "<li>" + "<span>" + data[i].name + '<input type="button" class="delete" value="Delete">' + '<input type="button" class="edit" value="Edit">';
            console.log(data[2].name);




            $('.todo-list').html(htmlString);


        }

    }





    $('.btn-primary').on('click', function() {

        var $newtask = $('#add').val();
        console.log($newtask);

        if ($newtask === '') {
            $('.warning').html('<i class="fa fa-warning"></i>No task').show();
            $('.succes').hide();


        } else {
            console.log("asdsad")





            var newListItem = '<li>' + '<span>' + $newtask + '<input type="button" class="delete" value="Delete">' + '<input type="button" class="edit" value="Edit">' + '</span>' + '</li>';



            //newListItem += '<input type="text" class="inputTask">';



            //apend to list
            $('ul').append(newListItem);
            $('.inputTask').val($newtask);
            //empty input value
            $('#add').val('');

        };



    });
    $(document).on("click", '.edit', function() {
        // make the span editable and focus it
        $(this).closest("li").find("span").prop("contenteditable", true).focus();
        return false;
    });
    /* $('ul').on('click', '.edit',function(){
		//get parent
		var parent = $(this).parent();
		//check parent class
		if (!parent.hasClass('editMode')) {
			parent.addClass('editMode');
		}else if (parent.hasClass('editMode')) {	
			//grab value entered in input and set as label
			var editTask = $(this).prev('input[type="text"]').val();
			var editLabel = parent.find('label');
			editLabel.html(editTask);
			//remove edit class
			parent.removeClass('editMode');
		};

			});*/
    $('ul').on('click', '.delete', function() {
        $(this).closest("li").fadeOut(function() {
            $(this).remove();
        });
        return false;







    });
});
