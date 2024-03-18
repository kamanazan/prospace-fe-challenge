const express = require("express");
const path = require('path');
const mongoose = require('mongoose');

const Company = require('./models/company')
const {MONGO_URI} = require("./config");

const PORT = process.env.PORT || 3001;

const app = express();
mongoose.set('strictQuery', false);
const mongoURI = MONGO_URI
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoURI);
}
app.use(express.json())
app.use(express.static(path.resolve(__dirname, '../frontend/dist')));

app.get('/api/company', async (req, res) => {
  try {
    const companyIds = await Company.find();
    res.json(companyIds);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/api/company', async (req, res) => {
  const company = new Company(req.body);
  try {
    console.log({create: company})
    const newCompany = await company.save();
    res.status(201).json(newCompany);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
})

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
