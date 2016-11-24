import React from 'react';
import './css/assets/css/main.css';

//a "root" component
class App extends React.Component {
  //how to display this component
  render() {
    return (

        <div>
        

        <ProjectGroup />

        <title>Setota </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/*[if lte IE 8]><![endif]*/}
        <link rel="stylesheet" href="assets/css/main.css" />
        {/*[if lte IE 8]><link rel="stylesheet" href="assets/css/ie8.css" /><![endif]*/}
        {/*[if lte IE 9]><link rel="stylesheet" href="assets/css/ie9.css" /><![endif]*/}
        {/* Header */}
        <section id="header">
          <header className="major">
            <h1> Setota Solomon</h1>
            <p> Dedicated to defining and executing intuitive user interface that exceed user needs and address business goals <a href="http://html5up.net" /></p>

          </header>
          <div className="container">
            <ul className="actions">
              <li><a href="#one" className="button special scrolly">Begin</a></li>
            </ul>
          </div>
        </section>
        {/* One */}
        <section id="one" className="main special">
          <div className="container">
            <span className="image fit primary"><img src="images/pic06.jpg.png" alt /></span>
            <div className="content">
              <header className="major">
                <h2>Who I am</h2>
              </header>
              <p> I am a creative tech-savy designer with hands-on work experience in User Interface Design for rich web and mobile application. I am dedicated to defining and executing intuituive User Experinces that exceed user needs and achive business goals.</p>
              <p> Currently Studying Informtaics at the University of Washington. </p>
            </div>
            <a href="#two" className="goto-next scrolly">Next</a>
          </div>
        </section>
        {/* Two */}
        <section id="two" className="main special">
          <div className="container">
            <span className="image fit primary"><img src="images/pic09.jpg.png" alt /></span>
            <div className="content">
              <header className="major">
                <h2>Projects </h2>
              </header>
              <p> I have worked on three projects at the University of Washington.</p>
              
                <li>
                  <span className="icon major fa-pencil"/>
                  <h3><a href="https://invis.io/CD58HVRYX">Project 1 : University of Washington Housing and Food Services, PERDUKO</a></h3>
                  <h4><a href="https://drive.google.com/file/d/0B7uQC1J7ImhTRVdUOXUzaXkwV1E/view?usp=sharing">Project PDF</a></h4>
                </li>
                <li>
                  <span className="icon major fa-pencil" />
                  <h3><a href ="https://students.washington.edu/setots/INFO343/a4-firebase-setots/sign-in.html">Project 2 : INFO 343 Tweeter Application</a> </h3>
                </li>
                <li>
                  <span className="icon major fa-pencil" />
                  <h3> <a href =" https://students.washington.edu/setots/INFO343/a5-spotify-setots/">Project 3 : INFO 343 Spotify</a></h3>
                </li>
              
            </div>
            <a href="#three" className="goto-next scrolly">Next</a>
          </div>
        </section>
        {/* Three */}
        <section id="three" className="main special">
          <div className="container">
            <span className="image fit primary" />
            <div className="content">
              <header className="major">
                <h2>One more thing</h2>
              </header>
              <p> I have created wireframes, define User Experince,and design mock-ups. Designing windows, mobile games, helping concept startup applications, and assisting with marketing print designs.</p>
            </div>
            <a href="#footer" className="goto-next scrolly">Next</a>
          </div>
        </section>
        {/* Four */}
        {/*
      <section id="four" class="main">
        <div class="container">
          <div class="content">
            <header class="major">
              <h2>Elements</h2>
            </header>
            <section>
              <h4>Text</h4>
              <p>This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this is <em>emphasized</em>.
              This is <sup>superscript</sup> text and this is <sub>subscript</sub> text.
              This is <u>underlined</u> and this is code: <code>for (;;) { ... }</code>. Finally, <a href="#">this is a link</a>.</p>
              <hr />
              <header>
                <h4>Heading with a Subtitle</h4>
                <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
              </header>
              <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
              <header>
                <h5>Heading with a Subtitle</h5>
                <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
              </header>
              <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
              <hr />
              <h2>Heading Level 2</h2>
              <h3>Heading Level 3</h3>
              <h4>Heading Level 4</h4>
              <h5>Heading Level 5</h5>
              <h6>Heading Level 6</h6>
              <hr />
              <h5>Blockquote</h5>
              <blockquote>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan faucibus. Vestibulum ante ipsum primis in faucibus lorem ipsum dolor sit amet nullam adipiscing eu felis.</blockquote>
              <h5>Preformatted</h5>
              <pre><code>i = 0;

while (!deck.isInOrder()) {
print 'Iteration ' + i;
deck.shuffle();
i++;
}

print 'It took ' + i + ' iterations to sort the deck.';</code></pre>
            </section>

            <section>
              <h4>Lists</h4>
              <div class="row">
                <div class="6u 12u$(medium)">
                  <h5>Unordered</h5>
                  <ul>
                    <li>Dolor pulvinar etiam.</li>
                    <li>Sagittis adipiscing.</li>
                    <li>Felis enim feugiat.</li>
                  </ul>
                  <h5>Alternate</h5>
                  <ul class="alt">
                    <li>Dolor pulvinar etiam.</li>
                    <li>Sagittis adipiscing.</li>
                    <li>Felis enim feugiat.</li>
                  </ul>
                </div>
                <div class="6u$ 12u(medium)">
                  <h5>Ordered</h5>
                  <ol>
                    <li>Dolor pulvinar etiam.</li>
                    <li>Etiam vel felis viverra.</li>
                    <li>Felis enim feugiat.</li>
                    <li>Dolor pulvinar etiam.</li>
                    <li>Etiam vel felis lorem.</li>
                    <li>Felis enim et feugiat.</li>
                  </ol>
                  <h5>Icons</h5>
                  <ul class="icons">
                    <li><a href="#" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
                    <li><a href="#" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
                    <li><a href="#" class="icon fa-instagram"><span class="label">Instagram</span></a></li>
                    <li><a href="#" class="icon fa-github"><span class="label">Github</span></a></li>
                  </ul>
                </div>
              </div>
              <h5>Actions</h5>
              <ul class="actions">
                <li><a href="#" class="button special">Default</a></li>
                <li><a href="#" class="button">Default</a></li>
              </ul>
              <ul class="actions small">
                <li><a href="#" class="button special small">Small</a></li>
                <li><a href="#" class="button small">Small</a></li>
              </ul>
              <div class="row">
                <div class="6u 12u$(small)">
                  <ul class="actions vertical">
                    <li><a href="#" class="button special">Default</a></li>
                    <li><a href="#" class="button">Default</a></li>
                  </ul>
                </div>
                <div class="6u$ 12u$(small)">
                  <ul class="actions vertical small">
                    <li><a href="#" class="button special small">Small</a></li>
                    <li><a href="#" class="button small">Small</a></li>
                  </ul>
                </div>
                <div class="6u 12u$(small)">
                  <ul class="actions vertical">
                    <li><a href="#" class="button special fit">Default</a></li>
                    <li><a href="#" class="button fit">Default</a></li>
                  </ul>
                </div>
                <div class="6u$ 12u$(small)">
                  <ul class="actions vertical small">
                    <li><a href="#" class="button special small fit">Small</a></li>
                    <li><a href="#" class="button small fit">Small</a></li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h4>Table</h4>
              <h5>Default</h5>
              <div class="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Item One</td>
                      <td>Ante turpis integer aliquet porttitor.</td>
                      <td>29.99</td>
                    </tr>
                    <tr>
                      <td>Item Two</td>
                      <td>Vis ac commodo adipiscing arcu aliquet.</td>
                      <td>19.99</td>
                    </tr>
                    <tr>
                      <td>Item Three</td>
                      <td> Morbi faucibus arcu accumsan lorem.</td>
                      <td>29.99</td>
                    </tr>
                    <tr>
                      <td>Item Four</td>
                      <td>Vitae integer tempus condimentum.</td>
                      <td>19.99</td>
                    </tr>
                    <tr>
                      <td>Item Five</td>
                      <td>Ante turpis integer aliquet porttitor.</td>
                      <td>29.99</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colspan="2"></td>
                      <td>100.00</td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              <h5>Alternate</h5>
              <div class="table-wrapper">
                <table class="alt">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Item One</td>
                      <td>Ante turpis integer aliquet porttitor.</td>
                      <td>29.99</td>
                    </tr>
                    <tr>
                      <td>Item Two</td>
                      <td>Vis ac commodo adipiscing arcu aliquet.</td>
                      <td>19.99</td>
                    </tr>
                    <tr>
                      <td>Item Three</td>
                      <td> Morbi faucibus arcu accumsan lorem.</td>
                      <td>29.99</td>
                    </tr>
                    <tr>
                      <td>Item Four</td>
                      <td>Vitae integer tempus condimentum.</td>
                      <td>19.99</td>
                    </tr>
                    <tr>
                      <td>Item Five</td>
                      <td>Ante turpis integer aliquet porttitor.</td>
                      <td>29.99</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colspan="2"></td>
                      <td>100.00</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </section>

            <section>
              <h4>Buttons</h4>
              <ul class="actions">
                <li><a href="#" class="button special">Special</a></li>
                <li><a href="#" class="button">Default</a></li>
              </ul>
              <ul class="actions">
                <li><a href="#" class="button">Default</a></li>
                <li><a href="#" class="button small">Small</a></li>
              </ul>
              <ul class="actions fit">
                <li><a href="#" class="button special fit">Fit</a></li>
                <li><a href="#" class="button fit">Fit</a></li>
              </ul>
              <ul class="actions fit small">
                <li><a href="#" class="button special fit small">Fit + Small</a></li>
                <li><a href="#" class="button fit small">Fit + Small</a></li>
              </ul>
              <ul class="actions">
                <li><a href="#" class="button special icon fa-download">Icon</a></li>
                <li><a href="#" class="button icon fa-download">Icon</a></li>
              </ul>
              <ul class="actions">
                <li><span class="button special disabled">Disabled</span></li>
                <li><span class="button disabled">Disabled</span></li>
              </ul>
            </section>

            <section>
              <h4>Form</h4>
              <form method="post" action="#">
                <div class="row uniform">
                  <div class="6u 12u$(xsmall)">
                    <input type="text" name="demo-name" id="demo-name" value="" placeholder="Name" />
                  </div>
                  <div class="6u$ 12u$(xsmall)">
                    <input type="email" name="demo-email" id="demo-email" value="" placeholder="Email" />
                  </div>
                  <div class="12u$">
                    <div class="select-wrapper">
                      <select name="demo-category" id="demo-category">
                        <option value="">- Category -</option>
                        <option value="1">Manufacturing</option>
                        <option value="1">Shipping</option>
                        <option value="1">Administration</option>
                        <option value="1">Human Resources</option>
                      </select>
                    </div>
                  </div>
                  <div class="4u 12u$(small)">
                    <input type="radio" id="demo-priority-low" name="demo-priority" checked>
                    <label for="demo-priority-low">Low</label>
                  </div>
                  <div class="4u 12u$(small)">
                    <input type="radio" id="demo-priority-normal" name="demo-priority">
                    <label for="demo-priority-normal">Normal</label>
                  </div>
                  <div class="4u$ 12u$(small)">
                    <input type="radio" id="demo-priority-high" name="demo-priority">
                    <label for="demo-priority-high">High</label>
                  </div>
                  <div class="6u 12u$(small)">
                    <input type="checkbox" id="demo-copy" name="demo-copy">
                    <label for="demo-copy">Email me a copy</label>
                  </div>
                  <div class="6u$ 12u$(small)">
                    <input type="checkbox" id="demo-human" name="demo-human" checked>
                    <label for="demo-human">Not a robot</label>
                  </div>
                  <div class="12u$">
                    <textarea name="demo-message" id="demo-message" placeholder="Enter your message" rows="6"></textarea>
                  </div>
                  <div class="12u$">
                    <ul class="actions">
                      <li><input type="submit" value="Send Message" class="special" /></li>
                      <li><input type="reset" value="Reset" /></li>
                    </ul>
                  </div>
                </div>
              </form>
            </section>

            <section>
              <h4>Image</h4>
              <h5>Fit</h5>
              <div class="box alt">
                <div class="row uniform 50%">
                  <div class="12u"><span class="image fit"><img src="images/pic04.jpg" alt="" /></span></div>
                  <div class="4u"><span class="image fit"><img src="images/pic04.jpg" alt="" /></span></div>
                  <div class="4u"><span class="image fit"><img src="images/pic04.jpg" alt="" /></span></div>
                  <div class="4u"><span class="image fit"><img src="images/pic04.jpg" alt="" /></span></div>
                  <div class="4u"><span class="image fit"><img src="images/pic04.jpg" alt="" /></span></div>
                  <div class="4u"><span class="image fit"><img src="images/pic04.jpg" alt="" /></span></div>
                  <div class="4u"><span class="image fit"><img src="images/pic04.jpg" alt="" /></span></div>
                  <div class="4u"><span class="image fit"><img src="images/pic04.jpg" alt="" /></span></div>
                  <div class="4u"><span class="image fit"><img src="images/pic04.jpg" alt="" /></span></div>
                  <div class="4u"><span class="image fit"><img src="images/pic04.jpg" alt="" /></span></div>
                </div>
              </div>
              <h5>Left &amp; Right</h5>
              <p><span class="image left"><img src="images/pic05.jpg" alt="" /></span>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.</p>
              <p><span class="image right"><img src="images/pic05.jpg" alt="" /></span>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.</p>
            </section>

          </div>
          <a href="#footer" class="goto-next scrolly">Next</a>
        </div>
      </section>
    */}
        {/* Footer */}
        <section id="footer">
          <div className="container">
            <header className="major">
              <h2>Get in touch</h2>
              <p> Let's Connect on Linkdln :<a href ="https://www.linkedin.com/in/setota-solomon-044211113?trk=hp-identity-photo"> Check my Linkedln </a> </p>
            </header>
            <form method="post" action="#">
              <div className="row uniform">
                <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                <div className="6u$ 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                <div className="12u$"><textarea name="message" id="message" placeholder="Message" rows={4} defaultValue={""} /></div>
                <div className="12u$">
                  <ul className="actions">
                    <li><input type="submit" defaultValue="Send Message" className="special" /></li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
          <footer>
            <ul className="icons">
              <li><a href="#" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
              <li><a href="#" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
              <li><a href="#" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
              <li><a href="#" className="icon alt fa-dribbble"><span className="label">Dribbble</span></a></li>
              <li><a href="#" className="icon alt fa-envelope"><span className="label">Email</span></a></li>
            </ul>
            <ul className="copyright">
              <li>©</li><li> Setota Design<a href="http://html5up.net"></a></li><li><a href="http://unsplash.com">ALL RIGHTS RESERVED</a></li>
            </ul>
          </footer>
        </section>
        {/* Scripts */}
        {/*[if lte IE 8]><![endif]*/}
      </div>

      );
  }
}


class ProjectGroup extends React.Component {

  render () {
    return (
          <div>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          </div>
      );
  }
}


class ProjectCard extends React.Component {

  render () {
    return (
           <li>
                  <span className="Project" />
                  <h3></h3>
          </li>
      );
  }
}


//more Components can go here!


export default App; //make this class available to other files (e.g., index.js)