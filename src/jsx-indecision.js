// JSX - Javascript XML

const app = {
  title: 'Indecision App',
  subtitle: 'This is some info',
  options: []
};



function getLocation(location){
  if (location){
    return <p>Location: {location}</p>;
  } else {
  return 'Unknown';
  }
};

const onFormSubmit = (e) => {
  e.preventDefault(); //prevents a refresh of the page
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderArrayApp();
  }
};

const removeAll = () => {
  app.options = [];
  renderArrayApp();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
}

const appRoot =document.getElementById('app');

const renderArrayApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options':'No options'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={removeAll}>Remove All</button>
      <ol>
        {
          app.options.map((option) => <li key={option}>{option}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
      <input  type="text" name="option"></input>
      <button>Add Option</button>
      </form>
    </div> 
  );
  ReactDOM.render(template, appRoot);
}

renderArrayApp();

