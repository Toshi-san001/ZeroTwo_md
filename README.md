</br> 

## ✧✧✧ Termux Deployment Method
```js
pkg install
pkg upgrade
pkg install git
pkg install ffmpeg && pkg install libwebp
pkg install nodejs
git clone --depth=1 https://github.com/Toshi-san001/ZeroTwo_md
cd ZeroTwo_md
npm install --arch=x64 --platform=linux sharp
npm start

## ✧✧✧ To keep bot alive without internet 24/7

```
npm i -g pm2 && pm2 start index.js && pm2 save && pm2 logs
```
