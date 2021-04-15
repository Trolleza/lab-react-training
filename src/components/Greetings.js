function getLanguage(language) {
    switch (language) {
      case "de":
        return `Hallo ${props.lastName}`;
      case "en":
        return "Hello";
      case "es":
        return "Hola";
      case "fr":
        return "Bonjour";
      default:
        return "Hello";
    }
  }

function Greetings(props) {
    return (

        <div>
            <span class="border">{props.language}</span>
        </div>


    );
}

export default Greetings;