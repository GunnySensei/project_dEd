const db = require('./connection');
const {
    User, 
    DeathFact, 
    Donation, 
    Category, 
} = require('../models');

db.once('open', async () => {
    const categories = await Category.insertMany ([
        { name: 'Broke Ass Hoes' },
        { name: 'Blue Collar Ballers' },
        { name: 'Charity' },
        { name: 'Alright Elon' }
    ]);

    console.log('Categories ready for launch homie!');

    const donations = await Donation.insertMany([
        {
            name: 'One Dollar Holla',
            description: 'You can donate one dollar and make me hollar with this 🙃!',
            image: 'placeholder',
            price: 1.00,
            category: categories[0]._id
        },
        {
            name: 'Five Dollar Baller',
            description: 'You can donate a nickel on this big daddy 😉!',
            image: 'placeholder',
            price: 5.00,
            category: categories[1]._id
        },
        {
            name: 'Saint Judes Childrens Hospital',
            description: 'You can donate to St. Judes with this 😍!',
            image: 'placeholder',
            price: 5.00,
            category: categories[2]._id
        },
        {
            name: 'Broke ass Programmers!',
            description: 'We are broke and aint scared to spend your money 😂!',
            image: 'placeholder',
            price: 4.00,
            category: categories[2]._id
        },
        {
            name: 'Getting Musky in here!',
            description: 'Elon you can definitely by our platform with this 🤩!',
            image: 'placeholder',
            price: 10000000.00,
            category: categories[3]._id
        }
    ]);

    console.log('Donations have been implemented homefry!');

    const deathFacts = await DeathFact.insertMany([
        {
            deathText: 'Everbody dies even you 🤨!',
            username: 'DickTater'
        },
        {
            deathText: 'Death is an essential cog on the wheel of time ⏰!',
            username: 'Biggy'
        },
        {
            deathText: 'Not only do clowns kill, but they die as well 🤡!',
            username: 'smally'
        }

    ]);

    console.log('Get them facts straight cat daddy!');

    const users = await User.insertMany([
        // {
        //     username: "Biggy",
        //     sex: "male",
        //     email: "biggy@big.com",
        //     password: "12345",
        //     birthday: "09/12/1988",
        //     deathFacts: deathFacts[1]._id
        // },
        // {
        //     username: 'smally',
        //     sex: 'female',
        //     email: 'smally@small.com',
        //     password: '12345',
        //     birthday: '08/22/1997',
        //     deathFacts: deathFacts[2]._id
        // },
        // {
        //     username: 'DickTater',
        //     sex: 'female',
        //     email: 'dick@tater.com',
        //     password: '12345',
        //     birthday: '09/15/2001',
        //     deathFacts: deathFacts[0]._id
        // },
        {
            username: "diccy",
            sex: "female",
            email: "diccy@big.com",
            password: "12345",
            birthday: "1950-12-22",
            deathFacts: deathFacts[1]._id
        }
        
    ]);

    console.log('Users engage!');

    process.exit();
});