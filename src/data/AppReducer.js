function AppReducer(state, action) {
    let newState;
    switch(action.type) {
        case "edit":
            console.log("Updated Fields:", action.updatedFields);
            newState = state.map(item =>
                item.id === action.id
                  ? { ...item, name: action.newName } : item );
            break;
        case "rate":
            newState = state.map(person =>
                person.id === action.id
                  ? { ...person, rating: (person.rating + 1) % 11 } : person );
            break;
        case "select":
            newState = {
                ...state,
                selectedId: action.id,
            };
            break;
        case "delete":
            newState = state.filter(person => person.id !== action.id);
            break;
        default:
            newState = state;
    }
    // Save the new state to localStorage
    localStorage.setItem('appState', JSON.stringify(newState));
    return newState;
}

export default AppReducer;