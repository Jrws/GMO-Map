var former = ["cu","fr","de","se","cz","sk","pl","ua","ro","bg","eg","bf","ir"];
var never = ["ru"]
var clrs = {};
for (const r of regions.country) {
    clrs[r.code] = "#d9d973";
}
for (const code of former) {
    clrs[code] = "#ffa366";
}
for (const code of never) {
    clrs[code] = "#f4f3f0"
}

function displayInfo(region) {
    var ctry = regions.country.find(c => c.name == region);
    if (!(ctry === undefined)) {
        $("#name").text(ctry.common);
        $("#info").html("");
        for (const text of ctry.info) {
            if (!Array.isArray(text))
            {
                $("#info").append("<li>" + text + "</li>");
            } else {
                for (const bullet of text) {
                    $("#info").append("<li class=\"indent\">" + bullet + "</li>");
                    console.log(1);
                }
                console.log(2);
            }
        }
    } else {
        $("#name, #info").each(function() {
            $(this).text("");
        });
        $("#name").text(region);
    }
}

$(document).ready(function() {
    $('#vmap').vectorMap({
        map: 'world_en',
        backgroundColor: '#a5bfdd',
        borderColor: '#818181',
        borderOpacity: 0.25,
        borderWidth: 1,
        color: '#f4f3f0',
        colors: clrs,
        enableZoom: true,
        hoverColor: '#d9e9c8',
        hoverOpacity: null,
        normalizeFunction: 'linear',
        scaleColors: ['#b6d6ff', '#005ace'],
        selectedColor: '#a8cb80',
        selectedRegions: null,
        showTooltip: true,
        onRegionClick: function(element, code, region) {            
            displayInfo(region);
        }
    });
});