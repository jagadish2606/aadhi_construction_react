import React from 'react';

const Button = ({ label, color, id, action, isDisable, icon, loading, size,width, fullWidth, tooltip
}) => {
    // const getColorClass = () => {
    //     const base = {
    //         primary: 'blue',
    //         danger: 'red',
    //         success: 'green',
    //         secondary: 'gray'
    //     }[color] || 'blue';

    //     const solid = `bg-${base}-500 text-white hover:bg-${base}-600`;
    //     const outline = `border border-${base}-500 text-${base}-500 hover:bg-${base}-50`;
    //     const ghost = `text-${base}-500 hover:bg-${base}-100`;

    //     switch (variant) {
    //         case 'outline':
    //             return outline;
    //         case 'ghost':
    //             return ghost;
    //         case 'solid':
    //         default:
    //             return solid;
    //     }
    // };

    const getColorClass = () =>{
        switch(color){
            case 'primary':
                return 'text-white bg-blue-500';
            case 'danger':
                return 'text-white bg-red-500';
            case 'success':
                return 'text-white bg-green-500';
        }
    }

    const getSizeClass = () => {
        switch (size) {
            case 'sm':
                return 'text-sm px-3 py-1.5 h-[30px]';
            case 'lg':
                return 'text-lg px-5 py-3 h-[40px]';
            case 'md':
            default:
                return 'text-base px-4 py-2 h-[35px]';
        }
    };

    return (
        <button
            id={id}
            onClick={action}
            disabled={isDisable || loading}
            title={tooltip}
            className={`flex items-center justify-center gap-2 rounded transition duration-15 ${width}
                ${getColorClass()} 
                ${getSizeClass()} 
                ${fullWidth ? 'w-full' : ''} 
                ${isDisable || loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
            `}
        >
            {loading ? (
                <span className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full"></span>
            ) : (
                icon && <span>{icon}</span>
            )}
            <span>{loading ? 'Loading...' : label}</span>
        </button>
    );
};

export default Button;
