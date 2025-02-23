import styles from './about.module.css'
async function about(){

    const response=await fetch('http://localhost:3000/api/hello', { cache: 'no-store' });
    const data =await response.json();

    return(
    <>
    <div className={styles.body} >
    <h1>This is the about page </h1>
    <h1>API response</h1>
    <p>{data.message}</p>
    </div>
    </>
    );
}

export default about;
