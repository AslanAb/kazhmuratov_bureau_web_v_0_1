import {$axios} from "@/app/api.js"

class AuthService {
	async main(email, password, type) {
		try {
			const { data } = await $axios.post(`/auth/${type}`, {
				email,
				password
			})

			if (data.token) localStorage.setItem('token', data.token)

			return data
		} catch (error) {
			throw new Error(error)
		}
	}
}

export default new AuthService()
