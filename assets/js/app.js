

//Get Username
const dribbble = 'RypeArts';
//Amoung of shots to display
 limit = 18;
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
                $('ul').append('<li><img src="' + data.data[x].images.normal +  '"></li>');
                $('div').append('<p>' + data.data[x].html_url + '></p>');
                $('div2').append('<p>' + data.data[x].name + '></p>');
                $('div3').append('<p>' + data.data[x].username + '></p>');
                // $('ul').append("<li class='port'>" + "<img class='img-responsive' src='" + data.data[x].images.normal + "'><div class='overlay'><div class='text'>" + title[0] + "</div></div><div class='icon-port hidden-xs hidden-sm'>" +
                //     "<span class='view-icon'>" +
                //     "<i class='fa fa-eye' aria-hidden='true'></i>" + " " +
                //     views_count +
                //     "</span>" +
                //     "<span class='coment-icon'>" +
                //     "<i class='fa fa-comment' aria-hidden='true'></i>" + " " +
                //     comments_count +
                //     "</span>" +
                //     "<span class='like-icon'>" +
                //     "<i class='fa fa-heart' aria-hidden='true'></i>" + " " +
                //     likes_count +
                //     "</span></div></li>");




            }
        
    },
    error: function (data) {
        console.log(data);
    }
});
