import works from 'static-data/works.json';

const useWork = () => {
    const getWork = (slug: string | string[] | undefined) => works.find((work) => work.slug === slug);

    return { works, getWork };
};

export default useWork;
