import "./Dish.css";

function Dish(dish) {
    return (
        <>
        <article id={dish.id} className="dish">
            <a href={dish.link}><h2>{dish.name}</h2></a>
            <hr />
            <div className="dish-content">
                <img src={dish.image} />
                <p>{dish.para1}</p>
                <p>{dish.para2}</p>
            </div>
        </article>
        </>
    );
}

export default Dish;