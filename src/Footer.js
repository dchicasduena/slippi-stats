import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFrog } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="App-footer">
      <a href="https://github.com/dchicasduena" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub}  size="2x" className="App-icon"/>
      </a>
      <a href="https://github.com/project-slippi/project-slippi" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faFrog}  size="2x" className="App-iconSlippi"/>
      </a>
    </div>
  )
}

export default Footer