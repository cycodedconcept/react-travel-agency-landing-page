import React from 'react'
import image from '../assets/image.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'

const Destinations = () => {
    return (
        <>
        <section className="grid">
            <h3>We are currently in 46 countries</h3>

            <div className="grid-items">
                <div>
                    <img src={image} alt=""/>
                    <h4>Fly To Aruba</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Velit aliquam voluptatem a aut modi vel?
                   </p>
                </div>

                <div>
                    <img src={image3} alt=""/>
                    <h4>Experience Mombasa</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Velit aliquam voluptatem a aut modi vel?
                   </p>
                </div>
                <div>
                    <img src={image4} alt=""/>
                    <h4>Savour Hawaii</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Velit aliquam voluptatem a aut modi vel?
                   </p>
                </div>
            </div>
        </section>
        </>
    )
}

export default Destinations
