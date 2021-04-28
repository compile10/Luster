export const typeDefs = `
  type Query { feed: [post], spotList: [spot] }
  type post { 
    title: String,
    postId: Int,
    username: String,
    avatar: String,
    thumbnail: String,
    skatespot: String,
    views: Int,
    likes: Int,
  } 
  type spot {
    name: String,
    spotID: Int,
    desc: String,
    cordinates: coordinate,
    image: String,
    likes: Int,
    hostile: Boolean,
  }
  type coordinate {
    latitude: Float,
    longitude: Float,
  }
`;