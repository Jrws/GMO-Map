var former = ["cu","fr","de","se","cz","sk","pl","ua","ro","bg","eg","bf","ir"];
var never = ["ru","ch","zm","zw","uk","pe"]
var clrs = {};
var bulb_clrs = {};
var selected = "";
for (const r of regions.country) {
    clrs[r.code] = "#d9d973";
    bulb_clrs[r.code] = "#ffcc00";
}
for (const code of former) {
    clrs[code] = "#ffa366";
}
for (const code of never) {
    clrs[code] = "#f4f3f0"
}

function displayInfo(region, code) {
    var ctry = regions.country.find(c => c.name == region);
    if (!(ctry === undefined)) {
        $("#name").text(ctry.common);
        $("#grown").text("");
        if ("grown" in ctry) {
            $("#grown").text(ctry.grown.join(" | "));
        }
        $("#image").attr("src", "images/" + code + ".jpg")
        $("#info").html("");
        for (const text of ctry.info) {
            if (!Array.isArray(text))
            {
                $("#info").append("<li>" + text + "</li>");
            } else {
                for (const bullet of text) {
                    $("#info").append("<li class=\"indent\">" + bullet + "</li>");
                }
            }
        }
    } else {
        $("#name, #info, #grown").each(function() {
            $(this).text("");
        });
        $("#name").text(region);
        $("#image").attr("src", "images/default.jpg");
    }
    if (selected != code) {
        selected = code;
    } else {
        selected = "";
        $("#name").text("GMOs Around the World");
        $("#grown").text("");
        $("#image").attr("src", "images/gmo_tomato.jpg");
        $("#info").html(intro);
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
            displayInfo(region, code);
        }
    });
    
    $('#bulb').hover(function() {
        $(this).css("opacity", "1");
        $('.jqvmap-region').attr('fill', '#c8c5b6');
        $('#vmap').vectorMap('set', 'colors', bulb_clrs);
    }, function() {
        $(this).css("opacity", "0.6");
        $('.jqvmap-region').attr('fill', '#f4f3f0');
        $('#vmap').vectorMap('set', 'colors', clrs);
        $('#jqvmap1_' + selected).attr('fill', '#a8cb80');
    });
});