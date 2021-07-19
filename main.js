var images = [
{"name": "Mouse", "link":"mouse.png",},
{"name": "Phone", "link":"phone.png",},
{"name": "Water bottle", "link":"water-bottle.png.crdownload",},
{"name": "Alarm Clock", "link": "alarm-clock.png"},
{"name": "Rubix Cube", "link": "rubix-cube.png"},
{"name": "Pikachu","link":"pikachu.png.crdownload"},
{"name": "Beyblade","link":"beyblade.png"},
{"name": "Tree","link":"tree.png"},
{"name": "Watch","link":"watch.png"},
{"name": "Globe", "link": "globe.png"}

]
var i = 0;
function next(){
    if(i == 10){
        i = 0;
    }
    document.getElementById("label").innerHTML = images[i].name;
    document.getElementById("image").src = images[i].link;
i++;
}
