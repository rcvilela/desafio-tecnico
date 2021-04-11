import { http } from './Config';

export default {

    getAll:() => {
        return http.get();
    }
}