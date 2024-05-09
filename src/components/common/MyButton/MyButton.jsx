import './MyButton.css';

const MyButton = ({ children, onClick, reverseColor = false, style }) => {
    return <button style={style} onClick={onClick} 
    className={reverseColor ? "btn btn_reverse_color" : "btn btn_standard"}>{children}</button>;
};

export default MyButton;