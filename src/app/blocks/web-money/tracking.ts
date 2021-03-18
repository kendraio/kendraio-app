import uuid from 'uuid'
import { jsonToGraphQLQuery } from 'json-to-graphql-query'

export class Tracking {
    sessionUUID = uuid.v4() // TODO: ensure this doesn't refresh between tracks
    queue = []
    hotQueue = []
    queueWaitSeconds = 2 // seconds
    fake = false


    sendData(data) {
        function makeGraphQLMutationQuery(data) {
            return JSON.stringify({
                "query": jsonToGraphQLQuery({

                    mutation: {
                        insert_stats: {
                            __args: {
                                objects: data
                            },
                            "affected_rows": true
                        }

                    }

                }, {
                    pretty: true
                }),
                "variables": null
            })
        }
        if (this.fake) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log(' pretending to send for session UUID: ' + this.sessionUUID)
                    console.log(makeGraphQLMutationQuery(data))
                    resolve(undefined)
                }, 50)
            })
        } else {
            return fetch("https://star-grackle-36.hasura.app/v1/graphql", {
                "method": "POST",
                "headers": {
                    "Accept": "*/*",
                    "content-type": "application/json"
                },
                "body": makeGraphQLMutationQuery(data)
            })
        }
    }

    queueWorkerTimer = setInterval(() => {

        if (this.queue.length === 0) {
            return
        }
        var parentThis = this
        this.hotQueue = JSON.parse(JSON.stringify(this.queue)) // clone
        this.queue = []
        this.sendData(this.hotQueue).then((_) => {
            console.log('Success sending, emptying queue')
            parentThis.hotQueue = []
        })

    }, this.queueWaitSeconds * 1000)

    capture(data, analyticsRecipientID, analyticsItemUUID) {
        const timestamp = Math.floor(Date.now() / 1000)
        this.queue.push({ "date": timestamp, "data": data, "session": this.sessionUUID, "analyticsRecipientID": analyticsRecipientID, "analyticsItemUUID": analyticsItemUUID })
        console.log('Queue length:' + this.queue.length)
    }



}
