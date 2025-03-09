import className from "classnames";
function Button({
  children,
  primary,
  secondary,
  success,
  danger,
  warning,
  outline,
  rounded,
  ...rest
}) {

  const finalClassName=className(rest.className,'px-3 py-1.5 border flex items-center',{
  'border-blue-500 bg-blue-500 ':primary,
  'border-gray-500 bg-gray-500 ':secondary,
  'border-green-500 bg-green-500 ':success,
  'border-red-500 bg-red-500 ':danger,
  'border-yellow-600 bg-yellow-300 ':warning,
  'bg-white':outline,
  'text-white':!outline,
  'rounded-full':rounded,
  'text-blue-500':outline&&primary,
  'text-gray-500':outline&&secondary,
  'text-green-500':outline&&success,
  'text-red-500':outline&&danger,
  'text-yellow-500':outline&&warning,
  });

  return <button {...rest} className={finalClassName}>{children}</button>;
}

Button.propTypes = {
  checkVariationValues: ({
    primary,
    secondary,
    success,
    danger,
    warning,
    outline,
  }) => {
    const count = Number(
      !!primary + !!secondary + !!success + !!danger + !!warning 
    );

    if (count > 1) {
      console.log("two variasion enteren on button");
    return new Error("only one variation is allowed ber button");
    
    }
  },
};
export default Button;
