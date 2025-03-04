import './Home.css';
import event from '../images/event.jpg';
import event2 from '../images/event2.jpg';
import event3 from '../images/event3.jpg';
import event4 from '../images/event4.jpg';
import event5 from '../images/event5.jpg';
import event6 from '../images/event6.jpg';
import event7 from '../images/event7.jpg';
import event8 from '../images/event8.jpg';
import event9 from '../images/event9.jpg';
import event10 from '../images/event10.jpg';
import event11 from '../images/event11.jpg';

function Home(){
    return( 
        <>
        <br></br>
        <div className="gallery">
        <div className="cards">
            <div className="card">
                <img src={event}></img>
            </div>

            <div className="card">
                <img src={event8}></img>
                     </div>

<div className="card">
<img src={event9}></img>

</div>
<div className="card">
    <img src={event4}></img>
</div>
<div className="card">
    <img src={event5}>

    </img>
    </div>
<div className="card">
    <img src={event6}></img>
</div>
<div className="card">
    <img src={event7}></img>
</div>
<div className="card">
    <img src={event2}></img>
</div>
<div className="card">
    <img src={event10}></img>
</div>
        </div>
        </div>

        </>
    )

}
export default Home;