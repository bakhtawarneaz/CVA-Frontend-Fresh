import React from 'react'

const Home = () => {
  return (
    <div className='app-wrap'>
        <aside>
          <div className='app-brand'>
              <a href="index.html" class="app-brand-link"></a>
          </div>
          <div className='side-menu'>
            <ul>
              <li>
                <a href="#">organizations</a>
              </li>
              <li>
                <a href="#">brands</a>
              </li>
              <li>
                <a href="#">user</a>
              </li>
            </ul>
          </div>
        </aside>
    </div>
  )
}

export default Home