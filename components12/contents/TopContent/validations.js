import * as Yup from "yup";
const validation=Yup.object().shape({
    text:Yup.string().required("Bu alanı boş bırakamazsın! ")
})
export default validation;