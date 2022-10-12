import React from 'react';


const Blog = () => {
    return (
        <div className="accordion container mt-5" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        What is the purpose of react router?
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                    <div className="accordion-body">
                        The method of routing involves sending users to various websites in response to their requests or actions. The major application for ReactJS Router is the creation of single page web applications. Multiple routes are defined in the application using React Router. A user will be sent to a specific route when they enter a particular URL into their browser and that URL path matches any of the "routes" in the router file. <br />

                        The React Router Package, a standard library system built on top of React, is used to implement routing in React applications. It gives the information that will be displayed on the web page to the synchronous URL in the browser.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        How does context API work?
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                    <div className="accordion-body">
                        A React app can create global variables that can be passed around by using the React Context API. This is an alternative to "prop drilling," which entails passing along props from grandparents to grandchildren to parents and so forth. Context is also promoted as a simpler, lighter method of Redux state management. <br />

                        Context API is a (kind of) new feature that React 16.3 implemented that makes it simple and easy to exchange state throughout the entire project (or a portion of it). <br />

                        You only require React.createContext(). Both a customer and a provider are returned. The component known as the provider, as its name implies, gives the state to its offspring. All the components that would require that "store" will have it as their parent and it will hold the "store." A component that utilizes and consumes the state is known as a consumer. The documentation page for React has more details.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        What is useRef hook in react?
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                    <div className="accordion-body">
                        Between renderings, you can maintain values using the useRef Hook. <br />

                        It can be used to hold a mutable value that, when altered, doesn't require a new rendering. <br />

                        It can be applied to directly access a DOM element.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;