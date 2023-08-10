import app from "./app"; // "./app" 파일에서 애플리케이션 객체를 가져옴
import env from "./util/validateEnv"; // "./util/validateEnv" 파일에서 환경 변수를 가져옴
import mongoose from "mongoose"; // mongoose 모듈을 가져옴

const port = env.PORT; // 환경 변수에서 포트 번호를 가져와 `port` 변수에 할당

mongoose.connect(env.MONGO_CONNECTION_STRING) // MongoDB에 연결하기 위해 Mongoose를 사용
    .then(() => {
        console.log("Mongoose connected"); // MongoDB 연결이 성공한 경우 "Mongoose connected" 메시지를 콘솔에 출력
        app.listen(port, () => {
            console.log("server running on port" + port); // 서버가 지정된 포트에서 실행 중인 경우 "server running on port"와 포트 번호를 콘솔에 출력
        });

    })
    .catch(console.error); // 연결 중에 발생한 에러를 콘솔에 출력

