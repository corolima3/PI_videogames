const validate = (object) => {
    let errors = {};
    
    if (!object.name) { errors.name = "El nombre es obligatorio";
    } else if (object.name.length <= 2) {
        errors.name = "El nombre debe tener por lo menos 3 caracteres";
    } else if (!/^([^0-9]*)$/.test(object.name)) {
        errors.name = "El nombre no puede contener números";
    };
    if (!object.image) { errors.image = "La imagen es obligatoria";
    } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(object.image)) {
        errors.image = "La imagen debe ser una url";
    };
    if(object.description.length < 15) {errors.description = "Descripcion debe tener al menos 15 caracteres"};
    if(object.rating < 0) {errors.rating = "Rating debe ser mayor a, 0"}
    if(isNaN(object.rating)) {errors.rating = "Rating debe de ser un numero"}
    //if(object.genres.length < 2) {errors.genres = "The game must have at least one genre"}
    if(object.platforms.length < 2) {errors.platforms = "the game must have at least one platform"}

    return errors;
};
export default validate;