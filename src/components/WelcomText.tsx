import Button from './Button'
import './WelcomeText.css'
function WelcomText() {
  return (
    <div className="w-2/5 h-full flex items-center justify-center">
      <article className='flex flex-col gap-4'>
          <header>
              <h1 className="title-welcome drop-shadow-lg text-6xl xxs:text-5xl font-semibold">Bienvenido A</h1>
              <h1 className="title-brand txt-deg-primary drop-shadow-lg text-6xl xxs:text-5xl font-semibold">La Casita De Papel</h1>
          </header>
          <article className=''>
              <h5 className='md:text-2xl text-pretty xxs:text-xl'>¡Somos una micro-empresa comprometida con la sostenibilidad y la creatividad!</h5>
              <p className='text-balance'>Nos especializamos en la elaboración de papel y productos hechos a mano, utilizando materiales reciclados para ofrecerte una experiencia única y amigable con el medio ambiente.</p>
          </article>
          <footer className='flex justify-start gap-9 items-center'>
            <Button rounded='sm' type='secondary' size='xl' weight='semibold' className='welcome-btn-secondary'>Mas Informacion</Button>
            <Button rounded='sm' type='primary' size='xl' weight='semibold' className='welcome-btn-primary'>Productos Eco</Button>
          </footer>
      </article>
    </div>
  )
}

export default WelcomText