import style from "./Error.module.css";
// import { useDispatch} from "react-redux";
// import { closeError } from "../../redux/actions";
import genero from "../../assets/noGenero.png"

const Errors = () => {
    // const dispatch = useDispatch();

    // const handleClick = () => {
    //     dispatch(closeError());
    // };

    return (
        <div className={style.container}>
            
            <img  src={genero} alt="error"/>
        </div>
    )
};

export default Errors;