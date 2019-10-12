export const Types = {
  INITIAL_DATA: 'initial/INITIAL_DATA',
}

export const Creators = {
  initialData: () => {
    return {
      type: Types.INITIAL_DATA,
      payload: "234",
    }
  },
}

const INITIAL_STATE = {
  addInitial: [],
}

export default function initial(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.INITIAL_DATA:
      return {
        ...state,
        addInitial: action.payload,
      }
    default:
      return state
  }
}
