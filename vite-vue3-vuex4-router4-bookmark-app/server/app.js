require('dotenv').config()
const socketio = require("socket.io")
const express = require("express")
const http = require("http")
const app = express()
const PORT = process.env.PORT || 2000

const server = http.createServer(app)


const io = socketio(server, {
    cors: {
        origin: "*",
        methods: ['GET', 'POST', 'OPTIONS']
    }
})
/* TODO Server'in Clien'i dinlemek için oluşturulması gereken ana yapı
    server.listen(PORT, () => {io.on("connection", clinet => { console.log(clinet) }) */
server.listen(PORT, () => {
    io.on("connection", clinet => {
        /**
         * ---------------------------------------------------------------------------------------------------------
         * TODO
         *  Yeni bir Browser Client olarak Connect Olduğunda verileri server'da Disconnet olaana kadar tutulur.
         *
         * ---------------------------------------------------------------------------------------------------------
         */
        console.log("Connect =>", clinet)
        /**
         * ---------------------------------------------------------------------------------------------------------
         * TODO
         *  Client Event'ını dinlemek için gerekli olan yapı.
         *  "client.on("CLIENT_EVENT",(data) =>{console.log(data)})"
         * ---------------------------------------------------------------------------------------------------------
         * TODO
         *  "NEW_BOOKMARK_EVENT"  Client'den gelen Event ve Data
         *
         * ---------------------------------------------------------------------------------------------------------
         */
        clinet.on("NEW_BOOKMARK_EVENT", (data) => {
            console.log(data)
            /**
             * ---------------------------------------------------------------------------------------------------------
             * TODO*
             *  Tüm Client'lere Yanıt
             *  "clinet.emit("NEW_BOOKMARK_ADDED", data)"
             *  -
             *  ---------------------------------------------------------------------------------------------------------
             *  -
             *  Event Gönderilen Client Hariç Tüm Client'lere Yanıt
             *  "clinet.broadcast.emit("NEW_BOOKMARK_ADDED", data)"
             *  -
             *  Userdan gelen data ekleme bildimini tüm açık browserlere bildirir ve browserlerin güncellennmesini sağlar
             *
             * ---------------------------------------------------------------------------------------------------------
             */
            clinet.broadcast.emit("NEW_BOOKMARK_ADDED", data)
        })

    })
})