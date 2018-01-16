class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide Details' : 'Show Details'}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>This are the details you have asked for.</p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const app = {
//     title: 'Visibility Toggle',
//     details: false
// };

// const onShowDetails = () => {
//     app.details = !app.details;
//     render();
// };

// const render = () => {

//     const template = (

//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={onShowDetails}>
//                 {app.details ? 'Hide Details' : 'Show Details'}
//             </button>
//             {app.details && (
//                 <div>
//                     <p>This are the details you have asked for.</p>
//                 </div>
//                 )}
//         </div>
//     );

//     ReactDOM.render(template,  document.getElementById('app'));
// };

// render();