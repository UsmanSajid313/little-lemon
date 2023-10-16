import './Specials.css';

function Specials() {
    return (
        <div className="container specials">
            <div className='row mt-5 mb-5 specials1'>
                <div className='col d-md-flex text-center text-md-start justify-content-between'>
                    <h1>This week's specials!</h1>
                    <button className='btn btn-large menu'>Online Menu</button>
                </div>
            </div>
            <div className='row row-cols-1 row-cols-lg-3 g-4'>
                <div className='col card-group justify-content-center'>
                    <div className="card">
                        <img src="./icons_assets/greek salad.jpg" className="card-img-top" alt="salad" />
                        <div class="card-body">
                            <div className='card-title d-flex justify-content-between'>
                                <h5>Greek Salad</h5>
                                <h5 id="price">$12.99</h5>
                            </div>
                            <p className="card-text">Indulge in the famous Greek salad, with crispy lettuce, peppers, olives, and Chicago-styled feta cheese. Grandma's recipe book garnishes it with garlic and rosemary croutons.</p>
                            <a href="/order">Order a Delivery</a>
                        </div>
                    </div>
                </div>
                <div className='col card-group justify-content-center'>
                    <div className="card">
                        <img src="./icons_assets/bruchetta.svg" className="card-img-top" alt="bruschetta" />
                        <div class="card-body">
                            <div className='card-title d-flex justify-content-between'>
                                <h5>Bruschetta</h5>
                                <h5 id="price">$5.99</h5>
                            </div>
                            <p className="card-text">Treat yourself to Bruschetta, grilled bread smeared with garlic, seasoned with salt and olive oil. This Italian delight is straight from grandma's kitchen, a cherished family recipe.</p>
                            <a href="/order">Order a Delivery</a>
                        </div>
                    </div>
                </div>
                <div className='col card-group justify-content-center'>
                    <div className="card">
                        <img src="./icons_assets/lemon dessert.jpg" className="card-img-top" alt="lemon dessert" />
                        <div class="card-body">
                            <div className='card-title d-flex justify-content-between'>
                                <h5>Lemon Dessert</h5>
                                <h5 id="price">$5.00</h5>
                            </div>
                            <p className="card-text">Savor the luscious lemon dessert, a family favorite passed down from grandma's treasured book. Zesty lemon flavors, a buttery crust, and a hint of sweetness make it an authentic delight.</p>
                            <a href="/order">Order a Delivery</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Specials;