import { render } from '@testing-library/react';
import SocialMedia from '@components/widgets/SocialMedia';

describe('Social Media Tests', () => {
    it('Should has 3 links', () => {
        const { getAllByRole } = render(<SocialMedia />);
        const links = getAllByRole('link');
        expect(links).toHaveLength(3);
    });

    it('Each link should has correct url', () => {
        const { getAllByRole } = render(<SocialMedia />);
        const links = getAllByRole('link');

        const githubLink = links[0];
        const instagramLink = links[1];
        const linkedinLink = links[2];

        expect(githubLink.getAttribute('href')).toBe('https://github.com/Felixmp7');
        expect(instagramLink.getAttribute('href')).toBe('https://www.instagram.com/felixmp_a/');
        expect(linkedinLink.getAttribute('href')).toBe('https://www.linkedin.com/in/felix-pacheco-30/');
    });
});
