import Image from "next/image"
import "./AboutUs.css"
function AboutUs() {
  return (
    <section
      id="aboutUs"
      className="h-screen max-lg:h-auto max-lg:py-5 max-lg:px-6 aboutUsContainer flex gap-4 justify-center items-center flex-col lg:px-20 xl:px-36 topShadow z-10"
    >
      <header className="w-full flex justify-start max-lg:justify-center">
        <h2 className=" font-semibold txt-deg-primary drop-shadow-lg text-center text-5xl max-md:text-4xl">
          ¿Que es la casita de papel?
        </h2>
      </header>
      <article className="flex">
        <p className="md:w-4/5">
          Un poco de historia...
          <br />
          Fundada en 2006 en el vibrante barrio Olaya Herrera de Cartagena, La
          Casita de Papel nació de la visión de{" "}
          <em className="font-semibold">Sulays Pérez</em>, quien, tras
          participar en un curso de papel artesanal ofrecido por la Fundación
          "Granitos de Paz", decidió transformar desperdicios de papel en
          productos únicos. Más que una fuente de ingresos, nuestra misión es
          dar vida nueva a cada hoja y, al mismo tiempo, brindar empleo
          significativo a familias locales.
        </p>
        {/* Estilar en el futuro */}
        {/* <figure>
                <Image className='aspect-square object-cover' src="/sp.jpg" alt="Foto de sulays" width={100} height={100} />
            </figure> */}
      </article>
      <article className="flex gap-4 sm:flex-row flex-col">
        <div className="flex flex-col gap-2">
          <h6 className="text-lg font-semibold">Compromiso Creativo</h6>
          <ul className="flex flex-col gap-2">
            <li>
              Desde aquellos primeros prototipos, La Casita de Papel ha crecido
              como un símbolo de creatividad, sostenibilidad y compromiso
              social, tejiendo una historia que sigue siendo escrita con cada
              hoja de papel reciclado que sale de nuestras manos.
            </li>
            <li>
              Nuestro compromiso inquebrantable con la calidad y la
              responsabilidad ambiental se manifiesta en cada fibra de papel y
              en cada producto que creamos. Cada pieza es elaborada por manos
              expertas, fusionando la artesanía tradicional con una profunda
              conciencia ecológica.
            </li>
            <li>
              En cada obra, no solo encontrarás un producto excepcional, sino
              también el reflejo de nuestro compromiso con un mundo más
              sostenible y hermoso. ¡Descubre la magia de La Casita de Papel,
              donde la creatividad se encuentra con la responsabilidad, hoja
              tras hoja!
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h6 className="text-lg font-semibold">
            ¿Por qué elegir La Casita de papel?
          </h6>
          <ol className="flex flex-col gap-2">
            <li>
              <strong>1. Sostenibilidad en Cada Fibra:</strong> Utilizamos papel
              reciclado de alta calidad para reducir nuestra huella ecológica y
              promover un estilo de vida sostenible.
            </li>
            <li>
              <strong>2. Diseño Único y Personalizado:</strong> Cada producto
              que creamos es una obra de arte única. Desde tarjetas
              personalizadas hasta cuadernos y más, ofrecemos productos
              exclusivos para satisfacer tus necesidades.
            </li>
            <li>
              <strong>3. Compromiso con la Comunidad:</strong> Nos apasiona
              contribuir al bienestar de nuestra comunidad. Al elegir La casita
              de papel, estás apoyando no solo a un negocio local, sino también
              a iniciativas que buscan un impacto positivo.
            </li>
          </ol>
        </div>
      </article>
    </section>
  )
}

export default AboutUs
