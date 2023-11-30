const hookCounter = Symbol('hookCounter');

function useState(initialState) {
    const index = useState[hookCounter] || 0;
    useState[hookCounter] = index + 1;

    if (typeof useState?.state === "undefined") useState.state = [];
    if (typeof useState.state[index] === 'undefined')
        useState.state[index] = {
            value: initialState,
        };

    const state = () => useState.state[index].value;
    const setState = (update) => {
        const newValue =
            typeof update === 'function'
                ? update(useState.state[index].value)
                : update;
        useState.state[index].value = newValue;
    };

    return [state, setState];
}

const [count, setCount] = useState(1);
