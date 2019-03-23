
   let navBarItemsArray = [
        {
            display: "Home",
            onclick: function(){
                alert('Hello');
            }
        },
        {
            display: "Upload",
            onclick: "pageChange('upload')"
        },
        {
            display: "Edit",
            onclick: "pageChange('editElement')"
        }
    ]  
    
    
    let commonData = {
        navBarItemsArray
    }