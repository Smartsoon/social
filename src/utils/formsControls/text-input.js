import React from "react";
import styles from "../../blocks/Profile/Post/post.module.css";


export const FormControl = Element => ({input, meta, ...props}) => {
    const errorRules = meta.touched && meta.error;
    return (
            <div>
                <Element {...input} {...props} className={(errorRules ? styles.error : "")}/>
                {errorRules && <span>{meta.error}</span>}
            </div>
        )
};



// export const TextInput = ({input, meta, ...props}) => {
// debugger;
//     const errorRules = meta.touched && meta.error;
//     return (
//         <div>
//             <textarea {...input} {...props} className={(errorRules ? styles.error : "")}/>
//
//             {errorRules && <span>{meta.error}</span>}
//
//         </div>
//     )
// };
//
// export const Input = ({input, meta, ...props}) => {
// debugger;
//     const errorRules = meta.touched && meta.error;
//     return (
//         <div>
//             <input {...input} {...props} className={(errorRules ? styles.error : "")}/>
//
//             {errorRules && <span>{meta.error}</span>}
//
//         </div>
//
//     )
//
// };