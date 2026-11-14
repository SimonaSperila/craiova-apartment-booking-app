import { fireEvent, render, screen, within } from '@testing-library/react';
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
    it('renders the hero, facts, the daily programme and the four attractions', () => {
        const { container } = render(<ChristmasMarket />);

        expect(screen.getByRole('heading', { level: 1, name: 'The Land of the Elves' })).toBeInTheDocument();
        expect(screen.getByText('Open daily')).toBeInTheDocument();

        const program = container.querySelector('#program');
        expect(within(program).getByRole('heading', { level: 2, name: 'Daily programme' })).toBeInTheDocument();
        expect(within(program).getByRole('heading', { name: "Santa's Flying Sleigh Show" })).toBeInTheDocument();
        expect(within(program).getByRole('heading', { name: 'Party Bus' })).toBeInTheDocument();
        expect(within(program).getByText('22:30 – 22:45')).toBeInTheDocument();
        expect(within(program).getByText('4 lei / person')).toBeInTheDocument();
        expect(within(program).getAllByText('Promenada Mall')).toHaveLength(2);

        expect(screen.getByText('A giant 9-metre Santa Claus')).toBeInTheDocument();
        expect(screen.getAllByRole('listitem').filter(li => li.querySelector('img'))).toHaveLength(4);
    });

    it('shows the market map translated into the current language', () => {
        for (const lang of ['ro', 'en', 'bg', 'sr']) {
            i18n.changeLanguage(lang);
            const { unmount } = render(<ChristmasMarket />);
            const map = screen.getByAltText(/Shakespeare Central Apartment/);
            expect(map.getAttribute('src')).toContain(`christmas-market-map.${lang}.webp`);
            unmount();
        }
    });

    it('opens the map in the lightbox and closes it again', () => {
        render(<ChristmasMarket />);
        const map = screen.getByAltText(/Shakespeare Central Apartment/);

        fireEvent.click(map);
        const enlarged = screen.getAllByAltText(/Shakespeare Central Apartment/);
        expect(enlarged).toHaveLength(2);
        expect(enlarged[1]).toHaveAttribute('src', map.getAttribute('src'));

        fireEvent.click(screen.getByRole('button', { name: 'Close' }));
        expect(screen.getAllByAltText(/Shakespeare Central Apartment/)).toHaveLength(1);
    });

    it('has the same structure in every supported language', () => {
        for (const lang of ['ro', 'bg', 'sr']) {
            i18n.changeLanguage(lang);
            const { container, unmount } = render(<ChristmasMarket />);
            expect(container.querySelectorAll('#program article')).toHaveLength(7);
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
