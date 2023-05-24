var url_string = document.URL
var url = new URL(url_string);
var symbol = url.searchParams.get("coin");

document.title = symbol + " | Zinance"