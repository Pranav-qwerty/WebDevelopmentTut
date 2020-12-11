function updatamap(){
    fetch("/data.json")
    .then(response => response.json())
    .then(rsp => {
        console.log(rsp.data)
        rsp.data.forEach(element => {
            latitude = element.latitude;
            longitude = element.longitude;
            console.log(longitude, latitude)
            cases = element.infected;

            if(cases>=255){
                color =  "red"
            }
            else{
                color = `rgb(${cases}, 0, 0)`
            }

            // Mark on map
            var marker = new mapboxgl.Marker({
                draggable: false,
                color: color
                })
                .setLngLat([longitude, latitude])
                .addTo(map);
        });
    })
}

updatamap()