import React from 'react';
import desktop from "../../Image/desktop.png"

const Home = () => {
    return (
        <div>
            {/* section 1 */}
            <section className='d-flex m-3'>
                <div className='col-md-6'>
                    <div>
                        <p>Computer the innovation</p>
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eaque, culpa consequatur sit porro, vitae, odit optio tempore nam iure molestias quasi consequuntur! Beatae eum expedita itaque in consectetur ratione.
                    </div>
                    <div className='m-5'>
                        <button type="button" className="btn btn-primary">Primary</button>
                    </div>
                </div>

                <div className='col-md-6'>
                    <img src={desktop} alt="desktop_image" />
                </div>
            </section>

            {/* section 2 */}

            <section>
                <div className='text-center'>
                    <h2 className='fw-bold'>Customer Reviews</h2>
                </div>
            </section>
        </div>
    );
};

export default Home;