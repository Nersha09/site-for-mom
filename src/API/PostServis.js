import axios from 'axios';

export default class PostServise {
    static async getAll(ord, limit, currentPage, found, header) {
            const response = await axios.get('http://127.0.0.1:8000/api/v1/notices/', {
                params: {
                    ordering: ord,
                    page_size: limit,
                    page: currentPage,
                    found: found,
                    header: header
                }
            });
            return response;
            
    }
    

    static async keepPost(images, header, body, found) {
        const form = new FormData();
        form.append('header', header);
        form.append('body', body);
        for (let i = 0 ; i < images.length ; i++) {
            form.append("image", images[i]);
        };
        form.append('date', new Date().toISOString().split('T')[0]);
        form.append('is_active', true);
        form.append('found', found)

        const response = await axios.post('http://127.0.0.1:8000/api/v1/notices/', form, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            
        } );
        return response
        

    }

    static async getById(id) {
        const response =await axios.get('http://127.0.0.1:8000/api/v1/notices/'+ id);
        return response;
    }

    
}; 