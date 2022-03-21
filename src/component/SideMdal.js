import React from 'react';
import { FaArrowLeft, FaArrowRight, FaFan } from 'react-icons/fa';
import '../Styles/sidemodal.css';
import { useRef, useEffect } from 'react';
// import Profile from '../Images/profil.jpg';

function SideModal({ opening, closeSideBar }) {
  // const ref = useRef();
  // console.log(ref);
  // useEffect(() => {
  //   const checkedOutsideClick = (e) => {
  //     console.log(ref.current.contains(e.target));
  //     if (ref.current && !ref.current.contains(e.target)) {
  //       closeSideBar();
  //     }
  //   };
  //   document.addEventListener('click', checkedOutsideClick);
  //   return () => {
  //     document.removeEventListener('click', checkedOutsideClick);
  //   };
  // }, [closeSideBar]);
  // console.log(opening);
  if (!opening) return null;
  return (
    <>
      <div className="sidemodal">
        <div className="side">
          <div className="directions">
            <div className="navigation">
              <button>
                <FaArrowLeft />
              </button>

              <button>
                <FaArrowRight />
              </button>
              <span>to navigate</span>
            </div>
            <div className="cancel">
              <button onClick={closeSideBar}>
                <FaFan />
              </button>
              <span>to close</span>
            </div>
          </div>
          <div className="street">
            <div className="street-name">
              <h3>
                6 Fremont Street
                <span>Active</span>
              </h3>
              <p>6 Fremont Street, Loyalton State, Boston</p>
              <hr />
            </div>
            <div className="profile">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                alt="profile-img"
              />
              <div className="profile-info">
                <h2>Ethan stone</h2>
                <p>Warsaw, Poland</p>
              </div>
            </div>
            <div className="time">
              <div className="checks">
                <div className="check-in-out">
                  <h1>Check-in</h1>
                  <p>22 Nov 2018</p>
                </div>
                <div className="check-in-out">
                  <h1 className="arrow">> </h1>
                </div>
                <div className="check-in-out">
                  <h1>Check-in</h1>
                  <p>22 Nov 2018</p>
                </div>
              </div>
              <div className="guest">
                <h1>Guest</h1>
                <p>7</p>
              </div>
            </div>
            <div className="bookings">
              <div className="codes first">
                <h3>Codes</h3>
              </div>
              <div className="codes rest">
                <h3>Device</h3>
              </div>
              <div className="codes rest">
                <h3>Bookings</h3>
              </div>
            </div>
            <div className="codes">
              <div className="access-codes">
                <h1>Access code</h1>
                <div className="code first">
                  <span>5</span>
                  <span>7</span>
                  <span>6</span>
                  <span>2</span>
                </div>
              </div>
              <hr />
              <div className="access-codes">
                <h1>Owner code</h1>
                <div className="code second">
                  <span>1</span>
                  <span>8</span>
                  <span>5</span>
                  <span>9</span>
                </div>
              </div>
              <hr />
              <div className="access-codes">
                <h1>Cleaner code</h1>
                <div className="code third">
                  <span>4</span>
                  <span>5</span>
                  <span>6</span>
                  <span>5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideModal;

// ReactDOM.render(<App />, appElement);
