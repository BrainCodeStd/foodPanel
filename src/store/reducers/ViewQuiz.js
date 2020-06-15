
const reducer = (state = [], action) => {
    console.log(action)
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]

        default: throw new Error('Unexpected action');
    }
};
export default reducer