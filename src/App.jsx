import { useState } from "react";
import Card from './Card'
import './App.css'


const items = [
  {id: 1, title: '나노템', category: 'web' ,image: '/works1.png', url: 'https://nanotem.mycafe24.com/' },
  {id: 2, title: '가리미', category: 'web' ,image: '/works6.png', url: 'https://k-garimi.kr/'},
  {id: 3, title: '진성ENB', category: 'web' ,image: '/works4.png', url: 'https://jinsungenb.mycafe24.com/product/'},
  {id: 4, title: '3D Panorama', category: 'study'},
  {id: 5, title: 'Music Player', category: 'study'},
]

const categories = [
  {key: 'all', label: '전체'},
  {key: 'web', label: '웹'},
  {key: 'study', label: '스터디'},
]



function App(){
  const [filter, setFilter] = useState('all')
   const visibleItems = filter === 'all'
   ? items
   : items.filter((item) => item.category ===filter)


  return (
    <div className="app">
      <h1>Gallery</h1>
      <p className="lead">같은 갤러리를 순수 JavaScript와 React로 각각 구현해봅니다.</p>
      <div className="filters">
        {categories.map((cat) => (
          <button key={cat.key} className={filter === cat.key ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setFilter(cat.key)}
          >
          {cat.label}
          </button>
        ))}
      </div>

        <ul className="grid">
          {visibleItems.map((item)=> (
            <Card key={item.id} item={item}/>
          ))}
        </ul>

    </div>
  )
}

export default App