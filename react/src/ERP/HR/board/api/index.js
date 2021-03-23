import axios from 'Api/hrApi';

export const writePost =
    // ({ title, body, tags, userId }) =>
    // axios.post('/board/boardWritePost.do', { title, body, tags, userId });
    action =>
        axios({
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            url: '/board/boardWritePost.do',
            params: { data: action.data }
        })
            .then(function(response) {
                alert('등록완료');
            })
            .catch(function(error) {
                alert('등록실패');
            });

export const readPost = action => {
    return axios.get(`http://localhost:4000/erp/hr/board/boardPost/${action.payload}`);
};

export const listPosts = () => axios.get('http://localhost:4000/erp/hr/board/boardList');

export const updatePost =
    // ({ id, title, body, tags }) =>
    // client.post(`/api/posts/update/${id}`, {
    //     title,
    //     body,
    //     tags,
    // });
    action =>
        axios.post(
            '/board/updatePost.do',
            {
                post: action.payload.post
            },
            { headers: { 'Content-Type': 'application/json' } }
        );

export const removePost =
    //  (id) => client.delete(`/api/posts/${id}`);
    action =>
        axios.post(
            '/board/removePost.do',
            {
                removeData: action.payload.data
            },
            { headers: { 'Content-Type': 'application/json' } }
        );
