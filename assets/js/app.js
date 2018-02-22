
  // Initialize Firebase
  /*var config = {
    apiKey: "AIzaSyCUvs5MCIVbQHT-UzasbYD_ZsG8z-NbY0Y",
    authDomain: "dribbbleapispa.firebaseapp.com",
    databaseURL: "https://dribbbleapispa.firebaseio.com",
    projectId: "dribbbleapispa",
    storageBucket: "",
    messagingSenderId: "935773620525"
  };
  firebase.initializeApp(config);
  //termina para logiarse */



//Get Username
let dribbble = $('#search').val();

//Amoung of shots to display
const token = '1c73ffb7859f2c1c37450789dce2369af5caa9e18c3df1fa30485cfad79081d8';
//Call Dribble API
limit = 12;
$('#button-search').on('click',function(){
    let dribbble = $('#search').val();
    $('.info').empty();
    $('.cont-imagenes').empty();
$.ajax({
    url: 'https://api.dribbble.com/v1/users/'+dribbble +'/?access_token=' + token,
    dataType: 'jsonp',
    type: 'GET',
    data: { access_token: token, count: limit},
    // si tiene exito la solicitud pediremos que haga lo siguiente 
    success: function (data) {
        console.log(data);
       
        $('.info').append(`<div class="row"><h3><span>Nombre  </span>${data.data.name} </h3><h6><span>Nickname</span>  ${data.data.username} </h6></div>`)

        $('#avatar').attr('src', data.data.avatar_url);
        
        // <h3>Nombre: MaríaJosé Barriga</h3>
        //     <h6>Descripción: Diseñadora de pacotilla</h6>
        //     <h6>Nombre: MaríaJosé Barriga</h6>
        //     <h6>Descripción: Front end Developer</h6>
    },
    error: function (data) {
        console.log('Tenemos inconvenientes con la Api de Dribbble');
    }
});


  
$.ajax({
     url: 'https://api.dribbble.com/v1/users/' + dribbble + '/shots?access_token=' + token,
    dataType: 'jsonp',
    type: 'GET',
    data: { access_token: token, count: limit },
    // si tiene exito la solicitud pediremos que haga lo siguiente 
    success: function (data) {
            console.log(data);
            for (x in data.data) {
                $('.cont-imagenes').append('<li><div class="row"><p>'+ data.data[x].title +'</p><div class="row"><a class=col-12 href="' + data.data[x].html_url + '"><img src="' + data.data[x].images.normal + '"></a><div class=row><span class=col-12><i class="icos fas fa fa-eye aria-hidden="true"">' + data.data[x].views_count + '</i></span></a><span><i class="icos fa fa-comment aria-hidden="true"">' + data.data[x].comments_count + '</i></span></a><span><i class="icos fa fa-heart aria-hidden="true"">' + data.data[x].likes_count + '</i></span></div></div>></div></li>');
                }            
        }, 
    error: function (data) {
        console.log('Tenemos inconvenientes con la Api de Dribbble');
    }
});

})

function mostrar() {
    document.getElementById('oculto').style.display = 'block';
}

$(".skills-ilu").attr("href", "https://dribbble.com/designers?skills=illustration");



