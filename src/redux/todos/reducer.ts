import * as types from './action-types'

interface Action {
	type: string
	payload: any
}

interface InitialState {
	isLoading: boolean
  isError: boolean
  error: string
	
	todos: any
	id: string
	title: string
	content: string
}

const initialState: InitialState = {
	isLoading: false,
  isError: false,
  error: '',
	
	todos: [],
	id: '',
	title: '',
	content: ''
}

export default function (state = initialState, action: Action) {
	switch (action.type) {
		case types.SET_TODO_TITLE:
			return {
				...state,
				title: action.payload.title
			}
		case types.SET_TODO_CONTENT:
			return {
				...state,
				content: action.payload.content
			}
		case types.RESET_TODO_FORM_STATE:
			return {
				...state,
				id: '',
				title: '',
				content: '',
			}
		case types.GET_TODOS_REQUEST:
			return {
				...state,
				isLoading: true,
        isError: false
			}
		case types.GET_TODOS_SUCCESS: 
			return {
				...state,
				todos: action.payload,
				isLoading: false,
        isError: false
			}
		case types.GET_TODOS_ERROR:
			return {
				...state,
				isLoading: false,
        isError: true,
			}
		case types.CREATE_TODOS_REQUEST:
			return {
				...state,
				isLoading: true,
				isError: false,
			}
		case types.CREATE_TODOS_SUCCESS:
			return {
				...state,
				title: action.payload.title,
				content: action.payload.content,
				isLoading: false,
				isError: false
			}
		case types.CREATE_TODOS_ERROR:
			return {
				...state,
				isLoading: false,
				isError: true,
			}
			case types.DELETE_TODOS_REQUEST:
			return {
				...state,
				isLoading: true,
				isError: false,
			}
		case types.DELETE_TODOS_SUCCESS:
			return {
				...state,
				id: action.payload.id,
				isLoading: false,
				isError: false
			}
		case types.DELETE_TODOS_ERROR:
			return {
				...state,
				isLoading: false,
				isError: true,
			}
		default:
			return state
	}
}