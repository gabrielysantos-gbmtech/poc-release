const express = require('express');

const app = express();
const router = express.Router();
const port = 3000;

// Middleware
app.use(express.json());

// Helper para respostas simples
const simpleResponse = (payload) => (req, res) =>
  res.status(200).json(payload);

// Rotas GET
router.get('/greeting', simpleResponse({ response: 'Hello, World!' }));
router.get('/health', simpleResponse({ response: 'Service is healthy' }));
router.get('/version', simpleResponse({ response: 'Backend v1.0.0' }));
router.get('/status', simpleResponse({ status: 'Running', response: 'Single File API' }));
router.get('/welcome', simpleResponse({ response: 'Welcome to the API' }));
router.get('/enterprise', simpleResponse({ response: 'GBM by NSTECH' }));
router.get('/user', simpleResponse({ response: 'Gabriely' }));
router.get('/team', simpleResponse({ response: 'DevOps' }));
router.get('/country', simpleResponse({ response: 'Brasil' }));

router.post('/data', (req, res) => {
  res.status(201).json({
    response: 'Data received successfully',
    data: req.body,
  });
});

app.use('/api', router);

app.listen(port, () => {
  console.log(`API server listening at http://localhost:${port}`);
});
