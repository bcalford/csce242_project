import "./styles.css";
import "./plans.css";

const Plans = () => {
    return (
        <>
        <main id="plans-section">
            <div id="plan-options">
                <section className="plan">
                    <h2>Basic</h2>
                    <h3>$30 a Week</h3>
                    <h3>5 Meals</h3>
                    <p>Our basic plan is for our customers who may to want to commit to our full program or may need to take a temporary step back. Still at a high value, this plan will bring you meals for $6 each, still beating all of our competitors protein-to-dollar ratio.</p>
                    <p>With this plan you can still enjoy our delicious offerings and hit your protein guaranteed on up to 5 meals a week. You always have the freedom to switch to or from this plan as it fits your needs.</p>
                </section>
                <section className="plan">
                    <h2>Plus</h2>
                    <h3>$55 a Week</h3>
                    <h3>10 Meals</h3>
                    <p>Our plus plan is what we would recommend to most of our customers starting off. This plan brings your our great offerings at a slight discount compared to our basic plan. This way, you can try fully integrating our program into your weekly diet.</p>
                    <p>This plan gives you access to all of our delicous offerings every week. In the event you find this plan is too much for you each week or if you would like more meals in the week, you always have the option to switch to any of our plans.</p>
                </section>
                <section className="plan">
                    <h2>Premium</h2>
                    <h3>$105 a Week</h3>
                    <h3>20 Meals</h3>
                    <p>Our premium plan is recommend for our customers that have already tried and are loving our program. This option will allow you to use ProteinPrepped for most of your weekly meals and maximize its potential.</p>
                    <p>With this plan you can certainely try out all of our meal offerings, most likely each more than once. This plan has the highest value and lowest price-per-meal of any of our plans. If at any point you decide this plan is too much, you always have the option to downgrade to a cheaper option.</p>
                </section>
            </div>
            <div id="plans-buttons">
                <a href="dishes.html"><button>Sample Dishes</button></a>
                <a href="order.html"><button>Order Now</button></a>
            </div>
        </main>
        </>
    )
};

export default Plans;