<h1 align="center">✨ShopPop E-commerce Back-end Solution✨</h1>

<p>
<a href="https://opensource.org/licenses/MIT">
<img alt = "License MIT" src="https://img.shields.io/badge/license-MIT-success.svg" target="_blank" /></a>
</p>

## 📜 Description

> A MySQL back-end connection for viewing, editing, adding and deleting products. Built in functionality to sort by product id, tags, or category. Would pair great with a clean front-end design to showcase and filter products.

🔗 <a href = 'https://github.com/magfinn/shop-pop'>Link<a/>

## ✅ Installing / Getting Started

> ### 🧰 Requirements

> Express.js, Sequelize, MySQL2

To get started, clone the repo:
`git clone git@github.com:magfinn/shop-pop.git`

> > This project uses the Express MySQL2 and Sequelize packages to connect Express.js API to a MySQl database and the dotenv package to use environment variables to store sensitive data, including your MySQl username and password.

Using the node installer package, install packages needed.
`npm i mysql2 express sequelize dotenv nodemon`

Create a new .env file and enter your credentials:
DB_Name='ecommerce_db'
DB_User=[your username]
DB_PW=[your password]

Create your database:

Log in with the MySQl Shell command
`mysql -u [username] -p`

and enter your password.

Create your database:
`source db/schema.sql`

Confirm that you created the db:
`SHOW DATABASES`

Exit MySQL `quit`

In your root directory, seed your database with the command:
`npm run seed`

Start your server:
`npm start`

## MySQL Demo

## Program Demo

## 🚥 Tests

I tested this app with jest. To install jest, `npm i jest`

## 🤝 Contributing

## ❓ Questions?

> Have questions or need more information? Contact me by <a href='mailto:magfin@github.com'>e-mail</a>.

**Maggie Finnegan**

- Github: [@magfinn](https://github.com/magfinn)

## 📝 License

This project is [MIT](https://opensource.org/licenses/MIT) licensed.

---

\_This README was generated with ❤️ by [Quick, Read Me!](https://github.com/magfinn/Quick-README-)
