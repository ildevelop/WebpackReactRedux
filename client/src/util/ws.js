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
    ws.onmessage = (data) => {
        console.log(data);
    };
    return ws
})('ws://localhost:3000');