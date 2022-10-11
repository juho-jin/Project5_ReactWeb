import '../Tcss.css';

function Jsection() {
  return (
    <section>
        <div>
            <img src={require('../image/js.png')} alt="JavaScript" />
        </div>
        <div class="content">
            <h1>JavaScript</h1>
            <p>웹 페이지를 위한 스크립트 언어로 가벼운, 인터프리터 혹은 just-in-time 컴파일 프로그래밍 언어로, 일급 함수를 지원</p>
        </div>
    </section>
  );
}

export default Jsection;