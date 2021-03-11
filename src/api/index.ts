import api from "axios"
import api_config from "../config/api.config";

const instance  = api.create({
    baseURL: api_config.url,
    headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdnQGdnLnJ1IiwidWlkX3VzZXIiOiJxM3RyaW9nYTlwaHJrc3YzaXl4ZCIsImlhdCI6MTYwNjgzMDIzOH0.39wDQ6pFYFQTaA6teNu7yyUvuTfmSJYUM4vFvUkhoAU'}
});

class Api {

    static async get(url: string) {
        return await instance.get(url);
    }

    static async post(url: string, data: any) {
        return await instance.post(url, data,);
    }

    static async put(url: string, data: any) {
        return await instance.put(url, data);
    }

    static async delete(url: string, data:any) {
        return await instance.delete(url, { data: data });
    }
}
export default Api;

