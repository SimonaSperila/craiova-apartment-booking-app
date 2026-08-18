import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import '../../i18n';
import i18n from '../../i18n';
import Events from './Events';

const dayOffset = (days) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date.toISOString().slice(0, 10);
};

const sampleEvents = [
    { id: 1, title: 'Future Concert', category: 'concerte', event_date: dayOffset(5) },
    { id: 2, title: 'Future Play', category: 'teatru', event_date: dayOffset(10) },
    { id: 3, title: 'Old Show', category: 'spectacole', event_date: dayOffset(-5) },
];

beforeEach(() => {
    i18n.changeLanguage('en');
    vi.stubGlobal('fetch', vi.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve(sampleEvents),
        })
    ));
});

describe('Events page', () => {
    it('fetches events for the current language', async () => {
        render(<Events />);

        await waitFor(() => {
            expect(fetch).toHaveBeenCalledWith('http://localhost:3000/events?lang=en');
        });
    });

    it('only renders upcoming events, not past ones', async () => {
        render(<Events />);

        expect(await screen.findByText('Future Concert')).toBeInTheDocument();
        expect(await screen.findByText('Future Play')).toBeInTheDocument();
        expect(screen.queryByText('Old Show')).not.toBeInTheDocument();
    });

    it('only builds category tabs from upcoming events', async () => {
        render(<Events />);

        await screen.findByText('Future Concert');

        expect(screen.getByRole('button', { name: 'All' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Concerts' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Theatre' })).toBeInTheDocument();
        // "Old Show" is a past event, so its category should not get a tab.
        expect(screen.queryByRole('button', { name: 'Shows' })).not.toBeInTheDocument();
    });

    it('filters upcoming events when a category tab is clicked', async () => {
        const user = userEvent.setup();
        render(<Events />);

        await screen.findByText('Future Concert');
        expect(screen.getByText('Future Play')).toBeInTheDocument();

        await user.click(screen.getByRole('button', { name: 'Concerts' }));

        expect(screen.getByText('Future Concert')).toBeInTheDocument();
        expect(screen.queryByText('Future Play')).not.toBeInTheDocument();
    });

    it('shows the empty state when there are no upcoming events', async () => {
        vi.stubGlobal('fetch', vi.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve([
                    { id: 3, title: 'Old Show', category: 'spectacole', event_date: dayOffset(-5) },
                ]),
            })
        ));

        render(<Events />);

        expect(await screen.findByText('No events to show right now.')).toBeInTheDocument();
        expect(screen.queryByText('Old Show')).not.toBeInTheDocument();
    });
});
