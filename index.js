// const express = require('express');
// const http = require('http');
// const SocketServer = require('socket.io').Server;
import express from 'express';
import http from 'http';
import { Server as SocketServer } from 'socket.io'

const app = express();
app.use( express.static('public') );

const server = http.createServer(app);
const io = new SocketServer(server);


server.listen(8080, () => {
    console.log('server in port 8080')
})