import { io } from 'socket.io-client'

const socket = io('https://prueba2.castillodetalentos.edu.pe/hackathon-comercio', {  //cambiar url si es necesario
    path: "/api/socket/connect"
});

export const trakInit = (id) => {
    socket.emit("track:init", id);
}

export const trackOnline = (coord) => {
    socket.emit("track:online", coord)
}

export const trackOffline = (id) => {
    socket.emit("track:offline", id)
}