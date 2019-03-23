
let navBarItems = (items) => {
    let html = '';
    for (let i = 0; i < items.length; i++) {
        html += `
                <li class="nav-item active">
                <a class="nav-link" onclick="${items[i].onclick}">${items[i].display} <span class="sr-only">(current)</span></a>
            </li>   
        `;
    }
    return html
}

let navBarComponent = (items) => {

    let template = `
    <nav class="navbar navbar-expand-lg navbar-light  mb-5" >
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
    ${navBarItems(items)}
      </ul>
    </div>
  </nav>
    `;
    return template
}


let home = () => {
    let template = `
        ${navBarComponent(commonData.navBarItemsArray)}
    `;
    return template
}

let init = () => {
    document.getElementById("app").innerHTML = home()
}

init();
console.log(commonData)

let pageChange = (page) => {
    alert(page)
}