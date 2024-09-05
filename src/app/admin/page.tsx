import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import FilteredTable from './components/FilteredTable/filtered-table';
import ItemsListSkeleton from './components/ItemsList/components/items-list-skeleton';
import ItemsList from './components/ItemsList/items-list';
import ReservationTableSkeleton from './components/reservation-table-skeleton';
import { Suspense } from 'react';

const Admin = async () => {
    // Get the user
    return (
        <div className="max-w-page mx-auto min-h-screen md:w-full">
            <Card>
                <div className="w-full p-3">
                    <Tabs defaultValue="reservations" className="w-full">
                        <TabsList className="w-full [&>*]:w-full">
                            <TabsTrigger value="reservations">
                                Reservasjoner
                            </TabsTrigger>
                            <TabsTrigger value="items">Gjenstander</TabsTrigger>
                        </TabsList>
                        <TabsContent value="reservations">
                            <Suspense
                                fallback={
                                    <ReservationTableSkeleton className="mt-10" />
                                }
                            >
                                <FilteredTable className="mt-5" />
                            </Suspense>
                        </TabsContent>
                        <TabsContent value="items">
                            <Suspense fallback={<ItemsListSkeleton />}>
                                <ItemsList />
                            </Suspense>
                        </TabsContent>
                    </Tabs>
                </div>
            </Card>
        </div>
    );
};

export default Admin;
