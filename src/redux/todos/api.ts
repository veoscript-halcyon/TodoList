import api from "../../helpers/Axios";

export const fetchTodos = async () => {
	try {
		const response = await api.get(`/api/get-todos`)
  	return response
	} catch (error) {
		console.error('fetch todos api error', error)
	}
}