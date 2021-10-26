import { render } from '@testing-library/react';
import ToggleLanguage from '@components/widgets/ToggleLanguage';

describe('Social Media Tests', () => {
    it('Should render without crashing', () => {
        const { getByText } = render(<ToggleLanguage locale="en" pathname="/" />);
        const EnglishLink = getByText('EN');
        const SpanishLink = getByText('ES');

        expect(EnglishLink).toBeVisible();
        expect(SpanishLink).toBeVisible();
    });

    it('Should has two links', () => {
        const { getAllByRole } = render(<ToggleLanguage locale="en" pathname="/" />);
        const links = getAllByRole('link');
        expect(links).toHaveLength(2);
    });

    it('English link should has active classes', () => {
        const activeClasses = 'text-gray-600 font-semibold bg-white';
        const { getByText } = render(<ToggleLanguage locale="en" pathname="/" />);
        const EnglishLink = getByText('EN');
        const SpanishLink = getByText('ES');

        expect(EnglishLink).toHaveClass(activeClasses);
        expect(SpanishLink).not.toHaveClass(activeClasses);
    });

    it('Spanish link should has active classes', () => {
        const activeClasses = 'text-gray-600 font-semibold bg-white';
        const { getByText } = render(<ToggleLanguage locale="es" pathname="/" />);
        const EnglishLink = getByText('EN');
        const SpanishLink = getByText('ES');

        expect(SpanishLink).toHaveClass(activeClasses);
        expect(EnglishLink).not.toHaveClass(activeClasses);
    });
});
