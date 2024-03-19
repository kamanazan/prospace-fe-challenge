# Prospace Frontend Challenge

---

## Setup

This project contains backend and frontend.

The Node runtime is using `Node v21`. There is `.nvmrc` provided, if you use `nvm` just run `nvm use`

To install just invoke `npm install` on both root folder and `frontend` folder.

Before running the app copy `.env.template` as `.env` and fill the mongoDB connection string.

To run backend just invoke `npm run start` from the root project and for frontend just go to `frontend` folder and invoke `npm run dev`.

For development the default backend port is `3001`. If you wish to change it, do it also on `frontend/vite.config.js`. There is proxy for development purpose and all you need  todo is change `target` for `/api` endpoint.

To build, invoke `npm run build` from the root project. When you start backend, now the frontend app will appear


## Implementation

For the react app I am using `Vite` and `Redux Toolkit` for the state management. It has multi language feature with available languages `English`(default) and `Indonesia`

The data structure I use are

```
Company {
    name: String,
    address: String,
    revenue: Number,
    phoneCityCode: String,
    phoneNumber: String
}
```

```
Office {
    name: String,
    lat: Number,
    lon: Number,
    startDate: String,
    companyId: String
}
```

The validation of these fields are done in frontend using `react-hook-form`. I put the necessary input pattern in the field to match the requested type.

For example revenue is positive floor number so I put `/^(?!-)[1-9][0-9]*$/` so user can't give negative number and can not give number that start with 0.

For data storage I use MongoDB
