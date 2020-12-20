/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {

address: "localhost", // Address to listen on, can be:
                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
                      // - another specific IPv4/6 to listen on a specific interface
                      // - "", "0.0.0.0", "::" to listen on any interface
                      // Default, when address config is left out, is "localhost"
port: 8080,
ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
                                                       // or add a specific IPv4 of 192.168.1.5 :
                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

language: "en",
timeFormat: 24,
units: "metric",

modules: [
        {
                module: "alert",
        },
        {
                module: "updatenotification",
                position: "top_bar"
        },
        {
                module: "clock",
                position: "top_left"
        },
        {
                module: "calendar",
                header: "Michael's Calendar",
                position: "top_left",
                config: {
                        calendars: [
                                {
                                        symbol: "calendar-check",
                                        url: "<GOOGLE_CALENDER_ADDRESS>"
                                }
                        ]
                }
        },
	{

                module: "currentweather",
                position: "top_right",
                config: {
                        location: "London, GB",
                        appid: "<ID from https://openweathermap.org/city>",
                        units: "metric",
                        appendLocationNameToHeader: "true"
                }
        },
        {
          	module: 'MMM-MyCommute',
          	position: 'top_left',
          	config: {
            	apikey: '<GOOGLE_MAPS_API_KEY>',
            	origin: '<HOME_ADDRESS>',
            	startTime: '00:00',
            	endTime: '23:59',
		poorTimeThreshold: '1.4',
		showSummary: 'true',
		colorCodeTravelTime: 'true',
            	destinations: [
              		{
                	destination: '<WORK_ADDRESS>',
                	label: 'Work',
                	mode: 'driving',
                	color: '#82E5AA'
              		},
              		{
               		destination: '<TRAIN_STATION_ADDRESS>',
                	label: 'Old Street',
                	mode: 'transit',
                	transitMode: 'train',
                	showNextVehicleDeparture: 'true'
              		}
            		]
        	}
        },
	{
		module: 'MMM-Globe',
		position: 'bottom_center',
		config: {
			style: 'europeDiscNat',
			imageSize: 300,
			ownImagePath:'',
			updateInterval: 10*60*1000
			}
	},
        {
                module: "weatherforecast",
                position: "top_right",
                header: "Weather Forecast",
                config: {
                        location: "London, GB",
                        locationID: "",  //ID from https://openweathermap.org/city
                        appid: "<ID from https://openweathermap.org/city>",
                        units: "metric",
                        maxNumberOfDays: "7"
                }
        },
        {
                module: "newsfeed",
                position: "bottom_bar",
                config: {
                        feeds: [
                                {
                                        title: "BBC News",
                                        url: "http://feeds.bbci.co.uk/news/rss.xml"
                                }
                        ],
                        showSourceTitle: true,
                        showPublishDate: true
                }
	},
	{
		module: "MMM-HTMLBox",
 		position:"top_right",
 		config: {
    			width: "85%",
    			height: "20px",
    			refresh_interval_sec: 1,
			file: "doorbellLogs.txt" //file rung doorbell logs to
  		}
	}

]

};


/* POSITIONS:
 * `top_bar`, `top_left`, `top_center`, `top_right`,
 * `upper_third`, `middle_center`, `lower_third`,
 * `bottom_left`, `bottom_center`, `bottom_right`, `bottom_bar`,
 *`fullscreen_above`, and `fullscreen_below`
 */


/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}