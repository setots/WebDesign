import React from 'react';

//a "root" component
class App extends React.Component {
  //how to display this component
  render() {
    return (
    				<div className="App">
						<div className = "navbar">
						<Link className="link" activeClassName='active' to="/"><i Project1 ="fa fa-home"></i></Link>
						<Link className="link" activeClassName='active' to="/videos">Project2</Link>
					</div>
					{this.props.children}
				</div>

    );
  }
};



//more Components can go here!


export default App; //make this class available to other files (e.g., index.js)