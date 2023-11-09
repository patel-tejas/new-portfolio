import React from 'react'
import styles from "@/app/layoutStyles.module.css"


const CursorEffect = () => {
    return (
        <>
            <div data-cursor-dot className={`${styles.cursor_dot} dark:bg-white bg-dark`}></div>
            <div className={`${styles.cursor_outline} dark:border-white border border-dark`} data-cursor-outline></div>
        </>
    )
}

export default CursorEffect