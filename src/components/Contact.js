import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <div id="form">
        <h7>SAY HELLO</h7>
        <form id="group" action="index.html" method="post">

            <div className="form_item">
              <label className="" htmlFor="name">Name <span>*</span></label>
              <input className="" type="text" name="name" />
            </div>

            <div className="form_item">
              <label className="" htmlFor="email">Email <span>*</span></label>
              <input className="" type="text" name="email" />
            </div>

            <div className="form_item">
              <label className="" htmlFor="message">Message <span>*</span></label>
              <textarea className="" name="message" rows="6" cols="7"></textarea>
            </div>

            <div className="form_item">
              <label className="" htmlFor="checker">1+8= <span>*</span></label>
              <input className="" type="text" name="checker" />
            </div>

            <button type="button" name="submit">submit</button>

        </form>
      </div>
      <div className="recommendations">
        <h7>RECOMMENDATIONS</h7>
          <p>"I've had the pleasure of collaborating with Anthony on several client projects. Not only is he a brilliant designer, he's also extremely marketing savvy. Anthony truly understands what it takes to build a competitive brand in a cluttered market, while helping it stand out from the crowd."</p>
          <span className="t_span">Frederick J. Nager</span>
          <span className="b_span">Marketing Strategist, Professor of Marketing</span>
          <p>"I worked with Anthony on a number of projects that required photography. He is one of the best Creative Directors I've been privileged to do business with and I highly recommend him!!!! One of the main qualities that Anthony brings to any and all the projects he's involved in, is his attention to detail."</p>
          <span className="t_span">Alex Vasilescu</span>
          <span className="b_span">Los Angeles Photographer</span>
      </div>
    </section>
  );
}

export default Contact;
