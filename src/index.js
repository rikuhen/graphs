import _ from 'lodash'
import 'bootstrap'
import './scss/app.scss';

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello','Webpack'],'~')

    return element
}


function writeLoveU() {
    const element = document.createElement('ul');

    for (let index = 0; index < 10; index++) {
        let listItem = document.createElement('li');
        listItem.innerHTML =  (index + 1) +" Te amo Karen";
        element.appendChild(listItem);
    }

    return element
    
}


document.body.appendChild(component());
document.body.appendChild(writeLoveU());
