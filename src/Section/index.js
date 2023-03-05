import "./style.css";

const Section = ({ children, className }) => 
<fieldset className={className}>{children}</fieldset>;

export default Section;
