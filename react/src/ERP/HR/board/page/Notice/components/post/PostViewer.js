import React from 'react';
import styled from 'styled-components';
import SubInfo from '../../common/layout/SubInfo';

// import { Helmet } from 'react-helmet-async';

import Responsive from '../../common/layout/Responsive';
import palette from '../../common/styles/palette';

const PostViewerBlock = styled(Responsive)`
    margin-top: 4rem;
`;
const PostHead = styled.div`
    border-bottom: 1px solid ${palette.gray[2]};
    padding-bottom: 3rem;
    margin-bottom: 3rem;
    h1 {
        font-size: 3rem;
        line-height: 1.5;
        margin: 0;
    }
`;

const PostContent = styled.div`
    font-size: 1.3125rem;
    color: ${palette.gray[8]};
`;

const PostViewer = ({ post, actionButtons }) => {
    console.log('뽀스트야들어왓냐?', post);
    const { boardSeq, username, title, writeDate, body, hit, good } = post;
    return (
        <PostViewerBlock>
            <PostHead>
                <h1>{title}</h1>

                <SubInfo username={username} publishedDate={writeDate} hasMarginTop />
                {/* <Tags tags={tags} /> */}
            </PostHead>
            {actionButtons}
            <PostContent dangerouslySetInnerHTML={{ __html: body }} />
        </PostViewerBlock>
    );
};

export default PostViewer;
