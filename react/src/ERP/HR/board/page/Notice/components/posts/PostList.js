import React from 'react';
import styled from 'styled-components';
import Responsive from '../../common/layout/Responsive';
import Button from '../../common/layout/Button';
import palette from '../../common/styles/palette';

import SubInfo from '../../common/layout/SubInfo';
import Tags from '../../common/layout/Tags';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
//3.19 경로완료

const PostListBlock = styled(Responsive)`
    margin-top: 3rem;
`;

const WritePostButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 3rem;
`;

const PostItemBlock = styled.div`
    padding-top: 3rem;
    padding-bottom: 3rem;
    /* 맨 위 포스트는 padding-top 없음 */
    &:first-child {
        padding-top: 0;
    }
    & + & {
        border-top: 1px solid ${palette.gray[2]};
    }

    h2 {
        font-size: 2rem;
        margin-bottom: 0;
        margin-top: 0;
        &:hover {
            color: ${palette.gray[6]};
        }
    }
    p {
        margin-top: 2rem;
    }
`;

// const PostItem = ({ post }) => {
//     const { boardSeq, username, title, hit, body, good } = post;

//     return (
//         <PostItemBlock>
//             <h2>{boardSeq}</h2>
//             <h2>
//                 <Link to={`/ `}>{title}</Link>
//             </h2>
//         </PostItemBlock>
//     );
// };

const PostItem = ({ posts }) => {
    // const { boardSeq, username, title, writeDate, hit, good } = post;
    return (
        <PostItemBlock>
            <Table striped bordered hover variant="black">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                        <th>조회수</th>
                        <th>좋아요</th>
                    </tr>
                </thead>
                <tbody>
                    {/*  로딩 중 아니고, 포스트 배열이 존재할 때만 보여줌 */}
                    {posts &&
                        posts.boardList.map(post => (
                            <tr>
                                <td>{post.boardSeq} </td>
                                <td>
                                    <h6>
                                        <b>
                                            <Link
                                                to={`/app/hr/board/postpage/@${post.username}/${post.boardSeq}`}
                                                style={{ color: 'red' }}
                                            >
                                                {post.title}
                                            </Link>
                                        </b>
                                    </h6>
                                </td>
                                <td>
                                    <SubInfo username={post.username} />
                                </td>
                                <td>
                                    <SubInfo publishedDate={post.writeDate} />
                                </td>
                                <td>{post.hit} </td>
                                <td>{post.good} </td>
                            </tr>
                        ))}
                </tbody>
            </Table>
        </PostItemBlock>
    );
};

const PostList = ({ posts }) => {
    // 에러 발생 시
    console.log('뽀스트야들어왓냐?', posts);
    return (
        <PostListBlock>
            <WritePostButtonWrapper>
                <Button cyan to="/app/hr/board/post ">
                    새 글 작성하기
                </Button>
            </WritePostButtonWrapper>

            {/* {posts.boardList.map(post => ( */}
            <PostItem posts={posts} />
            {/* ))} */}
        </PostListBlock>
    );
};

export default PostList;
