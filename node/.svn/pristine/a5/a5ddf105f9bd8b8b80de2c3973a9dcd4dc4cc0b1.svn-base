const boardDAO = require('../DAO/boardDAO');

exports.boardList = async () => {
  const result = await boardDAO.boardList();
  console.log('보드서비스까지왔닝');
  return result;
};

exports.getBoardPost = async (boardSeq) => {
  const result = await boardDAO.selectBoardPost(boardSeq);

  return result;
};
