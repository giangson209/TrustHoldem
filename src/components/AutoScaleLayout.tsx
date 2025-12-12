import { useEffect, useRef } from "react";

export default function AutoScaleLayout({ children }) {
    const ref = useRef(null);

    useEffect(() => {
        function scaleUI() {
            // Nếu màn hình nhỏ hơn 1024px: không scale
            if (window.innerWidth >= 768) {
                // Chỉ scale trên màn >= 1024px
                const designWidth = 1920;
                const designHeight = 900;

                const scaleX = window.innerWidth / designWidth;
                const scaleY = window.innerHeight / designHeight;

                let scale = Math.min(scaleX, scaleY);

                // Màn hình lớn: không scale
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
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
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