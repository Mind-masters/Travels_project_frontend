import io from 'socket.io-client';

const socket = io('https://mind-master-backend-production.up.railway.app/', {transports: ['websocket', 'polling', 'flashsocket']});

export default socket;