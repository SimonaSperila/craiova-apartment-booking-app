import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import i18n from '../../i18n';
import ChristmasMarket from './ChristmasMarket.jsx';
import Header from '../../components/Header';
import { isChristmasMarketActive } from './christmasMarketConfig';

beforeEach(() => {
    i18n.changeLanguage('en');
});

afterEach(() => {
    vi.useRealTimers();
});

describe('Christmas Market page', () => {
    it('renders the hero, facts, both opening-programme venues and the four attractions', () => {
        const { container } = render(<ChristmasMarket />);

        expect(screen.getByRole('heading', { level: 1, name: 'The Land of the Elves' })).toBeInTheDocument();
        expect(screen.getByText('Open daily')).toBeInTheDocument();

        const program = container.querySelector('#program');
        expect(within(program).getByRole('heading', { name: 'Mihai Viteazul Square' })).toBeInTheDocument();
        expect(within(program).getByRole('heading', { name: 'Frații Buzești Square' })).toBeInTheDocument();
        expect(within(program).getByText('Fireworks')).toBeInTheDocument();

        expect(screen.getByText('A giant 9-metre Santa Claus')).toBeInTheDocument();
        expect(screen.getAllByRole('listitem').filter(li => li.querySelector('img'))).toHaveLength(4);
    });

    it('has the same structure in every supported language', () => {
        for (const lang of ['ro', 'bg', 'sr']) {
            i18n.changeLanguage(lang);
            const { container, unmount } = render(<ChristmasMarket />);
            expect(container.querySelectorAll('#program article')).toHaveLength(2);
            expect(container.textContent).not.toMatch(/christmasMarketPage\./);
            unmount();
        }
    });
});

describe('Christmas Market menu link', () => {
    it('is shown in the header while the market is running', () => {
        vi.useFakeTimers({ toFake: ['Date'] });
        vi.setSystemTime(new Date('2026-12-20T12:00:00'));

        render(<MemoryRouter><Header /></MemoryRouter>);

        const links = screen.getAllByRole('link', { name: 'Christmas Market' });
        expect(links[0]).toHaveAttribute('href', '/en/christmas-market');
        expect(links[0]).toHaveClass('nav-festive');
    });

    it('disappears automatically after the market has ended', () => {
        vi.useFakeTimers({ toFake: ['Date'] });
        vi.setSystemTime(new Date('2027-01-05T09:00:00'));

        expect(isChristmasMarketActive()).toBe(false);
        render(<MemoryRouter><Header /></MemoryRouter>);
        expect(screen.queryByRole('link', { name: 'Christmas Market' })).not.toBeInTheDocument();
    });
});
