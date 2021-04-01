import uuid from 'uuid';
import { jsonToGraphQLQuery } from 'json-to-graphql-query';

export class Tracking {
  sessionUUID = uuid.v4();

  queue = [];

  hotQueue = [];

  queueWaitSeconds = 10; // seconds

  fake = false;

  graphqlEndpoint = 'https://star-grackle-36.hasura.app/v1/graphql';

  queueWorkerTimer = setInterval(() => {
    if (this.queue.length === 0) {
      return;
    }
    const parentThis = this;
    this.hotQueue = JSON.parse(JSON.stringify(this.queue)); // clone
    this.queue = [];
    this.sendData(this.hotQueue).then((_) => {
      console.info('Success sending, emptying queue');
      parentThis.hotQueue = [];
    });
  }, this.queueWaitSeconds * 1000);

  sendData(data) {
    function makeGraphQLMutationQuery(data) {
      return JSON.stringify({
        query: jsonToGraphQLQuery({

          mutation: {
            insert_stats: {
              __args: {
                objects: data,
              },
              affected_rows: true,
            },

          },

        }, {
          pretty: true,
        }),
        variables: null,
      });
    }
    if (this.fake) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.info(` pretending to send for session UUID: ${this.sessionUUID}`);
          console.info(makeGraphQLMutationQuery(data));
          resolve(undefined);
        }, 50);
      });
    }
    return fetch(this.graphqlEndpoint, {
      method: 'POST',
      headers: {
        Accept: '*/*',
        'content-type': 'application/json',
      },
      body: makeGraphQLMutationQuery(data),
    });
  }

  capture(providedData) {
    const timestamp = Math.floor(Date.now() / 1000);
    const defaultData = {
      session: this.sessionUUID,
      date: timestamp,
      data: null, // data permits arbitrary JSON,
      numericKey: null, // but could be a string e.g: "XRP"
      numericValue: null, // but could be a numeric value e.g: 123.456789
      type: null, // but could be a string,
      analyticsRecipientID: null, // should be set to allow a recipient to access the analytics data
      analyticsItemUUID: null, // can be set to query unique items (e.g: a music track UUID)
    };
    this.queue.push({ ...defaultData, ...providedData });
  }
}
