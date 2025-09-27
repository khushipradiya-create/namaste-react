/*
commands

npm init : package.json
npm install -D parcel :  package.lock.json
for recreating the node module :  npm install
npx parcel index.html : for exeuting npm and starting point index.html

*/


import react from 'react';
import ReactDom from 'react-dom/client'

const heading = react.createElement('h1', { id: 'heading1' }, " ");
const root = ReactDom.createRoot(document.getElementById('root'))
// root.render(heading);

const box = react.createElement('div', { id: 'box' },
        react.createElement('div', { id: "box2" },
        react.createElement("div", { id: 'box3' })))
root.render(box)