import React from 'react';

const Resume = () => {
  return (
    <section id="resume">
      <div id="info_res">
        <h7 className="res_title bold wow fadeIn">EDUCATION</h7>
        <div className="education wow fadeIn" data-wow-delay=".3s">

          <div className="ed_element">
            <h7>Certificate of Marketing & Advertising</h7>
            <span className="college">University of California, Extension</span>
            <span className="year">2010 - 2013</span>
            <span className="loc">Los Angeles, CA</span>
          </div>

          <div className="ed_element">
            <h7>B.F.A. in Graphic Design</h7>
            <span className="college">Woodbury University, School of Media, Culture & Design</span>
            <span className="year">2004 - 2006</span>
            <span className="loc">Burbank, CA</span>
          </div>

          <div className="ed_element">
            <h7>School of Art + Design, Advertising Art Direction</h7>
            <span className="college">Columbia College Chicago</span>
            <span className="year">2001 - 2003</span>
            <span className="loc">Chicago, IL</span>
          </div>

        </div>
        <h7 className="res_title bold wow fadeIn">WORK EXPERIENCE</h7>
        <div className="experience wow fadeIn" data-wow-delay=".3s">

          <div className="exp_element">
            <h7>Senior Digital Art Director</h7>
            <span className="corp">Bemis Balkind</span>
            <span className="year">2013 - Present</span>
            <span className="loc">Beverly Hills, CA</span>
            <p className="text">Anthony creates design concepts, implements marketing strategies and develops digital campaigns. He also supervises and directs a team of artists and designers (leveraging talent from both print and digital departments) while participating in the strategic shaping of Bemis' clients business goals. He has experience working with leading movie studios, an array of TV networks, as well as destination-driven lifestyle companies.</p>
          </div>

          <div className="exp_element">
            <h7>Creative Director</h7>
            <span className="corp">Starmen Design Group, Inc.</span>
            <span className="year">Dec 2007 ~ Present</span>
            <span className="loc">Hollywood, CA</span>
            <p className="text">As Creative Director of the strategic design agency Starmen, Anthony was responsible for shaping creative strategy and overseeing visual direction for all campaigns. Anthony addressed marketing and communication challenges by leading his team to bring their ideas to life creatively. Many of which led to the agency's multiple award-winning solutions in digital for various B2B and B2C markets.</p>
          </div>

          <div className="exp_element">
            <h7>Marketing/Art Director</h7>
            <span className="corp">Sotheby's International Real Estate</span>
            <span className="year">Aug. 2006 - Dec. 2007</span>
            <span className="loc">Calabasas, CA</span>
            <p className="text">As Marketing Director for Ewing & Associates Sotheby's International Realty, Anthony put his leadership skills in creative marketing and a long-standing passion for design to use. He initiated and created local and national ad campaigns while consulting on dozens of individual brand agendas for Sotheby's brokers.</p>
          </div>
        </div>
      </div>
      <div className="why_me">
        <h7 className="bold  wow fadeIn">WHY ME?</h7>
        <div className="qualities">
          <div className="qualitie  wow fadeIn" data-wow-delay=".1s">
            <h6>Vision.</h6>
            <p>I see digital design as an art and a driver of customer delight. I'm the catalyst that mixes ideas, pushes concepts and finds the best way to energize brands through sophisticated visual design.</p>
          </div>
          <div className="qualitie wow fadeIn" data-wow-delay=".3s">
            <h6>Problem-Solver.</h6>
            <p>I don't believe in design without purpose. I see digital design as a science and believe that design plays a role in solving problems that improve the consumer experience.</p>
          </div>
          <div className="qualitie wow fadeIn" data-wow-delay=".5s">
            <h6>Strategic.</h6>
            <p>I think like a business owner and identify opportunities to grow the business, the brand, whether indirectly or directly related to design.</p>
          </div>
          <div className="qualitie wow fadeIn" data-wow-delay=".7s">
            <h6>Hands-On.</h6>
            <p>I enjoy rolling up my sleeves and getting into the nitty gritty of design, yet my goal is ultimately to be a 'thought-leader' and provide more than ideas but inspiration.</p>
          </div>
          <div className="qualitie wow fadeIn" data-wow-delay=".8s">
            <h6>Collaborative.</h6>
            <p>I have high regards for team building, I work exceptionally well across all key functional areas including sales, web development, film production and customer service.</p>
          </div>
          <div className="qualitie wow fadeIn" data-wow-delay=".9s">
            <h6>Ambitious.</h6>
            <p>I'm always looking for opportunities and aren’t afraid to take risks for the sake of making things better.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
