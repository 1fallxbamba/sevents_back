const client = require('../config/database').client;

const fetchAllEvents = (req, res) => {
    client.query('SELECT * FROM events WHERE places > 5', (err, result) => {
        if(err) {
            res.status(400).json({resultCode: 'ERR', message: err.message});
        } else {
            res.status(200).json(result.rows);
        }
    })
};

const fetchUsersTickets = (req, res) => {
    client.query(
        'SELECT tk.code, tk.owner, ev.title, ev.startingdate, ev.endingdate FROM tickets tk, events ev WHERE (owner->>\'phone\')::integer = $1 and tk.event = ev.code', [
            parseInt(req.params.phone)] , (err, result) => {
        if(err) {
            res.status(400).json({resultCode: 'ERR', message: err.message});
        } else {
            res.status(200).json(result.rows);
        }
    })
};

const bookPlace = (req, res) => {

    const bookingData = req.body;

    client.query(
        'INSERT INTO tickets(code, event, owner) VALUES($1, $2, $3)',
        [bookingData.ticketCode, bookingData.event, bookingData.owner], 
        (err, result) => {
            if(err) {
                res.status(400).json({resultCode: 'ERR', message: err.message});
            } else {
                res.status(200).json({resultCode: 'PSB', message: 'Place successfully booked'});
            }
        });


};

module.exports = {fetchAllEvents, bookPlace, fetchUsersTickets};