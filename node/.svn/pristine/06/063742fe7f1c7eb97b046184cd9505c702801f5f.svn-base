const express = require('express'); //express 프레임워크
const router = express.Router(); //react Router랑 거의 같은 개념이다.

const EmpCodeController = require('./controller/empCodeController');
const boardListController = require('./board/controller/boardController');

router.get('/codeList/:deptName', EmpCodeController.findEmpCodeList);
router.get('/board/boardList', boardListController.boardList);
router.get('/board/boardPost/:boardSeq', boardListController.boardPost);

module.exports = router;
