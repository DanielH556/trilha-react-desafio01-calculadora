import { DivContainer } from "./styles";

const DisplayDiv = ({label}) => {
    return (
      <DivContainer>
        <div>
          {label}
        </div>
      </DivContainer>
    );
  }
  
  export default DisplayDiv;