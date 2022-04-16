const { AuthenticationError } = require("apollo-server-express");
const { User, DeathFact } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    // get current User
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v")
          .populate("deathFacts");

        return userData;
      }
      throw new AuthenticationError("You must be logged in, mortal!");
    },
    // get all users
    users: async () => {
      return User.find().select("-__v -password").populate("deathFacts");
    },
    // get User by username
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        .populate("deathFacts");
    },
    // get all deathfacts
    deathFacts: async (parent, { username }) => {
      const params = username ? { username } : {};

      return DeathFact.find(params).sort({ createdAt: -1 });
    },
    // get deathfact by id
    deathFact: async (parent, { _id }) => {
      return DeathFact.findById(_id);
    },
  },
  Mutation: {
    // add new User
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    // add a Deathfact
    addDeathFact: async (parent, args, context) => {
      if (context.user) {
        const deathFact = await DeathFact.create({
          ...args,
          username: context.user.username,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { deathFacts: deathFact._id } },
          { new: true }
        );

        return deathFact;
      }
      throw new AuthenticationError("You must be logged in, mortal!");
    },
    // add a Reaction
    addReaction: async (parent, { deathFactId, reactionBody }, context) => {
      if (context.user) {
        const updatedDeathFact = await DeathFact.findOneAndUpdate(
          { _id: deathFactId },
          {
            $push: {
              reactions: { reactionBody, username: context.user.username },
            },
          },
          { new: true, runValidators: true }
        );
        return updatedDeathFact;
      }
      throw new AuthenticationError("You must be logged in, mortal!");
    },
    // login authentication
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Invalid credentials");
      }

      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Invalid credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
