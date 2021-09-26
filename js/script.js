var url = window.location.search;
var params = new URLSearchParams(url);
var id = params.get('cranium_id')
// console.log(id);
var staticUrl = 'https://raw.githubusercontent.com/recklesslabs/wickedcraniums/main/' + id;


// Render the Cranium

async function getCranium() {
    const response = await fetch(staticUrl);
    const data = await response.json();

    document.getElementById('cranium').src = data.image
    // console.log(data.image);

    
}

getCranium();

// Get the dropdown value

function changeFunction(selectValue) {
    var clothing = selectValue.value;
    document.getElementById('clothes').src = "images/" + clothing + ".png";
    // console.log(clothing)
}

// Render the canvas 

$(document).ready(function () {

    $("#btn_convert").on('click', function () {
        html2canvas(document.getElementById("myHtml"),
            {
                allowTaint: true,
                useCORS: true
            }).then(function (canvas) {
                var anchorTag = document.createElement("a");
                document.body.appendChild(anchorTag);
                document.getElementById("teste").appendChild(canvas);
                anchorTag.download = "WickedClothing.jpg";
                anchorTag.href = canvas.toDataURL();
                anchorTag.target = '_blank';
                anchorTag.click();
            });
    });

});