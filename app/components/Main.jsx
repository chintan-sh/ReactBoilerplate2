/**
 * Created by chintan on 5/25/17.
 */

var React = require('react'); // residing inside node_modules (installed using npm)

// refactored the above code as it doesnt manage any state (called Stateless Functional Component)
var Main = (props) => {
    return(
        <div>
            <div>
                <div>
                    <p> Main.jsx Rendered </p>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

module.exports = Main;

