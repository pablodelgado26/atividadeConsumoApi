import styles from "./loading.module.css"

import { BeatLoader } from "react-spinners";

const Loading = () => { 
    return (
        <div className={styles.loadingContainer}>
            <BeatLoader color="#FF0000" size={18} />
        </div>
    )
}

export default Loading; 