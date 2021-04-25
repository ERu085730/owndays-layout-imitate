import tw1 from "./image/tw1.png";
import tw2 from "./image/calendar.svg";
import tw3 from "./image/frequency-main-pc.svg";
import g1 from "./image/glasses1.jpg";
import g2 from "./image/glasses2.jpg";
import g3 from "./image/glasses3.jpg";
import g4 from "./image/glasses4.jpeg";
import g5 from "./image/glasses5.jpg";
import g6 from "./image/glasses6.jpeg";
import pk1 from "./image/pick1.jpeg";
import pk2 from "./image/pick2.jpeg";
import pk3 from "./image/pick3.jpeg";
import pk4 from "./image/pick4.jpeg";
import pk5 from "./image/pick5.jpeg";
import pk6 from "./image/pick6.jpeg";
import pk7 from "./image/pick7.jpeg";
import pk8 from "./image/pick8.jpeg";
import pk9 from "./image/pick9.jpeg";
import jb from "./image/jb.png";
import linemain from "./image/line-main.svg";


const Main = () => {
    return (
        <div className="main">
            <section className="jumbotron">
                <ul>
                    <li><img src={tw1}/></li>
                </ul>
            </section>
            <section className="information">
                <ul>
                    <li className="linemain" >
                        <a href="#">
                            <img src={linemain}/>
                            <h2>使用手機或是電腦，<br />網路預約就這麼簡單</h2>
                        </a>
                    </li>
                    <li className="linemain2">
                        <a href="#">
                            <h2>
                                <small>網路預約超簡單!當日也OK</small>
                                <br/>
                                視力檢查預約
                                <img src={tw2}/>
                            </h2>
                            <p>
                                <span>無需等待</span>
                                <span>不用排隊</span>
                            </p>
                        </a>
                    </li>
                    <li className="linemain3">
                        <a href="#">
                            <img src={tw3}/>
                            <h2>不知道度數<br/>也沒關係</h2>
                        </a>
                    </li>
                </ul>
            </section>
            <section className="ranking">
                <h2>
                    <span className="ranking-title">眼鏡一週銷售排行榜</span>
                    <p>Weekly</p> Ranking
                </h2>
                <div className="ranking-sel">
                    <div className="ranking-sel-label">
                        <label>ALL</label>
                        <label>MEN</label>
                        <label>WOMEN</label>
                    </div>
                    <div className="ranking-img">
                        <ul>
                            <li>
                                <a>
                                    <img src={g1} />
                                    <p>John Dillinger</p>
                                    <p className="content">NT$2,990</p>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <img src={g2} />
                                    <p>+NICHE</p>
                                    <p className="content">NT$3,490</p>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <img src={g3} />
                                    <p>OWNDAYS SNAP</p>
                                    <p className="content">NT$3,490</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="ranking">
                <h2>
                    <span className="ranking-title">店員推薦款</span>
                    Recommended
                </h2>
                <div className="ranking-sel">
                    <div className="ranking-sel-label">
                        <label>ALL</label>
                        <label>MEN</label>
                        <label>WOMEN</label>
                    </div>
                    <div className="ranking-img">
                        <ul>
                            <li>
                                <a>
                                    <img src={g4} />
                                    <p>+NICHEr</p>
                                    <p className="content">NT$3,490</p>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <img src={g5} />
                                    <p>OWNDAYS SNAP</p>
                                    <p className="content">NT$3,490</p>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <img src={g6} />
                                    <p>Memory Metal</p>
                                    <p className="content">NT$3,490</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="ranking-all all">
                        <a href="#"><p>前往商品一覽</p></a>
                    </div>
                </div>
            </section>
            <section className="jumbotron2">
                <div>
                    <h1>OWNDAYS服務</h1>
                    <p>薄型非球面鏡片 <b>追加費用 NT$<span>0</span></b><br />
                       最快 <b><span>20</span></b>分鐘即可交件<br/>
                       非於本店購買的鏡框 <b>鏡片更換 NT$<span>1,990</span></b></p>
                    <div className="glasses-all">
                        <a href="#">前往鏡片介紹</a>
                    </div>
                </div>
                <img src={jb}/>
            </section>
            <section className="pick">
                <h2>Pick up</h2>
                <div className="pickup-grid">
                    <div className="item1"><img src={pk1}></img></div>
                    <div><img src={pk2}></img></div>
                    <div><img src={pk3}></img></div>
                    <div><img src={pk4}></img></div>
                    <div><img src={pk5}></img></div>
                    <div><img src={pk6}></img></div>
                    <div><img src={pk7}></img></div>
                    <div><img src={pk8}></img></div>
                    <div><img src={pk9}></img></div>
                </div>
                <div className="pickup-all all">
                        <a href="#"><p>VIEW MORE</p></a>
                    </div>
            </section>
        </div>
    );
}
 
export default Main;