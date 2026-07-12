import app from './app';

const port = process.env.PORT || 3000;

app.listen(port, () => {
  // Do not log sensitive info
  console.log(`Server listening on port ${port}`);
});
