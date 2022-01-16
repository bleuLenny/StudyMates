import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

const Serach = () => {
    return (
        <Container>
            <form action="/" method="get">
                <label htmlFor="header-search">
                    <span className="visually-hidden">Search sessions</span>
                </label>
                <input
                    type="text"
                    id="header-search"
                    placeholder="eg. MATH 101"
                    name="s" 
                />
                <button type="submit">Search</button>
            </form>
        </Container>
    );
}

export default Serach;