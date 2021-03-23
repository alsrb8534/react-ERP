import React from 'react';
import { Route, withRouter } from 'react-router-dom';

//===========================================게시판========================================================
import { default as NoticeListpage } from '../page/Notice/pages/NoticeListpage'; //2021-03-19 65기 김진영,이은경 --공지사항

// import { default as WritePage } from '../page/Notice/pages/WritePage'; //2021-03-19 65기 이은경 --글쓰기

import { default as PostPage } from '../page/Notice/pages/PostPage'; //2021-03-19 65기 이은경 --글하나보기

const BoardRoute = () => {
    return (
        <>
            {/*공지사항*/}
            <Route exact path="/app/hr/board/notice" component={NoticeListpage} />
            {/*******************2021-03-19 65기 김진영,이은경  *************************/}
            {/*공지사항*/}

            {/*글하나보기*/}
            <Route exact path="/app/hr/board/postpage/@:username/:boardSeq" component={PostPage} />
            {/*글하나보기*/}
            {/* 글쓰기 */}
            {/* <Route exact path="/app/hr/board/write" component={WritePage} /> */}
            {/*******************2021-03-19 65기 이은경  *************************/}
            {/* 글쓰기 */}
        </>
    );
};

export default withRouter(BoardRoute);
