import axios from 'axios';

export default class PostServise {
    static async getAll(ord, limit, currentPage, previous) {
            const response = await axios.get('http://127.0.0.1:8000/api/v1/notices/', {
                params: {
                    ordering: ord,
                    page_size: limit,
                    page: currentPage,
                    previous: previous
                }
            });
            return response;
            
    }
    static async getSorting(ordering,limit, currentPage, previous) {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/notices/', {
            params: {
                ordering: ordering,
                page_size: limit,
                page: currentPage,
                previous: previous
            }
        });
        return response;
    }
        
        



    static async keepPost(image,image_1, image_2, image_3, header, body, found) {
        const form = new FormData();
        form.append('header', header);
        form.append('body', body);
        form.append('image', image[0]);
        form.append('image_1', image_1[0]);
        form.append('image_2', image_2[0]);
        form.append('image_3', image_3[0]);
        form.append('date', new Date().toISOString().split('T')[0]);
        form.append('is_active', true);
        form.append('found', found)

        const response = await axios.post('http://127.0.0.1:8000/api/v1/notices/', form, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response
        

    }

    static async getById(id) {
        const response =await axios.get('http://127.0.0.1:8000/api/v1/notices/'+ id);
        return response;
    }
    
}; 