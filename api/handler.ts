import express = require('express');
const serverless = require('serverless-http');
const AWS = require("aws-sdk");

const { ApolloServer} = require('apollo-server-express');
import {makeExecutableSchema} from 'graphql-tools';
import * as faker from 'faker';

import {typeDefs} from './types';

function randomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

const dynamoDbClient = new AWS.DynamoDB.DocumentClient();
const VideoPostsTable = process.env.VIDEOPOSTS_TABLE;

// The resolvers
const resolvers = {
  Query: {
    feed: () => {
      let posts = [];
      for (let i = 0; i < randomNumber(1, 10); i++) {
        posts.push({
          title: faker.lorem.words(),
          postId: faker.datatype.number(),
          username: faker.internet.userName(),
          avatar: 'https://i.pravatar.cc/300',
          thumbnail: 'faker.image.city()',
          skatespot: faker.lorem.words(),
          views: faker.datatype.number(),
          likes: faker.datatype.number(),
        });
      }
      return posts;
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
