import "./styles.css";
import "./dishes.css";

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
                            <a href="plans.html"><button id="plans-button">View Plans</button></a>
                        </div>
                    </div>
                </section>
                <section id="meals-list"></section>
            </div>
        </main>
        </>
    )
};

const getDishes = async() => {
    try {
        return (await fetch("https://bcalford.github.io/csce242/projects/part6/dishes.json")).json();
    } catch(error) {
        console.log(error);
    }
}

const showDishes = async() => {
    const dishes = await getDishes();

    dishes.forEach((dish)=>{
        const article = document.createElement("article");
        article.classList.add("dish");
        document.getElementById("meals-list").append(article);

        const link = document.createElement("a");
        link.href = dish.link;
        article.append(link);

        const title = document.createElement("h2");
        title.innerHTML = dish.name;
        link.append(title);

        const line = document.createElement("hr");
        article.append(line);

        const innerDiv = document.createElement("div");
        innerDiv.classList.add("dish-content");
        article.append(innerDiv);

        const image = document.createElement("img");
        image.src = "./images/" + dish.image1;
        innerDiv.append(image);

        const p1 = document.createElement("p");
        p1.innerHTML = dish.description1;
        innerDiv.append(p1);

        const p2 = document.createElement("p");
        p2.innerHTML = dish.description2;
        innerDiv.append(p2);
    });
}

showDishes();

export default Dishes;