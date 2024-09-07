import Footer from "../components/Footer";
import Header from "../components/Header";
import HoverImage from "../components/HoverImage";
import Section from "../components/Section";

import "../styles/pages/Theatre.css";

export default function Theatre() {
    return (
        <main>
            <Header />
            <Section outer>
                <h1>Acting Experience</h1>
                <div className='acting'>
                    <div className="acting__item">
                        <h3>Theatergroep Pardon</h3>
                        <div className="sideline sideline__item">
                            <p>Student Consent</p>
                            <p>Seksdisco</p>
                            <p>Kut Voorstelling</p>
                            <p>Toverfeeminist</p>
                            <p>Ben ik Queer</p>
                            <p>Planet Femme</p>
                        </div>
                    </div>
                    <div className="acting__item">
                        <h3>De Stokerij Schiedam</h3>
                        <div className="sideline sideline__item">
                            <p>Slet de voorstelling</p>
                        </div>
                    </div>
                    <div className="acting__item">
                        <h3>TG De Klassieker</h3>
                        <div className="sideline sideline__item">
                            <p>Annie</p>
                        </div>
                    </div>
                    <div className="acting__item">
                        <h3>Theaterschool</h3>
                        <div className="sideline sideline__item">
                            <p>Bad Time Stories</p>
                            <p>Think Big</p>
                            <p>Hamlet</p>
                            <p>Spring Awakening</p>
                        </div>
                    </div>
                    <div className="acting__item">
                        <h3>Talentproof</h3>
                        <div className="sideline sideline__item">
                            <p>Opzoek naar Romeo en Julia</p>
                            <p>Bo & Beest</p>
                            <p>Binnenstebuiten</p>
                            <p>Billie Elliot</p>
                        </div>
                    </div>
                </div>
                <div className='showcase'>
                    <HoverImage
                        src="/images/theatre/hover_6.jpeg"
                        hover={<h4>Seksdisco</h4>}
                    />
                    <HoverImage
                        src="/images/theatre/hover_3.png"
                        hover={<h4>Kut Voorstelling</h4>}
                    />
                    <HoverImage
                        src="/images/theatre/hover_4.jpeg"
                        hover={<h4>Planet Femme</h4>}
                    />
                    <HoverImage
                        src="/images/theatre/hover_5.jpeg"
                        hover={<h4>Student Consent</h4>}
                    />
                    <HoverImage
                        src="/images/theatre/hover_8.jpeg"
                        hover={<h4>Opzoek naar Romeo & Julia</h4>}
                    />
                    <HoverImage
                        src="/images/theatre/hover_9.jpeg"
                        hover={<h4>Slet de Voorstelling</h4>}
                    />
                    <HoverImage
                        src="/images/theatre/hover_10.jpeg"
                        hover={<h4>Annie</h4>}
                    />
                    <HoverImage
                        src="/images/theatre/hover_7.jpeg"
                        hover={<h4>Tover Feeminist</h4>}
                    />
                    <HoverImage
                        src="/images/theatre/hover_11.jpeg"
                        hover={<h4>Bad Time Stories</h4>}
                    />
                </div>
            </Section>
            <Footer />
        </main>
    );
}