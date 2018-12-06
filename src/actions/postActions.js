import { FETCH_POSTS } from '@/actions/types'

export const fetchPosts = () => dispatch => {
    fetch('https://5c095f39ea3172001389cd69.mockapi.io/instagram/posts')
    .then(res => res.json())
    .then(posts => dispatch({
        type: FETCH_POSTS,
        payload: posts
    }))
}