$(document).ready(function(){

    var data = [
        {
            src: 'img/img1.jpg',
            id: 0,
            status: true
        },
        {
            src: 'img/img2.jpg',
            id: 1,
            status: true
        },
        {
            src: 'img/img3.jpg',
            id: 2,
            status: true
        },
        {
            src: 'img/img4.jpg',
            id: 3,
            status: true
        },
        {
            src: 'img/img5.jpg',
            id: 4,
            status: true
        },
        {
            src: 'img/img6.jpg',
            id: 5,
            status: false
        },
        {
            src: 'img/img7.jpg',
            id: 6,
            status: false
        },
        {
            src: 'img/img8.jpg',
            id: 7,
            status: false
        },
        {
            src: 'img/img9.jpg',
            id: 8,
            status: false
        },
        {
            src: 'img/img10.jpg',
            id: 9,
            status: false
        }
    ];

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function init () {
        var item = getRandomInt(0, 9);
        var position = getRandomInt(0, 5);
        var id = +$('.item')[position].getAttribute('id');

        if(data[item].status == false) {
            $('#'+id+' img').attr('src', data[item].src);
            $('#'+id+'').attr('id', data[item].id);
            
            data[item].status = true;
            data[id].status = false;
        } else {
            init();
        }
    }   

    setInterval(init, 500);   
});