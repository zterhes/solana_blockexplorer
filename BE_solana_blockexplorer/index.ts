import express from 'express';

interface HealthCheckMessage{
    message: string;
}

const app = express();

app.get('/healthCheck', (req, res) => {
    let response: HealthCheckMessage = {
        message:"Server is running"
    }
    res.status(200)
    res.send(response);
})

app.listen(3001, () => {
    console.log('The application is listening on port 3001!');
})