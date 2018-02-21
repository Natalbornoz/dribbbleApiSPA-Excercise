
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCUvs5MCIVbQHT-UzasbYD_ZsG8z-NbY0Y",
    authDomain: "dribbbleapispa.firebaseapp.com",
    databaseURL: "https://dribbbleapispa.firebaseio.com",
    projectId: "dribbbleapispa",
    storageBucket: "",
    messagingSenderId: "935773620525"
  };
  firebase.initializeApp(config);
  //termina para logiarse



//Get Username
const dribbble = 'netguru';
//Amoung of shots to display
limit = 12;
const token = '1c73ffb7859f2c1c37450789dce2369af5caa9e18c3df1fa30485cfad79081d8';
//Call Dribble API
$.ajax({
     url: 'https://api.dribbble.com/v1/users/' + dribbble + '/shots?access_token=' + token,
    dataType: 'jsonp',
    type: 'GET',
    data: { access_token: token, count: limit },
    // si tiene exito la solicitud pediremos que haga lo siguiente 
    success: function (data) {
       
            console.log(data);
            for (x in data.data) {
                $('.cont-imagenes').append('<li><div class="row"><a class=col-12 href="#"><img src="' + data.data[x].images.normal + '"></a><div class=row><span class=col-12><i class="icos fas fa fa-eye aria-hidden="true"">' + data.data[x].views_count + '</i></span></a><span><i class="icos fa fa-comment aria-hidden="true"">' + data.data[x].comments_count + '</i></span></a><span><i class="icos fa fa-heart aria-hidden="true"">' + data.data[x].likes_count + '</i></span></div></div></li>');

                }
        },

    error: function (data) {
        console.log('Tenemos inconvenientes con la Api de Dribbble');
    }
});

