var oracledb = require('oracledb'); //오라클을 사용하겟따.
var config = require('config/database.json').config; //오라클 아이디 정보 뭐 그런곳을 담는곳이라 생각하면 된다.  의존성을 위해 분리시켜놨다.
const { JtoCamel, doRelease } = require('util/');
oracledb.autoCommit = true; //java 와 달리 node 에서는 autocommit이 false 이다 true로 항상 바꾸어 사용하여야 된다.

exports.boardList = async (map) => {
  let connection;

  try {
    connection = await oracledb.getConnection(config);
    console.log('커넥션', connection);
    const result = await connection.execute(
      'SELECT * FROM NOTICE_BOARD',

      [],
      { outFormat: oracledb.OUT_FORMAT_OBJECT } // Json 형태로 넘어오도록 설정
    );
    console.log('결과는?!!', result);
    return JtoCamel(result.rows);
  } catch (err) {
    throw new Error(err.message);
  } finally {
    doRelease(connection);
  }
};

exports.selectBoardPost = async (boardSeq) => {
  let connection;

  try {
    connection = await oracledb.getConnection(config);
    console.log('커넥션', connection);
    const result = await connection.execute(
      '	SELECT *  FROM NOTICE_BOARD WHERE BOARD_SEQ  = :boardSeq ',

      {
        boardSeq: boardSeq,
      },
      { outFormat: oracledb.OUT_FORMAT_OBJECT } // Json 형태로 넘어오도록 설정
    );
    console.log('결과는?!!', result);
    return JtoCamel(result.rows[0]);
  } catch (err) {
    throw new Error(err.message);
  } finally {
    doRelease(connection);
  }
};
