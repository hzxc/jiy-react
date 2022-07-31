import './styles/index.scss';

export const Pancake = () => {
  return (
    <div className='pancake-container'>
      <header className='pancake-header'>
        <div>header left</div>
        <div>header right</div>
      </header>
      <main className='pancake-main'>main</main>
      <footer className='pancake-footer'>footer</footer>
    </div>
  );
};
