import '../Tcss.css';

function Hsection() {
  return (
    <section>
        <div>
            <img src={require('../image/html.png')} alt="HTML" />
        </div>
        <div class="content">
            <h1>HTLM</h1>
            <p>HTML(HyperText Markup Language)은 웹을 이루는 가장 기초적인 구성 요소로, 웹 콘텐츠의 의미와 구조를 정의할 때 사용</p>
        </div>
    </section>
  );
}

export default Hsection;