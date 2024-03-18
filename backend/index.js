const express = require("express");
const path = require('path');
require('dotenv').config()
const mongoose = require('mongoose');
const ObjectId  = require('mongoose').Types.ObjectId;

const Company = require('./models/company')
const Office = require('./models/office')

const PORT = process.env.PORT || 3001;

const app = express();
mongoose.set('strictQuery', false);
const mongoURI = process.env.MONGO_URI
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
    const newCompany = await company.save();
    res.status(201).json(newCompany);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
})

app.post('/api/company/delete/:id', async (req, res) => {
  try {
    await Office.deleteMany({companyId: new ObjectId(req.params.id) })
    await Company.findByIdAndDelete(req.params.id);
    res.status(200)
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
})

app.post('/api/office', async (req, res) => {
  const office = new Office(req.body);
  try {
    const newOffice = await office.save();
    res.status(201).json(newOffice);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
})

app.get('/api/officelist/:company_id', async (req, res) => {
  try {
    const officeIds = await Office.find({ companyId: new ObjectId(req.params.company_id) });
    res.status(200).json(officeIds);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
})

app.delete('/api/office/:id', async (req, res) => {
  try {
    await Office.findByIdAndDelete(req.params.id);
    res.status(200)
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
