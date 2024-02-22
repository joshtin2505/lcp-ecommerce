import Button from "@/components/Button"
import "./WelcomeText.css"
function WelcomeText() {
  return (
    <div className="welcomeTextContainer">
      <article className="welLayout">
        <header>
          <h1 className="title-welcome welTile">Bienvenido A</h1>
          <h1 className="title-brand txt-deg-primary welTile">
            La Casita De Papel
          </h1>
        </header>
        <article className="">
          <h5 className="welSlogan">
            ¡Somos una micro-empresa comprometida con la sostenibilidad y la
            creatividad!
          </h5>
          <p className="text-balance">
            Nos especializamos en la elaboración de papel y productos hechos a
            mano, utilizando materiales reciclados para ofrecerte una
            experiencia única y amigable con el medio ambiente.
          </p>
        </article>
        <footer className="btnContainer">
          <Button
            rounded="sm"
            type="secondary"
            size="xl"
            weight="semibold"
            className="welcome-btn-secondary"
          >
            Mas Informacion
          </Button>
          <Button
            rounded="sm"
            type="primary"
            size="xl"
            weight="semibold"
            className="welcome-btn-primary"
          >
            Productos Eco
          </Button>
        </footer>
      </article>
    </div>
  )
}

export default WelcomeText
