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
            <Layout title="Alitalia" description="In living memory of Alitalia">
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
                                    width: "42vw",
                                    height: "30vw",
                                }}
                                alt="Logo"
                                src="/img/alitalia.png"
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
                            In living memory of <span className="alitalia-gradient">Alitalia</span>
                        </span>
                    </div>

                    <ParallaxSectionImage src="/img/alitalia/pic1.jpg" alt="Picture1" translateX={["-6%", "6%"]} />
                    <ParallaxSectionImage src="/img/alitalia/pic2.jpg" alt="Picture2" translateX={["6%", "-6%"]} />
                    <ParallaxSectionImage src="/img/alitalia/pic3.jpg" alt="Picture3" translateX={["-6%", "6%"]} />
                    <ParallaxSectionImage src="/img/alitalia/pic4.jpg" alt="Picture4" translateX={["6%", "-6%"]} />
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