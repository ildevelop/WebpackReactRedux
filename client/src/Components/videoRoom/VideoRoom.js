/**
 * Created by Ilya Radu on 03/07/2017.
 */
import React from 'react'
import './VideoRoom.scss'

export class VideoRoom extends React.Component {
    constructor() {
        super()
    }



    render() {
        var connection = new RTCMultiConnection();

// this line is VERY_important
        connection.socketURL = 'https://rtcmulticonnection.herokuapp.com:443/';

// all below lines are optional; however recommended.

        connection.session = {
            audio: true,
            video: true
        };

        connection.sdpConstraints.mandatory = {
            OfferToReceiveAudio: true,
            OfferToReceiveVideo: true
        };

        connection.onstream = function(event) {
            document.body.appendChild( event.mediaElement );
        };

        var predefinedRoomId = prompt('Please enter room-id', 'xyzxyzxyz');

        connection.openOrJoin(predefinedRoomId);

        return (
            <div><h2>Video room</h2>

                <button id="btn-open-room" onClick = {() => {   this.disabled =true;
                    connection.openOrJoin('predefied-roomind');} }>
                    Open Room
                </button>
                <hr/>

            </div>

        )

    }
}
export default VideoRoom