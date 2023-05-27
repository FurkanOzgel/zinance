fetch('../data/blogs.json')
    .then((response) => response.json())
    .then((json) => {
        document.getElementsByClassName("main-container")[0].style.display = "flex"
        json.forEach(element => {
            let div = document.createElement("div");
            div.innerHTML = element.name;
            div.style.width = "50%";
            document.getElementsByClassName("main-container")[0].appendChild(div)
        });

    })