import React from 'react';
import ListItem from './ListItemContainer';

const ListContainer = ({ availableCities, items=0 }) => {
    return (
        <div className="city-vehicle-list">
            {
                items.map((it, ind)=>{
                    return (
                        <ListItem id={it} key={it}/>
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = ({ cities }) => {
    return (
        {
            availableCities: cities.availableCities
        }
    )
}

export default ListContainer;