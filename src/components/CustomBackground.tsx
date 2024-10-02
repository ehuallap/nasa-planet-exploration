import './CustomBackground.css'
const CustomBackground = ({children}) => {
  
    return (
        <div className="bc">
            <div className="estrellas"></div>
            <div className="conten">{children}</div>
        </div>
    );
  };
  

export default CustomBackground