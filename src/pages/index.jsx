import React from "react";
import Layout from "@theme/Layout";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { IconHeartFilled } from "@tabler/icons-react";

export default function Index() {
    function ParallaxSectionImage({ src, alt, ...props }) {
        return (
            <div className="section">
                <Parallax easing="easeInOutSine" {...props}>
                    <img alt={alt} className="section-image" src={src} />
                </Parallax>
            </div>
        );
    }

    return (
        <ParallaxProvider>
            <Layout title="Index page" description="PlaneWiki: the free plane encyclopedia">
                <div style={{ backgroundColor: "#000000", fontWeight: "bold", fontFamily: "inter", display: "flex", flexDirection: "column" }}>
                    <div
                        style={{
                            height: "calc(100vh - 120px)",
                        }}
                        className="section"
                    >
                        <Parallax speed={-15}>
                            <img
                                style={{
                                    width: "40vw",
                                    height: "40vw",
                                }}
                                alt="Logo"
                                src="/img/logo.png"
                            />
                        </Parallax>
                    </div>
                    <div
                        style={{
                            height: "100vh",
                        }}
                        className="section"
                    >
                        <span style={{ fontSize: "4rem", fontFamily: "inter", textAlign: "center" }}>
                            All of your <span className="plane-gradient">plane</span> info and news
                        </span>
                    </div>

                    <ParallaxSectionImage src="/img/landing/pic1.jpg" alt="Picture1" translateX={["-6%", "6%"]} />
                    <ParallaxSectionImage src="/img/landing/pic2.jpg" alt="Picture2" translateX={["6%", "-6%"]} />
                    <ParallaxSectionImage src="/img/landing/pic3.jpg" alt="Picture3" translateX={["-6%", "6%"]} />
                    <ParallaxSectionImage src="/img/landing/pic4.jpg" alt="Picture4" translateX={["6%", "-6%"]} />
                    <ParallaxSectionImage src="/img/landing/pic5.jpg" alt="Picture5" translateX={["-6%", "6%"]} />
                    <ParallaxSectionImage src="/img/landing/pic6.jpg" alt="Picture6" translateX={["6%", "-6%"]} />
                    <ParallaxSectionImage src="/img/landing/pic7.jpg" alt="Picture7" translateX={["-6%", "6%"]} />
                    <ParallaxSectionImage src="/img/landing/pic8.jpg" alt="Picture8" translateX={["6%", "-6%"]} />
                    <ParallaxSectionImage src="/img/landing/pic9.jpg" alt="Picture9" translateX={["-6%", "6%"]} />

                    <Parallax
                        style={{
                            height: "100vh",
                        }}
                        className="section split-section"
                        speed={-10}
                    >
                        <img alt="Picture10Alitalia" src="/img/alitalia.jpg" style={{borderRadius: "8px"}} />
                        <span style={{ fontSize: "4rem", fontFamily: "inter", textAlign: "center" }}>
                            <span className="friends-gradient">Join the crew!</span>
                        </span>
                    </Parallax>
                    <Parallax
                        style={{
                            height: "100vh",
                        }}
                        className="vertical-section"
                        speed={20}
                    >
                        <span style={{ fontSize: "3rem", fontFamily: "inter", fontWeight: "normal", textAlign: "center", color: "#bbbbbb" }}>Made with love by Lory and Mattia</span>
                        <a href="./alitalia">Remembering Alitalia</a>
                    </Parallax>
                    <div
                        style={{
                            height: "100vh",
                        }}
                        className="section"
                    >
                        <Parallax speed={-20}>
                            <a className="donate-button" href="./docs" target="_blank">
                                Wiki
                            </a>
                        </Parallax>
                    </div>
                </div>
            </Layout>
        </ParallaxProvider>
    );
}