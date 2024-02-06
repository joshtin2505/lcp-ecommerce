import WelcomeText from './WelcomeText'
import ImageGallery from './ImageGallery'
import './WelcomeSection.css'

function WelcomeSection() {
  return (
    <section className="WelcomeSectionContainer welcome-section">
      <WelcomeText/>
      <ImageGallery/>
    </section>
  )
}

export default WelcomeSection