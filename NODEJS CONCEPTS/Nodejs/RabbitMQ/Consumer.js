var amqp = require('amqplib/callback_api');

amqp.connect('amqps://vxlgdutq:HajVzgZX6zfUyT1_C23C3GHShF0DhQ06@duck.lmq.cloudamqp.com/vxlgdutq', function (error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function (error1, channel) {
        if (error1) {
            throw error1;
        }
        var queue = 'hello';
        msg = "Hello"
        channel.assertQueue(queue, {
            durable: false
        });

        console.log(" [*] Waiting for messages in %s.", queue);

        channel.consume(queue, function (msg) {
            console.log(" [x] Received %s", msg.content.toString());
        }, {
            noAck: true
        });
    });
});
