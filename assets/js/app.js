/*  //CODIGO DEL LOGIN DE FIREBASE, ESTÀ ESCONDIDO POR QUE AL MOMENTO DE APRETAR PARA LOGIAR, LA PAGINA REBOTA
$(document).ready(() => {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBXVqOFZV-tSTr5uJXedTmWlDu8Pd9GQCc",
        authDomain: "dribbbleapispa-9bf39.firebaseapp.com",
        databaseURL: "https://dribbbleapispa-9bf39.firebaseio.com",
        projectId: "dribbbleapispa-9bf39",
        storageBucket: "dribbbleapispa-9bf39.appspot.com",
        messagingSenderId: "767515162801"
    };
    firebase.initializeApp(config);
    var provider = new firebase.auth.GoogleAuthProvider();
    function signIn() {
        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log(user.displayName);
            $('.user_name').append('<h3> Hi ' + user.displayName + '!</h3>');
            $('.botonera').removeClass('hidden');
            $('.datos').removeClass('hidden');
            $('.pieDePagina').removeClass('hidden');

            // ...
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    }
})
*/


//en esta variable, y gracias a .vla, rescatamos y almacenamos el parametro que ingresamos en el input que se encuentra en el nav
let dribbble = $('#search').val();

//en esta variable almacenamos el token que nos autoriza a acceder a la data de dribbble
const token = '1c73ffb7859f2c1c37450789dce2369af5caa9e18c3df1fa30485cfad79081d8';
$('#button-search').on('click',function(){
    let dribbble = $('#search').val();
    //para limpiar el contenedor con la información del usuario
    $('.info').empty();
    //para limpiar el contenedor con las imágenes
    $('.cont-imagenes').empty();
$.ajax({
    //a traves de esta url ingresamos a la información del perfil del usuario
    url: 'https://api.dribbble.com/v1/users/'+ dribbble +'/?access_token=' + token,
    dataType: 'jsonp',
    type: 'GET',
    data: { access_token: token},
    // si tiene exito la solicitud pediremos que haga lo siguiente :
    success: function (data) {
        console.log(data);
        $('.info').append(`<div class="row"><h3><span>Nombre  </span>${data.data.name} </h3><h6><span>Nickname</span>  ${data.data.username} </h6></div>`)
        //
        $('#avatar').attr('src', data.data.avatar_url);
    },
    //en caso de error se mostrará este mensaje
    error: function (data) {
        console.log('Tenemos inconvenientes con la Api de Dribbble');
    }
});
 
$.ajax({
    //a traves de esta url ingresamos a la información de los trabajos del usuario
     url: 'https://api.dribbble.com/v1/users/' + dribbble + '/shots?access_token=' + token,
    dataType: 'jsonp',
    type: 'GET',
    data: { access_token: token},
    // si tiene exito la solicitud pediremos que haga lo siguiente 
    success: function (data) {
            console.log(data);
            for (x in data.data) {
                $('.cont-imagenes').append('<li><div class="row"><a class="col-lg-12" href="' + data.data[x].html_url + '"><img src="' + data.data[x].images.normal + '"></a><p>' + data.data[x].title +'</p><div class="row"><span class="col-lg-12"><i class="icos fas fa fa-eye aria-hidden="true"">' + data.data[x].views_count + '</i></span></a><span><i class="icos fa fa-comment aria-hidden="true"">' + data.data[x].comments_count + '</i></span></a><span><i class="icos fa fa-heart aria-hidden="true"">' + data.data[x].likes_count + '</i></span></div></div></li>');
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

