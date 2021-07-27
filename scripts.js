// dynamic input fields for form
$(document).ready(function(){
    const maxField = 25 //set max amount of fields allowed
    const addButton = $('.add-button') 
    const field = $('.dynamic-field') 
    const fieldHTML = '<div><input id="ing-name" type="text" name="dynamicField[]" placeholder="Ingredient" required value=""/><input id="ing-amount" type="text" name="dynamicField[]" placeholder="Amount" required value=""/><select id="ing-measure" name="dynamicField[]" required><option value="" disabled selected>Measure</option><option value="Gram/s">Gram/s</option><option value="Kilogram/s">Kilogram/s</option><option value="Teaspoon/s">Teaspoon/s</option><option value="Tablespoon/s">Tablespoon/s</option><option value="Pinch/es">Pinch/es</option><option value="Other">Other</option></select><a href="javascript:void(0)" class="remove-button"><img class="ir-icon" src="images/remove-icon.png"/></a></div>' 
    let x = 1 
    //add button is clicked
    $(addButton).click(function(){
        if(x < maxField){ 
            x++
            $(field).append(fieldHTML)
        }
    })
    //remove button is clicked
    $(field).on('click', '.remove-button', function(e){
        e.preventDefault()
        $(this).parent('div').remove() 
        x--
    })
  })
