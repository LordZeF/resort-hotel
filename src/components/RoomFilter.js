import React from 'react';
import { useContext } from 'react';
import { RoomContext } from '../Context';
import Title from './Title';

//Get All Unique Values

const getUnique = (item, value) => {
    return (
        [...new Set(item.map(item => item[value]))]
    );
}

export default function RoomFilter({ rooms }) {
    const context = useContext(RoomContext);
    const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = context;

    //Get Unique Types
    let types = getUnique(rooms, 'type');
    //add all
    types = ['all', ...types];
    //Map To JSX
    types = types.map((item, index) => {
        return (
            <option value={item} key={index}>{item}</option>
        );
    });

    let people = getUnique(rooms, 'capacity');
    people = people.map((item, index) => {
        return (
            <option key={index} value={item}>{item}</option>
        );
    });

    return (
        <section className="filter-container">
            <Title title='search-rooms' />
            <form className="filter-form">

                {/*select type*/}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type"
                        id="type"
                        value={type}
                        className="form-control"
                        onChange={handleChange}>
                        {types}
                    </select>
                </div>
                {/*End of select type*/}

                {/*Guests || Capacity*/}
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select name="capacity"
                        id="capacity"
                        value={capacity}
                        className="form-control"
                        onChange={handleChange}>
                        {people}
                    </select>
                </div>
                {/*End of guests || capacity*/}

                {/*Room price*/}
                <div className="form-group">
                    <label htmlFor="price">room price &#8369;{price}</label>
                    <input type="range"
                        name='price'
                        min={minPrice}
                        max={maxPrice}
                        id='price'
                        value={price}
                        onChange={handleChange}
                        className='form-control' />
                </div>
                {/*End of room price*/}

                {/*Size */}
                <div className="form-group">
                    <label htmlFor="size">Room Size (sqft)</label>
                    <div className="size-inputs">
                        <span>Min:</span><input
                            type="number"
                            name='minSize'
                            id='size'
                            value={minSize}
                            onChange={handleChange}
                            className='size-input' />
                        <span>Max:</span><input
                            type="number"
                            name='maxSize'
                            id='size'
                            value={maxSize}
                            onChange={handleChange}
                            className='size-input' />
                    </div>
                </div>
                {/*End of size */}

                {/*Extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input
                            type="checkbox"
                            name='breakfast'
                            id='breakfast'
                            checked={breakfast}
                            onChange={handleChange} />
                        <label htmlFor="breakfast">Breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input
                            type="checkbox"
                            name='pets'
                            id='pets'
                            checked={pets}
                            onChange={handleChange} />
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
                {/*End of Extras */}

            </form>
        </section>
    );
}
