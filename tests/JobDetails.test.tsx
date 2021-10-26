import { render } from '@testing-library/react';
import JobDetails from '@components/widgets/JobDetails';

describe('JobDetails Tests', () => {
    it('JobDetail title should be visible and it has yellow text class', () => {
        const title = 'Location';
        const textClass = 'text-yellow-300';
        const { getByText } = render(<JobDetails title={title} />);

        const DivContainer = getByText(`${title} |`).closest('div');

        expect(DivContainer).toBeVisible();
        expect(DivContainer).toHaveClass(textClass);
    });

    it('JobDetail title and detail should be visible', () => {
        const title = 'Location';
        const detail = 'VE';
        const { getByText } = render(<JobDetails title={title} detail={detail} />);

        const Title = getByText(`${title} |`);
        const Detail = getByText(detail);

        expect(Title).toBeVisible();
        expect(Detail).toBeVisible();
    });
});
