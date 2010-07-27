
function updatePosition(options) {
  // test if map is ready
  if (typeof options.map.panTo == "function") {
    var center = new google.maps.LatLng(options.pos.latitude, options.pos.longitude);
    options.map.panTo(center);
    options.map.setZoom(3);
  } else {
    window.setTimeout(updatePosition,10,options);
  }
}

function createMarker(map,pos,title) {
  var point = new google.maps.LatLng(pos.lat,pos.lng);
  var marker = new google.maps.Marker({position: point, map: map, title: title});
}

$(function jQOnLoad() {
  var myLatlng = new google.maps.LatLng(4, 4);
  var myOptions = {
    zoom: 2,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.HYBRID,
    navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL}
  };
  var map = new google.maps.Map($("#map_canvas").get(0), myOptions);
  createMarker(map,{lat:55.671951971786605,lng:12.591995000839233},'Christian Sonne');
  createMarker(map,{lat:48.4286111,        lng:-123.3655556},      'Erik Vold');

  try {
    // try to center map at users position
    window.navigator.geolocation.getCurrentPosition(
      function positionFound(position) {
        if (typeof position.coords == "object")
          position = position.coords;
        updatePosition({map:map,pos:position});
      },
      function positionNotFound() {window.alert("oh no!");/* ignore, stay at default center */}
    );
  } catch (e) {/* no geolocation */};
});
