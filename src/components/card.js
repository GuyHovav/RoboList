import React from 'react';

export default (props) => {
    let {avatar, first_name, country, description} = props.data;
    return (
        <div className = "card">
            <img src={avatar} />
            <div>
                <h5>{first_name} from {country}</h5>
                <p>{description}</p>
            </div>
        </div>)
}