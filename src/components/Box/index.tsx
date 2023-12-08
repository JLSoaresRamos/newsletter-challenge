
import './box.scss';
import IconList from '../Icons/List';
import NewsletterForm from '../NewsletterForm';

export default function Box() {
  return (
    <>
      <img
        src="../assets/images/illustration-sign-up-mobile.svg"
        alt="A computer screen with a graph and a phone next to it."
        className="mobile-image"
      />
      <section className="wrapper">
        <div className="content">
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul>
            <li>
              <IconList />Product discovery and building what matters
            </li>
            <li>
              <IconList />Measuring to ensure updates are a success
            </li>
            <li>
              <IconList />And much more!
            </li>
          </ul>
          <NewsletterForm />
        </div>
        <img
          src="../assets/images/illustration-sign-up-desktop.svg"
          alt="A computer screen with a graph and a phone next to it."
          className="desktop-image"
        />
      </section>
    </>
  );
}
