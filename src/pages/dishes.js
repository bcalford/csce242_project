import Dish from "../components/Dish";
import { Outlet, Link } from "react-router-dom";
import "./styles.css";
import "./dishes.css";
import "../components/Dish.css";

const Dishes = () => {
    return (
        <>
        <main id="dishes-section">
            <p id="disclaimer">* Note: We add additional meal options regularly</p>
            <div id="dishes-content">
                <section id="meals-sidebar">
                    <div id="meals-quicklinks-div">
                        <h2>Meals</h2>
                        <ul id="meals-quicklinks">
                            <a href="#meal1"><li>Meal 1</li></a>
                            <a href="#meal2"><li>Meal 2</li></a>
                            <a href="#meal3"><li>Meal 3</li></a>
                            <a href="#meal4"><li>Meal 4</li></a>
                            <a href="#meal5"><li>Meal 5</li></a>
                            <a href="#meal6"><li>Meal 6</li></a>
                            <a href="#meal7"><li>Meal 7</li></a>
                        </ul>
                        <div id="plans-button-div">
                            <Link to="../plans"><button id="plans-button">View Plans</button></Link>
                        </div>
                    </div>
                </section>
                <section id="meals-list">
                    <Dish
                        name="Beef and Chicken Meatballs with Sun-Dried Tomatoes"
                        id="meal1"
                        link="https://ohsnapmacros.com/meatballs-without-eggs/"
                        image="images/dish1a.jpg"
                        para1="These meatballs without eggs are juicy, tender and full of flavor. Made with ground chicken, ground beef, breadcrumbs and sun-dried tomatoes, these are the perfect meatballs for fast and delicious weeknight dinners."
                        para2="Traditional meatballs use eggs as a binding agent, but don't worry with the help of milk and cheese, you'll have great meatballs in no time."
                    />
                    <Dish
                        name="Beef and Chicken Meatballs with Sun-Dried Tomatoes"
                        id="meal2"
                        link="https://ohsnapmacros.com/meatballs-without-eggs/"
                        image="images/dish1a.jpg"
                        para1="These meatballs without eggs are juicy, tender and full of flavor. Made with ground chicken, ground beef, breadcrumbs and sun-dried tomatoes, these are the perfect meatballs for fast and delicious weeknight dinners."
                        para2="Traditional meatballs use eggs as a binding agent, but don't worry with the help of milk and cheese, you'll have great meatballs in no time."
                    />
                    <Dish
                        name="Beef and Chicken Meatballs with Sun-Dried Tomatoes"
                        id="meal3"
                        link="https://ohsnapmacros.com/meatballs-without-eggs/"
                        image="images/dish1a.jpg"
                        para1="These meatballs without eggs are juicy, tender and full of flavor. Made with ground chicken, ground beef, breadcrumbs and sun-dried tomatoes, these are the perfect meatballs for fast and delicious weeknight dinners."
                        para2="Traditional meatballs use eggs as a binding agent, but don't worry with the help of milk and cheese, you'll have great meatballs in no time."
                    />
                    <Dish
                        name="Beef and Chicken Meatballs with Sun-Dried Tomatoes"
                        id="meal4"
                        link="https://ohsnapmacros.com/meatballs-without-eggs/"
                        image="images/dish1a.jpg"
                        para1="These meatballs without eggs are juicy, tender and full of flavor. Made with ground chicken, ground beef, breadcrumbs and sun-dried tomatoes, these are the perfect meatballs for fast and delicious weeknight dinners."
                        para2="Traditional meatballs use eggs as a binding agent, but don't worry with the help of milk and cheese, you'll have great meatballs in no time."
                    />
                    <Dish
                        name="Beef and Chicken Meatballs with Sun-Dried Tomatoes"
                        id="meal5"
                        link="https://ohsnapmacros.com/meatballs-without-eggs/"
                        image="images/dish1a.jpg"
                        para1="These meatballs without eggs are juicy, tender and full of flavor. Made with ground chicken, ground beef, breadcrumbs and sun-dried tomatoes, these are the perfect meatballs for fast and delicious weeknight dinners."
                        para2="Traditional meatballs use eggs as a binding agent, but don't worry with the help of milk and cheese, you'll have great meatballs in no time."
                    />
                    <Dish
                        name="Beef and Chicken Meatballs with Sun-Dried Tomatoes"
                        id="meal6"
                        link="https://ohsnapmacros.com/meatballs-without-eggs/"
                        image="images/dish1a.jpg"
                        para1="These meatballs without eggs are juicy, tender and full of flavor. Made with ground chicken, ground beef, breadcrumbs and sun-dried tomatoes, these are the perfect meatballs for fast and delicious weeknight dinners."
                        para2="Traditional meatballs use eggs as a binding agent, but don't worry with the help of milk and cheese, you'll have great meatballs in no time."
                    />
                    <Dish
                        name="Beef and Chicken Meatballs with Sun-Dried Tomatoes"
                        id="meal7"
                        link="https://ohsnapmacros.com/meatballs-without-eggs/"
                        image="images/dish1a.jpg"
                        para1="These meatballs without eggs are juicy, tender and full of flavor. Made with ground chicken, ground beef, breadcrumbs and sun-dried tomatoes, these are the perfect meatballs for fast and delicious weeknight dinners."
                        para2="Traditional meatballs use eggs as a binding agent, but don't worry with the help of milk and cheese, you'll have great meatballs in no time."
                    />
                </section>
            </div>
        </main>
        </>
    )
};

export default Dishes;