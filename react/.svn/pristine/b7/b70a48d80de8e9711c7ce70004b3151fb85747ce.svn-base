import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { readPost, unloadPost } from '../../../../action/post/PostAction';
import PostViewer from '../../components/post/PostViewer';

const PostViewerContainer = ({ match, history, post }) => {
    console.log('match', match);
    // 처음 마운트될 때 포스트 읽기 API 요청
    const { boardSeq } = match.params;
    console.log('포포퐅트스트', post);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log('포스트 불러온다고??');
        dispatch(readPost(boardSeq));
        console.log('보드시퀀스값??', boardSeq);
        //언마운트될 때 리덕스에서 포스트 데이터 없애기
        return () => {
            dispatch(unloadPost());
        };
    }, [dispatch]);
    return <>{post && <PostViewer post={post} />}</>;
};

const mapStateToProps = state => {
    console.log('포포포포스트야제발', state);
    console.log('도둑이 제발저림', state.hr.post.post);
    return {
        post: state.hr.post.post
    };
};

export default connect(mapStateToProps)(withRouter(PostViewerContainer));
