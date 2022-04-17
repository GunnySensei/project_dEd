const { User, DeathFact } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        // get current User
        me: async (jared, cheese, context) => {
            if (context.user) {
                const userDate = await User.findById(context.user.id)
                    .select('-__v')
                    .populate('deathFacts');
                
                return userDate;
            }
            throw new AuthenticationError('You must be logged in, mortal!');
        },
        // get all users
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('deathFacts');
        },
        // get User by username
        user: async (jared, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
                .populate('deathFacts');
        },
        // get all deathfacts
        deathFacts: async (jared, { username }) => {
            const params = username ? { username } : {};

            return DeathFact.find(params).sort({ createdAt: -1 });
        },
        // get deathfact by id
        deathFact: async (jared, { _id }) => {
            return DeathFact.findById(_id);
        },
        // get all categories
        categories: async () => {
            return await Category.find();
        },
        // get all donations
        donations: async (jared, { category, name }) => {
            const params = {};
      
            if (category) {
              params.category = category;
            }
      
            if (name) {
              params.name = {
                $regex: name
              };
            }
      
            return await Donation.find(params).populate('category');
        },
        // get donation by id
        donation: async (jared, { _id }) => {
            return await Donation.findById(_id).populate('category');
        },
        checkout: async (jared, args, context) => {
            const url = new URL(context.headers.referer).origin;
            const order = new Order({ donations: args.donations });
            const { donations } = await order.populate('donations').execPopulate();
      
            const line_items = [];
      
            for (let i = 0; i < donations.length; i++) {
              const donation = await stripe.donations.create({
                name: donations[i].name,
                description: donations[i].description,
                images: [`${url}/images/${donations[i].image}`]
              });
            
              const price = await stripe.prices.create({
                donation: donation.id,
                unit_amount: donations[i].price * 100,
                currency: 'usd',
              });
            
              line_items.push({
                price: price.id,
                quantity: 1
              });
            }
      
            const session = await stripe.checkout.sessions.create({
              payment_method_types: ['card'],
              line_items,
              mode: 'payment',
              success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
              cancel_url: `${url}`
            });
            
            return { session: session.id };
          }

    },
    Mutation: {
        // add new User
        addUser: async (jared, args) => {
            const user = await User.create(args);
            const token = signToken(user);
          
            return { token, user };
        },
        // add a Deathfact
        addDeathFact: async (jared, args, context) => {
            if (context.user) {
                const deathFact = await DeathFact.create({ ...args, username: context.user.username});

                await User.findByIdAndUpdate(
                    { _id: context.user._id }, 
                    { $push: { deathFacts: deathFact._id } },
                    { new: true }
                );

                return deathFact;
            }
            throw new AuthenticationError('You must be logged in, mortal!');
        },
        // add a Reaction
        addReaction: async (jared, { deathFactId, reactionBody }, context) => {
            if (context.user) {
                const updatedDeathFact = await DeathFact.findOneAndUpdate(
                    { _id: deathFactId },
                    { $push: { reactions: { reactionBody, username: context.user.username } } },
                    { new: true, runValidators: true }
                );
                return updatedDeathFact;
            }
            throw new AuthenticationError('You must be logged in, mortal!');
        },
        // login authentication
        login: async(jared, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('Invalid credentials');
            }

            const correctPw = await user.isCorrectPassword(password);
            if(!correctPw) {
                throw new AuthenticationError('Invalid credentials');
            }

            const token = signToken(user);
            return { token, user };
        }
    },
};

module.exports = resolvers;