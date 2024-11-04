import "./styles.css";
import "./home.css";

const Home = () => {
    return (
        <>
        <main id="main-section">
            <section id="img-list">
                <img src="images/img1.jpeg" />
                <div id="button-list">
                    <a href="about.html"><button>Who We Are</button></a>
                    <a href="dishes.html"><button href="dishes.html">Sample Dishes</button></a>
                </div>
            </section>
            <section id="home-list">
                <article id="article1" className="main-list-article">
                    <h2 id="article1-h2">Welcome In</h2>
                    <p id="article1-p">Welcome to ProteinPrepped! We are an active team of young entrepreneurs looking to shake up the meal kit industry. We are tired of overpriced and unhealthy meals, so ProteinPrepped is bringing you prepared meals that can fuel your fitness journey and be delicous at the same time. To learn more about our team and our background, please visit <a href="about.html">our about us page</a>.</p>
                </article>
                <article id="article2" className="main-list-article">
                    <h2 id="article2-h2">Ingredients</h2>
                    <p id="article2-p">You can always rest assured that we only use high quality local ingredients for all our our recipes. As ProteinPrepped is currently exclusive to Columbia, South Carolina, we source all of our ingredients from local farmers and suppliers. We will always be open and honest about our ingredients so our customers know they are only consuming safe, high-quality foods.</p>
                </article>
                <article id="article3" className="main-list-article">
                    <h2 id="article3-h2">Mission</h2>
                    <p id="article3-p">Our goal is to mix up the meal kit scene. Many companies over the past decade or so have become popular for their cheap meal kit delivery services. However, all of the most popular options end up providing their customers with non-macro-friendly and unhealthy recipes. ProteinPrepped guarantees our customers a safe and healthy experience that will align with your fitness goals.</p>
                </article>
                <article id="article4" className="main-list-article">
                    <h2 id="article4-h2">Wellness</h2>
                    <p id="article4-p">Our top priority is the wellness of our customers. The American diet is known for its many flaws and has worsened even more in recent years. However, there has been a much-needed pushback in favor of healthy, powerful diets. ProteinPrepped is here to give an extra push towards a better diet for the next generation of Americans.</p>
                </article>
            </section>
        </main>
        </>
    )
};

export default Home;