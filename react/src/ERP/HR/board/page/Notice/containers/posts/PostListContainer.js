import React, { useEffect } from 'react';
import qs from 'qs';
import { withRouter } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import PostList from '../../components/posts/PostList';
import { listPosts } from '../../../../action/posts/PostsAction';
//3.19 임포트완료  qs 설치안함.

const PostListContainer = ({ posts }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        console.log('포스트리스트는 불러온다고??');

        dispatch(listPosts());
    }, [dispatch]);

    return (
        <>
            <PostList posts={posts} />
        </>
    );
};

const mapStateToProps = state => {
    return {
        posts: state.hr.posts.posts
    };
};

export default connect(mapStateToProps)(withRouter(PostListContainer));
