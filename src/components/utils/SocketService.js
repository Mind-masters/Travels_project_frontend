import io from 'socket.io-client';

// const socket = io('http://localhost:5000/', {transports: ['websocket', 'polling', 'flashsocket']});
const socket = io('https://mind-master-backend-production.up.railway.app/', {transports: ['websocket', 'polling', 'flashsocket']});

export default socket;