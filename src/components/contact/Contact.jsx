import "./contact.sass";

const Contact = () => {
  return (
    <div className="contact">
      <div className="textContainer">
        <h1>
          Let's work <b>together</b>
        </h1>
        <div className="item">
          <h2>Mail</h2>
          <span>hello@react.dev</span>
        </div>
        <div className="item">
          <h2>Address</h2>
          <span>Long Ma Bac Giang</span>
        </div>
        <div className="item">
          <h2>Phone</h2>
          <span>+849 728 16606</span>
        </div>
      </div>
      <div className="formContainer">
        <form>
          <div className="title">
            <h1>Contact Me Now</h1>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Name"
            />

            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
            />

            <textarea
              className="form-control"
              id="message"
              rows="4"
              placeholder="Message"
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
