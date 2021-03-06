import React from 'react';
import CardButtons from '../Buttons/CardButtons/CardButtons';
import DescriptionCard from '../Card/DescriptionCard/DescriptionCard';

const card = props => (
    <div className='cart-card' >
        <img src={props.imageSrc} alt={props.imageAlt}
            onClick={props.showDescription.bind(null, props.targetElement)} title='view description'
        />
        <DescriptionCard
            title={props.targetElement.title}
            author={props.targetElement.author}
        />
        <div className='buttons-wrapper'>
            <CardButtons
                add={props.adjustQuantity.bind(this, 'add', props.targetElement.title)}
                remove={props.adjustQuantity.bind(this, 'remove', props.targetElement.title)}
                delete={props.adjustQuantity.bind(this, 'delete', props.targetElement.title)}
            />
            <p>{` x ${props.numberOfItems} -   ${(props.price * props.numberOfItems).toFixed(2)}$`}</p>
        </div>

    </div>
)

export default card
