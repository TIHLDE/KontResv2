'use client';

import { Button, type ButtonProps } from '@/components/ui/button';

import { cn } from '@/utils/cn';

import { stateMap } from '@/app/reservasjon/[id]/components/ReservationMeta';
import { type Reservation } from '@prisma/client';
import { type ColumnDef } from '@tanstack/react-table';
import { format } from 'date-fns';
import { nb } from 'date-fns/locale/nb';
import { ArrowUpDown } from 'lucide-react';

const dateSortingFn = (a: Reservation, b: Reservation) =>
    new Date(a.startTime) > new Date(b.startTime) ? 1 : -1;

export const HeaderButton = ({ className, ...props }: ButtonProps) => {
    return (
        <Button
            className={cn('px-0 hover:bg-transparent', className)}
            {...props}
        />
    );
};

export const reservationColumns: ColumnDef<Reservation>[] = [
    {
        accessorKey: 'authorId',
        accessorFn: (data) => {
            return (
                data?.author_detail?.first_name +
                ' ' +
                data?.author_detail?.last_name
            );
        },
        header: 'Bruker',
    },
    {
        accessorKey: 'bookable_item_detail',
        header: ({ column }) => {
            return (
                <HeaderButton
                    variant={'ghost'}
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() == 'asc')
                    }
                >
                    Gjenstand
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </HeaderButton>
            );
        },
        accessorFn: (data) => data?.bookable_item_detail?.name,
    },
    {
        accessorKey: 'startTime',
        header: ({ column }) => {
            return (
                <HeaderButton
                    variant={'ghost'}
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() == 'asc')
                    }
                >
                    Start
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </HeaderButton>
            );
        },
        accessorFn: (data) =>
            format(data.startTime, 'd. LLLL HH:mm', {
                locale: nb,
            }),
        sortingFn: (a, b) => dateSortingFn(a.original, b.original),
    },

    {
        accessorKey: 'endTime',
        header: ({ column }) => {
            return (
                <HeaderButton
                    variant={'ghost'}
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() == 'asc')
                    }
                >
                    Slutt
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </HeaderButton>
            );
        },
        accessorFn: (data) =>
            format(data.endTime, 'd. LLLL HH:mm', {
                locale: nb,
            }),
        sortingFn: (a, b) => dateSortingFn(a.original, b.original),
    },
    {
        accessorKey: 'status',
        accessorFn: (data) => stateMap[data.status],
        header: ({ column }) => {
            return (
                <HeaderButton
                    variant={'ghost'}
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() == 'asc')
                    }
                >
                    Status
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </HeaderButton>
            );
        },
    },
];
