const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const dateFormat = require('../utils/dateFormat');

const deathSchema = new Schema(
    {
        deathText: {
            type: String,
            required: 'Please tell us your death fact!',
            minlength: 1,
            maxlength: 300
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const DeathFact = model('DeathFact', deathSchema);

module.exports = DeathFact;