# **Node JS Rest-API**

<img src="https://i.postimg.cc/mkBmFDZ0/api.png" width="500">

Simple Rest-API With Login System, Built using MongoDB, Express.js, and Node.js

# Installation

Requirements
* [Node.js](https://nodejs.org/en/)
* [Git](https://git-scm.com/downloads)
* [VS Code](https://code.visualstudio.com/download) or Any Text Editor

## Cloning this repo
```cmd
> git clone https://github.com/fawwaz37/nodejs-restapi.git
> cd todo-express-mongodb
```
Use `code .` to open file in VS Code
```cmd
> code .
```

## Editing the file
Edit the required value in folder `lib` file `settings.js`.

```js
module.exports = {
    port: '5000', // http://localhost:5000
    // ex Mongodb Atlas : mongodb+srv:/xxx
    dbURI: '' 
}
```

`port`: PORT localhost.

`dbURI`: Connection String MongoDb. 

## How to Get Mongodb URI
1. Sign In [Mongodb](https://www.mongodb.com/)
2. Create a Database.
<img src="https://i.postimg.cc/R0D16X3C/1.png" width="300">

3. Create Free Cluster.
4. Choose Cloud Provider & Region.
5. Select `Connect`.
6. Add a Connection IP Address.
<img src="https://i.postimg.cc/gk1H2MZY/5-1.png" width="500">

7. Create a Database User
<img src="https://i.postimg.cc/T1zCLGPc/5-2.png" width="500">

8. Choose Connect Your Application
9. Change `<password>` with Your Password Database User `step 7`
<img src="https://i.postimg.cc/6pW4wgW2/db.png" width="500">
10. Copy and Paste in `settings.js`

Contact Me ([WhatsApp](https://api.whatsapp.com/send/?phone=6287715579966&text&app_absent=0)) if You Have Problem with mongodb

## Installing the dependencies
```cmd
> npm install
```

## Running App
```cmd
> npm start
```

Then Browse http://localhost:5000 . You will see the Homepage.

<img src="https://i.postimg.cc/C5wHvQqt/api-home.png" width="500">

# Features

|     API              |  EndPoint      |
| :--------------:     | :------------: |
| Youtube MP3          |   /ytmp3?url=  |
| Youtube MP4          |   /ytmp4?url=  |
| Youtube Play         |   /ytplay?url= |
| Random Quotes        |   /quotes      |
| Random Fakta         |   /fakta       |
| Random Kata Bijak    |   /bijak       |
| Random Kata Motivasi |   /motivasi    |
| Random Ptl           |   /ptl         |
| Cak Lontong          |   /caklontong  |

If you want to unlock Premium Feature, please contact me ([WhatsApp](https://api.whatsapp.com/send/?phone=6287715579966&text&app_absent=0))

|     Premium               |  Availability  |
| :--------------:          | :------------: |
| Premium User              |   ✔️           |
| Added Premium Apikey      |   ✔️           |
| Delete Premium Apikey     |   ✔️           |
| Limit Apikey              |   ✔️           |
| Custom Limit Apikey       |   ✔️           |
| Custom Apikey             |   ✔️           |
| Expired Premium User      |   ✔️           |
| Reset All Limit every 8am |   ✔️           |
| Reset One Limit           |   ✔️           |
