module.exports = app => {
    app.get('/api/services', (req, res) => {
      res.json([
        { id: 1, name: 'Service 1' },
        { id: 2, name: 'Service 2' },
        { id: 3, name: 'Service 3' }
      ]);
    });
  };
  