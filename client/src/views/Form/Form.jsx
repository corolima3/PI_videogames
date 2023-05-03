import { useState } from "react";
import style from './Form.module.css';

const validate = (form) => {
    let errors = {};
    
    if (!form.name) {
        errors.name = "El nombre es obligatorio";
    } else if (form.name.length <= 2) {
        errors.name = "El nombre debe tener por lo menos 3 caracteres";
    } else if (!/^([^0-9]*)$/.test(form.name)) {
        errors.name = "El nombre no puede contener números";
    };

    if (!form.image) {
        errors.image = "La imagen es obligatoria";
    } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(form.image)) {
        errors.image = "La imagen debe ser una url";
    };

    if (!form.hp) {
        errors.hp = "La vida es obligatoria";
    } else if (form.hp < 1 || form.hp > 999) {
        errors.hp = "La vida debe ser entre 1 y 999";
    };

    if (!form.attack) {
        errors.attack = "El ataque es obligatorio";
    } else if (form.attack < 1 || form.attack > 999) {
        errors.attack = "El ataque debe ser entre 1 y 999";
    };

    if (!form.defense) {
        errors.defense = "La defensa es obligatoria";
    } else if (form.defense < 1 || form.defense > 999) {
        errors.defense = "La defensa debe ser entre 1 y 999";
    };

    if (form.speed < 1 || form.speed > 999) {
        errors.speed = "La velocidad debe ser entre 1 y 999";
    };

    if (form.height < 1 || form.height > 999) {
        errors.height = "La altura debe ser entre 1 y 999";
    };

    if (form.weight < 1 || form.weight > 999) {
        errors.weight = "El peso debe ser entre 1 y 999";
    };

    if (form.typesId.length > 2) {
        errors.types = "No puede tener mas de 2 tipos";
    };

    return errors;
};


const Form =()=>{
    const [form, setForm] = useState({
        name: "",
        image: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        typesId: [],
    });
    const [errors, setErrors] = useState({
        name: "",
        image: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        types: "",
    });


    const changeInputHandler = (event) => {

            setForm({...form, [event.target.name]: event.target.value});
            setErrors(validate({...form, [event.target.name]: event.target.value}));
    };

    return (
    <>
        <form>
            <h2>Crea tu Pokemon</h2>
            <div className={style.formDivInput}>
                    <label htmlFor="name" className={style.formLabel}>Name:</label>
                    <input type="text" name="name" placeholder="..." value={form.name} onChange={changeInputHandler} className={style.formInput}  />
            </div>
                {errors.name && <p className={style.formError}>{errors.name}</p>}

            <div className={style.formDivInput}>
                    <label htmlFor="image" className={style.formLabel}>Imagen:</label>
                    <input type="text" name="image" placeholder="Imagen (url)" value={form.image} onChange={changeInputHandler} className={style.formInput} />
            </div>
                {errors.image && <p className={style.formError}>{errors.image}</p>}

            <div className={style.formDivInput}>
                    <label htmlFor="hp" className={style.formLabel}>Vida</label>
                    <input type="number" name="hp" placeholder="Vida" value={form.hp} onChange={changeInputHandler} className={style.formInput}  />
            </div>
                {errors.hp && <p className={style.formError}>{errors.hp}</p>}

            <div className={style.formDivInput}>
                    <label htmlFor="attack" className={style.formLabel}>Ataque</label>
                    <input type="number" name="attack" placeholder="Ataque" value={form.attack} onChange={changeInputHandler} className={style.formInput}  />
            </div>
                {errors.attack && <p className={style.formError}>{errors.attack}</p>}

            <div className={style.formDivInput}>
                    <label htmlFor="defense" className={style.formLabel}>Defensa</label>
                    <input type="number" name="defense" placeholder="Defensa" value={form.defense} onChange={changeInputHandler} className={style.formInput}  />
            </div>
                {errors.defense &&<p className={style.formError}>{errors.defense}</p>}

            <div className={style.formDivInput}>
                    <label htmlFor="speed" className={style.formLabel}>Velocidad</label>
                    <input type="number" name="speed" placeholder="Velocidad" value={form.speed} onChange={changeInputHandler} className={style.formInput}  />
            </div>
                {errors.speed  &&<p className={style.formError}>{errors.speed}</p>}

            <div className={style.formDivInput}>
                    <label htmlFor="height" className={style.formLabel}>Altura</label>
                    <input type="number" name="height" placeholder="Altura" value={form.height} onChange={changeInputHandler} className={style.formInput} />
            </div>
                {errors.height && <p className={style.formError}>{errors.height}</p>}

            <div className={style.formDivInput}>
                    <label htmlFor="weight" className={style.formLabel}>Peso</label>
                    <input type="number" name="weight" placeholder="Peso" value={form.weight} onChange={changeInputHandler} className={style.formInput}  />
            </div>
        </form>
    </> 
    )
};

export default Form;