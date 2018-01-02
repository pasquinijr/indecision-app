const app = {
    title: 'Visibility Toggle',
    details: false
};

const onShowDetails = () => {
    app.details = !app.details;
    render();
};

const render = () => {

    const template = (

        <div>
            <h1>{app.title}</h1>
            <button onClick={onShowDetails}>
                {app.details ? 'Hide Details' : 'Show Details'}
            </button>
            {app.details && (
                <div>
                    <p>This are the details you have asked for.</p>
                </div>
                )}
        </div>
    );

    ReactDOM.render(template,  document.getElementById('app'));
};

render();