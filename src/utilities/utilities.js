import React from 'react';
import {FaPlusSquare} from 'react-icons/fa';


let randomMessageStyle = {
    width: "180px",
    height: "auto",
    position: "fixed",
    top: "60px",
    left: "0",
    right: "0",
    margin: "auto",
    padding: "10px",
    fontSize: '2.4rem',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: "#dff0d8",
    border: "1px solid #d6e9c6",
    borderRadius: "4px",
    color: '#3c763d'
}


//This function provides the random message shown when the user adds something to the cart
function displayRandomMessage(){
    let messages = ['Wow!', 'Great choice!', 'Devour it!', ':)', 'Good one!', 'Share it!', "Love it!"];
    let randomMessage = messages[Math.floor(Math.random() * messages.length)];
    let displayAddedMessage = <div style={randomMessageStyle}>{randomMessage}</div>;
       return displayAddedMessage
}

//This function iterates over an array of objects / object and returns an array of the desired keys 
function getProperties(targetObject, ...targetProps){
    let props = [];
        targetObject.forEach(item => {
            for(let key in item){
                if(targetProps.includes(key)){
                    props.push(item[key])
                }}})
      return props
}

//This function returns a random array of n unique elements (default set to three)
function getRandomElements(array, n = 3){
    let randomArray = []
    while(n){
        let index = Math.floor(Math.random() * array.length);
        randomArray.includes(array[index]) ? n++ : randomArray.push(array[index])
        n--
    }
    return randomArray
 }

 //This function check if an element is elegible for discount and, if so, apllies the discount
function getDiscount(list, target, price, currDiscount, event){
    let copy  = price;
    let button = <FaPlusSquare id='add-btn-main' title='add to cart' onClick={event} style={{verticalAlign: 'bottom'}}/>;
    if(list.includes(target)){   
        copy = <p className='price'><span className='discountedPrice'>{price}</span>{Math.round(price - ((price / 100) * currDiscount))}${button}</p>;  
    }
    return typeof copy === 'object' ? copy : <p className='price'>{copy}${button}</p>
}


function getReadableDate(date){
    const dayMonthYear = date.slice(0, 10).split('-').reverse().join('-');
    const hourMinutesSeconds = date.slice(11, 19);
    return dayMonthYear + ' ' + hourMinutesSeconds
}

export {displayRandomMessage, getProperties, getRandomElements, getDiscount, getReadableDate}