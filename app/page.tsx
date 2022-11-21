import React from 'react';

function HomePage() {
  return (
    <main className='bg-dark text-white'>
      <div className='container'>
        <h1>Design System</h1>
        <section id='colors'>
          <h2>
            <span>01</span> colors
          </h2>

          <div className='flex'>
            <div>
              <div className='bg-dark bdr-white text-white box'>#0B0D17</div>
              <p>
                <span className='text-accent'>RGB</span> 11, 13, 23
              </p>
              <p>
                <span className='text-accent'>HSL</span> 230°, 35%, 7%
              </p>
            </div>
            <div>
              <div className='bg-accent text-dark box'>#0B0D17</div>
              <p>
                <span className='text-accent'>RGB</span> 208, 214, 249
              </p>
              <p>
                <span className='text-accent'>HSL</span> 231°, 77%, 90%
              </p>
            </div>
            <div>
              <div className='bg-white text-dark box'>#FFFFFF</div>
              <p>
                <span className='text-accent'>RGB</span> 255, 255, 255
              </p>
              <p>
                <span className='text-accent'>HSL</span> 0°, 0%, 100%
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default HomePage;
