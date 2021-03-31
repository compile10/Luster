import express from 'express';

import bodyParser from 'body-parser';
import {graphqlExpress, graphiqlExpress} from 'apollo-server-express';
import {makeExecutableSchema} from 'graphql-tools';
import * as faker from 'faker';

import {typeDefs} from './types';

function randomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}
// The resolvers
const resolvers = {
  Query: {
    postList: () => {
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

// Initialize the app
const app = express();

// The GraphQL endpoint
app.use('/api', bodyParser.json(), graphqlExpress({schema}));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({endpointURL: '/api'}));

// Start the server
app.listen(3000, () => {
  console.log('Go to http://localhost:3000/graphiql to run queries!');
});
