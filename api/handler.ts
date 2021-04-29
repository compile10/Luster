import express = require('express');
const serverless = require('serverless-http');
const { DynamoDBClient, GetItemCommand } = require("@aws-sdk/client-dynamodb");

const { ApolloServer} = require('apollo-server-express');
import {makeExecutableSchema} from 'graphql-tools';
import * as faker from 'faker';

import {typeDefs} from './types';

function randomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

const VideoPostsTable = process.env.VIDEOPOSTS_TABLE;

// The resolvers
const resolvers = {
  Query: {
    feed: async () => {
      const client = new DynamoDBClient({ region: "us-west-1" });
      const command = new GetItemCommand({TableName: VideoPostsTable, Key: {postId: {'S': '41324'}, likes: {'N': '314'} } });
      try {
        const results = await client.send(command)
        console.log(results)
        return results.Item
      } catch (err) {
        console.error(err);
      }
    },
    spotList: () => {
      let spots = [];
      for (let i = 0; i < randomNumber(1, 10); i++) {
        let gps = faker.address.nearbyGPSCoordinate(
          ['37.471435', '-122.138243'],
          2,
        );
        spots.push({
          name: faker.address.streetName(),
          spotID: faker.datatype.number(),
          desc: faker.lorem.lines(2),
          cordinates: {latitude: gps[0], longitude: gps[1]},
          image: 'https://picsum.photos/600/500',
          likes: faker.datatype.number(),
          hostile: faker.datatype.boolean(),
        });
      }
      return spots;
    },
  },
};

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app = express();
const server = new ApolloServer({ 
  schema,   
  introspection: false,
  playground: false,
 });
server.applyMiddleware({ app });

module.exports.handler = serverless(app);
