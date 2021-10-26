import works from 'static-data/works.json';

const useWork = () => {
    const getWork = (slug: string) => works.find((work) => work.slug === slug);

    const getEnterprises = () => works.map((work) => ({
        name: work.enterprise,
        slug: work.slug,
        logo: work.enterpriseIcon,
    }));

    return { works, getWork, getEnterprises };
};

export default useWork;
