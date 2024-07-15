function initMap() {
    var gymLocation = { lat: 19.495682628791624, lng: -99.02743773388998 }; // Cambia esto por la latitud y longitud de tu gimnasio
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: gymLocation
    });
    var marker = new google.maps.Marker({
        position: gymLocation,
        map: map
    });
}

