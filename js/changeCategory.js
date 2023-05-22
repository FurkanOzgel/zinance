

function change_category(item) {
    var cols;
    let category = item.value;

    cols = document.getElementsByClassName('news-container');
    for(i = 0; i < cols.length; i++) {
        cols[i].style.display = 'none';
    }

    switch(category) {
        case "all":
            cols = document.getElementsByClassName('news-container');
            for(i = 0; i < cols.length; i++) {
                cols[i].style.display = 'inline';
            }
            break;
        case "makroekonomi":
            cols = document.getElementsByClassName('makroekonomi');
            for(i = 0; i < cols.length; i++) {
                cols[i].style.display = 'inline';
            }
            break;
        case "kıymetli_metal":
            cols = document.getElementsByClassName('kıymetli_metal');
            for(i = 0; i < cols.length; i++) {
                cols[i].style.display = 'inline';
            }
            break;
        case "bist":
            cols = document.getElementsByClassName('bist');
            for(i = 0; i < cols.length; i++) {
                cols[i].style.display = 'inline';
            }
            break;
        case "dünya_borsaları":
            cols = document.getElementsByClassName('dünya_borsaları');
            for(i = 0; i < cols.length; i++) {
                cols[i].style.display = 'inline';
            }
            break;
        case "kripto":
            cols = document.getElementsByClassName('kripto');
            for(i = 0; i < cols.length; i++) {
                cols[i].style.display = 'inline';
            }
            break;
        case "döviz":
            cols = document.getElementsByClassName('döviz');
            for(i = 0; i < cols.length; i++) {
                cols[i].style.display = 'inline';
            }
            break;
    }
}