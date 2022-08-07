import React from 'react';
import ReviewDataLoad from '../../CustomHook/Hook/ReviewDataLoad';
import desktop from "../../Image/desktop.png"
import Review from '../Review/Review';

const Home = () => {
    const [reviews, setReviews] = ReviewDataLoad();
    const size = 3;
    let homeReviews = reviews.slice(0, size).map(review => {
        return review;
    })
    console.log(homeReviews);
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
                    <h2 className='fw-bold'>Customer Reviews ({homeReviews.length})</h2>
                    {/* loading review */}
                    {
                        homeReviews.map(homeReview =>
                            <Review
                                name={homeReview.name}
                                comment = {homeReview.company.catchPhrase}
                                rating = {homeReview.address.zipcode}
                            ></Review>
                        )
                    }
                </div>
            </section >
        </div >
    );
};

export default Home;