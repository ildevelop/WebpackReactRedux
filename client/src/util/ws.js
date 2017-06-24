/**
 * Created by Ilya Radu on 21/06/2017.
 */
((wsUrl) => {
    let ws;
    ws = new WebSocket(wsUrl);
    console.log('wsUrl', wsUrl);
    ws.onopen = () => {
        console.log("WS OPEN");
    };
    ws.onmessage = (message) => {
        console.log("message",message);
        console.log("data",message.data);

    };
    return ws
})('ws://localhost:3000');