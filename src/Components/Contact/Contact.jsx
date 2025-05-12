import Back from "../Common/Back/Back"
import "./Contact.css"

const Contact = () => {
    const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28957.410943226932!2d67.00567518476558!3d24.874900611901793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ef9ba52903f%3A0x4c0d38d728e62635!2sUsmania%20Colony%2C%20Karachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1747071364349!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
    
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
                  <p>273-usmania colony jail road, karachi</p>
                </div>
                <div className='box'>
                  <h4>EMAIL:</h4>
                  <p>shahrozahmed787@gmail.com</p>
                </div>
                <div className='box'>
                  <h4>PHONE:</h4>
                  <p>+923143317952</p>
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