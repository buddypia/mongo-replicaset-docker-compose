rs.initiate({
  _id: 'replset',
  version: 1,
  members: [
    {
      _id: 0,
      host: 'mongodb-primary:27017',
      priority: 100,
    },
    {
      _id: 1,
      host: 'mongodb-secondary1:27018',
    },
    {
      _id: 2,
      host: 'mongodb-secondary2:27019',
    },
    {
      _id: 3,
      host: 'mongodb-arbiter:27020',
      arbiterOnly: true,
    },
  ],
});
