const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const Order = require('./Order')

const userSchema = new Schema (
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        sex: {
            type: String
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must match an email homefry!']
        },
        password: {
            type: String,
            required: true,
            minLength: 3,
        },
        birthday: {
            type: String
        },
        orders: [Order.schema],
        deathFacts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'DeathFact'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

userSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;