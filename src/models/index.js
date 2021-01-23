// Test Data
// Primary user is Adam Adams

let users = {
  1: {
    id: "1",
    username: "Adam Adams",
    organization: "Mycelium Networks Sdn. Bhd.",
    imageURL: "/user1.jpg",
  },
  2: {
    id: "2",
    username: "Benjamin Bens",
    organization: "Vibranium Technologies Bhd.",
    imageURL: "/user2.jpg",
  },
  3: {
    id: "3",
    username: "Clara Clars",
    organization: "Anderson, Lee and Othman",
    imageURL: "/user3.jpg",
  },
  4: {
    id: "4",
    username: "Daniel Dans",
    organization: "Petaling Engineering Sdn. Bhd.",
    imageURL: "/user4.jpg",
  },
  5: {
    id: "5",
    username: "Edna Ends",
    organization: "Gold Horse Advertising Ltd.",
    imageURL: "/user5.jpg",
  },
  6: {
    id: "6",
    username: "Fiona Flors",
    organization: "Bicorn Venture Capital",
    imageURL: "/user6.jpg",
  },
  7: {
    id: "7",
    username: "George Georges",
    organization: "BlueLambda Analystics",
    imageURL: "/user7.jpg",
  },
  8: {
    id: "8",
    username: "Henry Hens",
    organization: "Orman-Henks Logistics Ltd.",
    imageURL: "/user8.jpg",
  },
};

let matches = {
  1: {
    matcherId: 1,
    matcheeId: 2,
    percentage: 20,
  },
  2: {
    matcherId: 1,
    matcheeId: 3,
    percentage: 12,
  },
  3: {
    matcherId: 1,
    matcheeId: 4,
    percentage: 32,
  },
  4: {
    matcherId: 1,
    matcheeId: 5,
    percentage: 55,
  },
  5: {
    matcherId: 1,
    matcheeId: 7,
    percentage: 65,
  },
  6: {
    matcherId: 1,
    matcheeId: 8,
    percentage: 63,
  },
};

let posts = {
  1: {
    id: "1",
    text: "Hello World",
    userId: "3",
    imageURL: "/post1",
    commentsCount: 3,
    likesCount: 5,
  },
  2: {
    id: "2",
    text: "Hey There",
    userId: "2",
    imageURL: "/post2",
    commentsCount: 2,
    likesCount: 3,
  },
  3: {
    id: "3",
    text: "What's up?",
    userId: "4",
    imageURL: null,
    commentsCount: 0,
    likesCount: 4,
  },
  4: {
    id: "4",
    text: "Great times!",
    userId: "7",
    imageURL: "/post4",
  },
  5: {
    id: "5",
    text: "Stay safe.",
    userId: "4",
    imageURL: null,
    commentsCount: 5,
    likesCount: 2,
  },
  6: {
    id: "6",
    text: "Be positive.",
    userId: "3",
    imageURL: "/post6",
    commentsCount: 6,
    likesCount: 2,
  },
};

export default {
  users,
  posts,
  matches,
};
