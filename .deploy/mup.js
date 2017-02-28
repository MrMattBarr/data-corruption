module.exports = {
    servers: {
        test: {
            host: '34.193.226.176',
            username: 'ubuntu',
            pem: '/Users/mbarr/.ssh/awsls.pem'
                // password:
                // or leave blank for authenticate from ssh-agent
        }
    },

    meteor: {
        name: 'data-corruption',
        path: '~/Code/data-corruption',
        servers: {
            test: {},
        },
        buildOptions: {
            serverOnly: true,
        },
        env: {
            PORT: 3000,
            ROOT_URL: 'http://34.193.226.176',
            MONGO_URL: 'mongodb://localhost/meteor',
        },

        // change to 'kadirahq/meteord' if your app is not using Meteor 1.4
        dockerImage: 'abernix/meteord:base',
        deployCheckWaitTime: 60,

        // Show progress bar while uploading bundle to server
        // You might need to disable it on CI servers
        enableUploadProgressBar: false
    },

    mongo: {
        oplog: true,
        port: 27017,
        version: '3.4.1',
        servers: {
            test: {},
        },
    },
};
