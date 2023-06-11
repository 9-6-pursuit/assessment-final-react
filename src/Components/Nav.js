import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <>
        <nav>
          <Link to="/"><img src="https://images.fineartamerica.com/images/artworkimages/medium/2/no-face-my-neighbor-totoro-valentina-hramov-transparent.png" alt="" /></Link>
          <Link to="/movies">Movies</Link>
          <Link to="/people">People</Link>
          <Link to="/locations">Locations</Link>
        </nav>
    </>
  )

}