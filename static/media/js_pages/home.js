jQuery(document).ready(function($) {
    $("#featured").tabs({fx:{opacity: "toggle"}}).tabs("rotate", 5000, true).tabs("select", 0);
});

jQuery(window).load(function() {
    // Initialize our map
    var mapDiv = jQuery("#googlemap");
    mapDiv.show();
    var centerPoint = new google.maps.LatLng(50.2, -119.4);
    var zoomLevel = 4;
    if (jQuery(window).width() < 500)
        zoomLevel = 3;
    var options = {
                zoom: 4,
                scrollwheel: false,
                zoomControl: false,
                scaleControl: false,
                streetViewControl: false,
                maxZoom: zoomLevel,
                minZoom: zoomLevel,
                center: centerPoint,
                panControlOptions: {
                    position: google.maps.ControlPosition.LEFT_BOTTOM
                },
                mapTypeId: 'terrain'
    };  
    var map = new google.maps.Map(mapDiv[0], options);

    // Create our polygon boundaries with hole
    var everythingElse = [
                new google.maps.LatLng(-87, 120),
                new google.maps.LatLng(-87, -87),
                new google.maps.LatLng(-87, 0)];
    var pnw = [
              new google.maps.LatLng(60, -140),
              new google.maps.LatLng(60, -120),
              new google.maps.LatLng(53.8, -120),
              new google.maps.LatLng(45, -109),
              new google.maps.LatLng(39, -109),
              new google.maps.LatLng(39, -125)];
    var polygon = new google.maps.Polygon({
              paths: [everythingElse, pnw],
              strokeColor: "#333",
              strokeOpacity: 0.9,
              strokeWeight: 2,
              fillColor: "#000000",
              fillOpacity: .1,
              clickable: false
            });
    polygon.setMap(map);

    // Show all coords from fusion table (needs to be updated on occasion)
    var allcoords = new google.maps.FusionTablesLayer({
      query: {
        select: 'location',
        from: fusionId
      },
      clickable: false
    });
    allcoords.setMap(map);
});
