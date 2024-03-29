import "./footer.css";
import "../Specific-Css/theme.css"

function FooterComponent()
{
    return (
        <div className="BodyFooter">
            <div>
                <div className="MainFooter">
                    <div className="prvi_dio">
                        <div className="links">
                            <span><strong>Sadržaj</strong></span>
                            <div className="home">
                                <a href="../index.html" target="_parent"> Naslovnica </a>
                            </div>

                            <div className="products">
                                <a href="../products.html" target="_parent"> Proizvodi </a>
                            </div>

                            <div className="about">
                                <a href="../about.html" target="_parent"> O nama </a>
                            </div>

                            <div className="contacts">
                                <a href="../contact.html" target="_parent"> Kontakti </a>
                            </div>     
                        </div>

                        <div className="vert_line one"></div>

                        <div className="contact">
                            <span><strong>Kontaktirajte nas!</strong></span>
                                <br />
                            <span><strong>E-mail:</strong> teleprodaja@gmail.com </span>
                                <br />
                            <span><strong>Tel:</strong> 022 123 321 </span>
                                <br />
                            <span><strong>Golub pismonoša:</strong> Oliver Golubović </span>
                                <br />
                            <span><strong>Adresa:</strong> ul. Brokulice Hrabroga 2, Šibenik </span>
                                <br />
                            <a href="/contact.html" target="_parent"><button> Kontakt forma</button></a>
                        </div>

                        <div className="vert_line two"></div>

                        <div className="legals">
                            <div>
                                <a href="">Uvjeti poslovanja</a>
                            </div>

                            <div>
                                <a href="">Uvjeti korištenja</a>
                            </div>

                            <div>
                                <a href="">Pravila o privatnosti</a>
                            </div>

                            <div>
                                <a href="">Pravila o kolačićima</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="map">
                        <p> Lokacija </p>
                        <iframe className="iframe_map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6999.21887334161!2d15.884451571492656!3d43.71473987587183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13352585f34010b7%3A0x5cce4b3085802e0!2sObalna%20baterija%202%20ex%20jna!5e1!3m2!1shr!2shr!4v1703952748510!5m2!1shr!2shr" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <hr />

                    <div className="rights">
                        <div className="copyright">
                            <span>Autorska prava © 2024 TeleProdaja.</span> 
                                <br /> 
                            <span>Sva prava nisu zadržana.</span>
                        </div>

                        <div className="vert_line three"></div>
                        
                        <div className="maker">
                            <span>Izrada web stranica – Vaša tvrtka</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {FooterComponent};