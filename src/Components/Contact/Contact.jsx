import Back from "../Common/Back/Back"
import "./Contact.css"

const Contact = () => {
    const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.62561137777!2d89.08669731402198!3d22.70497698511481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff5e046da17843%3A0x72d4a41a3c41b4c8!2z4Kaq4KeB4Kaw4Ka-4Kak4KaoIOCmuOCmvuCmpOCmleCnjeCmt-CngOCmsOCmvg!5e0!3m2!1sbn!2sbd!4v1656006854337!5m2!1sbn!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
    return (
      <>
        <Back title='Contact us' />
        <section className='contacts padding'>
          <div className='container shadow flexSB'>
            <div className='left row'>
              <iframe src={map} title="contactFrame"></iframe>
            </div>
            <div className='right row'>
              <h1>Contact us</h1>
              <p>We're open for any suggestion or just to have a chat</p>
  
              <div className='items grid2'>
                <div className='box'>
                  <h4>ADDRESS:</h4>
                  <p>Old Satkhira, Alia Madrasa Para, Satkhira-9400</p>
                </div>
                <div className='box'>
                  <h4>EMAIL:</h4>
                  <p>ssahed65@gmail.com</p>
                </div>
                <div className='box'>
                  <h4>PHONE:</h4>
                  <p>+8801792674690</p>
                </div>
              </div>
  
              <form action=''>
                <div className='flexSB'>
                  <input type='text' placeholder='Name' />
                  <input type='email' placeholder='Email' />
                </div>
                <input type='text' placeholder='Subject' />
                <textarea cols='30' rows='10' placeholder="Write your speech here...">
                
                </textarea>
                <button className='primary-btn'>SEND MESSAGE</button>
              </form>
  
              <h3>Follow us here</h3>
              <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
            </div>
          </div>
        </section>
      </>
    )
  }
  
  export default Contact