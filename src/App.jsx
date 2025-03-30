import { useState } from 'react'
import './App.css'

const albums = [
  { id: 1, buyURL: 'https://www.amazon.com/Great-Escape-Our-Time/dp/B0CLD2QR5B', coverURL: 'https://i.scdn.co/image/ab67616d0000b2735b56b6945fd35fe58dc6426f', album: 'The Great Escape Of Our Time', year: '2023', isAvailable: true },
  { id: 2, buyURL: '', coverURL: 'https://i.scdn.co/image/ab67616d0000b2735e66914e2c258dcac6bfe2f7', album: 'Shangri-La Is Calling', year: '2022', isAvailable: false },
  { id: 3, buyURL: 'https://www.amazon.com/Real-Love-Chairs/dp/B08L5N37JL', coverURL: 'https://i.scdn.co/image/ab67616d0000b273c366ef27275469fa62622e3a', album: 'Real Love Is...', year: '2020', isAvailable: true },
  { id: 4, buyURL: '', coverURL: 'https://i.scdn.co/image/ab67616d0000b2732be2920f420f892abddf12da', album: 'LOVELY SUNDAY', year: '2018', isAvailable: false },
  { id: 5, buyURL: '', coverURL: 'https://i.scdn.co/image/ab67616d0000b27346f2d033a10949818f8dd823', album: 'Cheers!Land', year: '2016', isAvailable: false },
];

function Band() {
  return (
    <div className="band">
      <h1>The Chairs</h1>
      <a href="https://open.spotify.com/artist/4IlxI05VmVDx8ShdgKEnLK" target="_blank" rel="noreferrer">
      <img className="bandCover" src="https://cdn.prod.website-files.com/66af176a9ccda9ebdecbb5a3/66b46efac09a1938428f2766_a_Chairs_m.jpg" alt="Band cover" />
      </a>
    </div>
  )
}

function AlbumCard({ album }) {
  return (
    <div className="album-card">
      <img className="album-cover" src={album.coverURL} alt="Album cover" />
      <div className="album-info">
        <h3>{album.album}</h3>
        <p>Released in {album.year}</p>
        {album.isAvailable ? (
          <a href={album.buyURL} target="_blank" rel="noreferrer">
            <button>Buy on Amazon</button>
          </a>
        ) : (
          <p>Not available</p>
        )}
      </div>
      <LikeBTN />
    </div>    
  )
}

function LikeBTN() {
  const [count, setCount] = useState(0)

  return (
    <button className='likedBTN' onClick={() => setCount((count) => count + 1)}>
      Like {count}
    </button>
  )
}

function App() {
  return (
    <>
      <Band />
      <h2>Available Albums</h2>
      <div className="album-list">
        {albums.map(album => (
          <AlbumCard key={album.name} album={album} />
        ))}
      </div>
    </>
  )
}

export default App
