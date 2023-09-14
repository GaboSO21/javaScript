import axios from "axios";

// Interfaz para sustitucion de Liskov
export interface HttpAdapter {
    get<T>(url: string): Promise<T>;
}

// Clase utilizada para inyectar dependencias en otra
// Inyeccion de dependencia: Volver a una clase autonoma, es decir, que los metodos implementados
// no dependan de paquetes de terceros
export class PokeApiAdapter implements HttpAdapter {

    private readonly axios = axios;

    // Generico T, estandar para poder utilizar interfaz en clase
    async get<T>(url: string): Promise<T> {
        const { data } = await this.axios.get<T>(url);
        return data;
    }

    async post(url: string, data: any) {
        // post 
        return;
    }

    async patch(url: string, data: any) {
        // patch 
        return;
    }

    async delete(url: string) {
        // delete 
        return;
    }

}

