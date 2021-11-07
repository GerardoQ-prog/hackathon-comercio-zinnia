import { io } from 'socket.io-client'

const socket = io('https://prueba2.castillodetalentos.edu.pe', {  //cambiar url si es necesario
    path: "/hackathon-comercio/api/socket/connect"
});

export const trakInit = (id, message) => {
    socket.emit("track:init", { user: id, message });
}

export const trackOnline = (coord) => {
    socket.emit("track:online", coord)
}

export const trackOffline = (id) => {
    socket.emit("track:offline", id)
}