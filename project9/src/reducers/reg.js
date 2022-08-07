import axios from "axios";


const usernameRegExp= RegExp(
    /^[A-Za-z][A-Za-z0-9_]{2,29}$/
)
const emailRegExp = RegExp(
    /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
)
const passRegExp= RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
)



const registerReducer=(state={usernameError:'',emailError:'',passError:'',confirmPassError:'',username:''},action)=>{

    switch(action.type){
        
        case "username":
            if(action.username !=='' && usernameRegExp.test(action.username)){
                return {...state,
                    username:action.username,
                     usernameError: null};
            }else{
                return{...state,
                    usernameError: 'Username should start with an alphabet'}
            }
        case "email":
            if(action.email !=='' && emailRegExp.test(action.email)){
                return {...state,email:action.email, emailError: null}
            }else{
                return{...state,emailError: 'Email must be as: example@test.com'}
            }
        case "password":
            if(action.password !=='' && passRegExp.test(action.password)){
                return {...state,password:action.password, passError: null}
            }else{
                return{...state,passError: 'Password must be: at least 8 character|Containing numeric & upper,lower Character'}
            }
        case "confirmPass":
            if(action.confirmPass === state.password && action.password !== ''){
                return {...state, confirmPassError: null};
            }else{
                return{...state,confirmPassError: 'Password and Confirm password do not match'}
            }
        case "SIGNUP":
            if(state.usernameError == null && state.emailError == null && state.passError == null && state.confirmPassError == null) {

                axios.post('http://localhost/last9/project9/backend/reg.php?username='+state.username+'&email='+state.email+'&password='+state.password)
                .then(()=>{
                    console.log('registration success');
                    window.location="/login";
                })
               
            }else{
                return console.log('error');
            }
            break;
            
        default:
            return state;
    }   
}
export default registerReducer;