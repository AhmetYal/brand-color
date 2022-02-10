import { useState } from "react";
import Modal from "react-modal";

function SideBar() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };
  //   const closeModal = () => {
  //     setModalIsOpen(false);
  //   };
  //   const openModal = () => {
  //     setModalIsOpen(true);
  //   };

  return (
    <>
      <aside className="sidebar">
        <div className="logo">
          <a href="/#" onClick={toggleModal}>
            Brand <b>Colors</b>
          </a>
        </div>
        <div className="description">
          The biggest collection of official brand codes around.
        </div>
        <nav className="menu">
          <ul>
            <li>
              <a href="/#">About BrandColors</a>
            </li>
          </ul>
        </nav>
      </aside>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        className="about-modal"
        overlayClassName="about-modal-overlay"
      >
        <button onClick={toggleModal}>close</button>
        <h3>About BrandColors</h3>
        <p>
          BrandColors was created by DesignBombs. The goal was to create a
          helpful reference for the brand color codes that are needed most
          often.
        </p>
        <p>
          It's been featured by Smashing Magazine, CSS-Tricks, Web Design Depot,
          Tuts+, and over 2 million pageviews. There are now over 600 brands
          with 1600 colors and the collection is always growing.
        </p>
      </Modal>
    </>
  );
}

export default SideBar;
