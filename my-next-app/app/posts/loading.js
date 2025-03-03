import styles from './load.module.css'
export default function loading(){
    return(
    <>
    <div className={styles.loader}></div>
    <h1 style={{textAlign:'center'}}>Loading...</h1>
    </>
    );
}
