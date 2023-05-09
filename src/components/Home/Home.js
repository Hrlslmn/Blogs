import './Home.css'
import BlogList from '../Blogs/BlogList';
import useFetch from '../../useFetch';

const Home = () => {
    const{data:blogs, isPending} = useFetch('http://localhost:8000/blogs')
    return ( 
        <main>
            {isPending && <h3>loading...</h3>}
            {blogs && <BlogList blogs = {blogs} title="Messed Up Blog"/>}
        </main>
     );
}
 
export default Home;