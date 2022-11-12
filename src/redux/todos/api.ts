import api from "../../helpers/Axios";

export const fetchTodos = async () => {
	try {
		const response = await api.get('/api/todos')
  	return response
	} catch (error) {
		console.error('fetch todos api error', error)
	}
}

export const storeTodos = async (_args: { title: string, content: string }) => {
	try {
		const response = await api.post('/api/create-todo', {
			title: _args.title,
			content: _args.content 
		})
  	return response
	} catch (error) {
		console.error('fetch todos api error', error)
	}
}