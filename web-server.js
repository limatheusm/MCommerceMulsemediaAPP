const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(express.json());

// Routes
app.post('/api/payment', (req, res) => {
	if (!req.body.card) {
		return res.json({ result: null, error: 'Card number empty' });
	}
	const { card } = req.body;

	if (card.length != 12) {
		return res.json({ result: -1, error: null });
	}

	return res.json({ result: card[11] === '0' ? 0 : 1, error: null });
});

app.use(express.static(path.join(__dirname, './public')));
app.listen(port, () => console.log(`The server is running on http://localhost:${port}`));
