import React, { useState } from "react";
import { Modal, Button, Form, Tabs, Tab, Row, Col } from "react-bootstrap";

const Popup = () => {
  // join-modal//

  const [join, setJoin] = useState(false);

  const joinClose = () => setJoin(false);
  const joinShow = () => setJoin(true);

  // join-modal//

  //   2
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // 3
  const [upgrade, setUpgrade] = useState(false);

  const upgradeClose = () => setUpgrade(false);
  const upgradeShow = () => setUpgrade(true);

  // 4
  const [pick, setpick] = useState(false);

  const pickClose = () => setpick(false);
  const pickShow = () => setpick(true);

  // 5
  const [post, setpost] = useState(false);

  const postClose = () => setpost(false);
  const postShow = () => setpost(true);
  // 6
  const [team, setteam] = useState(false);

  const teamClose = () => setteam(false);
  const teamShow = () => setteam(true);

  // 7
  const [password, setpassword] = useState(false);

  const passwordClose = () => setpassword(false);
  const passwordShow = () => setpassword(true);
  // 8
  const [logout, setlogout] = useState(false);

  const logoutClose = () => setlogout(false);
  const logoutShow = () => setlogout(true);

  // 9
  const [reqFriend, setreqFriend] = useState(false);

  const reqFriendClose = () => setreqFriend(false);
  const reqFriendShow = () => setreqFriend(true);

  // 10
  const [alert, setalert] = useState(false);

  const alertClose = () => setalert(false);
  const alertShow = () => setalert(true);

  // 11
  const [subscribe, setsubscribe] = useState(false);

  const subscribeClose = () => setsubscribe(false);
  const subscribeShow = () => setsubscribe(true);
  return (
    <div>
      <Button onClick={joinShow}>joinShow</Button>
      <Button onClick={handleShow}>handleShow</Button>
      <Button onClick={upgradeShow}>upgradeShow</Button>
      <Button onClick={pickShow}>pickShow</Button>
      <Button onClick={postShow}>Create Post</Button>
      <Button onClick={teamShow}>Team info</Button>
      <Button onClick={passwordShow}>Change Password</Button>
      <Button onClick={logoutShow}>logout</Button>
      <Button onClick={reqFriendShow}>Request friendship</Button>
      <Button onClick={alertShow}>Alert</Button>
      <Button onClick={subscribeShow}>Subscription</Button>

      {/* join-modal */}

      <div>
        <Modal centered show={join} onHide={joinClose} className="common-modal">
          <Modal.Header closeButton className="color-header"></Modal.Header>
          <Modal.Body className="pb-1">
            <div className="modal-common-body">
              <div className="text-center mb-5">
                <img src="./assets/images/join-leage.png" alt="" />
              </div>

              <div className="modal-body-heading text-center">
                <h2>Join the Premier League competition</h2>
                <p>
                  Once you join, you can make predictions for a chance to win
                  prizes, and play against users around the world.
                </p>
                <span>
                  To join more than 3 competitions please upgrade your plan.
                </span>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button className="theme-btn">Join Now!</Button>
          </Modal.Footer>
        </Modal>
      </div>

      {/* join-modal */}

      {/* with-header */}

      <div>
        <Modal
          centered
          show={show}
          onHide={handleClose}
          className="common-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <img src="./assets/images/lock.svg" alt="" />
              Private Competition
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="modal-common-body">
              <span className="join-text">
                Only invited friends can join your competition.
              </span>

              <Form>
                <Form.Group>
                  <Form.Control type="text" placeholder="Competition name*" />
                </Form.Group>
                <Form.Group>
                  <Form.Control type="text" placeholder="1st Prize*" />
                </Form.Group>

                <Button className="prize-btn">+ Add more prizes</Button>

                <div className="inner-content">
                  <h3 className="select-title mb-3">Select your competition</h3>
                </div>
              </Form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button className="theme-btn" onClick={handleShow}>
              Create Competition
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div>
        <Modal
          centered
          show={upgrade}
          onHide={upgradeClose}
          className="common-modal upgrade_modal"
        >
          <Modal.Header closeButton className="color-header"></Modal.Header>
          <Modal.Body className="pb-1">
            <div className="modal-common-body">
              <div className="text-center mb-5">
                <img src="./assets/images/upgade_acc.svg" alt="" />
              </div>

              <div className="modal-body-heading text-center">
                <h2>
                  To participate in more competitions, you need to upgrade your
                  plan
                </h2>
                <p>
                  Your current plan allows you to be part of 3 competitions.
                  Click here to see our other plans.
                </p>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="pt-2">
            <Button className="theme-btn">
              <img src="./assets/images/upgrade_star.svg" alt="" /> Upgrade
              account
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <div>
        <Modal
          centered
          show={pick}
          onHide={pickClose}
          className="common-modal pick_modal"
        >
          <Modal.Header closeButton>
            <Modal.Title className="pick_header">
              <h3>
                Ethihad Stadium <span> 6 FEB 4:00pm</span>
              </h3>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="modal-common-body text-center mt-3 mt-sm-5">
              <div className="league_detail_row">
                <div className="brand_cols">
                  <figure>
                    {" "}
                    <img src="./assets/images/citylogo.svg" alt="" />
                  </figure>
                  <strong>Manchester City</strong>
                  <i>4th</i>
                  <div className="d-flex justify-content-center mt-2">
                    <h4 className="l_bg mb-0">L</h4>
                    <h4 className="w_bg mb-0">W</h4>
                    <h4 className="d_bg mb-0">D</h4>
                  </div>
                </div>
                <div className="league_center_cols">
                  <div className="goals-count">
                    <span className="border-1">2</span>
                    <span>:</span>
                    <span className="border-1">2</span>
                  </div>
                </div>
                <div className="brand_cols">
                  <figure>
                    {" "}
                    <img src="./assets/images/citylogo.svg" alt="" />
                  </figure>
                  <strong>Manchester City</strong>
                  <i>12th</i>
                  <div className="d-flex justify-content-center mt-2">
                    <h4 className="l_bg mb-0">L</h4>
                    <h4 className="w_bg mb-0">W</h4>
                    <h4 className="d_bg mb-0">D</h4>
                  </div>
                </div>
              </div>
              <div className="histric_result_row mt-4">
                <div className="result_value_cols">
                  <i>Historic Results</i>
                  <ul className="result_value_inner border-0 mb-0   ">
                    <li>
                      {" "}
                      <strong>34</strong>
                      <span>Wins</span>
                    </li>
                    <li>
                      {" "}
                      <strong>17</strong>
                      <span>Draws</span>
                    </li>
                    <li>
                      {" "}
                      <strong>28</strong>
                      <span>Wins</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="pt-0">
            <Button className="theme-btn" onClick={pickShow}>
              Pick now!
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <div>
        <Modal
          centered
          show={post}
          onHide={postClose}
          className="common-modal post_modal"
        >
          <Modal.Header closeButton>
            <Modal.Title className="pick_header">
              <h3>Create Post</h3>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="pt-4">
            <div className="modal-common-body text-center position-relative mt-0">
              <Form>
                <Form.Group
                  className="post_comment w-100 "
                  controlId="exampleForm.ControlTextarea1"
                >
                  <div className="d-flex align-items-start">
                    <img src="./assets/images/oval.svg" alt="" />
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Write your post here..."
                      className="border-0 rounded-0 h-100"
                    />
                  </div>

                  <div className="pic_upload">
                    <div className="pic_img">
                      <input type="file" />
                      <span>
                        {" "}
                        <img src="./assets/images/pic_upload.png" alt="" />
                      </span>

                      <h5>Add Photo</h5>
                      <i>or drag here</i>
                    </div>
                  </div>
                </Form.Group>
              </Form>
            </div>
          </Modal.Body>
          <Modal.Footer className="pt-0">
            <Button className="theme-btn" onClick={postShow}>
              Post
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div>
        <Modal
          centered
          show={team}
          onHide={teamClose}
          className="common-modal team_modal"
        >
          <Modal.Header closeButton>
            <Modal.Title className="pick_header">
              <h3>Manchester United</h3>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="pt-3 pt-sm-5">
            <div className="modal-common-body text-center position-relative mt-0">
              <div className="brand_cols">
                <figure className="mb-4">
                  {" "}
                  <img src="./assets/images/citylogo.svg" alt="" />
                </figure>

                <ul className="result_value_inner border-0 mb-0  justify-content-around">
                  <li>
                    {" "}
                    <strong>34</strong>
                    <span>Wins</span>
                    <h4 className="l_bg mb-0 me-0 mt-2">46%</h4>
                  </li>
                  <li>
                    {" "}
                    <strong>17</strong>
                    <span>Draws</span>
                    <h4 className="w_bg mb-0 me-0 mt-2">29%</h4>
                  </li>
                  <li>
                    {" "}
                    <strong>28</strong>
                    <span>Wins</span>
                    <h4 className="d_bg mb-0 me-0 mt-2">25%</h4>
                  </li>
                </ul>
                <ul className="result_value_inner winner_info border-0 mb-0 mt-4 pb-5 mb-5 justify-content-around">
                  <li>
                    {" "}
                    <img src="./assets/images/home.svg" alt="" />
                    <h3>Home Wins</h3>
                    <h4 className="">6/12</h4>
                  </li>
                  <li>
                    {" "}
                    <img src="./assets/images/plane.svg" alt="" />
                    <h3>Away Wins</h3>
                    <h4 className="">6/12</h4>
                  </li>
                  <li>
                    {" "}
                    <img src="./assets/images/player.png" alt="" />
                    <h3>Top Scorer</h3>
                    <h4 className="">6/12</h4>
                  </li>
                </ul>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
      <div>
        <Modal
          centered
          show={password}
          onHide={passwordClose}
          className="common-modal cPassword_modal"
        >
          <Modal.Header closeButton>
            <Modal.Title className="pick_header">
              <h3>Change Password</h3>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="pt-3 pt-md-5">
            <div className="modal-common-body text-center mt-0">
              <Form>
                <div className="row">
                  <div className="col-12">
                    <div className="d-flex align-items-center">
                      <img
                        src="./assets/images/lock.svg"
                        alt=""
                        className="me-4"
                      />
                      <Form.Group
                        controlId="formCurrentPassword"
                        className="w-100"
                      >
                        <Form.Control
                          type="password"
                          placeholder="Current Password"
                        />
                      </Form.Group>
                    </div>
                  </div>
                  <div className="col-12">
                    {" "}
                    <div className="d-flex align-items-center">
                      <img
                        src="./assets/images/lock.svg"
                        alt=""
                        className="me-4"
                      />
                      <Form.Group
                        controlId="formBasicPassword"
                        className="w-100"
                      >
                        <Form.Control
                          type="password"
                          placeholder="New Password"
                        />
                      </Form.Group>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-flex  align-items-center">
                      <img
                        src="./assets/images/lock.svg"
                        alt=""
                        className="me-4"
                      />
                      <Form.Group controlId="formNewPassword" className="w-100">
                        <Form.Control
                          type="password"
                          placeholder="Repeat New Password"
                        />
                      </Form.Group>
                    </div>
                  </div>
                </div>
              </Form>
            </div>
          </Modal.Body>
          <Modal.Footer className="pt-0">
            <Button className="theme-btn" onClick={handleShow}>
              Send
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <div>
        <Modal
          centered
          show={logout}
          onHide={logoutClose}
          className="common-modal logout_modal"
        >
          <Modal.Header closeButton>
            <Modal.Title className="pick_header">
              <h3>Logout</h3>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="">
            <div className="modal-common-body text-center mt-0">
              <h5>Are you sure you want to quit?</h5>
            </div>
          </Modal.Body>
          <Modal.Footer className="pt-0">
            <Button className="theme-btn" onClick={handleShow}>
              Quit now
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <div>
        <Modal
          centered
          show={reqFriend}
          onHide={reqFriendClose}
          className="common-modal reqFriend_modal"
        >
          <Modal.Header closeButton className="py-4"></Modal.Header>
          <Modal.Body className="pt-2">
            <div className="modal-common-body text-center mt-0">
              <div className="friend_img">
                <img src="./assets/images/player.png" alt="" />
              </div>
              <h3>
                Alice Marshaw, <i>Cary NC</i>
              </h3>
              <h4>
                Global Ranking <span> 25th</span>
              </h4>
              <span className="pink_bg">510 pts</span>
            </div>
          </Modal.Body>
          <Modal.Footer className="pt-0">
            <Button className="theme-btn" onClick={handleShow}>
              Request friendship
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <div>
        <Modal
          centered
          show={alert}
          onHide={alertClose}
          className="common-modal alert_modal"
        >
          <Modal.Header closeButton>
            <Modal.Title className="pick_header">
              <h3>Alerts</h3>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="">
            <div className="modal-common-body mt-0">
              <div className="d-flex justify-content-between align-items-center py-3 px-0 py-3 p-sm-4 logout_main">
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  consectetur adipiscing elit, sed do eiusmod.
                </p>
                <div className="action_notify">
                  <span className="not_active"></span>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center py-3 px-0 py-3 p-sm-4 logout_main">
                <p className="m-0 d-flex align-items-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  <span className="right_tag pink_bg position-static text-center m-auto ">
                    10 pts
                  </span>
                </p>

                <a href="" className="action_notify text-end">
                  <img src="./assets/images/delete_gray.svg" alt="" />
                </a>
              </div>
              <div className="d-flex justify-content-between align-items-center py-3 px-0 py-3 p-sm-4 logout_main">
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  consectetur adipiscing elit, sed do eiusmod.
                </p>
                <a text-end className="action_notify text-end">
                  <img src="./assets/images/delete_gray.svg" alt="" />
                </a>
              </div>
              <div className="d-flex justify-content-between align-items-center py-3 px-0 py-3 p-sm-4 logout_main">
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  consectetur adipiscing elit, sed do eiusmod.
                </p>
                <a className="action_notify text-end">
                  <img src="./assets/images/delete_gray.svg" alt="" />
                </a>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>

      <div>
        <Modal
          centered
          show={subscribe}
          onHide={subscribeClose}
          className="common-modal subscribe_modal"
        >
          <Modal.Header closeButton>
            <Modal.Title className="pick_header">
              <h3>Subscription</h3>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <div className="subscribe_head">
              <h4>
                <img
                  src="./assets/images/red_diamond.svg"
                  alt=""
                  className="me-3"
                />
                Premium ($4,99/month)
              </h4>
            </div>
            <p className="mt-5">
              After clicking on the “Paypal” button, you will be directed to a
              secure gateway for payment.
            </p>
            <Form>
              <span className="custom_check mb-2">
                By proceeding, you have read and agreed to Fandom Royale
                <a href="#"> Terms and Conditions </a> and
                <a href="#"> Privacy Policy</a>
                &nbsp; <input type="checkbox" />
                <span className="check_indicator">&nbsp;</span>
              </span>
            </Form>
          </Modal.Body>
          <Modal.Footer className="pt-0">
            <Button className="theme-btn" onClick={handleShow}>
              Buy now (Paypal)
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      {/* with-header */}
    </div>
  );
};

export default Popup;
