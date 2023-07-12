import './Main.css';

function Main() {
  return (
    <main>
      <section className="section1">
          <div className="content">
            <div className="text">
              <div className="heading">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
              </div>
              <div className="description">
                <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button>Reserve a Table</button>
              </div>
            </div>
            <img src="./icons_assets/restauranfood.jpg" alt="Restaurant Food" />
        </div>
      </section>
      <section>
        <div className="articleheading">
        <h1>This week’s specials!</h1>
        <button>Online Menu</button>
        </div>
        </section>
        <section>
        <div className="items">
        <article>
            <img src="./icons_assets/greek salad.jpg" alt="Greek Salad"></img>
            <div className="atitle">
            <h4>Greek Salad</h4>
            <h4 id="price">$12.99</h4>
            </div>
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
            <h6>Order a delivery</h6>
        </article>
        <article>
            <img src="./icons_assets/bruchetta.svg" alt="Bruschetta"></img>
            <div className="atitle">
            <h4>Bruschetta</h4>
            <h4 id="price">$5.99</h4>
            </div>
            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil</p>
            <h6>Order a delivery</h6>
        </article>
        <article>
            <img src="./icons_assets/lemon dessert.jpg" alt="Greek Salad"></img>
            <div className="atitle">
            <h4>Lemon Dessert</h4>
            <h4 id="price">$5.00</h4>
            </div>
            <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined</p>
            <h6>Order a delivery</h6>
        </article>
        </div>
      </section>
      <section></section>
      <section></section>
    </main>
  );
}

export default Main;
