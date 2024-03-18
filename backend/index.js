const express = require("express");
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, '../frontend/dist')));

app.get("/api/company", (req, res) => {
  res.json({ data: [
      {
        "id": 1,
        "name": "corteva1",
        "address": "address1",
        "revenue": "9898989",
        "phoneCityCode": "98",
        "phoneNumber": "7987987"
      },
      {
        "id": 2,
        "name": "corteva2",
        "address": "address1",
        "revenue": "9898989",
        "phoneCityCode": "98",
        "phoneNumber": "7987987"
      },
      {
        "id": 3,
        "name": "corteva3",
        "address": "address1",
        "revenue": "9898989",
        "phoneCityCode": "98",
        "phoneNumber": "7987987"
      },
      {
        "id": 4,
        "name": "corteva4",
        "address": "address1",
        "revenue": "9898989",
        "phoneCityCode": "98",
        "phoneNumber": "7987987"
      },
      {
        "id": 5,
        "name": "corteva5",
        "address": "address1",
        "revenue": "9898989",
        "phoneCityCode": "98",
        "phoneNumber": "7987987"
      },
      {
        "id": 6,
        "name": "corteva6",
        "address": "address1",
        "revenue": "9898989",
        "phoneCityCode": "98",
        "phoneNumber": "7987987"
      },
      {
        "id": 7,
        "name": "corteva7",
        "address": "address1",
        "revenue": "9898989",
        "phoneCityCode": "98",
        "phoneNumber": "7987987"
      }
    ] });
});

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
