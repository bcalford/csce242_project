import "./styles.css";
import "./order.css";

const Order = () => {
    return (
        <>
        <main id="plans-section">
            <h3 id="notice">Please indicate your interest in ProteinPrepped and we will contact you once ordering is fully available.</h3>
            <form id="plans-form">
                <div className="question">
                    <label for="name">Name:</label>
                    <input id="name" name="name" type="text" placeholder="Firstname Lastname" />
                </div>
                <div className="question">
                    <label for="phone">Phone:</label>
                    <input id="phone" name="phone" type="text" placeholder="(XXX) XXX-XXXX" />
                </div>
                <div className="question">
                    <label for="email">Email:</label>
                    <input id="email" name="email" type="email" placeholder="firstlast@company.com" />
                </div>
                <div className="question">
                    <label for="plan">Plan:</label>
                    <select id="plan" name="plan">
                        <option value="0"></option>
                        <option value="1">Basic</option>
                        <option value="2">Plus</option>
                        <option value="3">Premium</option>
                    </select>
                </div>
                <div className="question">
                    <label for="comments">Other<br />Comments:</label>
                    <textarea id="comments" name="comments"></textarea>
                </div>
                <div className="question">
                    <label for="referral">How Did You Hear About Us?:</label>
                    <textarea id="referral" name="referall"></textarea>
                </div>
                <div id="submit">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </main>
        </>
    )
};

export default Order;