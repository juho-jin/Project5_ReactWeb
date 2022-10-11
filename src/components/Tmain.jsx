import '../Tcss.css';
// import Hsection from './Hsection';
// import Csection from './Csection';
// import Jsection from './Jsection';
// import Rsection from './Rsection';
import MYSection from './MYSection';
function Tmain() {
  return (
    <main>
      <MYSection h1="HTML"/>
      <MYSection h1="CSS"/>
      <MYSection h1="JavaScript"/>
      <MYSection h1="React"/>
      {/* <Hsection />
      <Csection />
      <Jsection />
      <Rsection /> */}
    </main>
  );
}

export default Tmain;