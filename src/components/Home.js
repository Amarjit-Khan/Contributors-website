import React from 'react'
import Card from './Card'
import data from './CONTRIBUTORS.json'
import './Home.css'

function Home() {
    return (
        <div className='hero'>
            <h1>OUR CONTRIBUTORS</h1>
            <div className="grid container">
                {
                    data.map((item, index) => {
                        return (
                            <Card contro={item} key={item.id}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home