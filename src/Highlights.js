import './Highlights.css';

function Highlights() {
    return (
        <main className="container-flex highlights">
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4 offset-md-2 text-center text-md-start'>
                        <div className='row mt-2'>
                            <h1>Little Lemon</h1>
                        </div>
                        <div className='row'>
                            <h2>Chicago</h2>
                        </div>
                        <div className='row'>
                            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        </div>
                        <div className='row'>
                            <div className='col mt-md-2'>
                                <button className='btn btn-large reserve'>Reserve a Table</button>
                            </div>
                        </div>

                    </div>
                    <div className='col pt-4 text-center text-lg-start'>
                        <img src="./icons_assets/restauranfood.jpg" alt="pic1" width="300" height="350" />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Highlights;