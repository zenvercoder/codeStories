data = {
    coderLocations: [
        {
            title: 'Anonymous',
            interest: 'adventure',
            content: 'I chose Peru because I want to go to Machu Picchu to reward myself after a year of working in development',
            location: {lat: -9.189967, lng: -75.015152}
        },
        {
            title: 'Anonymous',
            interest: 'adventure',
            content: 'I chose Black Rock, because I think the Burning Man adventure will help me code better :D',
            location: {lat: 40.910733, lng: -119.056010}
        },
        {
            title: 'Anonymous',
            interest: 'creativity',
            content: 'I chose Paris, France because it seems like a cool place to get creative',
            location: {lat: 48.856614, lng: 2.352222}
        },
        {
            title: 'Jeremy',
            interest: 'education',
            content: 'I chose Monterey, California because I attended Defense Language Institute to learn Russian and ' +
            'I would love to take my family there when I graduate',
            location: {lat: 36.600238, lng: -121.894676}
        },
        {
            title: 'Vote For Gary Johnson',
            interest: 'family',
            content: 'I chose Canada because I can code from anywhere and when we elect Hilary or Trump, I plan on taking my family far away from this place!',
            location: {lat: 49.539469, lng: -89.912109}
        },
        {
            title: 'Jessica',
            interest: 'lifeHacks',
            content: 'Japan because they are really good at robots and Life Hacking. Both made better with code',
            location: {lat: 36.204824, lng: 138.252924}
        },
        {
            title: 'Sarah',
            interest: 'volunteering',
            content: 'Ethiopia because I feel very lucky to have the opportunity to learn to code. ' +
            'I want to help make this opportunity available to people all over, especially in third-world countries',
            location: {lat: 9.145000, lng: 40.489673}
        }
    ],



    coderObstaclesLocations: [
        {
            title: 'Lady from Ohio',
            obstacle: 'noTime',
            content: 'I chose Oklahoma city because that is where the Aint nobody got time for that!!! lady lives',
            location: {lat: 35.467560, lng: -97.516428}
        },
        {
            title: 'Mad Hiker',
            obstacle: 'tooHard',
            content: 'I chose the Appalachian trail because I think hiking it will be hard. I thought coding would be hard and it is. ' +
            'But I took baby steps and I know now that I can do anything I set my mind to. ' +
            '(I CAN DO EEEETTTT!!!)',
            location: {lat: 40.478504, lng: -76.540081}
        },

        {
            title: 'Trump',
            obstacle: 'financial',
            content: 'Trump Tower because I can make more money from coding than Trump can make without going bankrupt 5 times',
            location: {lat: 40.762500, lng: -73.974167}
        }
    ],

    galvanizeLocations: [
        {title: 'Golden Triangle', location: {lat: 39.733464, lng: -104.994809}},
        {title: 'Fort Collins', location: {lat: 40.588476, lng: -105.076406}},
        {title: 'Boulder', location: {lat: 40.0177619, lng: -105.2841254}},
        {title: 'Platte', location: {lat: 39.7455473, lng: -105.0085912}},
        {title: 'Seattle', location: {lat: 47.598962, lng: -122.333799}},
        {title: 'Phoenix', location: {lat: 33.440838, lng: -112.066925}},
        {title: 'San Francisco', location: {lat: 37.787601, lng: -122.396643}},
        {title: 'New York', location: {lat: 40.726388, lng: -74.007792}},
        {title: 'Austin', location: {lat: 30.266114, lng: -97.749945}},
    ],

    styles: {

        galvanizeStyle: [
            {
                featureType: 'water',
                stylers: [
                    // galvanize blue
                    {color: '#8a8a8a'}
                ]
            }, {
                featureType: 'administrative',
                elementType: 'labels.text.stroke',
                stylers: [
                    {color: '#ffffff'},
                    {weight: 6}
                ]
            }, {
                featureType: 'administrative',
                elementType: 'labels.text.fill',
                stylers: [
                    //galvanize gray
                    {color: '#a7a9ac'}
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        // darker orange = 7b4404 8a8a8a
                        // gray
                        "color": "#f7901e"
                    },
                    {
                        "lightness": 14
                    },
                    {
                        "weight": 1.4
                    }
                ]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [
                    //galvanize outline orange
                    {color: '#835c31'},
                    {lightness: -40}
                ]
            }, {
                featureType: 'transit.station',
                stylers: [
                    {weight: 9},
                    {hue: '#e85113'}
                ]
            }, {
                featureType: 'road.highway',
                elementType: 'labels.icon',
                stylers: [
                    {visibility: 'on'}
                ]
            }, {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [
                    {lightness: 100}
                ]
            }, {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [
                    {lightness: -100}
                ]
            }, {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [
                    {visibility: 'on'},
                    //galvanize gray
                    {color: '#8a8a8a'}
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        //light orange
                        "color": "#8a8a8a"
                    },
                    {
                        "lightness": 25
                    }
                ]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.fill',
                stylers: [
                    //galvanize orange = f7901e
                    {color: '#fef3e6'},
                    {lightness: -25}
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#fde7ce"

                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        // super light orange
                        "color": "#fde7ce"
                    }
                ]
            }
        ],


        nightVision: [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 13
                    },
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
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        // darker green
                        "color": "#006600"
                    },
                    {
                        "lightness": 14
                    },
                    {
                        "weight": 1.4
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        // darkest green
                        "color": "#003300"

                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        // darkerer green
                        "color": "#004d00"
                    },
                    {
                        "lightness": 5
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        //5th darkest green
                        "color": "#006600"
                    },
                    {
                        "lightness": 25
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#0b3d51"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        // 7th lightest green
                        "color": "#009900"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        // 2nd darkest green
                        "color": "#001a00"
                    }
                ]
            }
        ],

        codeStories: [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        //light purple
                        "color": "#f2d9e6"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f2d9e6"
                    },
                    {
                        "lightness": 13
                    },
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
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#f2d9e6"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        // darker purple
                        "color": "#5c2040"
                    },
                    {
                        "lightness": 14
                    },
                    {
                        "weight": 1.4
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        // darkest purple
                        //"color": "#391427"
                        //lighter uglier purple
                        //"color": "#973569"
                        //"color": "#71284f"
                        "color": "#5e2142"

                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        // darkerer orange
                        "color": "#e95420"
                    },
                    {
                        "lightness": 5
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        //light purple
                        "color": "#d78eb5"
                        //"color": "#e4b4ce"
                        //"color": "#f2d9e6"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        //white
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 25
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#f2d9e6"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#0b3d51"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f2d9e6"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        // white
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        // light orange
                        //"color": "#f8cab9"
                        //different blues
                        //"color": "#aee2e0"
                        //"color": "#b3b3ff"
                        "color": "#e6e6ff"
                    }
                ]
            }
        ],

        avocadoWorldStyle: [
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#aee2e0"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#abce83"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#769E72"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#7B8758"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#EBF4A4"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "color": "#8dab68"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#5B5B3F"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#ABCE83"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#A4C67D"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#9BBF72"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#EBF4A4"
                    }
                ]
            },
            {
                "featureType": "transit",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#87ae79"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#7f2200"
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "visibility": "on"
                    },
                    {
                        "weight": 4.1
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#495421"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            }
        ]
    }
}
