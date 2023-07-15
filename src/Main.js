import { useNavigate, Link } from 'react-router-dom';
import './Main.css';

function Main() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/reservations');
  };

  const navigate2 = useNavigate();
  const handleClick2 = () => {
    navigate2('/');
  };

  return (
    <main>
      <section className="section1">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button onClick={handleClick}>Reserve a Table</button>
                <img src="./icons_assets/restauranfood.jpg" alt="Restaurant Food" />
      </section>
      <section className='section2'>
        <h1>This week's specials!</h1>
        <button onClick={handleClick2}>Online Menu</button>
      </section>
      <section className='section3'>
        <article>
        <img src="./icons_assets/greek salad.jpg" alt="Greek Salad"></img>
            <div className="atitle">
            <h4>Greek Salad</h4>
            <h4 id="price">$12.99</h4>
            </div>
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
            <h6>
              <Link to="/">Order a delivery</Link>
            </h6>
        </article>
        <article>
        <img src="./icons_assets/bruchetta.svg" alt="Bruschetta"></img>
        <div className="atitle">
            <h4>Bruschetta</h4>
            <h4 id="price">$5.99</h4>
            </div>
            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil</p>
            <h6>
              <Link to="/">Order a delivery</Link>
            </h6>
        </article>
        <article>
        <img src="./icons_assets/lemon dessert.jpg" alt="Greek Salad"></img>
        <div className="atitle">
        <h4>Lemon Dessert</h4>
            <h4 id="price">$5.00</h4>
            </div>
            <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined</p>
            <h6>
              <Link to="/">Order a delivery</Link>
            </h6>
        </article>
      </section>
      <section className="section4">
        <h1>Testimonials</h1>
      </section>
      <section className="section5">
        <article>
          <div className="rating">
          <h3>Rating</h3>
          <p id="stars">⭐⭐⭐⭐⭐</p>
          </div>
          <div className="imageh">
          <img src="./icons_assets/1.jpg" alt="Alisa"></img>
          <h2 id="name">Alisa</h2>
          </div>
          <p id="comments">"Best food place in town."</p>
        </article>
        <article>
        <div className="rating">
          <h3>Rating</h3>
          <p id="stars">⭐⭐⭐⭐⭐</p>
          </div>
          <div className="imageh">
          <img src="./icons_assets/2.jpg" alt="John"></img>
          <h2 id="name">John</h2>
          </div>
          <p id="comments">"Highly Recommended!"</p>
        </article>
        <article>
        <div className="rating">
          <h3>Rating</h3>
          <p id="stars">⭐⭐⭐⭐⭐</p>
          </div>
          <div className="imageh">
          <img src="./icons_assets/3.jpg" alt="Janice"></img>
          <h2 id="name">Janice</h2>
          </div>
          <p id="comments">"Best experience."</p>
        </article>
        <article>
        <div className="rating">
          <h3>Rating</h3>
          <p id="stars">⭐⭐⭐⭐⭐</p>
          </div>
          <div className="imageh">
          <img src="./icons_assets/4.jpg" alt="Bruce"></img>
          <h2 id="name">Bruce</h2>
          </div>
          <p id="comments">"Great Food."</p>
        </article>
      </section>
      <section className="section6">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis</p>
        <img src="/icons_assets/Mario and Adrian A.jpg" alt="MarioA"className="firstimage"></img>
        <img src="/icons_assets/Mario and Adrian b.jpg" alt="MarioB"className="secondimage"></img>
      </section>
    </main>
  );
}

export default Main;
