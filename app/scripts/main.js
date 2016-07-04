d3.xml('data/ring.svg', 'image/svg+xml', function (error, data) {
    if (error) {
        console.log('Error while loading the SVG file!', error);
    }
    else {

        var groups = [];

        var regions = [
        'house',
        'water',
        'hands',
        'heart',
        'compass',
        'graph',
        'flame',
        'sign',
        'meter',
        ];

        var ring = d3.select('.ring-image').node()
                     .appendChild(data.documentElement);

        d3.select('svg').attr("viewBox", "0 0 450 340")
        .attr("height", "")
        .attr("width", "");

        // labels
        for (var i = regions.length - 1; i >= 0; i--) {
          var region = regions[i];
          var node = d3.select('#' + region + '-group');
          node.attr('opacity', 0.85)
            .attr('class', 'svg-group')
            .attr("xlink:href", "#" + region + '-block')
            .on('click', function(){
            window.location.hash = d3.select(this).attr('xlink:href');
          });
          groups.push(node);
        };
    }
});
