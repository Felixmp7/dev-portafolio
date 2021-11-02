import { render } from '@testing-library/react';
import SocialMedia, { socialLinks } from '@components/widgets/SocialMedia';

describe('Social Media Tests', () => {
    it('Should has 3 links', () => {
        const { getAllByRole } = render(<SocialMedia />);
        const links = getAllByRole('link');
        expect(links).toHaveLength(3);
    });

    it('Each link should has correct url', () => {
        const { getAllByRole } = render(<SocialMedia />);
        const links = getAllByRole('link');

        links.forEach((link) => {
            const href = link.getAttribute('href');
            const found = socialLinks.find(({ url }) => href === url);

            expect(href).toBe(found?.url);
        });
    });
});
