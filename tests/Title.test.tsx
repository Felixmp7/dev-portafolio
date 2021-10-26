import { render } from '@testing-library/react';
import Title from '@components/widgets/Title';

describe('Title Tests', () => {
    it('Default title should be visible', () => {
        const defaultTitle = 'Título';
        const { getByText } = render(<Title />);
        const TitleElement = getByText(defaultTitle);

        expect(TitleElement).toBeVisible();
    });
    it('Custom title should be visible', () => {
        const title = 'Mi Trabajo';
        const { getByText } = render(<Title title={title} />);
        const TitleElement = getByText(title);

        expect(TitleElement).toBeVisible();
    });
});
