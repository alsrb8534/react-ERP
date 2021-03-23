const boardService = require('../service/boardService');
const { delivery } = require('util/');

let data;

exports.boardList = async (request, response) => {
  try {
    data = {
      errorMsg: 'success',
      errorCode: 0,
      boardList: await boardService.boardList(),
    };
  } catch (err) {
    data = {
      errorCode: -1,
      errorMsg: err.message,
    };
  } finally {
    delivery(response, data);
  }
};

//글하나불러오기
exports.boardPost = async (request, response) => {
  const boardSeq = request.params.boardSeq;
  console.log('서버컨트롤러보드시퀀스', boardSeq);

  try {
    data = {
      errorMsg: 'success',
      errorCode: 0,
      boardPost: await boardService.getBoardPost(boardSeq),
    };
  } catch (err) {
    data = {
      errorCode: -1,
      errorMsg: err.message,
    };
  } finally {
    delivery(response, data.boardPost); //여기서 boardPost로 뽑아주니 바로 안겹치고나옴. util로 이동
  }
};
