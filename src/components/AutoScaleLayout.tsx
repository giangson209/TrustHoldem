import { useEffect, useRef } from "react";

export default function AutoScaleLayout({ children }) {
    const ref = useRef(null);

    useEffect(() => {
        function scaleUI() {
            if (window.innerWidth >= 768) {
                const designWidth = 1920;
                const designHeight = 900;

                const scaleX = window.innerWidth / designWidth;
                const scaleY = window.innerHeight / designHeight;
                let scale = Math.min(scaleX, scaleY);

                if (window.innerWidth >= 1800 && window.innerHeight >= 950) {
                    scale = 1;
                }

                if (ref.current) {
                    ref.current.style.transform = `scale(${scale})`;
                }
            }

        }

        scaleUI();
        window.addEventListener("resize", scaleUI);

        return () => {
            window.removeEventListener("resize", scaleUI);
        };
    }, []);

    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                overflowX: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
                paddingBottom: "12px",
            }}
        >
            <div
                ref={ref}
                style={{
                    width: "1920px",
                    transformOrigin: "center top",
                }}
            >
                {children}
            </div>
        </div>
    );
}