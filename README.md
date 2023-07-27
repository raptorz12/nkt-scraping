
# NKT Scraping

### Scraper and web server to scrap current and get previous NKT and NKA data in Ni no Kuni: Cross Worlds game.


> *Ni no Kuni: Cross Worlds employs a gameplay-based blockchain system, giving players who enjoy Ni no Kuni: Cross Worlds the opportunity to play to earn tokens through gameplay.* - [Official Territe Token (NKT) & Asterite Token (NKA) Website](https://ninokuni-token.netmarble.com/en)

> *Territe Token (NKT) and Asterite Token (NKA) is a utility token existing on the MARBLEX platform. Users can exchange in-game currency from Netmarble Neo's Ni no Kuni: Cross Worlds for Territe tokens and freely distribute them outside the game (store, exchange, sell, purchase).* - [Official Territe Token (NKT) & Asterite Token (NKA) Website](https://ninokuni-token.netmarble.com/en/token/nkt)

> We can buy NKT & NKA and exchange it to get in-game Territe and Asterite token to buy or do something in the game. But, prices for NKT and NKA fluctuate, while the page only shows data for the **last 10 days**, so we don't know which day is the highest and lowest number of tokens, therefore I made this project to scrap the token data and save it in database so we can check all of the token data starting from now. So the players will get data on what day they have to exchange their NKT and NKA to in-game Territe and Asterite token and vice versa. 

## Tools

- Puppeteer
- ExpressJS
- MongoDB
- Mongoose

## Usage

```sh
1. npm install
2. npm run start
```

## API Reference

### Get all tokens

```http
GET /tokens
```

Response
```json
{
    "message": "Token datas found",
    "data": [
        {
            "_id": "64c21ab3d5e47d3e27c67dba",
            "date": "2023-07-27T06:00:00.000Z",
            "nkt": 580,
            "nktprice": "$0.0702",
            "nka": 648,
            "nkaprice": "$0.3875",
            "__v": 0
        },
        {
            "_id": "64c0dfe25e991ab8b8a6ff26",
            "date": "2023-07-26T06:00:00.000Z",
            "nkt": 566,
            "nktprice": "$0.0713",
            "nka": 630,
            "nkaprice": "$0.3983",
            "__v": 0
        },
        {
            "_id": "64be338c49c118e95f8a3927",
            "date": "2023-07-24T06:00:00.000Z",
            "nkt": 548,
            "nktprice": "$0.0760",
            "nka": 605,
            "nkaprice": "$0.4394",
            "__v": 0
        },
        {
            "_id": "64bb78ad09a0f475e747e091",
            "date": "2023-07-22T06:00:00.000Z",
            "nkt": 533,
            "nktprice": "$0.0779",
            "nka": 583,
            "nkaprice": "$0.4528",
            "__v": 0
        },
        {
            "_id": "64ba4540ec3154f31b034ccd",
            "date": "2023-07-21T06:00:00.000Z",
            "nkt": 527,
            "nktprice": "$0.0769",
            "nka": 576,
            "nkaprice": "$0.4432",
            "__v": 0
        }
    ]
}
```

### Get latest token data

```http
GET /token
```

Response
```json
{
    "message": "Token data found",
    "tokenData": {
        "_id": "64c21ab3d5e47d3e27c67dba",
        "date": "2023-07-27T06:00:00.000Z",
        "nkt": 580,
        "nktprice": "$0.0702",
        "nka": 648,
        "nkaprice": "$0.3875",
        "__v": 0
    }
}
```


### Get token data on certain date

```http
GET /token?date=
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `date` | `string` | Date (yyyy-mm-dd) |

#### Example

Request Query Params

```sh
date=2023-07-21
```

Response
```json
{
    "message": "Token data found",
    "tokenData": {
        "_id": "64ba4540ec3154f31b034ccd",
        "date": "2023-07-21T06:00:00.000Z",
        "nkt": 527,
        "nktprice": "$0.0769",
        "nka": 576,
        "nkaprice": "$0.4432",
        "__v": 0
    }
}
```