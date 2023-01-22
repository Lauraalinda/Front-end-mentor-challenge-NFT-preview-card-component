import box from "../assets/images/box.jpg";
import iconethereum from "../assets/images/iconethereum.svg";
import iconclock from "../assets/images/iconclock.svg";
import avatar from "../assets/images/image-avatar.png";
function NFTcardcomponent() {
  return (
    <section>
    <div className="content">
    <div className="content-details">
      <div className="image">
        <img src={box}></img>
      </div>
      <div className="text">
        <div className="top-text">
          <h3>Equilibrium #3429</h3>
          <p>Our Equilibrium collection promotes balance and calm</p>
        </div>
        <div className="bottom-text">
          <div className="ethereum">
            <h6><img src={iconethereum}></img>0.041ETH</h6>
            <p><img src={iconclock}></img>3 days left</p>
          </div>
          <div className="line"></div>
          <div className="creator">
            <h6><img src={avatar}></img><p>Creation of <span>Jules Wyvern</span></p></h6>
          </div>
        </div>

      </div>
      </div>
    </div>
    </section>
  )
}

export default NFTcardcomponent