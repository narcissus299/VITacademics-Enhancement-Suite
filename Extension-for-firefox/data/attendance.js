var fileref = document.createElement("link");
fileref.setAttribute("rel", "stylesheet");
fileref.setAttribute("type", "text/css");
fileref.setAttribute("href", "resource://vit-academics-enhancement-suite/content/skin/home.css");
document.getElementsByTagName("head")[0].appendChild(fileref);

var fileref = document.createElement("link");
fileref.setAttribute("rel", "stylesheet");
fileref.setAttribute("type", "text/css");
fileref.setAttribute("href", "resource://vit-academics-enhancement-suite/content/skin/attendance.css");
document.getElementsByTagName("head")[0].appendChild(fileref);

function getDateString(date) {
	var month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
	return ("0"+date.getDate()).slice(-2)
			+"-"+
			month[date.getMonth()]
			+"-"+
			date.getFullYear();
}

document.getElementsByName("to_date")[0].value=getDateString(new Date());