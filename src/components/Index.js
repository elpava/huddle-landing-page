import React from 'react';
import Image from './Image';

import '../scss/styles.scss';

export default function Index() {
  return (
    <React.Fragment>
      <header className="header">
        <div className="header-container">
          <Image file="logo.svg" alt="logo" className="header-logo" />
          <button className="btn btn-secondary header-btn" type="button">
            try it free
          </button>
        </div>
      </header>
      <main className="main">
        <section className="section build">
          <h1 className="mb-1-half">build the community your fans will love</h1>
          <p className="mb-3">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <button className="btn btn-primary build-btn mb-7" type="button">
            get started for free
          </button>
          <Image file="screen-mockups.svg" alt="hero image" className="image" />
        </section>
        <section className="section statistics">
          <div className="statistics-communities">
            <span className="number">1.4k+</span>
            <span className="text">Communities Formed</span>
          </div>
          <div className="statistics-messages">
            <span className="number">2.7m+</span>
            <span className="text">Messages Sent</span>
          </div>
        </section>
        <section className="section grow">
          <div className="grow-container">
            <Image
              file="illustration-grow-together.svg"
              alt="illustration grow together"
              className="image mb-5"
            />
            <div className="grow-text">
              <h3 className="mb-1">grow together</h3>
              <p>
                Generate meaningful discussions with your audience and build a
                strong, loyal community. Think of the insightful conversations
                you miss out on with a feedback form.
              </p>
            </div>
          </div>
        </section>
        <section className="section flowing">
          <div className="flowing-container">
            <Image
              file="illustration-flowing-conversation.svg"
              alt="illustration flowing conversation"
              className="image mb-5"
            />
            <div className="flowing-text">
              <h3 className="mb-1">flowing conversations</h3>
              <p>
                You wouldn't paginate a conversation in real life, so why do it
                online? Our threads have just-in-time loading for a more natural
                flow.
              </p>
            </div>
          </div>
        </section>
        <section className="section users">
          <div className="users-container">
            <Image
              file="illustration-your-users.svg"
              alt="illustration your users"
              className="image mb-5"
            />
            <div className="users-text">
              <h3 className="mb-1">your users</h3>
              <p>
                It takes no time at all to integrate Huddle with your app's
                authentication solution.This means, once signed in to your app,
                your users can start chatting immediately.
              </p>
            </div>
          </div>
        </section>
        <section className="section ready">
          <h2 className="mb-2">ready to build your community?</h2>
          <button className="btn btn-primary" type="button">
            get started for free
          </button>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-newsletter mb-5">
            <h3>NEWSLETTER</h3>
            <p className="mb-2">
              To recieve tips on how to grow your community, sign up to our
              weekly newsletter. We'll never send you spam or pass on your email
              address
            </p>
            <form
              className="footer-subscribe"
              onSubmit={e => e.preventDefault()}
            >
              <input type="email" />
              <span>Check your email please</span>
              <button className="btn btn-tertiary" type="submit">
                subscribe
              </button>
            </form>
          </div>
          <div className="footer-contact">
            <Image
              file="logo-white.svg"
              alt="logo white"
              className="footer-logo mb-1"
            />
            <p className="mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
            </p>
            <div className="footer-phone mb-1">Phone: +1-543-123-4567</div>
            <div className="footer-email mb-3">example@huddle.com</div>
            <div className="footer-social">
              <i className="fab fa-facebook-square"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-twitter-square"></i>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}
