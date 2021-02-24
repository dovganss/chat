// const WebSocket = require('ws');
const ws = new WebSocket('ws://localhost:5500');

const btn = document.getElementById('loginButton');

btn.addEventListener('click', function(event){
    event.preventDefault();
    
    const login = document.getElementById('name').value;
    const request = {
        type: 'login',
        payload:{
            name: login
        }
    }
    ws.send(JSON.stringify(request));
});

ws.onmessage = function (message){
    console.log(message)

    const response = JSON.parse(message.data);

    switch (response.type){
        case 'login':
            if (response.payload.status === 200){
                window.href = '/chat.html';
            }else{
                console.error('Error');
            }
            // console.log(response.payload);
            break;
    }


}




ws.onopen = function() {
    console.log('Client Connected');
}