"use client";

import { use, useEffect, useRef, useState } from "react";

const [minWidth, maxWidth, defaultWidth] = [200, 500, 350];

export default function Sidebar() {
    const isResized = useRef(false);

    const [width, setWidth] = useState(
        parseInt(localStorage.getItem("sidebarWidth") || "") || defaultWidth, 
    );

    useEffect(() => {
        localStorage.setItem("sidebarWidth", width.toString());
      }, [width]);

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            if (!isResized.current) {
                return;
            }

            setWidth((previousWidth) => {
                const newWidth = previousWidth + e.movementX / 2;

                const isWdithInRange = newWidth >= minWidth && newWidth <= maxWidth;

                return isWdithInRange ? newWidth : previousWidth;
            })

            setWidth((previousWidth) => previousWidth + e.movementX /2);
        });

        window.addEventListener("mouseup", () => {
            isResized.current = false;
        });
    }, []);

    return (
        <div className="flex">
            <div className="bg-neutral-700" style={{ width: `${width / 16}rem` }}>
                Sidebar
            </div>

            {/* Handle */}
            <div 
                className="w-4 cursor-col-resize"
                onMouseDown={() => {
                    isResized.current = true;
                }}
            />
        </div>
    )
}