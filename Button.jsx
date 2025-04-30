const Button = ({ label, onClick, variant = "primary" }) => {
  const baseStyle = "px-4 py-2 rounded font-semibold transition";
  const styles = {
    primary: "bg-primary text-white hover:bg-primary-dark",
    secondary: "bg-secondary text-white hover:bg-secondary-dark"
  };

  return (
    <button className={`${baseStyle} ${styles[variant]}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;