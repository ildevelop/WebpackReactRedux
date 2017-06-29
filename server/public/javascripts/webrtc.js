

function publish() {

    pubnub = new PubNub({
        publishKey : 'demo',
        subscribeKey : 'demo'
    })

    function publishSampleMessage() {
        console.log("Since we're publishing on subscribe connectEvent, we're sure we'll receive the following publish.");
        var publishConfig = {
            channel : "hello_world",
            message : "Hello from PubNub Docs!"
        }
        pubnub.publish(publishConfig, function(status, response) {
            console.log(status, response);
        })
    }

    pubnub.addListener({
        status: function(statusEvent) {
            if (statusEvent.category === "PNConnectedCategory") {
                publishSampleMessage();
            }
        },
        message: function(message) {
            console.log("New Message!!", message);
        },
        presence: function(presenceEvent) {
            // handle presence
        }
    })
    console.log("Subscribing..");
    pubnub.subscribe({
        channels: ['hello_world']
    });
};


var pubnub = new PubNub({
    subscribeKey: "sub-c-7cccccf4-5bfb-11e7-8043-02ee2ddab7fe",
    publishKey: "pub-c-8e14fe36-10b3-4e6a-a761-a0dfd63b2600",
    ssl: true
})
pubnub.addListener({

    message: function(m) {
        // handle message
        var channelName = m.channel; // The channel for which the message belongs
        var channelGroup = m.subscription; // The channel group or wildcard subscription match (if exists)
        var pubTT = m.timetoken; // Publish timetoken
        var msg = m.message; // The Payload
    },
    presence: function(p) {
        // handle presence
        var action = p.action; // Can be join, leave, state-change or timeout
        var channelName = p.channel; // The channel for which the message belongs
        var occupancy = p.occupancy; // No. of users connected with the channel
        var state = p.state; // User State
        var channelGroup = p.subscription; //  The channel group or wildcard subscription match (if exists)
        var presenceEventTime = p.timestamp; // Presence event timetoken
        var uuid = p.uuid; // UUIDs of users who are connected with the channel
    },
    status: function(s) {
        // handle status
        var category = s.category; //PNConnectedCategory
        var operation = s.operation; //PNSubscribeOperation
        var affectedChannels = s.affectedChannels; //The channels affected in the operation, of type array.
        var subscribedChannels = s.subscribedChannels; //All the current subscribed channels, of type array.
        var affectedChannelGroups = s.affectedChannelGroups; //The channel groups affected in the operation, of type array.
        var lastTimetoken = s.lastTimetoken; //The last timetoken used in the subscribe request, of type long.
        var currentTimetoken = s.currentTimetoken; //The current timetoken fetched in the subscribe response, which is going to be used in the next request, of type long.
    }
})
var existingListener = {
    message: function() {
    }
}

pubnub.removeListener(existingListener)
// assuming an intialized PubNub instance already exists
pubnub.time(function(status, response) {
    if (status.error) {
        // handle error if something went wrong based on the status object
    } else {
        console.log(response.timetoken)
    }
})
pubnub.subscribe({
    channels: ['my_channel'],
});

pubnub.publish(
    {
        message: {
            such: 'object'
        },
        channel: 'ch1',
        sendByPost: false, // true to send via post
        storeInHistory: false, //override default storage options
        meta: {
            "cool": "meta"
        } // publish extra meta with the request
    },
    function (status, response) {
        // handle status, response
    }
);

pubnub.hereNow(
    {
        channels: ["ch1"],
        channelGroups : ["cg1"],
        includeUUIDs: true,
        includeState: true
    },
    function (status, response) {
        // handle status, response
    }
);

pubnub.subscribe({
    channels: ['my_channel'],
    withPresence: true
});
pubnub.unsubscribe({
    channels: ['my_channel']
})