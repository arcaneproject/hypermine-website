google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 11,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(40.6700, -73.9400), // New York

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [
                        {
                            "featureType":"all",
                            "elementType":"all",
                            "stylers":[
                                {
                                    "visibility":"simplified"
                                },
                                {
                                    "saturation":"-100"
                                },
                                {
                                    "invert_lightness":true
                                },
                                {
                                    "lightness":"11"
                                },
                                {
                                    "gamma":"1.27"
                                }
                            ]
                        },
                        {
                            "featureType":"administrative.locality",
                            "elementType":"all",
                            "stylers":[
                                {
                                    "visibility":"off"
                                }
                            ]
                        },
                        {
                            "featureType":"landscape.man_made",
                            "elementType":"all",
                            "stylers":[
                                {
                                    "color":"#733c3e"
                                }
                            ]
                        },
                        {
                            "featureType": "landscape",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#733c3e"
                                }
                            ]
                        },
                        {
                            "featureType":"poi.business",
                            "elementType":"all",
                            "stylers":[
                                {
                                    "visibility":"simplified"
                                },
                                {
                                    "hue":"#ff0000"
                                },
                                {
                                    "saturation":"75"
                                },
                                {
                                    "lightness":"24"
                                },
                                {
                                    "gamma":"0.70"
                                },
                                {
                                    "invert_lightness":true
                                }
                            ]
                        },
                        {
                            "featureType":"poi.government",
                            "elementType":"all",
                            "stylers":[
                                {
                                    "color":"#733c3e"
                                }
                            ]
                        },
                        {
                            "featureType":"poi.medical",
                            "elementType":"all",
                            "stylers":[
                                {
                                    "visibility":"simplified"
                                },
                                {
                                    "invert_lightness":true
                                },
                                {
                                    "hue":"#ff0000"
                                },
                                {
                                    "saturation":"73"
                                },
                                {
                                    "lightness":"-24"
                                },
                                {
                                    "gamma":"0.59"
                                }
                            ]
                        },
                        {
                            "featureType":"poi.park",
                            "elementType":"all",
                            "stylers":[
                                {
                                    "color":"#733c3e"
                                }
                            ]
                        },
                        {
                            "featureType":"poi.school",
                            "elementType":"all",
                            "stylers":[
                                {
                                    "visibility":"simplified"
                                },
                                {
                                    "hue":"#ff0000"
                                },
                                {
                                    "invert_lightness":true
                                },
                                {
                                    "saturation":"43"
                                },
                                {
                                    "lightness":"-16"
                                },
                                {
                                    "gamma":"0.73"
                                }
                            ]
                        },
                        {
                            "featureType":"poi.sports_complex",
                            "elementType":"all",
                            "stylers":[
                                {
                                    "hue":"#ff0000"
                                },
                                {
                                    "saturation":"43"
                                },
                                {
                                    "lightness":"-11"
                                },
                                {
                                    "gamma":"0.73"
                                },
                                {
                                    "invert_lightness":true
                                }
                            ]
                        },
                        {
                            "featureType":"road",
                            "elementType":"all",
                            "stylers":[
                                {
                                    "color":"#6b6b6b"
                                }
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#6b6b6b"
                                },
                                {
                                    "lightness": "-35"
                                },
                                {
                                    "saturation": "20"
                                }
                            ]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#6b6b6b"
                                },
                                {
                                    "lightness": "-35"
                                },
                                {
                                    "saturation": "20"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry.stroke",
                            "stylers": [
                                {
                                    "color": "#000000"
                                },
                                {
                                    "lightness": 29
                                },
                                {
                                    "weight": 0.2
                                }
                            ]
                        },
                        {
                            "featureType": "transit",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative.land_parcel",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "all",
                            "elementType": "labels.icon",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#575757"
                                }
                            ]
                        }
                    ]
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                // Let's also add a marker while we're at it
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(40.6700, -73.9400),
                    map: map,
                    title: 'Snazzy!'
                });
            }