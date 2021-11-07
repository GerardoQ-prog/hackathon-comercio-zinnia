import React from 'react';

export const useForm = initialState => {
    const [state, setstate] = React.useState(initialState);
    const onChange = (value, field) => {
        setstate({
            ...state,
            [field]: value,
        });
    };

    const onReset = () => {
        setstate(initialState);
    };

    return {
        ...state,
        form: state,
        onChange,
        onReset,
    };
};
