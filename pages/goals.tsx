import Footer from "../src/components/Footer"
import ListGoals from "../src/components/ListGoals"
import NavBar from "../src/components/NavBar"

const Goals = () => {

    return (
        <div>
            <NavBar />
            <div style={{
                paddingTop : '50px'
            }}>
                <ListGoals />
            </div>
            <Footer />
        </div>
    )
}

export default Goals