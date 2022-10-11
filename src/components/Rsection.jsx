import '../Tcss.css';

function Rsection() {
  return (
    <section>
        <div>
            <img src={require('../image/react.png')} alt="React" />
        </div>
        <div class="content">
            <h1>React</h1>
            <p>사용자 인터페이스를 만들기 위한 JavaScript 라이브러리</p>
        </div>
    </section>    
  );
}

export default Rsection;