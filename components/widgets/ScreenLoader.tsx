import Layout from '@layouts/Layout';
import BarLoader from 'react-spinners/BarLoader';

const ScreenLoader = () => (
    <Layout extraClasses="h-screen bg-black flex items-center justify-center">
        <BarLoader color="#17c8f5" loading />
    </Layout>
);

export default ScreenLoader;
