
import { InputContainer } from './styles';

const Input = ({value, onChange}) => {
    return (
      <InputContainer>
       <input disabled value={value} onChange={onChange}/>
      </InputContainer>
    );
  }
  
  export default Input;