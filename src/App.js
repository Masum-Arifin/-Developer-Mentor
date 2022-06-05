import {
    useEffect
} from "react";
import Home from "./components/Home";
import "./components/styles/main.scss";
import {
    Toaster
} from "react-hot-toast";
import {
    gsap
} from "gsap";

const App = () => {
    useEffect(() => {
        gsap.to(".wrapper", {
            visibility: "visible",
            autoAlpha: 1
        });
    }, []);

    return ( < div style = {{visibility: "hidden"}}className = 'wrapper' >
        <
        Toaster position = 'bottom-right'
        toastOptions = {
            {
                // className: "",
                duration: 2000,
                style: {
                    background: "#2d2d2d",
                    color: "#f0f0f0",
                    borderRadius: 0,
                },
            }
        }
        /> <
        Home/>
        </div>
    );
};

export default App;