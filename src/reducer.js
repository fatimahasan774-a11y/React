export const initialState = {
  contacts: [],
  editingContact: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case "update":
      return {
        ...state,
        contacts: state.contacts.map((c) =>
          c.id === action.payload.id ? { ...c, ...action.payload } : c
        ),
        editingContact: null,
      };
    case "delete":
      return {
        ...state,
        contacts: state.contacts.filter((c) => c.id !== action.payload),
        editingContact:
          state.editingContact && state.editingContact.id === action.payload
            ? null
            : state.editingContact,
      };
    case "favorite":
      return {
        ...state,
        contacts: state.contacts.map((c) =>
          c.id === action.payload ? { ...c, favorite: !c.favorite } : c
        ),
      };
    case "edit":
      return { ...state, editingContact: action.payload };
    case "cancelEdit":
      return { ...state, editingContact: null };
    default:
      return state;
  }
};