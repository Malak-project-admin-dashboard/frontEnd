import React, { useState, useRef } from "react";
import "./home.css";

const home = () => {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);
  const inputRef5 = useRef(null);
  const inputRef6 = useRef(null);

  const [formTitle, setFormTitle] = useState("Home Page");
  const [activeLink, setActiveLink] = useState("");
  const [formOne, setFormOne] = useState(false);
  const [formTow, setFormTow] = useState(false);
  const [formThree, setFormThree] = useState(false);
  const [formFour, setFormFour] = useState(false);

  const [drugObj, setDrugObj] = useState({})
  const [eventObj, setEventObj] = useState({})
  const [confOrderObj, setConfOrderObj] = useState({})

  const addDrugHandler = () => {
    const newTitle = "Add Drug Form";
    setFormTitle(newTitle);
    setActiveLink("addDrug");
    setFormOne(true);
    setFormTow(false);
    setFormThree(false);
    setFormFour(false);

  };

  const addEventHandler = () => {
    const newTitle = "Add Event Form";
    setFormTitle(newTitle);
    setActiveLink("addEvent");
    setFormOne(false);
    setFormTow(true);
    setFormThree(false);
    setFormFour(false);
  };

  const orderConfirmationHandler = () => {
    const newTitle = "Order Confirmations List";
    setFormTitle(newTitle);
    setActiveLink("orderConfirmation");
    setFormOne(false);
    setFormTow(false);
    setFormThree(true);
    setFormFour(false);
  };

  const showContactsHandler = () => {
    const newTitle = "Show Contacts List";
    setFormTitle(newTitle);
    setActiveLink("showContacts");
    setFormOne(false);
    setFormTow(false);
    setFormThree(false);
    setFormFour(true);
  };


  const getDrugDataHandler = () =>{
    const newDrugObj = {
      drugName:inputRef1.current.value,
      drugDesc:inputRef2.current.value,
      drugUrl:inputRef3.current.value
    }
    setDrugObj(newDrugObj)
    console.log(newDrugObj);

  }

  const getEventDataHandler = () =>{
    const newEventObj = {
      eventName:inputRef4.current.value,
      eventDesc:inputRef5.current.value,
      eventDate:inputRef6.current.value
    }
    setEventObj(newEventObj)
    console.log(newEventObj);
    
  }

  const AcceptConfirmationOrderHandler = () =>{
    const newEventObj = {
      orderTitle:'Card title',
      orderDesc:'Some quick example text to build on the card title and make up the bulk of the card content.',
      orderImage:'wwww.example.com',
      orderAccpetance: false
    }
    setConfOrderObj(newEventObj)
    console.log(newEventObj);
    
  }

  const RejectConfirmationOrderHandler = () =>{
    const newEventObj = {
      eventName:inputRef4.current.value,
      eventDesc:inputRef5.current.value,
      eventDate:inputRef6.current.value
    }
    setConfOrderObj(newEventObj)
    console.log(newEventObj);
    
  }

  return (
    <div>
      <header>
        <nav id="sidebarMenu" className="collapse d-lg-block sidebar bg-white ">
          <div className="position-sticky">
            <div className="list-group list-group-flush mx-3 mt-4">
              <p
                href="#"
                className="list-group-item list-group-item-action py-2 ripple "
                aria-current="true"
              >
                <i className="fas fa-tachometer-alt fa-fw me-3"></i>
                <span className="menu__title">Dashboard</span>
              </p>

              <a
                href="#"
                className={`list-group-item list-group-item-action py-2 ripple ${
                  activeLink === "addDrug" ? "active" : ""
                }`}
                aria-current="true"
                onClick={addDrugHandler}
              >
                <i className="fas fa-tachometer-alt fa-fw me-3"></i>
                <span>Add Drug</span>
              </a>

              <a
                href="#"
                className={`list-group-item list-group-item-action py-2 ripple ${
                  activeLink === "addEvent" ? "active" : ""
                }`}
                onClick={addEventHandler}
              >
                <i className="fas fa-chart-area fa-fw me-3"></i>
                <span>Add Event</span>
              </a>

              <a
                href="#"
                className={`list-group-item list-group-item-action py-2 ripple ${
                  activeLink === "orderConfirmation" ? "active" : ""
                }`}
                onClick={orderConfirmationHandler}
              >
                <i className="fas fa-lock fa-fw me-3"></i>
                <span>Orders Confirmations</span>
              </a>

              <a
                href="#"
                className={`list-group-item list-group-item-action py-2 ripple ${
                  activeLink === "showContacts" ? "active" : ""
                }`}
                onClick={showContactsHandler}
              >
                <i className="fas fa-chart-line fa-fw me-3"></i>
                <span>Show Contacts</span>
              </a>
            </div>
          </div>
        </nav>

        <nav
          id="main-navbar"
          className="navbar navbar-expand-lg navbar-light bg-white fixed-top"
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                src="https://www.amberit.com.bd/img/ivr/admin-dashboard.png"
                height="60"
                width="140"
                alt="MDB Logo"
                loading="lazy"
              />
            </a>
            <div className="nav__header">
              <h3>
                <pre>Admin Dashboard</pre>
              </h3>
            </div>
          </div>
        </nav>
      </header>

      <main className="main">
        <div className="main__header_title">
          <h1>{formTitle}</h1>
        </div>
      </main>

      {/* FORM 1 */}
      {formOne === true ? (
        <div className="form__add__drug">
          <form>
            <div className="mb-3 ">
              <label for="exampleInputEmail1" className="form-label">
                Drug Name:
              </label>
              <input
                ref={inputRef1}
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Drug Description:
              </label>
              <input
                ref={inputRef2}
                type="text"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Drug Image:
              </label>
              <input
                ref={inputRef3}
                type="text"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <button type="submit" className="btn btn-primary formOneSubmit" onClick={getDrugDataHandler}>

              Submit
            </button>
          </form>
        </div>
      ) : (
        ""
      )}

      {/* FORM 2 */}
      {formTow === true ? (
        <div className="form__add__drug">
          <form>
            <div className="mb-3 ">
              <label for="exampleInputEmail1" className="form-label">
                Event Title:
              </label>
              <input
                ref={inputRef4}
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Event Description:
              </label>
              <input
              ref={inputRef5}
                type="text"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Event Date:
              </label>
              <input 
              ref={inputRef6}
              type="date" className="form-control" />
            </div>

            <button type="submit" className="btn btn-primary formOneSubmit" onClick={getEventDataHandler}>
              Submit
            </button>
          </form>
        </div>
      ) : (
        ""
      )}

      {/* FORM 3 */}

      {formThree === true ? (
        <div className="card form__confirmation__order " styles="width: 20rem; margin-left:20px;">
          <img className="card-img-top" src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg?w=1800&t=st=1687618432~exp=1687619032~hmac=517fcedf09c92e355c1a1ac904de96612d503421ceb506442a2304e6ce82e73f" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button  className="btn btn-primary" onClick={AcceptConfirmationOrderHandler}>
              Accept
            </button>  <button  className="btn btn-primary" onClick={RejectConfirmationOrderHandler}>
              Reject
            </button>
          </div>
        </div>
        
        
      ) : (
        ""
      )}

      {/* FORM 4 */}

      {formFour === true ? (
        <div className="card form__contact__message" styles="width: 20rem; margin-left:20px;">
          
          <div className="card-body">
            <div className="message__title_email">
            <h5 className="card-userName">User Name:</h5>
            <h5 className="card-email">E-mail:</h5>
            </div>
            <h5 className="card-title">Phone Number:</h5>
            <p className="card-text">
              Message:
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default home;
