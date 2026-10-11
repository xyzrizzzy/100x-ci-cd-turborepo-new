import { WebSocketServer } from "ws";
import prisma from "@repo/prisma/client";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", async (ws) => {
    await prisma.user.create({
        data: {
            name: Math.random().toString(),
            email: Math.random().toString(),
            password: Math.random().toString(),
        }
    })
    ws.send("Hello! there");
//   ws.on("message", (message) => {
//     console.log("received: %s", message);
//   });
});

