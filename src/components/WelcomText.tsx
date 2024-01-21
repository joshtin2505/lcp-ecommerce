import './WelcomeText.css'
function WelcomText() {
  return (
    <div className='w-[620px] flex flex-col gap-4'>
        <header>
            <h1 className="title-welcome drop-shadow-lg">Bienvenido A</h1>
            <h1 className="title-brand drop-shadow-lg">La Casita De Papel</h1>
        </header>
        <article className=''>
            <h5 className='text-2xl text-pretty'>¡Somos una micro-empresa comprometida con la sostenibilidad y la creatividad!</h5>
            <p className='text-pretty'>Nos especializamos en la elaboración de papel y productos hechos a mano, utilizando materiales reciclados para ofrecerte una experiencia única y amigable con el medio ambiente.</p>
        </article>
        <footer className='flex'>

        </footer>
    </div>
  )
}

export default WelcomText